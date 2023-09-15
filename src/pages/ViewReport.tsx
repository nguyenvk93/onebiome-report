/* eslint-disable consistent-return */
import { pdf } from '@react-pdf/renderer';
import { useEffect, useMemo, useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { Link } from 'react-scroll';
import {
  Button, Col, Row, Spinner
} from 'reactstrap';
import { getMenu, getResultFFQ, getResultFFQExtraFood } from '../utility/ReportUtil';
import { PAGE_SITE } from '../constants/DefaultValues';
import { transformComparisonData, transformCompositionData, transformSummaryData } from '../utility/SampleUtil';
import ReportDataKidsAndMum from '../components/Pdf/viewReportKidsAndMum';
import PDFDocument from '../components/Pdf/PDFDocument';
import ArcFfq from '../components/Consumers/FFQ/ArcFfq';
import CompositionChartCanvas from '../components/Charts/CompositionChartCanvas';
import RenderPDF from '../components/Pdf/RenderPDF';
import Icons from '../components/Common/Icons';
import LoaderWithText from '../components/Loaders/LoaderWithText';
import BackAction from '../components/Common/BackAction';

interface Props {
  pageSite: number
  dataInput: any
  setData: React.Dispatch<React.SetStateAction<null>>
}

const ViewReport = ({ dataInput, pageSite, setData }: Props) => {
  const [dataRes, setDataRes] = useState<any>({});
  const [dataPdf, setDataPdf] = useState<any>(null);
  const [isRender, setIsRender] = useState<boolean>(true);
  const [chartRender, setChartRender] = useState(false);
  const [menuSidebar, setMenuSidebar] = useState([]);
  const [menuSidebarActive, setMenuSidebarActive] = useState(0);
  const [blobDocument, setBlobDocument] = useState<any>(null);

  // Get data for report
  useEffect(() => {
    const {
      compositionBacts,
      comparisonBacts,
      member,
      sample,
      limitMicrobes,
      limitVDMicrobes
      // metadata
    } = dataInput;
    const newSample: any = { ...sample };
    newSample.ffqChart = getResultFFQ({
      sample,
      role: member.role
    });
    if (newSample.kitId) {
      newSample.ffqChartExtraFood = getResultFFQExtraFood({
        data: newSample.ffq
      });
    }
    const response: any = {
      member,
      sample: newSample,
      compositionData: compositionBacts && compositionBacts.length > 0 ? transformCompositionData({
        data: compositionBacts
      }) : [],
      comparisonData: comparisonBacts && comparisonBacts.length > 0 ? transformComparisonData({
        comparisonBacts,
        member
      }) : [],
      summaryData: comparisonBacts && comparisonBacts.length > 0 && limitMicrobes && limitMicrobes.length > 0 ? transformSummaryData({
        comparisonData: comparisonBacts,
        summaryData: limitMicrobes,
        isVD: false
      }) : [],
      summaryVDData: comparisonBacts && comparisonBacts.length > 0 && limitVDMicrobes && limitVDMicrobes.length > 0 ? transformSummaryData({
        comparisonData: comparisonBacts,
        summaryData: limitVDMicrobes,
        isVD: true
      }) : [],
      // metadata: metadata && !isEmpty(metadata) ? metadata : null,
      isBabyWeaned: !!newSample.isWeaned,
      pageSite
    };
    // if (metadata && !isEmpty(metadata)) {
    //   response.metadata = metadata;
    // }
    setDataRes(response);
    setDataPdf(ReportDataKidsAndMum(response));
  }, [dataInput, pageSite]);

  // Update menu sidebar
  useEffect(() => {
    if (dataRes && dataPdf) {
      const { member, sample } = dataRes;
      const menu = getMenu({
        hideFact: pageSite === PAGE_SITE.HCP,
        tableContentPage: dataPdf.pageArray,
        role: member.role,
        isBabyWeaned: !!sample.isWeaned,
        haveFfqChart: !!sample.ffqChart
      });
      setMenuSidebarActive(menu[0].page);
      setMenuSidebar(menu);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataRes, dataPdf]);

  // Render blob document Pdf
  useEffect(() => {
    const renderBlob = async () => {
      if (chartRender && dataPdf) {
        const blob = await pdf(<PDFDocument pdfArray={dataPdf.pdfArray} />).toBlob();
        setBlobDocument(blob);
      }
    };
    renderBlob();
  }, [chartRender, dataPdf]);

  const downloadReport = () => {
    if (blobDocument) {
      const alink = document.createElement('a');
      alink.href = window.URL.createObjectURL(blobDocument);
      alink.download = `${dataRes.sample.xSampleId}_report.pdf`;
      alink.click();
    }
  };

  const arcFfqComponent = useMemo(() => {
    if (dataRes && dataRes.member && dataRes.sample && dataRes.sample.ffqChart) {
      return (
        <ArcFfq sample={dataRes.sample} />
      );
    }
  }, [dataRes]);

  const chartComponent = useMemo(() => {
    if (dataRes && dataRes.compositionData) {
      return (
        <div
          style={{
            visibility: 'hidden',
            overflow: 'hidden',
            height: '0'
          }}
        >
          <div
            style={{
              width: '1200px',
              height: '1200px'
            }}
          >
            <CompositionChartCanvas
              chartData={dataRes.compositionData}
              onAnimationChartComplete={(val) => {
                setChartRender(val);
              }}
              isExportPdf
              isExportWeb
            />
          </div>
        </div>
      );
    }
  }, [dataRes]);

  const pdfComponent = useMemo(() => {
    if (blobDocument) {
      return (
        <RenderPDF
          dataPdf={dataPdf}
          blobDocument={blobDocument}
          setIsRender={setIsRender}
        />
      );
    }
  }, [dataPdf, blobDocument]);

  return (
    <>
      {chartComponent}
      {arcFfqComponent}
      <div className={`report-page ${!dataRes || isRender ? 'h-100' : ''}`}>
        <Row className="f-header g-0">
          <Col xs={12} lg={2} className="f-left d-none d-lg-block">
            <BackAction onClick={() => {
              setData(null);
            }}
            />
          </Col>
          <Col xs={12} lg={10} className="f-right">
            <div className="f-title">
              <p>You are now viewing report</p>
            </div>
            <Button color="primary" disabled={!blobDocument} onClick={downloadReport} className="btn-download">
              {
                window.innerWidth >= 768 ? (
                  <>
                    {!blobDocument && <Spinner size="sm" className="me-2" />}
                    Download Report
                  </>
                ) : (
                  <>
                    {!blobDocument ? (<Spinner size="sm" />) : (<FiDownload size={25} />)}
                  </>
                )
              }
            </Button>
          </Col>
        </Row>
        <div className="sidebar">
          <div className="f-inner">
            <div className="f-menu-sidebar">
              {menuSidebar.map((item: any) => {
                const isActive = menuSidebarActive === item.page;
                return (
                  <Link
                    key={item.page}
                    to={`page-report-${item.page}`}
                    smooth={false}
                    className={`${!item.isSub ? 'f-link' : 'f-sub'} ${isActive ? 'active' : ''}`}
                    onClick={() => { return setMenuSidebarActive(item.page); }}
                    offset={-70}
                  >
                    {isActive && (
                      <span className="f-arrow">
                        <Icons type="Next" size={24} />
                      </span>
                    )}
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="content-inner">
          <div className="content-pdf">
            {
              (!dataRes || isRender) && (
                <LoaderWithText
                  styles={{
                    height: '100%',
                    background: '#fff'
                  }}
                  text="Rendering PDF content"
                />
              )
            }
            {pdfComponent}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewReport;

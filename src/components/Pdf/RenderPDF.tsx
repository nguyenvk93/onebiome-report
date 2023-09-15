import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFToImage } from 'react-pdf-to-image-light';
import { ToBase64 } from '../../helpers/CommonUtils';
import { DEVICE_TYPE } from '../../constants/DefaultValues';

// eslint-disable-next-line no-template-curly-in-string
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  dataPdf: any
  blobDocument: any
  setIsRender: React.Dispatch<React.SetStateAction<boolean>>
}

const RenderPDF = (props: Props) => {
  const {
    dataPdf, blobDocument, setIsRender
  } = props;
  const { pageArray } = dataPdf;
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [imagePdf, setImagePdf] = useState<any>(null);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const deviceType = window.innerWidth >= 1200 ? DEVICE_TYPE.PC : DEVICE_TYPE.TABLET;

  let scale = 1.5;
  switch (deviceType) {
    case DEVICE_TYPE.PC:
      scale = isSafari ? 2.5 : 4;
      break;
    case DEVICE_TYPE.TABLET:
      scale = 1.5;
      break;
    default:
      break;
  }

  useEffect(() => {
    async function fetchData() {
      if (blobDocument) {
        const pdf = await ToBase64(blobDocument);
        setPdfDoc(pdf);
        if (deviceType !== DEVICE_TYPE.PC) {
          PDFToImage({
            blob: pdf, // source pdf base64 string. need to be starting with the prefix "data:application/pdf;base64,"
            scale
          }).then((result: any) => {
            setImagePdf(result);
            setIsRender(false);
          });
        }
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blobDocument]);

  const onDocumentLoadSuccess = () => {
    setIsRender(false);
  };

  return (
    <>
      {
        deviceType !== DEVICE_TYPE.PC && imagePdf && imagePdf.map((item: any, idx: any) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={idx} className="react-pdf-row-img">
              <img src={item} alt="" />
            </div>
          );
        })
      }
      {
        deviceType === DEVICE_TYPE.PC && pdfDoc && pageArray.length > 0 && (
          <Document
            loading=""
            file={pdfDoc}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {
              pageArray.map((item: any, idx: any) => {
                return (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={idx + 1}
                    id={`page-report-${item.page}`}
                    className={
                      `report__page ${item.size === 'LANDSCAPE' ? 'is-landscape' : ''}`
                    }
                  >
                    <Page
                      loading=""
                      pageNumber={idx + 1}
                      scale={scale}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                  </div>
                );
              })
            }
          </Document>
        )
      }
    </>
  );
};

export default RenderPDF;

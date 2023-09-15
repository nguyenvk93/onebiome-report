/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Text, View } from '@react-pdf/renderer';
import { isNaN } from 'lodash';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface Props {
  hadData: boolean
  childStage: any
  isHcp?: boolean
  role: number
  isBabyWeaned?: boolean
  tableContentPage: any[]
  isCSection?: boolean
  babyMonths?: number
  haveFfqChart?: boolean
  getTableContent: any
  pageNumber: number
}

const TableContentPage = ({
  hadData,
  childStage,
  isHcp,
  role,
  isBabyWeaned,
  tableContentPage,
  isCSection,
  babyMonths,
  haveFfqChart,
  getTableContent,
  pageNumber
}: Props) => {
  const pageArr = tableContentPage.map((e: any) => { return e.page; });
  const CONTENT = getTableContent({
    hadData,
    childStage,
    isHcp,
    role,
    isBabyWeaned,
    tableContentPage: pageArr,
    isCSection,
    babyMonths,
    haveFfqChart
  });

  return (
    <View
      style={{
        width: A4_FULL_WIDTH_POINT,
        height: A4_FULL_HEIGHT_POINT,
        position: 'relative'
      }}
    >
      <View
        style={{
          marginLeft: 65,
          marginRight: 55
        }}
      >
        <Text
          style={{
            fontFamily: 'BlogScript',
            fontSize: 18,
            lineHeight: 1,
            color: '#009FE3',
            marginBottom: 40,
            marginTop: 93
          }}
        >TABLE OF CONTENTS
        </Text>
        {
          CONTENT.map((data: any) => {
            const pageNum = !isNaN(parseInt(data.pageLink, 10))
              ? parseInt(data.pageLink, 10)
              : 0;
            return (
              <View key={data.text}>
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  lineHeight: 1
                }}
                >
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    {
                      data.isSub && <View><Text>&emsp;&emsp;</Text></View>
                    }
                    <View>
                      <Link
                        src={`#page-${data.pageLink}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Text style={data.style}>{data.text}</Text>
                      </Link>
                    </View>
                  </View>
                  <View style={{
                    borderBottom: '2px dashed #c1c1c1',
                    flex: '1 1 auto',
                    height: 2,
                    margin: '0 4px 0 4px',
                    position: 'relative',
                    top: 6
                  }}
                  />
                  <Text style={{
                    ...data.style,
                    color: '#000',
                    fontWeight: 700,
                    width: 22,
                    position: 'relative',
                    top: 1
                  }}
                  >{`${pageNum < 10 ? `0${pageNum}` : pageNum}`}
                  </Text>
                </View>
                <Text>{'\n'}</Text>
              </View>
            );
          })
        }
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

TableContentPage.defaultProps = {
  isHcp: false,
  isBabyWeaned: null,
  isCSection: false,
  haveFfqChart: false,
  babyMonths: 0
};

export default TableContentPage;

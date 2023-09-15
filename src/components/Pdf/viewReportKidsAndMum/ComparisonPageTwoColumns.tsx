import {
  Text,
  View,
  Image
} from '@react-pdf/renderer';
import { A4_FULL_WIDTH_POINT, A4_FULL_HEIGHT_POINT } from '../../../constants/PdfConstants';
import { isMom, getAgeByMonth, getAgeChildMonthText } from '../../../utility/ProfileUtils';
import { getFootNoteData } from '../../../utility/ReportUtil';
import Header from './Components/Header';
import PageNumber from './Components/PageNumber';
import Results from './Components/Results';

interface Props {
  member: any
  comparedMommiesData: any
  pageNumber: number
  sample: any
}

const ComparisonPageTwoColumns = ({
  member, comparedMommiesData, pageNumber, sample
}: Props) => {
  const isMum = isMom({ role: member.role });
  const MIN_R = 1;
  const MAX_R = 18;
  const transformData = comparedMommiesData.map((item: any) => {
    const rMummyDb = MIN_R + item.avgDBValue * (MAX_R - MIN_R);
    const rYourMummy = MIN_R + item.yourValue * (MAX_R - MIN_R);
    const result = { ...item };
    result.rMummyDb = rMummyDb;
    result.rYourMummy = rYourMummy;
    return result;
  });
  return (
    <View style={{
      width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, backgroundColor: '#F7F1FF', position: 'relative'
    }}
    >
      <Image
        src="/img/pdf/footer_comparison.jpg"
        style={{
          width: A4_FULL_WIDTH_POINT,
          height: 204,
          bottom: 0,
          left: 0,
          position: 'absolute'
        }}
      />
      <Header title="Microbiome Composition | Comparison with Database" />
      <Results top={134} />
      <View style={{ paddingHorizontal: 50, paddingTop: 30 }}>
        <Text style={{
          fontFamily: 'BlogScript',
          color: '#582286',
          lineHeight: 1.2,
          fontSize: 16,
          marginBottom: 12
        }}
        >{`${isMum
          ? 'How does your microbiome compare with those of other mums?\n'.toUpperCase()
          : 'How does your child’s microbiome compare with those of other children?\n'.toUpperCase()}`}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 18,
          paddingBottom: 30,
          paddingLeft: 50,
          paddingRight: 60
        }}
      >
        {/* column 1 */}
        <View>
          {
            sample.monthTimePoint && (
              <View
                style={{
                  textAlign: 'center', display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', opacity: 0
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Gotham',
                    fontSize: 8,
                    lineHeight: 2,
                    textAlign: 'center',
                    color: '#161616'
                  }}
                >
                  {`Age: ${getAgeChildMonthText(sample.timePoint)}\n`}
                </Text>
              </View>
            )
          }
          <Text style={{
            fontFamily: 'Gotham',
            textAlign: 'left',
            fontWeight: 700,
            fontSize: 11,
            color: '#161616',
            lineHeight: 1.1,
            marginBottom: 8
          }}
          >
            {'Bacterial groups\n\n'}
          </Text>
          {
            transformData.map((data: any, index: number) => {
              const rb = Math.max(data.rMummyDb, data.rYourMummy);
              return (
                <View
                  key={data.fullName}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: index === 0 ? 0 : 18,
                    height: rb > 5 ? rb * 2 : 'auto'
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Gotham',
                      fontStyle: 'italic',
                      fontSize: 10,
                      textAlign: 'left',
                      color: '#161616'
                    }}
                  >
                    {data.name}
                  </Text>
                </View>
              );
            })
          }
        </View>
        {/* column 2 */}
        <View>
          {
            sample.monthTimePoint && (
              <View
                style={{
                  textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'row'
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Gotham',
                    fontSize: 8,
                    lineHeight: 2,
                    textAlign: 'center',
                    color: '#161616'
                  }}
                >
                  {`Age: ${getAgeChildMonthText(sample.timePoint)}\n`}
                </Text>
              </View>
            )
          }
          <Text style={{
            fontFamily: 'Gotham',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: 11,
            color: '#161616',
            lineHeight: 1.1,
            marginBottom: 8
          }}
          >
            {`${isMum ? 'Mum Microbiome*' : 'Children Microbiome'}\nDatabase${isMum ? '*' : ''}`}
          </Text>
          {
            transformData.map((data: any, index: number) => {
              const rb = Math.max(data.rMummyDb, data.rYourMummy);
              return (
                <View
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  style={{
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: 60 + data.rMummyDb * 2,
                      marginTop: index === 0 ? 0 : 18,
                      height: rb > 5 ? rb * 2 : 'auto'
                    }}
                  >
                    <View style={{
                      borderRadius: '50%',
                      width: data.rMummyDb * 2,
                      height: data.rMummyDb * 2,
                      backgroundColor: data.color,
                      marginRight: 26 - data.rMummyDb
                    }}
                    />
                    <Text
                      style={{
                        fontFamily: 'Gotham',
                        fontStyle: 'italic',
                        fontSize: 10,
                        textAlign: 'center',
                        color: '#161616'
                      }}
                    >
                      {`${parseFloat((data.avgDBValue * 100).toFixed(2))}%`}
                    </Text>
                  </View>
                </View>
              );
            })
          }
        </View>
        {/* column 3 */}
        <View>
          {
            sample.monthTimePoint && (
              <View
                style={{
                  textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'row'
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Gotham',
                    fontSize: 8,
                    lineHeight: 2,
                    textAlign: 'center',
                    color: '#161616'
                  }}
                >
                  {`Age: ${getAgeByMonth(sample.monthTimePoint)}\n`}
                </Text>
              </View>
            )
          }
          <Text style={{
            fontFamily: 'Gotham',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: 11,
            color: '#161616',
            lineHeight: 1.1,
            marginBottom: 8
          }}
          >
            {`${isMum ? 'Your Microbiome' : "Your Child's Microbiome"}\n\n`}
          </Text>
          {
            transformData.map((data: any, index: number) => {
              const rb = Math.max(data.rMummyDb, data.rYourMummy);
              return (
                <View
                  key={data.rYourMummy}
                  style={{
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: 60 + data.rYourMummy * 2,
                      marginTop: index === 0 ? 0 : 18,
                      height: rb > 5 ? rb * 2 : 'auto'
                    }}
                  >
                    <View style={{
                      borderRadius: '50%',
                      width: data.rYourMummy * 2,
                      height: data.rYourMummy * 2,
                      backgroundColor: data.color,
                      marginRight: 26 - data.rYourMummy
                    }}
                    />
                    <Text
                      style={{
                        fontFamily: 'Gotham',
                        fontStyle: 'italic',
                        fontSize: 10,
                        textAlign: 'center',
                        color: '#161616'
                      }}
                    >
                      {`${parseFloat((data.yourValue * 100).toFixed(2))}%`}
                    </Text>
                  </View>
                </View>
              );
            })
          }
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          width: A4_FULL_WIDTH_POINT,
          paddingRight: 35,
          paddingLeft: 50,
          bottom: 10
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            width: 385
          }}
        >
          {getFootNoteData({ member, sample })}
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Gotham',
              fontSize: 10,
              color: '#161616',
              fontWeight: 700,
              marginBottom: 8
            }}
          >
            Abundance
          </Text>
          {/* 0% */}
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                borderRadius: '50%',
                width: 2,
                height: 2,
                backgroundColor: 'transparent',
                borderColor: '#afafaf',
                borderWidth: 1,
                marginBottom: 2,
                marginRight: 21,
                marginLeft: 17
              }}
            />
            <Text
              style={{
                fontFamily: 'Gotham',
                fontSize: 10,
                color: '#afafaf'
              }}
            >
              0%
            </Text>
          </View>
          {/* 25% */}
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                borderRadius: '50%',
                width: 9,
                height: 9,
                backgroundColor: 'transparent',
                borderColor: '#afafaf',
                borderWidth: 1,
                marginBottom: 2,
                marginRight: 16.5,
                marginLeft: 13.5
              }}
            />
            <Text
              style={{
                fontFamily: 'Gotham',
                fontSize: 10,
                color: '#afafaf'
              }}
            >
              25%
            </Text>
          </View>
          {/* 50% */}
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                borderRadius: '50%',
                width: 18,
                height: 18,
                backgroundColor: 'transparent',
                borderColor: '#afafaf',
                borderWidth: 1,
                marginBottom: 2,
                marginRight: 12,
                marginLeft: 9
              }}
            />
            <Text
              style={{
                fontFamily: 'Gotham',
                fontSize: 10,
                color: '#afafaf'
              }}
            >
              50%
            </Text>
          </View>
          {/* 75% */}
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                borderRadius: '50%',
                width: 27,
                height: 27,
                backgroundColor: 'transparent',
                borderColor: '#afafaf',
                borderWidth: 1,
                marginBottom: 2,
                marginRight: 7.5,
                marginLeft: 4.5
              }}
            />
            <Text
              style={{
                fontFamily: 'Gotham',
                fontSize: 10,
                color: '#afafaf'
              }}
            >
              75%
            </Text>
          </View>
          {/* 100% */}
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                borderRadius: '50%',
                width: 36,
                height: 36,
                backgroundColor: 'transparent',
                borderColor: '#afafaf',
                borderWidth: 1,
                marginBottom: 2,
                marginRight: 3
              }}
            />
            <Text
              style={{
                fontFamily: 'Gotham',
                fontSize: 10,
                color: '#afafaf'
              }}
            >
              100%
            </Text>
          </View>
        </View>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default ComparisonPageTwoColumns;

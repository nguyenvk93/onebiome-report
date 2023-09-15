import {
  Text,
  View,
  Image
} from '@react-pdf/renderer';
import { DELIVERY_MODE, TIME_POINT } from '../../../constants/DefaultValues';
import { A4_FULL_WIDTH_POINT, A4_FULL_HEIGHT_POINT } from '../../../constants/PdfConstants';
import { getFootNoteData } from '../../../utility/ReportUtil';
import Header from './Components/Header';
import PageNumber from './Components/PageNumber';
import Results from './Components/Results';
import { getAgeByMonth, getAgeChildMonthText } from '../../../utility/ProfileUtils';

interface Props {
  member: any
  comparedMommiesData: any
  pageNumber: number
  sample: any
}

const ComparisonPageThreeColumns = ({
  member, comparedMommiesData, pageNumber, sample
}: Props) => {
  const MIN_R = 1;
  const MAX_R = 18;
  const transformData = comparedMommiesData.map((item: any) => {
    const rMummyDb = MIN_R + item.avgDBValue * (MAX_R - MIN_R);
    const rYourMummy = MIN_R + item.yourValue * (MAX_R - MIN_R);
    const rAvgVD = MIN_R + item.avgVDValue * (MAX_R - MIN_R);
    const result = { ...item };
    result.rMummyDb = rMummyDb;
    result.rYourMummy = rYourMummy;
    result.rAvgVD = rAvgVD;
    return result;
  });

  const isOneYearAbove = (sample.monthTimePoint && sample.monthTimePoint > 12)
    || (sample.timePoint && sample.timePoint === TIME_POINT.Y1A);

  const cutLongText = (text: string) => {
    const maxLength = 25;
    let newText = text;

    if (text.length > maxLength) {
      newText = `${text.slice(0, maxLength)} ${text.slice(maxLength)}`;
    }

    return newText;
  };

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
        >{'HOW DOES YOUR CHILD’S MICROBIOME COMPARE WITH THOSE OF\nOTHER CHILDREN?\n'}
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
            marginBottom: member.deliveryMode === DELIVERY_MODE.VD_IAP && !isOneYearAbove ? 2 : 7.3
          }}
          >{`Bacterial groups\n\n\n${member.deliveryMode === DELIVERY_MODE.VD_IAP && !isOneYearAbove ? '\n\n' : ''}`}
          </Text>
          {
            transformData.map((data: any, index: number) => {
              const rb = Math.max(data.rAvgVD, data.rMummyDb, data.rYourMummy);
              return (
                <View
                  key={data.fullName + Math.random()}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: index === 0 ? 0 : 18,
                    height: rb > 5 ? rb * 2 : 'auto',
                    width: 152
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
                    {cutLongText(data.name)}
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
            fontSize: 9,
            color: '#161616',
            lineHeight: 1.1,
            marginBottom: 13
          }}
          >{`Children Microbiome\nDatabase\n(Vaginal birth)${member.deliveryMode === DELIVERY_MODE.VD_IAP && !isOneYearAbove ? '\n\n\n' : ''}`}
          </Text>
          {
            transformData.map((data: any, index: number) => {
              const rb = Math.max(data.rAvgVD, data.rMummyDb, data.rYourMummy);
              return (
                <View
                  key={data.rAvgVD + Math.random()}
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
                      width: 60 + data.rAvgVD * 2,
                      marginTop: index === 0 ? 0 : 18,
                      height: rb > 5 ? rb * 2 : 'auto'
                    }}
                  >
                    <View style={{
                      borderRadius: '50%',
                      width: data.rAvgVD * 2,
                      height: data.rAvgVD * 2,
                      backgroundColor: data.color,
                      marginRight: 26 - data.rAvgVD
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
                      {`${parseFloat((data.avgVDValue * 100).toFixed(2))}%`}
                    </Text>
                  </View>
                </View>
              );
            })
          }
        </View>
        {/* column 3 */}
        {
          isOneYearAbove ? (<></>)
            : (
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
                  fontSize: 9,
                  color: '#161616',
                  lineHeight: 1.1,
                  marginBottom: 13
                }}
                >{`Children Microbiome\nDatabase\n${member.deliveryMode === DELIVERY_MODE.VD_IAP
                  ? '(Vaginal birth with'
                  : '(C-section birth)'}`}
                  {`${member.deliveryMode === DELIVERY_MODE.VD_IAP ? '\nintrapartum antibiotic\nprophylaxis*)' : ''}`}
                </Text>
                {
                  transformData.map((data: any, index: number) => {
                    const rb = Math.max(data.rAvgVD, data.rMummyDb, data.rYourMummy);
                    return (
                      <View
                        key={data.rMummyDb + Math.random()}
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
            )
        }
        {/* column 4 */}
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <Text style={{
              fontFamily: 'Gotham',
              fontWeight: 700,
              fontSize: 9,
              color: '#161616',
              lineHeight: 1.1,
              marginBottom: 13
            }}
            >{`Your Child's\nMicrobiome\n\n${member.deliveryMode === DELIVERY_MODE.VD_IAP && !isOneYearAbove ? '\n\n' : ''}`}
            </Text>
          </View>
          {
            transformData.map((data: any, index: number) => {
              const rb = Math.max(data.rAvgVD, data.rMummyDb, data.rYourMummy);
              return (
                <View
                  key={data.rYourMummy + Math.random()}
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
            width: 418
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

export default ComparisonPageThreeColumns;

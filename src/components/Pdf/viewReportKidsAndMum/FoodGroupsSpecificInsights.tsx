/* eslint-disable react/no-array-index-key */
import {
  Text, View, Image, Page
} from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import { USER_SAMPLE_ROLES } from '../../../constants/DefaultValues';
import {
  A4_FULL_WIDTH_POINT, A4_FULL_HEIGHT_POINT, PORTRAIT, PAGE_STYLE, PDF_PAGE_INDEX
} from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface Props {
  pageData: any[]
  foodGroup: any[]
  role: number
  babyMonths: number
  pageNumber: number
}

const FoodGroupsSpecificInsights = ({
  pageData,
  foodGroup,
  role,
  babyMonths,
  pageNumber
}: Props) => {
  const isBaby = role === USER_SAMPLE_ROLES.BABY;
  const returnImage = async (idx: number) => {
    const optionCanvas = {
      backgroundColor: null,
      windowWidth: 115,
      windowHeight: 115,
      scrollX: 0,
      scrollY: 0
    };
    const chart: any = document.getElementById(`line-percent-${idx}`);
    const images = await Promise.all([html2canvas(chart, optionCanvas)]);
    return images[0].toDataURL('image/png');
  };

  const content: any = [];
  const fArr: any = {};
  const foodGroupArr: any = [];
  const foodPercentArray: any = {};
  let sumRow = 0;

  foodGroup.forEach((d: any) => {
    if (fArr[d.name]) {
      fArr[d.name].rowNumber += d.rowNumber;
      fArr[d.name].text.push(d.text);
    } else {
      fArr[d.name] = {
        rowNumber: d.rowNumber,
        text: [d.text],
        groupCode: d.groupCode,
        value: d.value,
        color: d.color,
        name: d.name
      };
    }
  });
  // eslint-disable-next-line no-restricted-syntax
  for (const data of Object.entries(fArr)) {
    const [, item]: any = data;
    if (item.rowNumber < 11) item.rowNumber = 11;
    const idx = Math.floor((sumRow + item.rowNumber) / 42);
    const {
      name, value, color, groupCode
    } = item;
    if (!foodGroupArr.some((x: any) => { return x.name.includes(name); })) {
      foodGroupArr.push({
        name,
        groupCode
      });
    }
    foodPercentArray[name] = { value, color };
    if (content[idx]) {
      if (content[idx][name]) {
        content[idx][name].push(item.text);
        sumRow += item.rowNumber;
      } else {
        content[idx][name] = [item.text];
        sumRow += item.rowNumber;
      }
    } else if (!content[idx]) {
      content[idx] = {};
      content[idx][name] = [item.text];
      sumRow += item.rowNumber;
    }
  }

  return (
    content.length > 0
      ? (
        content.map((item: any, key: number) => {
          const foodObj = Object.keys(item);
          return (
            <Page size={PORTRAIT} style={PAGE_STYLE} key={key} id={`page-${1 + pageData.indexOf(PDF_PAGE_INDEX.FOOD_GROUPS_INSUFFICIENT)}`}>
              <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
                <Image
                  src="/img/pdf/ffq/header_ffq.png"
                  style={{
                    width: A4_FULL_WIDTH_POINT,
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
                {
                  key === 0
                    ? (
                      <View
                        style={{
                          marginHorizontal: 30,
                          marginTop: 31,
                          marginBottom: 27
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: '#009fe3',
                            textAlign: 'center',
                            lineHeight: 1.75
                          }}
                        >
                          {`Find out how ${isBaby ? "your child's" : 'your'} dietary intake compares with the Health Promotion Board\nrecommendations for food groups.`}
                        </Text>
                      </View>
                    )
                    : <View><Text>{'\n\n'}</Text></View>
                }
                {
                  foodGroupArr.length > 0
                    ? foodGroupArr.map((arr: any) => {
                      return (
                        item[arr.name]
                          ? (
                            <View key={arr.groupCode}>
                              <View
                                style={{
                                  marginHorizontal: 88,
                                  borderBottomWidth: arr.name === foodObj[foodObj.length - 1] ? 0 : 4,
                                  borderBottomColor: '#efefef'
                                }}
                              >
                                <View
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginHorizontal: -56
                                  }}
                                >
                                  <View
                                    style={{
                                      position: 'relative',
                                      minWidth: 115
                                    }}
                                  >
                                    <Image
                                      src={returnImage(arr.groupCode)}
                                      style={{
                                        width: 115,
                                        minHeight: 115
                                      }}
                                    />
                                    <View>
                                      <View
                                        style={{
                                          position: 'relative',
                                          marginTop: 4,
                                          display: 'flex',
                                          flexDirection: 'row',
                                          justifyContent: 'center'
                                        }}
                                      >
                                        <Text
                                          style={{
                                            width: 'auto',
                                            fontSize: 35,
                                            fontWeight: 700,
                                            color: foodPercentArray[arr.name].color,
                                            fontFamily: 'Gotham'
                                          }}
                                        >
                                          {foodPercentArray[arr.name].value}
                                        </Text>
                                        <Text
                                          style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            lineHeight: 1,
                                            marginTop: 2,
                                            color: '#CCCCCC'
                                          }}
                                        >%
                                        </Text>
                                      </View>
                                      <View
                                        style={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          justifyContent: 'center'
                                        }}
                                      >
                                        <Text
                                          style={{
                                            fontSize: 12.5,
                                            marginTop: 3,
                                            textAlign: 'center',
                                            fontWeight: 700,
                                            color: foodPercentArray[arr.name].color
                                          }}
                                        >
                                          {
                                            isBaby && babyMonths < 24 && arr.name === 'Whole grains'
                                              ? 'Grains'
                                              : arr.name
                                          }
                                          {'\n\n'}
                                        </Text>
                                      </View>
                                    </View>
                                  </View>
                                  <View style={{ paddingLeft: 25 }}>
                                    {
                                      item[arr.name].map((text: any, id: number) => {
                                        return (
                                          <Text
                                            key={id}
                                            style={{
                                              fontSize: 13,
                                              lineHeight: 1.3,
                                              maxWidth: 386
                                            }}
                                          >{text.map((t: any, i: number) => { return <Text key={i}>{t}</Text>; })}
                                          </Text>
                                        );
                                      })
                                    }
                                  </View>
                                </View>
                              </View>
                              {
                                arr.name !== foodObj[foodObj.length - 1] && <Text>{'\n'}</Text>
                              }
                            </View>
                          )
                          : null
                      );
                    })
                    : null
                }
                <PageNumber pageNumber={content.length > 1 ? pageNumber - 1 + key : pageNumber} />
              </View>
            </Page>
          );
        })
      )
      : (<></>)
  );
};

export default FoodGroupsSpecificInsights;

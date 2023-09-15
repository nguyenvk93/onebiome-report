/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Image, Page, StyleSheet, Text, View, Link
} from '@react-pdf/renderer';
import { FOOD_CATEGORY_CODE, USE_AGES } from '../../../constants/DefaultValues';
import {
  A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT, PAGE_STYLE, PORTRAIT
} from '../../../constants/PdfConstants';
import { FIELD_NAME, FOOD_LIST } from '../../../helpers/FFQUtils';
import {
  FFQ_CHART, FOOD_GROUP_STYLE, INGREDIENT_CATEGORY_BABY, FOOD_LIST as FOOD_LIST_FFQ_CHART
} from '../../../utility/FfqUtil';
import PageNumber from './Components/PageNumber';

const stylesPage = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: 'BlogScript',
    color: '#009fe3',
    textAlign: 'center',
    lineHeight: 1.85
  },
  text: {
    fontSize: 12,
    lineHeight: 1.3,
    marginHorizontal: 65
  },
  titleTable: {
    fontSize: 14,
    lineHeight: 1.14,
    fontWeight: 700,
    margin: '0 65 8 65'
  },
  table: {
    backgroundColor: '#fff',
    border: '1px solid #C1E1F2',
    borderRadius: 8,
    width: 360,
    marginHorizontal: 'auto',
    marginBottom: 18
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
    // alignItems: 'center'
  },
  cell: {
    borderTop: '1px solid #C1E1F2'
  },
  cellLeft: {
    width: 110,
    borderRight: '1px solid #C1E1F2'
  },
  cellRight: {
    width: 250
  },
  header: {
    height: 35
  },
  headerCell: {
    backgroundColor: '#009FE3',
    borderTop: 'none'
  },
  headerText: {
    fontSize: 10,
    lineHeight: 1,
    fontWeight: 700,
    color: '#ffffff',
    marginVertical: 'auto',
    textAlign: 'center'
  },
  cellBodyLeft: {
    fontSize: 10,
    lineHeight: 1,
    fontWeight: 700,
    padding: '12 10',
    textAlign: 'center'
  },
  cellBodyRight: {
    padding: '12 10',
    fontSize: 8,
    lineHeight: 1.25
  }
});

const getFoodGroupList = (data: any, images: any) => {
  const values = INGREDIENT_CATEGORY_BABY.map((item) => {
    const arrayListFood: any = [];
    const styles: any = FOOD_GROUP_STYLE.find((f) => { return f.code === item.groupCode; });
    const img = images.find((f: any) => { return f.code === item.groupCode; });
    const groupFood = FFQ_CHART.filter((f: any) => { return item.INGREDIENT.some((s) => { return s.code === f.code; }); });

    // Find list name food with frequency is not 1
    if (groupFood.length > 0) {
      const dataFilter = data.filter(
        (i: any) => {
          return groupFood.some((s) => { return s.list.includes(i.foodCode); })
            && i.frequency !== 1;
        }
      );
      dataFilter.forEach((i: any) => {
        const fieldName: any = FIELD_NAME.find((f) => { return i.foodCode === f.code; });
        arrayListFood.push(
          fieldName.nameReport ? fieldName.nameReport : fieldName.name
        );
      });
    }

    return {
      name: styles.name,
      color: styles.color,
      background: styles.background,
      listFood: arrayListFood,
      img
    };
  });

  return values;
};

const getExtraFoodList = (data: any, images: any, style: any) => {
  const arrayExtraFood = [FOOD_LIST_FFQ_CHART.PROCESSED, FOOD_LIST_FFQ_CHART.FERMENTED];
  const arrayExtraFoodPlus = [FOOD_CATEGORY_CODE.SUPPLEMENTS];

  const valuesExtraFood = arrayExtraFood.map((item) => {
    const arrayListFood: any = [];
    const styles: any = style.find((f: any) => { return f.code === item; });
    const img = images.find((f: any) => { return f.code === item; });
    const groupFood = FFQ_CHART.find((f) => { return f.code === item; });

    // Find list name food with frequency is not 1
    if (groupFood) {
      const dataFilter = data.filter(
        (i: any) => { return groupFood.list.includes(i.foodCode) && i.frequency !== 1; }
      );
      dataFilter.forEach((i: any) => {
        const fieldName: any = FIELD_NAME.find((f) => { return i.foodCode === f.code; });
        arrayListFood.push(
          fieldName.nameReport ? fieldName.nameReport : fieldName.name
        );
      });
    }

    return {
      name: styles.name,
      color: styles.color,
      background: styles.background,
      listFood: arrayListFood,
      img
    };
  });

  const valuesExtraFoodPlus = arrayExtraFoodPlus.map((item) => {
    const arrayListFood: any = [];
    const styles: any = style.find((f: any) => { return f.code === item; });
    const img = images.find((f: any) => { return f.code === item; });
    const groupFood: any = FOOD_LIST.find((f) => { return f.categoryCode === item; });

    // Find list name food with frequency is not 1
    if (groupFood) {
      const dataFilter = data.filter(
        (i: any) => { return groupFood.foods.includes(i.foodCode) && i.frequency !== 1; }
      );
      dataFilter.forEach((i: any) => {
        const fieldName: any = FIELD_NAME.find((f) => { return i.foodCode === f.code; });
        arrayListFood.push(
          fieldName.nameReport ? fieldName.nameReport : fieldName.name
        );
      });
    }

    return {
      name: styles.name,
      color: styles.color,
      background: styles.background,
      listFood: arrayListFood,
      img
    };
  });

  const values = valuesExtraFood.concat(valuesExtraFoodPlus);
  return values;
};

interface Props {
  ffq: any,
  pageArray: any,
  pageNumber: number
}

const ResultsFoodForFFQ = ({
  ffq, pageArray, pageNumber
}: Props) => {
  const extraFoodStyles = [
    {
      code: FOOD_LIST_FFQ_CHART.PROCESSED,
      name: 'Processed foods',
      color: '#7B61FF',
      background: '#EFEBFF'
    },
    {
      code: FOOD_LIST_FFQ_CHART.FERMENTED,
      name: 'Fermented foods',
      color: '#BE3333',
      background: '#FEE6E6'
    },
    {
      code: FOOD_CATEGORY_CODE.SUPPLEMENTS,
      name: 'Supplements',
      color: '#4884F2',
      background: '#E0EBFF'
    }
  ];

  const IMG_TABLE = [
    {
      code: 1,
      image: '/img/pdf/ffq/list-whole-grains.png',
      width: 76,
      height: 28
    },
    {
      code: 2,
      image: '/img/pdf/ffq/list-fruits.png',
      width: 76,
      height: 35
    },
    {
      code: 3,
      image: '/img/pdf/ffq/list-vegetables.png',
      width: 76,
      height: 33
    },
    {
      code: 4,
      image: '/img/pdf/ffq/list-meat-and-others.png',
      width: 76,
      height: 22
    },
    {
      code: FOOD_LIST_FFQ_CHART.PROCESSED,
      image: '/img/pdf/ffq/list-processed-food.png',
      width: 76,
      height: 26
    },
    {
      code: FOOD_LIST_FFQ_CHART.FERMENTED,
      image: '/img/pdf/ffq/list-fermented-food.png',
      width: 76,
      height: 35
    },
    {
      code: FOOD_CATEGORY_CODE.SUPPLEMENTS,
      image: '/img/pdf/ffq/list-supplements.png',
      width: 76,
      height: 32
    }
  ];

  const arrayFoodGroup = getFoodGroupList(ffq, IMG_TABLE);
  const arrayExtraFood = getExtraFoodList(ffq, IMG_TABLE, extraFoodStyles);

  return (
    <>
      {/* Food Group */}
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length - 1}`}>
        <View
          style={{
            width: A4_FULL_WIDTH_POINT,
            height: A4_FULL_HEIGHT_POINT,
            position: 'relative'
          }}
        >
          <Image
            src="/img/pdf/ffq/header_ffq_2.png"
            style={{
              width: A4_FULL_WIDTH_POINT,
              height: 256,
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
          <Text style={{ ...stylesPage.title, margin: '50 40 5 40' }}>
            {'RESULTS FROM YOUR CHILD’S FOOD\nFREQUENCY QUESTIONNAIRE'}
          </Text>
          <Text style={{ ...stylesPage.text }}>
            Dear parents,
            {'\n\n'}
            Thank you for completing the food frequency questionnaire (FFQ). In the next few pages, we will provide you with a description of your child’s eating pattern based on the answers you provided in the FFQ.
            {'\n\n'}
            The OneBiome science team is building a database that will be used to generate personalised nutrition recommendations powered by microbiome science. In the future, we aim to provide you with more information on choosing the best foods for your child’s needs, by correlating different eating patterns and their influence on microbiome profiles.
            {'\n\n'}
            Thank you for your support,
            {'\n\n'}
            The OneBiome team
            {'\n\n'}
          </Text>
          {/* Table */}
          <Text style={{ ...stylesPage.titleTable }}>
            Refer to the table below to see your child’s dietary intake.
          </Text>
          <View style={stylesPage.table}>
            {/* Header */}
            <View style={[stylesPage.row, stylesPage.header]}>
              <View style={{
                ...stylesPage.cell,
                ...stylesPage.cellLeft,
                ...stylesPage.headerCell,
                borderTopLeftRadius: 7
              }}
              >
                <Text style={[stylesPage.headerText]}>Food group</Text>
              </View>
              <View style={{
                ...stylesPage.cell,
                ...stylesPage.cellRight,
                ...stylesPage.headerCell,
                borderTopRightRadius: 7
              }}
              >
                <Text style={[stylesPage.headerText]}>What your child has consumed</Text>
              </View>
            </View>
            {/* Body */}
            {
              arrayFoodGroup.map((item, index) => {
                const listFood = item.listFood.length > 0 ? item.listFood.join(', ') : 'NA';
                return (
                  <View style={[stylesPage.row]} key={item.name}>
                    <View style={{
                      ...stylesPage.cell,
                      ...stylesPage.cellLeft,
                      ...stylesPage.cellBodyLeft,
                      backgroundColor: item.background,
                      borderBottomLeftRadius: index === arrayFoodGroup.length - 1 ? 7 : 0
                    }}
                    >
                      <View style={{ marginVertical: 'auto' }}>
                        <Text style={{ marginBottom: 4, color: item.color }}>{item.name}</Text>
                        <Image
                          src={item.img.image}
                          style={{
                            width: item.img.width,
                            height: item.img.height,
                            marginHorizontal: 'auto'
                          }}
                        />
                      </View>
                    </View>
                    <View style={[
                      stylesPage.cell,
                      stylesPage.cellRight,
                      stylesPage.cellBodyRight
                    ]}
                    >
                      <Text style={{ marginVertical: 'auto' }}>{listFood}</Text>
                    </View>
                  </View>
                );
              })
            }
          </View>
        </View>
      </Page>

      {/* Extra Food */}
      <Page size={PORTRAIT} style={PAGE_STYLE} id={`page-${pageArray.length}`}>
        <View
          style={{
            width: A4_FULL_WIDTH_POINT,
            height: A4_FULL_HEIGHT_POINT,
            position: 'relative',
            paddingTop: 40
          }}
        >
          <Image
            src="/img/pdf/ffq/header_ffq_2.png"
            style={{
              width: A4_FULL_WIDTH_POINT,
              height: 256,
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
          {/* Table */}
          <Text style={{ ...stylesPage.titleTable }}>
            Read on to see your child’s intake for other food categories.
          </Text>
          <View style={stylesPage.table}>
            {/* Header */}
            <View style={[stylesPage.row, stylesPage.header]}>
              <View style={{
                ...stylesPage.cell,
                ...stylesPage.cellLeft,
                ...stylesPage.headerCell,
                borderTopLeftRadius: 7
              }}
              >
                <Text style={[stylesPage.headerText]}>Food group</Text>
              </View>
              <View style={{
                ...stylesPage.cell,
                ...stylesPage.cellRight,
                ...stylesPage.headerCell,
                borderTopRightRadius: 7
              }}
              >
                <Text style={[stylesPage.headerText]}>What your child has consumed</Text>
              </View>
            </View>
            {/* Body */}
            {
              arrayExtraFood.map((item, index) => {
                const listFood = item.listFood.length > 0 ? item.listFood.join(', ') : 'NA';
                return (
                  <View style={[stylesPage.row]} key={item.name}>
                    <View style={{
                      ...stylesPage.cell,
                      ...stylesPage.cellLeft,
                      ...stylesPage.cellBodyLeft,
                      backgroundColor: item.background,
                      borderBottomLeftRadius: index === arrayExtraFood.length - 1 ? 7 : 0
                    }}
                    >
                      <View style={{ marginVertical: 'auto' }}>
                        <Text style={{ marginBottom: 4, color: item.color }}>{item.name}</Text>
                        <Image
                          src={item.img.image}
                          style={{
                            width: item.img.width,
                            height: item.img.height,
                            marginHorizontal: 'auto'
                          }}
                        />
                      </View>
                    </View>
                    <View style={[
                      stylesPage.cell,
                      stylesPage.cellRight,
                      stylesPage.cellBodyRight
                    ]}
                    >
                      <Text style={{ marginVertical: 'auto' }}>{listFood}</Text>
                    </View>
                  </View>
                );
              })
            }
          </View>
          <Text style={{ ...stylesPage.text }}>
            If your child is not gaining weight, refuses to eat or eats very little, or if you are worried that your child has feeding difficulties due to a health condition, please see your paediatrician for a proper evaluation.
            {'\n\n'}
          </Text>
          <Text style={{ ...stylesPage.text }}>
            Click&nbsp;
            <Link
              src={`/kids/consumer/recipes/search?useAgeId=${USE_AGES.CHILD_6_12_M}`}
              style={{
                textDecoration: 'underline',
                color: '#009fe3',
                textDecorationColor: '#009fe3'
              }}
            >
              <Text>here</Text>
            </Link>
            &nbsp;to explore delicious and healthy recipes suitable for 6 to 12 months old children.
          </Text>
          <PageNumber pageNumber={pageNumber} />
        </View>
      </Page>
    </>
  );
};

export default ResultsFoodForFFQ;

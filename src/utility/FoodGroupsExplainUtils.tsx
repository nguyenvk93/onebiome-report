import { Text, View } from '@react-pdf/renderer';
import { USER_SAMPLE_ROLES } from '../constants/DefaultValues';
import { FOOD_LIST, FOOD_GROUP_STYLE } from './FfqUtil';

const getExplainContent = (role: number, foodGroupCode: number, value: any, babyMonths: number) => {
  const result = [];
  const isBaby = role === USER_SAMPLE_ROLES.BABY;

  // Get food groups by role
  const foodGroups: any = FOOD_GROUP_STYLE.find((f) => {
    return f.code === foodGroupCode;
  });

  switch (foodGroupCode) {
    case 1:
      if (isBaby && babyMonths >= 12 && babyMonths < 36) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 3,
          value,
          text: (
            <Text>
              {'Your child is meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}%`}</Text>
              {` of the recommended ${babyMonths >= 24 ? 'whole grains' : 'grains'} intake, which is`}
              <Text style={{ fontWeight: 700 }}>{' 2-3 servings per day'}</Text>
              {'.\n\n'}
            </Text>
          )
        });
      } else if (isBaby && babyMonths >= 36 && babyMonths <= 72) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 3,
          value,
          text: (
            <Text>
              {'Your child is meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}%`}</Text>
              {' of the recommended whole grains intake, which is'}
              <Text style={{ fontWeight: 700 }}>{' 3-4 servings per day'}</Text>
              {'.\n\n'}
            </Text>
          )
        });
      } else if (!isBaby) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 3,
          value,
          text: (
            <Text>
              {'You are meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}%`}</Text>
              {' of the recommended intake for whole grains, which is'}
              <Text style={{ fontWeight: 700 }}>{' 6-7 servings per day'}</Text>
              {'.\n\n'}
            </Text>
          )
        });
      }
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 5,
        value,
        text: (
          <Text>
            {'Rice, bread and grains (including wheat, oats, barley, quinoa) are important sources of carbohydrates and dietary fibers as they provide energy and help maintain a healthy gut and microbiome.\n\n'}
          </Text>
        )
      });
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 5,
        value,
        text: (
          <Text>
            {'Did you know that root vegetables (e.g. carrots, beets, turnips and radishes) and tubers (e.g. yams, all varieties of potatoes) are also great sources of carbohydrates and dietary fibres? '}
            {`${isBaby ? "Your child's" : 'Your'}`}
            {' microbial friends love these foods.\n\n'}
          </Text>
        )
      });
      if (isBaby && babyMonths < 24) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 8,
          value,
          text: (
            <Text>
              {"Introduce a serving of whole grains as part of the recommended servings for Grains each day to increase fibre in your child's diet. Do note that very high-fibre diets are not recommended for young children as they can block absorption of important minerals and may also lead to inadequate calorie consumption.\n\n"}
            </Text>
          )
        });
      }
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 4,
        value,
        text: (
          <Text>
            {'Be sure to have appropriate portions of these foods in every meal to provide '}
            {`${isBaby ? 'your child' : 'yourself with'}`}
            {' sustained energy throughout the day!\n\n'}
          </Text>
        )
      });
      break;
    case 2:
      if (isBaby && babyMonths >= 12 && babyMonths < 36) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 4,
          value,
          text: (
            <Text>
              {'Your child is meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}% `}</Text>
              {'of the recommended fruits intake, which is '}
              <Text style={{ fontWeight: 700, fontFamily: 'Lucida', textAlign: 'center' }}>½</Text>
              <Text style={{ fontWeight: 700 }}>{' - 1 servings per day'}</Text>
              {'.\n\n'}
            </Text>
          )
        });
      } else if (isBaby && babyMonths >= 36 && babyMonths <= 72) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 4,
          value,
          text: (
            <Text>
              {'Your child is meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}% `}</Text>
              of the recommended fruits intake, which is
              <Text style={{ fontWeight: 700 }}>{' 1 serving per day'}</Text>
              {'.\n\n'}
            </Text>
          )
        });
      } else if (!isBaby) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 4,
          value,
          text: (
            <Text>
              {'You are meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}%`}</Text>
              {' of the recommended fruits intake, which is'}
              <Text style={{ fontWeight: 700 }}>{' 2 servings per day'}</Text>
              {'.\n\n'}
            </Text>
          )
        });
      }
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 4,
        value,
        text: (
          <Text>
            {'Fruits are good sources of vitamins and minerals. They are important for building a strong immunity, are good sources of fiber and help to maintain a healthy gut and microbiome.\n\n'}
          </Text>
        )
      });
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 3,
        value,
        text: (
          <Text>
            {'Red, yellow and orange fruits are rich in vitamin A and other antioxidants.\n\n'}
          </Text>
        )
      });
      break;
    case 3:
      if (isBaby && babyMonths >= 12 && babyMonths < 36) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 4,
          value,
          text: (
            <Text>
              {'Your child is meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}%`}</Text>
              {' of the recommended vegetables intake, which is '}
              <Text style={{ fontWeight: 700, fontFamily: 'Lucida', textAlign: 'center' }}>½</Text>
              <Text style={{ fontWeight: 700 }}>{' serving per day'}</Text>
              {'.\n\n'}
            </Text>
          )
        });
      } else if (isBaby && babyMonths >= 36 && babyMonths <= 72) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 4,
          value,
          text: (
            <Text>
              {'Your child is meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}%`}</Text>
              {' of the recommended vegetables intake, which is'}
              <Text style={{ fontWeight: 700 }}>{' 1 serving per day'}</Text>
              {'.\n\n'}
            </Text>
          )
        });
      } else if (!isBaby) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 4,
          value,
          text: (
            <Text>
              {'You are meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}%`}</Text>
              {' of the recommended vegetables intake, which is'}
              <Text style={{ fontWeight: 700 }}>{' 3 serving per day'}</Text>
              {'.\n\n'}
            </Text>
          )
        });
      }
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 5,
        value,
        text: (
          <Text>
            {'Vegetables are good sources of vitamins and minerals. They are important for building a strong immunity, are good sources of fiber and help to maintain a healthy gut and microbiome.\n\n'}
          </Text>
        )
      });
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 4,
        value,
        text: (
          <Text>
            {'Dark green vegetables are rich in iron, folate and other B vitamins, while red, yellow and orange fruits and vegetables are rich in vitamin A and other antioxidants.\n\n'}
          </Text>
        )
      });
      break;
    case 4:
      if (isBaby && babyMonths >= 12 && babyMonths < 36) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 6,
          value,
          text: (
            <Text>
              {'Your child is meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}%`}</Text>
              {' of the recommended meat and others intake, which is'}
              <Text style={{ fontWeight: 700 }}>{' 2 servings per day'}</Text>
              {', of which 1 '}
              <Text style={{ fontWeight: 700, fontFamily: 'Lucida', textAlign: 'center' }}>½</Text>
              {' servings are dairy foods or calcium containing foods.\n\n'}
            </Text>
          )
        });
      } else if (isBaby && babyMonths >= 36 && babyMonths <= 72) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 5,
          value,
          text: (
            <Text>
              {'Your child is meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}%`}</Text>
              {' of the recommended meat and others intake, which is'}
              <Text style={{ fontWeight: 700 }}>{' 2 servings per day'}</Text>
              {', of which 1 serving is dairy foods or calcium containing foods.\n\n'}
            </Text>
          )
        });
      } else if (!isBaby) {
        result.push({
          name: foodGroups.name,
          groupCode: foodGroupCode,
          color: foodGroups.color,
          rowNumber: 5,
          value,
          text: (
            <Text>
              {'You are meeting '}
              <Text style={{ fontWeight: 700 }}>{`${value}%`}</Text>
              {' of the recommended meat and others intake, which is'}
              <Text style={{ fontWeight: 700 }}>{' 3 '}</Text>
              <Text style={{ fontWeight: 700, fontFamily: 'Lucida', textAlign: 'center' }}>½</Text>
              <Text style={{ fontWeight: 700 }}>{' servings per day'}</Text>
              {', of which 1 serving is dairy foods or calcium-rich foods\n\n'}
            </Text>
          )
        });
      }
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 5,
        value,
        text: (
          <Text>
            {'Proteins are essential for '}
            {`${isBaby ? 'the growth and development of your child' : 'you and the growth of your baby'}`}
            {' as they build, repair and maintain body tissues and functions. \n\n'}
          </Text>
        )
      });
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 5,
        value,
        text: (
          <Text>
            {'Lean meats, fish and poultry, eggs and legumes are all excellent sources of protein. These foods also provide energy and other key nutrients such as iron, zinc, vitamin E and B vitamins.\n\n'}
          </Text>
        )
      });
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 6,
        value,
        text: (
          <Text>
            Opt for oily fish such as salmon, tuna, sardines, mackerel twice weekly as they are great sources of  healthy fats such as Omega 3 fatty acids. Omega 3 fatty acids are essential for brain and eye development
            {`${isBaby ? '' : ', particularly for the baby in you'}. \n\n`}
          </Text>
        )
      });
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 3,
        value,
        text: (
          <Text>
            {'Did you know that some of our microbial friends love Omega 3 rich foods too?\n\n'}
          </Text>
        )
      });
      result.push({
        name: foodGroups.name,
        groupCode: foodGroupCode,
        color: foodGroups.color,
        rowNumber: 5,
        value,
        text: (
          <Text>
            {'Beancurd (tofu), lentils, chickpeas, tempeh and beans are excellent plant-based sources of protein and fibre. Alternate them with animal-based proteins for a more varied, balanced and healthy diet.\n\n'}
          </Text>
        )
      });
      break;

    default:
      break;
  }
  return result;
};

const getExtraFood = (role: number, item: any) => {
  const { code, frequency } = item;
  const result = [];
  const isBaby = role === USER_SAMPLE_ROLES.BABY;

  const style = {
    fontSize: 13,
    lineHeight: 1.3,
    maxWidth: 386
  };

  const fontSizeFooter = 8;

  const sub = (text: string, textSub: string, fontSizeSub: number) => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text>{text}</Text>
        <View style={{ position: 'relative', backgroundColor: 'red' }}>
          <Text style={{
            fontSize: fontSizeSub, position: 'absolute', top: -1, left: 0
          }}
          >{textSub}
          </Text>
        </View>
      </View>
    );
  };

  switch (code) {
    case FOOD_LIST.PROCESSED:
      result.push({
        code,
        name: 'Processed foods',
        rowNumber: 22,
        text: (
          <View style={style}>
            <Text>
              {`Over the past one month, ${isBaby ? 'your child' : 'you'} consumed processed foods at an average of `}
              <Text style={{ fontWeight: 700 }}>{`${frequency} times per day.\n\n`}</Text>
            </Text>
            <Text>
              {'Processed foods contain preservatives and additives which have been shown to negatively impact the gut microbiome. These foods are often lacking in vitamins and minerals, phytonutrients and fibre.\n\n'}
            </Text>
            <Text>
              There is a growing body of evidence that has demonstrated a link between consumption of ultra-processed foods and an
            </Text>
            {
              sub(`increased risk ${isBaby ? 'of childhood obesity' : 'for heart disease and stroke'}.`, `${isBaby ? '1-3' : '1'}`, fontSizeFooter)
            }
            <Text>{'\n'}</Text>
            {
              sub('Examples of ultra-processed food include:', `${isBaby ? '4' : '1'}`, fontSizeFooter)
            }
            <Text>
              &emsp;•&emsp;{'Packaged baked foods and snacks\n'}
              &emsp;•&emsp;{'Fizzy drinks\n'}
              &emsp;•&emsp;{'Sugary cereals\n'}
              &emsp;•&emsp;{'Ready meals containing food additives\n'}
              &emsp;•&emsp;{'Dehydrated vegetable soups\n'}
              &emsp;•&emsp;{'Reconstituted fish and meat products (sausages, ham\n'}
              &emsp;&nbsp;&emsp;&nbsp;and nuggets).
              {'\n'}
            </Text>
          </View>
        )
      });
      result.push({
        code,
        name: 'Processed foods',
        rowNumber: 5,
        text: (
          <View style={style}>
            <Text>{'\n'}</Text>
            <Text>Conversely, a healthy, wholesome diet consisting of fruits, vegetables, legumes, nuts and grains has been associated</Text>
            {
              sub('with health gains.', `${isBaby ? '5' : '2'}`, fontSizeFooter)
            }
            <Text>{'\n'}</Text>
          </View>
        )
      });
      break;
    case FOOD_LIST.FERMENTED:
      result.push({
        code,
        name: 'Fermented foods',
        rowNumber: 3,
        text: (
          <View style={style}>
            <Text>{'Over the past one month, '}
              {`${isBaby ? 'your child' : 'you'} consumed fermented foods at an average of `}
              <Text style={{ fontWeight: 700 }}>{`${frequency} times per day.`}</Text>
            </Text>
            <Text>{'\n'}</Text>
          </View>
        )
      });
      result.push({
        code,
        name: 'Fermented foods',
        rowNumber: 5,
        text: (
          <View style={style}>
            <Text>A recent study demonstrated that consuming fermented foods increased the diversity of microbial friends and had a positive impact on the immune system by reducing</Text>
            {
              sub('inflammation.', `${isBaby ? '6' : '3'}`, fontSizeFooter)
            }
            <Text>{'\n'}</Text>
          </View>
        )
      });
      break;
    default:
      break;
  }
  return result;
};

const getFoodGroupsIndicateContent = ({
  role,
  ffqChart,
  babyMonths,
  dataExtraFood
}: any) => {
  const content: any = {
    foodGroup: [],
    extraFood: []
  };

  // Food group
  if (ffqChart.length > 0) {
    ffqChart.forEach((item: any) => {
      const contentResult = getExplainContent(
        role,
        item.groupCode,
        item.value,
        babyMonths
      );
      contentResult.forEach((result: any) => {
        content.foodGroup.push(result);
      });
    });
  }

  // Extra food
  if (dataExtraFood.length > 0) {
    dataExtraFood.forEach((item: any) => {
      const contentResult = getExtraFood(role, item);
      contentResult.forEach((result: any) => {
        content.extraFood.push(result);
      });
    });
  }

  return content;
};

export default getFoodGroupsIndicateContent;

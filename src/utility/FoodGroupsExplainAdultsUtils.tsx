import { Text } from '@react-pdf/renderer';
import { FOOD_GROUP_STYLE_ADULTS } from './FfqUtil';

const getExplainContent = (foodGroupCode: number, value: any) => {
  const result = [];

  const textBoldBlue = (text: string) => {
    return <Text style={{ color: '#009FE3', fontWeight: 700 }}>{text}</Text>;
  };

  switch (foodGroupCode) {
    case 1:
      result.push({
        rowNumber: 3,
        text: (
          <Text>
            {textBoldBlue('• ')}
            {'You are meeting '}
            {textBoldBlue(`${value}%`)}
            {' of the recommended intake for whole grains, which is '}
            {textBoldBlue('5-7')}
            {' servings per day.'}
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 5,
        text: (
          <Text>
            {textBoldBlue('• ')}
            {'Rice, bread and grains '}
            {textBoldBlue('(including wheat, oats, barley, quinoa)')}
            {' are important sources of carbohydrates and dietary fibers as they provide energy and help maintain a healthy gut and microbiome.'}
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 5,
        text: (
          <Text>
            {textBoldBlue('• ')}
            {'Did you know that root vegetables '}
            {textBoldBlue('(e.g. carrots, beets, turnips and radishes)')}
            {' and tubers '}
            {textBoldBlue('(e.g. yams, all varieties of potatoes)')}
            {' are also great sources of carbohydrates and dietary fibres? Your microbial friends love these foods.'}
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 3,
        text: (
          <Text>
            {textBoldBlue('• ')}
            Be sure to have appropriate portions of these foods in every meal to provide yourself with sustained energy throughout the day!
          </Text>
        )
      });
      break;
    case 2:
      result.push({
        rowNumber: 3,
        text: (
          <Text>
            {textBoldBlue('• ')}
            {'You are meeting '}
            {textBoldBlue(`${value}%`)}
            {' of the recommended fruits intake, which is '}
            {textBoldBlue('2')}
            {' servings per day.'}
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 5,
        text: (
          <Text>
            {textBoldBlue('• ')}
            Fruits are good sources of vitamins and minerals. They are important for building a strong immunity, are good sources of fiber and help to maintain a healthy gut and microbiome.
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 2,
        text: (
          <Text>
            {textBoldBlue('• ')}
            Red, yellow and orange fruits are rich in vitamin A and other antioxidants.
          </Text>
        )
      });
      break;
    case 3:
      result.push({
        rowNumber: 3,
        text: (
          <Text>
            {textBoldBlue('• ')}
            {'You are meeting '}
            {textBoldBlue(`${value}%`)}
            {' of the recommended vegetables intake, which is '}
            {textBoldBlue('2')}
            {' servings per day.'}
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 5,
        text: (
          <Text>
            {textBoldBlue('• ')}
            Vegetables are good sources of vitamins and minerals. They are important for building a strong immunity, are good sources of fiber and help to maintain a healthy gut and microbiome.
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 3,
        text: (
          <Text>
            {textBoldBlue('• ')}
            Dark green vegetables are rich in iron, folate and other B vitamins, while red, yellow and orange fruits and vegetables are rich in vitamin A and other antioxidants.
          </Text>
        )
      });
      break;
    case 4:
      result.push({
        rowNumber: 4,
        text: (
          <Text>
            {textBoldBlue('• ')}
            {'You are meeting '}
            {textBoldBlue(`${value}%`)}
            {' of the recommended meat and others intake, which is '}
            {textBoldBlue('2 to 3')}
            {' servings per day, of which 1 serving is dairy foods or calcium-rich foods.'}
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 4,
        text: (
          <Text>
            {textBoldBlue('• ')}
            Proteins are essential for you as they build, repair and maintain body tissues and functions.
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 5,
        text: (
          <Text>
            {textBoldBlue('• ')}
            Lean meats, fish and poultry, eggs and legumes are all excellent sources of protein. These foods also provide energy and other key nutrients such as iron, zinc, vitamin E and B vitamins.
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 6,
        text: (
          <Text>
            {textBoldBlue('• ')}
            Opt for oily fish such as salmon, tuna, sardines, mackerel twice weekly as they are great sources of healthy fats such as Omega 3 fatty acids. Omega 3 fatty acids are good  for heart health.
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 3,
        text: (
          <Text>
            {textBoldBlue('• ')}
            {textBoldBlue('Did you know that some of our microbial friends love Omega 3 rich foods too?')}
            {'\n\n'}
          </Text>
        )
      });
      result.push({
        rowNumber: 4,
        text: (
          <Text>
            {textBoldBlue('• ')}
            Beancurd (tofu), lentils, chickpeas, tempeh and beans are excellent plant-based sources of protein and fibre. Alternate them with animal-based proteins for a more varied, balanced and healthy diet.
          </Text>
        )
      });
      break;
    default:
      break;
  }
  return result;
};

const getFoodGroupsIndicateContentAdults = ({ ffqChart }: any) => {
  const content: any = {
    foodGroup: [],
    extraFood: []
  };

  // Food group
  if (ffqChart.length > 0) {
    ffqChart.forEach((item: any) => {
      // Sum row on one page = 73, Min row group is 24
      // Min Row is 17
      const foodGroupStyle: any = FOOD_GROUP_STYLE_ADULTS.find((f) => {
        return f.groupCode === item.groupCode;
      });
      const contentResult = getExplainContent(
        item.groupCode,
        item.value
      );

      // Count sum row
      let sumRow = 0;
      contentResult.forEach((story: any) => {
        sumRow += story.rowNumber;
      });
      const rowCount = (sumRow >= 17 ? sumRow : 17) + 7;

      content.foodGroup.push({
        ...foodGroupStyle,
        value: item.value,
        rowCount,
        story: contentResult
      });
    });
  }

  return content;
};

export default getFoodGroupsIndicateContentAdults;

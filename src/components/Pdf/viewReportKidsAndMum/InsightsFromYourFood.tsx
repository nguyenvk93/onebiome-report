import { Image, Text, View } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import { USER_GENDERS } from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import { FOOD_GROUP_STYLE } from '../../../utility/FfqUtil';
import PageNumber from './Components/PageNumber';

interface Props {
  ffqChart: any,
  isBaby: boolean,
  gender: number,
  babyMonths: number,
  pageNumber: number,
}

const InsightsFromYourFood = ({
  ffqChart,
  isBaby,
  gender,
  babyMonths,
  pageNumber
}: Props) => {
  const foodSufficient = ffqChart.filter((m: any) => { return m.value >= 85; });
  const foodInsufficient = ffqChart.filter((m: any) => { return m.value < 85; });

  const getArrayFoodGroups = (foodArray: Array<string>) => {
    const arrayTemp: any = [];

    foodArray.forEach((item: any) => {
      const fg: any = FOOD_GROUP_STYLE;
      const foodGroups = Object.create(
        fg.find((f: any) => { return f.code === item.groupCode; })
      );

      if (isBaby && babyMonths < 24 && foodGroups.name === 'Whole grains') {
        foodGroups.name = 'Grains';
      }
      arrayTemp.push({ name: foodGroups.name, color: foodGroups.color });
    });

    return arrayTemp;
  };

  const generateListFood = (arrayList: any) => {
    if (arrayList && arrayList.length > 0) {
      return arrayList.map((item: any, idx: number) => {
        let textBefore = '';
        if (idx !== 0) {
          textBefore = ', ';
          if (idx === arrayList.length - 1) {
            textBefore = ', and ';
          }
        }
        return (
          <Text key={item.name}>
            <Text>{textBefore}</Text>
            <Text style={{ color: item.color, fontWeight: 700 }}>{item.name}</Text>
          </Text>
        );
      });
    }

    return null;
  };

  let textSummary1: any = '';
  let textSummary2: any = '';
  const arrayDummyText = isBaby ? (
    <Text>
      Dear parents,
      {'\n\nThank you for completing the food frequency questionnaire (FFQ). In the next few pages, we will provide you with a description of your child’s eating pattern based on the answers you provided in the FFQ'}
      {'\n\nThe OneBiome science team is building a database that will be used to generate personalised nutrition recommendations powered by microbiome science. In the future, we aim to provide you with more information on choosing the best foods for your child’s needs, by correlating different eating patterns and their influence on microbiome profiles'}
      {'\n\nThank you for your support'}
      {'\n\nThe OneBiome team'}
    </Text>
  )
    : (
      <Text>
        Dear mothers-to-be,
        {'\n\nThank you for completing the food frequency questionnaire (FFQ). In the next few pages, we will provide you with a description of your eating pattern based on the answers you provided in the FFQ.'}
        {'\n\nThe OneBiome science team is building a database that will be used to generate personalised nutrition recommendations powered by microbiome science. In the future, we aim to provide you with more information on choosing the best foods for your needs, by correlating different eating patterns and their influence on microbiome profiles.'}
        {'\n\nThank you for your support,'}
        {'\n\nThe OneBiome team'}
      </Text>
    );

  if (foodInsufficient.length > 0) {
    if (foodSufficient.length > 0) {
      const arraySufficient = getArrayFoodGroups(foodSufficient);
      const arrayInsufficient = getArrayFoodGroups(foodInsufficient);
      textSummary1 = (
        <Text>
          {'\n\n'}
          <Text>
            {`Based on your answers from ${isBaby ? "your child's" : 'your'} Food Frequency Questionnaire, ${isBaby ? 'your child appears' : 'you appear'} to be consuming `}
          </Text>
          <Text style={{ fontWeight: 700, textDecoration: 'underline' }}>sufficient</Text>
          <Text>{' '}</Text>
          {
            generateListFood(arraySufficient)
          }
          <Text>
            {`. However, ${isBaby ? 'your child appears' : 'you appear'} to be consuming `}
          </Text>
          <Text style={{ fontWeight: 700, textDecoration: 'underline' }}>insufficient</Text>
          <Text>{' '}</Text>
          {
            generateListFood(arrayInsufficient)
          }
          <Text>.</Text>
        </Text>
      );
    } else {
      const arrayInsufficient = getArrayFoodGroups(foodInsufficient);
      textSummary1 = (
        <Text>
          {'\n\n'}
          <Text>
            {`Based on your answers from ${isBaby ? "your child's" : 'your'} Food Frequency Questionnaire, ${isBaby ? 'your child appears' : 'you appear'} to be consuming `}
          </Text>
          <Text style={{ fontWeight: 700, textDecoration: 'underline' }}>insufficient</Text>
          <Text>{' '}</Text>
          {
            generateListFood(arrayInsufficient)
          }
          <Text>.</Text>
        </Text>
      );
    }
    if (isBaby) {
      let babyGender;
      if (gender === USER_GENDERS.MALE) {
        babyGender = 'his';
      } else if (gender === USER_GENDERS.FEMALE) {
        babyGender = 'her';
      }
      textSummary2 = <Text>{`\n\nEncouraging your child to eat a variety of foods from the different food groups at every meal is important for ${babyGender} growth and development. Serving a range of foods will also add different tastes and textures to ${babyGender} diet and have a positive impact on ${babyGender} health and eating habits.`}</Text>;
    } else {
      textSummary2 = <Text>{'\n\nDo eat a variety of foods from different food groups so that you achieve your daily required macro- and micronutrients to support your pregnancy. Adding different tastes and textures to your diet will also make your meals more enjoyable.'}</Text>;
    }
  } else if (foodSufficient.length > 0 && foodInsufficient.length === 0) {
    const arraySufficient = getArrayFoodGroups(foodSufficient);
    textSummary1 = (
      <Text>
        {'\n\n'}
        <Text>
          {'Based on the answers from your Food Frequency Questionnaire, you appear to be consuming '}
        </Text>
        <Text style={{ fontWeight: 700, textDecoration: 'underline' }}>sufficient</Text>
        <Text>{' '}</Text>
        {
          generateListFood(arraySufficient)
        }
        <Text>.</Text>
      </Text>
    );
    textSummary2 = (
      <Text>
        {'\n\nYou’re doing a great job at combining different types of foods at meal and snack times. Having foods from all the food groups at each meal provide the essential nutrients that '}
        {
          `${isBaby
            ? 'your child needs and make eating fun and interesting'
            : 'you will need to help your baby in you grow well'}.\n\n`
        }
        {
          `${isBaby
            ? 'Nurture healthy eating habits in your child by setting a good example at the dining table, with the whole family eating a variety of foods. Do ensure your child drinks plenty of water throughout the day, instead of unnecessary calories or sugar from sugar-sweetened beverages drinks.'
            : 'Having healthy eating habits will set a good example at the dining table for your child in the future, with the whole family eating a variety of foods. Drink plenty of water throughout the day, instead of unnecessary calories or sugar from sugar-sweetened beverages drinks.'
          }`
        }
      </Text>
    );
  }

  const returnImage = async () => {
    const optionCanvas = {
      backgroundColor: null,
      windowWidth: 595,
      windowHeight: 287,
      scrollX: 0,
      scrollY: 0
    };
    const chart: any = document.getElementById('chart-ffq-group');
    const images = await Promise.all([html2canvas(chart, optionCanvas)]);
    return images[0].toDataURL('image/png');
  };

  return (
    <View
      style={{
        width: A4_FULL_WIDTH_POINT,
        height: A4_FULL_HEIGHT_POINT,
        position: 'relative'
      }}
    >
      <Image
        src="/img/pdf/ffq/header_ffq_1.png"
        style={{
          width: A4_FULL_WIDTH_POINT,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <Text
        style={{
          marginHorizontal: 30,
          marginTop: 47,
          fontSize: 30,
          fontFamily: 'BlogScript',
          color: '#009fe3',
          textAlign: 'center',
          lineHeight: 1.75
        }}
      >
        {`RESULTS FROM ${isBaby ? "YOUR CHILD'S" : 'YOUR'} FOOD\nFREQUENCY QUESTIONNAIRE`}
      </Text>
      <View
        style={{
          marginHorizontal: 40,
          marginBottom: 10,
          fontSize: 10,
          lineHeight: 1.3
        }}
      >
        {arrayDummyText}
      </View>
      <View>
        <Image
          src={returnImage()}
          style={{
            width: 595,
            height: 287
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 35,
          marginTop: 15,
          backgroundColor: '#e9f4fc',
          paddingHorizontal: 30,
          paddingVertical: 16
        }}
      >
        <Text
          style={{
            fontSize: foodSufficient.length > 0 && foodInsufficient.length === 0 ? 8 : 10,
            lineHeight: 1.5
          }}
        >
          <Text style={{ fontWeight: 700 }}>SUMMARY</Text>
          {textSummary1}
          {textSummary2}
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default InsightsFromYourFood;

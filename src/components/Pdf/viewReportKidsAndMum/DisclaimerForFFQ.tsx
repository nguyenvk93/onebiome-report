import { Image, Text, View } from '@react-pdf/renderer';
import { USER_SAMPLE_ROLES } from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface Props {
  role: number
  pageNumber: number
}

const DisclaimerForFFQ = ({ role, pageNumber }: Props) => {
  const isBaby = role === USER_SAMPLE_ROLES.BABY;
  const textContent1 = `The purpose of the Food Frequency Questionnaire (FFQ) is to assess dietary intakes of normal healthy individuals and provide advice on healthy diets for these individuals. It is not designed for those with health conditions in whom special diets or dietary restrictions may be required. If ${isBaby ? 'your child has' : 'you have'} a pre-existing health condition, you should consult ${isBaby ? 'your child’s' : 'your'} doctor before making any changes to ${isBaby ? 'your child’s' : 'your'} diet.`;

  const textContent2 = `The accuracy and reliability of the results generated from the FFQ will depend on the accuracy and completeness of information submitted through the FFQ. Portions/serving sizes are assumed to be that of a typical ${isBaby ? 'child' : 'adult'} from a similar age group, using references from multiple sources including the Singapore Health Promotion Board and the Growing Up in Singapore Towards Healthy Outcomes (GUSTO) study (link to references).`;

  const textContent3 = isBaby
    ? 'If your child’s dietary intake is close to meeting the recommended number of servings per day (more than or equal to 85%) for a particular food group, your child is considered as having sufficient intake of that food group. Likewise, if your child is consuming less than 85% of the recommended number of servings, your child will be considered as having insufficient intake and will be encouraged to consume more of this food group.'
    : 'If your dietary intake is close to meeting the recommended number of servings per day (more than or equal to 85%) for a particular food group, you are considered as having sufficient intake of that food group. Likewise, if you are consuming less than 85% of the recommended number of servings, you will be considered as having insufficient intake and will be encouraged to consume more of this food group.';

  const textContent4 = isBaby
    ? 'The calculations do not take into account the individual food items your child may be consuming within a food group. If you are concerned about the limited types of foods your child may be consuming, please consult a healthcare professional.'
    : 'The calculations do not take into account the individual food items you may be consuming within a food group. Consuming a diverse range of food is important for obtaining the necessary macro- and micronutrients to support good health. If you are concerned about the limited types of foods you may be consuming, please consult a healthcare professional.';
  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <Image
        src="/img/pdf/ffq/header_ffq.png"
        style={{
          width: A4_FULL_WIDTH_POINT,
          height: 181,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <Image
        src="/img/pdf/ffq/pattern_ffq.png"
        style={{
          width: A4_FULL_WIDTH_POINT,
          height: 690,
          position: 'absolute',
          top: A4_FULL_HEIGHT_POINT - 690,
          left: 0
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'BlogScript',
            color: '#009fe3',
            textAlign: 'center',
            lineHeight: 1.75,
            marginTop: 100,
            marginHorizontal: 30,
            marginBottom: 33
          }}
        >
          DISCLAIMER
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontStyle: 'italic',
            lineHeight: 1.5,
            marginTop: 25,
            marginHorizontal: 40,
            marginBottom: 0
          }}
        >
          {textContent1}
          {'\n\n'}
          {textContent2}
          {'\n\n'}
          {textContent3}
          {'\n\n'}
          {textContent4}
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default DisclaimerForFFQ;

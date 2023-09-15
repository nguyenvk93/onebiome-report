import { View, Text, Image } from '@react-pdf/renderer';
import { USER_SAMPLE_ROLES } from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface Props {
  role: number
  isBabyWeaned: boolean
  pageNumber: number
}

const ThankYouPage = ({ role, isBabyWeaned, pageNumber }: Props) => {
  const isBaby = role === USER_SAMPLE_ROLES.BABY;

  let texts = '';
  let textFooter = '';

  if (isBaby) {
    if (!isBabyWeaned) {
      texts = 'We hope you found this information valuable and useful.\n\nThe introduction of solid foods and a healthy, diverse diet is\naccompanied with an increase in microbes that support a healthy\ngut immunity. Notably, an increase in microbes with the ability to\ndigest the fibres present in plant-based foods has been observed.\n\nYou may consider doing another test for your child in a few\nmonths to check the development of your child’s microbiome\nwhen you have started weaning.';
      textFooter = '';
    } else {
      texts = 'We hope you found this information valuable and useful. You may \nconsider doing another test for your child in a few months* to\ncheck the development of your child’s microbiome.';
      textFooter = '*Your child’s diet is one of many factors that impacts his/her gut microbiome. The type of microbes that your child has\nin the gut determines how he/she responds to dietary changes, as well as the time needed to see the changes. Studies\nhave observed that dietary changes can lead to changes in one’s microbiome in days, weeks or months. This depends\nlargely on your child’s microbiome composition prior to the dietary change.';
    }
  } else {
    texts = 'We hope you found this information valuable and useful.\nYou may consider doing another test in a few months* to check\nthe status of your microbiome.';
    textFooter = '*Your diet is one of many factors that impacts your gut microbiome. The type of microbes that you have in your gut\ndetermines how you respond to dietary changes, as well as the time needed to see the changes. Studies have observed\nthat dietary changes can lead to changes in one’s microbiome in days, weeks or months. This depends largely on\nyour microbiome composition prior to the dietary change.';
  }
  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <Image
        src="/img/pdf/thank_you_bg.jpg"
        style={{
          width: A4_FULL_WIDTH_POINT,
          height: A4_FULL_HEIGHT_POINT,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <View
        style={{
          marginTop: 300
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'BlogScript',
            fontSize: 45,
            lineHeight: 1,
            color: '#67BD5E'
          }}
        >
          THANK YOU!
        </Text>
      </View>
      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontFamily: 'Gotham',
            fontSize: 14,
            color: '#000000',
            lineHeight: 1.4,
            textAlign: 'center'
          }}
        >
          {texts}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 60,
          position: 'absolute',
          bottom: 25
        }}
      >
        <Text
          style={{
            fontStyle: 'italic',
            fontSize: 8,
            lineHeight: 1.5,
            color: '#5E5E5E',
            textAlign: 'justify'
          }}
        >{textFooter}
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default ThankYouPage;

/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Text,
  View,
  StyleSheet,
  Image,
  Link
} from '@react-pdf/renderer';
import { USER_GENDERS, STUDY_TYPE } from '../../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../../constants/PdfConstants';
import PageNumber from '../Components/PageNumber';
import { getAgeByMonth } from '../../../../utility/ProfileUtils';

interface Props {
  sample: any
  babyMonths: number
  member: any
  pageNumber: number
}

const IntroductionDearMummyPageKids = ({
  sample, babyMonths, member, pageNumber
}: Props) => {
  const { gender, user } = member;

  const isNotOnebiome = user.studyType !== STUDY_TYPE.ONEBIOME;
  let childTitle = '';
  if (sample.kitId) {
    childTitle = !isNotOnebiome ? member.firstName : 'your child';
  } else {
    childTitle = 'your child';
  }

  let familyImage = '';
  const genderStr = gender === USER_GENDERS.FEMALE ? 'girl' : 'boy';
  // example : 6, 24, 36 is Months
  if (babyMonths < 6) {
    familyImage = `/img/pdf/family_baby_${genderStr}.png`;
  } else if (babyMonths < 24) {
    familyImage = `/img/pdf/family_baby_6M_18M_${genderStr}.png`;
  } else if (babyMonths < 36) {
    familyImage = `/img/pdf/family_baby_18M_36M_${genderStr}.png`;
  } else {
    familyImage = `/img/pdf/family_baby_over36M_${genderStr}.png`;
  }
  // Create styles
  const styles = StyleSheet.create({
    text: {
      fontSize: 16,
      color: '#000',
      lineHeight: 1.5
    },
    textHeader: {
      fontSize: 21,
      fontFamily: 'BlogScript',
      color: '#009FE3',
      lineHeight: 1.5
    }
  });

  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT }}>
      <Image
        src="/img/pdf/family_bg.jpg"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <View style={{
        paddingTop: 65,
        paddingHorizontal: 55
      }}
      >
        <Text style={styles.textHeader}>DEAR MUM & DAD,</Text>
        <Text style={{ ...styles.text, marginBottom: 20 }}>
          {`Thank you for taking the time to collect those valuable poop samples during your parental journey. We are very pleased to share with you the results of ${childTitle}’s microbiome analysis${sample.monthTimePoint ? ` (stool sample collected at age ${getAgeByMonth(sample.monthTimePoint)}).` : '.'}`}
        </Text>
        <Text
          style={{
            ...styles.text, marginBottom: 20
          }}
        >
          {`We hope that this report will empower you to find out more about the gut microbiome and its role in shaping ${childTitle}’s health.`}
        </Text>
      </View>
      <View style={{
        paddingLeft: 55,
        paddingRight: 235
      }}
      >
        <Text style={{ ...styles.text, marginBottom: 20 }}>
          In this <Text style={{ color: '#009FE3', textDecoration: 'underline' }}>interactive</Text>{` report, we will provide you with some insights about ${childTitle}’s microbiome which we have compared with our Children Microbiome Database.`}
        </Text>
        <Text style={{ ...styles.text }}>
          {'Additionally, you will have access to '}
          <Link src="/kids/educational" style={{ color: '#009FE3', textDecoration: 'underline' }}>
            <Text>different educational modules*</Text>
          </Link>
          {` that will guide you in nurturing ${childTitle}’s microbiome for lifelong health.`}
        </Text>
      </View>
      <Image
        src={familyImage}
        style={{
          width: 229,
          height: 309,
          position: 'absolute',
          top: 278,
          left: 361
        }}
      />
      <Image
        src="/img/pdf/dear_brush.png"
        style={{
          width: 450,
          height: 119,
          position: 'absolute',
          top: 580,
          left: 198
        }}
      />
      <View style={{
        position: 'absolute',
        top: 585,
        left: 198,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 450,
        height: 119
      }}
      >
        <Text style={{
          fontSize: 22,
          color: '#fff',
          lineHeight: 1.5
        }}
        >A Microbiome Report
        </Text>
        <Text style={{
          fontSize: 30,
          fontFamily: 'BlogScript',
          color: '#fff',
          lineHeight: 1.15
        }}
        >{'UNIQUE TO\n YOUR CHILD'}
        </Text>

      </View>
      <View style={{
        position: 'absolute',
        bottom: 20,
        marginLeft: 40,
        marginRight: 20
      }}
      >
        <View style={{
          borderWidth: 2,
          borderColor: '#979797',
          paddingHorizontal: 10,
          paddingVertical: 7
        }}
        >
          <Text style={{
            fontSize: 8,
            color: '#5e5e5e',
            lineHeight: 1.5,
            fontStyle: 'italic'
          }}
          >
            The contents provided in this report is intended for general information and scientific research purposes only. This information (including those on our website and materials by OneBiome) should not be used as a substitute for professional medical advice, diagnosis, or treatment by a doctor or qualified health provider. Always seek the advice of your doctor or other qualified health provider with any questions or concerns you may have regarding your health.
          </Text>
        </View>
        <View style={{ paddingHorizontal: 18 }}>
          <Text style={{
            marginTop: 7,
            fontSize: 8,
            color: '#5e5e5e',
            lineHeight: 1.5,
            fontStyle: 'italic'
          }}
          >
            *Throughout the report, some key words are highlighted and underlined in blue. By clicking on them, they will direct you to the educational content found on our OneBiome website.
          </Text>
        </View>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default IntroductionDearMummyPageKids;

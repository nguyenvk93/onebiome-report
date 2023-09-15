/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Text,
  View,
  StyleSheet,
  Image,
  Link
} from '@react-pdf/renderer';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../../constants/PdfConstants';
import PageNumber from '../Components/PageNumber';

interface Props {
  member: any,
  pageNumber: number
}

const IntroductionDearMummyPageMum = ({ member, pageNumber }: Props) => {
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
        <Text style={styles.textHeader}>{`DEAR ${member && member.firstName && member.firstName.toUpperCase()},`}</Text>
        <Text style={{ ...styles.text, marginBottom: 20 }}>
          Thank you for taking the time to collect those valuable poop samples during your pregnancy journey. We are very pleased to share with you the results of your microbiome analysis.
        </Text>
        <Text
          style={{
            ...styles.text, marginBottom: 20
          }}
        >
          {'We hope that this report will empower you\nto find out more about the gut microbiome\nand its role in shaping your health and\nthat of your baby.'}
        </Text>
        {/* <Text style={{ ...styles.text, marginBottom: 20 }}>
          In this <Text style={{ color: '#009FE3', textDecoration: 'underline' }}>interactive</Text>{' report, we will\nprovide you with some insights about\nyour microbiome which we have\ncompared with our Mum Microbiome\nDatabase.'}
        </Text> */}
        {/* <Text style={{ ...styles.text, marginBottom: 20 }}>
          {'Additionally, you will have access to\n'}
          <Link src={`${LINK_SERVER}/educational`}><Text style={{ color: '#009FE3', textDecoration: 'underline' }}>different educational topics*</Text></Link>
          {' that will\nguide you in nurturing your microbiome\nfor lifelong health.'}
        </Text> */}
      </View>
      <View style={{
        paddingLeft: 55,
        paddingRight: 235
      }}
      >
        <Text style={{ ...styles.text, marginBottom: 20 }}>
          In this <Text style={{ color: '#009FE3', textDecoration: 'underline' }}>interactive</Text>{' report, we will provide you with some insights about your microbiome which we have compared with our Mum Microbiome Database.'}
        </Text>
        <Text style={{ ...styles.text }}>
          {'Additionally, you will have access to '}
          <Link src="/kids/educational" style={{ color: '#009FE3', textDecoration: 'underline' }}>
            <Text>different educational topics*</Text>
          </Link>
          {' that will guide you in nurturing your microbiome for lifelong health.'}
        </Text>
      </View>
      <Image
        src="/img/pdf/family_mum.png"
        style={{
          width: 172,
          height: 326,
          position: 'absolute',
          top: 247,
          left: 388
        }}
      />
      <Image
        src="/img/pdf/dear_brush.png"
        style={{
          width: 345,
          height: 132,
          position: 'absolute',
          top: 555,
          left: 250
        }}
      />
      <View style={{
        width: 345,
        height: 132,
        position: 'absolute',
        top: 555,
        left: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
        <Text style={{
          fontSize: 22,
          color: '#fff',
          lineHeight: 1.5,
          marginBottom: 5
        }}
        >A Microbiome Report
        </Text>
        <Text style={{
          fontSize: 30,
          fontFamily: 'BlogScript',
          color: '#fff',
          lineHeight: 1.03
        }}
        >UNIQUELY YOURS
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
          >The contents provided in this report is intended for general information and scientific research purposes only. This information (including those on our website and materials by OneBiome) should not be used as a substitute for professional medical advice, diagnosis, or treatment by a doctor or qualified health provider. Always seek the advice of your doctor or other qualified health provider with any questions or concerns you may have regarding your health.
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
          >*Throughout the report, some key words are highlighted and underlined in blue. By clicking on them, they will direct you to the educational content found on our OneBiome website.
          </Text>
        </View>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default IntroductionDearMummyPageMum;

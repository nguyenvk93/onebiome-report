import {
  Text,
  View,
  StyleSheet,
  Image
} from '@react-pdf/renderer';
import { A4_FULL_WIDTH_POINT, A4_FULL_HEIGHT_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface Props {
  isBaby: boolean
  pageNumber: number
}

const IntroductionPage = ({ isBaby, pageNumber }: Props) => {
  // Create styles
  const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontFamily: 'BlogScript'
    }
  });

  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <Image
        src="/img/pdf/introductionImage.jpg"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <View style={{
        height: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
      }}
      >
        <View
          style={{
            paddingTop: 70
          }}
        >
          <Text style={{ ...styles.text, fontSize: 36 }}>A MICROBIOME REPORT</Text>
          {
            isBaby ? (
              <>
                <Text style={{ ...styles.text, fontSize: 55, marginTop: -20 }}>UNIQUE</Text>
                <Text style={{ marginTop: -40 }}>
                  <Text style={{ ...styles.text, fontSize: 36 }}>TO YOUR </Text>
                  <Text style={{ ...styles.text, fontSize: 55 }}>CHILD</Text>
                </Text>
              </>
            ) : (
              <Text style={{ ...styles.text, fontSize: 55, marginTop: -20 }}>UNIQUELY YOURS</Text>
            )
          }
        </View>
      </View>
      <Image
        src="/img/pdf/LG_imagePdf.png"
        style={{
          width: 232,
          height: 27,
          position: 'absolute',
          bottom: 15,
          right: 33
        }}
      />
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default IntroductionPage;

import { Image, Text, View } from '@react-pdf/renderer';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface Props {
  isBaby: boolean
  pageNumber: number
}

const ImportantHcp = ({ isBaby, pageNumber }: Props) => {
  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <Image
        src="/img/ffq/importantBG.jpg"
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
          marginTop: 93
        }}
      >
        <Text
          style={{
            fontFamily: 'BlogScript',
            fontSize: 24,
            lineHeight: 1,
            textAlign: 'center',
            color: '#00cdca'
          }}
        >
          IMPORTANT NOTICE
        </Text>
      </View>
      <View
        style={{
          marginLeft: 53,
          marginTop: 63
        }}
      >
        <Text
          style={{
            fontFamily: 'Gotham',
            fontSize: 16,
            color: '#000000',
            lineHeight: 1.95
          }}
        >
          {'The contents provided in this report is intended for general\n'}
          {'information and scientific research purposes only. This\n'}
          {'information (including those on our website and all other\n'}
          {'materials by OneBiome) should not be used as a substitute for\n'}
          {'professional medical advice, diagnosis, or treatment by a doctor\n'}
          {'or qualified health provider. Always seek the advice of your\n'}
          {'doctor or other qualified health provider with any questions or\n'}
          {`concerns you may have regarding ${!isBaby ? 'your' : 'your child’s'} health.`}
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default ImportantHcp;

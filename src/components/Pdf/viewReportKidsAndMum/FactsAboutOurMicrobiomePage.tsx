import { View, Text, Image } from '@react-pdf/renderer';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

const FactsAboutOurMicrobiomePage = ({ pageNumber }: any) => {
  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <Image
        src="/img/pdf/facts_about_our_microbiome_bg.png"
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
          position: 'absolute',
          left: 35,
          top: 305
        }}
      >
        <Text
          style={{
            fontFamily: 'BlogScript',
            fontSize: 60,
            color: '#FFF',
            lineHeight: 1.3
          }}
        >
          {'FACTS ABOUT \nOUR \nMICROBIOME'}
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default FactsAboutOurMicrobiomePage;

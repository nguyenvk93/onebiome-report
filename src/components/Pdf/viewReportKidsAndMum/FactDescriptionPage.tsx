import {
  View, Text, Image
} from '@react-pdf/renderer';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

const FactDescriptionPage = ({ pageNumber }: any) => {
  return (
    <View
      style={{
        width: A4_FULL_WIDTH_POINT,
        height: A4_FULL_HEIGHT_POINT,
        position: 'relative',
        backgroundColor: '#e8f6fe'
      }}
    >
      <Image
        src="/img/pdf/baby_seed.jpg"
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
          marginLeft: 48,
          marginTop: 143,
          lineHeight: 1.3
        }}
      >
        <Text
          style={{
            fontFamily: 'BlogScript',
            fontSize: 24,
            color: '#009FE3'
          }}
        >
          {'IN THE FIRST PLACE, WHERE\nDOES THE MICROBIOME\nWHICH HAS CO-EVOLVED IN,\nHARMONY WITH US,\nCOME FROM?\n\n'}
        </Text>
      </View>
      <View
        style={{
          marginLeft: 48
        }}
      >
        <Text
          style={{
            fontFamily: 'Gotham',
            fontSize: 14,
            color: '#000'
          }}
        >
          {'Well, did you know that these microbes are\ntransmitted during birth from mum to baby?\n\n'}
          {'As a metaphor, when a plant is about to release a\nseed, she will coat the seed with beneficial\nmicrobes in order to protect the young\nplant from environmental stressors, such\nas fungal infection or drought.\n\n'}
          {'Similarly, when a mother-to-be is about to\ngive birth, she will wrap or cocoon her\nbaby in a healthy microbiome blanket\nto nurture his/her lifelong health.\n\n'}
          {'Therefore, the microbiome could be\nseen as a maternal legacy; a living\nbuilding block that is meant to sustain\nthe health of a new human being.'}
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default FactDescriptionPage;

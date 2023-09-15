import { View, Text, Image } from '@react-pdf/renderer';
import { USER_GENDERS } from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import Header from './Components/Header';
import PageNumber from './Components/PageNumber';

interface Props {
  member: any
  pageNumber: number
}

const BifidobacteriumLovePage = ({ member, pageNumber }: Props) => {
  const { gender } = member;
  let genderStr = 'boy';
  if (gender === USER_GENDERS.FEMALE) {
    genderStr = 'girl';
  }
  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <Image
        src={`/img/pdf/bidi_bg_${genderStr}.png`}
        style={{
          width: A4_FULL_WIDTH_POINT,
          height: A4_FULL_HEIGHT_POINT,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <Header title="Microbiome Composition" />
      <View
        style={{
          position: 'absolute',
          left: 261,
          top: 652,
          textAlign: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 26,
            lineHeight: 1.2,
            fontFamily: 'BlogScript',
            color: '#49BB61'
          }}
        >
          {'MICROBIAL FRIENDS LIKE\nBIFIDOBACTERIUM LOVE\nBREAST MILK SUGARS.'}
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default BifidobacteriumLovePage;

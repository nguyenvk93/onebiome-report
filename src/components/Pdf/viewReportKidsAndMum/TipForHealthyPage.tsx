import { Image, Text, View } from '@react-pdf/renderer';
import { USER_SAMPLE_ROLES } from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface Props {
  role: number
  pageNumber: number
}

const TipForHealthyPage = ({ role, pageNumber }: Props) => {
  return (
    <View
      style={{
        width: A4_FULL_WIDTH_POINT,
        height: A4_FULL_HEIGHT_POINT,
        position: 'relative'
      }}
    >
      <Image
        src="/img/pdf/tip_for_healthy_bg.jpg"
        style={{
          width: A4_FULL_WIDTH_POINT,
          height: A4_FULL_HEIGHT_POINT,
          position: 'absolute',
          top: 0
        }}
      />
      <View
        style={{
          position: 'absolute',
          left: 40,
          top: 345
        }}
      >
        <Text style={{
          fontFamily: 'BlogScript',
          fontSize: 30,
          color: '#fff',
          lineHeight: 2
        }}
        >{`TIPS TO NURTURE ${role === USER_SAMPLE_ROLES.BABY ? 'YOUR CHILD’S' : 'YOUR'}\n`}
        </Text>
        <Text style={{
          fontFamily: 'BlogScript',
          fontSize: 55,
          color: '#fff',
          lineHeight: 0.7
        }}
        >MICROBIOME
        </Text>
        <Text style={{
          fontFamily: 'Gotham',
          fontSize: 18,
          color: '#fff'
        }}
        >
          {`\nWhat are some habits that you\ncan practice daily to nurture a\n${role === USER_SAMPLE_ROLES.BABY ? 'healthy microbiome for your\nchild?' : 'healthy microbiome?'}`}
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default TipForHealthyPage;

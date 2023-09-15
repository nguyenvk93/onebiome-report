import {
  Text,
  View,
  Image
} from '@react-pdf/renderer';
import { A4_FULL_WIDTH_POINT } from '../../../../constants/PdfConstants';

interface Props {
  title?: string,
}

const FactHeader = (props: Props) => {
  const { title } = props;
  return (
    <View style={{
      width: A4_FULL_WIDTH_POINT,
      height: 58,
      position: 'relative'
    }}
    >
      <Image
        src="/img/pdf/header-green.png"
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      {
        title !== ''
          ? (
            <Text style={{
              fontSize: 12,
              fontFamily: 'Gotham',
              fontWeight: 700,
              color: '#fff',
              top: 21,
              left: 61,
              position: 'absolute'
            }}
            >{title}
            </Text>
          )
          : null
      }
    </View>
  );
};

FactHeader.defaultProps = {
  title: ''
};

export default FactHeader;

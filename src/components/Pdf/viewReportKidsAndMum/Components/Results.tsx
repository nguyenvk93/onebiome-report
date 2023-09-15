import {
  View,
  Image
} from '@react-pdf/renderer';

interface Props {
  top?: number,
}

const Results = ({ top }: Props) => {
  return (
    <View style={{
      width: 43,
      height: 139,
      position: 'absolute',
      right: 0,
      top
    }}
    >
      <Image
        src="/img/pdf/tag_results_purple@3x.jpg"
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </View>
  );
};

Results.defaultProps = {
  top: 102
};

export default Results;

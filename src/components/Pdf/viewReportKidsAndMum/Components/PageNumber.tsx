import { Text, View } from '@react-pdf/renderer';

interface Props {
  pageNumber?: any
  textColor?: string
  isShow?: boolean
}

const PageNumber = (props: Props) => {
  const { pageNumber, textColor, isShow } = props;
  if (!isShow) return <></>;
  return (
    <View style={{
      position: 'absolute',
      right: 15,
      bottom: 20
    }}
    >
      <Text
        style={{
          color: textColor,
          fontSize: 14,
          lineHeight: 1
        }}
      >
        {pageNumber && pageNumber < 10 ? `0${pageNumber}` : pageNumber}
      </Text>
    </View>
  );
};

PageNumber.defaultProps = {
  pageNumber: 1,
  textColor: '#000',
  isShow: false
};

export default PageNumber;

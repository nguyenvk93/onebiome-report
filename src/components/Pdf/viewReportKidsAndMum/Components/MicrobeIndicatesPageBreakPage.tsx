import {
  Text,
  View,
  Image,
  Page
} from '@react-pdf/renderer';
import {
  A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT, PORTRAIT
} from '../../../../constants/PdfConstants';
import Header from './Header';
import PageNumber from './PageNumber';
import Results from './Results';

interface Props {
  content: any,
  pageNumber: number,
  microArr: Array<string>,
}

const MicrobeIndicatesPageBreakPage = (props: Props) => {
  const { content, microArr, pageNumber } = props;
  return (
    <Page
      id={`page-${pageNumber}`}
      size={PORTRAIT}
      style={{
        fontFamily: 'Gotham',
        margin: 0,
        padding: 0
      }}
    >
      <View style={{
        width: A4_FULL_WIDTH_POINT,
        height: A4_FULL_HEIGHT_POINT,
        position: 'relative',
        backgroundColor: '#F7F1FF'
      }}
      >
        <Header title="Microbiome Composition" />
        <Image
          src="/img/pdf/footer_composition.jpg"
          style={{
            width: A4_FULL_WIDTH_POINT,
            height: 190,
            position: 'absolute',
            bottom: 0,
            left: 0
          }}
        />
        <Results />
        <View
          style={{
            marginLeft: 35,
            marginTop: 35,
            marginRight: 62
          }}
        >
          {
            microArr.map((arr, idx) => {
              return (
                <View
                  key={arr}
                  style={{
                    marginTop: idx > 0 ? 25 : 0
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      borderBottomColor: idx === microArr.length - 1 ? 'transparent' : '#E5E0EC',
                      borderBottomWidth: idx === microArr.length - 1 ? 0 : 4
                    }}
                  >
                    <View style={{ width: 152 }}>
                      <Text style={{
                        fontSize: 14,
                        color: '#161616',
                        lineHeight: 1.29,
                        fontStyle: 'italic'
                      }}
                      >
                        {arr}
                      </Text>
                    </View>
                    <View style={{ width: 345 }}>
                      {
                        content[arr].map((story: any) => { return <View key={Math.random()}>{story}</View>; })
                      }
                    </View>
                  </View>
                </View>
              );
            })
          }
        </View>
        <PageNumber pageNumber={pageNumber} />
      </View>
    </Page>
  );
};

export default MicrobeIndicatesPageBreakPage;

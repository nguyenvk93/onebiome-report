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

const MicrobeIndicatesPageFirstPage = (props: Props) => {
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
          <Text
            style={{
              fontWeight: 700,
              color: '#5d2a8b',
              fontSize: 14,
              marginBottom: 28
            }}
          >
            Who are these microbes* and what do they do?
          </Text>
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
                      {
                        arr === 'Bifidobacterium'
                          ? (
                            <>
                              <Text style={{
                                fontSize: 14,
                                color: '#161616',
                                lineHeight: 1.29,
                                fontStyle: 'italic'
                              }}
                              >
                                {`${arr}\n\n`}
                              </Text>
                              <Image
                                src="/img/pdf/baby_curled.png"
                                style={{ width: 98, height: 118 }}
                              />
                            </>
                          )
                          : (
                            <Text style={{
                              fontSize: 14,
                              color: '#161616',
                              lineHeight: 1.29,
                              fontStyle: 'italic'
                            }}
                            >
                              {arr}
                            </Text>
                          )
                      }

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
        <View
          style={{
            marginLeft: 35,
            position: 'absolute',
            bottom: 8
          }}
        >
          <Text
            style={{
              fontStyle: 'italic',
              fontSize: 8,
              color: '#5E5E5E'
            }}
          >* Only microbes that have been extensively studied and with data published in scientific literature are listed.
          </Text>
        </View>
        <PageNumber pageNumber={pageNumber} />
      </View>
    </Page>
  );
};

export default MicrobeIndicatesPageFirstPage;

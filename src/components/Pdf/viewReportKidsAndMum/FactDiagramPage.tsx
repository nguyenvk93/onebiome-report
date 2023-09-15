/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  View, Text, Image, Link
} from '@react-pdf/renderer';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT, LINE_HEIGHT_NORMAL_SENTENCE } from '../../../constants/PdfConstants';
import FactHeader from './Components/FactHeader';
import PageNumber from './Components/PageNumber';

const FactDiagramPage = ({ pageNumber }: any) => {
  return (
    <View
      style={{
        width: A4_FULL_WIDTH_POINT,
        height: A4_FULL_HEIGHT_POINT,
        position: 'relative',
        backgroundColor: '#e8f6fe'
      }}
    >
      <FactHeader title="Fact About Our Microbiome" />
      <View>
        <Text
          style={{
            marginTop: 10,
            textAlign: 'center',
            fontSize: 26,
            fontFamily: 'BlogScript',
            lineHeight: LINE_HEIGHT_NORMAL_SENTENCE,
            color: '#009fe3'
          }}
        >
          WHY IS OUR GUT MICROBIOME IMPORTANT?
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Gotham',
            fontWeight: 700,
            color: '#000000',
            lineHeight: LINE_HEIGHT_NORMAL_SENTENCE,
            textAlign: 'center'
          }}
        >
          {'A healthy gut microbiome contains a balanced composition of different\nclasses of microbes that have health-promoting functions.'}
        </Text>
      </View>

      <Image
        src="/img/pdf/fact_diagram_bg28042021.png"
        style={{
          position: 'absolute',
          width: A4_FULL_WIDTH_POINT,
          height: 701,
          top: 78
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          paddingTop: 8,
          paddingHorizontal: 65,
          height: 70,
          width: A4_FULL_WIDTH_POINT,
          backgroundColor: '#fff'
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Text
            style={{
              fontSize: 8,
              lineHeight: 1.5,
              color: '#5e5e5e'
            }}
          >1.&emsp;&ensp;
          </Text>
          <Text
            style={{
              fontSize: 8,
              lineHeight: 1.5,
              color: '#5e5e5e'
            }}
          >
            {'Essential Knowledge Briefings. '}
            <Text style={{ fontStyle: 'italic' }}>{'Gut Health in Early Life: Significance of the Gut Microbiota and Nutrition for Development and Future Health. '}</Text>
            {' ['}
            <Link
              src="https://www.essentialknowledgebriefings.com/downloads/gut-health-in-early-life-significance-of-the-gut-microbiota-and-nutrition-for-development-and-future-health/"
              style={{
                textDecoration: 'underline',
                color: '#009fe3'
              }}
            >
              <Text>Link</Text>
            </Link>
            ]
          </Text>

        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Text
            style={{
              fontSize: 8,
              lineHeight: 1.5,
              color: '#5e5e5e'
            }}
          >2.&emsp;&ensp;
          </Text>
          <Text
            style={{
              fontSize: 8,
              lineHeight: 1.5,
              color: '#5e5e5e'
            }}
          >
            {'Van de Wiele T, '}
            <Text style={{ fontStyle: 'italic' }}>et al. Nat Rev Rheumatol.</Text>
            {' 2016;12:398-411. ['}
            <Link
              src="https://pubmed.ncbi.nlm.nih.gov/27305853/"
              style={{
                textDecoration: 'underline',
                color: '#009fe3'
              }}
            >
              <Text>Link</Text>
            </Link>
            ]
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Text
            style={{
              fontSize: 8,
              lineHeight: 1.5,
              color: '#5e5e5e'
            }}
          >3.&emsp;&ensp;
          </Text>
          <Text
            style={{
              fontSize: 8,
              lineHeight: 1.5,
              color: '#5e5e5e'
            }}
          >
            {'Collado MC, '}
            <Text style={{ fontStyle: 'italic' }}>et al. Gut Microbes.</Text>
            {' 2012;3:352-65. ['}
            <Link
              src="https://pubmed.ncbi.nlm.nih.gov/22743759/"
              style={{
                textDecoration: 'underline',
                color: '#009fe3'
              }}
            >
              <Text>Link</Text>
            </Link>
            ]
          </Text>
        </View>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default FactDiagramPage;

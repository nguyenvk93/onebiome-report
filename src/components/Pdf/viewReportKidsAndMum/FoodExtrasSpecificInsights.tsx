/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Text, View, Image, Link
} from '@react-pdf/renderer';
import { USER_SAMPLE_ROLES } from '../../../constants/DefaultValues';
import {
  A4_FULL_WIDTH_POINT, A4_FULL_HEIGHT_POINT
} from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface Props {
  extraFood: any[]
  role: number
  pageNumber: number
}

const FoodExtrasSpecificInsights = ({ extraFood, role, pageNumber }: Props) => {
  const isBaby = role === USER_SAMPLE_ROLES.BABY;

  const extraArr: any = [];
  const extraCodeArr: any = [];

  extraFood.forEach((food: any) => {
    const { code, name, text } = food;
    if (!extraCodeArr.includes(code)) extraCodeArr.push(code);
    if (extraArr[code]) {
      extraArr[code].text.push(text);
    } else {
      extraArr[code] = {
        code,
        name,
        text: [text]
      };
    }
  });

  const styleReference = {
    fontSize: 8,
    lineHeight: 1.5,
    maxWidth: 492
  };

  const referencesContentBaby = (
    <>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={styleReference}>&emsp;&emsp;1.&emsp;&ensp;</Text>
        <Text style={styleReference}>
          {'Wang L, '}
          <Text style={{ fontStyle: 'italic' }}>et al. JAMA.</Text>
          {' 2021;326:519-30. ['}
          <Link
            src="https://pubmed.ncbi.nlm.nih.gov/34374722/"
            style={{
              textDecoration: 'underline',
              color: '#009fe3'
            }}
          >
            <Text style={styleReference}>Link</Text>
          </Link>
          ]
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={styleReference}>&emsp;&emsp;2.&emsp;&ensp;</Text>
        <Text style={styleReference}>
          {'Chang K, '}
          <Text style={{ fontStyle: 'italic' }}>et al. JAMA Pediatr.</Text>
          {' 2021;175:e211573. ['}
          <Link
            src="https://pubmed.ncbi.nlm.nih.gov/34125152/"
            style={{
              textDecoration: 'underline',
              color: '#009fe3'
            }}
          >
            <Text style={styleReference}>Link</Text>
          </Link>
          ]
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={styleReference}>&emsp;&emsp;3.&emsp;&ensp;</Text>
        <Text style={styleReference}>
          {'Costa CS, '}
          <Text style={{ fontStyle: 'italic' }}>et al. Nutr Metab Cardiovasc Dis.</Text>
          {' 2019;29:177-84. ['}
          <Link
            src="https://pubmed.ncbi.nlm.nih.gov/30660687/"
            style={{
              textDecoration: 'underline',
              color: '#009fe3'
            }}
          >
            <Text style={styleReference}>Link</Text>
          </Link>
          ]
        </Text>
      </View>
    </>
  );

  const referencesContentCommon = (
    <>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={styleReference}>&emsp;&emsp;{isBaby ? '4' : '1'}.&emsp;&ensp;</Text>
        <Text style={styleReference}>
          BMJ Newsroom. New evidence links ultra-processed foods with a range of health risks. 29 May 2019. [
          <Link
            src="https://www.bmj.com/company/newsroom/new-evidence-links-ultra-processed-foods-with-a-range-of-health-risks/"
            style={{
              textDecoration: 'underline',
              color: '#009fe3'
            }}
          >
            <Text style={styleReference}>Link</Text>
          </Link>
          ]
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={styleReference}>&emsp;&emsp;{isBaby ? '5' : '2'}.&emsp;&ensp;</Text>
        <Text style={styleReference}>
          {'Fadnes LT, '}
          <Text style={{ fontStyle: 'italic' }}>Jet al. PLoS Med.</Text>
          {' 2022;19:e1003889. ['}
          <Link
            src="https://pubmed.ncbi.nlm.nih.gov/35134067/"
            style={{
              textDecoration: 'underline',
              color: '#009fe3'
            }}
          >
            <Text style={styleReference}>Link</Text>
          </Link>
          ]
        </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={styleReference}>&emsp;&emsp;{isBaby ? '6' : '3'}.&emsp;&ensp;</Text>
        <Text style={styleReference}>
          Standford Medicine News Center. Fermented-food diet increases microbiome diversity, decreases inflammatory proteins, study finds. 12 July 2021. [
          <Link
            src="https://med.stanford.edu/news/all-news/2021/07/fermented-food-diet-increases-microbiome-diversity-lowers-inflammation.html"
            style={{
              textDecoration: 'underline',
              color: '#009fe3'
            }}
          >
            <Text style={styleReference}>Link</Text>
          </Link>
          ]
        </Text>
      </View>
    </>
  );

  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <Image
        src="/img/pdf/ffq/header_ffq.png"
        style={{
          width: A4_FULL_WIDTH_POINT,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <View
        style={{
          backgroundColor: 'rgba(0, 159, 227, 0.14)',
          borderRadius: 8,
          height: 31,
          marginTop: 35,
          marginBottom: 31,
          marginHorizontal: 'auto',
          paddingHorizontal: 11,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: '#009fe3',
            lineHeight: 0
          }}
        >
          {`${isBaby ? 'Read on to find out more about your child’s dietary intake of other foods.' : 'Read on to find out more about your dietary intake of other foods.'}`}
        </Text>
      </View>
      <View>
        {
          extraCodeArr.map((extra: any, idx: number) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <View key={idx}>
                <View
                  style={{
                    marginHorizontal: 88,
                    borderBottomWidth: idx === 0 ? 4 : 0,
                    borderBottomColor: '#efefef'
                  }}
                >
                  <View
                    style={{
                      marginHorizontal: -58,
                      display: 'flex',
                      flexDirection: 'row'
                    }}
                  >
                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Image
                        src={`/img/pdf/ffq/${extra}.png`}
                        style={{ width: 115, marginBottom: 12 }}
                      />
                      <Text
                        style={{
                          fontSize: 12.5,
                          fontWeight: 700,
                          color: '#000'
                        }}
                      >
                        {extraArr[extra].name}
                      </Text>
                    </View>
                    <View
                      style={{ paddingLeft: 25 }}
                    >
                      {
                        extraArr[extra].text.map((text: any, id: number) => {
                          return (
                            // eslint-disable-next-line react/no-array-index-key
                            <View key={id}>{text}</View>
                          );
                        })
                      }
                    </View>
                  </View>
                </View>
                <Text>{'\n'}</Text>
              </View>
            );
          })
        }
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 12,
          marginHorizontal: 35
        }}
      >
        <Text
          style={{
            fontWeight: 700,
            fontSize: 8
          }}
        >
          {'References:\n\n'}
        </Text>

        {
          isBaby
            ? (
              <>
                {referencesContentBaby}
                {referencesContentCommon}
              </>
            )
            : (
              <>
                {referencesContentCommon}
              </>
            )
        }
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default FoodExtrasSpecificInsights;

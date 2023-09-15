import {
  Text,
  View,
  Image
} from '@react-pdf/renderer';
import { A4_FULL_WIDTH_POINT, A4_FULL_HEIGHT_POINT } from '../../../constants/PdfConstants';
import Header from './Components/Header';
import PageNumber from './Components/PageNumber';
import Results from './Components/Results';

interface Props {
  isBaby: boolean
  microbeData: Array<any>
  isWeaned: boolean
  pageNumber: number
}

const MicroMeterPage = ({
  isBaby, microbeData, isWeaned, pageNumber
}: Props) => {
  let nameRender = [];
  let meterImg = '';
  let belowTag = '';
  let withinTag = '';
  let aboveTag = '';
  if (isBaby) {
    meterImg = '/img/meter/child/meter.png';
    belowTag = '/img/meter/child/below.png';
    withinTag = '/img/meter/child/within.png';
    aboveTag = '/img/meter/child/above.png';
  } else {
    meterImg = '/img/meter/mtb/meter.png';
    belowTag = '/img/meter/mtb/below.png';
    withinTag = '/img/meter/mtb/within.png';
    aboveTag = '/img/meter/mtb/above.png';
  }
  if (isBaby && !isWeaned) {
    nameRender = microbeData.map((micro, index: number) => {
      let description = '\n';
      if (['Bifidobacterium', 'Bacteroides'].includes(micro.name)) {
        description = 'Breast milk sugar consumer\n';
      } else if (micro.name === 'Lactobacillus') {
        description = 'Lactose consumer\n';
      }

      const minX = 0;
      const belowX = 43;
      const aboveX = 88;
      const maxX = 129;
      const {
        lower, upper, value, min, max
      } = micro;
      let corX = minX;
      let tag = belowTag;
      if (value > upper) {
        corX = aboveX + (maxX - aboveX) * ((value - upper) / (max - upper));
        corX = corX <= maxX ? corX : maxX;
        tag = aboveTag;
      } else if (value < lower) {
        corX = minX + (belowX - minX) * ((value - min) / (lower - min));
        corX = corX >= minX ? corX : minX;
        tag = belowTag;
      } else {
        corX = belowX + (aboveX - belowX) / ((upper - lower) / (value - lower));
        tag = withinTag;
      }

      return (
        <View
          key={micro.name}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: index === 0 ? 0 : 35
          }}
        >
          <View>
            <Text style={{
              fontFamily: 'Gotham',
              fontSize: 11,
              color: '#000',
              fontWeight: 700,
              fontStyle: 'italic',
              marginBottom: 10
            }}
            >{`${micro.name}`}
            </Text>
            <Text style={{
              fontFamily: 'Gotham',
              color: '#000',
              fontSize: 10
            }}
            >{`${description}`}
            </Text>
          </View>
          <View style={{ paddingTop: 10, position: 'relative' }}>
            <Image
              src={meterImg}
              style={{
                width: 135,
                height: 10
              }}
            />
            <Image
              src={tag}
              style={{
                width: 64,
                height: 54,
                position: 'absolute',
                top: -17,
                left: corX - 29
              }}
            />
          </View>
        </View>
      );
    });
  } else {
    nameRender = microbeData.map((micro, index: number) => {
      let description = '\n';
      if (
        [
          'Faecalibacterium',
          'Prevotella',
          'Roseburia',
          'Anaerostipes',
          'Ruminococcus',
          'Subdoligranulum',
          'Blautia',
          'Lachnospira',
          'Coprococcus'
        ].includes(micro.name)
      ) {
        description = 'Fibre and phytonutrient consumer\n';
      } else if (micro.name === 'Bifidobacterium') {
        description = 'Breast milk sugar consumer\nOmega-3 fatty acid consumer';
      } else if (['Eubacterium', 'Dialister'].includes(micro.name)) {
        description = 'Fibre consumer\n';
      } else if (
        [
          'Streptococcus',
          'Lactococcus',
          'Lactobacillus'
        ].includes(micro.name)
      ) {
        description = 'Lactose consumer\n';
      } else if (micro.name === 'Akkermansia') {
        description = 'Polyphenol consumer\n';
      }

      const minX = 0;
      const belowX = 43;
      const aboveX = 88;
      const maxX = 129;
      const {
        lower, upper, value, min, max
      } = micro;
      let corX = minX;
      let tag = belowTag;
      if (value > upper) {
        corX = aboveX + (maxX - aboveX) * ((value - upper) / (max - upper));
        corX = corX <= maxX ? corX : maxX;
        tag = aboveTag;
      } else if (value < lower) {
        corX = minX + (belowX - minX) * ((value - min) / (lower - min));
        corX = corX >= minX ? corX : minX;
        tag = belowTag;
      } else {
        corX = belowX + (aboveX - belowX) / ((upper - lower) / (value - lower));
        tag = withinTag;
      }

      return (
        <View
          key={micro.name}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: index === 0 ? 0 : 35
          }}
        >
          <View>
            <Text style={{
              fontFamily: 'Gotham',
              fontSize: 11,
              color: '#000',
              fontWeight: 700,
              fontStyle: 'italic',
              marginBottom: 10
            }}
            >{`${micro.name}`}
            </Text>
            <Text style={{
              fontFamily: 'Gotham',
              color: '#000',
              fontSize: 10
            }}
            >{`${description}`}
            </Text>
          </View>
          <View style={{ paddingTop: 10, position: 'relative' }}>
            <Image
              src={meterImg}
              style={{
                width: 135,
                height: 10
              }}
            />
            <Image
              src={tag}
              style={{
                width: 64,
                height: 54,
                position: 'absolute',
                top: -17,
                left: corX - 29
              }}
            />
          </View>
        </View>
      );
    });
  }

  return (
    <View
      style={{
        width: A4_FULL_WIDTH_POINT,
        height: A4_FULL_HEIGHT_POINT,
        backgroundColor: '#F7F1FF',
        position: 'relative'
      }}
    >
      <Header title="Microbiome Composition | Comparison with Database" />
      <Results />
      <View style={{ paddingTop: 38, paddingLeft: 35, paddingRight: 78 }}>
        <View style={{ textAlign: 'center', marginBottom: 30 }}>
          <Text style={{
            color: '#5d2a8b',
            fontSize: 14,
            lineHeight: 2,
            fontFamily: 'BlogScript',
            fontWeight: 700
          }}
          >
            {`HOW DO YOUR${isBaby ? ' CHILD’S' : ''} MICROBIAL FRIENDS COMPARE WITH\nTHOSE OF OTHER ${isBaby ? 'CHILDREN' : 'MUMS'}?`}
          </Text>
        </View>
        <View style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
        }}
        >
          <View style={{ textAlign: 'center' }}>
            <Text style={{
              fontFamily: 'Gotham',
              fontSize: 13,
              color: '#000',
              lineHeight: 1.5,
              fontWeight: 700
            }}
            >{'Microbial friends*\nlinked to healthy diet\n'}
            </Text>
          </View>
          <View style={{ textAlign: 'center' }}>
            <Text style={{
              fontFamily: 'Gotham',
              fontSize: 13,
              color: '#000',
              lineHeight: 1.5,
              fontWeight: 700
            }}
            >{`Relative abundance compared with the\n${isBaby ? 'Children' : 'Mum'} Microbiome Database`}
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 30, paddingRight: 82 }}>{nameRender}</View>
        <View />
      </View>
      <View style={{ position: 'absolute', bottom: 9, left: 35 }}>
        <Text style={{
          fontSize: 8, color: '#5E5E5E', fontStyle: 'italic'
        }}
        >
          *Only microbes that have been extensively studied and with data published in scientific literature are listed.
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default MicroMeterPage;

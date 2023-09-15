/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  View, Text, Image, Link
} from '@react-pdf/renderer';
import { DELIVERY_MODE, MILK_FEEDING, USER_GENDERS } from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface Props {
  milkFeeding: number
  deliveryMode: number
  gender: number
  summaryData: any
  summaryVDData: any
  pageNumber: number
}

const TipsPage = ({
  milkFeeding,
  deliveryMode,
  gender,
  summaryData,
  summaryVDData,
  pageNumber
}: Props) => {
  const babyImage = gender === USER_GENDERS.MALE ? 'boy' : 'girl';
  const filterData = deliveryMode === DELIVERY_MODE.VD_IAP ? summaryVDData : summaryData;
  const bifData = filterData.find((item: any) => { return item.name === 'Bifidobacterium'; });
  const bacData = filterData.find((item: any) => { return item.name === 'Bacteroides'; });

  const isBifHigher = !!(bifData && bifData.value >= bifData.lower);
  const isBacHigher = !!(bacData && bacData.value >= bacData.lower);

  const isBifIn = !!(bifData && isBifHigher && bifData.value <= bifData.upper);
  const isBacIn = !!(bacData && isBacHigher && bacData.value <= bacData.upper);
  const bifText = <Text style={{ fontStyle: 'italic' }}>Bifidobacterium</Text>;
  const bacText = <Text style={{ fontStyle: 'italic' }}>Bacteroides</Text>;
  const pageText = [];

  if ([DELIVERY_MODE.VD, DELIVERY_MODE.VD_IAP].includes(deliveryMode)) {
    if (!bacData || !bifData) {
      const bactText = bacData ? bacText : bifText;
      let subText;
      if (isBifHigher || isBacHigher) {
        const cpText = isBifIn || isBacIn ? 'similar' : 'higher';
        subText = (
          <Text>
            {`Your child has a ${cpText} abundance of\n`}
            {bactText}
            {'. '}
            {bactText}
            {' has the\nability to consume milk sugars present in\nbreast milk. It converts milk sugars into\nbeneficial biochemical molecules that sustain\na healthy gut.\n\n'}
          </Text>
        );
      } else {
        subText = (
          <Text>
            {'Your child has a lower abundance of\n'}
            {bactText}
            {'. '}
            {bactText}
            {' has the\nability to consume milk sugars present in\nbreast milk. It converts milk sugars into\nbeneficial biochemical molecules\nthat sustain a healthy gut.\n\n'}
          </Text>
        );
      }

      pageText.push({
        text: subText
      });
    } else if (isBifHigher && isBacHigher) {
      pageText.push({
        text: (
          <Text>
            {'Your child has important microbial friends\n('}
            {bifText}
            {' and '}
            {bacText}
            {') that have\nthe ability to consume milk sugars present\nin breast milk. These microbes convert milk\nsugars into beneficial biochemical molecules\nthat sustain a healthy gut.\n\n'}
          </Text>
        )
      });
    } else if (!isBifHigher && !isBacHigher) {
      pageText.push({
        text: (
          <Text>
            {'Your child has a lower abundance of\nimportant microbial friends ('}
            {bifText}
            {' and '}
            {bacText}
            {') that have the ability to\nconsume milk sugars present in breast milk.\nThese microbes convert milk sugars into\nbeneficial biochemical molecules that sustain\na healthy gut.\n\n'}
          </Text>
        )
      });
    } else {
      pageText.push({
        text: (
          <Text>
            {`Your child has a ${isBifIn || isBacIn ? 'similar' : 'higher'}`}
            {' abundance of\n'}
            {isBifHigher ? bifText : bacText}
            {' and a lower abundance of\n'}
            {!isBifHigher ? bifText : bacText}
            {'. These microbial friends have\nthe ability to consume milk sugars present\nin breast milk. They convert milk sugars into\nbeneficial biochemical molecules that sustain\na healthy gut.\n\n'}
          </Text>
        )
      });
    }

    if (milkFeeding === MILK_FEEDING.BREAST_MILK) {
      pageText.push({
        text: <Text>{'You indicated that you are breastfeeding.\nDo continue to breastfeed your child. You\ncan also discuss with your paediatrician to\nget more information about nurturing the\nmicrobial friends in your child’s gut.'}</Text>
      });
    } else if (milkFeeding === MILK_FEEDING.MIXED_FED) {
      pageText.push({
        text: <Text>{'You indicated that you are mix-feeding\n(combination of breastfeeding and formula\nfeeding). Do continue to breastfeed your\nchild. You can also discuss with your\npaediatrician to get more information about\nnurturing the microbial friends in your child’s\ngut.'}</Text>
      });
    } else {
      pageText.push({
        text: <Text>{'You indicated that you are formula feeding.\nYou can discuss with your paediatrician to\nget more information about nurturing the\nmicrobial friends in your child’s gut. If\ncircumstances require you to switch formulas,\ntalk to your paediatrician about transitioning\nyour child from one formula to another.'}</Text>
      });
    }
  }

  if (
    [
      DELIVERY_MODE.C_SECTION_ELECTIVE,
      DELIVERY_MODE.C_SECTION_EMERGENCY,
      DELIVERY_MODE.C_Section
    ].includes(deliveryMode)
  ) {
    pageText.push({
      text: (
        <Text>
          {'A lack of '}
          {bifText}
          {' has been observed\nin babies born by C-section. In vaginally-born\nbabies, '}
          {bifText}
          {' has the ability to use \nmilk sugars present in breast milk. By doing\nso, '}
          {bifText}
          {' shapes a healthy gut in\nyour baby.\n\n'}
        </Text>
      )
    });

    if (milkFeeding === MILK_FEEDING.BREAST_MILK) {
      pageText.push({
        text: <Text>{'You indicated that you are breastfeeding. Do\ncontinue to breastfeed your child. You can\nalso discuss with your paediatrician to get\nmore information about nurturing the\nmicrobial friends in your child’s gut.\n\n'}</Text>
      });
    } else if (milkFeeding === MILK_FEEDING.MIXED_FED) {
      pageText.push({
        text: <Text>{'You indicated that you are mix-feeding\n(combination of breastfeeding and formula\nfeeding). Do continue to breastfeed your\nchild. You can also discuss with your\npaediatrician to get more information about\nnurturing the microbial friends in your child’s\ngut.\n\n'}</Text>
      });
    } else {
      pageText.push({
        text: <Text>{'You indicated that you are formula feeding.\nYou can discuss with your paediatrician to\nget more information about nurturing the\nmicrobial friends in your child’s gut. If\ncircumstances require you to switch formulas,\ntalk to your paediatrician about transitioning\nyour child from one formula to another.\n\n'}</Text>
      });
    }
    pageText.push({
      text: (
        <Text>
          {'If you would like to find out more about the\nmicrobiome observed in babies born by C-section,\nplease visit the educational content section in\n'}
          <Link
            src="/kids/home"
            style={{
              fontFamily: 'Gotham',
              fontSize: 14,
              textDecoration: 'underline',
              textDecorationColor: '#0199DA',
              color: '#0199DA'
            }}
          >
            <Text>
              www.onebiome.com
            </Text>
          </Link>
        </Text>
      )
    });
  }
  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <Image
        src="/img/pdf/microbiome_bg_top.png"
        style={{
          width: A4_FULL_WIDTH_POINT,
          height: 346,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <View
        style={{
          marginLeft: 60,
          marginTop: 80
        }}
      >
        <Text
          style={{
            fontFamily: 'BlogScript',
            fontSize: 30,
            lineHeight: 1.4,
            color: '#009FE3'
          }}
        >{'HOW CAN YOU SUPPORT YOUR\n'}
        </Text>
        <Text
          style={{
            fontFamily: 'BlogScript',
            fontSize: 45,
            lineHeight: 1.9,
            color: '#009FE3'
          }}
        >{'CHILD\'S MICROBIOME?'}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginLeft: 60
        }}
      >
        <View>
          <Image
            src={`/img/pdf/breast_${babyImage}_baby.png`}
            style={{
              width: 116,
              height: 194
            }}
          />
        </View>
        <View
          style={{
            paddingLeft: 30
          }}
        >
          {
            pageText.length > 0
            && pageText.map((text: any, idx: number) => {
              return (
                <View
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  style={{
                    color: '#000000',
                    fontSize: 14,
                    lineHeight: 1.29
                  }}
                >{text.text}
                </View>
              );
            })
          }
        </View>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default TipsPage;

/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Image, Link, Text, View
} from '@react-pdf/renderer';
import { USER_SAMPLE_ROLES } from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';
import TableFirstRow from './Components/Table/TableFirstRow';
import TableHeader from './Components/Table/TableHeader';
import TableRow from './Components/Table/TableRow';

interface Props {
  role: number
  dataMicro: any
  isHigherMicro: any
  babyMonths?: number | any
  pageNumber: number
}

const WhatToEatPage = ({
  role, dataMicro, isHigherMicro, babyMonths, pageNumber
}: Props) => {
  const isBaby = role === USER_SAMPLE_ROLES.BABY;
  let secondNoteStr = '';
  let textTitleMicrobial = '';
  let textVegetable: any = '';
  let textNuts: any = null;
  let textMeat: any = null;
  let summaryText: any = null;
  let textNote: any = null;

  const styleFloat2: any = {
    fontFamily: 'Lucida',
    textAlign: 'center',
    fontSize: 10
  };

  const styleNote = {
    fontFamily: 'Gotham',
    fontStyle: 'italic',
    fontSize: 8,
    color: '#000000',
    lineHeight: 1.75
  };

  const sub = (text: string, textSub: string, fontSizeSub: number) => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={{ ...styleNote }}>{text}</Text>
        <View style={{ position: 'relative', backgroundColor: 'red' }}>
          <Text style={{
            ...styleNote, fontSize: fontSizeSub, position: 'absolute', top: 1, left: -1
          }}
          >{textSub}
          </Text>
        </View>
      </View>
    );
  };

  if (isBaby) {
    if (!isHigherMicro) {
      textTitleMicrobial = 'Microbial friends found in lower abundance in your child’s poop that are linked to healthy food and dietary patterns';
    } else {
      textTitleMicrobial = 'Microbial friends found in your child’s poop that are linked to healthy food and dietary patterns';
    }
    let SubTextAge = '';
    if (babyMonths < 12) {
      SubTextAge = '6 to 12 months';
      textVegetable = (
        <Text>
          <Text style={styleFloat2}>(½</Text>
          {'serving of veggies and\n'}
          <Text style={styleFloat2}> ½ </Text>
          serving of fruits/day)
        </Text>
      );
      textNuts = (<Text>(1-2 servings of grains/day)</Text>);
      textMeat = (
        <Text>
          <Text style={styleFloat2}>(½</Text>
          {'serving of meat and others and 1 '}
          <Text style={styleFloat2}> ½ </Text>
          {' servings of dairy or calcium rich foods/day)'}
        </Text>
      );
    } else if (babyMonths >= 24 && babyMonths < 36) {
      SubTextAge = '1 to 2 years';
      textVegetable = (
        <Text>
          <Text style={styleFloat2}>(½</Text>
          {'serving of veggies and\n'}
          <Text style={styleFloat2}> ½ </Text>
          {'  - 1 serving of fruits/day)'}
        </Text>
      );
      textNuts = (<Text>((2-3 servings of whole grains/day))</Text>);
      textMeat = (
        <Text>
          <Text style={styleFloat2}>(½</Text>
          {'serving of meat and others and 1 '}
          <Text style={styleFloat2}> ½ </Text>
          {' servings of dairy or calcium rich foods/day)'}
        </Text>
      );
    } else if (babyMonths >= 12 && babyMonths < 36) {
      textVegetable = (
        <Text>
          <Text style={styleFloat2}>(½</Text>
          {'serving of veggies and\n'}
          <Text style={styleFloat2}> ½ </Text>
          {'  - 1 serving of fruits/day)'}
        </Text>
      );
      textNuts = (<Text>((2-3 servings of grains/day))</Text>);
      SubTextAge = '1 to 2 years';
      textMeat = (
        <Text>
          <Text style={styleFloat2}>(½</Text>
          {'serving of meat and others and 1 '}
          <Text style={styleFloat2}> ½ </Text>
          {' servings of dairy or calcium rich foods/day)'}
        </Text>
      );
    } else {
      textVegetable = (
        <Text>
          {'(1 serving of veggies and\n1 serving of fruits/day)'}
        </Text>
      );
      textNuts = (<Text>(3-4 servings of whole grains/day)</Text>);
      SubTextAge = '3 to 6 years';
      textMeat = (
        <Text>
          (1 serving of meat and others and 1 serving of dairy or calcium rich foods/day)
        </Text>
      );
    }
    secondNoteStr = `Serving sizes indicated are for children ${SubTextAge} of age.`;
    summaryText = (
      <Text
        style={{
          fontFamily: 'Gotham',
          fontSize: 14,
          color: '#009fe3',
          lineHeight: 1.29
        }}
      >
        {'Thank you for filling out the Food Frequency Questionnaire on our '}
        <Text>OneBiome</Text>
        {' website. This will help us\n'}
        {'build a comprehensive Children Database based on microbiome and dietary patterns. In the future, we\n'}
        {'hope the database will enable us to provide you with more personalised food tips based on your child’s\n'}
        {'microbiome profile. You can find more information about the impact of diet/specific diets on the gut\n'}
        {'microbiome on our '}
        <Text>OneBiome</Text>
        {' website.'}
      </Text>
    );
    textNote = (
      <View style={{ position: 'absolute', bottom: 10 }}>
        <View
          style={{
            marginHorizontal: 30
          }}
        >
          <Text style={{ ...styleNote, fontStyle: 'normal' }}>* Local nutrition guidelines should guide child feeding.</Text>
        </View>
        <View
          style={{
            marginHorizontal: 30,
            marginTop: 10,
            position: 'relative'
          }}
        >
          <Text style={{
            ...styleNote, position: 'absolute', left: -1, top: -2, fontStyle: 'normal', fontSize: 6
          }}
          >+
          </Text>
          <Text style={styleNote}>
            &ensp;Ministry of Health Singapore. (n.d.). Healthy Food for Kids and Teens.
            <Text style={{ fontStyle: 'normal' }}>{' HealthHub. ['}</Text>
            <Link
              src="https://www.healthhub.sg/live-healthy/578/A%20Healthy%20Food%20Foundation%20-%20for%20Kids%20and%20Teens"
              style={{
                fontSize: 8,
                color: '#009FE3',
                textDecoration: 'underline',
                lineHeight: 1.5,
                fontStyle: 'normal'
              }}
            >
              <Text>Link</Text>
            </Link>
            <Text style={{ fontStyle: 'normal' }}>]</Text>
          </Text>
        </View>
      </View>
    );
  } else {
    textVegetable = (
      <Text>
        {'(3 servings of veggies and\n2 servings of fruits/day)'}
      </Text>
    );
    textNuts = (<Text>(6-7 servings/day)</Text>);
    textMeat = (
      <Text>
        {'(2 '}
        <Text style={styleFloat2}>½</Text>
        {' servings of meat and others and 1 serving of dairy or calcium-rich foods/day)'}
      </Text>
    );
    secondNoteStr = 'Serving sizes indicated are for pregnant women.';
    if (!isHigherMicro) {
      textTitleMicrobial = 'Microbial friends found in lower abundance in your poop that are linked to healthy food and dietary patterns';
    } else {
      textTitleMicrobial = 'Microbial friends found in your poop that are linked to healthy food and dietary patterns';
    }
    summaryText = (
      <Text
        style={{
          fontFamily: 'Gotham',
          fontSize: 14,
          color: '#009fe3',
          lineHeight: 1.29
        }}
      >
        {'Thank you for filling out the Food Frequency Questionnaire on our '}
        <Text>OneBiome</Text>
        {' website. This will help\n'}
        {'us build a comprehensive Mum Database based on microbiome and dietary patterns. In the future,\n'}
        {'we hope the database will enable us to provide you with more personalised food tips based on your\n'}
        {'microbiome profile. You can find more information about the impact of diet/specific diets on the gut\n'}
        {'microbiome on our '}
        <Text>OneBiome</Text>
        {' website.'}
      </Text>
    );
    textNote = (
      <View style={{ position: 'absolute', bottom: 3 }}>
        <View
          style={{
            marginHorizontal: 30,
            marginTop: 10,
            position: 'relative'
          }}
        >
          <Text style={{
            ...styleNote, position: 'absolute', left: -1, top: -2, fontStyle: 'normal', fontSize: 6
          }}
          >+
          </Text>
          <Text style={{ ...styleNote, lineHeight: 1 }}>
            &ensp;Ministry of Health Singapore. (n.d.). Nutrition During Pregnancy—Eating Right for Two.
            <Text style={{ fontStyle: 'normal' }}>{' HealthHub. ['}</Text>
            <Link
              src="https://www.healthhub.sg/live-healthy/578/A%20Healthy%20Food%20Foundation%20-%20for%20Kids%20and%20Teens"
              style={{
                fontSize: 8,
                color: '#009FE3',
                textDecoration: 'underline',
                lineHeight: 1.5,
                fontStyle: 'normal'
              }}
            >
              <Text>Link</Text>
            </Link>
            <Text style={{ fontStyle: 'normal' }}>]</Text>
          </Text>
        </View>
      </View>
    );
  }

  const dataArray: any = {};
  const microArray: any = [];

  dataMicro.forEach((micro: any) => {
    micro.col.forEach((item: any) => {
      let itemClone = item;
      if (isBaby && babyMonths < 24) {
        const index = itemClone.includes('Whole grains');
        if (index) {
          itemClone = itemClone.replace('Whole grains', 'Grains');
        }
      }
      if (dataArray[micro.microName]) {
        dataArray[micro.microName].push({
          mirco: micro.microName,
          text: item
        });
      } else {
        microArray.push(micro.microName);
        dataArray[micro.microName] = [
          {
            mirco: micro.microName,
            text: item
          }
        ];
      }
    });
  });

  return (
    <View
      style={{
        height: A4_FULL_WIDTH_POINT,
        width: A4_FULL_HEIGHT_POINT,
        position: 'relative'
      }}
    >
      <Image
        src="/img/pdf/whattoeat_bg.jpg"
        style={{
          height: A4_FULL_WIDTH_POINT,
          width: A4_FULL_HEIGHT_POINT,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <View
        style={{
          marginLeft: isBaby ? 95 : 110,
          marginTop: 40
        }}
      >
        <Text
          style={{
            fontFamily: 'BlogScript',
            fontSize: 22,
            lineHeight: 1,
            color: '#009FE3'
          }}
        >
          {`PERSONALISED FOOD TABLE BASED ON ${isBaby ? 'YOUR CHILD’S' : 'YOUR'} MICROBIOME`}
        </Text>
        <View
          style={{
            position: 'relative',
            marginTop: 12,
            marginBottom: 5,
            width: 264,
            marginLeft: 277
          }}
        >
          <Text
            style={styleNote}
          >
            {'Recommended food groups to consume for a healthy microbiome.\n'}
          </Text>
          {sub(secondNoteStr, '+', 6)}
        </View>
      </View>
      {/* TABLE */}
      <View style={{ marginLeft: 20 }}>
        {/* TABLE HEADER */}
        <TableHeader
          isBaby={isBaby}
          babyMonths={babyMonths}
          textVegetable={textVegetable}
          textNuts={textNuts}
          textMeat={textMeat}
        />
        {/* ROW 1 */}
        <TableFirstRow
          isBaby={isBaby}
          babyMonths={babyMonths}
          textTitleMicrobial={textTitleMicrobial}
          isHasMicro={microArray.length > 0}
        />
        {/* MIRCO ROWS */}
        {
          microArray.length > 0
            ? microArray.map((data: any) => {
              return (<TableRow key={data} micro={data} data={dataArray[data]} />);
            })
            : (<></>)
        }
      </View>
      <View
        style={{
          backgroundColor: '#DEF1FF',
          marginHorizontal: 30,
          marginTop: 12,
          paddingLeft: 30,
          paddingTop: 10,
          paddingBottom: 5
        }}
      >
        {summaryText}
      </View>
      {
        !isBaby
          ? (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 6,
                marginLeft: 80,
                marginRight: 30,
                position: 'relative',
                height: 53,
                paddingLeft: 55,
                paddingRight: 30,
                backgroundColor: '#fff'
              }}
            >
              <Image
                src="/img/pdf/quicktip_foodtable.png"
                style={{
                  position: 'absolute',
                  left: -50,
                  top: -4,
                  width: 96,
                  height: 63
                }}
              />
              <Text style={{ paddingTop: 8 }}>
                <Text
                  style={{
                    color: '#009fe3',
                    fontWeight: 700,
                    fontSize: 12,
                    lineHeight: 1.5
                  }}
                >QUICK TIP:
                </Text>
                <Text
                  style={{
                    color: '#1c1919',
                    fontSize: 12,
                    lineHeight: 1.5,
                    fontStyle: 'italic'
                  }}
                >
                  {' Next time you cook chicken rice at home, consider using brown rice. Or if you order chicken rice from a hawker stall, consider eating an apple for dessert.'}
                </Text>
              </Text>
            </View>
          )
          : (<></>)
      }
      <View
        style={{
          marginHorizontal: 30,
          marginTop: isBaby ? 30 : 10,
          borderWidth: 1,
          borderColor: '#979797',
          paddingLeft: 14,
          paddingTop: 5,
          paddingRight: 16
        }}
      >
        <Text
          style={{
            fontSize: 8,
            color: '#5e5e5e',
            lineHeight: 1.5,
            fontStyle: 'italic'
          }}
        >
          Please note that the list of foods provided are by no means exhaustive and should be used as a general reference only. For more information on specific diets for gut health, please consult your doctor.
        </Text>
      </View>
      {textNote}
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

WhatToEatPage.defaultProps = {
  babyMonths: 0
};

export default WhatToEatPage;

/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Image, Link, Text, View
} from '@react-pdf/renderer';
import { USER_SAMPLE_ROLES } from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface Props {
  role: any
  babyMonths: number
  higherMicro: any
  lowerMicro: any
  pageNumber: number
}

const SupportYourMicrobiomePage = ({
  role, babyMonths, higherMicro, lowerMicro, pageNumber
}: Props) => {
  const isBaby = role === USER_SAMPLE_ROLES.BABY;
  let descriptContentOne;
  let descriptContentThree;
  let footer;

  const styleDef: any = {
    fontFamily: 'Gotham',
    fontSize: 13,
    color: '#009FE3',
    lineHeight: 1.3
  };

  const sub = (text: string, textSub: string, fontSizeSub: number) => {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={{ ...styleDef }}>{text}</Text>
        <View style={{ position: 'relative', backgroundColor: 'red' }}>
          <Text style={{
            ...styleDef, fontSize: fontSizeSub, position: 'absolute', top: 1, left: -1
          }}
          >{textSub}
          </Text>
        </View>
      </View>
    );
  };

  const descriptContentTwo = (
    <Text
      style={{
        fontFamily: 'Gotham',
        fontSize: 13,
        color: '#009FE3',
        lineHeight: 1.3
      }}
    >
      {'We will provide you with a list of specific foods that,\naccording to existing research, help nurture these\nmicrobial friends.\n\n'}
    </Text>
  );

  const year1Footer = (
    <>
      <Text style={{ fontSize: 8, lineHeight: 1.5 }}>
        1.&emsp;
        {'Baïz N, et al. '}
        <Text style={{ fontStyle: 'italic' }}>Allergy Asthma Clin Immunol.</Text>
        {' 2019;15:40. ['}
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/31285746"
          style={{ textDecoration: 'underline', color: '#009fe3' }}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>

      <Text style={{ fontSize: 8, lineHeight: 1.5 }}>
        2.&emsp;
        {'Jacka FN, et al. '}
        <Text style={{ fontStyle: 'italic' }}>J Am Acad Child Adolesc Psychiatry.</Text>
        {' 2013;52:1038-47. ['}
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/24074470/"
          style={{ textDecoration: 'underline', color: '#009fe3' }}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>

      <Text style={{ fontSize: 8, lineHeight: 1.5 }}>
        3.&emsp;
        {'Dimov S, et al. '}
        <Text style={{ fontStyle: 'italic' }}>Nutr Neurosci.</Text>
        {' 2021;24:62-70. ['}
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/30890044/"
          style={{ textDecoration: 'underline', color: '#009fe3' }}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
    </>
  );

  const babyFooter = (
    <>
      <Text style={{ fontSize: 8, lineHeight: 1.5 }}>
        1.&emsp;
        {'Grimshaw KE, '}
        <Text style={{ fontStyle: 'italic' }}>et al.  J Allergy Clin Immunol.</Text>
        {' 2014;133:511-9. ['}
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/23891269"
          style={{ textDecoration: 'underline', color: '#009fe3' }}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>

      <Text style={{ fontSize: 8, lineHeight: 1.5 }}>
        2.&emsp;
        {'Roduit C, '}
        <Text style={{ fontStyle: 'italic' }}>et al. J Allergy Clin Immunol.</Text>
        {' 2014;133:1056-64. ['}
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/24074470/"
          style={{ textDecoration: 'underline', color: '#009fe3' }}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
    </>
  );

  const MtbFooter = (
    <>
      <Text style={{ fontSize: 8, lineHeight: 1.5 }}>
        1.&emsp;
        {'Baïz N, '}
        <Text style={{ fontStyle: 'italic' }}>et al. Allergy Asthma Clin Immunol.</Text>
        {' 2019;15:40. ['}
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/31285746"
          style={{ textDecoration: 'underline', color: '#009fe3' }}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>

      <Text style={{ fontSize: 8, lineHeight: 1.5 }}>
        2.&emsp;
        {'Biagi C, et al. Nutrients. '}
        <Text style={{ fontStyle: 'italic' }}>et al. J Allergy Clin Immunol..</Text>
        {' 2019;11:997. ['}
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/31052443/"
          style={{ textDecoration: 'underline', color: '#009fe3' }}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
    </>
  );
  if (isBaby) {
    if (lowerMicro[0].length > 0) {
      descriptContentOne = (
        <Text style={{ ...styleDef }}>
          In your child’s
          <Text style={{ fontWeight: 700 }}>{' Personalised Food Table, '}</Text>
          {'we will show some of\nthe key microbial friends for which a lot of scientific data are\navailable.\n\n'}
        </Text>
      );
      footer = babyFooter;
      if (babyMonths >= 12) {
        descriptContentThree = (
          <>
            <Text style={{ ...styleDef }}>
              {'The influence of a healthy diet or diet quality on allergy\nrisk and mental health has been shown in several\n'}
            </Text>
            {sub('mother-child and pre-adolescent cohort studies.', '1-3', 6)}
            <Text style={{ ...styleDef }}>{'Scientists are investigating how the gut microbiome\nexerts a positive impact on health.'}</Text>
          </>
        );
        footer = year1Footer;
      } else {
        descriptContentThree = (
          <Text style={{ ...styleDef }}>
            {'Recent studies indicate that a healthy infant/baby diet\nthat is diverse, predominantly home cooked, and\nincludes plenty of fruits and vegetables may protect\nagainst the development of allergies in early life.'}
          </Text>
        );
      }
    } else if (higherMicro[0].length > 0) {
      descriptContentOne = (
        <Text style={{ ...styleDef }}>
          In your child’s
          <Text style={{ fontWeight: 700 }}>{' Personalised Food Table, '}</Text>
          {'we will show some of\nthe key microbial friends that are present in your child’s gut and\nfor which a lot of scientific data are available.\n\n'}
        </Text>
      );
      footer = babyFooter;
      if (babyMonths >= 12) {
        descriptContentThree = (
          <Text style={{ ...styleDef }}>
            {'The influence of a healthy diet or diet quality on allergy\nrisk and mental health has been shown in several\nmother-child and pre-adolescent cohort studies. \nScientists are investigating how the gut microbiome\nexerts a positive impact on health.'}
          </Text>
        );
        footer = year1Footer;
      } else {
        descriptContentThree = (
          <Text style={{ ...styleDef }}>
            {'Recent studies indicate that a healthy infant/baby diet\nthat is diverse, predominantly home cooked, and\nincludes plenty of fruits and vegetables may protect\nagainst the development of allergies in early life.'}
          </Text>
        );
      }
    }
  } else if (lowerMicro[0].length > 0) {
    footer = MtbFooter;
    descriptContentOne = (
      <Text style={{ ...styleDef }}>
        In your
        <Text style={{ fontWeight: 700 }}>{' Personalised Food Table, '}</Text>
        {'we will show some of\nthe key microbial friends for which a lot of scientific\ndata are available.\n\n'}
      </Text>
    );
    descriptContentThree = (
      <Text style={{ ...styleDef }}>{'Recent studies indicate that maternal diets that are\nhigh in fibre during pregnancy and a high adherence\n to a Mediterranean diet may prevent babies from\ndeveloping allergies in early life.'}
      </Text>
    );
  } else if (higherMicro[0].length > 0) {
    footer = MtbFooter;
    descriptContentOne = (
      <Text style={{ ...styleDef }}>
        In your
        <Text style={{ fontWeight: 700 }}>{' Personalised Food Table, '}</Text>
        {'we will show some of\nthe key microbial friends that are present in your gut\nand for which a lot of scientific data are available.\n\n'}
      </Text>
    );
    descriptContentThree = (
      <Text style={{ ...styleDef }}>{'Recent studies indicate that maternal diets that are\nhigh in fibre during pregnancy and a high adherence\n to a Mediterranean diet may prevent babies from\ndeveloping allergies in early life.'}
      </Text>
    );
  }

  return (
    <View
      style={{
        width: A4_FULL_WIDTH_POINT,
        height: A4_FULL_HEIGHT_POINT,
        position: 'relative',
        paddingTop: 60,
        paddingLeft: 65
      }}
    >
      <Image
        src="/img/pdf/microbiome_bg_top.png"
        style={{
          width: A4_FULL_WIDTH_POINT,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <Text
        style={{
          fontFamily: 'BlogScript',
          fontSize: 30,
          lineHeight: 1.5,
          marginLeft: -5,
          color: '#009FE3'
        }}
      >{`HOW CAN YOU SUPPORT ${isBaby ? 'YOUR' : ''}\n`}
      </Text>
      <Text
        style={{
          fontFamily: 'BlogScript',
          fontSize: 45,
          lineHeight: 1,
          marginLeft: -5,
          color: '#009FE3'
        }}
      >{`${isBaby ? 'CHILD’S MICROBIOME?' : 'YOUR MICROBIOME?'}`}
      </Text>
      <Text
        style={{
          fontFamily: 'Gotham',
          fontWeight: 700,
          fontSize: 14,
          color: '#000000',
          marginTop: 25,
          marginBottom: 15,
          lineHeight: 1.5
        }}
      >
        {'Remember that a balanced diet is needed to\nnurture/nourish a balanced microbiome.'}
      </Text>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 15
          }}
        >
          <View
            style={{
              width: 133,
              position: 'relative'
            }}
          >
            <Image
              src="/img/pdf/food_omni_2.png"
              style={{
                width: 144,
                top: -12,
                left: -12,
                position: 'absolute'
              }}
            />
          </View>
          <Text
            style={{
              fontFamily: 'Gotham',
              fontSize: 14,
              color: '#000000',
              lineHeight: 1.3
            }}
          >
            {
              `A balanced diet that includes plant-based foods\n(fruits, vegetables, legumes, grains), foods that are\nrich in omega-3 fatty acids (fish, seafood, nuts) and\nfermented foods (yoghurt, kefir) help to nurture the\ngrowth and activity of our microbial friends and\nsustain ${isBaby ? 'your child’s' : 'your'} overall microbiome diversity.`
            }
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 15
          }}
        >
          <View
            style={{
              width: 133,
              position: 'relative'
            }}
          >
            <Image
              src={`/img/pdf/${isBaby ? 'junkfoodBaby' : 'junkfood'}.png`}
              style={{
                width: isBaby ? 105 : 81,
                top: isBaby ? 20 : -15,
                position: 'absolute'
              }}
            />
          </View>
          <Text
            style={{
              fontFamily: 'Gotham',
              fontSize: 14,
              color: '#000000',
              lineHeight: 1.3
            }}
          >
            {
              'Avoid or minimise the consumption of processed\nand ultra-processed foods (e.g. snacks or baked\ngoods with preservatives and additives) as these\nhave been shown to negatively impact the gut\nmicrobiome.'
            }
          </Text>
        </View>
        <View style={{ paddingBottom: 5, paddingRight: 45 }}>
          <Text
            style={{
              fontFamily: 'Gotham',
              fontSize: 14,
              color: '#000000',
              lineHeight: 1.3
            }}
          >
            {`Refer to the next page for your ${isBaby ? 'child’s ' : ''}`}
            <Text
              style={{
                fontWeight: 700
              }}
            >Personalised Food Table
            </Text>
            {`${isBaby
              ? ' to help you plan a well-balanced diet that can sustain or boost the microbial friends in your child’s gut.'
              : ' to help you plan a well-balanced diet that can sustain or boost a healthy gut microbiome.'}`}
          </Text>
        </View>
        <View style={{
          position: 'relative', paddingTop: 25, paddingLeft: 15
        }}
        >
          <Image
            src="/img/pdf/blue_box_man_bg_baby.png"
            style={{
              width: 512, position: 'absolute', top: 0, left: 0
            }}
          />
          {descriptContentOne}
          {descriptContentTwo}
          {descriptContentThree}
        </View>
      </View>
      <View style={{ position: 'absolute', top: 782, marginLeft: 65 }}>
        <Text style={{ fontSize: 8, fontWeight: 700, marginBottom: 7 }}>References:</Text>
        <View style={{ paddingLeft: 17 }}>
          {footer}
        </View>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default SupportYourMicrobiomePage;

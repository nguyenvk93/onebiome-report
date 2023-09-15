/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Image, Text, View, Link
} from '@react-pdf/renderer';
import { DELIVERY_MODE, TIME_POINT, USER_SAMPLE_ROLES } from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import { isMom } from '../../../utility/ProfileUtils';
import Header from './Components/Header';
import PageNumber from './Components/PageNumber';
import Results from './Components/Results';

const getMicrobesNameInSummary = (summaryData: Array<any>) => {
  const higherMicrobes: Array<any> = [];
  const similarMicrobes: Array<any> = [];
  const lowerMicrobes: Array<any> = [];
  if (summaryData && summaryData.length > 0) {
    summaryData.forEach((item) => {
      const {
        value, lower, upper, name
      } = item;
      if (value < lower) {
        lowerMicrobes.push(name);
      } else if (value >= lower && value <= upper) {
        similarMicrobes.push(name);
      } else if (value > upper) {
        higherMicrobes.push(name);
      }
    });
  }
  return {
    higherMicrobes,
    similarMicrobes,
    lowerMicrobes
  };
};

const getMicrobesText = (nameMicrobes: Array<any>) => {
  if (nameMicrobes) {
    if (nameMicrobes.length === 1) {
      return (
        <Text style={{ fontStyle: 'italic' }}>{nameMicrobes[0]}</Text>
      );
    }
    if (nameMicrobes.length > 1) {
      const lastMicrobe = nameMicrobes.pop();
      return (
        <Text>
          <Text style={{ fontStyle: 'italic' }}>{nameMicrobes.join(', ')}</Text>
          {' and '}
          <Text style={{ fontStyle: 'italic' }}>{lastMicrobe}</Text>
        </Text>
      );
    }
  }

  return <Text />;
};

interface ContentProps {
  higherMicrobes: Array<any>,
  similarMicrobes: Array<any>,
  lowerMicrobes: Array<any>,
  member: any,
}

const getSummaryContent = ({
  higherMicrobes,
  similarMicrobes,
  lowerMicrobes,
  member
}: ContentProps) => {
  const bdContent = [];
  let textSummary = '';
  if (isMom(member)) {
    textSummary = 'You have a';
  } else {
    textSummary = 'Your child has a';
  }
  if (higherMicrobes.length > 0) {
    bdContent.push(
      <Text>
        {`${textSummary} higher abundance of `}
        {getMicrobesText(higherMicrobes)}
      </Text>
    );
  }
  if (similarMicrobes.length > 0) {
    bdContent.push(
      <Text>
        {`${textSummary} similar abundance of `}
        {getMicrobesText(similarMicrobes)}
      </Text>
    );
  }
  if (lowerMicrobes.length > 0) {
    bdContent.push(
      <Text>
        {`${textSummary} lower abundance of `}
        {getMicrobesText(lowerMicrobes)}
      </Text>
    );
  }
  return bdContent;
};

interface Props {
  role: number
  deliveryMode: number
  isBabyWeaned: boolean
  resultCompare: any
  summaryData: Array<any>
  summaryVDData: Array<any>
  member: any
  sample: any
  pageNumber: number
}

const SummaryDescriptionPage = ({
  role,
  deliveryMode,
  isBabyWeaned,
  resultCompare,
  summaryData,
  summaryVDData,
  member,
  sample,
  pageNumber
}: Props) => {
  const isBaby = role === USER_SAMPLE_ROLES.BABY;
  const isBabyVDIAP = isBaby && member.deliveryMode === DELIVERY_MODE.VD_IAP;
  const isBabyCSection = isBaby
    && [
      DELIVERY_MODE.C_Section,
      DELIVERY_MODE.C_SECTION_ELECTIVE,
      DELIVERY_MODE.C_SECTION_EMERGENCY
    ].includes(member.deliveryMode);
  const isMoreThan12Month = (sample.monthTimePoint && sample.monthTimePoint > 12)
    || (sample.timePoint && sample.timePoint === TIME_POINT.Y1A);

  // SUMMARY
  const { higherMicrobes, similarMicrobes, lowerMicrobes } = getMicrobesNameInSummary(summaryData);
  let summaryMicrobes = getSummaryContent({
    higherMicrobes,
    similarMicrobes,
    lowerMicrobes,
    member
  });
  // Hide C_SECTION_EMERGENCY and DELIVERY_MODE.VD_IAP > 1 year old
  if (isBaby && isMoreThan12Month && (member.deliveryMode === DELIVERY_MODE.C_SECTION_EMERGENCY || isBabyVDIAP)) {
    summaryMicrobes = [];
  }
  if (isBaby) {
    // c-section || vdiap
    if (isBabyCSection || isBabyVDIAP) {
      if (isBabyCSection) {
        summaryMicrobes.unshift(<Text style={{ fontWeight: 700 }}>Compared with the average child born by C-section in our database:</Text>);
        if (
          (member.deliveryMode === DELIVERY_MODE.C_SECTION_EMERGENCY
            || member.deliveryMode === DELIVERY_MODE.C_SECTION_ELECTIVE)
          && isMoreThan12Month
        ) {
          summaryMicrobes = [];
        }
      } else if (isBabyVDIAP) {
        summaryMicrobes.unshift(<Text style={{ fontWeight: 700 }}>Compared with the average child born vaginally with IAP in our database:</Text>);
        if (member.deliveryMode === DELIVERY_MODE.VD_IAP && isMoreThan12Month) {
          summaryMicrobes = [];
        }
      }

      summaryMicrobes.push(<Text style={{ fontWeight: 700 }}>Compared with the average child born vaginally in our database:</Text>);
    } else {
      // VD
      summaryMicrobes.unshift(<Text style={{ fontWeight: 700 }}>Compared with the average child in our database:</Text>);
    }

    const limitVDMicrobes = getMicrobesNameInSummary(summaryVDData);
    const summaryVD = getSummaryContent({
      higherMicrobes: limitVDMicrobes.higherMicrobes,
      similarMicrobes: limitVDMicrobes.similarMicrobes,
      lowerMicrobes: limitVDMicrobes.lowerMicrobes,
      member
    });
    summaryMicrobes = summaryMicrobes.concat(summaryVD);
  } else {
    // Mother
    summaryMicrobes.unshift(<Text style={{ fontWeight: 700 }}>Compared with the average mum in our database:*</Text>);
  }

  const isCSection = [
    DELIVERY_MODE.C_SECTION_ELECTIVE,
    DELIVERY_MODE.C_SECTION_EMERGENCY,
    DELIVERY_MODE.C_Section
  ].includes(deliveryMode);
  const isVDIAP = deliveryMode === DELIVERY_MODE.VD_IAP;

  const goodMicroHigher = [];
  const goodMicroLower: Array<any> = [];

  let textSumaryFirst = 'Mum';
  let textSumaryContent = 'your';
  let textSumaryafter = 'microbes associated with a healthy dietary pattern, healthy gut and robust immunity.';
  let textSumaryOne: any = <Text />;
  let textSumaryTwo: any = <Text />;
  let textSumaryThree: any = <Text />;
  let textNotes: any = <Text />;

  let dataGoodMicrobe;
  const { goodMicrobeData, goodVDMicrobeData } = resultCompare;
  if ((isCSection || isVDIAP) && isBaby) {
    dataGoodMicrobe = goodVDMicrobeData;
  } else {
    dataGoodMicrobe = goodMicrobeData;
  }

  // get higher and lower
  dataGoodMicrobe.forEach((item: any) => {
    if (item.value >= item.lower) {
      goodMicroHigher.push(item);
    } else {
      goodMicroLower.push(item);
    }
  });

  if (isBaby) {
    if (isBabyWeaned && goodMicroHigher.length === 0) {
      textNotes = (
        <View style={{
          fontSize: 12,
          color: '#000000',
          lineHeight: 1.5,
          marginBottom: 15
        }}
        >{'Later in the report, we will elaborate on practical tips to nurture your child’s microbiome.\n\nResearch is ongoing to determine how different factors, like our diet, can shape the gut microbiome in early life.'}
        </View>
      );
    }
  } else if (!isBaby && goodMicroHigher.length === 0) {
    textNotes = (
      <View style={{
        fontSize: 12,
        color: '#000000',
        lineHeight: 1.5,
        marginBottom: 15
      }}
      >{'Later in the report, we will elaborate on practical tips to nurture your microbiome.\n\nResearch is ongoing to determine how different factors, like our diet, can shape the gut microbiome in early life.'}
      </View>
    );
  }

  // case 1
  if (goodMicroHigher.length > 0 && goodMicroLower.length === 0) {
    if (isBaby) {
      textSumaryFirst = 'Children';
      textSumaryContent = "your child's";
      if (isBabyWeaned) {
        textSumaryafter = 'microbes associated with a healthy dietary pattern, healthy gut and robust immunity.';
      } else {
        textSumaryafter = 'microbes with the ability to use the milk sugars present in breast milk.';
      }
    }
    textSumaryOne = (
      <Text style={{
        fontSize: 12,
        color: '#000000',
        lineHeight: 1.5,
        marginBottom: 15
      }}
      >{`Compared with our ${textSumaryFirst} Microbiome Database, ${textSumaryContent} microbiome profile indicates the presence of ${textSumaryafter}\n`}
      </Text>
    );
  }

  // case 2
  if (goodMicroHigher.length > 0 && goodMicroLower.length > 0) {
    if (isBaby) {
      textSumaryFirst = 'Children';
      textSumaryContent = "your child's";
      if (isBabyWeaned) {
        textSumaryafter = 'microbes associated with a healthy dietary pattern, healthy gut and robust immunity.';
      } else {
        textSumaryafter = 'microbes with the ability to use the milk sugars present in breast milk.';
      }
    }
    const microbesLowerData = goodMicroLower.map((i) => { return i.bacteriaName; });
    let microbesLower;
    if (microbesLowerData.length === 1) {
      microbesLower = microbesLowerData.join(', ');
    } else {
      const microbesLowerBefore = microbesLowerData.slice(0, -1);
      const microbesLowerAfter = microbesLowerData.slice(-1);
      microbesLower = (
        <Text>
          <Text style={{
            fontSize: 12,
            color: '#000000',
            lineHeight: 1.5,
            marginBottom: 15
          }}
          >{`${microbesLowerBefore.join(', ')}`}
          </Text>
          {' and '}
          <Text style={{ fontStyle: 'italic' }}>{microbesLowerAfter.join(', ')}</Text>
        </Text>
      );
    }
    textSumaryTwo = (
      <Text style={{
        fontSize: 12,
        color: '#000000',
        lineHeight: 1.5,
        marginBottom: 15
      }}
      >
        {`Compared with our ${textSumaryFirst} Microbiome Database, ${textSumaryContent} microbiome profile indicates the presence of ${textSumaryafter} In addition, the comparison indicates a lower abundance of `}
        <Text style={{ fontStyle: 'italic' }}>{microbesLowerData.length === 1 ? `${microbesLower}` : microbesLower}</Text>
        {'.\n'}
      </Text>
    );
  }

  // case 3
  if (goodMicroHigher.length === 0) {
    if (isBaby) {
      textSumaryFirst = 'Children';
      textSumaryContent = "your child's";
      if (isBabyWeaned) {
        textSumaryafter = 'microbes associated with a healthy dietary pattern, healthy gut and robust immunity.';
      } else {
        textSumaryafter = 'microbes with the ability to use the milk sugars present in breast milk.';
      }
    }
    textSumaryThree = (
      <Text style={{
        fontSize: 12,
        color: '#000000',
        lineHeight: 1.5,
        marginBottom: 15
      }}
      > {`Compared with our ${textSumaryFirst} Microbiome Database, ${textSumaryContent} microbiome profile indicates fewer ${textSumaryafter}\n`}
      </Text>
    );
  }

  return (
    <View style={{
      width: A4_FULL_WIDTH_POINT,
      height: A4_FULL_HEIGHT_POINT,
      position: 'relative',
      backgroundColor: '#F7F1FF'
    }}
    >
      <Header title="Microbiome Composition | Comparison with Database" />
      <Results />
      <Image
        src="/img/pdf/footer_composition.jpg"
        style={{
          width: A4_FULL_WIDTH_POINT,
          position: 'absolute',
          bottom: 0,
          left: 0
        }}
      />
      <View
        style={{
          width: 458,
          height: 'auto',
          marginLeft: 53,
          marginTop: 44

        }}
      >
        <View
          style={{
            backgroundColor: '#ebe2fd',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 12,
            paddingBottom: 22
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 12,
                color: '#161616',
                marginBottom: 15
              }}
            >SUMMARY
            </Text>
            {textSumaryOne}
            {textSumaryTwo}
            {textSumaryThree}
            {textNotes}
          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 15
          }}
          >
            <View style={{ minWidth: 90 }}>
              <Image src="/img/pdf/bacteria_summary.png" style={{ width: 73 }} />
            </View>
            <View style={{ width: '100%' }}>
              {
                summaryMicrobes.map((text: any, idx: number) => {
                  return (
                    <Text
                      // eslint-disable-next-line react/no-array-index-key
                      key={idx}
                      style={{
                        fontFamily: 'Gotham',
                        fontSize: 12,
                        color: '#161616',
                        marginTop: idx === 0 ? 4 : 10
                      }}
                    >{text}
                    </Text>
                  );
                })
              }
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 45,
          display: 'flex',
          flexDirection: 'row',
          marginLeft: 65,
          marginRight: 102,
          justifyContent: 'space-between'
        }}
      >
        <View>
          <Image
            src="/img/pdf/microbiomediversity_good20201215.jpg"
            style={{
              width: 183,
              height: 158
            }}
          />
        </View>
        <View>
          <Text style={{
            color: '#582286',
            lineHeight: 1.36,
            textAlign: 'center',
            fontFamily: 'BlogScript',
            fontSize: 22,
            paddingTop: 15
          }}
          >{'WHAT IS A HEALTHY\nMICROBIOME?'}
          </Text>
          <Text style={{
            color: '#000000',
            textAlign: 'center',
            lineHeight: 1.29,
            fontSize: 14
          }}
          >
            {'A healthy microbiome contains\n'}
            <Link
              src="kids/educational/articles/3"
              style={{
                fontFamily: 'Gotham',
                fontSize: 14,
                textDecoration: 'underline',
                textDecorationColor: '#0199DA',
                color: '#0199DA'
              }}
            >
              <Text>many microbial friends</Text>
            </Link>
            {' that\nenjoy eating healthy food!'}
          </Text>
        </View>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default SummaryDescriptionPage;

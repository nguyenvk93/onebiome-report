import { Image, Text, View } from '@react-pdf/renderer';
import moment from 'moment';
import {
  DATEFORMAT, DELIVERY_MODE, ISODATEFORMAT, MILK_FEEDING, USER_SAMPLE_ROLES
} from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import { getAgeByMonth } from '../../../utility/ProfileUtils';
import { getFullDeliveryStr } from '../../../utility/UserUtils';
import PageNumber from './Components/PageNumber';

interface Props {
  member: any,
  sample: any,
  role: number,
  deliveryMode: number,
  feedingPractise: number,
  pageNumber: number
}

const InformationHcpPage = ({
  member,
  sample,
  role,
  deliveryMode,
  feedingPractise,
  pageNumber
}: Props) => {
  const isBaby = role === USER_SAMPLE_ROLES.BABY;
  const titleText = `${member.firstName}`;
  const listInformation: any = [];
  let imageBgpage;
  let textMIlkFeeding = '';

  const textStyle = { marginBottom: 7 };
  const dotsStyle = { fontSize: 15 };

  switch (feedingPractise) {
    case MILK_FEEDING.BREAST_MILK:
      textMIlkFeeding = 'Breast milk';
      break;
    case MILK_FEEDING.INFANT_FORMULA:
      textMIlkFeeding = 'Milk formula';
      break;
    case MILK_FEEDING.MIXED_FED:
      textMIlkFeeding = 'Mixed feeding';
      break;
    case MILK_FEEDING.ND:
      textMIlkFeeding = 'ND';
      break;
    case MILK_FEEDING.MIXED_BF:
      textMIlkFeeding = 'MIXED_BF';
      break;
    default:
      textMIlkFeeding = 'NA';
      break;
  }
  const deliveryModeText = getFullDeliveryStr(deliveryMode);
  if (isBaby) {
    let textAntibioticInDelivery = '';
    const {
      babyProfile,
      babyAntibiotics,
      isWeaned,
      monthTimePoint,
      timePoint
    } = sample;
    let babyAge;
    if (monthTimePoint) {
      babyAge = getAgeByMonth(monthTimePoint);
    } else {
      switch (timePoint) {
        case 'Month1':
          babyAge = '1 month';
          break;
        case 'Month3':
          babyAge = '3 months';
          break;
        case 'Month3.5-Month6':
          babyAge = '5 months';
          break;
        case 'Month6.5-Month11.5':
          babyAge = '11 months';
          break;
        case 'Week1':
          babyAge = '1 week';
          break;
        case 'Year1':
          babyAge = '1 year';
          break;
        case 'Year1 above':
          babyAge = '1 year 1 month';
          break;
        default:
          babyAge = '1 month';
      }
    }
    if (
      [
        DELIVERY_MODE.C_Section,
        DELIVERY_MODE.C_SECTION_ELECTIVE,
        DELIVERY_MODE.C_SECTION_EMERGENCY
      ].includes(deliveryMode)
      || deliveryMode === DELIVERY_MODE.VD
    ) {
      textAntibioticInDelivery = 'NA';
    } else {
      textAntibioticInDelivery = 'Yes';
    }
    imageBgpage = 'backgroundInformationConsumer-children';

    listInformation.push(
      <>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Age at stool sample collection: ${babyAge}\n`}
        </Text>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Mode of delivery: ${deliveryModeText || 'NA'}\n`}
        </Text>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Antibiotics during delivery or intrapartum antibiotic prophylaxis: ${textAntibioticInDelivery}\n`}
        </Text>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Feeding practice: ${textMIlkFeeding || 'NA'}\n`}
        </Text>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Weaned: ${isWeaned === true ? 'Yes' : 'No'}\n`}
        </Text>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {'Time of first solid food introduction: '}
          {
            `${isWeaned && babyProfile && babyProfile.ageComplementaryFeeding
              ? `${babyProfile.ageComplementaryFeeding / 30} Month`
              : 'NA'
            }\n`
          }
        </Text>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {'Postnatal antibiotic history: \n'}
        </Text>
      </>
    );

    if (babyAntibiotics.length > 0) {
      babyAntibiotics.forEach((item: any) => {
        listInformation.push(
          <>
            <Text style={textStyle}>
              &emsp;&nbsp;
              <Text style={dotsStyle}>•</Text>
              &ensp;&nbsp;
              {`Name of antibiotic: ${item.name || 'NA'}\n`}
            </Text>
            <Text style={textStyle}>
              &emsp;&emsp;&ensp;
              <Text style={dotsStyle}>•</Text>
              &ensp;&nbsp;
              {`Start date: ${moment(item.startDate)
                .format(DATEFORMAT)
                .toString()}\n`}
            </Text>
            <Text style={textStyle}>
              &emsp;&emsp;&ensp;
              <Text style={dotsStyle}>•</Text>
              &ensp;&nbsp;
              {`End date: ${moment(item.endDate)
                .format(DATEFORMAT)
                .toString()}\n`}
            </Text>
          </>
        );
      });
    } else {
      listInformation.push(
        <>
          <Text style={textStyle}>
            &emsp;&nbsp;
            <Text style={dotsStyle}>•</Text>
            &ensp;&nbsp;
            {'Name of antibiotic: NA\n'}
          </Text>
          <Text style={textStyle}>
            &emsp;&emsp;&ensp;
            <Text style={dotsStyle}>•</Text>
            &ensp;&nbsp;
            {'Start date: NA\n'}
          </Text>
          <Text style={textStyle}>
            &emsp;&emsp;&ensp;
            <Text style={dotsStyle}>•</Text>
            &ensp;&nbsp;
            {'End date: NA\n'}
          </Text>
        </>
      );
    }
    listInformation.push(
      <>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Do you give any supplements to your child? If yes, please specify: ${babyProfile && babyProfile.isUseSupplement === true ? 'Yes' : 'No'}\n`}
        </Text>
        {
          babyProfile && babyProfile.isUseSupplement
          && (
            <Text style={textStyle}>
              <Text style={dotsStyle}>•</Text>
              &ensp;&nbsp;
              {`${babyProfile.nameSupplement}\n`}
            </Text>
          )
        }
      </>
    );
  } else {
    const { motherProfile } = sample;
    let result;
    if (member.dayOfBirth) {
      const ageYear = moment().diff(
        moment(member.dayOfBirth, ISODATEFORMAT),
        'years'
      );
      const unitYear = `year${ageYear > 1 ? 's' : ''}`;

      result = `${ageYear} ${unitYear}`;
    }

    imageBgpage = 'backgroundInformationConsumer-MTB';
    listInformation.push(
      <>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Age: ${result || 'NA'}\n`}
        </Text>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Pre-pregnancy weight: ${motherProfile ? `${motherProfile.prePregnancyWeight}kg` : 'NA'}\n`}
        </Text>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Height: ${motherProfile ? `${motherProfile.height}cm` : 'NA'}\n`}
        </Text>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Time/date of stool collection: ${moment(sample.createdAt)
            .format(DATEFORMAT)
            .toString()}\n`}
        </Text>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;{'Gestation: 37 Weeks\n'}
        </Text>
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Do you take any supplements? If yes, please specify: ${member && member.motherProfile && member.motherProfile.isUseSupplement ? '' : 'No'}\n`}
        </Text>
        {
          motherProfile && motherProfile.isUseSupplement && <Text style={textStyle}><Text style={dotsStyle}>•</Text>&ensp;&nbsp;{`${motherProfile.nameSupplement}\n`}</Text>
        }
        <Text style={textStyle}>
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {'Antibiotic history: If yes, please specify: \n'}
        </Text>
        <Text style={textStyle}>
          &emsp;&nbsp;
          <Text style={dotsStyle}>•</Text>
          &ensp;&nbsp;
          {`Name of antibiotics: ${motherProfile && motherProfile.nameAntibioticInPregnancy ? motherProfile.nameAntibioticInPregnancy : 'NA'}\n`}
        </Text>
      </>
    );
  }

  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <Image
        src={`/img/pdf/${imageBgpage}.jpg`}
        style={{
          width: A4_FULL_WIDTH_POINT,
          height: A4_FULL_HEIGHT_POINT,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <View
        style={{ marginTop: 73, marginLeft: 60 }}
      >
        <Text
          style={{
            fontSize: 21,
            // lineHeight: 2,
            fontFamily: 'BlogScript',
            color: '#009FE3'
          }}
        >{'DEAR DOCTOR,\n'}
        </Text>
        <Text
          style={{
            lineHeight: 1,
            fontSize: 12
          }}
        >
          {`Please find the attached microbiome report of ${titleText}.\n\nBelow are some information for your reference:\n\n`}
        </Text>
        {
          listInformation.length > 0
          && listInformation.map((text: any, idx: number) => {
            return (
              <View
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                style={{ lineHeight: 1, fontSize: 12 }}
              >
                {text}
              </View>
            );
          })
        }
      </View>
      <View
        style={{
          fontSize: 8,
          color: '#5E5E5E',
          position: 'absolute',
          marginLeft: 60,
          top: 826
        }}
      >
        <Text>NA: Not available/not applicable</Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default InformationHcpPage;

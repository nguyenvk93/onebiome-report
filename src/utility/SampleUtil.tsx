import _ from 'lodash';
import { DELIVERY_MODE, USER_SAMPLE_ROLES } from '../constants/DefaultValues';

const COLORS = [
  '#915BA6',
  '#F98B54',
  '#C6E783',
  '#F572A8',
  '#FFE42E',
  '#27BEB6',
  '#EE2F44',
  '#67bf6b',
  '#518BC9',
  '#F4AE1A',
  '#15607E',
  '#f8C6FD',
  '#4A8C6F',
  '#85C6E2',
  '#E85E5E',
  '#F11690',
  '#B00b69',
  '#000080',
  '#EF4924',
  '#D06BB8',
  '#5B7BB4',
  '#7B68EE',
  '#2AEBEB',
  '#86F0B7',
  '#FACC41',
  '#508EF8',
  '#991227',
  '#D88BF0',
  '#E0E67C',
  '#FFAB24'
];

const COLORS_V2 = [
  '#FF0000',
  '#0000FF',
  '#00FF00',
  '#FFFF00',
  '#800080',
  '#FFA500',
  '#FFC0CB',
  '#A52A2A',
  '#008080',
  '#00FFFF',
  '#E6E6FA',
  '#800000',
  '#4B0082',
  '#FFD700',
  '#C0C0C0',
  '#808000',
  '#FF00FF',
  '#40E0D0',
  '#FA8072',
  '#DDA0DD',
  '#708090',
  '#FF6F61',
  '#CCCCFF',
  '#B57EDC',
  '#228B22',
  '#87CEEB',
  '#FF6347',
  '#D2691E',
  '#F0E68C',
  '#DA70D6'
];

const COLORS_V3 = [
  '#6A5ACD',
  '#00FF00',
  '#9932CC',
  '#6B8E23',
  '#4682B4',
  '#F08080',
  '#B8860B',
  '#9370DB',
  '#556B2F',
  '#7B68EE',
  '#CD5C5C',
  '#66CDAA',
  '#2F4F4F',
  '#DB7093',
  '#8FBC8F',
  '#5F9EA0',
  '#C71585',
  '#BDB76B',
  '#BC8F8F',
  '#E9967A',
  '#A0522D',
  '#00CED1',
  '#3CB371',
  '#FF8C00',
  '#8B0000',
  '#1E90FF',
  '#008B8B',
  '#FF1493',
  '#20B2AA',
  '#BA55D3'
];

// private
const getShortName = ({ fullName, isCutNumber = true }: { fullName: string, isCutNumber?: boolean }) => {
  const bactNames = fullName.toString().split(';');
  const shortName: any = bactNames.slice(-1).pop();
  // let lastName = shortName.replace(/_/g, ' ');
  let lastName = shortName;
  if (
    fullName !== 'dtBactOthers'
    && fullName !== 'Others'
    && (lastName.toLowerCase() === 'other' || lastName.toLowerCase() === 'others')
  ) {
    // eslint-disable-next-line prefer-destructuring
    lastName = bactNames[2];
  } else if (lastName.toLowerCase() === 'uncult') {
    lastName = bactNames.slice(2, bactNames.length - 1).join(' ');
  } else if (fullName === 'dtBactOthers') {
    lastName = 'Others';
  }

  switch (true) {
    case lastName === 'Tyzzerella 4' && isCutNumber:
      lastName = 'Tyzzerella';
      break;
    case lastName === 'Incertae Sedis':
      lastName = 'Erysipelotrichaceae';
      break;
    case lastName === 'UCG-002':
      lastName = 'Oscillospiraceae_UCG-002';
      break;
    case lastName === 'CAG-352':
      lastName = 'Ruminococcaceae_CAG-352';
      break;
    case lastName === 'UBA1819':
      lastName = 'Ruminococcaceae_UBA1819';
      break;
    case lastName === '43949':
      lastName = 'Lachnospiraceae_43949';
      break;
    case lastName === 'DTU089':
      lastName = 'Ruminococcaceae_DTU089';
      break;
    default:
      break;
  }
  return lastName;
};

// Log 10
const log10Number = (number: any) => {
  return 10 + (number > 0 ? Math.log10(parseFloat(number)) : -6);
};

const transformCompositionData = ({ data }: any) => {
  const composition: any = [];
  let indexColor = 0;
  // sort desc, exclude Others
  const otherBact = data.filter((bact: any) => { return bact.name === 'dtBactOthers'; });
  let transformCompositionBacts = data.filter(
    (bact: any) => { return bact.name !== 'dtBactOthers'; }
  );
  transformCompositionBacts = _.sortBy(transformCompositionBacts, ['value']);
  transformCompositionBacts = _.reverse(transformCompositionBacts);
  if (otherBact && otherBact.length > 0) {
    transformCompositionBacts.push(otherBact[0]);
  }

  transformCompositionBacts.forEach((bact: any) => {
    const item: any = {};
    item.color = COLORS[indexColor];
    if (indexColor === COLORS.length - 1) indexColor = 0;
    indexColor += 1;
    item.fullName = bact.name;
    item.name = getShortName({ fullName: bact.name });
    item.fullValue = bact.value;
    item.value = parseFloat((bact.value * 100).toFixed(2));
    composition.push(item);
  });
  return composition;
};

const transformCompositionAdultsData = ({ data }: any) => {
  const composition: any = [];
  let indexColor = 0;
  // sort desc, exclude Others
  const otherBact = data.filter((bact: any) => { return bact.name === 'dtBactOthers'; });
  let transformCompositionBacts = data.filter(
    (bact: any) => { return bact.name !== 'dtBactOthers'; }
  );
  transformCompositionBacts = _.sortBy(transformCompositionBacts, ['value']);
  transformCompositionBacts = _.reverse(transformCompositionBacts);
  if (otherBact && otherBact.length > 0) {
    transformCompositionBacts.push(otherBact[0]);
  }

  transformCompositionBacts.forEach((bact: any) => {
    const item: any = {};
    item.color = COLORS[indexColor];
    if (indexColor === COLORS.length - 1) indexColor = 0;
    indexColor += 1;
    item.fullName = bact.name;
    item.name = getShortName({ fullName: bact.name });
    item.fullValue = bact.value;
    item.value = parseFloat((bact.value * 100).toFixed(2));
    composition.push(item);
  });
  return composition;
};

const transformComparisonData = ({ comparisonBacts, member }: any) => {
  const comparison: any = [];
  let indexColor = 0;
  const otherBact = comparisonBacts.filter((bact: any) => { return bact.name === 'Others'; });
  let bactsTransform = comparisonBacts.filter((bact: any) => { return bact.name !== 'Others'; });
  bactsTransform = _.sortBy(bactsTransform, [
    member.role === USER_SAMPLE_ROLES.BABY
      && member.deliveryMode !== DELIVERY_MODE.VD
      ? 'avgVDValue'
      : 'avgDBValue'
  ]); // asc
  bactsTransform = _.reverse(bactsTransform);
  if (otherBact && otherBact.length > 0) {
    bactsTransform.push(otherBact[0]);
  }

  bactsTransform.forEach((bact: any) => {
    const item = { ...bact };
    item.fullName = bact.name;
    item.name = getShortName({ fullName: bact.name });
    item.color = COLORS[indexColor];
    if (indexColor === COLORS.length - 1) indexColor = 0;
    indexColor += 1;
    comparison.push(item);
  });

  return comparison;
};

const transformComparisonAdultsData = ({ comparisonBacts }: any) => {
  const comparison: any = [];
  let indexColor = 0;
  const otherBact = comparisonBacts.filter((bact: any) => { return bact.name === 'Others'; });
  let bactsTransform = comparisonBacts.filter((bact: any) => { return bact.name !== 'Others'; });
  bactsTransform = _.sortBy(bactsTransform, ['median']); // asc
  bactsTransform = _.reverse(bactsTransform);
  if (otherBact && otherBact.length > 0) {
    bactsTransform.push(otherBact[0]);
  }

  bactsTransform.forEach((bact: any) => {
    const item = { ...bact };
    item.fullName = bact.name;
    item.name = getShortName({ fullName: bact.name });
    item.color = COLORS[indexColor];
    if (indexColor === COLORS.length - 1) indexColor = 0;
    indexColor += 1;
    comparison.push(item);
  });

  return comparison;
};

const transformSummaryData = ({ summaryData, comparisonData, isVD }: any) => {
  let transformBacts = comparisonData.filter(
    (bact: any) => { return bact.name !== 'dtBactOthers'; }
  );
  transformBacts = _.sortBy(transformBacts, ['value']);
  transformBacts = _.reverse(transformBacts);
  const result: any = [];
  summaryData.forEach((item: any) => {
    const newItem = { ...item };
    const availableBact = _.find(
      transformBacts,
      (o) => {
        return getShortName({ fullName: o.name, isCutNumber: false })
          === item.bacteriaName;
      }
    );
    if (availableBact) {
      newItem.value = availableBact.yourValue;
      newItem.name = item.bacteriaName;
      if (isVD) {
        newItem.min = availableBact.minVD;
        newItem.max = availableBact.maxVD;
      } else {
        newItem.min = availableBact.min;
        newItem.max = availableBact.max;
      }
      result.push(newItem);
    }
  });
  return result;
};

const transformSummaryDataAdults = ({ comparisonData }: any) => {
  const transformBacts = comparisonData.filter(
    (bact: any) => { return bact.name !== 'Others'; }
  );
  const result = transformBacts.map((item: any) => {
    return {
      name: getShortName({
        fullName: item.name,
        isCutNumber: false
      }),
      lower: log10Number(item.lower),
      max: log10Number(item.max),
      median: log10Number(item.median),
      min: log10Number(item.min),
      upper: log10Number(item.upper),
      yourValue: log10Number(item.yourValue)
    };
  });
  return result;
};

const isBabyVD = ({ member }: any) => {
  return (
    member
    && member.role
    && member.role === USER_SAMPLE_ROLES.BABY
    && member.deliveryMode
    && member.deliveryMode === DELIVERY_MODE.VD
  );
};

const getTimePointHumanString = ({ timePoint }: any) => {
  let rTimePoint = '';
  switch (timePoint) {
    case 'D190':
      rTimePoint = '190 days';
      break;
    case 'Month1':
      rTimePoint = 'one month';
      break;
    case 'Month3':
      rTimePoint = '3 months';
      break;
    case 'Week1':
      rTimePoint = 'one week';
      break;
    case 'Week36':
      rTimePoint = '36 weeks';
      break;
    case 'Week37':
      rTimePoint = '37 weeks';
      break;
    case 'Year1':
      rTimePoint = 'one year';
      break;
    case 'Year2':
      rTimePoint = 'two years';
      break;
    case 'Year3':
      rTimePoint = 'three years';
      break;
    default:
      rTimePoint = '';
      break;
  }
  return rTimePoint;
};

export {
  transformCompositionData,
  transformCompositionAdultsData,
  transformComparisonData,
  transformComparisonAdultsData,
  transformSummaryData,
  transformSummaryDataAdults,
  isBabyVD,
  getTimePointHumanString,
  COLORS,
  COLORS_V2,
  COLORS_V3,
  getShortName
};

import { Text } from '@react-pdf/renderer';
import _ from 'lodash';
import {
  CHILD_STAGE, DELIVERY_MODE, FFQ_FREQUENCY, TIME_POINT, USER_SAMPLE_ROLES
} from '../constants/DefaultValues';
import {
  PDF_PAGE_INDEX
} from '../constants/PdfConstants';
import {
  BABY_CHART, BABY_FOOD_PORTION, FFQ_CHART,
  FOOD_LIST, INGREDIENT_CATEGORY_3_YEAR, INGREDIENT_CATEGORY_BABY, INGREDIENT_CATEGORY_MTB,
  MTB_CHART, MTB_FOOD_PORTION, YEAR_3_FOOD_PORTION
} from './FfqUtil';
import {
  FOOD_TABLE_MICROBE, FOOD_TABLE_MICROBE_ADULTS, GOOD_MICRO_MUM,
  GOOD_MICRO_UNWEANED
} from './MicrobeUtil';
import { getAgeChildMonth, isMom } from './ProfileUtils';

const {
  R_NEVER,
  MONTH_1_3,
  WEEK_1_2,
  WEEK_3_4,
  WEEK_5_6,
  DAY_ONCE,
  DAY_2_3,
  DAY_4_5
} = FFQ_FREQUENCY;

interface Props2 {
  role: number,
  summaryData: Array<any>,
  summaryVDData: Array<any>,
  isWeaned: boolean,
}

const getResultCompare = ({
  role, isWeaned, summaryData, summaryVDData
}: Props2) => {
  const goodMicrobeData: Array<any> = [];
  const goodVDMicrobeData: Array<any> = [];
  let goodMicrobes: Array<any> = [];

  if (role === USER_SAMPLE_ROLES.BABY && !isWeaned) {
    goodMicrobes = GOOD_MICRO_UNWEANED;
  } else {
    goodMicrobes = GOOD_MICRO_MUM;
  }

  summaryData.forEach((micro) => {
    if (goodMicrobes.includes(micro.name)) {
      goodMicrobeData.push(micro);
    }
  });

  summaryVDData.forEach((vdMicro) => {
    if (goodMicrobes.includes(vdMicro.name)) {
      goodVDMicrobeData.push(vdMicro);
    }
  });

  return {
    goodMicrobeData,
    goodVDMicrobeData,
    goodMicrobes
  };
};

interface Props3 {
  babyMonths: number,
  data: any,
}

const getResultFFQBaby = ({ data, babyMonths }: Props3) => {
  // AM average  FFQ * GUSTO portion size
  const portionList = babyMonths >= 36 ? YEAR_3_FOOD_PORTION : BABY_FOOD_PORTION;
  const ingredientList = babyMonths >= 36 ? INGREDIENT_CATEGORY_3_YEAR : INGREDIENT_CATEGORY_BABY;
  const totalConsumptionPerDayHPB = portionList.map((item) => {
    const dataValue = data[item.code] ? data[item.code] : 0;
    return {
      code: item.code,
      value: Number((item.gusto * dataValue) / item.portion)
    };
  });

  // Total consumption in terms of HPB servings per day
  const actualConsumptionPerDayHBP = ingredientList.map((item) => {
    const foodsGroup: Array<any> = [];
    item.INGREDIENT.forEach((element) => {
      const consumptionPerDayPB = totalConsumptionPerDayHPB.find((i) => {
        return i.code === element.code;
      });
      foodsGroup.push(consumptionPerDayPB);
    });
    let values = 0;
    foodsGroup.forEach((el) => {
      values += el.value;
    });
    return {
      groupCode: item.groupCode,
      name: item.name,
      value: Number(values)
    };
  });
  // Report: Key message
  const keyMessage = actualConsumptionPerDayHBP.map((item) => {
    const foodsGroupData: any = ingredientList.find((i) => {
      return i.groupCode === item.groupCode;
    });
    return {
      groupCode: item.groupCode,
      name: item.name,
      value: Number(((item.value / foodsGroupData.hpb) * 100).toFixed(0))
    };
  });
  return keyMessage;
};

const getResultFFQMTB = ({ data }: any) => {
  // get MTB Portion Size Gusto if value = '' get value of MTB Portion Size HPB
  const totalConsumptionPerDayHPB = MTB_FOOD_PORTION.map((item) => {
    const dataValue = data[item.code] ? data[item.code] : 0;
    const gusto: any = item.gusto || item.portion;
    return {
      code: item.code,
      value: Number((gusto * dataValue) / item.portion)
    };
  });
  // Total consumption in terms of HPB servings per day
  const actualConsumptionPerDayHBP = INGREDIENT_CATEGORY_MTB.map((item) => {
    const foodsGroup: Array<any> = [];
    item.INGREDIENT.forEach((element) => {
      const consumptionPerDayHPB = totalConsumptionPerDayHPB.find((i) => {
        return i.code === element.code;
      });
      foodsGroup.push(consumptionPerDayHPB);
    });
    let values = 0;
    foodsGroup.forEach((el) => {
      values += el.value;
    });
    return {
      groupCode: item.groupCode,
      name: item.name,
      value: Number(values)
    };
  });
  // Report: Key message
  const keyMessage = actualConsumptionPerDayHBP.map((item) => {
    const foodsGroupData: any = INGREDIENT_CATEGORY_MTB.find((i) => {
      return i.groupCode === item.groupCode;
    });
    return {
      groupCode: item.groupCode,
      name: item.name,
      value: Number(((item.value / foodsGroupData.hpb) * 100).toFixed(0))
    };
  });
  return keyMessage;
};

const convertFrequency = (frequency: number) => {
  switch (frequency) {
    case R_NEVER:
      return 0;
    case MONTH_1_3:
      return 1 / 15;
    case WEEK_1_2:
      return 3 / 14;
    case WEEK_3_4:
      return 0.5;
    case WEEK_5_6:
      return 11 / 14;
    case DAY_ONCE:
      return 1;
    case DAY_2_3:
      return 2.5;
    case DAY_4_5:
      return 4.5;
    default:
      return 0;
  }
};

interface Props4 {
  data: Array<any>,
  role: number,
  babyMonths: number
}

const convertChartFFQ = ({ data, role, babyMonths }: Props4) => {
  const CHART = role === USER_SAMPLE_ROLES.MOTHER_TO_BE ? MTB_CHART : BABY_CHART;
  let foodPortion: any;
  let INGREDIENT_CATEGORY;
  if (role === USER_SAMPLE_ROLES.MOTHER_TO_BE) {
    foodPortion = MTB_FOOD_PORTION;
    INGREDIENT_CATEGORY = INGREDIENT_CATEGORY_MTB;
  } else {
    foodPortion = babyMonths >= 36 ? YEAR_3_FOOD_PORTION : BABY_FOOD_PORTION;
    INGREDIENT_CATEGORY = babyMonths >= 36 ? INGREDIENT_CATEGORY_3_YEAR : INGREDIENT_CATEGORY_BABY;
  }
  const values = CHART.map((item) => {
    const groupFood: any = FFQ_CHART.find((f) => {
      return f.code === item;
    });
    const dataFilter = data.filter((i) => {
      return groupFood.list.includes(i.foodCode);
    });
    let sum1 = 0;
    dataFilter.forEach((ffq) => {
      sum1 += convertFrequency(ffq.frequency);
    });

    const portion = foodPortion.find((g: any) => {
      return g.code === item;
    });
    const isNullGusto = portion.gusto === undefined || portion.gusto === '';

    const value = (sum1 * (isNullGusto ? portion.portion : portion.gusto))
      / portion.portion;
    return {
      ...groupFood,
      value
    };
  });

  const result = INGREDIENT_CATEGORY.map((item) => {
    let value = 0;
    item.INGREDIENT.forEach((ing) => {
      const h = values.find((v) => {
        return v.code === ing.code;
      });
      value += h ? h.value : 0;
    });
    return {
      groupCode: item.groupCode,
      name: item.name,
      value: Number(((value / item.hpb) * 100).toFixed(0))
    };
  });

  return result;
};

interface Props5 {
  sample: any,
  role: number
}

export const getResultFFQ = ({ sample, role }: Props5) => {
  let babyMonths: any = null;
  if (role === USER_SAMPLE_ROLES.BABY) {
    babyMonths = getAgeChildMonth({
      timePoint: sample.timePoint,
      monthTimePoint: sample.monthTimePoint
    });
  }

  if (sample.kitId && sample.ffq) {
    // consumer's samples
    return convertChartFFQ({ data: sample.ffq, role, babyMonths });
  }
  if (sample.ffqData) {
    // imported sampels
    if (role === USER_SAMPLE_ROLES.MOTHER_TO_BE) {
      return getResultFFQMTB({ data: sample.ffqData });
    }
    return getResultFFQBaby({ data: sample.ffqData, babyMonths });
  }
  return null;
};

const convertChartFFQAdults = ({ data }: any) => {
  const CHART = MTB_CHART;
  const foodPortion = MTB_FOOD_PORTION;
  const INGREDIENT_CATEGORY = INGREDIENT_CATEGORY_MTB;

  const values = CHART.map((item) => {
    const groupFood: any = FFQ_CHART.find((f) => {
      return f.code === item;
    });
    const dataFilter = data.filter((i: any) => {
      return groupFood.list.includes(i.foodCode);
    });
    let sum1 = 0;

    dataFilter.forEach((ffq: any) => {
      sum1 += convertFrequency(ffq.frequency);
    });

    const portion: any = foodPortion.find((g) => {
      return g.code === item;
    });
    const isNullGusto = portion.gusto === undefined || portion.gusto === '';

    const value = (sum1 * (isNullGusto ? portion.portion : portion.gusto))
      / portion.portion;
    return {
      ...groupFood,
      value
    };
  });

  const result = INGREDIENT_CATEGORY.map((item) => {
    let value = 0;

    item.INGREDIENT.forEach((ing) => {
      const h = values.find((v) => {
        return v.code === ing.code;
      });
      value += h ? h.value : 0;
    });

    return {
      groupCode: item.groupCode,
      name: item.name,
      value: Number(((value / item.hpb) * 100).toFixed(0))
    };
  });

  return result;
};

export const getResultFFQAdults = ({ sample }: any) => {
  if (sample.kitId && sample.ffqsAdults) {
    // Consumer's samples
    return convertChartFFQAdults({ data: sample.ffqsAdults });
  }
  if (sample.ffqData) {
    // Import samples
    return getResultFFQMTB({ data: sample.ffqData });
  }
  return null;
};

export const getResultFFQExtraFood = ({ data }: any) => {
  const arrayExtraFood = [FOOD_LIST.PROCESSED, FOOD_LIST.FERMENTED];
  const result = arrayExtraFood.map((item) => {
    const groupFood: any = FFQ_CHART.find((f) => {
      return f.code === item;
    });
    const dataFilter = data.filter((i: any) => {
      return groupFood.list.includes(i.foodCode);
    });
    let sumFrequency = 0;
    dataFilter.forEach((ffq: any) => {
      sumFrequency += convertFrequency(ffq.frequency);
    });
    return {
      code: groupFood.code,
      frequency: _.round(sumFrequency, 1)
    };
  });
  return result;
};

const splitPageFoodTable = (microbes: Array<any>) => {
  const result: any = [[]];
  let index = 0;
  let sum = 0;
  microbes.forEach((m: any) => {
    if (sum + m.height <= 8) {
      sum += m.height;
      result[index].push(m);
    } else {
      result.push([m]);
      sum = m.height;
      index += 1;
    }
  });
  return result;
};

const splitFoodTableMicrobe = (goodMicrobes: Array<any>) => {
  const higher: Array<any> = [];
  const lower: Array<any> = [];
  goodMicrobes.forEach((micro) => {
    const foodCol = FOOD_TABLE_MICROBE.find((food) => {
      return food.microName === micro.name;
    });
    if (foodCol) {
      if (micro.value >= micro.lower) {
        higher.push(foodCol);
      } else {
        lower.push(foodCol);
      }
    }
  });

  const higherMicro = splitPageFoodTable(higher);
  const lowerMicro = splitPageFoodTable(lower);

  return { higherMicro, lowerMicro };
};

const splitPageFoodTableAdults = (microbes: Array<any>) => {
  const result: any = [[]];
  let index = 0;
  let sum = 0;
  microbes.forEach((m: any) => {
    if (sum + m.height <= 11) {
      sum += m.height;
      result[index].push(m);
    } else {
      result.push([m]);
      sum = m.height;
      index += 1;
    }
  });
  return result;
};

const splitFoodTableMicrobeAdults = (goodMicrobes: Array<any>) => {
  const higher: Array<any> = [];
  const lower: Array<any> = [];
  goodMicrobes.forEach((micro) => {
    const foodCol = FOOD_TABLE_MICROBE_ADULTS.find((food) => {
      return food.microName === micro.name;
    });
    if (foodCol) {
      if (micro.yourValue >= micro.lower) {
        higher.push(foodCol);
      } else {
        lower.push(foodCol);
      }
    }
  });

  const higherMicro = splitPageFoodTableAdults(higher);
  const lowerMicro = splitPageFoodTableAdults(lower);

  return { higherMicro, lowerMicro };
};

interface Props6 {
  hideFact: boolean,
  tableContentPage: any,
  role: number,
  isBabyWeaned: boolean,
  haveFfqChart: boolean,
}

const getMenu = ({
  hideFact,
  tableContentPage,
  role,
  isBabyWeaned,
  haveFfqChart
}: Props6) => {
  let menu: any = null;
  let composition: any = '';
  let topBacterialGroups: any = '';
  let comparison: any = '';
  let tips: any = '';
  let support: any = '';
  let whatToEat: any = '';
  let ffqChart: any = '';
  let facts: any = '';
  const textIsChild = role === USER_SAMPLE_ROLES.BABY ? 'Your Child’s' : 'Your';

  tableContentPage.forEach((item: any) => {
    if (item.page === PDF_PAGE_INDEX.MICROBIOME) {
      composition = item.page;
    }
    if (item.page === PDF_PAGE_INDEX.COMPOSITION) {
      topBacterialGroups = item.page;
    }
    if (item.page === PDF_PAGE_INDEX.COMPARISON) {
      comparison = item.page;
    }
    // End MICROBIOME
    // TIP
    if (item.page === PDF_PAGE_INDEX.TIP) {
      tips = item.page;
    }
    if (
      item.page === PDF_PAGE_INDEX.SUPPORT
      || item.page === PDF_PAGE_INDEX.BABY_SUPPORT
    ) {
      support = item.page;
    }
    if (item.page === PDF_PAGE_INDEX.WHAT_TO_EAT) {
      whatToEat = item.page;
    }
    // END TIP
    if (
      item.page === PDF_PAGE_INDEX.RESULTS_FOOD_FOR_FFQ
      || item.page === PDF_PAGE_INDEX.INSIGHTS_FROM_YOUR_FOOD
    ) {
      ffqChart = item.page;
    }
    if (item.page === PDF_PAGE_INDEX.FACT_ABOUT) {
      facts = item.page;
    }
  });

  if (role === USER_SAMPLE_ROLES.BABY && !isBabyWeaned) {
    menu = [
      { title: 'Introduction', page: 1 },
      {
        title: 'Composition',
        page: Number(composition)
      },
      {
        title: 'RESULTS: Top Bacterial Groups',
        page: Number(topBacterialGroups),
        isSub: true
      },
      {
        title: 'RESULTS: Comparison with Database',
        page: Number(comparison),
        isSub: true
      },
      {
        title: `How Can You Support ${textIsChild} Microbiome?`,
        page: Number(support)
      }
    ];
    if (!hideFact) {
      menu.push({
        title: 'Facts',
        page: Number(facts)
      });
    }
  } else {
    menu = [
      { title: 'Introduction', page: 1 },
      {
        title: 'Composition',
        page: Number(composition)
      },
      {
        title: 'RESULTS: Top Bacterial Groups',
        page: Number(topBacterialGroups),
        isSub: true
      },
      {
        title: 'RESULTS: Comparison with Database',
        page: Number(comparison),
        isSub: true
      },
      {
        title: 'Tips',
        page: Number(tips)
      },
      {
        title: `How Can You Support ${textIsChild} Microbiome?`,
        page: Number(support),
        isSub: true
      },
      {
        title: `Personalised Food Table Based on ${textIsChild} Microbiome`,
        page: Number(whatToEat),
        isSub: true
      }
    ];
    if (haveFfqChart) {
      menu.push({
        title: `Results From ${textIsChild} Food Frequency Questionnaire`,
        page: Number(ffqChart),
        isSub: true
      });
    }
    if (!hideFact) {
      menu.push({ title: 'Facts', page: Number(facts) });
    }
  }

  return menu;
};

interface Props7 {
  hideFact: boolean,
  tableContentPage: any,
  haveFfqChart: boolean,
}

const getMenuAdults = ({ hideFact, tableContentPage, haveFfqChart }: Props7) => {
  let menu: any = null;
  let composition: any = '';
  let topBacterialGroups: any = '';
  let comparison: any = '';
  let tips: any = '';
  let support: any = '';
  let whatToEat: any = '';
  let ffqChart: any = '';
  let facts: any = '';
  const textIsChild: any = 'Your';

  tableContentPage.forEach((item: any) => {
    if (item.page === PDF_PAGE_INDEX.MICROBIOME) {
      composition = item.page;
    }
    if (item.page === PDF_PAGE_INDEX.COMPOSITION) {
      topBacterialGroups = item.page;
    }
    if (item.page === PDF_PAGE_INDEX.COMPARISON) {
      comparison = item.page;
    }
    // End MICROBIOME
    // TIP
    if (item.page === PDF_PAGE_INDEX.TIP) {
      tips = item.page;
    }
    if (
      item.page === PDF_PAGE_INDEX.SUPPORT
      || item.page === PDF_PAGE_INDEX.BABY_SUPPORT
    ) {
      support = item.page;
    }
    if (item.page === PDF_PAGE_INDEX.WHAT_TO_EAT) {
      whatToEat = item.page;
    }
    // END TIP
    if (
      item.page === PDF_PAGE_INDEX.RESULTS_FOOD_FOR_FFQ
      || item.page === PDF_PAGE_INDEX.INSIGHTS_FROM_YOUR_FOOD
    ) {
      ffqChart = item.page;
    }
    if (item.page === PDF_PAGE_INDEX.FACT_ABOUT) {
      facts = item.page;
    }
  });

  menu = [
    { title: 'Introduction', page: 1 },
    {
      title: 'Composition',
      page: Number(composition)
    },
    {
      title: 'RESULTS: Top Bacterial Groups',
      page: Number(topBacterialGroups),
      isSub: true
    },
    {
      title: 'RESULTS: Comparison with Database',
      page: Number(comparison),
      isSub: true
    },
    {
      title: 'Tips',
      page: Number(tips)
    },
    {
      title: `How Can You Support ${textIsChild} Microbiome?`,
      page: Number(support),
      isSub: true
    },
    {
      title: `Personalised Food Table Based on ${textIsChild} Microbiome`,
      page: Number(whatToEat),
      isSub: true
    }
  ];
  if (haveFfqChart) {
    menu.push({
      title: `Results From ${textIsChild} Food Frequency Questionnaire`,
      page: Number(ffqChart),
      isSub: true
    });
  }
  if (!hideFact) {
    menu.push({
      title: 'Facts',
      page: Number(facts)
    });
  }

  return menu;
};

const getFootNoteData = ({ member, sample }: any) => {
  let result;
  const { deliveryMode, role } = member;
  if (role === USER_SAMPLE_ROLES.BABY) {
    if (deliveryMode === DELIVERY_MODE.VD_IAP) {
      if ((sample.monthTimePoint && sample.monthTimePoint > 12)
        || (sample.timePoint && sample.timePoint === TIME_POINT.Y1A)) {
        result = (
          <Text style={{ fontSize: 9, color: '#161616' }}>
            {'Please refer to the next page for the status of your child’s individual microbial friends.\n'}
          </Text>
        );
      } else {
        result = (
          <Text style={{ fontSize: 9, color: '#161616' }}>
            * Intrapartum antibiotic prophylaxis (IAP) refers to the prescription/ administration of antibiotics to pregnant women when labor begins. As part of prenatal care, pregnant women are tested for group B{' '}
            <Text style={{ fontStyle: 'italic' }}>Streptococcus</Text>
            {' '}(GBS) during their third trimester. If they are diagnosed as GBS carriers, they will be prescribed IAP when labor begins. This prevents the spread of GBS to the baby during labor, which prevents early onset neonatal  infections such as{' '}
            <Text style={{ fontStyle: 'italic' }}>Streptococcus</Text>
            {' B infection (GBS infection). IAP could also be prescribed if the pregnant woman develops a fever during labor.\n\nPlease refer to the next page for the status of your child’s individual microbial friends.\n'}
          </Text>
        );
      }
    } else if (
      [
        DELIVERY_MODE.C_Section,
        DELIVERY_MODE.C_SECTION_ELECTIVE,
        DELIVERY_MODE.C_SECTION_EMERGENCY
      ].includes(deliveryMode)
    ) {
      result = (
        <Text style={{ fontSize: 9, color: '#161616' }}>
          {'Please refer to the next page for the status of your child’s individual microbial friends.\n'}
        </Text>
      );
    } else {
      // VD
      result = (
        <Text style={{ fontSize: 9, color: '#161616' }}>
          {'Please refer to the next page for the status of your child’s individual microbial friends.\n'}
        </Text>
      );
    }
  } else {
    result = (
      <Text style={{ fontSize: 9, color: '#161616' }}>
        {'Database of mothers in their third trimester of pregnancy.\nPlease refer to the next page for the status of your individual microbial friends.'}
      </Text>
    );
  }
  return result;
};

interface TableContentAdults {
  isHcp: boolean,
  tableContentPage: any,
  haveFfqChart: boolean,
}

interface TableContent {
  hadData: boolean,
  childStage: number,
  isHcp: boolean,
  role: number,
  isBabyWeaned: true,
  tableContentPage: any,
  isCSection: boolean,
  babyMonths: number,
  haveFfqChart: boolean,
}

const getTableContent = ({
  hadData,
  childStage,
  isHcp = false,
  role,
  isBabyWeaned,
  tableContentPage,
  isCSection,
  babyMonths,
  haveFfqChart
}: TableContent) => {
  let childStr = '';
  if (childStage === CHILD_STAGE.BABY) {
    childStr = 'Child';
  } else if (childStage === CHILD_STAGE.TODDLE) {
    childStr = 'Child';
  } else if (childStage === CHILD_STAGE.YOUNG) {
    childStr = 'Child';
  }
  let content: Array<any> = [];
  if (isMom({ role })) {
    content = [
      {
        text: 'Microbiome Composition',
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: '#8161ac'
        },
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.MICROBIOME)
      },
      {
        text: 'Tips to Nurture Your Microbiome',
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: '#01a0e3'
        },
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.TIP)
      },
      {
        text: 'How Can You Support Your Microbiome?',
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000'
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.SUPPORT)
      },
      {
        text: 'Personalised Food Table Based on Your Microbiome',
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000'
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.WHAT_TO_EAT)
      }
    ];
    if (haveFfqChart) {
      content.push({
        text: 'Results From Your Food Frequency Questionnaire',
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000'
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.INSIGHTS_FROM_YOUR_FOOD)
      });
    }
    if (!isHcp) {
      content.push({
        text: 'Facts About Our Microbiome',
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: '#00cdca'
        },
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.FACT_ABOUT)
      });
    }
    if (hadData) {
      content.splice(1, 0, {
        text: 'RESULTS: Comparison with Database',
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000'
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.COMPARISON)
      });
      content.splice(1, 0, {
        text: 'RESULTS: Top Bacterial Groups',
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000'
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.COMPOSITION)
      });
    }
  } else if (isBabyWeaned) {
    content = [
      {
        text: 'Microbiome Composition',
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: '#8161ac'
        },
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.MICROBIOME)
      },
      {
        text: `Tips to Nurture Your ${childStr}'s Microbiome`,
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: '#01a0e3'
        },
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.TIP)
      },
      {
        text: `How Can You Support Your ${childStr}'s Microbiome?`,
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000'
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.SUPPORT)
      },
      {
        text: `Personalised Food Table Based on Your ${childStr}'s Microbiome`,
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000',
          width: 326
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.WHAT_TO_EAT)
      }
    ];
    if (haveFfqChart) {
      content.push({
        text: `Results From Your ${childStr}'s Food Frequency Questionnaire`,
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000',
          width: 298
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.RESULTS_FOOD_FOR_FFQ)
      });
    }
    if (!isHcp) {
      content.push({
        text: 'Facts About Our Microbiome',
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: '#00cdca'
        },
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.FACT_ABOUT)
      });
    }
    if (hadData) {
      content.splice(1, 0, {
        text: 'RESULTS: Comparison with Database',
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000'
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.COMPARISON)
      });
      content.splice(1, 0, {
        text: 'RESULTS: Top Bacterial Groups',
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000'
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.COMPOSITION)
      });
    }
  } else {
    content = [
      {
        text: 'Microbiome Composition',
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: '#8161ac'
        },
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.MICROBIOME)
      },
      {
        text: `How Can You Support Your ${childStr}'s Microbiome?`,
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: '#01a0e3'
        },
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.BABY_SUPPORT)
      }
    ];
    if (!isHcp) {
      content.push({
        text: 'Facts About Our Microbiome',
        style: {
          fontSize: 14,
          fontWeight: 700,
          color: '#00cdca'
        },
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.FACT_ABOUT)
      });
    }
    if (hadData) {
      content.splice(1, 0, {
        text: 'RESULTS: Comparison with Database',
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000'
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.COMPARISON)
      });
      content.splice(1, 0, {
        text: 'RESULTS: Top Bacterial Groups',
        style: {
          fontSize: 14,
          fontWeight: 400,
          color: '#000'
        },
        isSub: true,
        pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.COMPOSITION)
      });
    }
  }

  if (!isMom({ role }) && babyMonths < 12 && isCSection && isHcp) {
    content.push({
      text: 'Risk Factors for Childhood Infections and\nNon-Communicable Diseases',
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: '#00cdca'
      },
      pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.C_SECTION)
    });
  }
  return content;
};

const getTableContentAdults = ({ tableContentPage, haveFfqChart, isHcp }: TableContentAdults) => {
  const content = [
    {
      text: 'Microbiome Composition',
      pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.MICROBIOME)
    },
    {
      text: 'RESULTS: Top Bacterial Groups',
      isSub: true,
      pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.COMPOSITION)
    },
    {
      text: 'RESULTS: Comparison with Database',
      isSub: true,
      pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.COMPARISON)
    },
    {
      text: 'Tips to Nurture Your Microbiome',
      pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.TIP)
    },
    {
      text: 'How Can You Support Your Microbiome?',
      isSub: true,
      pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.SUPPORT)
    },
    {
      text: 'Personalised Food Table Based on Your Microbiome',
      isSub: true,
      pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.WHAT_TO_EAT)
    }
  ];
  if (haveFfqChart) {
    content.push({
      text: 'Results From Your Food Frequency Questionnaire',
      isSub: true,
      pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.INSIGHTS_FROM_YOUR_FOOD)
    });
  }
  if (!isHcp) {
    content.push({
      text: 'Facts About Our Microbiome',
      pageLink: 1 + tableContentPage.indexOf(PDF_PAGE_INDEX.FACT_ABOUT)
    });
  }

  return content;
};

export {
  getResultCompare,
  getResultFFQBaby,
  getResultFFQMTB,
  getMenu,
  getMenuAdults,
  getFootNoteData,
  getTableContent,
  getTableContentAdults,
  splitFoodTableMicrobe,
  splitFoodTableMicrobeAdults,
  convertFrequency
};

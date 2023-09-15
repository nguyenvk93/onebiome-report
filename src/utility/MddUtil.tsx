// eslint-disable-next-line import/no-cycle
import { convertFrequency } from './ReportUtil';
import { USER_SAMPLE_ROLES } from '../constants/DefaultValues';

export const CATEGORY_LIST = {
  BREAST_MILK: 'breast_milk', // Breast milk
  GRAINS_ROOTS_TUBERS: 'grains_roots_tubers', // Grains, roots, and tubers
  LEGUMES_NUTS: 'legumes_nuts', // Legumes and nuts
  DAIRY_PRODUCTS: 'dairy_products', // Dairy products
  FLESH_FOODS: 'flesh_foods', // Flesh Foods (meat, fish, poultry and liver/organ meats)
  EGGS: 'eggs', // Eggs
  VIT_A_RICH_FR_VEG: 'vit_a_rich_fr_veg', // Vitamin A rich fruits and vegetables
  OTHER_FR_VEG: 'other_fr_veg', // Other fruits and vegetables
  BEVERAGES: 'beverages', // Beverages
  SWEETS: 'sweets', // Sweets
  SAVOURY_FRIED_SNACKS: 'savoury_fried_snacks', // Savoury and Fried Snacks
  FAST_FOODS: 'fast_foods ', // Fast Foods
  GRAINS_WHITE_ROOTS_TUBERS_PLANT: 'grains_white_roots_tubers_plant', // Grains, White Roots and Tubers, and Plantains
  NUTS_SEEDS: 'nuts_seeds', // Nuts and Seeds
  PULSES: 'pulses', // Pulses
  DAIRY: 'dairy', // Dairy
  MEAT_POULTRY_FISH: 'meat_poultry_fish', // Meat, Poultry, and Fish
  DARK_GREEN_LEAFY_VEG: 'dark_green_leafy_veg', // Dark green leafy vegetables
  OTHER_VIT_A_RICH_FR_VEG: 'other_vit_a_rich_fr_veg', // Other Vitamin A-rich fruits and vegetables
  OTHER_FR: 'other_fr', // Other Fruits
  OTHER_VEG: 'other_veg' // Other Vegetables
};

export const CATEGORY_LIST_NAME = [
  { code: CATEGORY_LIST.BREAST_MILK, name: 'Breast milk' },
  {
    code: CATEGORY_LIST.GRAINS_ROOTS_TUBERS,
    name: 'Grains, roots, and tubers'
  },
  { code: CATEGORY_LIST.LEGUMES_NUTS, name: 'Legumes and nuts' },
  { code: CATEGORY_LIST.DAIRY_PRODUCTS, name: 'Dairy products' },
  {
    code: CATEGORY_LIST.FLESH_FOODS,
    name: 'Flesh foods (meat, fish, poultry and liver/organ meats)'
  },
  { code: CATEGORY_LIST.EGGS, name: 'Eggs' },
  {
    code: CATEGORY_LIST.VIT_A_RICH_FR_VEG,
    name: 'Vitamin A rich fruits and vegetables'
  },
  { code: CATEGORY_LIST.OTHER_FR_VEG, name: 'Other fruits and vegetables' },
  { code: CATEGORY_LIST.BEVERAGES, name: 'Beverages' },
  { code: CATEGORY_LIST.SWEETS, name: 'Sweets' },
  {
    code: CATEGORY_LIST.SAVOURY_FRIED_SNACKS,
    name: 'Savoury and fried snacks'
  },
  { code: CATEGORY_LIST.FAST_FOODS, name: 'Fast foods' },
  {
    code: CATEGORY_LIST.GRAINS_WHITE_ROOTS_TUBERS_PLANT,
    name: 'Grains, white roots, and tubers'
  },
  { code: CATEGORY_LIST.NUTS_SEEDS, name: 'Nuts and seeds' },
  { code: CATEGORY_LIST.PULSES, name: 'Pulses' },
  { code: CATEGORY_LIST.DAIRY, name: 'Dairy products' },
  { code: CATEGORY_LIST.MEAT_POULTRY_FISH, name: 'Meat, poultry, and fish' },
  {
    code: CATEGORY_LIST.DARK_GREEN_LEAFY_VEG,
    name: 'Dark green leafy vegetables'
  },
  {
    code: CATEGORY_LIST.OTHER_VIT_A_RICH_FR_VEG,
    name: 'Vitamin A-rich fruits and vegetables'
  },
  { code: CATEGORY_LIST.OTHER_FR, name: 'Other fruits' },
  { code: CATEGORY_LIST.OTHER_VEG, name: 'Other vegetables' }
];

export const M6_TO_M36_CHILD_SCORE = [
  CATEGORY_LIST.BREAST_MILK,
  CATEGORY_LIST.GRAINS_ROOTS_TUBERS,
  CATEGORY_LIST.LEGUMES_NUTS,
  CATEGORY_LIST.DAIRY_PRODUCTS,
  CATEGORY_LIST.FLESH_FOODS,
  CATEGORY_LIST.EGGS,
  CATEGORY_LIST.VIT_A_RICH_FR_VEG,
  CATEGORY_LIST.OTHER_FR_VEG
];

export const Y3_ABOVE_CHILD_OR_MTB_SCORE = [
  CATEGORY_LIST.GRAINS_WHITE_ROOTS_TUBERS_PLANT,
  CATEGORY_LIST.NUTS_SEEDS,
  CATEGORY_LIST.PULSES,
  CATEGORY_LIST.DAIRY,
  CATEGORY_LIST.MEAT_POULTRY_FISH,
  CATEGORY_LIST.EGGS,
  CATEGORY_LIST.DARK_GREEN_LEAFY_VEG,
  CATEGORY_LIST.OTHER_VIT_A_RICH_FR_VEG,
  CATEGORY_LIST.OTHER_FR,
  CATEGORY_LIST.OTHER_VEG
];

export const MDD_LIST = [
  {
    code: CATEGORY_LIST.BREAST_MILK,
    list: ['I_T_MF_BMILK']
  },
  {
    code: CATEGORY_LIST.GRAINS_ROOTS_TUBERS,
    list: [
      'BABY_PRO_BABY_RICE',
      'BABY_PRO_BROWN_RICE',
      'BABY_PRO_WHEAT',
      'BABY_PRO_RUSK',
      'BABY_PRO_BISCUITS',
      'B_C_WHITE-BREAD',
      'B_C_WHOLEMEAL-BREAD',
      'B_C_BREAD-WITH-FRUITS',
      'B_C_E_BREAD',
      'B_C_CHAPATI',
      'B_C_BREAD-BUNS',
      'B_C_PLAIN',
      'B_C_MIXED-FRUIT',
      'B_C_WHOLE',
      'B_C_OATS',
      'R_P_O_CBH_PLAIN',
      'R_P_O_CBH_BROWN',
      'R_P_O_CBH_PLAIN_PORR',
      'R_P_O_CBH_F_RICE',
      'R_P_O_CBH_G_RICE',
      'R_P_O_CBH_YAM',
      'R_P_O_CBH_SWEET_PO',
      'R_P_O_CBH_POTATO',
      'FERMENTED_TAPAI',
      'NOODLES_RICE-IN_SOUP',
      'NOODLES_WHEAT',
      'NOODLES_FRIED-STIR_RICE',
      'NOODLES_FRIED-STIR_WHEAT',
      'NOODLES_INSTANT-NOODLE',
      'NOODLES_PASTA_SPA',
      'NOODLES_WHOLEMEAL'
    ]
  },
  {
    code: CATEGORY_LIST.LEGUMES_NUTS,
    list: [
      'B_C_BREAD-WITH-FRUITS',
      'B_C_MIXED-FRUIT',
      'FERMENTED_NATO',
      'FERMENTED_TEMPE',
      'V_B_PULSES',
      'V_B_DHAL_SAMBHAR',
      'V_B_TOFU_BEANCURD',
      'NUTS_NUTS',
      'NUTS_SEEDS'
    ]
  },
  {
    code: CATEGORY_LIST.DAIRY_PRODUCTS,
    list: [
      'I_T_MF_FMILK',
      'MILK_DAIRY_FULL-CREAM-MILK',
      'MILK_DAIRY_LOW-FAT-MILK',
      'MILK_DAIRY_REGULAR',
      'MILK_DAIRY_LOW-FAT',
      'MILK_DAIRY_CURDS_KEFIR',
      'MILK_DAIRY_CHEESE',
      'MILK_DAIRY_DAIRY_BASE'
    ]
  },
  {
    code: CATEGORY_LIST.FLESH_FOODS,
    list: [
      'BABY_PRO_MEAT_FISH',
      'B_C_BREAD-BUNS',
      'R_P_O_CBH_PLAIN_PORR',
      'R_P_O_CBH_F_RICE',
      'NOODLES_RICE-IN_SOUP',
      'NOODLES_WHEAT',
      'NOODLES_FRIED-STIR_RICE',
      'NOODLES_FRIED-STIR_WHEAT',
      'C_RM_E_CHICKEN_S',
      'C_RM_E_CHICKEN_SBR',
      'C_RM_E_CHICKEN_CWC',
      'C_RM_E_PORK_S',
      'C_RM_E_PORK_SBR',
      'C_RM_E_PORK_CWC',
      'C_RM_E_RMEAT_S',
      'C_RM_E_RMEAT_SBR',
      'C_RM_E_RMEAT_CWC',
      'F_SF_RAW',
      'F_SF_OILY_FATTY',
      'F_SF_WHITE_FISH',
      'F_SF_OTHER_SFOOD',
      'P_F_PPC',
      'P_F_CP_MEATBALLS',
      'P_F_FISH_PRO',
      'P_F_CHIKEN_FISH'
    ]
  },
  {
    code: CATEGORY_LIST.EGGS,
    list: [
      'B_C_E_BREAD',
      'R_P_O_CBH_F_RICE',
      'C_RM_E_BOILED_PIS',
      'C_RM_E_FRIED_S'
    ]
  },
  {
    code: CATEGORY_LIST.VIT_A_RICH_FR_VEG,
    list: [
      'V_B_D_G_LEAFY',
      'V_B_BRO_CAULI',
      'V_B_PUMKIN',
      'FRUITS_STONE',
      'FRUITS_TROPICAL',
      'FRUITS_MELONS'
    ]
  },
  {
    code: CATEGORY_LIST.OTHER_FR_VEG,
    list: [
      'BABY_PRO_VEG',
      'BABY_PRO_FRUIT',
      'BABY_PRO_FRUIT_DESSERTS',
      'B_C_BREAD-WITH-FRUITS',
      'B_C_MIXED-FRUIT',
      'FERMENTED_KIMCHI',
      'V_B_BEANSP',
      'V_B_CABBAGE',
      'V_B_CAULI',
      'V_B_TOMATO',
      'V_B_CAPSICUM',
      'V_B_PEAS',
      'V_B_BEANS',
      'V_B_MUSHROOM',
      'V_B_OKRA',
      'V_B_CORN',
      'V_B_STALK_VEG',
      'V_B_GROUND',
      'V_B_ALLIUM_VEG',
      'V_B_ARTICHOKE',
      'V_B_VEG_PRESERVEDE',
      'FRUITS_CITRUS',
      'FRUITS_APPLE',
      'FRUITS_PEAR',
      'FRUITS_BANANA',
      'FRUITS_GRAPES',
      'FRUITS_BERRIES',
      'FRUITS_STONE',
      'FRUITS_TROPICAL',
      'FRUITS_MELONS',
      'FRUITS_DRIED',
      'FRUITS_KIWI'
    ]
  },
  {
    code: CATEGORY_LIST.BEVERAGES,
    list: [
      'BEVERAGES_JUICE',
      'BEVERAGES_C_BEVERAGES',
      'BEVERAGES_SOYA_MILK',
      'BEVERAGES_COFFEE_TEA',
      'BEVERAGES_HERBAL_TEA',
      'BEVERAGES_HEALTHIER',
      'BEVERAGES_MALT',
      'BEVERAGES_CULTURED',
      'BABY_PRO_JUICE'
    ]
  },
  {
    code: CATEGORY_LIST.SWEETS,
    list: [
      'D_SNACK_WITH-COCONUT-SOUP',
      'D_SNACK_WITHOUT-COCONUT-SOUP',
      'D_SNACK_WITH-COCONUT-STEAMED',
      'D_SNACK_WITHOUT-COCONUT-STEAMED',
      'D_SNACK_SWEET-INDIAN-SNACKS',
      'CAKE_CREAM',
      'CAKE_CAKES',
      'CAKE_ICE_CREAM',
      'CAKE_CHOCO',
      'BABY_PRO_DESSERT'
    ]
  },
  {
    code: CATEGORY_LIST.SAVOURY_FRIED_SNACKS,
    list: [
      'D_SNACK_WITH-COCONUT-STEAMED',
      'D_SNACK_WITHOUT-COCONUT-STEAMED',
      'D_SNACK_FRIED-SNACK',
      'D_SNACK_DIM-SUM',
      'D_SNACK_DIM-SUM-FRIED',
      'CAKE_PLAIN',
      'CAKE_CRACKER',
      'CAKE_PUFF_FILLED',
      'CAKE_SNACK'
    ]
  },
  {
    code: CATEGORY_LIST.FAST_FOODS,
    list: [
      'F_F_BURGERS-BEEF-CHICKEN',
      'F_F_FRENCH-FRIES',
      'F_F_PIZZA',
      'F_F_MASHED-POTATO'
    ]
  },
  {
    code: CATEGORY_LIST.GRAINS_WHITE_ROOTS_TUBERS_PLANT,
    list: [
      'B_C_WHITE-BREAD',
      'B_C_WHOLEMEAL-BREAD',
      'B_C_BREAD-WITH-FRUITS',
      'B_C_E_BREAD',
      'B_C_CHAPATI',
      'B_C_BREAD-BUNS',
      'B_C_PLAIN',
      'B_C_MIXED-FRUIT',
      'B_C_WHOLE',
      'B_C_OATS',
      'R_P_O_CBH_PLAIN',
      'R_P_O_CBH_BROWN',
      'R_P_O_CBH_PLAIN_PORR',
      'R_P_O_CBH_F_RICE',
      'R_P_O_CBH_G_RICE',
      'R_P_O_CBH_YAM',
      'R_P_O_CBH_SWEET_PO',
      'R_P_O_CBH_POTATO',
      'FERMENTED_TAPAI',
      'NOODLES_RICE-IN_SOUP',
      'NOODLES_WHEAT',
      'NOODLES_FRIED-STIR_RICE',
      'NOODLES_FRIED-STIR_WHEAT',
      'NOODLES_INSTANT-NOODLE',
      'NOODLES_PASTA_SPA',
      'NOODLES_WHOLEMEAL'
    ]
  },
  {
    code: CATEGORY_LIST.NUTS_SEEDS,
    list: [
      'B_C_BREAD-WITH-FRUITS',
      'B_C_MIXED-FRUIT',
      'FERMENTED_NATO',
      'FERMENTED_TEMPE',
      'NUTS_NUTS',
      'NUTS_SEEDS'
    ]
  },
  {
    code: CATEGORY_LIST.PULSES,
    list: [
      'V_B_PULSES',
      'V_B_DHAL_SAMBHAR',
      'V_B_TOFU_BEANCURD'
    ]
  },
  {
    code: CATEGORY_LIST.DAIRY,
    list: [
      'I_T_MF_BMILK',
      'I_T_MF_FMILK',
      'MILK_DAIRY_FULL-CREAM-MILK',
      'MILK_DAIRY_LOW-FAT-MILK',
      'MILK_DAIRY_REGULAR',
      'MILK_DAIRY_LOW-FAT',
      'MILK_DAIRY_CURDS_KEFIR',
      'MILK_DAIRY_CHEESE',
      'MILK_DAIRY_DAIRY_BASE'
    ]
  },
  {
    code: CATEGORY_LIST.MEAT_POULTRY_FISH,
    list: [
      'B_C_BREAD-BUNS',
      'R_P_O_CBH_PLAIN_PORR',
      'R_P_O_CBH_F_RICE',
      'NOODLES_RICE-IN_SOUP',
      'NOODLES_WHEAT',
      'NOODLES_FRIED-STIR_RICE',
      'NOODLES_FRIED-STIR_WHEAT',
      'C_RM_E_CHICKEN_S',
      'C_RM_E_CHICKEN_SBR',
      'C_RM_E_CHICKEN_CWC',
      'C_RM_E_PORK_S',
      'C_RM_E_PORK_SBR',
      'C_RM_E_PORK_CWC',
      'C_RM_E_RMEAT_S',
      'C_RM_E_RMEAT_SBR',
      'C_RM_E_RMEAT_CWC',
      'F_SF_RAW',
      'F_SF_OILY_FATTY',
      'F_SF_WHITE_FISH',
      'F_SF_OTHER_SFOOD',
      'P_F_PPC',
      'P_F_CP_MEATBALLS',
      'P_F_FISH_PRO',
      'P_F_CHIKEN_FISH'
    ]
  },
  {
    code: CATEGORY_LIST.DARK_GREEN_LEAFY_VEG,
    list: [
      'V_B_D_G_LEAFY',
      'V_B_BRO_CAULI',
      'V_B_PUMKIN'
    ]
  },
  {
    code: CATEGORY_LIST.OTHER_VIT_A_RICH_FR_VEG,
    list: [
      'FRUITS_STONE',
      'FRUITS_TROPICAL',
      'FRUITS_MELONS'
    ]
  },
  {
    code: CATEGORY_LIST.OTHER_FR,
    list: [
      'B_C_BREAD-WITH-FRUITS',
      'B_C_MIXED-FRUIT',
      'FRUITS_CITRUS',
      'FRUITS_APPLE',
      'FRUITS_PEAR',
      'FRUITS_BANANA',
      'FRUITS_GRAPES',
      'FRUITS_BERRIES',
      'FRUITS_STONE',
      'FRUITS_TROPICAL',
      'FRUITS_MELONS',
      'FRUITS_DRIED',
      'FRUITS_KIWI'
    ]
  },
  {
    code: CATEGORY_LIST.OTHER_VEG,
    list: [
      'FERMENTED_KIMCHI',
      'V_B_BEANSP',
      'V_B_CABBAGE',
      'V_B_CAULI',
      'V_B_TOMATO',
      'V_B_CAPSICUM',
      'V_B_PEAS',
      'V_B_BEANS',
      'V_B_MUSHROOM',
      'V_B_OKRA',
      'V_B_CORN',
      'V_B_STALK_VEG',
      'V_B_GROUND',
      'V_B_ALLIUM_VEG',
      'V_B_ARTICHOKE',
      'V_B_VEG_PRESERVEDE'
    ]
  }
];

export const M6_TO_M36_MDD_SPECIFY = [
  {
    foodCode: 'FRUITS_TROPICAL',
    arr: [
      {
        categoryCode: CATEGORY_LIST.VIT_A_RICH_FR_VEG,
        specify: ['mango', 'papaya']
      },
      {
        categoryCode: CATEGORY_LIST.OTHER_FR_VEG,
        specify: [
          'guava',
          'pineapple',
          'dragon fruit'
        ]
      }
    ]
  }
];

export const Y3_ABOVE_CHILD_OR_MTB_MDD_SPECIFY = [
  {
    foodCode: 'FRUITS_TROPICAL',
    arr: [
      {
        categoryCode: CATEGORY_LIST.OTHER_VIT_A_RICH_FR_VEG,
        specify: ['mango', 'papaya']
      },
      {
        categoryCode: CATEGORY_LIST.OTHER_FR,
        specify: [
          'guava',
          'pineapple',
          'dragon fruit'
        ]
      }
    ]
  }
];

export const M6_TO_M36_MDD_FIGURES = {
  maxPoint: 8,
  recommendedPoint: [5]
};

export const Y3_ABOVE_CHILD_OR_MTB_MDD_FIGURES = {
  maxPoint: 10,
  recommendedPoint: [5]
};

/**
 * Calculate Minimum Dietary Diversity Score
 * @param {object} data - FFQ data
 * @param {number} role - User role
 * @param {number} babyMonths - Baby's month
 */
export const getMDDScore = ({ data, role, babyMonths }: any) => {
  let MDD_CATE;
  let MDD_SPECIFY;
  let value = 0;
  let maxPoint = 0;
  let recommendedPoint: any = 0;
  const listFood: any = [];
  const fullListFood: any = [];
  const isBaby = role === USER_SAMPLE_ROLES.BABY;
  const cloneMddList = MDD_LIST.map((m) => { return { ...m }; });

  if (!isBaby || (isBaby && babyMonths > 36)) {
    MDD_CATE = Y3_ABOVE_CHILD_OR_MTB_SCORE;
    MDD_SPECIFY = Y3_ABOVE_CHILD_OR_MTB_MDD_SPECIFY;
    maxPoint = Y3_ABOVE_CHILD_OR_MTB_MDD_FIGURES.maxPoint;
    recommendedPoint = Y3_ABOVE_CHILD_OR_MTB_MDD_FIGURES.recommendedPoint;
  } else {
    MDD_CATE = M6_TO_M36_CHILD_SCORE;
    MDD_SPECIFY = M6_TO_M36_MDD_SPECIFY;
    maxPoint = M6_TO_M36_MDD_FIGURES.maxPoint;
    recommendedPoint = M6_TO_M36_MDD_FIGURES.recommendedPoint;
  }

  // Check specify
  MDD_SPECIFY.forEach((item) => {
    const dataFilter = data.find((f: any) => { return f.foodCode === item.foodCode; });

    // Remove food code if specify not match
    if (dataFilter && dataFilter.specify) {
      const textSpecify = dataFilter.specify.toLowerCase();
      item.arr.forEach((r) => {
        if (!r.specify.some((s) => { return textSpecify.includes(s); })) {
          // Find and remove food code
          const indexMdd = cloneMddList.findIndex(
            (obj) => { return obj.code === r.categoryCode; }
          );
          cloneMddList[indexMdd].list = cloneMddList[indexMdd].list.filter(
            (f) => { return f !== item.foodCode; }
          );
        }
      });
    }
  });

  MDD_CATE.forEach((item) => {
    let sum = 0;
    const mddGroup: any = cloneMddList.find((f) => { return f.code === item; });
    const dataFilter = data.filter((i: any) => { return mddGroup.list.includes(i.foodCode); });

    dataFilter.forEach((ffq: any) => {
      sum += convertFrequency(ffq.frequency);
    });

    if (sum >= 1) {
      listFood.push(CATEGORY_LIST_NAME.find((f) => { return f.code === item; }));
      value += 1;
    }
    fullListFood.push(CATEGORY_LIST_NAME.find((f) => { return f.code === item; }));
  });

  return {
    value: value <= 0 ? 1 : value,
    maxPoint,
    recommendedPoint,
    listFood,
    category: MDD_CATE,
    fullListFood
  };
};

/**
 * Calculate Minimum Dietary Diversity Score for Adults
 * @param {object} data - FFQ data
 */
export const getMDDScoreAdults = ({ data }: any) => {
  // let MDD_CATE;
  // let MDD_SPECIFY;
  let value = 0;
  // let maxPoint = 0;
  // let recommendedPoint = 0;
  const listFood: any = [];
  const fullListFood: any = [];
  const cloneMddList = MDD_LIST.map((m) => { return { ...m }; });

  const MDD_CATE = Y3_ABOVE_CHILD_OR_MTB_SCORE;
  const MDD_SPECIFY = Y3_ABOVE_CHILD_OR_MTB_MDD_SPECIFY;
  const { maxPoint } = Y3_ABOVE_CHILD_OR_MTB_MDD_FIGURES;
  const { recommendedPoint } = Y3_ABOVE_CHILD_OR_MTB_MDD_FIGURES;

  // Check specify
  MDD_SPECIFY.forEach((item) => {
    const dataFilter = data.find((f: any) => { return f.foodCode === item.foodCode; });

    // Remove food code if specify not match
    if (dataFilter && dataFilter.specify) {
      const textSpecify = dataFilter.specify.toLowerCase();
      item.arr.forEach((r) => {
        if (!r.specify.some((s) => { return textSpecify.includes(s); })) {
          // Find and remove food code
          const indexMdd = cloneMddList.findIndex(
            (obj) => { return obj.code === r.categoryCode; }
          );
          cloneMddList[indexMdd].list = cloneMddList[indexMdd].list.filter(
            (f) => { return f !== item.foodCode; }
          );
        }
      });
    }
  });

  MDD_CATE.forEach((item) => {
    let sum = 0;
    const mddGroup: any = cloneMddList.find((f) => { return f.code === item; });
    const dataFilter = data.filter((i: any) => { return mddGroup.list.includes(i.foodCode); });

    dataFilter.forEach((ffq: any) => {
      sum += convertFrequency(ffq.frequency);
    });

    if (sum >= 1) {
      listFood.push(CATEGORY_LIST_NAME.find((f) => { return f.code === item; }));
      value += 1;
    }
    fullListFood.push(CATEGORY_LIST_NAME.find((f) => { return f.code === item; }));
  });

  return {
    value: value <= 0 ? 1 : value,
    maxPoint,
    recommendedPoint,
    listFood,
    category: MDD_CATE,
    fullListFood
  };
};

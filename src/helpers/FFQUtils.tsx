import { FFQ_FREQUENCY, FFQ_UNIT, FOOD_CATEGORY_CODE } from '../constants/DefaultValues';

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

export const freOptions = [
  { label: 'Rarely/Never', value: R_NEVER },
  { label: '1-3 times per month', value: MONTH_1_3 },
  { label: '1-2 times per week', value: WEEK_1_2 },
  { label: '3-4 times per week', value: WEEK_3_4 },
  { label: '5-6 times per week', value: WEEK_5_6 },
  { label: 'Once a day', value: DAY_ONCE },
  { label: '2-3 times per day', value: DAY_2_3 },
  { label: '4-5 times per day', value: DAY_4_5 }
];

export const quantityOps = [
  { label: '01 time', value: 1 },
  { label: '02 times', value: 2 },
  { label: '03 times', value: 3 },
  { label: '04 times', value: 4 },
  { label: '05 times', value: 5 },
  { label: '06 times', value: 6 },
  { label: '07 times', value: 7 },
  { label: '08 times', value: 8 },
  { label: '09 times', value: 9 },
  { label: '10 times', value: 10 }
];

export const unitOps = [
  { label: 'Slice', value: FFQ_UNIT.SLICE },
  { label: 'Tbsp', value: FFQ_UNIT.TBSP },
  { label: 'Small bowl', value: FFQ_UNIT.SMALL_BOWL },
  { label: 'Stalk', value: FFQ_UNIT.STALKS },
  { label: 'Whole fruit', value: FFQ_UNIT.WHOLE_FRUIT },
  { label: 'Pcs', value: FFQ_UNIT.PCS },
  { label: 'Cup(120ml)', value: FFQ_UNIT.CUP12ML },
  { label: 'Tsp', value: FFQ_UNIT.TSP }
];

export const unitQuantityOps = [
  { label: '0.5', value: 0.5 },
  { label: '1', value: 1 },
  { label: '1.5', value: 1.5 },
  { label: '2', value: 2 },
  { label: '2.5', value: 2.5 },
  { label: '3', value: 3 },
  { label: '3.5', value: 3.5 },
  { label: '4', value: 4 },
  { label: '4.5', value: 4.5 },
  { label: '5', value: 5 },
  { label: '5.5', value: 5.5 },
  { label: '6', value: 6 },
  { label: '6.5', value: 6.5 },
  { label: '7', value: 7 },
  { label: '7.5', value: 7.5 },
  { label: '8', value: 8 },
  { label: '8.5', value: 8.5 },
  { label: '9', value: 9 },
  { label: '9.5', value: 9.5 },
  { label: '10', value: 10 }
];

export const MOM_FOODS = [
  FOOD_CATEGORY_CODE.B_C,
  FOOD_CATEGORY_CODE.R_P_O_CBH,
  FOOD_CATEGORY_CODE.NOODLES,
  FOOD_CATEGORY_CODE.C_RM_E,
  FOOD_CATEGORY_CODE.F_SF,
  FOOD_CATEGORY_CODE.P_F,
  FOOD_CATEGORY_CODE.V_B,
  FOOD_CATEGORY_CODE.FRUITS,
  FOOD_CATEGORY_CODE.FERMENTED,
  FOOD_CATEGORY_CODE.DESSERT_SNACK,
  FOOD_CATEGORY_CODE.CAKE,
  FOOD_CATEGORY_CODE.NUTS,
  FOOD_CATEGORY_CODE.F_F,
  FOOD_CATEGORY_CODE.BEVERAGES,
  FOOD_CATEGORY_CODE.MILK_DAIRY,
  FOOD_CATEGORY_CODE.ALCOHOLIC_DRINKS,
  FOOD_CATEGORY_CODE.SUPPLEMENTS
];

export const BABY_FOODS = [
  FOOD_CATEGORY_CODE.BABY_PRO,
  FOOD_CATEGORY_CODE.I_T_MF,
  FOOD_CATEGORY_CODE.B_C,
  FOOD_CATEGORY_CODE.R_P_O_CBH,
  FOOD_CATEGORY_CODE.NOODLES,
  FOOD_CATEGORY_CODE.C_RM_E,
  FOOD_CATEGORY_CODE.F_SF,
  FOOD_CATEGORY_CODE.P_F,
  FOOD_CATEGORY_CODE.V_B,
  FOOD_CATEGORY_CODE.FRUITS,
  FOOD_CATEGORY_CODE.FERMENTED,
  FOOD_CATEGORY_CODE.DESSERT_SNACK,
  FOOD_CATEGORY_CODE.CAKE,
  FOOD_CATEGORY_CODE.NUTS,
  FOOD_CATEGORY_CODE.F_F,
  FOOD_CATEGORY_CODE.BEVERAGES,
  FOOD_CATEGORY_CODE.MILK_DAIRY,
  FOOD_CATEGORY_CODE.SUPPLEMENTS
];

export const FOOD_LIST = [
  {
    categoryCode: FOOD_CATEGORY_CODE.C_RM_E,
    name: 'Chicken / Red Meat / Eggs',
    labelShortList: 'Chicken / Red Meat / Eggs',
    image: 'chicken-red-meat-eggs.png',
    mobileImage: 'chicken-red-meat-eggs-mobile.png',
    bigTitle: 'Chicken / Red \nMeat / Eggs',
    mobileBigTitle: 'Chicken / \nRed Meat / Eggs',
    groups: [
      {
        fields: [
          'C_RM_E_CHICKEN_S',
          'C_RM_E_CHICKEN_SBR',
          'C_RM_E_CHICKEN_CWC',
          'C_RM_E_PORK_S',
          'C_RM_E_PORK_SBR',
          'C_RM_E_PORK_CWC',
          'C_RM_E_RMEAT_S',
          'C_RM_E_RMEAT_SBR',
          'C_RM_E_RMEAT_CWC'
        ]
      },
      {
        title: 'Whole eggs',
        subTitle: '\n(including salted and century eggs)',
        fields: ['C_RM_E_BOILED_PIS', 'C_RM_E_FRIED_S']
      }
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.BABY_PRO,
    name: 'Infant Products',
    labelShortList:
      'Infant Products (e.g. baby rice cereals, baby food in jar/bottle)',
    image: 'infant-products.png',
    mobileImage: 'infant-products-mobile.png',
    bigTitle: 'INFANT PRODUCTS',
    mobileBigTitle: 'INFANT \nPRODUCTS',
    groups: [
      {
        title: 'Infant commercial products',
        fields: [
          'BABY_PRO_BABY_RICE',
          'BABY_PRO_BROWN_RICE',
          'BABY_PRO_WHEAT',
          'BABY_PRO_RUSK',
          'BABY_PRO_BISCUITS'
        ]
      },
      {
        title: 'Baby food in jar/bottle',
        fields: [
          'BABY_PRO_MEAT_FISH',
          'BABY_PRO_VEG',
          'BABY_PRO_FRUIT',
          'BABY_PRO_JUICE',
          'BABY_PRO_DESSERT',
          'BABY_PRO_FRUIT_DESSERTS'
        ]
      }
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.I_T_MF,
    name: 'Infant and Toddler Milk Feeding',
    labelShortList:
      'Infant and Toddler Milk Feeding (e.g. breast milk, formula milk)',
    image: 'infant-and-toddler-milk-feeding.png',
    mobileImage: 'infant-and-toddler-milk-feeding-mobile.png',
    bigTitle: 'Infant and \nToddler Milk \nFeeding ',
    mobileBigTitle: 'Infant and Toddler \nMilk Feeding ',
    foods: ['I_T_MF_BMILK', 'I_T_MF_FMILK']
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.R_P_O_CBH,
    name: 'Rice, Porridge & other source of Carbohydrate',
    labelShortList: 'Rice, Porridge & other source of Carbohydrate',
    image: 'rice-and-porridge.png',
    mobileImage: 'rice-and-porridge-mobile.png',
    bigTitle: 'Rice, Porridge & \nother source of \nCarbohydrate',
    mobileBigTitle: 'Rice, Porridge & \nother source...',
    foods: [
      'R_P_O_CBH_PLAIN',
      'R_P_O_CBH_BROWN',
      'R_P_O_CBH_PLAIN_PORR',
      'R_P_O_CBH_F_RICE',
      'R_P_O_CBH_G_RICE',
      'R_P_O_CBH_YAM',
      'R_P_O_CBH_SWEET_PO',
      'R_P_O_CBH_POTATO'
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.B_C,
    name: 'Breads and Cereals',
    labelShortList: 'Breads and Cereals',
    image: 'bread-cereals.png',
    mobileImage: 'bread-cereals-mobile.png',
    bigTitle: 'BREADS & CEREALS',
    mobileBigTitle: 'BREADS AND \nCEREALS',
    groups: [
      {
        title: 'Bread',
        fields: [
          'B_C_WHITE-BREAD',
          'B_C_WHOLEMEAL-BREAD',
          'B_C_BREAD-WITH-FRUITS'
        ]
      },
      {
        title: 'Other types of breads',
        fields: [
          'B_C_CHAPATI',
          'B_C_BREAD-BUNS',
          'B_C_E_BREAD'
        ]
      },
      {
        title: 'Cereal',
        fields: [
          'B_C_PLAIN',
          'B_C_MIXED-FRUIT',
          'B_C_WHOLE',
          'B_C_OATS'
        ]
      }
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.FERMENTED,
    name: 'Fermented food',
    labelShortList: 'Fermented food (e.g. kimchi, <i>tempe<i/>)',
    image: 'fermented.png',
    mobileImage: 'fermented-mobile.png',
    bigTitle: 'FERMENTED FOOD',
    mobileBigTitle: 'FERMENTED \nFOOD',
    foods: [
      'FERMENTED_KIMCHI',
      'FERMENTED_NATO',
      'FERMENTED_TEMPE',
      'FERMENTED_TAPAI'
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.NOODLES,
    name: 'Noodles (rice noodles, wheat noodles, bean noodles) and pasta',
    labelShortList:
      'Noodles (rice noodles, wheat noodles, bean noodles) and pasta',
    image: 'noodle.png',
    mobileImage: 'noodle-mobile.png',
    bigTitle:
      'Noodles (rice noodles, \nwheat noodles, bean \nnoodles) and pasta',
    mobileBigTitle: 'Noodles \n& pasta',
    foods: [
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
    categoryCode: FOOD_CATEGORY_CODE.V_B,
    name: 'Vegetables and Beancurd',
    labelShortList: 'Vegetables and Beancurd',
    image: 'vegetables-and-beancurd.png',
    mobileImage: 'vegetables-and-beancurd-mobile.png',
    bigTitle: 'Vegetables and \nBeancurd',
    mobileBigTitle: 'Vegetables \n& Beancurd',
    foods: [
      'V_B_BEANSP',
      'V_B_D_G_LEAFY',
      'V_B_CABBAGE',
      'V_B_BRO_CAULI',
      'V_B_CAULI',
      'V_B_TOMATO',
      'V_B_CAPSICUM',
      'V_B_PEAS',
      'V_B_BEANS',
      'V_B_PUMKIN',
      'V_B_MUSHROOM',
      'V_B_OKRA',
      'V_B_CORN',
      'V_B_STALK_VEG',
      'V_B_GROUND',
      'V_B_ALLIUM_VEG',
      'V_B_ARTICHOKE',
      'V_B_PULSES',
      'V_B_DHAL_SAMBHAR',
      'V_B_TOFU_BEANCURD',
      'V_B_VEG_PRESERVEDE'
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.FRUITS,
    name: 'Fruits',
    labelShortList: 'Fruits',
    image: 'fruits.png',
    mobileImage: 'fruits-mobile.png',
    bigTitle: 'Fruits',
    mobileBigTitle: 'Fruits',
    foods: [
      'FRUITS_CITRUS',
      'FRUITS_APPLE',
      'FRUITS_PEAR',
      'FRUITS_BANANA',
      'FRUITS_GRAPES',
      'FRUITS_BERRIES',
      'FRUITS_STONE',
      'FRUITS_TROPICAL',
      'FRUITS_MELONS',
      'FRUITS_KIWI',
      'FRUITS_DRIED'
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.F_SF,
    name: 'Fish / Seafood',
    labelShortList: 'Fish / Seafood',
    image: 'fish-seafood.png',
    mobileImage: 'fish-seafood-mobile.png',
    bigTitle: 'Fish / Seafood',
    mobileBigTitle: 'Fish / Seafood',
    groups: [
      {
        title: 'Fish',
        fields: [
          'F_SF_RAW',
          'F_SF_OILY_FATTY',
          'F_SF_WHITE_FISH',
          'F_SF_OTHER_SFOOD'
        ]
      }
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.P_F,
    name: 'Processed foods',
    labelShortList:
      'Processed foods (e.g. hotdog, fish ball, chicken/fish nuggets)',
    image: 'processed-foods.png',
    mobileImage: 'processed-foods-mobile.png',
    bigTitle: 'processed foods',
    mobileBigTitle: 'processed \nfoods',
    foods: [
      'P_F_PPC',
      'P_F_CP_MEATBALLS',
      'P_F_FISH_PRO',
      'P_F_CHIKEN_FISH'
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.DESSERT_SNACK,
    name: 'Desserts / Local Snacks',
    labelShortList: 'Desserts / Local Snacks',
    image: 'desserts-local-snacks.png',
    mobileImage: 'desserts-local-snacks-mobile.png',
    bigTitle: 'desserts / \nlocal snacks',
    mobileBigTitle: 'desserts / \nlocal snacks',
    groups: [
      {
        title: 'Dessert in soup',
        fields: ['D_SNACK_WITH-COCONUT-SOUP', 'D_SNACK_WITHOUT-COCONUT-SOUP']
      },
      {
        title: 'Kueh - steamed',
        fields: ['D_SNACK_WITH-COCONUT-STEAMED', 'D_SNACK_WITHOUT-COCONUT-STEAMED']
      },
      {
        title: 'Others',
        fields: [
          'D_SNACK_FRIED-SNACK',
          'D_SNACK_DIM-SUM',
          'D_SNACK_DIM-SUM-FRIED',
          'D_SNACK_SWEET-INDIAN-SNACKS'
        ]
      }
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.CAKE,
    name: 'Biscuits, Pastries, Cakes and Snacks',
    labelShortList: 'Biscuits, Pastries, Cakes and Snacks',
    image: 'biscuits-pastries-cakes.png',
    mobileImage: 'biscuits-pastries-cakes-mobile.png',
    bigTitle: 'Biscuits, \nPastries, Cakes \nand Snacks',
    mobileBigTitle: 'Biscuits, Pastries, \nCakes and Snacks',
    foods: [
      'CAKE_PLAIN',
      'CAKE_CRACKER',
      'CAKE_CREAM',
      'CAKE_PUFF_FILLED',
      'CAKE_CAKES',
      'CAKE_SNACK',
      'CAKE_ICE_CREAM',
      'CAKE_CHOCO'
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.F_F,
    name: 'Fast Foods',
    labelShortList: 'Fast Foods',
    image: 'fast-foods.png',
    mobileImage: 'fast-foods-mobile.png',
    bigTitle: 'fast foods',
    mobileBigTitle: 'fast foods',
    foods: [
      'F_F_BURGERS-BEEF-CHICKEN',
      'F_F_FRENCH-FRIES',
      'F_F_PIZZA',
      'F_F_MASHED-POTATO'
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.NUTS,
    name: 'Nuts',
    labelShortList: 'Nuts',
    image: 'nuts.png',
    mobileImage: 'nuts-mobile.png',
    bigTitle: 'nuts',
    mobileBigTitle: 'nuts',
    groups: [
      {
        title: 'All types of nuts',
        fields: ['NUTS_NUTS', 'NUTS_SEEDS']
      }
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.BEVERAGES,
    name: 'Beverages',
    labelShortList: 'Beverages',
    image: 'beverages.png',
    mobileImage: 'beverages-mobile.png',
    bigTitle: 'beverages',
    mobileBigTitle: 'beverages',
    foods: [
      'BEVERAGES_JUICE',
      'BEVERAGES_C_BEVERAGES',
      'BEVERAGES_SOYA_MILK',
      'BEVERAGES_COFFEE_TEA',
      'BEVERAGES_HERBAL_TEA',
      'BEVERAGES_HEALTHIER',
      'BEVERAGES_MALT',
      'BEVERAGES_CULTURED'
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.MILK_DAIRY,
    name: 'Milk & Dairy Products',
    labelShortList: 'Milk & Dairy Products',
    image: 'milk-diary-product.png',
    mobileImage: 'milk-diary-product-mobile.png',
    bigTitle: 'Milk & Dairy \nProducts',
    mobileBigTitle: 'Milk & Dairy \nProducts',
    groups: [
      {
        title: 'Milk (as a drink)',
        fields: ['MILK_DAIRY_FULL-CREAM-MILK', 'MILK_DAIRY_LOW-FAT-MILK']
      },
      {
        title: 'Yoghurt',
        fields: [
          'MILK_DAIRY_REGULAR',
          'MILK_DAIRY_LOW-FAT',
          'MILK_DAIRY_CURDS_KEFIR'
        ]
      },
      {
        title: 'Cheese',
        fields: ['MILK_DAIRY_CHEESE', 'MILK_DAIRY_DAIRY_BASE']
      }
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.ALCOHOLIC_DRINKS,
    name: 'Alcoholic drinks',
    labelShortList: 'Alcoholic drinks',
    image: 'alcoholic-drinks.png',
    mobileImage: 'alcoholic-drinks-mobile.png',
    bigTitle: 'alcoholic drinks',
    mobileBigTitle: 'alcoholic \ndrinks',
    foods: [
      'ALCOHOLIC_DRINKS_BEER',
      'ALCOHOLIC_DRINKS_CIDER',
      'ALCOHOLIC_DRINKS_STOUT',
      'ALCOHOLIC_DRINKS_WINE',
      'ALCOHOLIC_DRINKS_RICE-WINE',
      'ALCOHOLIC_DRINKS_SPIRITS'
    ]
  },
  {
    categoryCode: FOOD_CATEGORY_CODE.SUPPLEMENTS,
    name: 'Supplements',
    labelShortList: 'Supplements',
    image: 'supplements.png',
    mobileImage: 'supplements-mobile.png',
    bigTitle: 'supplements',
    mobileBigTitle: 'supplements',
    foods: ['SUPP_DIETARY']
  }
];

export const FIELD_NAME = [
  {
    name: 'Baby rice cereals, plain or flavoured',
    subName: '(e.g. rice Cerelac)',
    code: 'BABY_PRO_BABY_RICE'
  },
  { name: 'Brown rice cereals', code: 'BABY_PRO_BROWN_RICE' },
  { name: 'Wheat cereal, plain or flavoured', code: 'BABY_PRO_WHEAT' },
  { name: 'Rusk', code: 'BABY_PRO_RUSK' },
  { name: 'Biscuits (plain biscuits for infants)', code: 'BABY_PRO_BISCUITS' },
  { name: 'Meat / Fish', code: 'BABY_PRO_MEAT_FISH' },
  { name: 'Vegetable', code: 'BABY_PRO_VEG' },
  { name: 'Fruit', code: 'BABY_PRO_FRUIT' },
  {
    name: 'Infant juice drink (no added sugar)',
    subName: '(e.g. Gerber / Heinz baby juice drink)',
    code: 'BABY_PRO_JUICE',
    nameReport: 'Infant juice drink'
  },
  {
    name: 'Dessert',
    subName: '(e.g. egg custards, vanilla custard)',
    code: 'BABY_PRO_DESSERT'
  },
  {
    name: 'Fruit based desserts, not including pure fruit puree',
    code: 'BABY_PRO_FRUIT_DESSERTS'
  },
  { name: 'Breast milk', code: 'I_T_MF_BMILK' },
  { name: 'Formula milk', code: 'I_T_MF_FMILK' },
  { name: 'Plain white rice', code: 'R_P_O_CBH_PLAIN' },
  { name: 'Brown or red rice', code: 'R_P_O_CBH_BROWN' },
  {
    name: 'Plain porridge and / or with meat / fish',
    code: 'R_P_O_CBH_PLAIN_PORR',
    nameReport: 'Plain porridge and/or with meat/fish'
  },
  {
    name: 'Flavoured rice',
    subName: '(e.g. chicken rice, nasi lemak rice, nasi biryani, fried rice)',
    code: 'R_P_O_CBH_F_RICE'
  },
  { name: 'Glutinous rice', code: 'R_P_O_CBH_G_RICE' },
  { name: 'Yam', code: 'R_P_O_CBH_YAM' },
  { name: 'Sweet potatoes', code: 'R_P_O_CBH_SWEET_PO' },
  { name: 'Potatoes', code: 'R_P_O_CBH_POTATO' },
  { name: 'Chicken, steamed', code: 'C_RM_E_CHICKEN_S' },
  { name: 'Chicken, stir-fry / braised / roast', code: 'C_RM_E_CHICKEN_SBR' },
  { name: 'Chicken curry with coconut', code: 'C_RM_E_CHICKEN_CWC' },
  { name: 'Pork, steamed', code: 'C_RM_E_PORK_S' },
  { name: 'Pork, stir-fry / braised / roast', code: 'C_RM_E_PORK_SBR' },
  { name: 'Pork curry with coconut', code: 'C_RM_E_PORK_CWC' },
  {
    name: 'Red meats (e.g. beef/mutton/duck), steamed',
    code: 'C_RM_E_RMEAT_S'
  },
  {
    name: 'Red meats (e.g. beef/mutton/duck), stir-fry / braised / roast',
    code: 'C_RM_E_RMEAT_SBR'
  },
  {
    name: 'Red meats (e.g. beef/mutton/duck), curry with coconut',
    code: 'C_RM_E_RMEAT_CWC'
  },
  {
    name: 'Boiled / poached / in soup / steamed',
    code: 'C_RM_E_BOILED_PIS',
    nameReport: 'Whole eggs (Boiled / poached / in soup / steamed)'
  },
  {
    name: 'Fried / scrambled',
    code: 'C_RM_E_FRIED_S',
    nameReport: 'Whole eggs (Fried / scrambled)'
  },
  { name: 'White bread, including naan', code: 'B_C_WHITE-BREAD' },
  {
    name: 'Wholemeal / wholegrain bread',
    code: 'B_C_WHOLEMEAL-BREAD',
    nameReport: 'Wholemeal bread'
  },
  { name: 'Bread with fruits and nuts', code: 'B_C_BREAD-WITH-FRUITS' },
  {
    name: 'Ethnic breads',
    subName: '(e.g. roti prata, murtabak, french toast, roti telur, roti john)',
    code: 'B_C_E_BREAD'
  },
  { name: 'Chapati', code: 'B_C_CHAPATI' },
  {
    name: 'Bread buns with coconut / meat fillings',
    code: 'B_C_BREAD-BUNS',
    nameReport: 'Bread buns with coconut/meat filings'
  },
  {
    name: 'Plain / flavoured breakfast cereal',
    code: 'B_C_PLAIN',
    nameReport: 'Plain/flavoured breakfast cereal'
  },
  {
    name: 'Mixed (with fruit / nuts) breakfast cereal',
    code: 'B_C_MIXED-FRUIT',
    nameReport: 'Mixed (with fruit/nuts) breakfast cereal'
  },
  { name: 'Wholegrain breakfast cereals', code: 'B_C_WHOLE' },
  {
    name: 'Oats / oatmeal',
    code: 'B_C_OATS',
    nameReport: 'Oats/oatmeal (raw)'
  },
  { name: 'Kimchi', code: 'FERMENTED_KIMCHI' },
  {
    name: 'Natto ',
    code: 'FERMENTED_NATO',
    isItalic: true,
    subName: '(fermented soyabeans)',
    nameReport: 'Nato'
  },
  { name: 'Tempe', code: 'FERMENTED_TEMPE', isItalic: true },
  {
    name: 'Tapai ',
    code: 'FERMENTED_TAPAI',
    isItalic: true,
    subName: '(fermented rice or starchy foods)',
    nameReport: 'Tapai'
  },
  {
    name: 'Rice noodles, in soup',
    subName: '(e.g. beehoon, kway teow)',
    code: 'NOODLES_RICE-IN_SOUP',
    nameReport: 'Rice noodles, in soup (e.g. beehoon, kway teow)'
  },
  {
    name: 'Wheat noodles in soup',
    subName: '(e.g. ramen, mee soto)',
    code: 'NOODLES_WHEAT',
    nameReport: 'Wheat noodles in soup (e.g. ramen, mee soto)'
  },
  {
    name: 'Stir fry or fried rice noodles',
    subName: '(e.g. hor fun, fried bee hoon, mee siam)',
    code: 'NOODLES_FRIED-STIR_RICE',
    nameReport:
      'Stir fry or fried rice noodles (e.g. hor fun, fried bee hoon, mee siam)'
  },
  {
    name: 'Stir fry or fried wheat noodles',
    subName: '(e.g. mee goreng, hokkien mee)',
    code: 'NOODLES_FRIED-STIR_WHEAT',
    nameReport:
      'Stir fry or fried wheat noodles (e.g. mee goreng, hokkien mee)'
  },
  {
    name: 'Instant / cup noodles',
    code: 'NOODLES_INSTANT-NOODLE',
    nameReport: 'Instant/cup noodles'
  },
  {
    name: 'Pasta / spaghetti ',
    code: 'NOODLES_PASTA_SPA',
    nameReport: 'Pasta / spaghetti'
  },
  {
    name: 'Wholemeal or wholewheat pasta / spaghetti',
    code: 'NOODLES_WHOLEMEAL'
  },
  {
    name: 'Beansprouts',
    code: 'V_B_BEANSP'
  },
  {
    name: 'Dark green leafy vegetables',
    subName: '(e.g. kailan, spinach, kangkong, lettuce)',
    code: 'V_B_D_G_LEAFY',
    nameReport:
      'Dark green leafy vegetables (e.g. kailan, spinach, kangkong, lettuce)'
  },
  {
    name: 'Cabbage',
    code: 'V_B_CABBAGE'
  },
  {
    name: 'Broccoli',
    code: 'V_B_BRO_CAULI'
  },
  {
    name: 'Cauliflower',
    code: 'V_B_CAULI'
  },
  {
    name: 'Tomato',
    code: 'V_B_TOMATO'
  },
  {
    name: 'Capsicum',
    code: 'V_B_CAPSICUM'
  },
  {
    name: 'Peas',
    code: 'V_B_PEAS'
  },
  {
    name: 'Beans (long beans, French beans)',
    code: 'V_B_BEANS'
  },
  { name: 'Pumpkin', code: 'V_B_PUMKIN' },
  { name: 'Mushrooms', code: 'V_B_MUSHROOM' },
  { name: 'Okra / eggplant', code: 'V_B_OKRA' },
  { name: 'Corn', code: 'V_B_CORN' },
  {
    name: 'Stalk vegetables',
    subName: '(e.g. celery, leek, asparagus)',
    code: 'V_B_STALK_VEG',
    nameReport: 'Stalk vegetables (e.g. celery, leek, asparagus)'
  },
  {
    name: 'Gourds',
    subName: '(e.g. bitter, bottle, wax)',
    code: 'V_B_GROUND',
    nameReport: 'Gourds (e.g. bitter, bottle, wax)'
  },
  {
    name: 'Allium vegetables',
    subName: '(e.g. garlic, onions)',
    code: 'V_B_ALLIUM_VEG',
    nameReport: 'Allium vegetables (e.g. garlic, onions)'
  },
  { name: 'Artichoke', code: 'V_B_ARTICHOKE' },
  {
    name: 'Pulses (excluding lentils)',
    subName: '(e.g. chickpeas, kidney beans, baked beans)',
    code: 'V_B_PULSES',
    nameReport:
      'Pulses (excluding lentils) (e.g. chickpeas, kidney beans, baked beans)'
  },
  { name: 'Dhal / sambhar / vadai / lentils', code: 'V_B_DHAL_SAMBHAR' },
  {
    name: 'Tofu and beancurd',
    subName: '(e.g. taukwa, taupok, tau huay)',
    code: 'V_B_TOFU_BEANCURD',
    nameReport: 'Tofu and beancurd (e.g. taukwa, taupok, tau huay)'
  },
  {
    name: 'Preserved vegetable',
    subName: '(e.g. chye sim, olives)',
    code: 'V_B_VEG_PRESERVEDE',
    nameReport: 'Preserved vegetable (e.g. chye sim, olives)'
  },
  {
    name: 'Citrus fruits',
    subName: '(e.g. oranges, lemons)',
    code: 'FRUITS_CITRUS'
  },
  { name: 'Apple', code: 'FRUITS_APPLE' },
  { name: 'Pear', code: 'FRUITS_PEAR' },
  { name: 'Banana', code: 'FRUITS_BANANA' },
  { name: 'Grapes', code: 'FRUITS_GRAPES' },
  { name: 'Berries', code: 'FRUITS_BERRIES' },
  { name: 'Stone fruits', subName: '(e.g. peach, plum)', code: 'FRUITS_STONE' },
  {
    name: 'Tropical fruits',
    subName: '(e.g. mango, papaya, guava, pineapple, dragon fruit)',
    code: 'FRUITS_TROPICAL'
  },
  {
    name: 'Melons',
    subName: '(e.g. watermelon, honeydew, rock melon)',
    code: 'FRUITS_MELONS'
  },
  {
    name: 'Dried fruits',
    subName: '(e.g. raisins, dried cranberries, dates)',
    code: 'FRUITS_DRIED'
  },
  { name: 'Kiwi fruit', code: 'FRUITS_KIWI' },
  {
    name: 'Raw',
    subName: '(e.g. sashimi)',
    code: 'F_SF_RAW',
    nameReport: 'Raw (e.g. sashimi)'
  },
  {
    name: 'Oily / fatty fish (solid texture, darker colour)',
    subName:
      '(e.g. mackerel / kembong / batang, trevally, salmon, sardine, tuna)',
    code: 'F_SF_OILY_FATTY'
  },
  {
    name: 'White fish (dry and flaky)',
    subName: '(e.g. pomfret, snapper, bream, catfish)',
    code: 'F_SF_WHITE_FISH',
    nameReport: 'White fish'
  },
  {
    name: 'Other seafood',
    subName: '(e.g. prawn, squid, cuttlefish, crab, clam, mussels)',
    code: 'F_SF_OTHER_SFOOD'
  },
  {
    name: 'Processed / preserved / canned meat',
    subName: '(e.g. hotdog, sausage, luncheon meat, ham, bacon, bak kua)',
    code: 'P_F_PPC'
  },
  { name: 'Commercially prepared meatballs', code: 'P_F_CP_MEATBALLS' },
  {
    name: 'Fish products',
    subName: '(e.g. fish ball, fish paste, crab stick, cuttlefish ball)',
    code: 'P_F_FISH_PRO'
  },
  { name: 'Chicken / fish nuggets', code: 'P_F_CHIKEN_FISH' },
  {
    name: 'With coconut milk / cream',
    subName: '(e.g pulut hitam, bubur cha cha)',
    code: 'D_SNACK_WITH-COCONUT-SOUP',
    nameReport: 'Dessert in soup (With coconut milk / cream)'
  },
  {
    name: 'Without coconut milk',
    subName: '(e.g. cheng tng, green bean soup, tau suan)',
    code: 'D_SNACK_WITHOUT-COCONUT-SOUP',
    nameReport: 'Dessert in soup (Without coconut milk)'
  },
  {
    name: 'With coconut / coconut milk / coconut cream',
    subName: '(e.g. kueh salat, kueh dadar, putu mayam, idli)',
    code: 'D_SNACK_WITH-COCONUT-STEAMED',
    nameReport: 'Kueh - steamed (With coconut / coconut milk / coconut cream)'
  },
  {
    name: 'Without coconut milk',
    subName: '(e.g. kueh tutu, soon kway)',
    code: 'D_SNACK_WITHOUT-COCONUT-STEAMED',
    nameReport: 'Kueh - steamed (Without coconut milk)'
  },
  {
    name: 'Fried snacks',
    subName: '(e.g. you tiao, pisang goreng, Indian rojak)',
    code: 'D_SNACK_FRIED-SNACK',
    nameReport: 'Fried snacks (e.g. you tiaom goring pisang, Indian rojak)'
  },
  {
    name: 'Dim sum-steamed',
    subName: '(e.g. chee cheong fun, dumplings, rice dumplings)',
    code: 'D_SNACK_DIM-SUM',
    nameReport:
      'Dim Sum - steamed (e.g. chee cheong fun, dumplings, rice dumplings)'
  },
  {
    name: 'Dim sum-fried / deep fried',
    subName: '(e.g. fried carrot cake, wanton, char siew puff)',
    code: 'D_SNACK_DIM-SUM-FRIED',
    nameReport:
      'Dim sum - fried/deep fried (e.g. fried carrot cake, wanton, char siew puff)'
  },
  {
    name: 'Sweet Indian snacks',
    subName: '(e.g. burfi, halwa)',
    code: 'D_SNACK_SWEET-INDIAN-SNACKS',
    nameReport: 'Sweet Indian snacks (e.g. burfi, halwa)'
  },
  { name: 'Plain, non-wholemeal crackers', code: 'CAKE_PLAIN' },
  { name: 'Wholemeal crackers', code: 'CAKE_CRACKER' },
  { name: 'Cream filled biscuits / shortbread / cookies', code: 'CAKE_CREAM' },
  {
    name: 'Puff / flaky pastries',
    subName: '(e.g. croissants, baked curry puffs)',
    code: 'CAKE_PUFF_FILLED'
  },
  {
    name: 'Cakes',
    subName: '(e.g. plain butter, sponge, fruit, cream cake)',
    code: 'CAKE_CAKES'
  },
  {
    name: 'Fried salty snacks',
    subName: '(e.g. crisps, prawn crackers, keropok, salted biscuits)',
    code: 'CAKE_SNACK'
  },
  { name: 'Ice cream', code: 'CAKE_ICE_CREAM' },
  { name: 'Chocolate', code: 'CAKE_CHOCO' },
  {
    name: 'Burgers, with beef / chicken / fish',
    code: 'F_F_BURGERS-BEEF-CHICKEN',
    nameReport: 'Burgers, with beef or chicken'
  },
  { name: 'French fries', code: 'F_F_FRENCH-FRIES' },
  { name: 'Pizza', code: 'F_F_PIZZA' },
  { name: 'Mashed potato with gravy', code: 'F_F_MASHED-POTATO' },
  {
    name: 'Nuts',
    subName: '(e.g. peanuts, cashews, almonds)',
    code: 'NUTS_NUTS'
  },
  {
    name: 'Seeds',
    subName: '(e.g. sunflower seeds, sesame seeds)',
    code: 'NUTS_SEEDS'
  },
  { name: 'Freshly squeezed fruit juice', code: 'BEVERAGES_JUICE' },
  {
    name: 'Sweetened commercial beverages',
    subName:
      '(e.g. packet juice, soft drinks, lemon tea, bandung, barley, bubble tea)',
    code: 'BEVERAGES_C_BEVERAGES'
  },
  { name: 'Soya milk (fresh / packet / can)', code: 'BEVERAGES_SOYA_MILK' },
  { name: 'Coffee / Tea', code: 'BEVERAGES_COFFEE_TEA' },
  {
    name: 'Traditional herbal tea',
    subName: '(e.g. chrysanthemum tea)',
    code: 'BEVERAGES_HERBAL_TEA'
  },
  {
    name: 'Low calorie / Healthier Choice Symbol drinks',
    subName: '(e.g. 100 plus, coke light, coke zero, green tea)',
    code: 'BEVERAGES_HEALTHIER'
  },
  {
    name: 'Malt beverages',
    subName: '(e.g. hot chocolate, Horlicks, Milo, Ovaltine)',
    code: 'BEVERAGES_MALT'
  },
  {
    name: 'Cultured drinks',
    subName: '(e.g. Yakult / Vitagen, kombucha)',
    code: 'BEVERAGES_CULTURED'
  },
  {
    name: 'Full cream milk (fresh, UHT, powder)',
    code: 'MILK_DAIRY_FULL-CREAM-MILK'
  },
  {
    name: 'Low fat / skimmed milk (fresh, UHT, powder)',
    code: 'MILK_DAIRY_LOW-FAT-MILK',
    nameReport: 'Low fat / skimmed milk (fresh, UHT, Powder)'
  },
  {
    name: 'Regular',
    code: 'MILK_DAIRY_REGULAR',
    nameReport: 'Yoghurt (Regular)'
  },
  {
    name: 'Low fat (including frozen yoghurt)',
    code: 'MILK_DAIRY_LOW-FAT',
    nameReport: 'Yoghurt (Low fat (including frozen yoghurt))'
  },
  {
    name: 'Curds, kefir',
    code: 'MILK_DAIRY_CURDS_KEFIR',
    nameReport: 'Yoghurt (Curds, kefir)'
  },
  { name: 'Cheese / cheese spread / low fat', code: 'MILK_DAIRY_CHEESE' },
  {
    name: 'Dairy-based drinks',
    subName: '(e.g. yoghurt drink, fruit milk shake, lassi)',
    code: 'MILK_DAIRY_DAIRY_BASE'
  },
  { name: 'Beer', code: 'ALCOHOLIC_DRINKS_BEER' },
  { name: 'Cider', code: 'ALCOHOLIC_DRINKS_CIDER' },
  { name: 'Stout', code: 'ALCOHOLIC_DRINKS_STOUT' },
  { name: 'Wine', code: 'ALCOHOLIC_DRINKS_WINE' },
  { name: 'Rice wine', code: 'ALCOHOLIC_DRINKS_RICE-WINE' },
  { name: 'Spirits', code: 'ALCOHOLIC_DRINKS_SPIRITS' },
  {
    name: 'Dietary Supplements',
    subName: '(e.g. vitamins, minerals, fish oil, probiotics)',
    code: 'SUPP_DIETARY'
  }
];

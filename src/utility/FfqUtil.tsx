export const FOOD_LIST = {
  BREADS: 'breads',
  CEREALS: 'cereals',
  RICE_AND_PORRIDGE: 'rice_and_porridge',
  RICE: 'rice',
  PORRIDGE: 'porridge',
  OTHER_SOURCE_OF_CARBOHYDRATE: 'other_source_of_carbohydrate',
  NOODLES: 'noodles',
  FRUITS: 'fruits',
  VEGETABLES: 'vegetables',
  CHICKEN_OR_RED_MEAT: 'chicken_or_red_meat',
  FISH_SEAFOOD: 'fish_seafood',
  EGGS: 'eggs',
  NUTS: 'nuts',
  LEGUMESANDPULSES: 'legumes_and_pulses',
  MILK_AND_DAIRY_PRODUCTS: 'milk_and_dairy_products',
  MILK_POWDER: 'milk_powder',
  FERMENTED: 'fermented_food',
  PROCESSED: 'processed_food'
};
export const MTB_CHART = [
  FOOD_LIST.BREADS,
  FOOD_LIST.CEREALS,
  FOOD_LIST.RICE,
  FOOD_LIST.PORRIDGE,
  FOOD_LIST.OTHER_SOURCE_OF_CARBOHYDRATE,
  FOOD_LIST.NOODLES,
  FOOD_LIST.FRUITS,
  FOOD_LIST.VEGETABLES,
  FOOD_LIST.CHICKEN_OR_RED_MEAT,
  FOOD_LIST.FISH_SEAFOOD,
  FOOD_LIST.EGGS,
  FOOD_LIST.NUTS,
  FOOD_LIST.LEGUMESANDPULSES,
  FOOD_LIST.MILK_AND_DAIRY_PRODUCTS
];
export const BABY_CHART = [
  FOOD_LIST.BREADS,
  FOOD_LIST.CEREALS,
  FOOD_LIST.RICE_AND_PORRIDGE,
  FOOD_LIST.OTHER_SOURCE_OF_CARBOHYDRATE,
  FOOD_LIST.NOODLES,
  FOOD_LIST.FRUITS,
  FOOD_LIST.VEGETABLES,
  FOOD_LIST.CHICKEN_OR_RED_MEAT,
  FOOD_LIST.FISH_SEAFOOD,
  FOOD_LIST.EGGS,
  FOOD_LIST.NUTS,
  FOOD_LIST.LEGUMESANDPULSES,
  FOOD_LIST.MILK_AND_DAIRY_PRODUCTS,
  FOOD_LIST.MILK_POWDER
];
export const FFQ_CHART = [
  {
    code: FOOD_LIST.BREADS,
    list: [
      'B_C_WHITE-BREAD',
      'B_C_WHOLEMEAL-BREAD',
      'B_C_BREAD-WITH-FRUITS',
      'B_C_CHAPATI',
      'B_C_BREAD-BUNS',
      'B_C_E_BREAD'
    ]
  },
  {
    code: FOOD_LIST.RICE_AND_PORRIDGE,
    list: [
      'R_P_O_CBH_PLAIN',
      'R_P_O_CBH_BROWN',
      'R_P_O_CBH_PLAIN_PORR',
      'R_P_O_CBH_F_RICE',
      'R_P_O_CBH_G_RICE'
    ]
  },
  {
    code: FOOD_LIST.CEREALS,
    list: [
      'B_C_PLAIN',
      'B_C_MIXED-FRUIT',
      'B_C_WHOLE',
      'B_C_OATS'
    ]
  },
  {
    code: FOOD_LIST.RICE,
    list: [
      'R_P_O_CBH_PLAIN',
      'R_P_O_CBH_BROWN',
      'R_P_O_CBH_F_RICE',
      'R_P_O_CBH_G_RICE'
    ]
  },
  {
    code: FOOD_LIST.PORRIDGE,
    list: ['R_P_O_CBH_PLAIN_PORR']
  },
  {
    code: FOOD_LIST.OTHER_SOURCE_OF_CARBOHYDRATE,
    list: [
      'R_P_O_CBH_YAM',
      'R_P_O_CBH_SWEET_PO',
      'R_P_O_CBH_POTATO'
    ]
  },
  {
    code: FOOD_LIST.NOODLES,
    list: [
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
    code: FOOD_LIST.FRUITS,
    list: [
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
    code: FOOD_LIST.VEGETABLES,
    list: [
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
      'V_B_ARTICHOKE'
    ]
  },
  {
    code: FOOD_LIST.CHICKEN_OR_RED_MEAT,
    list: [
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
    code: FOOD_LIST.FISH_SEAFOOD,
    list: [
      'F_SF_RAW',
      'F_SF_OILY_FATTY',
      'F_SF_WHITE_FISH',
      'F_SF_OTHER_SFOOD'
    ]
  },
  {
    code: FOOD_LIST.EGGS,
    list: ['C_RM_E_BOILED_PIS', 'C_RM_E_FRIED_S']
  },
  {
    code: FOOD_LIST.NUTS,
    list: ['NUTS_NUTS', 'NUTS_SEEDS']
  },
  {
    code: FOOD_LIST.LEGUMESANDPULSES,
    list: [
      'V_B_PULSES',
      'V_B_DHAL_SAMBHAR',
      'V_B_TOFU_BEANCURD'
    ]
  },
  {
    code: FOOD_LIST.MILK_AND_DAIRY_PRODUCTS,
    list: [
      'MILK_DAIRY_FULL-CREAM-MILK',
      'MILK_DAIRY_LOW-FAT-MILK',
      'MILK_DAIRY_REGULAR',
      'MILK_DAIRY_LOW-FAT',
      'MILK_DAIRY_CURDS_KEFIR',
      'MILK_DAIRY_CHEESE',
      'MILK_DAIRY_DAIRY_BASE',
      'I_T_MF_BMILK'
    ]
  },
  {
    code: FOOD_LIST.MILK_POWDER,
    list: ['I_T_MF_FMILK']
  },
  {
    code: FOOD_LIST.FERMENTED,
    list: [
      'FERMENTED_KIMCHI',
      'FERMENTED_NATO',
      'FERMENTED_TEMPE',
      'FERMENTED_TAPAI',
      'V_B_VEG_PRESERVEDE'
    ]
  },
  {
    code: FOOD_LIST.PROCESSED,
    list: [
      'D_SNACK_WITH-COCONUT-SOUP',
      'D_SNACK_WITHOUT-COCONUT-SOUP',
      'D_SNACK_WITH-COCONUT-STEAMED',
      'D_SNACK_WITHOUT-COCONUT-STEAMED',
      'D_SNACK_FRIED-SNACK',
      'D_SNACK_DIM-SUM',
      'D_SNACK_DIM-SUM-FRIED',
      'D_SNACK_SWEET-INDIAN-SNACKS',
      'CAKE_PLAIN',
      'CAKE_CRACKER',
      'CAKE_CREAM',
      'CAKE_PUFF_FILLED',
      'CAKE_CAKES',
      'CAKE_SNACK',
      'CAKE_ICE_CREAM',
      'CAKE_CHOCO',
      'F_F_BURGERS-BEEF-CHICKEN',
      'F_F_FRENCH-FRIES',
      'F_F_PIZZA',
      'F_F_MASHED-POTATO',
      'P_F_PPC',
      'P_F_CP_MEATBALLS',
      'P_F_FISH_PRO',
      'P_F_CHIKEN_FISH'
    ]
  }
];

export const FOOD_LIST_FULL_NAME = [
  { code: FOOD_LIST.BREADS, fullName: 'Breads' },
  { code: FOOD_LIST.CEREALS, fullName: 'Cereals' },
  { code: FOOD_LIST.RICE_AND_PORRIDGE, fullName: 'Rice and Porridge' },
  { code: FOOD_LIST.RICE, fullName: 'Rice' },
  { code: FOOD_LIST.PORRIDGE, fullName: 'Porridge' },
  {
    code: FOOD_LIST.OTHER_SOURCE_OF_CARBOHYDRATE,
    fullName: 'Other source of carbohydrate'
  },
  {
    code: FOOD_LIST.NOODLES,
    fullName:
      'Noodles (rice noodles, wheat noodles, bean noodles, pasta, pasta and cous cous(under other carbo))'
  },
  { code: FOOD_LIST.FRUITS, fullName: 'Fruits' },
  { code: FOOD_LIST.VEGETABLES, fullName: 'Vegetables (assume all cooked)' },
  {
    code: FOOD_LIST.CHICKEN_OR_RED_MEAT,
    fullName: 'Chicken or red meat ( inclusive poultry and meat)'
  },
  { code: FOOD_LIST.FISH_SEAFOOD, fullName: 'Fish/Seafood' },
  {
    code: FOOD_LIST.EGGS,
    fullName: 'Eggs (whole eggs including salted and century eggs)'
  },
  { code: FOOD_LIST.NUTS, fullName: 'Nuts' },
  {
    code: FOOD_LIST.LEGUMESANDPULSES,
    fullName: 'Legumes and pulses'
  },
  {
    code: FOOD_LIST.MILK_AND_DAIRY_PRODUCTS,
    fullName: 'Milk and Dairy Products (Excluding baby formula)'
  },
  {
    code: FOOD_LIST.MILK_POWDER,
    fullName:
      'Milk powder (Formula milk)  serving is 3 -4, 1 serving is 180 ml'
  }
];

export const INGREDIENT_CATEGORY_BABY = [
  {
    groupCode: 1,
    name: 'Whole grains',
    hpb: 2,
    INGREDIENT: [
      { code: FOOD_LIST.BREADS },
      { code: FOOD_LIST.CEREALS },
      { code: FOOD_LIST.RICE_AND_PORRIDGE },
      { code: FOOD_LIST.OTHER_SOURCE_OF_CARBOHYDRATE },
      { code: FOOD_LIST.NOODLES }
    ],
    toolTip: 'Grains, white roots, and tubers'
  },
  {
    groupCode: 2,
    name: 'Fruits',
    hpb: 0.5,
    INGREDIENT: [{ code: FOOD_LIST.FRUITS }],
    toolTip: 'Vitamin A-rich fruits and other fruits'
  },
  {
    groupCode: 3,
    name: 'Vegetables',
    hpb: 0.5,
    INGREDIENT: [{ code: FOOD_LIST.VEGETABLES }],
    toolTip: 'Vitamin A-rich vegetables and other vegetables'
  },
  {
    groupCode: 4,
    name: 'Meat and others',
    hpb: 2,
    INGREDIENT: [
      { code: FOOD_LIST.CHICKEN_OR_RED_MEAT },
      { code: FOOD_LIST.FISH_SEAFOOD },
      { code: FOOD_LIST.EGGS },
      { code: FOOD_LIST.NUTS },
      { code: FOOD_LIST.LEGUMESANDPULSES },
      { code: FOOD_LIST.MILK_AND_DAIRY_PRODUCTS },
      { code: FOOD_LIST.MILK_POWDER }
    ],
    toolTip:
      'Dairy products, eggs, nuts and seeds, pulses and meat, poultry and fish'
  }
];

export const INGREDIENT_CATEGORY_3_YEAR = [
  {
    groupCode: 1,
    name: 'Whole grains',
    hpb: 3,
    INGREDIENT: [
      { code: FOOD_LIST.BREADS },
      { code: FOOD_LIST.CEREALS },
      { code: FOOD_LIST.RICE_AND_PORRIDGE },
      { code: FOOD_LIST.OTHER_SOURCE_OF_CARBOHYDRATE },
      { code: FOOD_LIST.NOODLES }
    ]
  },
  {
    groupCode: 2,
    name: 'Fruits',
    hpb: 1,
    INGREDIENT: [{ code: FOOD_LIST.FRUITS }]
  },
  {
    groupCode: 3,
    name: 'Vegetables',
    hpb: 1,
    INGREDIENT: [{ code: FOOD_LIST.VEGETABLES }]
  },
  {
    groupCode: 4,
    name: 'Meat and others',
    hpb: 2,
    INGREDIENT: [
      { code: FOOD_LIST.CHICKEN_OR_RED_MEAT },
      { code: FOOD_LIST.FISH_SEAFOOD },
      { code: FOOD_LIST.EGGS },
      { code: FOOD_LIST.NUTS },
      { code: FOOD_LIST.LEGUMESANDPULSES },
      { code: FOOD_LIST.MILK_AND_DAIRY_PRODUCTS },
      { code: FOOD_LIST.MILK_POWDER }
    ]
  }
];

export const INGREDIENT_CATEGORY_MTB = [
  {
    groupCode: 1,
    name: 'Whole grains',
    hpb: 6,
    INGREDIENT: [
      { code: FOOD_LIST.BREADS },
      { code: FOOD_LIST.CEREALS },
      { code: FOOD_LIST.RICE },
      { code: FOOD_LIST.PORRIDGE },
      { code: FOOD_LIST.OTHER_SOURCE_OF_CARBOHYDRATE },
      { code: FOOD_LIST.NOODLES }
    ]
  },
  {
    groupCode: 2,
    name: 'Fruits',
    hpb: 2,
    INGREDIENT: [{ code: FOOD_LIST.FRUITS }]
  },
  {
    groupCode: 3,
    name: 'Vegetables',
    hpb: 3,
    INGREDIENT: [{ code: FOOD_LIST.VEGETABLES }]
  },
  {
    groupCode: 4,
    name: 'Meat and others',
    hpb: 3.5,
    INGREDIENT: [
      { code: FOOD_LIST.CHICKEN_OR_RED_MEAT },
      { code: FOOD_LIST.FISH_SEAFOOD },
      { code: FOOD_LIST.EGGS },
      { code: FOOD_LIST.NUTS },
      { code: FOOD_LIST.LEGUMESANDPULSES },
      { code: FOOD_LIST.MILK_AND_DAIRY_PRODUCTS }
    ]
  }
];

export const BABY_FOOD_PORTION = [
  { code: FOOD_LIST.BREADS, gusto: 30, portion: 60 },
  { code: FOOD_LIST.CEREALS, gusto: 12, portion: 40 },
  { code: FOOD_LIST.RICE_AND_PORRIDGE, gusto: 36, portion: 100 },
  { code: FOOD_LIST.OTHER_SOURCE_OF_CARBOHYDRATE, gusto: 15, portion: 180 },
  { code: FOOD_LIST.NOODLES, gusto: 30, portion: 100 },
  { code: FOOD_LIST.FRUITS, gusto: 60, portion: 130 },
  { code: FOOD_LIST.VEGETABLES, gusto: 15, portion: 100 },
  { code: FOOD_LIST.CHICKEN_OR_RED_MEAT, gusto: 20, portion: 90 },
  { code: FOOD_LIST.FISH_SEAFOOD, gusto: 30, portion: 90 },
  { code: FOOD_LIST.EGGS, gusto: 50, portion: 150 },
  { code: FOOD_LIST.NUTS, gusto: 5, portion: 30 },
  { code: FOOD_LIST.LEGUMESANDPULSES, gusto: 30, portion: 170 },
  { code: FOOD_LIST.MILK_AND_DAIRY_PRODUCTS, gusto: 150, portion: 500 }, // Legumes and pulses
  { code: FOOD_LIST.MILK_POWDER, gusto: 180, portion: 500 }
];

export const YEAR_3_FOOD_PORTION = [
  { code: FOOD_LIST.BREADS, gusto: 30, portion: 60 },
  { code: FOOD_LIST.CEREALS, gusto: 15, portion: 40 },
  { code: FOOD_LIST.RICE_AND_PORRIDGE, gusto: 120, portion: 100 },
  { code: FOOD_LIST.OTHER_SOURCE_OF_CARBOHYDRATE, gusto: 70, portion: 180 },
  { code: FOOD_LIST.NOODLES, gusto: 100, portion: 100 },
  { code: FOOD_LIST.FRUITS, gusto: 70, portion: 130 },
  { code: FOOD_LIST.VEGETABLES, gusto: 15, portion: 100 },
  { code: FOOD_LIST.CHICKEN_OR_RED_MEAT, gusto: 20, portion: 90 },
  { code: FOOD_LIST.FISH_SEAFOOD, gusto: 30, portion: 90 },
  { code: FOOD_LIST.EGGS, gusto: 50, portion: 150 },
  { code: FOOD_LIST.NUTS, gusto: 8, portion: 30 },
  { code: FOOD_LIST.LEGUMESANDPULSES, gusto: 30, portion: 170 }, // Legumes and pulses
  { code: FOOD_LIST.MILK_AND_DAIRY_PRODUCTS, gusto: 150, portion: 500 },
  { code: FOOD_LIST.MILK_POWDER, gusto: 0, portion: 500 }
];

export const MTB_FOOD_PORTION = [
  { code: FOOD_LIST.BREADS, gusto: 60, portion: 60 },
  { code: FOOD_LIST.CEREALS, gusto: '', portion: 35 },
  { code: FOOD_LIST.RICE, gusto: 200, portion: 100 },
  { code: FOOD_LIST.PORRIDGE, gusto: 260, portion: 260 },
  { code: FOOD_LIST.OTHER_SOURCE_OF_CARBOHYDRATE, gusto: '', portion: 140 },
  { code: FOOD_LIST.NOODLES, gusto: 180, portion: 100 },
  { code: FOOD_LIST.FRUITS, gusto: '', portion: 80 },
  { code: FOOD_LIST.VEGETABLES, gusto: '', portion: 100 },
  { code: FOOD_LIST.CHICKEN_OR_RED_MEAT, gusto: '', portion: 90 },
  { code: FOOD_LIST.FISH_SEAFOOD, gusto: '', portion: 90 },
  { code: FOOD_LIST.EGGS, gusto: '', portion: 150 },
  { code: FOOD_LIST.NUTS, gusto: '', portion: 30 },
  { code: FOOD_LIST.LEGUMESANDPULSES, gusto: '', portion: 170 }, // Legumes and pulses
  { code: FOOD_LIST.MILK_AND_DAIRY_PRODUCTS, gusto: 250, portion: 500 }
];

export const FOOD_GROUP_STYLE = [
  {
    code: 1,
    name: 'Whole grains',
    className: 'yellow',
    color: '#e8b96b',
    background: '#FFF8DF',
    position: 'left-top',
    icon: 'icon-whole-grains',
    image: 'bg-whole-grains',
    imageGroup: 'list-whole-grains.png'
  },
  {
    code: 2,
    name: 'Fruits',
    className: 'orange',
    color: '#f48438',
    background: '#FFEADA',
    position: 'right-top',
    icon: 'icon-fruits',
    image: 'bg-fruits',
    imageGroup: 'list-fruits.png'
  },
  {
    code: 3,
    name: 'Vegetables',
    className: 'green',
    color: '#3f8c37',
    background: '#F1FFE1',
    position: 'right-bottom',
    icon: 'icon-vegetables',
    image: 'bg-vegetables',
    imageGroup: 'list-vegetables.png'
  },
  {
    code: 4,
    name: 'Meat and others',
    className: 'blue',
    color: '#009fe3',
    background: '#DDF3FC',
    position: 'left-bottom',
    icon: 'icon-meat-and-others',
    image: 'bg-meat-and-others',
    imageGroup: 'list-meat-and-others.png'
  }
];

export const FOOD_GROUP_STYLE_ADULTS = [
  {
    groupCode: 1,
    name: 'Whole grains',
    className: 'yellow',
    color: '#f7b535',
    background: '#FFFEEF',
    position: 'left-top',
    icon: 'icon-whole-grains'
  },
  {
    groupCode: 2,
    name: 'Fruits',
    className: 'orange',
    color: '#fd7f29',
    background: '#FFEADA',
    position: 'right-top',
    icon: 'icon-fruits'
  },
  {
    groupCode: 3,
    name: 'Vegetables',
    className: 'green',
    color: '#52cd66',
    background: '#F7FFF1',
    position: 'right-bottom',
    icon: 'icon-vegetables'
  },
  {
    groupCode: 4,
    name: 'Meat and others',
    className: 'blue',
    color: '#009fe3',
    background: '#EEFBFA',
    position: 'left-bottom',
    icon: 'icon-meat-and-others'
  }
];

export const CONSUMPTION_OF_KEY_FOOD_GROUP = [
  {
    groupCode: 1,
    name: 'Whole grains',
    MTB: [6, 7],
    CHILD: [2, 3],
    CHILD_3_YEAR: [3, 4],
    toolTip: 'Grains, white roots, and tubers'
  },
  {
    groupCode: 2,
    name: 'Fruits',
    MTB: [2],
    CHILD: [0.5, 1],
    CHILD_3_YEAR: [1],
    toolTip: 'Vitamin A-rich fruits and other fruits'
  },
  {
    groupCode: 3,
    name: 'Vegetables',
    MTB: [3],
    CHILD: [0.5],
    CHILD_3_YEAR: [1],
    toolTip: 'Vitamin A-rich vegetables and other vegetables'
  },
  {
    groupCode: 4,
    name: 'Meat and others',
    MTB: [3.5],
    CHILD: [2],
    CHILD_3_YEAR: [2],
    toolTip:
      'Dairy products, eggs, nuts and seeds, pulses and meat, poultry and fish'
  }
];

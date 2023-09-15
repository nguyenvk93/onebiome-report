export const ROLE = {
  ADMIN: 1,
  HCP: 2,
  PATIENT: 3,
  EXPORT: 4,
  ATLAS: 5
};

export const PAGE_SITE = {
  ADMIN: 1,
  HCP: 2,
  CONSUMER: 3,
  EXPORT: 4
};

export const USER_TYPE = {
  KIDS_MUM: 1,
  ADULTS: 2,
  ATLAS: 3
};

export const STUDY_TYPE = {
  ONEBIOME: 1,
  POOBIOME: 2,
  BEADBEATER: 3,
  INFANTS: 4
};

// Device Type
export const DEVICE_TYPE = {
  PC: 1, // >= 1200
  TABLET: 2, // >= 768 and < 1199
  MOBILE: 3, // < 768
  TABLET_MINI: 4 // <992
};

export const USER_SAMPLE_ROLES = {
  // MOTHER: 1,
  BABY: 2,
  FATHER: 3,
  MOTHER_TO_BE: 4
};
export const SAMPLE_TYPES = {
  HIGH_VAGINAL: 1,
  HUMAN_MILK: 2,
  INFANT_SALIVA: 3,
  INFANT_STOOL: 4,
  LOW_VAGINAL: 5,
  MOTHER_SALIVA: 6,
  MOTHER_STOOL: 7,
  OTHERS: 8,
  ADULTS_STOOL: 9
};
export const MILK_FEEDING = {
  MIXED_FF: 1,
  ND: 2,
  BREAST_MILK: 3, // SOLELY_BF
  INFANT_FORMULA: 4, // SOLELY_FF
  MIXED_BF: 5,
  MIXED_FED: 7, // mixed feeding
  OTHERS: 8
};
export const OTHER_FEEDING = {
  PLAIN_DRINKING_WATER: 1,
  OTHER_BEVERAGE: 2,
  NOT_APPLICABLE: 3,
  OTHERS: 4
};
export const USER_GENDERS = {
  MALE: 1,
  FEMALE: 2,
  OTHERS: 3
};
export const GBS_MOTHER = {
  NEGATIVE: 1,
  POSITIVE: 2,
  UNKNOWN: 3
};
export const DELIVERY_MODE = {
  VD: 1,
  C_Section: 2,
  VD_IAP: 3,
  OTHER: 4,
  C_SECTION_ELECTIVE: 5,
  C_SECTION_EMERGENCY: 6
};
export const WEANING_STATUS = {
  BEFORE: 1,
  AFTER: 2,
  NA: 3,
  OTHERS: 4
};
export const SAMPLE_STATUS = {
  NEW: 1,
  LINKED: 2,
  PENDING: 3,
  DONE: 4
};

/** COMMON */
export const PAGE_SIZE = 5;
export const PAGE_SIZE_50 = 50;
export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
export const ISODATEFORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
export const DATEFORMAT = 'DD/MM/YYYY';
/** END COMMON */

// Auth views
export const AUTH_VIEWS = {
  CONSUMER: 1,
  HCP: 2
};

// Regex
// phone number/parent's phone number: ensure only 8 numbers can be filled in (reject if more or less than 8 numbers)
export const PHONE_REG = /^[0-9]{7,15}$/;
export const POSTAL_CODE_REG = /^[0-9]{6}$/;
export const WEIGHT_KG_REG = /^(?!0\d|$)\d{1,3}(\.\d{1,2})?$/;
export const HEIGHT_M_REG = /^(?!0\d|$)\d{1,1}(\.\d{1,2})?$/;
export const HEIGHT_CM_REG = /^(?!0\d|$)\d{1,3}(\.\d{1,2})?$/;
export const NUTRITIONAL_G_REG = /^(?!0\d|$)\d{1,3}(\.\d{1,2})?$/;

// PROFILE
export const ALLERGY = {
  ASTHMA: 'ASTHMA', // Asthma
  FEVER_RHINITIS: 'FEVER_RHINITIS', // Hay fever/ allergic rhinitis
  ECZEMA_SKIN: 'ECZEMA_SKIN', // Allergic eczema/ skin allergy
  FOOD: 'FOOD'
};

export const VACCINATION = {
  TUBERCULOSIS_BCG: 'TUBERCULOSIS_BCG', // Tuberculosis (BCG)
  HEPATITIS_B: 'HEPATITIS_B', // Hepatitis B
  DTaP: 'DTaP', // Diphteria-Tetanus-Pertussis (DTaP)
  POLIOVIRUS: 'POLIOVIRUS', // Poliovirus
  Hib: 'Hib', // Haemophilus influenza type b (Hib)
  MMR: 'MMR', // Measles-Mumps-Rubella (MMR)
  PCV: 'PCV', // Pneumococcal Disease (PCV)
  COVID_19: 'COVID_19', // Covid-19
  ROTAVIRUS: 'ROTAVIRUS', // Rotavirus
  CHICKEN_POX: 'CHICKEN_POX' // Chicken pox
};

export const FOOD_CATEGORY_CODE = {
  BABY_PRO: 'BABY_PRO',
  I_T_MF: 'I_T_MF',
  B_C: 'B_C', // Rice and Porridge
  R_P_O_CBH: 'R_P_O_CBH',
  FERMENTED: 'FERMENTED', // Fermented food
  NOODLES: 'NOODLES', // Noodles (rice noodles, wheat noodles, bean noodles, pasta)
  V_B: 'V_B', // Vegetables and Beancurd
  FRUITS: 'FRUITS', // Fruits
  C_RM_E: 'C_RM_E',
  F_SF: 'F_SF', // Fish/Seafood
  P_F: 'P_F', // Processed foods
  DESSERT_SNACK: 'DESSERT_SNACK', // Desserts/Local Snacks
  CAKE: 'CAKE', // Biscuits, Pastries and Cakes
  F_F: 'F_F', // Fast Foods
  BEVERAGES: 'BEVERAGES', // Beverages
  NUTS: 'NUTS', // Nuts
  MILK_DAIRY: 'MILK_DAIRY', // Milk and Dairy Products
  ALCOHOLIC_DRINKS: 'ALCOHOLIC_DRINKS',
  SUPPLEMENTS: 'SUPPLEMENTS' // Supplements
};

export const FFQ_FREQUENCY = {
  R_NEVER: 1,
  MONTH_1_3: 2,
  WEEK_1_2: 3,
  WEEK_3_4: 4,
  WEEK_5_6: 5,
  DAY_ONCE: 6,
  DAY_2_3: 7,
  DAY_4_5: 8
};

export const MOM_FFQ_FREQUENCY = {
  RARELY_NEVER: 1,
  PER_DAY: 2,
  PER_WEEK: 3,
  PER_MONTH: 4
};

export const FFQ_UNIT = {
  SLICE: 1,
  TBSP: 2,
  SMALL_BOWL: 3,
  STALKS: 4,
  WHOLE_FRUIT: 5,
  PCS: 6,
  CUP12ML: 7,
  TSP: 8
};

export const RACE_OPTS = [
  { label: 'Arabs', value: 'Arabs' },
  { label: 'Bangladeshi', value: 'Bangladeshi' },
  { label: 'Caucasian', value: 'Caucasian' },
  { label: 'Chinese', value: 'Chinese' },
  { label: 'Eurasian', value: 'Eurasian' },
  { label: 'Filipino', value: 'Phillipino' },
  { label: 'Indian', value: 'Indian' },
  { label: 'Indonesian', value: 'Indonesian' },
  { label: 'Japanese', value: 'Japanese' },
  { label: 'Korean', value: 'Korean' },
  { label: 'Malay', value: 'Malay' },
  { label: 'Nepalese', value: 'Nepalese' },
  { label: 'Pakistani', value: 'Pakistani' },
  { label: 'Sinhalese', value: 'Sinhalese' },
  { label: 'Thai', value: 'Thai' },
  { label: 'Vietnamese', value: 'Vietnamese' },
  { label: 'Others', value: 'Others' }
];

// Education Page
export const EDUCATION_PAGE = {
  FACT: 1,
  STAGE: 2,
  LINK: 3,
  BREAK_MILK: 4,
  ROLE: 5,
  HOME: 6,
  EARLY_CHILDHOOD: 7,
  DIVERSITY: 8,
  COVID_19: 9,
  MICROBIAL_FRIENDS: 10
};

export const FFQ_SCREENS = {
  FRUIT: 1,
  SIZE: 2,
  FORM: 3
};

export const STATUS_MICROBES = {
  SIMILAR: 1,
  DIFF: 2
};

export const CHILD_STAGE = {
  BABY: 1,
  TODDLE: 2,
  YOUNG: 3
};

// count page metadata

export const COUNT_PAGE_METADATA = {
  BABY: 4,
  MOTHER: 3,
  MOTHERTOBE: 3
};

export const ANTIBIOTICS_STATUS = {
  NO: '0',
  YES: '1'
  // I_DONT_REMEMBER: "2",
};

export const VACCINATION_STATUS = {
  NO: '0',
  YES: '1',
  I_DONT_REMEMBER: '2'
};

export const USER_STATUS = {
  PENDING: 1,
  ACTIVATED: 2
};

export const EXPORT_TYPE = {
  FFQ: 1,
  STOOL: 2,
  METADATA: 3,
  METADATA_STOOL_FFQ_MDD: 4
};

export const LOG_TYPE = {
  LOGIN: 1,
  CREATE_HCP: 2,
  ACCEPT_REPORT: 3,
  CC_API_SUCCESS: 4,
  CC_API_FAILED: 5
};

export const TIME_POINT = {
  W1: 'Week1',
  M1: 'Month1',
  M3: 'Month3',
  M3_M6: 'Month3.5-Month6',
  M6_M11: 'Month6.5-Month11.5',
  Y1: 'Year1',
  Y1A: 'Year1 above',
  W36: 'Week36',
  W37: 'Week37'
};

export const SAMPLE_PICKUP_STATUS = {
  CONFIRM: 1,
  CANCEL: 2,
  DONE: 3
};

export const RECIPE_STATUS = {
  ACTIVE: 1,
  INACTIVE: 2
};

// *** Recipe *** - START
export const INGREDIENT = {
  MEAT: 1, // Meat (pork, beef, lamb)
  POULTRY: 2, // Poultry (chicken, duck, turkey)
  EGG: 3, // Egg
  FISH: 4, // Fish
  SEAFOOD: 5, // Seafood
  PLANT_BASED: 6, // Plant-based proteins
  VIT_A_VEG: 7, // Vit A-rich vegetables (leafy & non-leafy)
  DARK_LEAFY_VEG: 8, // Dark green leafy vegetables
  O_LEAFY_VEG: 9, // Other Leafy vegetables
  O_NON_LEAFY_VEG: 10, // Other Non-leafy vegetables
  BREAD: 11, // Breads and cereals
  RICE: 12, // Rice, pasta, noodles and porridge
  WHITE_ROOTS: 13, // White roots, tubers & plantains
  VIT_A_FRUITS: 14, // Vit A-rich fruits
  O_FRUITS: 15, // Other Fruits
  DAIRY: 16, // Dairy
  PULSES: 17, // Pulses and Legumes
  NUTS: 18 // Nuts and Seeds
};

export const SERVING = {
  PROTEIN: 1,
  FAT: 2,
  CARDS: 3,
  DIETARY_FIBRE: 4,
  CALORIES: 5,
  SODIUM: 6,
  SATURATED: 7
};

export const CUISINE = {
  CHINESE: 1,
  MALAY: 2,
  INDIAN: 3,
  WESTERN: 4,
  VIETNAMESE: 5,
  THAI: 6,
  PHILIPPINE: 7,
  KOREAN: 8,
  JAPANESE: 9,
  ITALIAN: 10
};

export const USE_AGES = {
  MTB: 1,
  CHILD_6_12_M: 2,
  CHILD_1_2_Y: 3,
  CHILD_3_5_Y: 4
};

export const MICROBIAL_FRIEND = {
  BIFID: 1,
  LASH: 2,
  ROSE: 3,
  FEACA: 4,
  STREP: 5
};

export const COOKING_TIME = {
  TIME5_30: 1,
  TIME30_60: 2,
  TIME_GREATER_THAN_60: 3
};

export const RECIPE_DIET = {
  VEGETARIAN: 1,
  VEGAN: 2,
  DAIRY_FREE: 3,
  NUT_FREE: 4,
  EGG_FREE: 5
};
// *** Recipe *** - END

export const FILE_EXTENSIONS = [
  '.jpg',
  '.jpeg',
  '.png'
];

export const S3_FOLDER_NAME = {
  AVATAR: 'avatar-folder',
  RECIPE: 'recipe-folder',
  GUT_HEALTH: 'gut-health-folder',
  MOTHER_SUPPLEMENT: 'mother-supplement',
  BABY_SUPPLEMENT: 'baby-supplement',
  BABY_INFANT_FORMULA: 'baby-infant-formola',
  EDUCATIONAL: 'educational'
};

// *** Adults *** - START
export const BMI = {
  NORMAL: 1,
  OBESE: 2,
  OVERWEIGHT: 3,
  UNDERWEIGHT: 4
};
export const ANTIBIOTIC_HISTORY = {
  WEEK: 1, // Week
  MONTH: 2, // Month
  MONTH_6: 3, // 6 months
  YEAR: 4, // Year
  PAST_YEAR: 5 // I have not taken antibiotics in the past year.
};
export const GLUTEN = {
  NOT_EAT: 1, // I do not eat gluten because it makes me feel bad
  CELIAC_DISEASE: 2, // I was diagnosed with celiac disease
  ALLERGY: 3, // I was diagnosed with gluten allergy (anti-gluten IgG), but not celiac disease
  NO: 4, // No
  YES: 5 // Yes
};
export const LACTOSE = {
  NO: 1,
  YES: 2
};
export const TYPES_OF_PLAN = {
  TYPE_5: 1, // Less than 5
  TYPE_6_TO_10: 2, // 6 to 10
  TYPE_11_TO_20: 3, // 11 to 20
  TYPE_21_TO_30: 4, // 21 to 30
  TYPE_30: 5 // More than 30
};
export const DIET_TYPE = {
  OMNIVORE: 1, // Omnivore
  OMNIVORE_RED_MEAT: 2, // Omnivore but do not eat red meat
  VEGAN: 3, // Vegan
  VEGETARIAN: 4, // Vegetarian
  VEGETARIAN_SEAFOOD: 5 // Vegetarian but eat seafood
};

export const AGE_GROUPS = {
  GEN_Z: 1, // <26 years
  MILLENNIAL: 2, // 26-41 years
  GEN_X: 3, // 42-57
  BABY_BOOMERS: 4 // >57
};
// *** Adults *** - END

// *** Education Content *** START
export const API_ACTION = {
  GET: 1,
  CREATE: 2,
  UPDATE: 3,
  DELETE: 4
};

export const EDUCATION_TYPE = {
  CONTENT: 1,
  LINK: 2
};

export const EDUCATION_CATEGORY = {
  ARTICLE: 1,
  BLOG: 2
};

export const CREATE_KIT = {
  CONTENT: 1,
  IMPORT: 2
};
// *** Education Content *** END

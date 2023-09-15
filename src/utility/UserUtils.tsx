import {
  USER_GENDERS,
  GBS_MOTHER,
  DELIVERY_MODE,
  MILK_FEEDING,
  SAMPLE_TYPES,
  USER_SAMPLE_ROLES,
  AGE_GROUPS
} from '../constants/DefaultValues';

const getGenderStr = (gender: number) => {
  let result = '';
  switch (gender) {
    case USER_GENDERS.FEMALE:
      result = 'Female';
      break;
    case USER_GENDERS.MALE:
      result = 'Male';
      break;
    case USER_GENDERS.OTHERS:
      result = 'Both';
      break;
    default:
      result = '';
      break;
  }
  return result;
};

const getGBSMotherStr = (gbs: number) => {
  let result = '';
  switch (gbs) {
    case GBS_MOTHER.NEGATIVE:
      result = 'Negative';
      break;
    case GBS_MOTHER.POSITIVE:
      result = 'Positive';
      break;
    case GBS_MOTHER.UNKNOWN:
      result = 'Unknown';
      break;
    default:
      result = '';
      break;
  }
  return result;
};

const getDeliveryStr = (mode: number) => {
  let result = '';
  switch (mode) {
    case DELIVERY_MODE.VD:
      result = 'VD';
      break;
    case DELIVERY_MODE.C_Section:
      result = 'C-section';
      break;
    case DELIVERY_MODE.VD_IAP:
      result = 'VD_IAP';
      break;
    case DELIVERY_MODE.C_SECTION_ELECTIVE:
      result = 'C-section';
      break;
    case DELIVERY_MODE.C_SECTION_EMERGENCY:
      result = 'C-section';
      break;
    default:
      result = '';
      break;
  }
  return result;
};

const getFullDeliveryStr = (mode: number) => {
  let result = '';
  switch (mode) {
    case DELIVERY_MODE.VD:
      result = 'Vaginal birth';
      break;
    case DELIVERY_MODE.C_Section:
      result = 'C-section birth';
      break;
    case DELIVERY_MODE.VD_IAP:
      result = 'Vaginal birth with intrapartum antibiotic prophylaxis';
      break;
    case DELIVERY_MODE.C_SECTION_ELECTIVE:
      result = 'C-section elective';
      break;
    case DELIVERY_MODE.C_SECTION_EMERGENCY:
      result = 'C-section emergency';
      break;
    default:
      result = '';
      break;
  }
  return result;
};

const getMilkFeedingStr = (mode: number) => {
  let result = '';
  switch (mode) {
    case MILK_FEEDING.MIXED_BF:
      result = 'Mixed_BF';
      break;
    case MILK_FEEDING.MIXED_FED:
      result = 'Mixed_Fed';
      break;
    case MILK_FEEDING.ND:
      result = 'ND';
      break;
    case MILK_FEEDING.OTHERS:
      result = 'Others';
      break;
    case MILK_FEEDING.BREAST_MILK:
      result = 'SolelyBF';
      break;
    case MILK_FEEDING.INFANT_FORMULA:
      result = 'SolelyFF';
      break;
    default:
      result = 'NA';
      break;
  }
  return result;
};

const getWeaningStatusStr = (mode: boolean) => {
  let result = 'NA';
  if (mode === true) {
    result = 'After';
  } else if (mode === false) {
    result = 'Before';
  }
  return result;
};

const getSampleTypeStr = (mode: number) => {
  let result = '';
  switch (mode) {
    case SAMPLE_TYPES.HIGH_VAGINAL:
      result = 'High vaginal';
      break;
    case SAMPLE_TYPES.HUMAN_MILK:
      result = 'Human milk';
      break;
    case SAMPLE_TYPES.INFANT_SALIVA:
      result = 'Infant saliva';
      break;
    case SAMPLE_TYPES.INFANT_STOOL:
      result = 'Infant stool';
      break;
    case SAMPLE_TYPES.LOW_VAGINAL:
      result = 'Low vaginal';
      break;
    case SAMPLE_TYPES.MOTHER_SALIVA:
      result = 'Mother saliva';
      break;
    case SAMPLE_TYPES.MOTHER_STOOL:
      result = 'Mother stool';
      break;
    case SAMPLE_TYPES.OTHERS:
      result = 'others';
      break;
    case SAMPLE_TYPES.ADULTS_STOOL:
      result = 'Stool';
      break;
    default:
      result = 'others';
      break;
  }
  return result;
};

const getMemberRoleStr = (role: number) => {
  let result = '';
  switch (role) {
    case USER_SAMPLE_ROLES.MOTHER_TO_BE:
      result = 'Mother';
      break;
    case USER_SAMPLE_ROLES.BABY:
      result = 'Baby';
      break;
    default:
      result = '';
      break;
  }
  return result;
};

const getAgeGroups = (age: number) => {
  let result;

  if (age < 26) {
    result = AGE_GROUPS.GEN_Z;
  } else if (age >= 26 && age <= 41) {
    result = AGE_GROUPS.MILLENNIAL;
  } else if (age >= 42 && age <= 57) {
    result = AGE_GROUPS.GEN_X;
  } else if (age > 57) {
    result = AGE_GROUPS.BABY_BOOMERS;
  } else {
    result = AGE_GROUPS.GEN_Z;
  }
  return result;
};

export {
  getGenderStr,
  getGBSMotherStr,
  getDeliveryStr,
  getFullDeliveryStr,
  getMilkFeedingStr,
  getWeaningStatusStr,
  getSampleTypeStr,
  getMemberRoleStr,
  getAgeGroups
};

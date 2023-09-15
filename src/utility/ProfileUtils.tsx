import moment from 'moment';
import _, { isArray, isEmpty, isNil } from 'lodash';
import {
  CHILD_STAGE,
  DATEFORMAT,
  USER_SAMPLE_ROLES,
  ALLERGY,
  VACCINATION,
  VACCINATION_STATUS
} from '../constants/DefaultValues';
import { boolToString } from './OtherUtil';
/**
 * Convert date to age unit
 * @return Explain date
 */
const getAgeUnitFromDate = ({ dayOfBirth, userRole }: { dayOfBirth: string, userRole: number }) => {
  const assignedValue = moment(dayOfBirth, DATEFORMAT, true);
  if (!assignedValue.isValid()) {
    return '';
  }
  const ageYear = moment().diff(
    moment(dayOfBirth, DATEFORMAT),
    'years',
    false
  );
  const unitYear = `year${ageYear > 1 ? 's' : ''}`;

  let result = `${ageYear} ${unitYear}`;

  if (userRole === USER_SAMPLE_ROLES.BABY) {
    const ageMonth = moment().diff(
      moment(dayOfBirth, DATEFORMAT),
      'months',
      false
    );
    if (ageMonth < 12) {
      const unitMonth = `month${ageMonth > 1 ? 's' : ''}`;
      result = `${ageMonth} ${unitMonth}`;
    } else {
      const month = ageMonth % 12;
      const unitYearBaby = `year${ageYear > 1 ? 's' : ''}`;
      const unitMonthBaby = `month${month > 1 ? 's' : ''}`;
      result = `${ageYear} ${unitYearBaby}`;
      if (month > 0) {
        result = `${ageYear} ${unitYearBaby} ${month} ${unitMonthBaby}`;
      }
    }
  }
  return result;
};

const isMom = ({ role }: { role: number }) => { return role === USER_SAMPLE_ROLES.MOTHER_TO_BE; };
const getChildStage = ({ timePoint, monthTimePoint }: { timePoint: string, monthTimePoint: number }) => {
  if (monthTimePoint) {
    if (monthTimePoint < 6) {
      return CHILD_STAGE.BABY;
    }
    if (monthTimePoint < 36) {
      return CHILD_STAGE.TODDLE;
    }
    return CHILD_STAGE.YOUNG;
  }
  let result = CHILD_STAGE.BABY;
  if (
    [
      'Month1',
      'Month3',
      'Month3.5-Month6',
      'Month6.5-Month11.5',
      'Week1'
    ].includes(timePoint)
  ) {
    result = CHILD_STAGE.BABY;
  } else if ([
    'Year2',
    'Year1',
    'Year1 above'
  ].includes(timePoint)) {
    result = CHILD_STAGE.TODDLE;
  } else {
    const splitAge = timePoint.toString().split(/(\d+)/, 2);
    if (splitAge && splitAge[0] === 'Year' && parseInt(splitAge[1].toString(), 10) > 2) {
      result = CHILD_STAGE.YOUNG;
    }
  }
  return result;
};

const getAgeChildMonth = ({ timePoint, monthTimePoint }: { timePoint: string, monthTimePoint: number }) => {
  if (monthTimePoint) {
    return monthTimePoint;
  }

  switch (timePoint) {
    case 'Month1':
      return 1;
    case 'Month3':
      return 3;
    case 'Month3.5-Month6':
      return 5; // todo ask if that's mean > 6 months
    case 'Month6.5-Month11.5':
      return 11;
    case 'Week1':
      return 1;
    case 'Year1':
      return 12;
    case 'Year1 above':
      return 13;
    default:
      return 0;
  }
};

const getAgeChildMonthText = (timePoint: string) => {
  switch (timePoint) {
    case 'Month1':
      return '1 month';
    case 'Month3':
      return '3 months';
    case 'Month3.5-Month6':
      return '3.5-6 months'; // todo ask if that's mean > 6 months
    case 'Month6.5-Month11.5':
      return '6.5-11 months';
    case 'Week1':
      return '1-3 weeks';
    case 'Year1':
      return '1 year';
    case 'Year1 above':
      return '1 year above';
    default:
      return 0;
  }
};

// when can view report
// - baby not wean and complete metadata
// - baby wean and complete metadata and complete ffq
// - mother and complete metadata
// - mother-to-be and complete metadata and complete ffq
const isProfileCanViewReport = ({
  role,
  isCompletedMetadata = false,
  isCompletedFFQ = false,
  // isScheduledPickup = false,
  isBabyWeaned = null
}: any) => {
  if (
    role === USER_SAMPLE_ROLES.MOTHER_TO_BE
    && isCompletedMetadata
    && isCompletedFFQ
    // isScheduledPickup
  ) {
    return true;
  }
  if (
    role === USER_SAMPLE_ROLES.BABY
    && isBabyWeaned === false
    && isCompletedMetadata
    // isScheduledPickup
  ) {
    return true;
  }
  if (
    role === USER_SAMPLE_ROLES.BABY
    && isBabyWeaned !== false
    && isCompletedMetadata
    && isCompletedFFQ
    // isScheduledPickup
  ) {
    return true;
  }
  return false;
};

const isNilEmpty = (value: any) => {
  return isNil(value) || value === '';
};
// const getPercentMetadata = ({ role, memberInfo = {}, sample = {} }: any) => {
//   let percent = 0;
//   if (!isEmpty(memberInfo)) {
//     const {
//       firstName,
//       lastName,
//       gender,
//       dayOfBirth,
//       phoneNumber,
//       streetAddress,
//       postalCode,
//       unitNumber,
//       race,
//       deliveryMode
//     } = memberInfo;
//     const { motherProfile, babyProfile, babyMotherProfile } = sample;
//     switch (role) {
//       case USER_SAMPLE_ROLES.MOTHER_TO_BE: {
//         const totalFields = 16;
//         let memberFields = 0;
//         if (!isNilEmpty(firstName)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(lastName)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(gender)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(dayOfBirth)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(phoneNumber)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(streetAddress)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(postalCode)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(unitNumber)) {
//           memberFields += 1;
//         }
//         if (!isNil(race) && !isNilEmpty(race.code)) {
//           memberFields += 1;
//         }
//         if (!isNil(motherProfile)) {
//           const {
//             prePregnancyWeight,
//             height,
//             isSmokingInPregnancy,
//             isHavePet,
//             isUseSupplement,
//             isUseAntibioticInPregnancy
//           } = motherProfile;
//           if (!isNilEmpty(prePregnancyWeight)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(height)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isSmokingInPregnancy)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isHavePet)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isUseSupplement)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isUseAntibioticInPregnancy)) {
//             memberFields += 2; // include allergies
//           }
//         }
//         percent = memberFields / totalFields;
//         break;
//       }
//       case USER_SAMPLE_ROLES.BABY: {
//         const totalFields = 42;
//         let memberFields = 0;
//         if (!isNilEmpty(firstName)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(lastName)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(gender)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(dayOfBirth)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(phoneNumber)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(streetAddress)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(postalCode)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(unitNumber)) {
//           memberFields += 1;
//         }
//         if (!isNil(babyMotherProfile)) {
//           const {
//             raceId,
//             prePregnancyWeight,
//             height,
//             isSmokingInPregnancy,
//             isSmokingInBreastFeeding,
//             isFatherSmoking,
//             isGrandparentsSmoking,
//             isHavePet,
//             isUseSupplement,
//             isUseAntibioticInPregnancy,
//             isUseAntibioticInDelivery,
//             isUseAntibioticInBreastFeeding
//           } = babyMotherProfile;
//           if (!isNilEmpty(raceId)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(prePregnancyWeight)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(height)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isSmokingInPregnancy)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isSmokingInBreastFeeding)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isFatherSmoking)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isGrandparentsSmoking)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isHavePet)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isUseSupplement)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isUseAntibioticInPregnancy)) {
//             memberFields += 3; // include mother allergies, father allergies, any child allergies
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isUseAntibioticInDelivery)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isUseAntibioticInBreastFeeding)) {
//             memberFields += 1;
//           }
//         }
//         if (!isNil(race) && !isNilEmpty(race.code)) {
//           memberFields += 1;
//         }
//         if (!isNilEmpty(deliveryMode)) {
//           memberFields += 1;
//         }
//         if (!isNil(babyProfile)) {
//           const {
//             weight,
//             height,
//             gestationalAge,
//             birthWeight,
//             birthLength,
//             numberSiblings,
//             birthOrder,
//             isAttendingDayCare,

//             feedingPractise,
//             otherFeeding,
//             isWeaned,
//             isUseSupplement,

//             isOngoingIllness
//             // formulaOrMixedFeedingBrand,
//             // infantFormulaBrand,
//           } = babyProfile;
//           if (!isNilEmpty(weight)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(height)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(gestationalAge)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(birthWeight)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(birthLength)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(numberSiblings)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(birthOrder)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isAttendingDayCare)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(feedingPractise)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(otherFeeding)) {
//             memberFields += 1;
//           }
//           // if (!isNilEmpty(formulaOrMixedFeedingBrand)) {
//           //   memberFields += 1;
//           // }
//           // if (!isNilEmpty(infantFormulaBrand)) {
//           //   memberFields += 1;
//           // }
//           if (!isNilEmpty(isWeaned)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isUseSupplement)) {
//             memberFields += 1;
//           }
//           if (!isNilEmpty(isOngoingIllness)) {
//             memberFields += 1; // include baby allergies
//             memberFields += 4; // include illness, medication, antibiotic, vaccination
//           }
//         }
//         percent = memberFields / totalFields;
//         break;
//       }
//       default:
//         percent = 0;
//         break;
//     }
//   }
//   return Number((percent * 100).toFixed(0));
// };

// This will auto add field missing (Photo)
const getPercentMetadataFull = ({ role, memberInfo = {}, sample = {} }: any) => {
  let percent = 0;
  let orderPercent = 0;
  if (!isEmpty(memberInfo)) {
    const {
      firstName,
      lastName,
      gender,
      dayOfBirth,
      phoneNumber,
      streetAddress,
      postalCode,
      unitNumber,
      raceId,
      deliveryMode
    } = memberInfo;
    const { motherProfile, babyProfile, babyMotherProfile } = sample;
    switch (role) {
      case USER_SAMPLE_ROLES.MOTHER_TO_BE: {
        let totalFields = 16;
        let memberFields = 0;
        let orderTotalFields = 16;
        let orderMemberFields = 0;
        if (!isNilEmpty(firstName)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(lastName)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(gender)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(dayOfBirth)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(phoneNumber)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(streetAddress)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(postalCode)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(unitNumber)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(raceId)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNil(motherProfile)) {
          const {
            prePregnancyWeight,
            height,
            isSmokingInPregnancy,
            isHavePet,
            isUseSupplement,
            isUseAntibioticInPregnancy,
            photoSupplements,
            photoAntibiotics
          } = motherProfile;
          if (!isNilEmpty(prePregnancyWeight)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(height)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isSmokingInPregnancy)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isHavePet)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isUseSupplement)) {
            memberFields += 1;
            orderMemberFields += 1;
            if (isUseSupplement) {
              totalFields += 1;
              orderTotalFields += 1;
              if (
                !isNilEmpty(photoSupplements)
                && photoSupplements.length > 0
              ) {
                memberFields += 1;
                orderMemberFields += 1;
              } else {
                memberFields += 1;
              }
            }
          }
          if (!isNilEmpty(isUseAntibioticInPregnancy)) {
            memberFields += 2; // include allergies
            orderMemberFields += 2;
            if (isUseAntibioticInPregnancy === 1) {
              totalFields += 1;
              orderTotalFields += 1;
              if (
                !isNilEmpty(photoAntibiotics)
                && photoAntibiotics.length > 0
              ) {
                memberFields += 1;
                orderMemberFields += 1;
              } else {
                memberFields += 1;
              }
            }
          }
        }
        percent = memberFields / totalFields;
        orderPercent = orderMemberFields / orderTotalFields;
        break;
      }
      case USER_SAMPLE_ROLES.BABY: {
        let totalFields = 42;
        let memberFields = 0;
        let orderTotalFields = 42;
        let orderMemberFields = 0;
        if (!isNilEmpty(firstName)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(lastName)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(gender)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(dayOfBirth)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(phoneNumber)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(streetAddress)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(postalCode)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(unitNumber)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNil(babyMotherProfile)) {
          const {
            // eslint-disable-next-line no-shadow
            raceId,
            prePregnancyWeight,
            height,
            isSmokingInPregnancy,
            isSmokingInBreastFeeding,
            isFatherSmoking,
            isGrandparentsSmoking,
            isHavePet,
            isUseSupplement,
            isUseAntibioticInPregnancy,
            isUseAntibioticInDelivery,
            isUseAntibioticInBreastFeeding,
            photoSupplements
          } = babyMotherProfile;
          if (!isNilEmpty(raceId)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(prePregnancyWeight)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(height)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isSmokingInPregnancy)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isSmokingInBreastFeeding)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isFatherSmoking)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isGrandparentsSmoking)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isHavePet)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isUseSupplement)) {
            memberFields += 1;
            orderMemberFields += 1;
            if (isUseSupplement) {
              totalFields += 1;
              orderTotalFields += 1;
              if (
                !isNilEmpty(photoSupplements)
                && photoSupplements.length > 0
              ) {
                memberFields += 1;
                orderMemberFields += 1;
              } else {
                memberFields += 1;
              }
            }
          }
          if (!isNilEmpty(isUseAntibioticInPregnancy)) {
            memberFields += 3; // include mother allergies, father allergies, any child allergies
            memberFields += 1;
            orderMemberFields += 3;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isUseAntibioticInDelivery)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isUseAntibioticInBreastFeeding)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
        }
        if (!isNilEmpty(raceId)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNilEmpty(deliveryMode)) {
          memberFields += 1;
          orderMemberFields += 1;
        }
        if (!isNil(babyProfile)) {
          const {
            weight,
            height,
            gestationalAge,
            birthWeight,
            birthLength,
            numberSiblings,
            birthOrder,
            isAttendingDayCare,

            feedingPractise,
            otherFeeding,
            isWeaned,
            isUseSupplement,
            photoSupplements,

            isOngoingIllness
            // formulaOrMixedFeedingBrand,
            // infantFormulaBrand,
          } = babyProfile;
          if (!isNilEmpty(weight)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(height)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(gestationalAge)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(birthWeight)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(birthLength)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(numberSiblings)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(birthOrder)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isAttendingDayCare)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(feedingPractise)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(otherFeeding)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          // if (!isNilEmpty(formulaOrMixedFeedingBrand)) {
          //   memberFields += 1;
          // orderMemberFields += 1;
          // }
          // if (!isNilEmpty(infantFormulaBrand)) {
          //   memberFields += 1;
          // orderMemberFields += 1;
          // }
          if (!isNilEmpty(isWeaned)) {
            memberFields += 1;
            orderMemberFields += 1;
          }
          if (!isNilEmpty(isUseSupplement)) {
            memberFields += 1;
            orderMemberFields += 1;
            if (isUseSupplement) {
              totalFields += 1;
              orderTotalFields += 1;
              if (
                !isNilEmpty(photoSupplements)
                && photoSupplements.length > 0
              ) {
                memberFields += 1;
                orderMemberFields += 1;
              } else {
                memberFields += 1;
              }
            }
          }
          if (!isNilEmpty(isOngoingIllness)) {
            memberFields += 1; // include baby allergies
            memberFields += 4; // include illness, medication, antibiotic, vaccination
            orderMemberFields += 1;
            orderMemberFields += 4;
          }
        }
        percent = memberFields / totalFields;
        orderPercent = orderMemberFields / orderTotalFields;
        break;
      }
      default:
        percent = 0;
        orderPercent = 0;
        break;
    }
  }
  return {
    percentMetadata: Number((percent * 100).toFixed(0)),
    percentMetadataFull: Number((orderPercent * 100).toFixed(0))
  };
};

const getPercentMetadataAdults = ({ memberInfo = {}, sample = {} }: any) => {
  let percent = 0;
  let totalFields = 22;
  let memberFields = 0;
  let orderTotalFields = 22;
  let orderMemberFields = 0;
  let orderPercent = 0;

  if (!isEmpty(memberInfo)) {
    const {
      firstName,
      lastName,
      gender,
      dayOfBirth,
      phoneNumber,
      streetAddress,
      postalCode,
      unitNumber,
      raceId
    } = memberInfo;
    const {
      bmi,
      country,
      antibioticHistory,
      gluten,
      lactose,
      regionBirth,
      dietType,
      typesOfPlants,
      adultsProfiles
    } = sample;

    if (!isNilEmpty(firstName)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(lastName)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(gender)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(dayOfBirth)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(phoneNumber)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(streetAddress)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(postalCode)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(unitNumber)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(raceId)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(bmi)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(country)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(antibioticHistory)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(gluten)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(lactose)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(regionBirth)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(dietType)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNilEmpty(typesOfPlants)) {
      memberFields += 1;
      orderMemberFields += 1;
    }
    if (!isNil(adultsProfiles)) {
      const {
        isSmoking,
        isVegan,
        isUseSupplement,
        isUseAntibiotic,
        photoSupplements
      } = adultsProfiles;
      if (!isNilEmpty(isSmoking)) {
        memberFields += 1;
        orderMemberFields += 1;
      }
      if (!isNilEmpty(isVegan)) {
        memberFields += 1;
        orderMemberFields += 1;
      }
      if (!isNilEmpty(isUseSupplement)) {
        memberFields += 1;
        orderMemberFields += 1;
        if (isUseSupplement) {
          totalFields += 1;
          orderTotalFields += 1;
          if (!isNilEmpty(photoSupplements) && photoSupplements.length > 0) {
            memberFields += 1;
            orderMemberFields += 1;
          } else {
            memberFields += 1;
          }
        }
      }
      if (!isNilEmpty(isUseAntibiotic)) {
        memberFields += 2; // include allergies
        orderMemberFields += 2;
      }
    }
    percent = memberFields / totalFields;
    orderPercent = orderMemberFields / orderTotalFields;
  }
  return {
    percentMetadata: Number((percent * 100).toFixed(0)),
    percentMetadataFull: Number((orderPercent * 100).toFixed(0))
  };
};

const getPercentGutHealth = ({ role, gutHealth = {} }: any) => {
  let percent = 0;
  let orderPercent = 0;

  if (!gutHealth) {
    return {
      gutHealthProgress: Number((percent * 100).toFixed(0)),
      orderGutHealthProgress: Number((orderPercent * 100).toFixed(0))
    };
  }
  if (role === USER_SAMPLE_ROLES.BABY) {
    let gutHealthFields = 0;
    const totalFields = 9;
    let orderGutHealthFields = 0;
    const {
      discomfortOrPain,
      diarrheaTroubled,
      constipationTroubled,
      bowelMovementPassStool,
      isToiletTrained,
      stoolType,
      stoolColor,
      photos,
      infectionRecently
    } = gutHealth;
    if (!isNilEmpty(discomfortOrPain)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (!isNilEmpty(diarrheaTroubled)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (!isNilEmpty(constipationTroubled)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (!isNilEmpty(bowelMovementPassStool)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (!isNilEmpty(isToiletTrained)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (!isNilEmpty(stoolType)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (!isNilEmpty(stoolColor)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (photos && photos.length > 0) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    } else {
      gutHealthFields += 1;
    }
    if (!isNilEmpty(infectionRecently)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    percent = gutHealthFields / totalFields;
    orderPercent = orderGutHealthFields / totalFields;
    return {
      gutHealthProgress: Number((percent * 100).toFixed(0)),
      orderGutHealthProgress: Number((orderPercent * 100).toFixed(0))
    };
  }
  if (role === USER_SAMPLE_ROLES.MOTHER_TO_BE) {
    let gutHealthFields = 0;
    const totalFields = 8;
    let orderGutHealthFields = 0;
    const {
      discomfortOrPain,
      diarrheaTroubled,
      constipationTroubled,
      bowelMovementPassStool,
      stoolType,
      stoolColor,
      photos,
      infectionRecently
    } = gutHealth;
    if (!isNilEmpty(discomfortOrPain)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (!isNilEmpty(diarrheaTroubled)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (!isNilEmpty(constipationTroubled)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (!isNilEmpty(bowelMovementPassStool)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (!isNilEmpty(stoolType)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (!isNilEmpty(stoolColor)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    if (photos && photos.length > 0) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    } else {
      gutHealthFields += 1;
    }
    if (!isNilEmpty(infectionRecently)) {
      gutHealthFields += 1;
      orderGutHealthFields += 1;
    }
    percent = gutHealthFields / totalFields;
    orderPercent = orderGutHealthFields / totalFields;
    return {
      gutHealthProgress: Number((percent * 100).toFixed(0)),
      orderGutHealthProgress: Number((orderPercent * 100).toFixed(0))
    };
  }
  return {
    gutHealthProgress: 0,
    orderGutHealthProgress: 0
  };
};

const getPercentGutHealthAdults = ({ gutHealth = {} }: any) => {
  const totalFields = 8;
  let percent = 0;
  let orderPercent = 0;
  let gutHealthFields = 0;
  let orderGutHealthFields = 0;

  if (!gutHealth) {
    return {
      gutHealthProgress: Number((percent * 100).toFixed(0)),
      orderGutHealthProgress: Number((orderPercent * 100).toFixed(0))
    };
  }
  const {
    discomfortOrPain,
    diarrheaTroubled,
    constipationTroubled,
    bowelMovementPassStool,
    photos,
    stoolColor,
    stoolType,
    infectionRecently
  } = gutHealth;
  if (!isNilEmpty(discomfortOrPain)) {
    gutHealthFields += 1;
    orderGutHealthFields += 1;
  }
  if (!isNilEmpty(diarrheaTroubled)) {
    gutHealthFields += 1;
    orderGutHealthFields += 1;
  }
  if (!isNilEmpty(constipationTroubled)) {
    gutHealthFields += 1;
    orderGutHealthFields += 1;
  }
  if (!isNilEmpty(bowelMovementPassStool)) {
    gutHealthFields += 1;
    orderGutHealthFields += 1;
  }
  if (!isNilEmpty(stoolType)) {
    gutHealthFields += 1;
    orderGutHealthFields += 1;
  }
  if (!isNilEmpty(stoolColor)) {
    gutHealthFields += 1;
    orderGutHealthFields += 1;
  }
  if (photos && photos.length > 0) {
    gutHealthFields += 1;
    orderGutHealthFields += 1;
  } else {
    gutHealthFields += 1;
  }
  if (!isNilEmpty(infectionRecently)) {
    gutHealthFields += 1;
    orderGutHealthFields += 1;
  }
  percent = gutHealthFields / totalFields;
  orderPercent = orderGutHealthFields / totalFields;
  return {
    gutHealthProgress: Number((percent * 100).toFixed(0)),
    orderGutHealthProgress: Number((orderPercent * 100).toFixed(0))
  };
};

const flatProfileMetadata = ({ role, memberInfo = {} }: any) => {
  const rObj = { ...memberInfo };
  rObj.otherRaceName = !isNil(memberInfo.otherRaceName)
    ? memberInfo.otherRaceName
    : '';
  const percent = getPercentMetadataFull({
    role,
    memberInfo: memberInfo.member,
    sample: memberInfo
  });
  rObj.percentMetadata = percent.percentMetadata;
  rObj.percentMetadataFull = percent.percentMetadataFull;
  switch (role) {
    case USER_SAMPLE_ROLES.MOTHER_TO_BE: {
      break;
    }
    case USER_SAMPLE_ROLES.BABY: {
      rObj.deliveryMode = rObj.deliveryMode ? Number(rObj.deliveryMode) : '';
      break;
    }
    default:
      break;
  }
  return rObj;
};

const flatAdultsProfileMetadata = ({ memberInfo = {} }: any) => {
  const rObj = { ...memberInfo };
  rObj.otherRaceName = !isNil(memberInfo.otherRaceName)
    ? memberInfo.otherRaceName
    : '';
  const percent = getPercentMetadataAdults({
    memberInfo: memberInfo.membersAdults,
    sample: memberInfo
  });
  rObj.percentMetadata = percent.percentMetadata;
  rObj.percentMetadataFull = percent.percentMetadataFull;
  return rObj;
};

const getAllergyElement = (allergies: any) => {
  const rObj: any = {
    isAsthma: '',
    isAsthmaConfirmed: '',
    isFever: '',
    isFeverConfirmed: '',
    isEczema: '',
    isEczemaConfirmed: '',
    isFood: '',
    isFoodConfirmed: ''
  };
  if (allergies && isArray(allergies)) {
    allergies.forEach((allergy) => {
      if (allergy.allergyType === ALLERGY.ASTHMA) {
        rObj.isAsthma = true;
        rObj.isAsthmaConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.FEVER_RHINITIS) {
        rObj.isFever = true;
        rObj.isFeverConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.ECZEMA_SKIN) {
        rObj.isEczema = true;
        rObj.isEczemaConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.FOOD) {
        rObj.isFood = true;
        rObj.isFoodConfirmed = boolToString(allergy.isConfirmed);
      }
    });
  }
  return rObj;
};

const getFatherAllergyElement = (allergies: any) => {
  const rObj: any = {
    isFatherAsthma: '',
    isFatherAsthmaConfirmed: '',
    isFatherFever: '',
    isFatherFeverConfirmed: '',
    isFatherEczema: '',
    isFatherEczemaConfirmed: '',
    isFatherFood: '',
    isFatherFoodConfirmed: ''
  };
  if (allergies && isArray(allergies)) {
    allergies.forEach((allergy) => {
      if (allergy.allergyType === ALLERGY.ASTHMA) {
        rObj.isFatherAsthma = true;
        rObj.isFatherAsthmaConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.FEVER_RHINITIS) {
        rObj.isFatherFever = true;
        rObj.isFatherFeverConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.ECZEMA_SKIN) {
        rObj.isFatherEczema = true;
        rObj.isFatherEczemaConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.FOOD) {
        rObj.isFatherFood = true;
        rObj.isFatherFoodConfirmed = boolToString(allergy.isConfirmed);
      }
    });
  }
  return rObj;
};

const getSiblingsAllergyElement = (allergies: any) => {
  const rObj: any = {
    isSiblingsAsthma: '',
    isSiblingsAsthmaConfirmed: '',
    isSiblingsFever: '',
    isSiblingsFeverConfirmed: '',
    isSiblingsEczema: '',
    isSiblingsEczemaConfirmed: '',
    isSiblingsFood: '',
    isSiblingsFoodConfirmed: ''
  };
  if (allergies && isArray(allergies)) {
    allergies.forEach((allergy) => {
      if (allergy.allergyType === ALLERGY.ASTHMA) {
        rObj.isSiblingsAsthma = true;
        rObj.isSiblingsAsthmaConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.FEVER_RHINITIS) {
        rObj.isSiblingsFever = true;
        rObj.isSiblingsFeverConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.ECZEMA_SKIN) {
        rObj.isSiblingsEczema = true;
        rObj.isSiblingsEczemaConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.FOOD) {
        rObj.isSiblingsFood = true;
        rObj.isSiblingsFoodConfirmed = boolToString(allergy.isConfirmed);
      }
    });
  }
  return rObj;
};

const getAnyChildAllergyElement = (allergies: any) => {
  const rObj: any = {
    isAnyChildAsthma: '',
    isAnyChildAsthmaConfirmed: '',
    isAnyChildFever: '',
    isAnyChildFeverConfirmed: '',
    isAnyChildEczema: '',
    isAnyChildEczemaConfirmed: '',
    isAnyChildFood: '',
    isAnyChildFoodConfirmed: ''
  };
  if (allergies && isArray(allergies)) {
    allergies.forEach((allergy) => {
      if (allergy.allergyType === ALLERGY.ASTHMA) {
        rObj.isAnyChildAsthma = true;
        rObj.isAnyChildAsthmaConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.FEVER_RHINITIS) {
        rObj.isAnyChildFever = true;
        rObj.isAnyChildFeverConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.ECZEMA_SKIN) {
        rObj.isAnyChildEczema = true;
        rObj.isAnyChildEczemaConfirmed = boolToString(allergy.isConfirmed);
      } else if (allergy.allergyType === ALLERGY.FOOD) {
        rObj.isAnyChildFood = true;
        rObj.isAnyChildFoodConfirmed = boolToString(allergy.isConfirmed);
      }
    });
  }
  return rObj;
};

const convertAllergyElementToArray = (allergyElement: any) => {
  const rArr = [];
  const {
    isAsthma,
    isAsthmaConfirmed,
    isFever,
    isFeverConfirmed,
    isFood,
    isFoodConfirmed,
    isEczema,
    isEczemaConfirmed
  } = allergyElement;
  if (!isNil(isAsthma)) {
    rArr.push({
      allergyType: ALLERGY.ASTHMA,
      isConfirmed: isAsthmaConfirmed
    });
  }
  if (!isNil(isFever)) {
    rArr.push({
      allergyType: ALLERGY.FEVER_RHINITIS,
      isConfirmed: isFeverConfirmed
    });
  }
  if (!isNil(isFood)) {
    rArr.push({
      allergyType: ALLERGY.FOOD,
      isConfirmed: isFoodConfirmed
    });
  }
  if (!isNil(isEczema)) {
    rArr.push({
      allergyType: ALLERGY.ECZEMA_SKIN,
      isConfirmed: isEczemaConfirmed
    });
  }
  return rArr;
};

const convertFatherAllergyElementToArray = (allergyElement: any) => {
  const rArr = [];
  const {
    isFatherAsthma,
    isFatherAsthmaConfirmed,
    isFatherFever,
    isFatherFeverConfirmed,
    isFatherFood,
    isFatherFoodConfirmed,
    isFatherEczema,
    isFatherEczemaConfirmed
  } = allergyElement;
  if (!isNil(isFatherAsthma)) {
    rArr.push({
      allergyType: ALLERGY.ASTHMA,
      isConfirmed: isFatherAsthmaConfirmed
    });
  }
  if (!isNil(isFatherFever)) {
    rArr.push({
      allergyType: ALLERGY.FEVER_RHINITIS,
      isConfirmed: isFatherFeverConfirmed
    });
  }
  if (!isNil(isFatherFood)) {
    rArr.push({
      allergyType: ALLERGY.FOOD,
      isConfirmed: isFatherFoodConfirmed
    });
  }
  if (!isNil(isFatherEczema)) {
    rArr.push({
      allergyType: ALLERGY.ECZEMA_SKIN,
      isConfirmed: isFatherEczemaConfirmed
    });
  }
  return rArr;
};

const convertSiblingsAllergyElementToArray = (allergyElement: any) => {
  const rArr = [];
  const {
    isSiblingsAsthma,
    isSiblingsAsthmaConfirmed,
    isSiblingsFever,
    isSiblingsFeverConfirmed,
    isSiblingsFood,
    isSiblingsFoodConfirmed,
    isSiblingsEczema,
    isSiblingsEczemaConfirmed
  } = allergyElement;
  if (!isNil(isSiblingsAsthma)) {
    rArr.push({
      allergyType: ALLERGY.ASTHMA,
      isConfirmed: isSiblingsAsthmaConfirmed
    });
  }
  if (!isNil(isSiblingsFever)) {
    rArr.push({
      allergyType: ALLERGY.FEVER_RHINITIS,
      isConfirmed: isSiblingsFeverConfirmed
    });
  }
  if (!isNil(isSiblingsFood)) {
    rArr.push({
      allergyType: ALLERGY.FOOD,
      isConfirmed: isSiblingsFoodConfirmed
    });
  }
  if (!isNil(isSiblingsEczema)) {
    rArr.push({
      allergyType: ALLERGY.ECZEMA_SKIN,
      isConfirmed: isSiblingsEczemaConfirmed
    });
  }
  return rArr;
};

const convertAnyChildAllergyElementToArray = (allergyElement: any) => {
  const rArr = [];
  const {
    isAnyChildAsthma,
    isAnyChildAsthmaConfirmed,
    isAnyChildFever,
    isAnyChildFeverConfirmed,
    isAnyChildFood,
    isAnyChildFoodConfirmed,
    isAnyChildEczema,
    isAnyChildEczemaConfirmed
  } = allergyElement;
  if (!isNil(isAnyChildAsthma)) {
    rArr.push({
      allergyType: ALLERGY.ASTHMA,
      isConfirmed: isAnyChildAsthmaConfirmed
    });
  }
  if (!isNil(isAnyChildFever)) {
    rArr.push({
      allergyType: ALLERGY.FEVER_RHINITIS,
      isConfirmed: isAnyChildFeverConfirmed
    });
  }
  if (!isNil(isAnyChildFood)) {
    rArr.push({
      allergyType: ALLERGY.FOOD,
      isConfirmed: isAnyChildFoodConfirmed
    });
  }
  if (!isNil(isAnyChildEczema)) {
    rArr.push({
      allergyType: ALLERGY.ECZEMA_SKIN,
      isConfirmed: isAnyChildEczemaConfirmed
    });
  }
  return rArr;
};

const getVaccinationStatus = (status: any) => {
  if (!status && status !== 0) {
    return VACCINATION_STATUS.I_DONT_REMEMBER;
  }

  return status.toString();
};

const getVaccinationElement = (vaccinations: any) => {
  const rObj = {
    isTuberculosis: '',
    isHepatitisB: '',
    isDTaP: '',
    isPoliovirus: '',
    isHib: '',
    isMMR: '',
    isPCV: '',
    isCovid19: '',
    isRotavirus: '',
    isCP: ''
  };
  if (vaccinations && vaccinations.length > 0) {
    vaccinations.forEach((item: any) => {
      if (item.type === VACCINATION.TUBERCULOSIS_BCG) {
        rObj.isTuberculosis = getVaccinationStatus(item.status);
      }
      if (item.type === VACCINATION.HEPATITIS_B) {
        rObj.isHepatitisB = getVaccinationStatus(item.status);
      }
      if (item.type === VACCINATION.DTaP) {
        rObj.isDTaP = getVaccinationStatus(item.status);
      }
      if (item.type === VACCINATION.POLIOVIRUS) {
        rObj.isPoliovirus = getVaccinationStatus(item.status);
      }
      if (item.type === VACCINATION.Hib) {
        rObj.isHib = getVaccinationStatus(item.status);
      }
      if (item.type === VACCINATION.MMR) {
        rObj.isMMR = getVaccinationStatus(item.status);
      }
      if (item.type === VACCINATION.PCV) {
        rObj.isPCV = getVaccinationStatus(item.status);
      }
      if (item.type === VACCINATION.COVID_19) {
        rObj.isCovid19 = getVaccinationStatus(item.status);
      }
      if (item.type === VACCINATION.ROTAVIRUS) {
        rObj.isRotavirus = getVaccinationStatus(item.status);
      }
      if (item.type === VACCINATION.CHICKEN_POX) {
        rObj.isCP = getVaccinationStatus(item.status);
      }
    });
  }
  return rObj;
};

const convertVaccinationElementToArray = (vaccinationElement: any) => {
  const rArr = [];
  const {
    isCP,
    isCovid19,
    isDTaP,
    isHepatitisB,
    isHib,
    isMMR,
    isPCV,
    isPoliovirus,
    isRotavirus,
    isTuberculosis
  } = vaccinationElement;
  rArr.push({
    type: VACCINATION.CHICKEN_POX,
    status: isCP
  });
  rArr.push({
    type: VACCINATION.HEPATITIS_B,
    status: isHepatitisB
  });
  rArr.push({
    type: VACCINATION.DTaP,
    status: isDTaP
  });
  rArr.push({
    type: VACCINATION.POLIOVIRUS,
    status: isPoliovirus
  });
  rArr.push({
    type: VACCINATION.Hib,
    status: isHib
  });
  rArr.push({
    type: VACCINATION.MMR,
    status: isMMR
  });
  rArr.push({
    type: VACCINATION.PCV,
    status: isPCV
  });
  rArr.push({
    type: VACCINATION.COVID_19,
    status: isCovid19
  });
  rArr.push({
    type: VACCINATION.ROTAVIRUS,
    status: isRotavirus
  });
  rArr.push({
    type: VACCINATION.TUBERCULOSIS_BCG,
    status: isTuberculosis
  });
  return rArr;
};

const customRoundNumber = (number: number) => {
  let age = 0;

  const decimalPart = (number - Math.floor(number)).toFixed(2);
  if (Number(decimalPart) <= 0.5) {
    age = Math.floor(number);
  } else {
    age = Math.ceil(number);
  }

  return age;
};

const getAgeByMonth = (month: any) => {
  let result;
  if (month >= 12) {
    if (month % 12 === 0) {
      const year = month / 12;
      result = year > 1 ? `${year} years` : `${year} year`;
      return result;
    }
    const quotient = Math.floor(month / 12);
    const remainder = month % 12;
    let newMonth = 0;
    if (remainder <= 0.5) {
      newMonth = 0.5;
    } else {
      const age = customRoundNumber(remainder);
      newMonth = age;
    }
    result = quotient > 1
      ? `${quotient} years ${newMonth > 1
        ? `${newMonth} months`
        : `${newMonth} month`
      }`
      : `${quotient} year ${newMonth > 1
        ? `${newMonth} months`
        : `${newMonth} month`
      }`;
    return result;
  }
  if (month >= 1) {
    const age = customRoundNumber(month);
    result = age > 1
      ? `${age} months`
      : `${age} month`;
    return result;
  }
  if (month < 1) {
    const week = (month * 30) / 7;
    const age = customRoundNumber(week);
    result = age > 1
      ? `${age} weeks`
      : `${age} week`;
    return result;
  }
  return result;
};

const getAgeAdultsByDateOrMonth = (dateOrMonth: any) => {
  let result: any = 0;
  if (!_.isNumber(dateOrMonth)) {
    result = getAgeUnitFromDate({
      dayOfBirth: moment(dateOrMonth).format(DATEFORMAT).toString(),
      userRole: USER_SAMPLE_ROLES.MOTHER_TO_BE
    });
  } else {
    result = `${Math.trunc(Number(dateOrMonth / 12))} years`;
  }

  return result.toString();
};

const stepTrackOrder = (step: any, data: any) => {
  if (data) {
    if (step === 1 && data.Itinerary[0].CompletedDateTime) {
      return 'active';
    }
    if (step === 2 && data.Itinerary[1].CompletedDateTime) {
      return 'active';
    }
    if (step === 3 && data.Itinerary[2].CompletedDateTime) {
      return 'active';
    }
    if (step === 4 && data.Itinerary[3].CompletedDateTime) {
      return 'active';
    }
  }

  return '';
};

const getMaxDateForAdults = (age: number) => {
  let days = 0;
  const year = new Date().getFullYear();
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < age; index++) {
    const eachYear = year - index;
    days
      += (eachYear % 4 === 0 && eachYear % 100 > 0) || eachYear % 400 === 0
        ? 366
        : 365;
  }
  const milliseconds = days * 86400000;
  const maxDate = new Date(Date.now() - milliseconds);
  return maxDate;
};

export {
  getAgeUnitFromDate,
  isMom,
  getChildStage,
  getAgeChildMonth,
  getAgeChildMonthText,
  isProfileCanViewReport,
  flatProfileMetadata,
  flatAdultsProfileMetadata,
  // getPercentMetadata,
  getPercentMetadataFull,
  getPercentMetadataAdults,
  getPercentGutHealth,
  getPercentGutHealthAdults,
  getAllergyElement,
  getFatherAllergyElement,
  getAnyChildAllergyElement,
  convertAllergyElementToArray,
  getVaccinationElement,
  convertVaccinationElementToArray,
  convertFatherAllergyElementToArray,
  convertAnyChildAllergyElementToArray,
  convertSiblingsAllergyElementToArray,
  getSiblingsAllergyElement,
  getAgeByMonth,
  stepTrackOrder,
  getAgeAdultsByDateOrMonth,
  getMaxDateForAdults
};

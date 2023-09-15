import { ReadFile } from '../helpers/CommonUtils';

export const boolToString = (value: any) => {
  return value !== undefined && value !== null && value !== ''
    ? Number(value).toString()
    : '';
};

/**
 * Check is empty array
 * @param arr Array
 * @return True or False
 */
export const isEmptyArray = (arr: any[]) => {
  // Filter out empty elements
  const filteredArr = arr.filter((element) => { return element !== ''; });

  // Check if the resulting array is empty
  if (filteredArr.length === 0) {
    return true; // The array is considered empty
  }
  return false; // The array is not empty
};

/**
 * Check if a parameter is not undefined, null, or an empty string (''), while allowing 0 or '0'.
 * @param value Any value
 * @return True or False
 */
export const checkIsNotEmpty = (value: any): boolean => {
  return value !== undefined && value !== null && value !== '';
};

/**
 * Convert value in array to string
 * @param array Array
 * @return Array
 */
export const convertValueInArrayToString = (array: any) => {
  return array.map((item: any) => { return { ...item, value: item.value.toString() }; });
};

/**
 * Check full empty
 * @param value Any
 * @returns True or False
 */
export const isValueEmpty = (value: any) => {
  if (typeof value === 'undefined' || value === null) {
    return true;
  }

  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true;
  }

  return false;
};

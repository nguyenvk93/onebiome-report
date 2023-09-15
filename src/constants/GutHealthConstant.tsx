export const FREQ_4_WEEK = {
  // NONE: 1, // None of the time
  LESS_THAN_3_HOURS: 2, // < 3 hours
  RANGE_3_TO_6_HOURS: 3, // 3-6 hours
  MORE_THAN_6_HOURS: 4, // > 6 hours
  ALL: 5, // All the time
  NONE: 6 // Nones
};

export const OFTEN = {
  DAY_2_TO_3: 1, // 2-3 x per day
  DAY_1: 2, // 1x per day
  RANGE_3_TO_6_WEEK: 3, // 3-6x per week
  WEEK_LESS_TWICE: 4, // 2x per week or less
  DAY_MORE_THAN_3: 5, // > 3x per day
  NONE: 6 // None
};

export const OFTEN_TROUBLED = {
  DAY_2_TO_3: 1, // 2-3 x per day
  DAY_1: 2, // 1x per day
  RANGE_3_TO_6_WEEK: 3, // 3-6x per week
  WEEK_LESS_TWICE: 4, // 2x per week or less
  DAY_MORE_THAN_3: 5, // > 3x per day
  WEEK_LESS_ONCE: 6, // infrequent <1 per week”
  NA: 7 // NA
};

export const OFTEN_DIARRHOEA = {
  DAY_2_TO_3: 1, // 2-3 x per day
  DAY_1: 2, // 1x per day
  RANGE_3_TO_6_WEEK: 3, // 3-6x per week
  WEEK_LESS_TWICE: 4, // 2x per week or less
  DAY_MORE_THAN_3: 5, // > 3x per day
  NONE: 6 // no
};

export const STOOL_TRAINED = {
  TYPE_1: 1, // Separate hard lumps, like nuts
  TYPE_2: 2, // Sausage-shaped but lumpy
  TYPE_3: 3, // Like a sausage with cracks
  TYPE_4: 4, // Like a sausage or snake but smooth
  TYPE_5: 5, // Soft blobs with clear-cut edges
  TYPE_6: 6, // Fluffy pieces with ragged edges
  TYPE_7: 7 // Entirely liquid, no solid pieces
};

export const STOOL_NOT_TRAINED = {
  TYPE_1: 1, // Hard stools
  TYPE_2: 2, // Formed stools
  TYPE_3: 3, // Loose stools
  TYPE_4: 4 // Watery stools
};

export const INFECTION = {
  ROTAVIRUS: 1, // Viral: Rotavirus
  HEPATITIS: 2, // Viral: Hepatitis A
  OTHER: 3, // Viral: Other
  BACTERIAL: 4, // Bacterial
  DONT_KNOW: 5 // Don’t know
};

export const STOOL_COLOR = {
  BLACK: 1,
  DARK_BROWN: 2,
  BROWN: 3,
  LIGHT_BROWN: 4,
  BROWN_GREEN: 5,
  RED: 6,
  ORANGE: 7,
  YELLOW_GREEN: 8,
  GREEN: 9,
  YELLOW: 10,
  GRAY: 11,
  PALE: 12,
  OTHER: 13,
  PALE_CLAY: 14
};

export const FREQ_4_WEEK_OPTS = [
  // { label: "None of the time", value: FREQ_4_WEEK.NONE },
  { label: '< 3 hours', value: FREQ_4_WEEK.LESS_THAN_3_HOURS },
  { label: '3-6 hours', value: FREQ_4_WEEK.RANGE_3_TO_6_HOURS },
  { label: '> 6 hours', value: FREQ_4_WEEK.MORE_THAN_6_HOURS },
  { label: 'All the time', value: FREQ_4_WEEK.ALL },
  { label: 'None', value: FREQ_4_WEEK.NONE }
];

export const OFTEN_OPTS = [
  { label: '2x per week or less', value: OFTEN.WEEK_LESS_TWICE },
  { label: '3-6x per week', value: OFTEN.RANGE_3_TO_6_WEEK },
  { label: '1x per day', value: OFTEN.DAY_1 },
  { label: '2-3 x per day', value: OFTEN.DAY_2_TO_3 },
  { label: '> 3x per day', value: OFTEN.DAY_MORE_THAN_3 },
  { label: 'None', value: OFTEN.NONE }
];

export const OFTEN_OFTEN_TROUBLED = [
  { label: '2x per week or less', value: OFTEN_TROUBLED.WEEK_LESS_TWICE },
  { label: '3-6x per week', value: OFTEN_TROUBLED.RANGE_3_TO_6_WEEK },
  { label: '1x per day', value: OFTEN_TROUBLED.DAY_1 },
  { label: '2-3 x per day', value: OFTEN_TROUBLED.DAY_2_TO_3 },
  { label: '> 3x per day', value: OFTEN_TROUBLED.DAY_MORE_THAN_3 },
  { label: 'infrequent <1 per week', value: OFTEN_TROUBLED.WEEK_LESS_ONCE },
  { label: 'NA', value: OFTEN_TROUBLED.NA }
];

export const OFTEN_DIARRHOEA_OPTS = [
  { label: '2x per week or less', value: OFTEN_DIARRHOEA.WEEK_LESS_TWICE },
  { label: '3-6x per week', value: OFTEN_DIARRHOEA.RANGE_3_TO_6_WEEK },
  { label: '1x per day', value: OFTEN_DIARRHOEA.DAY_1 },
  { label: '2-3 x per day', value: OFTEN_DIARRHOEA.DAY_2_TO_3 },
  { label: '> 3x per day', value: OFTEN_DIARRHOEA.DAY_MORE_THAN_3 },
  { label: 'None', value: OFTEN_DIARRHOEA.NONE }
];

export const STOOL_TRAINED_OPTS = [
  { label: 'Separate hard lumps, like nuts', value: STOOL_TRAINED.TYPE_1 },
  { label: 'Sausage-shaped but lumpy', value: STOOL_TRAINED.TYPE_2 },
  { label: 'Like a sausage with cracks', value: STOOL_TRAINED.TYPE_3 },
  { label: 'Like a sausage or snake but smooth', value: STOOL_TRAINED.TYPE_4 },
  { label: 'Soft blobs with clear-cut edges', value: STOOL_TRAINED.TYPE_5 },
  { label: 'Fluffy pieces with ragged edges', value: STOOL_TRAINED.TYPE_6 },
  { label: 'Entirely liquid, no solid pieces', value: STOOL_TRAINED.TYPE_7 }
];

export const STOOL_NOT_TRAINED_OPTS = [
  { label: 'Hard stools', value: STOOL_NOT_TRAINED.TYPE_1 },
  { label: 'Formed stools', value: STOOL_NOT_TRAINED.TYPE_2 },
  { label: 'Loose stools', value: STOOL_NOT_TRAINED.TYPE_3 },
  { label: 'Watery stools', value: STOOL_NOT_TRAINED.TYPE_4 }
];

export const INFECTION_OPTS = [
  { name: 'Viral: Rotavirus', value: INFECTION.ROTAVIRUS },
  { name: 'Bacterial', value: INFECTION.BACTERIAL },
  // { name: "Viral: Hepatitis A", value: INFECTION.HEPATITIS },
  { name: 'Viral: Other', value: INFECTION.OTHER },
  { name: 'Don’t know', value: INFECTION.DONT_KNOW }
];

export const STOOL_COLOR_OPTS = [
  // { label: "Black", value: STOOL_COLOR.BLACK, color: "#000000" },
  // { label: "Dark-brown", value: STOOL_COLOR.DARK_BROWN, color: "#351717" },
  // { label: "Brown", value: STOOL_COLOR.BROWN, color: "#511B1B" },
  // { label: "Light-brown", value: STOOL_COLOR.LIGHT_BROWN, color: "#734040" },
  // { label: "Brown-green", value: STOOL_COLOR.BROWN_GREEN, color: "#7B662F" },
  // { label: "Red", value: STOOL_COLOR.RED, color: "#9C1212" },
  // { label: "Orange", value: STOOL_COLOR.ORANGE, color: "#CC6E00" },
  // { label: "Yellow-green", value: STOOL_COLOR.YELLOW_GREEN, color: "#93850F" },
  // { label: "Green", value: STOOL_COLOR.GREEN, color: "#9AAB30" },
  // { label: "Yellow", value: STOOL_COLOR.YELLOW, color: "#DCA20E" },
  // { label: "Gray", value: STOOL_COLOR.GRAY, color: "#818181" },
  // { label: "Pale", value: STOOL_COLOR.PALE, color: "#C6C6C6" },
  // { label: "Other", value: STOOL_COLOR.OTHER },

  { label: 'Black', value: STOOL_COLOR.BLACK, color: '#000000' },
  { label: 'Pale/Clay', value: STOOL_COLOR.PALE_CLAY, color: '#FFF0C8' },
  { label: 'Brown', value: STOOL_COLOR.BROWN, color: '#7C3415' },
  { label: 'Orange', value: STOOL_COLOR.ORANGE, color: '#F37035' },
  { label: 'Yellow', value: STOOL_COLOR.YELLOW, color: '#FFB72F' },
  { label: 'Green', value: STOOL_COLOR.GREEN, color: '#2C4C24' },
  { label: 'Red', value: STOOL_COLOR.RED, color: '#FF0016' },
  { label: 'Other', value: STOOL_COLOR.OTHER }
];

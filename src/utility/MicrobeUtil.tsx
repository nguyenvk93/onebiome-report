const GOOD_MICRO_MUM = [
  'Bifidobacterium',
  'Faecalibacterium',
  'Prevotella',
  'Roseburia',
  'Anaerostipes',
  'Ruminococcus',
  'Eubacterium',
  'Subdoligranulum',
  'Blautia',
  'Lachnospira',
  'Dialister',
  'Streptococcus',
  'Lactococcus',
  'Lactobacillus',
  'Akkermansia',
  'Coprococcus'
];
const GOOD_MICRO_UNWEANED = [
  'Bifidobacterium',
  'Bacteroides',
  'Lactobacillus',
  'ButyrateProducers'
];
const MUM_GENERAL_BIFIDO = [
  'Bifidobacterium',
  'Faecalibacterium',
  'Prevotella',
  'Roseburia',
  'Anaerostipes',
  'Ruminococcus',
  'Eubacterium',
  'Subdoligranulum',
  'Blautia',
  'Lachnospira',
  'Dialister'
  // "Coprococcus",
];
const MUM_GENERAL_YOGURT = [
  'Streptococcus',
  'Lactococcus',
  'Lactobacillus'
];
const MUM_INDIVIDUAL = [
  'Bifidobacterium',
  'Faecalibacterium',
  'Roseburia',
  'Streptococcus',
  'Lactobacillus',
  'Akkermansia',
  'Coprococcus'
];
const FOOD_TABLE_MICROBE = [
  {
    microName: 'Bacteroides',
    height: 2,
    col: [
      'Broccoli',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]
  },
  {
    microName: 'Faecalibacterium',
    height: 2,
    col: [
      'Carrots',
      'Kiwifruit, Apple',
      'Whole grains',
      'Walnut',
      '',
      'Soybean',
      '',
      'Chickpea'
    ]
  },
  {
    microName: 'Bifidobacterium',
    height: 6,
    col: [
      'Sweet Potatoes, Carrots, Artichoke, Leek, Asparagus, Onions, Garlic',
      'Kiwifruit , Apple, Banana, Pomegranate, Berries, Grape',
      'Whole grains, Potatoes',
      'Almond',
      'Fish rich in omega-3 fatty acids',
      'Soybean',
      'Yoghurt, Fermented milk',
      ''
    ]
  },
  {
    microName: 'Lactobacillus',
    height: 3,
    col: [
      '',
      'Pomegranate',
      '',
      '',
      '',
      '',
      'Yoghurt, Fermented milk',
      ''
    ]
  },
  {
    microName: 'Roseburia',
    height: 2,
    col: [
      'Carrots',
      '',
      'Whole grains',
      'Almond, Walnut',
      '',
      'Soybean',
      '',
      ''
    ]
  },
  {
    microName: 'Lachnospira',
    height: 2,
    col: [
      'Peas',
      '',
      '',
      'Almond',
      '',
      '',
      '',
      ''
    ]
  },
  {
    microName: 'Dialister',
    height: 2,
    col: [
      '',
      '',
      'Whole grains',
      'Almond',
      '',
      '',
      '',
      ''
    ]
  },
  {
    microName: 'Prevotella',
    height: 2,
    col: [
      '',
      '',
      'Whole grains',
      '',
      '',
      '',
      '',
      ''
    ]
  },
  {
    microName: 'Streptococcus',
    height: 3,
    col: [
      '',
      '',
      '',
      '',
      '',
      '',
      'Yoghurt, Fermented milk',
      ''
    ]
  },
  {
    microName: 'Eubacterium hallii group',
    height: 2,
    col: [
      'Carrots',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]
  }
];
const FOOD_TABLE_MICROBE_ADULTS = [
  {
    microName: 'Bacteroides',
    height: 3,
    col: [
      'Broccoli',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]
  },
  {
    microName: 'Faecalibacterium',
    height: 3,
    col: [
      'Carrots',
      'Kiwifruit, Apple',
      'Whole grains',
      'Walnut',
      '',
      'Soybean',
      '',
      'Chickpea'
    ]
  },
  {
    microName: 'Bifidobacterium',
    height: 6,
    col: [
      'Sweet Potatoes, Carrots, Artichoke, Leek, Asparagus, Onions, Garlic',
      'Kiwifruit , Apple, Banana, Pomegranate, Berries, Grape',
      'Whole grains, Potatoes',
      'Almond',
      'Fish rich in omega-3 fatty acids',
      'Soybean',
      'Yoghurt, Fermented milk',
      ''
    ]
  },
  {
    microName: 'Lactobacillus',
    height: 3,
    col: [
      '',
      'Pomegranate',
      '',
      '',
      '',
      '',
      'Yoghurt, Fermented milk',
      ''
    ]
  },
  {
    microName: 'Roseburia',
    height: 3,
    col: [
      'Carrots',
      '',
      'Whole grains',
      'Almond, Walnut',
      '',
      'Soybean',
      '',
      ''
    ]
  },
  {
    microName: 'Lachnospira',
    height: 3,
    col: [
      'Peas',
      '',
      '',
      'Almond',
      '',
      '',
      '',
      ''
    ]
  },
  {
    microName: 'Dialister',
    height: 3,
    col: [
      '',
      '',
      'Whole grains',
      'Almond',
      '',
      '',
      '',
      ''
    ]
  },
  {
    microName: 'Prevotella',
    height: 3,
    col: [
      '',
      '',
      'Whole grains',
      '',
      '',
      '',
      '',
      ''
    ]
  },
  {
    microName: 'Streptococcus',
    height: 4,
    col: [
      '',
      '',
      '',
      '',
      '',
      '',
      'Yoghurt, Fermented milk',
      ''
    ]
  },
  {
    microName: 'Eubacterium hallii group',
    height: 3,
    col: [
      'Carrots',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ]
  }
];

export {
  GOOD_MICRO_MUM,
  GOOD_MICRO_UNWEANED,
  MUM_GENERAL_BIFIDO,
  MUM_GENERAL_YOGURT,
  MUM_INDIVIDUAL,
  FOOD_TABLE_MICROBE,
  FOOD_TABLE_MICROBE_ADULTS
};

import {
  Image, StyleSheet, Text, View
} from '@react-pdf/renderer';
import { USER_GENDERS } from '../../../constants/DefaultValues';
import {
  A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT
} from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface GenerateContent {
  widths: number
  x: number
  y: number
  marginTitle: string
  typeColor: string
  title: string
  isDownFontSize?: boolean
  textNote: string
  textList: string[]
  textBottom?: string
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 700
  },
  link: {
    color: '#009fe3',
    textDecoration: 'underline',
    textDecorationColor: '#009fe3'
  },
  titlePage: {
    fontSize: 22,
    fontFamily: 'BlogScript',
    lineHeight: 1.54,
    color: '#009fe3',
    textAlign: 'right',
    width: 190,
    position: 'absolute',
    right: 15,
    top: 20
  },
  title: {
    fontSize: 12,
    fontFamily: 'BlogScript',
    lineHeight: 1.16
  },
  textNote: {
    fontSize: 9,
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: 8
  },
  list: {
    fontSize: 9,
    lineHeight: 1.13,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  listNumber: {
    borderRadius: '50%',
    width: 12,
    height: 12,
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 7,
    lineHeight: 0,
    flex: '0 0 12',
    position: 'relative',
    top: -2.5
  },
  listText: {
    fontSize: 9,
    lineHeight: 1.13,
    paddingLeft: 4,
    flex: '1 auto'
  },
  textBottom: {
    fontSize: 8,
    lineHeight: 1.3,
    fontStyle: 'italic'
  }
});

const TYPE_COLOR = {
  BLUE: '#61A0CD',
  ORANGE: '#FAC399',
  YELLOW: '#F2CD62',
  GREEN: '#BADD92'
};

interface Props {
  gender: number
  pageNumber: number
}

const MilestonesPageForFFQ = ({ gender, pageNumber }: Props) => {
  const generateContent = ({
    widths,
    x,
    y,
    marginTitle,
    typeColor,
    title,
    isDownFontSize = false,
    textNote,
    textList,
    textBottom = ''
  }: GenerateContent) => {
    return (
      <View
        style={{
          width: widths,
          maxWidth: widths,
          position: 'absolute',
          left: x,
          top: y
        }}
      >
        <Text style={{ ...styles.title, margin: marginTitle }}>{title}</Text>
        <Text style={{
          ...styles.textNote,
          fontSize: isDownFontSize ? styles.textNote.fontSize - 1 : styles.textNote.fontSize
        }}
        >
          {textNote}
        </Text>
        {
          textList.map((item, index) => {
            return (
              <View key={item} style={styles.list}>
                <View style={{ ...styles.listNumber, backgroundColor: typeColor }}>
                  <Text style={{ margin: 'auto' }}>0{index + 1}</Text>
                </View>
                <View
                  style={{
                    ...styles.listText,
                    fontSize: isDownFontSize ? styles.listText.fontSize - 1 : styles.listText.fontSize
                  }}
                >
                  <Text>{item}</Text>
                </View>
              </View>
            );
          })
        }
        <Text style={{
          ...styles.textBottom,
          fontSize: isDownFontSize ? styles.textBottom.fontSize - 1 : styles.textBottom.fontSize
        }}
        >
          {textBottom}
        </Text>
      </View>
    );
  };

  const textContentBlue = generateContent({
    widths: 253,
    x: 36,
    y: 30,
    marginTitle: '0 0 7 80',
    typeColor: TYPE_COLOR.BLUE,
    title: 'FIRST MONTHS',
    textNote:
      'Around 6 months of age, milk alone is no longer sufficient to meet the increased nutritional needs of your growing baby. Some children may be more ready and eager to start solid foods earlier than others. That’s the beauty of it, every child is different! Look for signs that your child is ready to start weaning, such as sitting up, holding their head upright, showing interest/watching when you eat, or reaching out for food.',
    textList: ['For baby’s first foods, try introducing blended or pureed vegetables and fruits with a smooth consistency that can be fed with a spoon, or offer cereals like baby rice porridge mixed with breast milk or formula.', 'Smooth, blended or pureed foods can help the transition between milk to solid foods while broadening the range of flavours, tastes, textures, and smells of your baby’s diet.']
  });

  const textContentYellow = generateContent({
    widths: 325,
    x: 129,
    y: 372,
    marginTitle: '0 0 7 138',
    typeColor: TYPE_COLOR.YELLOW,
    title: '6+ MONTHS',
    textNote:
      "Once you have started weaning, you can try introducing thicker purees and cereals with a bit more flavour. Your little one may be a bit messy with his or her food during mealtimes. Don't worry! They will learn to handle lumpy textures successfully.",
    textList: ['This is the time to introduce soft lumpy foods, such as mashed banana, cooked apple puree, or finger foods, including foods with “dissolvable” (melt-in-your-mouth) textures like avocado and tofu. Avoid foods that cannot be mashed with the tongue and stay lumpy after swallowing.', 'Try including a variety of vegetables, fruits, and cereals/grains, as well as small amounts of meat and/or fish. What they taste and enjoy now will influence their acceptance of foods later on. If your child refuses to eat what you prepared, stay calm! It can take 8 to 10 tries before a child accepts a new food.']
  });

  const textContentOrange = generateContent({
    widths: 248,
    x: 362,
    y: 37,
    marginTitle: '0 0 3 56',
    typeColor: TYPE_COLOR.ORANGE,
    title: '7+ MONTHS',
    textNote:
      'By now you are both (hopefully) feeling more confident with mealtimes.',
    textList: ['You can try adding small tender chunks of food into purees. This can include mashed vegetables with fish, chicken, pasta and rice. Little ones around this age are able to enjoy lumpy foods with new flavours, while working on their chewing skills.', 'Children around the age of 7 months may be offered finger foods that are soft enough to mash between the fingers, such as banana, avocado, and mango. Those around age 10 months may be ready for coarser textures, like muesli or oats porridge.']
  });

  const textContentGreen = generateContent({
    widths: 285,
    x: 547,
    y: 365,
    marginTitle: '0 0 7 67',
    typeColor: TYPE_COLOR.GREEN,
    title: '12+ MONTHS',
    isDownFontSize: true,
    textNote:
      'Your baby is now a year old! Children experience rapid growth during the first year of life. They may be constantly on the move, crawling or even walking on their own, and their personalities are starting to emerge.\n\nKeep up the good work of introducing fruits and vegetables, and other tasty, healthy foods. You may have noticed your child refusing some foods that he/she previously liked. Be patient and persevere. As frustrating as it may feel, this is a normal part of development.',
    textList: ['Remember that multiple encounters with a food (at least 8 to 10 times) may be required for children to accept it. Repeatedly exposing your child to the same food, sitting with your child and eating the same food as your child will encourage him/her to try the food again.', 'Continue to develop your child’s eating skills by introducing food consistencies and textures that promote chewing, such as chopped or lightly mashed food instead of finely blended puree. Expand your menu to include finger foods as this promotes self-feeding.']
  });

  return (
    <View
      style={{
        width: A4_FULL_HEIGHT_POINT,
        height: A4_FULL_WIDTH_POINT,
        position: 'relative'
      }}
    >
      <Image
        src="/img/pdf/ffq/bg-blob-1.png"
        style={{
          width: A4_FULL_HEIGHT_POINT,
          height: A4_FULL_WIDTH_POINT,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <Image
        src={gender === USER_GENDERS.MALE ? '/img/pdf/ffq/baby-timeline-boy.png' : '/img/pdf/ffq/baby-timeline-girl.png'}
        style={{
          width: A4_FULL_HEIGHT_POINT,
          height: gender === USER_GENDERS.MALE ? 256 : 247,
          position: 'absolute',
          top: gender === USER_GENDERS.MALE ? 115 : 122,
          left: 0
        }}
      />
      <View style={styles.titlePage}>
        <Text>MILESTONES: FOOD TEXTURE & TASTE VARIETY</Text>
      </View>
      {textContentBlue}
      {textContentYellow}
      {textContentOrange}
      {textContentGreen}
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default MilestonesPageForFFQ;

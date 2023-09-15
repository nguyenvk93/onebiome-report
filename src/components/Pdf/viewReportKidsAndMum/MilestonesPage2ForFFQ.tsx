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
    width: 220,
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

const MilestonesPage2ForFFQ = ({ gender, pageNumber }: Props) => {
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
    widths: 250,
    x: 11,
    y: 28,
    marginTitle: '0 0 7 68',
    typeColor: TYPE_COLOR.BLUE,
    title: 'FIRST MONTHS',
    textNote:
      'Oral motor skills development is key for eating and speech, and your baby has perfected the skill of suckling and swallowing over the first 6 months of life. Now is a great time to introduce small amounts of soft foods such as pureed vegetables and cereal porridge. The introduction of complementary foods during infancy supports the development of:',
    textList: [
      'Sensory perception (such as working out whether something is soft or hard)',
      'Oral skills (like chewing, sucking and swallowing)',
      'Fine motor skills (like picking up a spoon or a piece of banana)'
    ]
  });

  const textContentYellow = generateContent({
    widths: 250,
    x: 195,
    y: 380,
    marginTitle: '0 0 7 120',
    typeColor: TYPE_COLOR.YELLOW,
    title: '6+ MONTHS',
    textNote:
      'During this period, your baby is rapidly developing oral motor skills for eating. Your child might now:',
    textList: [
      'Learn how to control their gag reflex.',
      'Move food from the middle to the back of their tongue.',
      'Develop a greater range of tongue, lips and jaw movements.'
    ],
    textBottom:
      'Although it may cause a few restless nights, this will be the time when some children start to teeth. Young children have specific nutritional needs that differ from that of adults. They also have smaller tummies, which means that they cannot manage large portions of food. Ideally, young children should be fed little and often.'
  });

  const textContentOrange = generateContent({
    widths: 244,
    x: 339,
    y: 30,
    marginTitle: '0 0 7 82',
    typeColor: TYPE_COLOR.ORANGE,
    title: '7+ MONTHS',
    textNote:
      'Your baby is doing a great job learning to eat. As you notice your child becoming more confident, you can progress to foods with thicker consistency. From around 7 months, children become more skilled at:',
    textList: [
      'Clearing the spoon with their lips, by bringing the top lip down to the spoon. Hopefully, more food will end up in their mouth than on their face!',
      'Controlling jaw and tongue movements. They can now move their tongue from one side to the other.',
      'Moving food around their mouth. The first signs of controlled chewing and biting will become apparent.'
    ]
  });

  const textContentGreen = generateContent({
    widths: 252,
    x: 574,
    y: 355,
    marginTitle: '0 0 7 80',
    typeColor: TYPE_COLOR.GREEN,
    title: '12+ MONTHS',
    textNote:
      'Your child is becoming more efficient at eating! By 12 months, food becomes a main source of nutrition for your little one. Three meals per day (and nutritious snacks in between) will help keep your toddler fueled throughout the day.',
    textList: ['Biting off pieces of food, chewing and then swallowing the food safety are becoming second nature to your little one. As they develop the skills to eat, they will have greater jaw stability, and will be able to chew using full mouth and tongue movements.', 'The oral motor skills that have been acquired for eating will be fine-tuned for developing speech. By helping your child learn to love food, you would have also helped your child find his/her voice!']
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
        src="/img/pdf/ffq/bg-blob-2.png"
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
          top: gender === USER_GENDERS.MALE ? 125 : 135,
          left: 0
        }}
      />
      <View style={styles.titlePage}>
        <Text>{'MILESTONES:\nORAL MOTOR SKILLS'}</Text>
      </View>
      {textContentBlue}
      {textContentYellow}
      {textContentOrange}
      {textContentGreen}
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default MilestonesPage2ForFFQ;

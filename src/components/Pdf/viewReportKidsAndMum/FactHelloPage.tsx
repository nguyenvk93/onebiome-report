import { View, Text, Image } from '@react-pdf/renderer';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT, LINE_HEIGHT_NORMAL_SENTENCE } from '../../../constants/PdfConstants';
import FactHeader from './Components/FactHeader';
import PageNumber from './Components/PageNumber';

const FactHelloPage = ({ pageNumber }: any) => {
  const styleNote = {
    fontFamily: 'Gotham',
    fontSize: 14,
    lineHeight: 1.15,
    color: '#fff'
  };

  const styleTextBody = {
    font: 'Gotham',
    fontSize: 14,
    color: '#000',
    lineHeight: LINE_HEIGHT_NORMAL_SENTENCE
  };

  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <FactHeader title="Fact About Our Microbiome" />
      <View
        style={{
          position: 'relative',
          marginTop: 18
        }}
      >
        <Image
          src="/img/pdf/dialog_poop_reduce.jpg"
          style={{
            width: A4_FULL_WIDTH_POINT,
            height: 208
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 26,
            left: 23
          }}
        >
          <Text
            style={{
              marginLeft: 55,
              lineHeight: 1,
              fontSize: 24,
              fontFamily: 'BlogScript',
              color: '#fff'
            }}
          >
            OH, HELLO THERE!
          </Text>
          <Text style={styleNote}>
            {'\nI am considered a biological waste – but'}
          </Text>
          <Text style={{ ...styleNote, marginLeft: 40 }}>
            I am also a reflection of your gut
          </Text>
          <Text style={{ ...styleNote, marginLeft: 7 }}>
            microbiome! Did you know that I contain
          </Text>
          <Text style={{ ...styleNote, marginLeft: 2 }}>
            a multitude of microbes that can be seen as
          </Text>
          <Text style={{ ...styleNote, marginLeft: 6 }}>
            valuable data? These data can reveal the
          </Text>
          <Text style={{ ...styleNote, marginLeft: 78 }}>
            state of your health.
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'relative',
          marginLeft: 30,
          marginTop: 15
        }}
      >
        <Image
          src="/img/pdf/face_microbes_reduce.png"
          style={{
            position: 'absolute',
            left: 410,
            top: 200,
            width: 230,
            height: 198
          }}
        />
        <Text
          style={{
            fontFamily: 'BlogScript',
            fontSize: 16,
            color: '#009FE3',
            lineHeight: LINE_HEIGHT_NORMAL_SENTENCE
          }}
        >
          {'OUR MICROBIOME IS SPECIFIC TO EACH OF US, LIKE A\nFINGERPRINT. IT EVOLVES AS WE AGE, AND IS GREATLY\nINFLUENCED BY THE FOOD WE EAT.\n\n'}
        </Text>
        <Text style={styleTextBody}>
          {'In fact, did you know that our microbiome greatly influences our\nimmunity? It interacts closely with our immune system as 70-80% of our\nbody’s immune cells are located in our gut.\n\n'}
        </Text>
        <Text style={styleTextBody}>
          {'We say that we are what we eat, but we are also what our microbes do\nwith what we eat. There is strong scientific evidence demonstrating that\nwhat we eat impacts our microbiome and subsequently our health.\n\n'}
        </Text>
        <Text style={styleTextBody}>
          {'Microbiome data can be translated into practical tips that will\nallow you to make better choices for your health.\n\n'}
        </Text>
        <Text style={styleTextBody}>
          {'The type of microbes that we have in our gut determines\nthe way we respond to the food we eat.\n\n'}
        </Text>
        <Text style={styleTextBody}>
          {'There is now an exciting and fast-growing area of research\npowered by microbiome science called personalised nutrition.\n\n'}
        </Text>
        <Text style={styleTextBody}>
          {'Doctors and scientists believe that harnessing the gut microbiome\nthrough targeted nutrition strategies may optimise overall health, or\nperhaps one day empower us with the ability to prevent a disease from\ndeveloping or becoming worse. There is much work to be done in this\nfield - nevertheless, new discoveries and progress are being made.\n\n'}
        </Text>
        <Text style={styleTextBody}>
          {'In short, our food choice determines how our microbiome interacts with\nus (or specifically, our body organs), and this dialogue between our\nmicrobes and us is key to sustaining our overall good health.\n\n'}
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default FactHelloPage;

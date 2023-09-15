import { Image, Text, View } from '@react-pdf/renderer';
import { USER_SAMPLE_ROLES } from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import Header from './Components/Header';
import PageNumber from './Components/PageNumber';

interface Props {
  role: number
  pageNumber: number
}

const NatureYourMicrobiomePage = ({ role, pageNumber }: Props) => {
  let urlImage;
  let headerText;
  if (role === USER_SAMPLE_ROLES.BABY) {
    urlImage = '/img/pdf/nutrue_your_microbiome_Baby.jpg';
    headerText = "Tips to Nurture Your Child's Microbiome";
  } else if (role === USER_SAMPLE_ROLES.MOTHER_TO_BE) {
    urlImage = '/img/pdf/nutrue_your_microbiome_Mom20201112.jpg';
    headerText = 'Tips to Nurture Your Microbiome';
  }
  return (
    <View
      style={{
        width: A4_FULL_WIDTH_POINT,
        height: A4_FULL_HEIGHT_POINT,
        position: 'relative'
      }}
    >
      <Header title={headerText} />
      <Image
        src={urlImage}
        style={{
          width: A4_FULL_WIDTH_POINT,
          height: A4_FULL_HEIGHT_POINT,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <View
        style={{
          position: 'absolute',
          left: 275,
          top: 298
        }}
      >
        <View
          style={{
            position: 'relative'
          }}
        >
          <Text
            style={{
              fontFamily: 'BlogScript',
              fontSize: 17,
              lineHeight: 1.4,
              color: '#65C379',
              textAlign: 'center'
            }}
          >
            {'OUR MICROBIAL FRIENDS LOVE\nA DIVERSE, HEALTHY DIET CONSISTING\nOF FOODS THAT ARE RICH IN FIBRE,\nPHYTONUTRIENS, '}
            {' AND OMEGA-3\nFATTY ACIDS,* AND FOODS CONTAINING\nFERMENTS/PROBIOTICS.'}
          </Text>
          <Text
            style={{
              fontFamily: 'BlogScript',
              color: '#65C379',
              textAlign: 'center',
              fontSize: 17,
              position: 'absolute',
              top: 65,
              left: 166
            }}
          >+
          </Text>
          <Text
            style={{
              fontFamily: 'BlogScript',
              color: '#65C379',
              textAlign: 'center',
              fontSize: 17,
              position: 'absolute',
              top: 111,
              left: 255
            }}
          >#
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          left: 190,
          top: 477
        }}
      >
        <Text
          style={{
            fontFamily: 'BlogScript',
            fontSize: 17,
            lineHeight: 1.4,
            color: '#705D91',
            textAlign: 'center'
          }}
        >
          {'OUR MICROBIAL FRIENDS DO\nNOT ENJOY PROCESSED AND\nULTRA-PROCESSED FOODS.\nHOWEVER, IT IS OKAY TO INDULGE\nIN THEM ONCE IN A WHILE.'}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          right: 0,
          top: 720,
          paddingRight: 10
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            justifyContent: 'flex-end',
            marginBottom: 7
          }}
        >
          <Text
            style={{
              fontFamily: 'Gotham',
              fontSize: 8,
              lineHeight: 1.4,
              color: '#5E5E5E',
              position: 'absolute',
              left: 87,
              top: -2
            }}
          >+
          </Text>
          <Text
            style={{
              fontFamily: 'Gotham',
              fontSize: 8,
              lineHeight: 1.4,
              color: '#5E5E5E'
            }}
          >
            {'Phytonutrients are natural chemicals or compounds\nproduced by plants (e.g. polyphenols) that are\nbeneficial to the body.'}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            justifyContent: 'flex-end',
            marginBottom: 7
          }}
        >
          <Text
            style={{
              fontFamily: 'Gotham',
              fontSize: 8,
              lineHeight: 1.4,
              color: '#5E5E5E'
            }}
          >
            {'*Potential source of prebiotics. A prebiotic is defined as “a\nsubstrate that is selectively utilised by host microorganisms\nconferring a health benefit”.'}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            justifyContent: 'flex-end',
            marginBottom: 7
          }}
        >
          <Text
            style={{
              fontFamily: 'Gotham',
              fontSize: 5,
              lineHeight: 1.4,
              color: '#5E5E5E',
              position: 'absolute',
              left: -4,
              top: -2
            }}
          >#
          </Text>
          <Text
            style={{
              fontFamily: 'Gotham',
              fontSize: 8,
              lineHeight: 1.4,
              color: '#5E5E5E'
            }}
          >
            {'Probiotics are defined as “live microorganisms which when administered in\nadequate amounts confer a health benefit on the host”.'}
          </Text>
        </View>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default NatureYourMicrobiomePage;

/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Text,
  View,
  Link,
  Image
} from '@react-pdf/renderer';
import { USER_SAMPLE_ROLES } from '../../../constants/DefaultValues';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

interface Props {
  member: any
  pageNumber: number
}

const MicrobiomeCompositionPage = ({ member, pageNumber }: Props) => {
  const { role } = member;
  // check mumy or baby
  const howStr = role === USER_SAMPLE_ROLES.MOTHER_TO_BE ? 'your' : 'your child’s';
  const dearStr = role === USER_SAMPLE_ROLES.MOTHER_TO_BE ? 'MUM,' : 'MUM & DAD,';
  const poopStr = role === USER_SAMPLE_ROLES.MOTHER_TO_BE ? 'your poop sample, please visit' : 'your child’s poop sample, please visit';
  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <Image
        src="/img/pdf/microbiome_composition_bg.jpg"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <View style={{
        position: 'absolute',
        left: 52,
        top: 259
      }}
      >
        <Text style={{
          fontFamily: 'BlogScript',
          fontSize: 60,
          color: '#fff',
          lineHeight: 1
        }}
        >{'MICROBIOME\nCOMPOSITION'}
        </Text>
        <Text style={{
          fontFamily: 'Gotham',
          fontSize: 18,
          color: '#fff'
        }}
        >{`What does ${howStr} microbiome\nprofile look like?`}
        </Text>
      </View>
      <View style={{
        position: 'absolute',
        left: 259,
        top: 645
      }}
      >
        <Text style={{
          fontFamily: 'BlogScript',
          fontSize: 22,
          color: '#00CDCA',
          lineHeight: 1.5
        }}
        >{`DEAR ${dearStr}`}
        </Text>
        <Text style={{
          fontFamily: 'Gotham',
          fontSize: 14,
          color: '#000',
          lineHeight: 1.29
        }}
        >{`If you are interested in finding out more\nabout the methods used to analyse\n${poopStr}\n`}
          <Link
            src="/kids/what-happens"
            style={{
              fontFamily: 'Gotham',
              fontSize: 14,
              textDecoration: 'underline',
              textDecorationColor: '#0199DA',
              color: '#0199DA'
            }}
          ><Text>www.onebiome.com</Text>
          </Link>
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default MicrobiomeCompositionPage;

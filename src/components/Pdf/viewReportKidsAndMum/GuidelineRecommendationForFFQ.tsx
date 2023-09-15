/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Image, StyleSheet, Text, View, Link
} from '@react-pdf/renderer';
import {
  A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT
} from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

const styles = StyleSheet.create({
  viewBlock: {
    backgroundColor: '#DEF1FF',
    fontSize: 12,
    lineHeight: 1.4,
    margin: '125 35 0 35',
    padding: '20 30'
  },
  bold: {
    fontWeight: 700
  },
  link: {
    color: '#009fe3',
    textDecoration: 'underline',
    textDecorationColor: '#009fe3'
  },
  footer: {
    position: 'absolute',
    top: A4_FULL_HEIGHT_POINT - 32,
    left: 0,
    paddingHorizontal: 35
  }
});

const GuidelineRecommendationForFFQ = ({ pageNumber }: any) => {
  return (
    <View
      style={{
        width: A4_FULL_WIDTH_POINT,
        height: A4_FULL_HEIGHT_POINT,
        position: 'relative'
      }}
    >
      <Image
        src="/img/pdf/ffq/header_ffq_2.png"
        style={{
          width: A4_FULL_WIDTH_POINT,
          height: 256,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <View style={styles.viewBlock}>
        <Text>
          Dear parents,
          {'\n\n'}
          Do allergies run in your family? Fret not. There are ways to reduce the likelihood of allergy development in at-risk infants (i.e. infants with at least one parent and/or a sibling who is allergic).
          {'\n\n'}
          According to paediatricians who specialise in treating allergic conditions, it is possible to safely introduce peanuts and eggs in your child’s diet:
          {'\n\n\n'}
          <Text style={styles.bold}>Guideline recommendation</Text>
          {'\n\n'}
          For babies with a family history of atopy or mild eczema, complementary foods, such as egg and peanut should be introduced EARLY, one at a time, no earlier than 4 months and up to 6 months once they are able to tolerate solids.\n\nIn infants with moderate to severe eczema, a pre-existing food allergy should be considered and may need to be excluded by allergy testing, such as specific IgE or skin prick test (SPT). If allergy tests are negative, egg and peanut may be introduced. If allergy testing is positive, the food should be avoided, and the food allergy should be monitored by repeating allergy testing after at least 6 months. Alternatively, an oral provocation test under optimal safety conditions may be considered if results of allergy testing are borderline or only slightly positive.
          {'\n\n'}
          In otherwise healthy infants, the normal weaning practice is to introduce peanuts and eggs between the ages of 6 to 10 months.
          {'\n\n'}
          If you have any concerns about peanut and egg allergy, please do discuss with your healthcare professional before introducing them to your child.
          {'\n\n'}
          For the complete guide to weaning at-risk infants, please go to [
          <Link
            src="https://www.ams.edu.sg/view-pdf.aspx?file=media%5C5649_fi_819.pdf&ofile=Consensus+Statement+on+Primary+Prevention+of+Allergy+in+At-Risk+Infants+(FINAL).pdf"
            style={styles.link}
          >
            <Text>Link</Text>
          </Link>
          ].
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ fontWeight: 700, fontSize: 8, marginBottom: 3 }}>
          Reference:
        </Text>
        <Text style={{ fontSize: 8, lineHeight: 1.5 }}>
          Academy of Medicine Singapore. Consensus Statement on Primary Prevention of Allergy in At-Risk Infants. December 2019. [
          <Link
            src="https://www.ams.edu.sg/view-pdf.aspx?file=media%5C5649_fi_819.pdf&ofile=Consensus+Statement+on+Primary+Prevention+of+Allergy+in+At-Risk+Infants+(FINAL).pdf"
            style={styles.link}
          >
            <Text>Link</Text>
          </Link>
          ]
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default GuidelineRecommendationForFFQ;

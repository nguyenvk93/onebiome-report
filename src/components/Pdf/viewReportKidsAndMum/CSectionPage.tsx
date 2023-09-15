import {
  View, Text, Image, StyleSheet
} from '@react-pdf/renderer';
import { A4_FULL_HEIGHT_POINT, A4_FULL_WIDTH_POINT } from '../../../constants/PdfConstants';
import PageNumber from './Components/PageNumber';

const styles = StyleSheet.create({
  bold: {
    fontWeight: 700
  },
  italic: {
    fontStyle: 'italic'
  },
  link: {
    color: '#009fe3',
    textDecoration: 'underline',
    textDecorationColor: '#009fe3'
  },
  title: {
    fontFamily: 'BlogScript',
    fontSize: 30,
    lineHeight: 1.8,
    color: '#009FE3',
    paddingLeft: 23,
    paddingTop: 55,
    marginBottom: 20
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    marginBottom: 17
  }
});

const CSectionPage = ({ pageNumber }: any) => {
  return (
    <View style={{ width: A4_FULL_WIDTH_POINT, height: A4_FULL_HEIGHT_POINT, position: 'relative' }}>
      <Image
        src="/img/pdf/microbiome_bg_top.png"
        style={{
          width: A4_FULL_WIDTH_POINT,
          height: 346,
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <Text style={styles.title}>
        RISK FACTORS FOR CHILDHOOD INFECTIONS AND NON-COMMUNICABLE DISEASES
      </Text>
      <View style={{ paddingLeft: 23, paddingRight: 35 }}>
        <Text style={styles.text}>
          A growing body of evidence indicates an association between C-section births and an increased risk of developing asthma, allergies, and other non-communicable diseases, such as childhood obesity and type 2 diabetes in adulthood. Children who were born by C-section were also found to have increased infection-related hospitalisations, particularly for respiratory, gastrointestinal and viral infections.
        </Text>
        <Text style={styles.text}>
          Our predisposition to develop allergies depends on a combination of genetic and environmental determinants.
        </Text>
        <Text style={styles.text}>
          Exposure to antibiotics, C-section births, low maternal fibre intake during pregnancy, and a weaning diet that is low in fibre have been identified as risk factors for allergy in early life. Each of these factors has been associated with a compromised microbiome. These factors, among others (e.g. family history of allergy, natural environmental microbial exposure, pollution), contribute to an increased risk of allergy.
        </Text>
        <Text style={styles.text}>
          Studies have indicated that a compromised microbiome resulting from C-section delivery is a risk factor for childhood allergies. Infants born vaginally inherit microbes such as <Text style={styles.italic}>Bifidobacterium</Text> and <Text style={styles.italic}>Bacteroides</Text>, which help infants digest breast milk sugars. Conversely, infants born by C-section do not inherit these microbes, and acquire microbes from the surrounding birth environment.
        </Text>
        <Text style={styles.text}>
          Several studies have described the presence of opportunistic pathogens belonging to the Enterobacteriaceae family, such as <Text style={styles.italic}>Klebsiella</Text>, in the gut microbiome of infants born by C-section. The presence of these opportunistic pathogens have been associated with the production of pro-inflammatory mediators, the acquisition of antimicrobial resistance genes, and the development of childhood allergy. Investigations are underway to ascertain how alterations in the gut microbiome can affect the mechanisms of allergic sensitisation.
        </Text>
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default CSectionPage;

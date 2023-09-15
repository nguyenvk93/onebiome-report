/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  View, Text, Image, StyleSheet, Link
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
    color: '#5d2a8b',
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 1.5,
    marginBottom: 17
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    marginBottom: 15
  },
  note: {
    color: '#5E5E5E',
    fontSize: 8,
    fontStyle: 'italic',
    lineHeight: 1.5
  },
  rfTitle: {
    fontSize: 8,
    fontWeight: 700,
    textDecoration: 'underline',
    marginBottom: 10
  },
  rfText: {
    fontSize: 8,
    lineHeight: 1.5,
    marginBottom: 10
  }
});

const CSectionPage2 = ({ pageNumber }: any) => {
  return (
    <View
      style={{
        width: A4_FULL_WIDTH_POINT,
        height: A4_FULL_HEIGHT_POINT,
        position: 'relative',
        padding: '100 30 0 30'
      }}
    >
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
        How can the medical and scientific community tackle the risks associated with a compromised microbiome in early life?
      </Text>
      <Text style={styles.text}>
        The first 1000 days of life offers a critical window of opportunity to shape lifelong health. Early-life nutrition plays a key role in reducing disease risk.
      </Text>
      <Text style={{ ...styles.text, marginBottom: 0 }}>
        The science of early-life microbiome, early-life nutrition and human milk has been a source of inspiration for scientists to develop nutritional solutions – including prebiotics*, and
      </Text>
      <View
        style={{
          ...styles.text,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          position: 'relative',
          marginBottom: 0
        }}
      >
        <View>
          <Text>synbiotics</Text>
        </View>
        <View>
          <Text style={{ fontSize: 6 }}># </Text>
        </View>
        <View>
          <Text>to nurture the early-life microbiome. Studies have shown that nutritional</Text>
        </View>
      </View>
      <Text style={styles.text}>
        supplementation with probiotics or synbiotics could be a solution for restoring a compromised microbiome in C-section and preterm births. Well-designed human intervention trials are needed to determine the efficacy of probiotic and/or synbiotic supplementation and their long-term health benefits in infants born with a compromised microbiome.
      </Text>
      <Text style={styles.note}>
        *A prebiotic is defined as “a substrate that is selectively utilised by host microorganisms conferring a health benefit”.
      </Text>
      <Text style={styles.note}>
        ^Probiotics are defined as “ live microorganisms which when administered in adequate amounts confer a health benefit on the host”.
      </Text>
      <View
        style={{
          ...styles.note,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          position: 'relative',
          marginBottom: 15
        }}
      >
        <View>
          <Text style={{ fontSize: 4 }}>#</Text>
        </View>
        <View>
          <Text>Synbiotics refer to a combination of prebiotics and probiotics.</Text>
        </View>
      </View>
      <Text style={{ fontWeight: 700, fontSize: 12, marginBottom: 20 }}>
        Reference:
      </Text>
      <Text style={styles.rfTitle}>Short- and long-term risks of C-section delivery</Text>
      <Text style={styles.rfText}>
        Betran AP,&nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;WHO statement on caesarean section rates.&nbsp;
        <Text style={styles.italic}>BJOG</Text>
        . 2016;123:667-70. [
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/26681211/"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <Text style={styles.rfTitle}>Association of C-section with infections and non-communicable diseases</Text>
      <Text style={styles.rfText}>
        Chavarro JE,&nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;Association of birth by cesarean delivery with obesity and type 2 diabetes among adult women.{'\n'}
        <Text style={styles.italic}>JAMA Netw Open. </Text>
        2020;3:e202605. [
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/32282045/"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <Text style={styles.rfText}>
        Miller JE,&nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;Mode of birth and risk of infection-related hospitalisation in childhood: A population cohort study of 7.17 million births from 4 high-income countries.&nbsp;
        <Text style={styles.italic}>PLoS Med.</Text>
        &nbsp;2020;17:e1003429. [
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/33211696/"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <Text style={styles.rfText}>
        Mueller NT,&nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;Prenatal exposure to antibiotics, cesarean section and risk of childhood obesity.&nbsp;
        <Text style={styles.italic}>Int J Obes (Lond).</Text>
        &nbsp;2015;39:665-70. [
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/25298276"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <Text style={styles.rfText}>
        Sevelsted A,&nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;Cesarean section and chronic immune disorders.&nbsp;
        <Text style={styles.italic}>Pediatrics</Text>
        &nbsp;2015;135:e92-8. [
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/25452656/"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <Text style={styles.rfTitle}>Effects of C-section on the gut microbiome</Text>
      <Text style={styles.rfText}>
        Busi SB,&nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;Persistence of birth mode-dependent effects on gut microbiome composition, immune system stimulation\nand antimicrobial resistance during the first year of life.&nbsp;
        <Text style={styles.italic}>ISME Commun.</Text>
        &nbsp;2021;1:8. [
        <Link
          src="https://www.nature.com/articles/s43705-021-00003-5"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <Text style={styles.rfText}>
        Reyman M,&nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;Impact of delivery mode-associated gut microbiota dynamics on health in the first year of life.&nbsp;
        <Text style={styles.italic}>Nat Commun.</Text>
        &nbsp;2019;10:4997. [
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/31676793/"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <Text style={styles.rfText}>
        Shao Y,&nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;Stunted microbiota and opportunistic pathogen colonization in caesarean-section birth.&nbsp;
        <Text style={styles.italic}>Nature.</Text>
        &nbsp;2019;574:117-21. [
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/31534227/"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <Text style={styles.rfText}>
        Stokholm J,&nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;Cesarean section changes neonatal gut colonization.&nbsp;
        <Text style={styles.italic}>J Allergy Clin Immunol.</Text>
        &nbsp;2016;138:881-9.e2. [
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/27045582/"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <Text style={styles.rfText}>
        Martin R,&nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;Early-life events, including mode of delivery and type of feeding, siblings and gender, shape the developing gut microbiota.&nbsp;
        <Text style={styles.italic}>PLoS One.</Text>
        &nbsp;2016;138:881-9.e2. [
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/27362264/"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <Text style={styles.rfTitle}>Probiotics in children born by C-section</Text>
      <Text style={styles.rfText}>
        Kuitunen M,&nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;Probiotics prevent IgE-associated allergy until age 5 years in cesarean-delivered children but not in the total cohort.&nbsp;
        <Text style={styles.italic}>J Allergy Clin Immunol.</Text>
        &nbsp;2009;123:335-41. [
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/19135235/"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <Text style={styles.rfTitle}>Synbiotics in children born by C-section</Text>
      <Text style={styles.rfText}>
        Chua MC,nbsp;
        <Text style={styles.italic}>et al.</Text>
        &nbsp;Effect of synbiotic on the gut microbiota of cesarean delivered infants: a randomized, double-blind, multicenter study.&nbsp;
        <Text style={styles.italic}>J Pediatr Gastroenterol Nutr.</Text>
        &nbsp;2017;65:102-6. [
        <Link
          src="https://pubmed.ncbi.nlm.nih.gov/28644357/"
          style={styles.link}
        >
          <Text>Link</Text>
        </Link>
        ]
      </Text>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

export default CSectionPage2;

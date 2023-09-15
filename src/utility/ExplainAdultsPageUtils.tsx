import { Text, View } from '@react-pdf/renderer';
import {
  MUM_GENERAL_BIFIDO,
  MUM_GENERAL_YOGURT,
  MUM_INDIVIDUAL
} from './MicrobeUtil';

const getExplainContent = (micro: any) => {
  const result = [];

  const boldText = <Text style={{ fontWeight: 'bold', fontStyle: 'italic', color: '#009FE3' }}>{micro}</Text>;

  switch (micro) {
    case 'Bifidobacterium':
      result.push({
        microName: 'Bifidobacterium',
        rowNumber: 10,
        text: (
          <Text>
            {'• Indirectly converts omega-3 fatty acids present in fish, seafood and nuts, by cooperating with '}
            <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Faecalibacterium</Text>
            {' for instance, into beneficial biochemical molecules (e.g. butyrate) to sustain good health.'}
          </Text>
        )
      });
      result.push({
        microName: 'Bifidobacterium',
        rowNumber: 3,
        text: (
          <Text>
            {'• '}
            {boldText}
            {' can be found in dairy products, particularly in fermented milk (curds and kefir), cheese, and yoghurt.'}
          </Text>
        )
      });
      result.push({
        microName: 'Bifidobacterium',
        rowNumber: 3,
        text: (
          <Text>
            {'• Specific strains of '}
            {boldText}
            {' species are commonly added to probiotic foods and probiotic/synbiotic supplements too.'}
          </Text>
        )
      });
      result.push({
        microName: 'Bifidobacterium',
        rowNumber: 6,
        text: (
          <View style={{ position: 'relative' }}>
            <Text>
              {'• Research shows that consuming '}
              {boldText}
              {' is associated with beneficial effects for various digestive problems, including lactose intolerance and antibiotic-related diarrhoea  '}
              {'. Studies have demonstrated that the consumption of fermented milk enriched with '}
              {boldText}
              {' improved digestive well-being and reduced gas-related symptoms, such as bloating, abdominal distension, a rumbling stomach and flatulence after a starchy meal   .'}
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 8,
                  position: 'absolute',
                  bottom: 51,
                  left: 127
                }}
              >
                1
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 6,
                left: 251
              }}
            >
              <Text
                style={{
                  fontSize: 8

                }}
              >
                2,3
              </Text>
            </View>
          </View>
        )
      });

      result.push({
        microName: 'Bifidobacterium',
        rowNumber: 9,
        text: (
          <View style={{ position: 'relative' }}>
            <Text>
              {'• The benefits reaped from consuming '}
              {boldText}
              {' are strain-specific, i.e. some bifidobacterial strains are effective while others are not. One study reported that consumption of yogurts containing specific '}
              {boldText}
              {' strains is associated with decreased body fat and changes in the gut microbiome, including a transient increase of the yogurt’s '}
              {boldText}
              ’s strains in the gut microbiome  .
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 8,
                  position: 'absolute',
                  bottom: 6,
                  left: 57
                }}
              >4
              </Text>
            </View>
          </View>
        )
      });
      break;
    case 'Faecalibacterium':
      result.push({
        microName: 'Faecalibacterium',
        rowNumber: 8,
        text: (
          <Text>
            {'• '}
            {boldText}
            {' has been described as one of our key microbial friends.'}
          </Text>
        )
      });
      result.push({
        microName: 'Faecalibacterium',
        rowNumber: 6,
        text: (
          <Text>
            {'• There is a growing body of evidence that indicates that '}
            {boldText}
            {' is associated with a healthy gut and a higher quality of life in terms of mental and physical well-being. '}
            {boldText}
            {' has the ability to produce anti-inflammatory molecules such as butyrate, which plays a role in regulating our immune system.'}
          </Text>
        )
      });
      result.push({
        microName: 'Faecalibacterium',
        rowNumber: 2,
        text: (
          <Text>
            {'• Studies demonstrate that following a Mediterranean diet can boost '}
            {boldText}
          </Text>
        )
      });
      break;
    case 'Roseburia':
      result.push({
        microName: 'Roseburia',
        rowNumber: 10,
        text: (
          <Text>
            • This is a microbial friend that directly converts fibres in fruits, vegetables, legumes, and grains into beneficial biochemical molecules, such as butyrate, to sustain good health.
          </Text>
        )
      });
      result.push({
        microName: 'Roseburia',
        rowNumber: 4,
        text: (
          <Text>
            {'• '}
            {boldText}
            {' loves the Mediterranean diet and walnuts. It is associated with gut health and according to preclinical studies, may have a role in maintaining healthy blood vessels.'}
          </Text>
        )
      });
      result.push({
        microName: 'Roseburia',
        rowNumber: 1,
        text: (<Text>• Scientists are investigating its potential application as a probiotic.</Text>)
      });
      break;
    case 'Streptococcus':
      result.push({
        microName: 'Streptococcus',
        rowNumber: 10,
        text: (
          <Text>
            {'• '}
            {boldText}
            {' can be found in dairy products such as yoghurt/fermented milk. The presence of '}
            {boldText}
            {' in dairy products is known to help our body digest lactose.'}
          </Text>
        )
      });
      break;
    case 'Lactobacillus':
      result.push({
        microName: 'Lactobacillus',
        rowNumber: 11,
        text: (
          <Text>
            {'• '}
            {boldText}
            {' is a microbial friend that inhabits different parts of the human body (such as the stomach, small intestine, colon, and vagina). It has the ability to produce molecules that keep bad microbes at bay. Its presence is associated with a healthy gut and healthy vagina.'}
          </Text>
        )
      });
      result.push({
        microName: 'Lactobacillus',
        rowNumber: 4,
        text: (
          <Text>
            {'• '}
            {boldText}
            {' can be found in dairy products such as yogurt/fermented milk, baby foods, and probiotic supplements. The presence of '}
            {boldText}
            {' in dairy products is known to help our body digest lactose.'}
          </Text>
        )
      });
      result.push({
        microName: 'Lactobacillus',
        rowNumber: 6,
        text: (
          <Text>
            {'• '}
            {'Consuming fermented milk as well as foods rich in fibre and polyphenols is known to boost '}
            {boldText}
            {'. Scientists are studying how the consumption of foods/supplements that contain '}
            {boldText}
            {' may provide health benefits. These benefits are strain-specific} i.e. some '}
            {boldText}
            {' strains are effective while others are not.'}
          </Text>
        )
      });
      result.push({
        microName: 'Lactobacillus',
        rowNumber: 5,
        text: (
          <Text>
            {'• '}
            {'Antibiotics are essential for treating bacterial infections, but their use have been associated with alterations in gut microbiome leading to antibiotic-induced diarrhoea. A recent study shows that consuming fermented milk containing multiple strains of '}
            {boldText}
            {' could help restore healthy microbiome composition after a course of antibiotics.'}
          </Text>
        )
      });
      break;
    case 'Akkermansia':
      result.push({
        microName: 'Akkermansia',
        rowNumber: 11,
        text: (
          <Text>
            {'• '}
            {boldText}
            {' has been described as an important microbial friend that strengthens our gut wall. This wall acts as a physical barrier that protects our body against the invasion of infectious pathogens and harmful molecules inside our gut.'}
          </Text>
        )
      });
      result.push({
        microName: 'Akkermansia',
        rowNumber: 5,
        text: (
          <Text>
            {'• '}
            {'Scientists observed that '}
            {boldText}
            {' is found in lean individuals and is depleted in overweight, obese, and untreated type 2 diabetic individuals. Research is ongoing to determine the potential role of '}
            {boldText}
            {' as a candidate microbe to prevent or treat conditions such as obesity.'}
          </Text>
        )
      });
      result.push({
        microName: 'Akkermansia',
        rowNumber: 2,
        text: (
          <Text>
            {'• '}
            {'Studies indicate that '}
            {boldText}
            {' can be nurtured with fish oil and dietary polyphenols.'}
          </Text>
        )
      });
      break;
    case 'Coprococcus':
      result.push({
        microName: 'Coprococcus',
        rowNumber: 10,
        text: (
          <Text>
            • This is a microbial friend that directly converts fibres in fruits, vegetables, legumes, and grains into beneficial biochemical molecules, such as butyrate, to sustain good health.
          </Text>
        )
      });
      result.push({
        microName: 'Coprococcus',
        rowNumber: 1,
        text: (
          <Text>
            {'• '}
            {boldText}
            {' is an omega-3 food lover.'}
          </Text>
        )
      });
      result.push({
        microName: 'Coprococcus',
        rowNumber: 2,
        text: (
          <Text>
            {'• Same as '}
            <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Faecalibacterium</Text>
            {', '}
            {boldText}
            {' is associated with higher quality of life in terms of mental health and depleted in individuals with depression'}
          </Text>
        )
      });
      break;
    default:
      break;
  }
  return result;
};

const getIndicateContent = ({ goodMicrobeData }: any) => {
  const content = [];
  const microbeData = goodMicrobeData;

  const generalBifidoStory: Array<any> = [];
  const generalYagurtStory: Array<any> = [];
  const individualStory: Array<any> = [];
  microbeData.forEach((micro: any) => {
    if (MUM_GENERAL_BIFIDO.includes(micro.name)) {
      generalBifidoStory.push(`${micro.name}`);
    }
    if (MUM_GENERAL_YOGURT.includes(micro.name)) {
      generalYagurtStory.push(`${micro.name}`);
    }
    if (MUM_INDIVIDUAL.includes(micro.name)) {
      individualStory.push(micro.name);
    }
  });

  if (generalBifidoStory.length) {
    content.push({
      microName: generalBifidoStory,
      rowNumber: 10,
      text: (<Text>• Directly or indirectly convert fibres and phytonutrients present in fruits, vegetables, legumes, and grains into beneficial biochemical molecules, such as butyrate, to sustain good health.</Text>)
    });
    content.push({
      microName: generalBifidoStory,
      rowNumber: 4,
      text: (<Text>• Butyrate is a short-chain fatty acid that regulates our immune system. Butyrate is also a source of energy for the cells lining our gut and helps strengthen the gut wall. This lining acts as a physical barrier that protects our body against the invasion of infectious microbes and harmful molecules inside our gut.</Text>)
    });
  }

  if (generalYagurtStory.length) {
    // todo new story
  }

  if (individualStory.length) {
    individualStory.forEach((micro) => {
      const contentResult = getExplainContent(micro);
      contentResult.forEach((result) => {
        content.push(result);
      });
    });
  }
  return content;
};

export default getIndicateContent;

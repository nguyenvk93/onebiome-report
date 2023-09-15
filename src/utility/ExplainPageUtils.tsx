import { Text } from '@react-pdf/renderer';
import { USER_SAMPLE_ROLES, DELIVERY_MODE } from '../constants/DefaultValues';
import { getAgeChildMonth } from './ProfileUtils';
import {
  MUM_GENERAL_BIFIDO,
  MUM_GENERAL_YOGURT,
  MUM_INDIVIDUAL
} from './MicrobeUtil';

const microNameStyle = {
  fontSize: 14,
  color: '#161616',
  lineHeight: 1.29,
  italics: true
};

const storyStyle = {
  fontSize: 14,
  color: '#161616',
  lineHeight: 1.29
};

const getExplainContent = (micro: string, isBaby: boolean, timePoint: string, monthTimePoint: number) => {
  const result = [];

  const boldText = <Text style={{ fontWeight: 700, fontStyle: 'italic' }}>{micro}</Text>;

  switch (micro) {
    case 'Bifidobacterium':
      result.push({
        microName: 'Bifidobacterium',
        rowNumber: 8,
        text: (
          <Text style={microNameStyle}>
            {'Indirectly converts omega-3 fatty acids present in fish, seafood and nuts, by cooperating with '}
            <Text style={{ fontWeight: 700, fontStyle: 'italic' }}>Faecalibacterium</Text>
            {' for instance, into beneficial biochemical molecules (e.g. butyrate) to sustain good health.\n\n'}
          </Text>
        )
      });
      result.push({
        microName: 'Bifidobacterium',
        rowNumber: 6,
        text: (
          <Text style={microNameStyle}>
            {boldText}
            {' is one of the best microbial friends of children. It is passed down from generation to generation through the maternal lineage, from grandmother to mother to granddaughter.\n\n'}
          </Text>
        )
      });
      if (!isBaby) {
        result.push({
          microName: 'Bifidobacterium',
          rowNumber: 4,
          text: (
            <Text style={microNameStyle}>
              {'Yes, Mum. You will be transferring your '}
              {boldText}
              {' to your child during birth and breastfeeding!\n\n'}
            </Text>
          )
        });
      } else if (getAgeChildMonth({ timePoint, monthTimePoint }) < 24) {
        result.push({
          microName: 'Bifidobacterium',
          rowNumber: 6,
          text: (
            <Text style={microNameStyle}>
              {'Yes, Mum. You transferred your '}
              {boldText}
              {' to your child during birth and breastfeeding. And if you are still breastfeeding your child, the sugars present in your breast milk will nurture your child’s '}
              {boldText}
              {'.\n\n'}
            </Text>
          )
        });
      }
      if (isBaby && getAgeChildMonth({ timePoint, monthTimePoint }) >= 24) {
        result.push({
          microName: 'Bifidobacterium',
          rowNumber: 8,
          text: (
            <Text style={microNameStyle}>
              {boldText}
              {' has been described as an important childhood, pre-adolescent and adolescent microbial partner. It has been associated with the development of a robust immunity in infancy, which suggests an influential role in supporting health, growth and development.\n\n'}
            </Text>
          )
        });
      } else {
        result.push({
          microName: 'Bifidobacterium',
          rowNumber: 8,
          text: (
            <Text style={microNameStyle}>
              {boldText}
              {' consumes sugars present in breast milk and by doing so, shapes a healthy gut in your child. The presence of '}
              {boldText}
              {' in early life has been associated with a robust immunity, including protection against harmful microbes, decreased risk of allergy, and better vaccination response.\n\n'}
            </Text>
          )
        });
      }
      break;
    case 'Faecalibacterium':
      result.push({
        microName: 'Faecalibacterium',
        rowNumber: 5,
        text: (
          <Text style={microNameStyle}>
            {boldText}
            {' has been described as one of our key microbial friends.\n\n'}
          </Text>
        )
      });
      result.push({
        microName: 'Faecalibacterium',
        rowNumber: 8,
        text: (
          <Text style={microNameStyle}>
            {'There is a growing body of evidence that indicates that '}
            {boldText},
            {' is associated with a healthy gut and a higher quality of life in terms of mental and physical well-being. '}
            {boldText},
            {' has the ability to produce anti-inflammatory molecules such as butyrate, which plays a role in regulating our immune system.\n\n'}
          </Text>
        )
      });
      result.push({
        microName: 'Faecalibacterium',
        rowNumber: 4,
        text: (
          <Text style={microNameStyle}>
            {'Studies demonstrate that following a Mediterranean diet can boost '}
            {boldText}
            {'.\n\n'}
          </Text>
        )
      });
      break;
    case 'Roseburia':
      result.push({
        microName: 'Roseburia',
        rowNumber: 7,
        text: (
          <Text style={microNameStyle}>
            {'This is a microbial friend that directly converts fibres in fruits, vegetables, legumes, and grains into beneficial biochemical molecules, such as butyrate, to sustain good health.\n\n'}
          </Text>
        )
      });
      result.push({
        microName: 'Roseburia',
        rowNumber: 5,
        text: (
          <Text style={microNameStyle}>
            {boldText}
            {' loves the Mediterranean diet and walnuts. It is associated with gut health and according to preclinical studies, may have a role in maintaining healthy blood vessels.\n\n'}
          </Text>
        )
      });
      result.push({
        microName: 'Roseburia',
        rowNumber: 3,
        text: (
          <Text style={microNameStyle}>
            {'Scientists are investigating its potential application as a probiotic.\n\n'}
          </Text>
        )
      });
      break;
    case 'Streptococcus':
      if (isBaby) {
        result.push({
          microName: 'Streptococcus',
          rowNumber: 10,
          text: (
            <Text style={microNameStyle}>
              {boldText}
              {' can be detected in the gut microbiome of breastfed children.\n\n'}
              {boldText}
              {' can be found in dairy products such as yoghurt/fermented milk. The presence of '}
              {boldText}
              {' in dairy products is known to help our body digest lactose.\n\n\n'}
            </Text>
          )
        });
      } else {
        result.push({
          microName: 'Streptococcus',
          rowNumber: 5,
          text: (
            <Text style={microNameStyle}>
              {boldText}
              {' can be found in dairy products such as yoghurt/fermented milk. The presence of '}
              {boldText}
              {' in dairy products is known to help our body digest lactose.\n\n\n'}
            </Text>
          )
        });
      }
      break;
    case 'Lactobacillus':
      result.push({
        microName: 'Lactobacillus',
        rowNumber: 9,
        text: (
          <Text style={microNameStyle}>
            {boldText}
            {' is a microbial friend that inhabits different parts of the human body (stomach, small intestine, colon, vagina). It has the ability to produce molecules that keep bad microbes at bay. Its presence is associated with a healthy gut and healthy vagina.\n\n'}
          </Text>
        )
      });
      result.push({
        microName: 'Lactobacillus',
        rowNumber: 6,
        text: (
          <Text style={microNameStyle}>
            {boldText}
            {' can be found in dairy products such as yoghurt/fermented milk, baby foods, and probiotic supplements. The presence of '}
            {boldText}
            {' in dairy products is known to help our body digest lactose.\n\n'}
          </Text>
        )
      });
      result.push({
        microName: 'Lactobacillus',
        rowNumber: 6,
        text: (
          <Text style={microNameStyle}>
            {'Consuming fermented milk, as well as foods rich\nin fibre and polyphenols is known to boost '}
            {boldText}
            {'. Scientists are determining how the consumption of foods/supplements that contain '}
            {boldText}
            {' may provide health benefits.\n\n'}
          </Text>
        )
      });
      break;
    case 'Akkermansia':
      result.push({
        microName: 'Akkermansia',
        rowNumber: 8,
        text: (
          <Text style={microNameStyle}>
            {boldText}
            {' has been described as an important microbial friend that strengthens our gut wall. This wall acts as a physical barrier that protects our body against the invasion of infectious pathogens and harmful molecules inside our gut.\n\n'}
          </Text>
        )
      });
      result.push({
        microName: 'Akkermansia',
        rowNumber: 7,
        text: (
          <Text style={microNameStyle}>
            {'Scientists observed that '}
            {boldText}
            {' is found in lean individuals and is depleted in overweight, obese, and untreated type 2 diabetic individuals. Research is ongoing to determine the potential role of '}
            {boldText}
            {' as a candidate microbe to prevent or treat conditions such as obesity.\n\n'}
          </Text>
        )
      });
      result.push({
        microName: 'Akkermansia',
        rowNumber: 4,
        text: (
          <Text style={microNameStyle}>
            {'Studies indicate that '}
            {boldText}
            {' can be nurtured with fish oil and dietary polyphenols.\n\n'}
          </Text>
        )
      });
      break;
    case 'Coprococcus':
      result.push({
        microName: 'Coprococcus',
        rowNumber: 7,
        text: (
          <Text style={microNameStyle}>
            {'This is a microbial friend that directly converts fibres in fruits, vegetables, legumes, and grains into beneficial biochemical molecules, such as butyrate, to sustain good health.\n\n'}
          </Text>
        )
      });
      result.push({
        microName: 'Coprococcus',
        rowNumber: 2,
        text: (
          <Text style={microNameStyle}>
            {boldText}
            {' is an omega-3 food lover.\n\n'}
          </Text>
        )
      });
      result.push({
        microName: 'Coprococcus',
        rowNumber: 5,
        text: (
          <Text style={microNameStyle}>
            {'Same as '}
            <Text style={{ fontWeight: 700, fontStyle: 'italic' }}>Faecalibacterium</Text>
            {', '}
            {boldText}
            {' is associated with higher quality of life in terms of mental health and depleted in individuals with depression\n\n'}
          </Text>
        )
      });
      break;

    default:
      break;
  }
  return result;
};

interface Props {
  role: number,
  isWeaned: boolean,
  resultCompare: any,
  timePoint: string,
  monthTimePoint: number,
  deliveryMode: number,
}

const getIndicateContent = ({
  role,
  isWeaned,
  resultCompare,
  timePoint,
  monthTimePoint,
  deliveryMode
}: Props) => {
  const isBaby = role === USER_SAMPLE_ROLES.BABY;
  const content = [];
  const { goodMicrobeData, goodVDMicrobeData } = resultCompare;
  let microbeData = goodMicrobeData;

  if (
    isBaby
    && ![DELIVERY_MODE.VD, DELIVERY_MODE.VD_IAP].includes(deliveryMode)
  ) {
    microbeData = goodVDMicrobeData;
  }

  if (isBaby && !isWeaned) {
    if (microbeData.length > 0) {
      microbeData.forEach((micro: any) => {
        const boldText = <Text style={{ fontWeight: 700, fontStyle: 'italic' }}>{micro.name}</Text>;

        switch (micro.name) {
          case 'Bifidobacterium':
            content.push({
              microName: 'Bifidobacterium',
              rowNumber: 8,
              text: (
                <Text style={storyStyle}>
                  {boldText}
                  {' is one of the best microbial friends of children. It is passed down from generation to generation through the maternal lineage, from grandmother to mother to granddaughter.\n\n'}
                </Text>
              )
            });
            content.push({
              microName: 'Bifidobacterium',
              rowNumber: 6,
              text: (
                <Text style={storyStyle}>
                  {'Yes, Mum. You transferred your '}
                  {boldText}
                  {' to your child during birth and breastfeeding. And if you are still breastfeeding your child, the sugars present in your breast milk will nurture your child’s '}
                  {boldText}
                  {'.\n\n'}
                </Text>
              )
            });
            content.push({
              microName: 'Bifidobacterium',
              rowNumber: 8,
              text: (
                <Text style={storyStyle}>
                  {boldText}
                  {' consumes sugars present in breast milk and by doing so, shapes a healthy gut in your child. The presence of '}
                  {boldText}
                  {' in early life has been associated with a robust immunity, including protection against harmful microbes, decreased risk of allergy, and better vaccination response.\n\n'}
                </Text>
              )
            });
            break;
          case 'Bacteroides':
            content.push({
              microName: 'Bacteroides',
              rowNumber: 5,
              text: (
                <Text style={storyStyle}>
                  {boldText}
                  {' can be detected in poop samples of children who were born vaginally and breastfed.\n\n'}
                </Text>
              )
            });
            content.push({
              microName: 'Bacteroides',
              rowNumber: 5,
              text: (
                <Text style={storyStyle}>
                  {'Similar to '}
                  <Text style={{ fontWeight: 700, fontStyle: 'italic' }}>Bifidobacterium</Text>
                  {', it is passed down from generation to generation through the maternal lineage, from grandmother to mother to granddaughter.\n\n'}
                </Text>
              )
            });
            content.push({
              microName: 'Bacteroides',
              rowNumber: 6,
              text: (
                <Text style={storyStyle}>
                  {boldText}
                  {' has the ability to consume sugars present in breast milk. Little is known about its specific role in early life, but some studies do suggest a possible protective effect against allergy development.\n\n'}
                </Text>
              )
            });
            break;

          case 'ButyrateProducers':
            content.push({
              microName: 'ButyrateProducers',
              rowNumber: 8,
              text: (
                <Text style={storyStyle}>
                  {'Directly or indirectly convert fibres and phytonutrients present in fruits, vegetables, legumes, and grains into beneficial biochemical molecules, such as butyrate, to sustain good health.\n\n'}
                </Text>
              )
            });
            content.push({
              microName: 'ButyrateProducers',
              rowNumber: 8,
              text: (
                <Text style={storyStyle}>
                  {'Butyrate is a short-chain fatty acid that regulates our immune system. Butyrate is also a source of energy for the cells lining our gut and helps strengthen the gut wall. This lining acts as a physical barrier that protects our body against the invasion of infectious microbes and harmful molecules inside our gut.\n\n'}
                </Text>
              )
            });
            break;
          case 'Lactobacillus':
            content.push({
              microName: 'Lactobacillus',
              rowNumber: 9,
              text: (
                <Text style={storyStyle}>
                  {boldText}
                  {' is a microbial friend that inhabits different parts of the human body (stomach, small intestine, colon, vagina). It has the ability to produce molecules that keep bad microbes at bay. Its presence is associated with a healthy gut and healthy vagina.\n\n'}
                </Text>
              )
            });
            content.push({
              microName: 'Lactobacillus',
              rowNumber: 6,
              text: (
                <Text style={storyStyle}>
                  {'Consuming fermented milk, as well as foods rich\nin fibre and polyphenols is known to boost '}
                  {boldText}
                  {'. Scientists are determining how the consumption of foods/supplements that contain '}
                  {boldText}
                  {' may provide health benefits.\n\n'}
                </Text>
              )
            });
            break;

          default:
            break;
        }
      });
    }
  } else {
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

    if (generalBifidoStory.length > 0) {
      content.push({
        microName: generalBifidoStory,
        rowNumber: 8,
        text: (
          <Text style={storyStyle}>
            {'Directly or indirectly convert fibres and phytonutrients present in fruits, vegetables, legumes, and grains into beneficial biochemical molecules, such as butyrate, to sustain good health.\n\n'}
          </Text>
        )
      });
      content.push({
        microName: generalBifidoStory,
        rowNumber: 8,
        text: (
          <Text style={storyStyle}>
            {'Butyrate is a short-chain fatty acid that regulates our immune system. Butyrate is also a source of energy for the cells lining our gut and helps strengthen the gut wall. This lining acts as a physical barrier that protects our body against the invasion of infectious microbes and harmful molecules inside our gut.\n\n'}
          </Text>
        )
      });
      if (generalBifidoStory.includes('Bifidobacterium')) {
        content.push({
          microName: generalBifidoStory,
          rowNumber: 4,
          text: (
            <Text style={storyStyle}>
              {'Among these microbes, '}
              <Text style={{ fontWeight: 700, fontStyle: 'italic' }}>Bifidobacterium</Text>
              {' will be transferred from mother to baby during vaginal birth and breastfeeding.\n\n'}
            </Text>
          )
        });
      }
    }

    if (generalYagurtStory.length > 0) {
      // todo new story
    }

    if (individualStory.length > 0) {
      individualStory.forEach((micro) => {
        const contentResult = getExplainContent(
          micro,
          isBaby,
          timePoint,
          monthTimePoint
        );
        contentResult.forEach((result) => {
          content.push(result);
        });
      });
    }
  }
  return content;
};

export default getIndicateContent;

import { Text, View, Image } from '@react-pdf/renderer';
import { DELIVERY_MODE, MILK_FEEDING } from '../../../constants/DefaultValues';
import { A4_FULL_WIDTH_POINT, A4_FULL_HEIGHT_POINT, LINE_HEIGHT_NORMAL_SENTENCE } from '../../../constants/PdfConstants';
import Header from './Components/Header';
import PageNumber from './Components/PageNumber';
import Results from './Components/Results';

interface Props {
  isBaby?: boolean
  compositionData?: Array<any>
  pageNumber: number
  sample: any
  member: any
  babyMonths: number
}

const CompositionPage = ({
  isBaby, compositionData, pageNumber, sample, member, babyMonths
}: Props) => {
  const topText = isBaby
    ? 'The top bacterial groups detected in your child’s poop sample\nand their relative proportions are depicted as below:'
    : 'The top bacterial groups detected in your poop sample and their\nrelative proportions are depicted as below:';

  const compositionChartSelector = document.getElementById('composition-chart-canvas-pdf') as HTMLElement | any;
  const compositionChart = compositionChartSelector ? compositionChartSelector.toDataURL('image/png') : '';

  const medicPicture = {
    enterogermina: {
      img: 'enterogermina.png',
      style: {
        width: 250,
        height: 149
      }
    },
    bifibaby: {
      img: 'bifibaby.jpg',
      style: {
        width: 144,
        height: 144
      }
    },
    biogaia: {
      img: 'biogaia.png',
      style: {
        width: 120,
        height: 144
      }
    },
    duolacDerma: {
      img: 'duolac-derma.png',
      style: {
        width: 118,
        height: 150
      }
    },
    smidgeInfantProbiotics: {
      img: 'smidge-infant-probiotics.png',
      style: {
        width: 150,
        height: 150
      }
    },
    protexin: {
      img: 'protexin.jpg',
      style: {
        width: 100,
        height: 100
      }
    }
  };

  const checkBacterialAndValue = (bactName: string, value: number) => {
    const findBact = compositionData?.find((f) => { return f.fullName === bactName; });
    if (findBact) {
      // Check value
      return findBact.value >= value;
    }

    return false;
  };

  // let picMedicalLeft: any = null;
  // let picMedicalRight: any = null;
  if (babyMonths) {
    if (sample.isWeaned) {
      if (member.deliveryMode === DELIVERY_MODE.VD_IAP && sample.milkFeeding === MILK_FEEDING.MIXED_FED) {
        if (babyMonths <= 8 && sample.babyProfile.nameInfantFormulaBrand.indexOf('Kendamil') !== -1) {
          // picMedicalLeft = medicPicture.enterogermina;
        }
        if (babyMonths <= 9 && sample.babyProfile.nameInfantFormulaBrand.indexOf('Enfamil') !== -1) {
          // picMedicalLeft = medicPicture.enterogermina;
        }
      }
      if (member.deliveryMode === DELIVERY_MODE.C_SECTION_ELECTIVE && sample.milkFeeding === MILK_FEEDING.BREAST_MILK) {
        if (babyMonths > 8 && babyMonths <= 9) {
          // picMedicalLeft = medicPicture.bifibaby;
          // picMedicalRight = medicPicture.biogaia;
        }
      }
      if (member.deliveryMode === DELIVERY_MODE.C_SECTION_EMERGENCY && sample.milkFeeding === MILK_FEEDING.BREAST_MILK) {
        if (babyMonths <= 9
          && checkBacterialAndValue('Bifidobacteriaceae;Bifidobacterium', 0)
          && checkBacterialAndValue('Lactobacillaceae;Lactobacillus', 3)) {
          // picMedicalLeft = medicPicture.duolacDerma;
        }
      }
      if (member.deliveryMode === DELIVERY_MODE.VD && sample.milkFeeding === MILK_FEEDING.BREAST_MILK) {
        if (babyMonths <= 7) {
          // picMedicalLeft = medicPicture.protexin;
          // picMedicalRight = medicPicture.biogaia;
        }
      }
    } else if (!sample.isWeaned) {
      if (member.deliveryMode === DELIVERY_MODE.VD && sample.milkFeeding === MILK_FEEDING.BREAST_MILK) {
        if (babyMonths <= 3) {
          // picMedicalLeft = medicPicture.biogaia;
        }
        if (babyMonths <= 5
          && checkBacterialAndValue('Lactobacillaceae;Lactobacillus', 2)
          && checkBacterialAndValue('Bifidobacteriaceae;Bifidobacterium', 5)) {
          // picMedicalLeft = medicPicture.smidgeInfantProbiotics;
        }
      }
    }
  }

  const cutLongText = (text: string) => {
    const maxLength = 25;
    let newText = text;

    if (text.length > maxLength) {
      newText = `${text.slice(0, maxLength)} ${text.slice(maxLength)}`;
    }

    return newText;
  };

  return (
    <View style={{
      width: A4_FULL_WIDTH_POINT,
      height: A4_FULL_HEIGHT_POINT,
      backgroundColor: '#F7F1FF',
      position: 'relative'
    }}
    >
      <Header title="Microbiome Composition | Top Bacterial Groups" />
      <Results />
      <Image
        src="/img/pdf/footer_composition.png"
        style={{
          position: 'absolute',
          width: A4_FULL_WIDTH_POINT,
          height: 190,
          left: 0,
          bottom: 0
        }}
      />
      <Image
        src={compositionChart}
        style={{
          position: 'absolute',
          width: 216,
          height: 216,
          left: 270,
          top: 150
        }}
      />
      {/* {
        picMedicalLeft && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
              position: 'absolute',
              width: 270,
              left: 250,
              top: 386
            }}
          >
            <Image
              src={`/img/pdf/medic/${picMedicalLeft.img}`}
              style={{ ...picMedicalLeft.style, marginHorizontal: 5 }}
            />
            {
              picMedicalRight && (
                <Image
                  src={`/img/pdf/medic/${picMedicalRight.img}`}
                  style={{ ...picMedicalRight.style, marginHorizontal: 5 }}
                />
              )
            }
          </View>
        )
      } */}
      <View
        style={{
          marginLeft: 60,
          marginTop: 26
        }}
      >
        <Text
          style={{
            fontFamily: 'BlogScript',
            fontSize: 18,
            color: '#5D2A8B',
            lineHeight: 1.5
          }}
        >MICROBIOME COMPOSITION:
        </Text>
        <Text
          style={{
            fontFamily: 'Gotham',
            fontSize: 13,
            color: '#161616'
          }}
        >{topText}
        </Text>
        {
          compositionData
            ? (
              <View style={{ marginTop: 10 }}>
                {compositionData.map((bact) => {
                  return (
                    <View key={bact.fullName} style={{ width: 180 }}>
                      <Text
                        style={{
                          fontSize: 11,
                          fontStyle: 'italic',
                          fontWeight: 700,
                          fontFamily: 'Gotham',
                          color: '#161616',
                          lineHeight: LINE_HEIGHT_NORMAL_SENTENCE,
                          marginBottom: 5
                        }}
                      >
                        {cutLongText(bact.name)}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: 'BlogScript',
                          color: bact.color,
                          lineHeight: 1.5
                        }}
                      >{`${bact.value}%`}
                      </Text>
                    </View>
                  );
                })}
              </View>
            )
            : null
        }
      </View>
      <PageNumber pageNumber={pageNumber} />
    </View>
  );
};

CompositionPage.defaultProps = {
  isBaby: false,
  compositionData: null
};

export default CompositionPage;

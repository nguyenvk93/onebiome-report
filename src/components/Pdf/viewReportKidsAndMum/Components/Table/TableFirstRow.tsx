import { Text, View } from '@react-pdf/renderer';

const TableFirstRow = ({
  isBaby,
  babyMonths,
  textTitleMicrobial,
  isHasMicro
}: any) => {
  const styleRows: any = {
    position: 'relative',
    backgroundColor: '#fff',
    borderLeftColor: '#C1E1F2',
    borderBottomColor: '#C1E1F2',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 2,
    paddingTop: 10,
    paddingBottom: 5
  };

  const styleRowText1: any = {
    fontFamily: 'Gotham',
    fontSize: 10,
    color: '#000',
    fontWeight: 700,
    textAlign: 'center',
    lineHeight: 1.46
  };

  const styleRowText2: any = {
    lineHeight: 1.46,
    fontFamily: 'Gotham',
    fontSize: 9,
    color: '#000',
    fontStyle: 'italic',
    textAlign: 'center'
  };

  const styleFloat: any = {
    fontFamily: 'Lucida',
    textAlign: 'center',
    fontSize: 9
  };

  return (
    <View style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
      <View style={{
        width: 116,
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative'
      }}
      >
        <Text
          style={{
            fontFamily: 'Gotham',
            fontSize: 10,
            color: '#000',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.5,
            paddingHorizontal: 2,
            borderBottomColor: '#C1E1F2',
            borderBottomWidth: isHasMicro ? 1 : 0
          }}
        >
          {textTitleMicrobial}
        </Text>
      </View>
      <View style={{ ...styleRows, width: 85 }}>
        <Text style={styleRowText1}>
          {'Vegetables\n'}
        </Text>
        <Text
          style={styleRowText2}
        >
          1 serving ~ 100g cooked leafy veggies, 100g cooked non-leafy veggies
        </Text>
      </View>
      <View style={{ ...styleRows, width: 83 }}>
        <Text style={styleRowText1}>
          {'Fruits\n'}
        </Text>
        <Text
          style={styleRowText2}
        >
          1 serving ~ 1 small apple, orange, pear or mango (130g)
        </Text>

      </View>
      <View style={{ ...styleRows, width: 105 }}>

        <Text style={styleRowText1}>
          {'Grains\n'}
        </Text>
        <Text
          style={styleRowText2}
        >
          1 serving ~ <Text style={styleFloat}>½</Text>
          {`${isBaby && babyMonths < 24 ? ' bowl rice, ' : ' bowl brown rice, '}`}
          <Text style={styleFloat}>½</Text>
          {
            `${isBaby && babyMonths < 24
              ? ' bowl noodles, spaghetti or beehoon'
              : ' bowl whole-grain noodles, spaghetti or beehoon'
            }`
          }
        </Text>

      </View>
      <View style={{ ...styleRows, width: 81 }}>
        <Text style={styleRowText1}>
          {`Nuts${isBaby ? '*' : ''}\n`}
        </Text>
      </View>
      <View style={{ ...styleRows, width: 83 }}>
        <Text style={styleRowText1}>
          {'Seafood\n'}
        </Text>
        <Text
          style={styleRowText2}
        >
          1 serving ~ 1 palm-sized piece fish (90g)
        </Text>
      </View>
      <View style={{ ...styleRows, width: 88 }}>
        <Text style={styleRowText1}>
          {'Tofu /\nBeancurd / Soy\n'}
        </Text>
        <Text
          style={styleRowText2}
        >
          1 serving ~ 2 small blocks soft bean curd (170g)
        </Text>
      </View>
      <View style={{ ...styleRows, width: 83 }}>
        <Text style={styleRowText1}>
          {'Dairy\n'}
        </Text>
        <Text
          style={styleRowText2}
        >
          1 serving ~ 2 glasses of milk (500ml)
        </Text>
      </View>
      <View style={{
        ...styleRows,
        width: 83,
        borderRightColor: '#C1E1F2',
        borderRightWidth: 1
      }}
      >
        <Text style={styleRowText1}>
          {'Legumes\n'}
        </Text>
        <Text
          style={styleRowText2}
        >
          1 serving ~ <Text style={styleFloat}>¾</Text> cup cooked pulses (e.g. lentils, peas, beans) (120g)
        </Text>
      </View>
    </View>
  );
};

export default TableFirstRow;

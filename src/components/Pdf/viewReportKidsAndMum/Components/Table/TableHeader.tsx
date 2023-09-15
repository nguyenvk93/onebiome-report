import { Image, Text, View } from '@react-pdf/renderer';

const TableHeader = ({
  isBaby,
  babyMonths,
  textVegetable,
  textNuts,
  textMeat
}: any) => {
  const textStyle: any = {
    textAlign: 'center',
    fontFamily: 'Gotham',
    fontSize: 10,
    lineHeight: 1,
    color: '#000'
  };
  return (
    // TABLE HEADER
    <View style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
      <View style={{ width: 116, position: 'relative' }} />
      <View style={{
        width: 168,
        position: 'relative',
        backgroundColor: '#F1FFE1',
        borderWidth: 1,
        borderColor: '#C1E1F2',
        borderRightWidth: 0,
        paddingTop: 32,
        paddingBottom: 2
      }}
      >
        <Text style={textStyle}>
          <Text style={{ fontWeight: 700, lineHeight: 1 }}>{'Vegetables & Fruits\n'}</Text>
          {textVegetable}
        </Text>
      </View>
      <View
        style={{
          width: 105,
          position: 'relative',
          backgroundColor: '#FFF8E0',
          borderWidth: 1,
          borderColor: '#C1E1F2',
          borderRightWidth: 0,
          paddingTop: 32,
          paddingBottom: 2
        }}
      >
        <Image
          style={{
            position: 'absolute',
            top: -32,
            left: 7,
            width: 90
          }}
          src="/img/pdf/food_table_wheat31052021.png"
        />
        <Text style={textStyle}>
          <Text style={{ fontWeight: 700, lineHeight: 1 }}>
            {`${isBaby && babyMonths < 24 ? 'Grains\n' : 'Whole Grains\n'}`}
          </Text>
          {textNuts}
        </Text>
      </View>
      <View
        style={{
          width: 418,
          position: 'relative',
          backgroundColor: '#ECF9FF',
          borderWidth: 1,
          borderColor: '#C1E1F2',
          paddingTop: 32,
          paddingBottom: 2
        }}
      >
        <Image
          style={{
            position: 'absolute',
            top: -22,
            left: 99,
            width: 250,
            height: 60
          }}
          src="/img/pdf/food_table_meetseafood31052021.png"
        />
        <Text style={textStyle}>
          <Text style={{ fontWeight: 700, lineHeight: 1 }}>
            {'Meat and others\n (includes fish, tofu, lean chicken, beans and nuts, milk and dairy products)\n'}
          </Text>
          {textMeat}
        </Text>
      </View>
      <Image
        style={{
          position: 'absolute',
          top: -39,
          left: 126,
          width: 162,
          height: 71
        }}
        src="/img/pdf/food_table_fruits.png"
      />
    </View>
  );
};

export default TableHeader;

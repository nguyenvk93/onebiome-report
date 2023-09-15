import { Text, View } from '@react-pdf/renderer';

const TableRow = ({ data, micro }: any) => {
  const styleRows: any = {
    position: 'relative',
    backgroundColor: '#fff',
    borderLeftColor: '#C1E1F2',
    borderBottomColor: '#C1E1F2',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 2,
    paddingTop: 6
  };

  const styleFoodItalic: any = {
    fontFamily: 'Gotham',
    fontSize: 9,
    color: '#000',
    lineHeight: 1.4,
    fontStyle: 'italic',
    textAlign: 'center'
  };

  return (
    <View style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
      <View style={{
        width: 116,
        paddingTop: 6,
        backgroundColor: '#fff',
        borderLeftColor: '#C1E1F2',
        borderBottomColor: '#C1E1F2',
        borderLeftWidth: 1,
        borderBottomWidth: 1
      }}
      >
        <Text style={{ ...styleFoodItalic, textAlign: 'left', paddingLeft: 7 }}>
          {micro}
        </Text>
      </View>
      <View style={{ ...styleRows, width: 85 }}>
        <Text style={styleFoodItalic}>
          {data[0].text}
        </Text>
      </View>
      <View style={{ ...styleRows, width: 83 }}>
        <Text style={styleFoodItalic}>
          {data[1].text}
        </Text>
      </View>
      <View style={{ ...styleRows, width: 105 }}>
        <Text style={styleFoodItalic}>
          {data[2].text}
        </Text>
      </View>
      <View style={{ ...styleRows, width: 81 }}>
        <Text style={styleFoodItalic}>
          {data[3].text}
        </Text>
      </View>
      <View style={{ ...styleRows, width: 83 }}>
        <Text style={styleFoodItalic}>
          {data[4].text}
        </Text>
      </View>
      <View style={{ ...styleRows, width: 88 }}>
        <Text style={styleFoodItalic}>
          {data[5].text}
        </Text>
      </View>
      <View style={{ ...styleRows, width: 83 }}>
        <Text style={styleFoodItalic}>
          {data[6].text}
        </Text>
      </View>
      <View style={{
        ...styleRows,
        width: 83,
        borderRightColor: '#C1E1F2',
        borderRightWidth: 1
      }}
      >
        <Text style={styleFoodItalic}>
          {data[7].text}
        </Text>
      </View>
    </View>
  );
};

export default TableRow;

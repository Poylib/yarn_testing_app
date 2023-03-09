import { Text, View } from 'react-native';
import { Grid, YAxis, LineChart } from 'react-native-svg-charts';

import { chartConfig } from '../data';

export default function ConfigLine() {
  return (
    <View style={{ height: 300 }}>
      <Text
        style={{
          position: 'absolute',
          left: 10,
          top: 38,
          width: 100,
          transform: [{ rotate: '270deg' }, { translateY: -36 }],
        }}>
        단위 : 억원
      </Text>
      <View
        style={{
          height: '100%',
          width: '100%',
          paddingHorizontal: 40,
          flexDirection: 'row',
        }}>
        <YAxis
          data={chartConfig.totalData}
          style={{ marginRight: 10 }}
          contentInset={{ top: 5, bottom: 5 }}
          svg={{
            fill: '#555E70',
            fontSize: 11,
          }}
        />
        <LineChart //
          data={chartConfig.totalData}
          gridMin={chartConfig.minY}
          gridMax={chartConfig.maxY}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{ stroke: '#0A3575' }}
          style={{ flex: 1 }}>
          <Grid
            svg={{
              strokeWidth: 1.5,
            }}
          />
        </LineChart>
      </View>
    </View>
  );
}

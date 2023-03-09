import React from 'react';
import { Svg, G, Rect, Line } from 'react-native-svg';
import LineChart from '../components/Linechart';

const ChartScreen = () => {
  return (
    <LineChart //
      containerHeight={300}
      circleColor="#daa520"
      axisColor="#9dd"
      line_chart_data={[
        { month: 'Jan', value: 300 },
        { month: 'Feb', value: 400 },
        { month: 'Mar', value: 500 },
        { month: 'Apr', value: 610 },
        { month: 'May', value: 400 },
        { month: 'June', value: 520 },
        { month: 'July', value: 640 },
      ]}
    />
  );
};

export default ChartScreen;

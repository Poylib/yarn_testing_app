import React from 'react';
import { Svg, G, Rect, Line } from 'react-native-svg';
import { BarChart, Grid } from 'react-native-svg-charts';

const GRAPH_MARGIN = 13;
const colors = {
  axis: '#b82f2f',
};

const ChartScreen = () => {
  const fill = 'rgb(134, 65, 244)';
  const data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80];

  return (
    <BarChart style={{ height: 200 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
      <Grid />
    </BarChart>
  );
};

export default ChartScreen;

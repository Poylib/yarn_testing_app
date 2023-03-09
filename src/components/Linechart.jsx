import React, { useEffect, useRef, useState } from 'react';
import { View, Dimensions, Animated, ScrollView } from 'react-native';
import Svg, {
  G,
  Line,
  Circle,
  Text as SvgText,
  Rect,
  Grid,
  LineChart as LinerChart,
} from 'react-native-svg';
import { styles } from '../style';
import ConfigLine from './ConfigLIne';
import LibLineChart from './LibLineChart';

const window_width = Dimensions.get('window').width;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedLine = Animated.createAnimatedComponent(Line);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedSvgText = Animated.createAnimatedComponent(SvgText);

const LineChart = ({
  //
  line_chart_data = [],
  containerHeight = 400,
  circleColor = '#ccc',
  circleRadius = 3,
  axisColor = '#fff',
  axisWidth = 2,
  axisLabelFontSize = 10,
}) => {
  const [yAxisLables, setYAxisLabels] = useState([]);
  const marginFor_x_fromleft = 50;
  const marginFor_y_fromBottom = 50;
  const padding_from_screenBorder = 20;

  const x_axis_x1_point = marginFor_x_fromleft;
  const x_axis_y1_point = containerHeight - marginFor_y_fromBottom; //svg의 y축은 아래로 그려지기 때문
  const x_axis_x2_point = window_width - padding_from_screenBorder;
  const x_axis_y2_point = containerHeight - marginFor_y_fromBottom;
  // x축 선을 긋기 위한 좌표
  const x_axis_actual_width =
    window_width - marginFor_x_fromleft - padding_from_screenBorder;
  const gap_between_x_axis_ticks =
    x_axis_actual_width / (line_chart_data.length - 1);

  const y_axis_x1_point = marginFor_x_fromleft;
  const y_axis_y1_point = padding_from_screenBorder;
  const y_axis_x2_point = marginFor_x_fromleft;
  const y_axis_y2_point = containerHeight - marginFor_y_fromBottom;
  // y축 선을 긋기 위한 좌표

  const y_min_value = 0;
  const y_max_value = Math.max.apply(
    Math,
    line_chart_data.map(item => item.value),
  );
  const gapBetweenYAxisValues =
    (y_max_value - y_min_value) / (line_chart_data.length - 2);
  const y_axis_actual_height = y_axis_y2_point - y_axis_y1_point;
  const gap_beteen_y_axis_ticks =
    (y_axis_actual_height - y_min_value) / (line_chart_data.length - 2);

  const animated_x_axis_width = useRef(
    new Animated.Value(x_axis_x1_point),
  ).current;
  const animated_y_axis_width = useRef(
    new Animated.Value(y_axis_y2_point),
  ).current;
  const animated_circle_radius = useRef(new Animated.Value(0)).current;
  const animated_ticks_labels_opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const yAxisData = line_chart_data.map((item, idx) => {
      if (idx === 0) return y_min_value;
      else return (y_min_value + gapBetweenYAxisValues * idx).toFixed(0);
    });
    setYAxisLabels(yAxisData);
    start_axis_circle_animation();
    start_x_y_axis_animation();
    start_x_y_ticks_labels_animation();
  }, []);

  const start_axis_circle_animation = () => {
    Animated.timing(animated_circle_radius, {
      toValue: circleRadius,
      duration: 1500,
      delay: 500,
      useNativeDriver: true,
    }).start();
  };

  const start_x_y_axis_animation = () => {
    Animated.timing(animated_x_axis_width, {
      toValue: x_axis_x2_point,
      duration: 1500,
      delay: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(animated_y_axis_width, {
      toValue: y_axis_y1_point,
      duration: 1500,
      delay: 500,
      useNativeDriver: true,
    }).start();
  };

  const start_x_y_ticks_labels_animation = () => {
    Animated.timing(animated_ticks_labels_opacity, {
      toValue: 1,
      duration: 1500,
      delay: 500,
      useNativeDriver: true,
    }).start();
  };

  const render_x_y_axis = () => {
    return (
      <G key="x-axis y-axis">
        <AnimatedCircle //
          key="x-axis x1y1-circle"
          cx={x_axis_x1_point} // x축에서 얼마나 떨어져 있는지
          cy={x_axis_y1_point} // y축에서 얼마나 떨어져 있는지
          fill={circleColor}
          r={animated_circle_radius} // 원의 반지름
        />
        <AnimatedCircle //
          key="x-axis x2y2-circle"
          cx={x_axis_x2_point} // x축에서 얼마나 떨어져 있는지
          cy={x_axis_y2_point} // y축에서 얼마나 떨어져 있는지
          fill={circleColor}
          r={animated_circle_radius} // 원의 반지름
        />
        <AnimatedCircle //
          key="y-axis x2y2-circle"
          cx={y_axis_x1_point} // x축에서 얼마나 떨어져 있는지
          cy={y_axis_y1_point} // y축에서 얼마나 떨어져 있는지
          fill={circleColor}
          r={animated_circle_radius} // 원의 반지름
        />
        <AnimatedLine //
          key="x-axis"
          x1={x_axis_x1_point}
          y1={x_axis_y1_point}
          x2={animated_x_axis_width}
          y2={x_axis_y2_point}
          stroke={axisColor}
          strokeWidth={axisWidth}
        />
        <AnimatedLine //
          key="y-axis"
          x1={y_axis_x1_point}
          y1={animated_y_axis_width}
          x2={y_axis_x2_point}
          y2={y_axis_y2_point}
          stroke={axisColor}
          strokeWidth={axisWidth}
        />
      </G>
    );
  };

  const render_x_axis_labels_and_ticks = () => {
    return line_chart_data.map((item, idx) => {
      let x_point = x_axis_x1_point + gap_between_x_axis_ticks * idx;
      return (
        <G key={`x-axis labels and ticks${idx}`}>
          <AnimatedLine //
            key="x-axis-tick"
            x1={x_point}
            y1={x_axis_y1_point}
            x2={x_point}
            y2={x_axis_y1_point + 10}
            stroke={axisColor}
            strokeWidth={axisWidth}
            opacity={animated_ticks_labels_opacity}
          />
          <AnimatedSvgText
            x={x_point}
            y={x_axis_y1_point + 25}
            fill={axisColor}
            fontWeight="bold"
            fontSize={axisLabelFontSize}
            textAnchor="middle"
            opacity={animated_ticks_labels_opacity}>
            {item.month}
          </AnimatedSvgText>
        </G>
      );
    });
  };

  const render_y_axis_labels_and_ticks = () => {
    return yAxisLables.map((item, idx) => {
      let y_point = y_axis_y2_point - gap_beteen_y_axis_ticks * idx;
      return (
        <G key={`y-axis labels and ticks${idx}`}>
          <AnimatedLine
            key="y-axis tick"
            x1={marginFor_x_fromleft}
            y1={y_point}
            x2={marginFor_x_fromleft - 10}
            y2={y_point}
            stroke={axisColor}
            strokeWidth={axisWidth}
            opacity={animated_ticks_labels_opacity}
          />
          <AnimatedSvgText //
            x={marginFor_x_fromleft - 20}
            y={y_point}
            fill={axisColor}
            fontWeight="bold"
            fontSize={axisLabelFontSize}
            textAnchor="end"
            opacity={animated_ticks_labels_opacity}>
            {item}
          </AnimatedSvgText>
        </G>
      );
    });
  };

  return (
    <ScrollView>
      <View style={[styles.svgWrapper, { height: containerHeight }]}>
        <AnimatedSvg height="100%" width="100%" style={styles.svgStyle}>
          {render_x_y_axis()}
          {render_x_axis_labels_and_ticks()}
          {render_y_axis_labels_and_ticks()}
        </AnimatedSvg>
        {/* <LinerChart //
          style={{ flex: 1 }}
        /> */}
      </View>
      <LibLineChart />
      <Svg height="80" width="200">
        <G>
          <Rect
            x="10"
            y="10"
            height="90"
            width="42"
            stroke="red"
            stroke-width="4"
            rx="10"
            fill="red"
          />
        </G>
        <G>
          <Rect
            x="60"
            y="50"
            height="100"
            width="42"
            stroke="blue"
            stroke-width="4"
            rx="10"
            fill="blue"
          />
        </G>
      </Svg>
      <ConfigLine />
    </ScrollView>
  );
};

export default LineChart;

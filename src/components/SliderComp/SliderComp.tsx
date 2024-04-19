import React, {memo, useState} from 'react';
import {Image, View} from 'react-native';
import MultiSlider from '../../modules/@ptomasroos/react-native-multi-slider';

import {Text14} from '../Text/Text';
import styles from './styles';
import HorizontalView from '../HorizontalView/HorizontalView';
import {ImgsPath} from '../../assets/images/ImgsPath';

const SliderComp = () => {
  const [sliderValue, setSliderValue] = useState([700]);

  const SliderThumb = () => {
    return <Image source={ImgsPath?.sliderThumb} style={styles?.sliderThumb} />;
  };

  const onSliderValueChange = (value: any) => {
    setSliderValue(value);
  };

  return (
    <View style={styles.conatiner}>
      <HorizontalView>
        <Text14 textStyle={styles?.sliderLabel}>100</Text14>

        <MultiSlider
          customMarker={SliderThumb}
          trackStyle={styles?.trackStyle}
          enableLabel={true}
          sliderLength={200}
          step={100}
          min={100}
          max={1000}
          values={sliderValue}
          onValuesChange={onSliderValueChange}
        />

        <Text14 textStyle={styles?.sliderLabel}>1000</Text14>
      </HorizontalView>
    </View>
  );
};

export default memo(SliderComp);

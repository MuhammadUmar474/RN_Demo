import React, {memo} from 'react';
import {View} from 'react-native';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {COLORS} from '../../shared/theme';

const LineView = (props: any) => {
  return (
    <View
      style={{
        width: wp('90'),
        height: hp('0.2'),
        backgroundColor: COLORS.divider,
        ...props?.style,
      }}
    />
  );
};

export default memo(LineView);

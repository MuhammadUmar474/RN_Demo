import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {wp, hp} from '../../utils/dimensionUtils/dimensions';

const styles = StyleSheet.create({
  conatiner: {
    marginTop: hp('5'),
    width: wp('90'),
    height: hp('7'),
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  sliderThumb: {width: 20, height: 20},
  trackStyle: {height: hp('0.5'), backgroundColor: COLORS?.divider},
  sliderLabel: {color: COLORS.white, fontWeight: '500'},
});

export default styles;

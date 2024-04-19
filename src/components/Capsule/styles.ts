import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {wp, hp} from '../../utils/dimensionUtils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp('7.5'),
    paddingVertical: hp('1.5'),
    alignSelf: 'flex-start',
    backgroundColor: COLORS.background,
    borderColor: COLORS.grey300,
    borderRadius: wp('10'),
    borderWidth: 1,
  },
  container1: {
    borderWidth: 0,
    backgroundColor: COLORS.primary,
  },
  title: {
    color: COLORS.white,
  },
});

export default styles;

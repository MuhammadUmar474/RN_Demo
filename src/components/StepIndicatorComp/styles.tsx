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
  stepIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

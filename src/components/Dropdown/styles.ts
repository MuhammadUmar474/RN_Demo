import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/theme';
import {wp, hp, isIOS} from '../../utils/dimensionUtils/dimensions';

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    borderRadius: wp('3'),
    alignSelf: 'center',
    backgroundColor: COLORS.divider,
  },
  bodrer: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  headingTxt: {
    marginTop: hp('-1.5'),
    backgroundColor: COLORS.white,
    left: 6,
    textAlign: 'center',
  },
  listItem: {
    textTransform: 'capitalize',
    color: COLORS.white,
  },
  headingTxtPlaceHolder: {
    color: COLORS.white,
  },
  ListContainer: {
    zIndex: 1000,
    top: isIOS ? hp('7') : hp('6.5'),
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: wp('3'),
    backgroundColor: COLORS.divider,
    marginVertical: hp('0.5'),
    ...COLORS.shadow,
  },
  searchInput: {
    flex: 1,
    marginTop: hp('0'),
    marginLeft: wp('-3.5'),
  },
  ListContainer1: {
    zIndex: 1000,
    top: isIOS ? hp('8') : hp('7'),
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: wp('3'),
    backgroundColor: COLORS.divider,
    marginVertical: hp('0.5'),
    ...COLORS.shadow,
  },
  ListContentConatiner: {
    paddingVertical: hp('1'),
    paddingHorizontal: wp('3%'),
  },
  ListTxt: {color: COLORS.white, marginTop: hp('0.5')},
  thumbStyle: {
    width: wp('3'),
    height: hp('1.4'),
  },
  trackStyle: {
    paddingVertical: hp('1.3'),
  },
});

export default styles;

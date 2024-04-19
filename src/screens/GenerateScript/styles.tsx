import {StyleSheet} from 'react-native';

import {COLORS} from '../../shared/theme';
import {hp} from '../../utils/dimensionUtils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  colWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: hp('1.7'),
  },
});

export default styles;

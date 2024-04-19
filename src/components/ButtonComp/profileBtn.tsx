import {Image, TouchableOpacity, View} from 'react-native';
import {ImgsPath} from '../../assets/images/ImgsPath';
import styles from './styles';
import {COLORS} from '../../shared/theme';

const ProfileBtn = () => {
  return (
    <TouchableOpacity
      style={styles.profileBtn}
      activeOpacity={0.5}
      onPress={() => {}}>
      <Image source={ImgsPath.profile} style={{height: 42, width: 42}} />
      <View style={styles.smallArrow}>
        <Image source={ImgsPath.smallarrowDown} style={{height: 8, width: 8}} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileBtn;

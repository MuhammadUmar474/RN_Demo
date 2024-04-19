import React from 'react';
import {View} from 'react-native';

import HorizontalView from '../HorizontalView/HorizontalView';
import GoBackBtn from '../ButtonComp/GoBackBTN';
import ProfileBtn from '../ButtonComp/profileBtn';
import {Text14, Text16} from '../Text/Text';
import {COLORS} from '../../shared/theme';
import {hp} from '../../utils/dimensionUtils/dimensions';


const Header = () => {
  return (
    <View>
      <HorizontalView>
        <GoBackBtn />
        <View style={{alignItems: 'center'}}>
          <Text16 textStyle={{color: COLORS.white}}>Media management</Text16>
          <Text14 textStyle={{color: COLORS.white, marginTop: hp('0.5')}}>
            Draft campaign
          </Text14>
        </View>
        <ProfileBtn />
      </HorizontalView>
    </View>
  );
};

export default Header;

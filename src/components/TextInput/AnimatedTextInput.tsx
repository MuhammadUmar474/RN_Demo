import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {hp, wp, isIOS, isd} from '../../utils/dimensionUtils/dimensions';

import {COLORS} from '../../shared/theme';
import {Text10} from '../Text/Text';

const AnimatedTextInput = (props: any) => {
  return (
    <>
      <TextInput
        ref={props.ref1}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        disabled={props.disabled}
        mode="outlined"
        selectionColor={isIOS ? COLORS.black : COLORS.grey300}
        cursorColor={COLORS.white}
        outlineStyle={{borderWidth: 0}}
        textColor={COLORS.white}
        multiline={props.multiline}
        numberOfLines={props.lines}
        placeholder={props?.placeholder || 'placeholder'}
        placeholderTextColor={props.phColor || COLORS.white}
        style={[
          styles.inputStyle,
          props.inputStyle,
          props.height && {height: props.height},
        ]}
        contentStyle={{
          paddingTop: props.height ? hp('2.3') : 0,
          paddingBottom: 0,
        }}
        onSubmitEditing={props?.onSubmitEditing}
        secureTextEntry={props.secureTextEntry}
        theme={
          props?.theme || {
            roundness: props.borderRadius || wp('20'),
            colors: {
              primary: COLORS.white,
            },
          }
        }
        value={props?.value}
        onChangeText={props?.onChangeText}
        left={
          props.left && (
            <TextInput.Icon
              icon={() => props.left}
              style={
                props.multiline && props.height
                  ? styles.leftIcon1
                  : props.multiline && !props.height && styles.leftIcon
              }
            />
          )
        }
        right={
          props.right && (
            <TextInput.Icon
              icon={() => props.right}
              onPress={props.onRightPress}
            />
          )
        }
        caretHidden={props?.caretHidden || false} //IF IT IS TRUE THEN CURSOR WILL NOT B VISIBLE
        outlineColor={props?.isError ? COLORS.error600 : COLORS.white}
      />
      {props?.isError && (
        <Text10 textStyle={styles.errStyle} err>
          {props.error}
        </Text10>
      )}
    </>
  );
};
export default AnimatedTextInput;

const styles = StyleSheet.create({
  inputStyle: {
    width: wp('90%'),
    height: hp('6'),
    alignSelf: 'center',
    borderRadius: wp('40'),
    backgroundColor: COLORS.divider,
    marginTop: hp('0.7'),
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  leftIcon: {
    top: isd ? hp('-1.9') : hp('-2.7'),
  },
  leftIcon1: {
    top: isd ? hp('-4.9') : hp('-5.7'),
  },
  errStyle: {
    marginTop: hp('0.5'),
    marginLeft: wp('1'),
  },
});

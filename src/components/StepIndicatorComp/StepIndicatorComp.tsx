import {memo, useState} from 'react';
import StepIndicator from 'react-native-step-indicator';
import {COLORS} from '../../shared/theme';
import styles from './styles';
import {Image, View} from 'react-native';
import {ImgsPath} from '../../assets/images/ImgsPath';

const StepIndicatorComp = () => {
  const [stepCount, setStepCount] = useState(0);
  const labels = [];
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 55,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: COLORS.primary,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: COLORS.primary,
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: COLORS.primary,
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: COLORS.primary,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: COLORS.primary,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: COLORS.primary,
  };

  const stepImages = [
    ImgsPath.file1,
    ImgsPath.file1,
    ImgsPath.file1,
    ImgsPath.file1,
  ];

  const renderStepIndicator = ({stepCount}: any) => {
    console.log('stepCount', stepCount);
    return (
      <View style={styles.stepIndicator}>
        <Image source={stepImages[0]} style={{width: 25, height: 25}} />
      </View>
    );
  };

  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={stepCount}
      // labels={labels}
      renderStepIndicator={renderStepIndicator}
    />
  );
};

export default memo(StepIndicatorComp);

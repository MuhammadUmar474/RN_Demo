import React, {useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import Header from '../../components/Header/Header';
import LineView from '../../components/LineView/LineView';
import ButtonComp from '../../components/ButtonComp/ButtonComp';
import SliderComp from '../../components/SliderComp/SliderComp';
import {hp, isAndroid, wp} from '../../utils/dimensionUtils/dimensions';
import {Text14, Text16, Text24} from '../../components/Text/Text';
import {COLORS} from '../../shared/theme';
import {
  EducationData,
  FactsData,
  FunData,
  InvestmentData,
  NewsData,
  OptionsData,
  SportsData,
} from '../../assets/dummyData/DummyData';
import StepIndicatorComp from '../../components/StepIndicatorComp/StepIndicatorComp';
import Capsule from '../../components/Capsule/Capsule';
import Spacer from '../../components/Spacer/Spacer';
import Dropdown from '../../components/Dropdown/Dropdown';

const GenerateScript = () => {
  const [dataList, setDataList] = useState(FunData);
  const [showList, setShowList] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('Fun');

  const handleOption = (title: string) => {
    setSelectedItem(title);

    switch (title) {
      case 'Fun':
        setDataList(FunData);
        break;

      case 'Education':
        setDataList(EducationData);
        break;

      case 'Sports':
        setDataList(SportsData);
        break;

      case 'News':
        setDataList(NewsData);
        break;

      case 'Investments':
        setDataList(InvestmentData);
        break;

      case 'Facts':
        setDataList(FactsData);
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        nestedScrollEnabled={true}
        style={{width: wp('90'), marginTop: isAndroid ? hp('5') : hp('0')}}>
        <Header />

        <Text24 textStyle={{color: COLORS.white, marginTop: hp('2')}}>
          Content type
        </Text24>
        <Text14 textStyle={{color: COLORS.white, marginTop: hp('0.5')}}>
          Choose a content type that best fits your needs.
        </Text14>

        <LineView style={{marginTop: hp('5')}} />

        <Text16 textStyle={{color: COLORS.white, marginTop: hp('5')}}>
          What type of content are you creating?
        </Text16>

        <Spacer height={hp('2')} />

        <FlatList
          data={OptionsData}
          numColumns={3}
          columnWrapperStyle={styles.colWrapperStyle}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Capsule
              title={item.title}
              selectedItem={selectedItem}
              onPress={() => handleOption(item.title)}
            />
          )}
        />

        <Spacer height={hp('2')} />

        <Text16 textStyle={{color: COLORS.white}}>
          Which type of “{selectedItem}“ content are you creating?
        </Text16>

        <Spacer height={hp('2')} />

        <Dropdown
          multiple
          listStyle={{top: hp('1')}}
          height={hp('7')}
          data={dataList}
          showList={showList}
          setShowList={setShowList}
          ListItem={dataList}
          setListItem={setDataList}
          headingTxtPlaceHolder="Select"
          HeadingTxtWidth={wp('40%')}
        />

        <SliderComp />

        <ButtonComp btnName={'Next'} styleBtn={{marginTop: hp('5')}} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default GenerateScript;

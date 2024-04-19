import {useCallback, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../utils/dimensionUtils/dimensions';
import {Feather} from '../../shared/vectorIcons';

import {Text10, Text12, Text14, Text16} from '../Text/Text';
import {COLORS} from '../../shared/theme';
import styles from './styles';
import HorizontalView from '../HorizontalView/HorizontalView';
import AnimatedTextInput from '../TextInput/AnimatedTextInput';

const Dropdown = (props: any) => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props?.setListItem(item);
          props?.setShowList(!props?.showList);
        }}>
        <View key={index} style={styles.ListContentConatiner}>
          <Text12 textStyle={styles.ListTxt}>{item}</Text12>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMultipleItem = ({item, index}: any) => {
    return (
      <TouchableOpacity onPress={() => handleMultiple(index)}>
        <View key={index} style={styles.ListContentConatiner}>
          {item?.selected ? (
            <HorizontalView>
              <Text16 textStyle={styles.ListTxt}>{item?.title}</Text16>
              <Feather name="check" size={wp('3.5')} color={COLORS.white} />
            </HorizontalView>
          ) : (
            <Text16 textStyle={styles.ListTxt}>{item?.title}</Text16>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const handleMultiple = (index: number) => {
    let copy = [...props?.data];
    copy[index].selected = !copy[index].selected;
    props?.setListItem(copy);
  };

  const handlePress = () => {
    props?.setShowList(!props?.showList);
  };

  const handleSearch = useCallback(
    (query: string) => {
      setQuery(query);
      if (query.length > 2) {
        let filtered = props.data.filter((el: any) => {
          if (el?.title.toLowerCase().includes(query.toLowerCase())) {
            return el;
          }
        });
        setFiltered(filtered);
      } else setFiltered([]);
    },
    [query],
  );

  return (
    <View style={{zIndex: 1}}>
      <View
        style={[
          {
            borderColor: props?.error ? COLORS.error600 : COLORS.grey300,
            height: props?.height || hp('6'),
            width: props?.width || wp('90%'),
            ...styles.Container,
          },
          props.containerStyle,
          props.showList && styles.bodrer,
        ]}>
        <TouchableOpacity onPress={handlePress}>
          <HorizontalView padding={hp('1')} paddingHorizontal={wp('4.5')}>
            {props?.showList ? (
              <AnimatedTextInput
                inputStyle={styles.searchInput}
                placeholder="Search"
                value={query}
                onChangeText={handleSearch}
              />
            ) : (
              <HorizontalView justifyContent="flex-start">
                {props.leftIcon}
                <Text14
                  textStyle={[
                    props.valStyle,
                    styles.headingTxtPlaceHolder,
                    props?.ListItem && styles.listItem,
                    props.leftIcon && {marginLeft: wp('4.5')},
                  ]}>
                  {props.multiple
                    ? props?.headingTxtPlaceHolder
                    : props?.showList ||
                      (typeof props?.ListItem == 'string' &&
                        props.ListItem != '')
                    ? props?.ListItem
                    : props?.headingTxtPlaceHolder}
                </Text14>
              </HorizontalView>
            )}

            <HorizontalView justifyContent="flex-start">
              {props.image}

              {props?.icon || (
                <Feather
                  name={props?.showList ? 'chevron-up' : 'chevron-down'}
                  color={COLORS.white}
                  size={24}
                />
              )}
            </HorizontalView>
          </HorizontalView>
        </TouchableOpacity>
      </View>

      {props?.isError && <Text10 err>{props.error}</Text10>}

      {props?.multiple && props?.showList ? (
        <View
          style={{
            width: props?.width || wp('90%'),
            ...styles.ListContainer1,
            ...props.listStyle,
          }}>
          {props?.data.length > 0 && (
            <FlatList
              style={
                props.listHeight
                  ? {
                      height: props.listHeight,
                    }
                  : {maxHeight: hp('20%')}
              }
              data={filtered.length > 0 ? filtered : props?.data}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={renderMultipleItem}
            />
          )}
        </View>
      ) : (
        props?.showList && (
          <View
            style={{
              width: props?.width || wp('90%'),
              ...styles.ListContainer,
              ...props.listStyle,
            }}>
            <FlatList
              style={
                props.listHeight
                  ? {
                      height: props.listHeight,
                    }
                  : {maxHeight: hp('20%')}
              }
              data={props?.data}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
            />
          </View>
        )
      )}
    </View>
  );
};

export default Dropdown;

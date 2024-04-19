import React from 'react';
import {View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import GenerateScript from './src/screens/GenerateScript/GenerateScript';
import {StatusBarComp} from './src/components/StatusBar/StatusBar';

const App = () => {
  return (
    <PaperProvider>
      <View style={{flex: 1}}>
        <>
          <StatusBarComp />
          <GenerateScript />
        </>
      </View>
    </PaperProvider>
  );
};

export default App;

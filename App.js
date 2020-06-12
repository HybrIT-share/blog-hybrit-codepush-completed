/**
 * HybrITCodePushExampleBase
 * https://github.com/HybrIT-share/blog-hybrit-codepush-base
 *
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Main from './src/screens/Main';

import codePush from 'react-native-code-push';

let codePushOptions = {
  updateDialog: true,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default codePush(codePushOptions)(App);

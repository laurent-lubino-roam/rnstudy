/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Avatar from './components/Avatar';
import Card from './components/Card';
import Typography from './components/Typography';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Card>
          <Avatar url="https://ca.slack-edge.com/T045Y2Z8Q-UNXFC26MC-745d174ae812-512" />
          <Typography text={"Hi, i'm a title"} variant="title" />
          <Typography text={"Hi, i'm a paragraph"} variant="paragraph" />
        </Card>
      </SafeAreaView>
    </>
  );
};

export default App;

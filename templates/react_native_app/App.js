import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Items from './Items';

const App = () => (
<>
  <StatusBar barStyle="dark-content" />
    <ScrollView
      style={styles.scrollView}>
      <Items
        items={['item 1', 'item 2', 'item 3']}/>
    </ScrollView>
</>
)

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.dark,
  }
});

export default App;

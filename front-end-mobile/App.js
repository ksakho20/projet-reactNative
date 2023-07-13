import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';

//Composants
// import Articles from './screens/articles/getArticles';
// import PostArticles from './screens/articles/postArticles';

import AppNavigation from './navigation';
export default function App() {
  return (
    <>
     {/* <View style={styles.container}> */}
      <AppNavigation />
      <StatusBar style="auto" />
    {/* // </View> */}
    </>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
})

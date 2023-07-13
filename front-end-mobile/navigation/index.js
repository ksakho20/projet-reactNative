// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import GetArticle from '../screens/articles/getArticles';
// import PostArticles from '../screens/articles/postArticles';
// import DetailArticle from '../screens/articles/detailArticle';

// const Stack = createNativeStackNavigator();
// const Tabs = createBottomTabNavigator();

// export function ArticleStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Articles" component={GetArticle} />
//       <Stack.Screen name="Detail" component={DetailArticle} />
//     </Stack.Navigator>
//   );
// }

// export default function AppNavigation() {
//   return (
//     <NavigationContainer>
//       <Tabs.Navigator screenOptions={{ headerShown: false }}>
//         <Tabs.Screen name="Home" component={GetArticle} />
//         <Tabs.Screen name="Add" component={PostArticles} />
//       </Tabs.Navigator>
//     </NavigationContainer>
//   );
// }


import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// COMPOSENTS
import GetArticle from '../screens/articles/getArticles'
import PostArticles from '../screens/articles/postArticles'
import DetailArticle from '../screens/articles/detailArticle'

const Tabs = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export function ArticleStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name='Articles'  component={GetArticle} />
      <Stack.Screen name='Detail'  component={DetailArticle} />
    </Stack.Navigator>
  )
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{ headerShown: false }} >
        <Tabs.Screen name="Home" component={ArticleStack} />
        <Tabs.Screen name='Add'  component={PostArticles} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
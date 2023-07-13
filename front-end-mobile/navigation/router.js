import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GetArticle from '../screens/articles/getArticles'
import PostArticles from '../screens/articles/postArticles'
import DetailArticle from '../screens/articles/detailArticle'
import ListArticle from '../screens/articles/listArticle'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function TabNavigator(){
    
}
export function StackNavigator(){

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={GetArticle}/>
                <Stack.Screen name='Add' component={PostArticles}/>
                {/* <Stack.Screen name='detail' component={DetailArticle}/> */}
                <Stack.Screen name="list" component={ListArticle} />
                <Stack.Screen name="detail" component={DetailArticle} />

            </Stack.Navigator>    
        </NavigationContainer>
    )
}
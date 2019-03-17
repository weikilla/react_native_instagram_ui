/**
 * Description:
 * Date: 2019/3/17
 * Time: 10:37
 *
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import  {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import  SearchTab from './SearchTab'
import  AddMediaTab from './AddMediaTab'
import  HomeTab from './HomeTab'
import  LikesTab from './LikesTab'
import  ProfileTab from './ProfileTab'

export default class MainScreen extends Component<Props> {
    static navigationOptions = {
        title: "Instagram",
        headerTitleStyle :{textAlign: 'center',alignSelf:'center',width: '100%',},
        headerLeft:<Feather name={'camera'} size={24} style={{paddingLeft:12}}/>,
        headerRight:<Feather name={'send'} size={24} style={{paddingRight:12}}/>,
    };

    render() {
        return (
           <AppTabNavigator />
        );
    }
}

const AppTabNavigator = createAppContainer(createBottomTabNavigator({
    HomeTab:{
        screen:HomeTab
    },
    SearchTab:{
        screen:SearchTab
    },
    AddMediaTab:{
        screen:AddMediaTab
    },
    LinksTab:{
        screen:LikesTab
    },
    ProfileTab:{
        screen:ProfileTab
    },
},{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions:{
        showLabel: false,
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        style:{
            ...Platform.select({
                android:{
                    backgroundColor: 'white'
                }
            })
        }

    }
}));


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

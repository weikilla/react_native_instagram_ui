/**
 * Description:
 * Date: 2019/3/17
 * Time: 15:57
 *
 */
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
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {createTabNavigator, createAppContainer} from 'react-navigation'
import {Icon, Card, CardItem, Thumbnail, Body, Left, Right, Button} from "native-base";

export default class CardComponent extends Component<Props> {


    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-heart" style={{color: tintColor}}/>

        )
    };

    render() {
        const images = {
            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),

        };
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.png')}/>
                        <Body>
                        <Text>WeiKilla</Text>
                        <Text note>Jan 15, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem style={{height: 46}}>
                    <Left>
                        <Button transparent>
                            <AntDesign name='hearto' size={20} style={{color: 'black'}}/>
                        </Button>
                        <Button transparent>
                            <AntDesign name='message1' size={20} style={{color: 'black'}}/>
                        </Button>
                        <Button transparent>
                            <AntDesign name='sharealt' size={20} style={{color: 'black'}}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height: 20}}>
                    <Text>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text><Text style={{fontWeight: "900", color: '#000'}}>WeiKilla </Text> Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                        to make a type specimen book. </Text>
                    </Body>
                </CardItem>

            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

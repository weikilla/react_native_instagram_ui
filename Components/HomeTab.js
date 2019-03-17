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
import {Icon, Container, Content} from 'native-base'
import CardComponent from './CardComponent'

export default class HomeTab extends Component<Props> {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-home" style={{color: tintColor}}/>

        )
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <CardComponent imageSource="1" likes="101"/>
                    <CardComponent imageSource="2" likes="999"/>
                </Content>
            </Container>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

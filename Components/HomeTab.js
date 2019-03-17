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
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Container, Content, Icon, Thumbnail} from 'native-base'
import CardComponent from './CardComponent'
import globalStyle from '../assets/globalStyle'

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
                    <View style={{height: 100}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 8
                        }}>
                            <Text style={[globalStyle.blackText, globalStyle.blodText]}>Stories</Text>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Icon name="play" style={{fontSize:14}} />
                                <Text style={[globalStyle.blackText, globalStyle.blodText]}> Watch All</Text>
                            </View>
                        </View>
                        <View style={{flex: 3}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems:'center',
                                    paddingStart: 5,
                                    paddingEnd:5
                                }}
                            >
                                <Thumbnail source={require('../assets/avatar/avatar_1.jpeg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../assets/avatar/avatar_2.jpeg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../assets/avatar/avatar_3.jpeg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../assets/avatar/avatar_4.jpeg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../assets/avatar/avatar_5.jpeg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../assets/avatar/avatar_6.jpeg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../assets/avatar/avatar_7.jpeg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../assets/avatar/avatar_8.jpeg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                                <Thumbnail source={require('../assets/avatar/avatar_9.jpeg')}
                                           style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}/>
                            </ScrollView>
                        </View>

                    </View>
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

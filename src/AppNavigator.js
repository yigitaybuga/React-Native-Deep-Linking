import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from "./screens/HomePage";
import DetailPage from "./screens/DetailPage";

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HomePage">
                    <Stack.Screen name="HomePage" component={HomePage}/>
                    <Stack.Screen name="DetailPage" component={DetailPage}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({});

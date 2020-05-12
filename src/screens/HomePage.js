import React, {Component} from 'react';
import {Linking, Platform, StyleSheet, Text, View} from 'react-native';


export default class HomePage extends Component {

    componentDidMount = async () => {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                this.navigate(url);
            });
        } else {
            Linking.addEventListener('url', this.handleOpenURL);
        }
    }

    componentWillUnmount(){
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL = (event) => {
        this.navigate(event.url);
    }
    navigate = (url) => {
        const route = url.replace(/.*?:\/\//g, '');
        const id = route.match(/\/([^\/]+)\/?$/)[1];
        const routeName = route.split('/')[0];

        if (routeName === 'detail') {
            this.props.navigation.navigate('DetailPage', { id })
        };
    }

    render() {
        return (
            <View style={styles.container}><Text>HomePage</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

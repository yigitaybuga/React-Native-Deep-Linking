import React, {Component} from 'react';
import {StyleSheet, Text, View,AppState} from 'react-native';


export default class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.route.params.id
        }
    }

    componentDidMount =  () => {
        AppState.addEventListener('change', this._handleAppStateChange);
    }
    _handleAppStateChange = (nextAppState) => {
        if (nextAppState === 'active') { // App has come to the foreground
            if(this.state.id != this.props.route.params.id) // Need to get data
            this.setState({
                id:this.props.route.params.id
            })
        }
    };

    render() {
        return (
            <View style={styles.container}><Text>DetailPage {this.state.id}</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

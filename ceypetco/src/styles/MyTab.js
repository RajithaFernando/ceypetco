import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
export default class MyTab extends Component {
    render() {
        const { text, onPress } = this.props;
        return (

            <TouchableOpacity activeOpacity={.5} onPress={() => onPress()}>
                <LinearGradient colors={['#FFFFFF', '#FFFFFF','#F19B9B']} style={styles.LinearGradientStyle} >
                    <Text style={styles.buttonText}> {text} </Text>
                </LinearGradient>
            </TouchableOpacity>

        );
    }
}
MyTab.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
};

const styles = StyleSheet.create({
    LinearGradientStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 3,
        marginBottom: 20,
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 7,
        color: '#02090A',
        backgroundColor: 'transparent',
        fontWeight: '500'
    },
});
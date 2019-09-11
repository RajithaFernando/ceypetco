import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
export default class MyButton extends Component {
    render() {
            const { text, onPress} = this.props;
        return (
            
                <TouchableOpacity activeOpacity={.5} onPress={() => onPress()}>
                    <LinearGradient colors={['#FFFFFF', '#FFFFFF' ,'#FFFFFF']} style={styles.LinearGradientStyle} >
                        <Text style={styles.buttonText}> {text} </Text>
                    </LinearGradient>
                </TouchableOpacity>
            
        );
    }
}
MyButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
};

const styles = StyleSheet.create({
    LinearGradientStyle: {
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginBottom: 20,
        
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 7,
        color: '#C10900',
        backgroundColor: 'transparent',
        fontWeight:'bold'
    },
});
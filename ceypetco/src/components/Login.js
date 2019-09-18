import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from '../img/icon.png'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

import MyButton from '../styles/MyButton'
import MyTab from '../styles/MyTab'

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        
    }
    loginHandlr = () => {
        storeData = async (email) => {
            try {
                await AsyncStorage.setItem('LogedIN', email)
                console.log('tried')
            } catch (e) {
                console.log(e)
            }
        }
        storeData(this.state.email)
        this.props.navigation.navigate('Profile', { email: this.state.email })

    }

    render() {
        return (
            <LinearGradient colors={['#FC0B00','#590703', '#590703', '#000000']} style={styles.linearGradient}>
                <View style={styles.container}>
                    <View>
                        <Image source={logo} />
                    </View>
                    <View style={styles.elimentroup}>
                        <TextInput
                            autoFocus={true}
                            style={styles.input}
                            autoCapitalize="none"
                            placeholder="Enter Email or Username"
                            autoCapitalize="none"
                            keyboardType='email-address'
                            returnKeyType="next"
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            onChangeText={email =>
                                this.setState({ email })}
                        />
                        <TextInput
                            style={styles.input}
                            returnKeyType="go"
                            placeholder='Password'
                            placeholderTextColor='rgba(225,225,225,0.7)'
                            secureTextEntry
                            onChangeText={password =>
                                this.setState({ password })}
                        />
                        <MyButton onPress={this.loginHandlr} text="Login" />

                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#004b8e',
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        margin: 15,
        height: 40,
        padding: 5,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#FFFFFF",
        justifyContent: "center",
        color: '#FFFFFF',
        width: 250
    },
    loginbutton: {
        justifyContent: "center",
        flexDirection: 'row',
        backgroundColor: "#CDDBED",
        alignItems: "center",
        marginLeft: 15,
        marginRight: 15,
        padding: 10,
        width: 150,
        paddingVertical: 15,
        borderRadius: 10,
        fontFamily: 'lucida grande'
    },
    logintext: {
        color: '#000000',
        fontWeight: "700",
        justifyContent: "center",
        backgroundColor: 'transparent'
    },
    logo: {
        flex: 1,
        justifyContent: "center",
        width: 250,
        height: 250,
        resizeMode: 'contain'

    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 0
    },
    elimentroup: {
        alignItems: "center"
    },
    LinearGradientStyle: {

    },

    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 7,
        color: '#fff',
        backgroundColor: 'transparent'

    },

});

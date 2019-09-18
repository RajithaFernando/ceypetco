import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

export default class Landing extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    componentDidMount() {
        getData = async () => {
            try {
                const value = await AsyncStorage.getItem('LogedIN')
                if (value !== null) {
                    this.props.navigation.navigate('Profile', { email: value })
                    console.log(value)

                }
                else {
                    console.log('ELSE')
                    this.props.navigation.navigate('Login')
                }
            }
            catch (e) {
                console.log(e)
            }
        }
        getData()
    }


    render() {
        return (
            <LinearGradient colors={['#FC0B00','#590703', '#590703', '#000000']} style={styles.linearGradient}>
                <View style={styles.container}>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={require('../img/loadin.png')}
                    />
                    <Text style={styles.info}>Loading Ceypetco App</Text>
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

    info: {
        paddingTop: 40,
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
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
        // paddingLeft: 15,
        // paddingRight: 15,
        borderRadius: 0
    },
    elimentroup: {
        alignItems: "center"
    },
    LinearGradientStyle: {

    },



});

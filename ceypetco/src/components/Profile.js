import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { BackHandler } from "react-native";

import MyTab from '../styles/MyTab'
import MyButton from '../styles/MyButton';

export default class Profile extends Component {


    constructor(props) {
        super(props);
        this.state = {
        };

        getData = async () => {
            try {
                const value = await AsyncStorage.getItem('LogedIN')
                if (value !== null) {
                    console.log(value)

                }
            } catch (e) {
                console.log(e)
            }
        }
        getData()
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Profile',
            headerLeft: null,
            headerRight: (
                <TouchableHighlight onPress={navigation.getParam('logout')}>
                    <Image style={{ width: 40, height: 40 }}
                        source={require('../img/logout.png')}
                    />
                </TouchableHighlight>
            ),
            headerStyle: {
                backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '400',
            },
        }
    };

    componentDidMount() {
        this.props.navigation.setParams({ logout: this.logout });
    }
    addDetails = () => {
        this.props.navigation.navigate('DetailsEnter')
    }
    logout = () => {
        Alert.alert(
            "Logging Out",
            "Are you sure you want to log out ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: async () => {
                        try {
                            await AsyncStorage.removeItem('LogedIN')
                            this.props.navigation.navigate('Login')
                        }
                        catch (e) {
                            console.log(e)
                        }
                    }
                }
            ],

        );

    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton = () => {
        Alert.alert(
            'Exit App',
            'Do you want to exit?',
            [
                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'Yes', onPress: () => BackHandler.exitApp() },
            ],
            { cancelable: false });
        return true;
    }
    render() {
        const { navigation } = this.props;
        const email = navigation.getParam('email', 'NO-User');
        return (
            <LinearGradient colors={['#D30101', '#590703','#000000', '#000000']} style={styles.linearGradient}>
                <View style={styles.container}>
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            {
                                this.props.navigation.state.params.email
                                    ? <Text style={styles.name}>{this.props.navigation.state.params.email}</Text>
                                    : <Text style={styles.name}>NO USER SELECTED</Text>

                            }

                            <Text style={styles.info}>Select What you want</Text>
                            <View style={styles.elimentroup}>

                                <MyTab text="Get Reports" onPress={this.addDetails} />
                                <MyTab text="Other Function" onPress={this.addDetails} />
                                <MyTab text="Some Other Function" onPress={this.addDetails} />

                            </View>

                        </View>
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

    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 28,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 0
    },
    elimentroup: {
        alignItems: "center"
    }
});
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { BackHandler } from "react-native";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

import MyButton from '../styles/MyButton'
export default class DetailsEnter extends Component {
    static navigationOptions = {
        title: 'Reports',
        headerStyle: {
            backgroundColor: '#000000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: '400',
        },

    };


    constructor(props) {
        super(props);
        this.state = {
            Lname: 'sasas',
            Fname: '',
            nic: '',
            mobile: '',
            tableHead: ['', 'Head1', 'Head2', 'Head3'],
            tableTitle: ['Title', 'Title2', 'Title3', 'Title4'],
            tableData: [['1', '2', '3'], ['a', 'b', 'c'], ['1', '2', '3'], ['a', 'b', 'c']],

        };
        this.handleBackButton = this.handleBackButton.bind(this)
        this.textupdate = this.textupdate.bind(this)
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

    textupdate = (event, name) => {
        // const name = event.target && event.target.name;
        // const value = event.target && event.target.value;

        // this.setState({[name]: value});
        console.log(name)
    }
    submitDetails = () => {
        // alert("Details Submited Succesfully")
        alert(this.state.Fname + this.state.Lname)
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    handleBackButton() {
        this.props.navigation.navigate('Profile')
        console.log(this)
        return true;
    }


    render() {
        return (
            <LinearGradient colors={['#D30101', '#590703', '#000000', '#000000']} style={styles.linearGradient}>
                <View style={styles.container}>
                   
                        <Table borderStyle={{ borderWidth: 1 }}>
                            <Row data={this.state.tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text} />
                            <TableWrapper style={styles.wrapper}>
                                <Col data={this.state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                                <Rows data={this.state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text} />
                            </TableWrapper>
                        </Table>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        // backgroundColor: '#fff',
        // justifyContent: "center",
        // alignItems: "center"
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 0
    },
    
    head: { height: 40, backgroundColor: '#f1f8ff' },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: { height: 28 ,backgroundColor: '#f6f8fa'},
    text: { textAlign: 'center' }
});

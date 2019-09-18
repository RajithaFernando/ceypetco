import React, { Component } from 'react';
import { View, Text, Button, ScrollView, Image, CameraRoll ,StyleSheet} from 'react-native';
// import Camera from 'react-native-camera';

export default class AddPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: '',
        };
    }
   


    render() {
        return (
            <View style={styles.container}>
                
                
                <Text>asjdkjaskjdlj</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
})
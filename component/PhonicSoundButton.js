import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av'

export default class PhonicSoundButton extends React.Component {
    playSound = async (soundpiece) => {
        var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundpiece + '.mp3'
        await Audio.Sound.createAsync(
            { uri: soundLink },
            { shouldPlay: true }
        )
    }
    render() {
        return (
            <TouchableOpacity style={styles.chunkButton} onPress={() => this.playSound(this.props.soundChunk)}>
                <Text style={styles.displayText}>
                    {this.props.wordChunk}
                </Text>
            </TouchableOpacity>
        )
    }
}



const styles = StyleSheet.create({
    displayText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white'
    },
    chunkButton: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'red'
    }
});
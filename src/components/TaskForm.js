import React from 'react';
import { StyleSheet, Text, View, ListView, TextInput, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'flex-start',
       paddingTop: 150,
       backgroundColor: '#f7f7f7'
    },
    input : {
        borderWidth: 1,
        borderColor: '#d7d7d7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        padding: 15,
        borderRadius: 3
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05a5d1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 19,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fafafa'
    },
    cancelButton: {
        backgroundColor: '#666'
    }

})

export default class TaskForm extends React.Component {

    constructor(props) {
        super(props);
       this.state = {
           task: ''
       }
    }

   onChange(text) {
       this.task = text;
   }

   onAddPressed() {
       this.props.onAdd(this.task);
   }

  render() {
    return (
        <View  style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={this.onChange.bind(this)}
            />
            <TouchableHighlight style={styles.button} onPress={this.onAddPressed.bind(this)}>
                <Text style={styles.buttonText}>
                    Add
                </Text>
            </TouchableHighlight>
            <TouchableHighlight 
                style={[styles.button, styles.cancelButton]}
                onPress={this.props.onCancel}
            >
                <Text  style={styles.buttonText}>
                    Cancel
                </Text>
            </TouchableHighlight>
        </View>
    );
  }
}


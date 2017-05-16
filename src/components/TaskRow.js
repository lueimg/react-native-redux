import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e7e7e7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    label: {
        fontSize: 20,
        fontWeight: '300'
    },
    doneButton: {
        borderRadius: 5,
        backgroundColor: '#eaeaea',
        padding: 5,

    }
})

export default class TaskRow extends React.Component {

    constructor(props) {
        super(props);
       
    }

    onDonePressed() {
        this.props.onDone(this.props.todo)
    }

   

  render() {
    return (
        <View  style={styles.container}>
            <Text style={styles.label}> 
                {this.props.todo.task}
            </Text>
            <TouchableHighlight style={styles.doneButton} onPress={this.onDonePressed.bind(this)}>
                <Text>
                    Done
                </Text>
            </TouchableHighlight>
        </View>
    );
  }
}


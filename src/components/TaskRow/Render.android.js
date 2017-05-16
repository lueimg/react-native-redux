import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight } from 'react-native';



export default function render(styles) {
    return (
        <View  style={styles.container}>
            <Text style={styles.label}> 
                And: {this.props.todo.task}
            </Text>
            <TouchableHighlight style={styles.doneButton} onPress={this.onDonePressed.bind(this)}>
                <Text>
                    Done
                </Text>
            </TouchableHighlight>
        </View>
    );
  }


import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableHighlight, Switch } from 'react-native';
import TaskRow from './TaskRow/Component';

const styles = StyleSheet.create({
  button: {
      height: 60,
      borderColor: '#05a5d1',
      borderWidth: 2,
      backgroundColor: '#333',
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center'
  },
  buttonText: {
      color: '#fafafa',
      fontSize: 20,
      fontWeight: '600'
  }
});


export default class TaskList extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.todos)
        }
    }

    renderRow(todo) {
        return (
            <TaskRow todo={todo} onDone={this.props.onDone}/>
        )
    }

    componentWillReceiveProps(nextProps) {
        const dataSource = this.state.dataSource.cloneWithRows(nextProps.todos);
        this.setState({dataSource})
    }

  render() {
    return (
        <View>
            <View>
                <Switch value={this.props.filter !== 'pending' } />
                <Text>Showing {this.props.todos.length} {this.props.filter} todo(s)</Text>
            </View>
            <ListView
                dataSource={this.state.dataSource}
                key={this.props.todos}
                renderRow={this.renderRow.bind(this)}
            />
            <TouchableHighlight 
                style={styles.button}
                onPress={this.props.onAddStarted}
            >
                <Text style={styles.buttonText}>
                    Add one
                </Text>
            </TouchableHighlight>
        </View>
    );
  }
}


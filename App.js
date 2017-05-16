import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import TaskList from './src/components/TaskList.js';
import TaskFrom from './src/components/TaskForm.js'
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          task: 'learn react native'
        },
        {
          task: 'learn redux'
        },
        {
          task: 'learn react styles'
        }

      ]
    }
  }

  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    })
  }

  

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  onAdd(task) {
    this.state.todos.push({task});
    this.setState({
      todos: this.state.todos
    })
    this.nav.pop();
  }

  onCancel() {
    this.nav.pop();
  }

  onDone(todo) {
    console.log('task was completed', todo);
    const filteredTodos = 
      this.state.todos.filter((filterTodo) => {
        return filterTodo !== todo;
      })
      this.setState({todos: filteredTodos})
  }

  renderScene(route, nav) {
    switch(route.name) {
      case 'taskform': 
        return <TaskFrom 
                  onCancel={this.onCancel.bind(this)} 
                  onAdd={this.onAdd.bind(this)} 
                  
                />
      default:
        return (
          <View style={styles.container}>
            <TaskList 
                todos={this.state.todos} 
                onAddStarted={this.onAddStarted.bind(this)} 
                onDone={this.onDone.bind(this)}
            />
          </View>
        )
    }
  }


  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{name: 'tasklist', index: 0}}
        ref={(nav)=>{ this.nav = nav }}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#f7f7f7',
    flex: 1,
    justifyContent: 'flex-start'
  },
});

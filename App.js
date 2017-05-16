import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import TaskList from './src/components/TaskList.js';
import TaskFrom from './src/components/TaskForm.js'
import store from './todoStore';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
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
    // this.state.todos.push({task});
    // this.setState({
    //   todos: this.state.todos
    // })
    store.dispatch({
      type: 'ADD_TODO',
      task
    });

    this.nav.pop();
  }

  onCancel() {
    this.nav.pop();
  }

  onDone(todo) {
    store.dispatch({
      type: 'DONE_TODO',
      todo
    })
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

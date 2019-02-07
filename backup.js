import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  TextInput,
  Keyboard,
  Platform
} from 'react-native';
import { Icon, Button, Header } from 'react-native-elements'

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class TodoList extends Component {
  constructor(props){
    super(props)
    this.state={
      tasks: [],
      text: ""
    }
  }

  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewPadding: viewPadding })
    );

    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;
          return {
            tasks: tasks.concat({ key: tasks.length, text: text }),
            text: ""
          };
        },
        () => Tasks.save(this.state.tasks)
      );
    }
  };

  deleteTask = i => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();

        tasks.splice(i, 1);

        return { tasks: tasks };
      },
      () => Tasks.save(this.state.tasks)
    );
  };

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}
      >
      <Header
        backgroundColor='#000000'
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'S K E T C H', style: { color: '#fff', fontSize:20, fontWeight: 'bold' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        // statusBarProps={{ barStyle: 'light-content' }}
        // barStyle="light-content"
        // containerStyle={{
        //   backgroundColor: '#3D6DCC',
        //   justifyContent: 'space-around',
        // }}
      />
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <Button
                  backgroundColor='#000000'
                  //style={styles.deleteButton}
                  //title="X"
                  onPress={() => {
                    this.deleteTask(index)
                  }}
                  icon={
    <Icon
      name="delete"
      size={15}
      color="white"
    />
  }
  iconRight
                  />
              </View>
              <View style={styles.hr} />
            </View>}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="Add Tasks"
          returnKeyType="done"
          returnKeyLabel="done"
          placeholderTextColor="black"
        />
      </View>
    );
  }
}

let Tasks = {
  convertToArrayOfObject(tasks, callback) {
    return callback(
      tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(tasks) {
    return tasks.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("TASKS", (err, tasks) =>
      this.convertToArrayOfObject(tasks, callback)
    );
  },
  save(tasks) {
    AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c0c4c6",
    //padding: viewPadding,
    //paddingTop: 30
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft:7,
    fontSize: 18,
  },
  hr: {
    height: 1,
    //backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:'#f9cd54',
    margin:5,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 12 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 3,
    borderRadius:3,
  },
  deleteButton:{
    backgroundColor: 'red',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "95%",
    borderWidth: 2,
    borderRadius:10,
    borderColor:'black',
    margin:5
  }
});

AppRegistry.registerComponent("TodoList", () => TodoList);

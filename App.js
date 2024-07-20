import { useState } from "react";
import GoalItems from "./components/GoalItems";
import GoalInput from "./components/GoalInput";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Modal,
  Image

} from "react-native";

export default function App() {
  const [enteredGoal, setenteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible,setModalVisible] = useState(false);
  function startGoalAddHandler(){
    setModalVisible(true);
  }
  function endGoalAddHandler(){
    setModalVisible(false);
  }
  function onTextChangeHandler(enteredText) {
    setenteredGoal(enteredText);
  }
  function onButtonPressed() {
    setCourseGoals((currentGoalValue) => [
      ...currentGoalValue,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    endGoalAddHandler();
  }
  function deleteGoalHandler(id){
    setCourseGoals((currentGoalValue)=>{
      return currentGoalValue.filter((goal) => goal.id != id );
    })
  }
  return (
    <View style={styles.appContainer}>
      <Text style={styles.titleText}>GOAL SETTER</Text>
      <Image style={styles.image} source={require('../RNcourse/assets/images/goal.png')}/>
      <Button title="Tap to add new goal" color={"#6577D2"} onPress={startGoalAddHandler}/>
      <GoalInput visible={modalVisible} onCancel={endGoalAddHandler} textChange={onTextChangeHandler}  buttonPress={onButtonPressed}/>
      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItems text={itemData.item.text} id={itemData.item.id} onDeleteHandler={deleteGoalHandler}/>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor:"#65B1D2"
  },
  titleText: {
    fontSize: 30,
    color: "#ffffff",
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginHorizontal:50
  },
 
  goalListContainer: {
    flex: 5,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  listTile: {
    width: "90%",
    height: 45,
    padding: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "#cccccc",
    backgroundColor: "#6577D2",
  },
  image:{
    width:200,
    height:200,
    marginHorizontal:50
  },
});

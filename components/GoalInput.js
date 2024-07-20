import { StyleSheet,View,Text,Button,TextInput,Modal,Image } from "react-native"
function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
    <Image style={styles.image} source={require('../assets/images/goal.png')}/>
    <TextInput
      placeholder="Enter your goal!"
      style={styles.textinputStyle}
      onChangeText={props.textChange}
      placeholderTextColor="#ffffff" 
    />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSubContainer1}>
          <Button title="Add Goal " onPress={props.buttonPress} />
        </View>
        <View  style={styles.buttonSubContainer2}>
          <Button title="Cancel" color={"red"} onPress={props.onCancel}/>
        </View>
  </View>
  </View>

  </Modal>
  )
}

export default GoalInput


const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#8A8686",
        padding:17,
        backgroundColor:"#65B1D2"
      },
      textinputStyle: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: "#cccccc",
        width: "100%",
        color:"#ffffff"
      },
      buttonContainer:{
        width:"70%",
        flexDirection:"row",
        marginVertical:10,

      },
      buttonSubContainer1:{
        width:"40%",
        marginHorizontal:12,
        marginTop:10
      },
      buttonSubContainer2:{
        marginTop:10,
        width:"40%",
        marginHorizontal:12
      },
       
  image:{
    width:200,
    height:200,
    marginHorizontal:50
  },
});
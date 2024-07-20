import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItems(props) {
  return (
    <View style={styles.listTile}>
      <Pressable
        android_ripple={{ color: "#3F689D" }}
        onPress={props.onDeleteHandler.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedStyle}
      >
        <Text style={{ color: "#ffffff", fontSize: 15, padding: 10 }}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

export default GoalItems;

const styles = StyleSheet.create({
  listTile: {
    width: "90%",
    height: 45,

    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "#cccccc",
    backgroundColor: "#6577D2",
  },
  pressedStyle:{
    opacity:0.5,
  },
});

import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Platform } from "react-native";

//Recriando o compononent todo como Stateful vs Stateless
// const Todo = props => (
//   <View style={styles.container}>
//     <Text>{props.title}</Text>
//   </View>
// );

// ou assim

const Todo = ({ title }) => (
  <View>
    {Platform.OS === "ios" ? (
      <Text style={styles.text}>{title}</Text>
    ) : (
      <Text style={styles.text}>{title}</Text>
    )}
  </View>
);

Todo.defaultProps = {
  title: "Todo Padrão"
};

Todo.propTypes = {
  title: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontWeight: "bold"
      },
      android: {
        fontSize: 24
      }
    })
  }
});

export default Todo;

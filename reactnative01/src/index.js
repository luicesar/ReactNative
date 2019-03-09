import "./config/ReactotronConfig";
import "./config/DevToolsConfig";

import React, { Component } from "react";
import { StyleSheet, View, Platform, Text, ScrollView } from "react-native";

import Post from "~/components/Post";

//console.tron.log("Testando Elecotron...");

const white = "#FFF";
const primary = "#EE7777";
const title = "#333";

export default class App extends Component {
  state = {
    usuario: "Luis Cesar",
    todos: [{ id: 1, text: "Fazer café" }, { id: 2, text: "estudar gonative" }],
    counter: 0,
    posts: [
      {
        id: 1,
        title: "Aprendendo React Native (1)",
        author: "Luis César",
        content:
          "O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. Seções 1.10.32 e 1.10.33 de de Finibus Bonorum et Malorum de Cicero também foram reproduzidas abaixo em sua forma exata original."
      },
      {
        id: 2,
        title: "Aprendendo React Native (2)",
        author: "Luis César",
        content:
          "O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. Seções 1.10.32 e 1.10.33 de de Finibus Bonorum et Malorum de Cicero também foram reproduzidas abaixo em sua forma exata original."
      },
      {
        id: 3,
        title: "Aprendendo React Native (3)",
        author: "Luis César",
        content:
          "O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. Seções 1.10.32 e 1.10.33 de de Finibus Bonorum et Malorum de Cicero também foram reproduzidas abaixo em sua forma exata original."
      }
    ]
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "Novo todo" }]
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative Desafio - 01</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary
  },
  header: {
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20
      },
      android: {
        height: 56,
        paddingTop: 0
      }
    })
  },
  headerTitle: {
    color: title,
    fontSize: 16,
    fontWeight: "bold"
  }
});

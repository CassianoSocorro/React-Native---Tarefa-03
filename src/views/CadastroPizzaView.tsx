import React from "react";
import { View, TextInput, Button, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PizzaController } from "../controllers/PizzaController";

export const CadastroPizzaView = () => {
  const { texto, setTexto, addItem } = PizzaController();
  const navigation = useNavigation();

  const salvar = () => {
    if (texto.trim() === "") return;

    addItem();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
        placeholder="Ex: Frango com Catupiry"
        placeholderTextColor="#888"
      />

      <View style={styles.buttonContainer}>
        <Button title="Salvar no Cardápio" onPress={salvar} color="#C0392B" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 20,
    fontFamily: Platform.select({ ios: "San Francisco", android: "Roboto" }),
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
});

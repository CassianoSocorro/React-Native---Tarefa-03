import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import { PizzaController } from '../controllers/PizzaController'; 

export const PizzaView = () => {
  const { itens, texto, setTexto, addItem, removeItem } = PizzaController();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio de Pizzaria</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma pizza"
          value={texto}
          onChangeText={setTexto}
        />
        <Button title="Adicionar" onPress={addItem} />
      </View>

      <ScrollView style={styles.lista}>
        {itens.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemTexto}>{item.nome}</Text>
            <TouchableOpacity 
              onPress={() => removeItem(item.id)}
              style={styles.botaoDeletar}
            >
              <Text style={styles.textoBotaoDeletar}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',      
    paddingTop: 50,              
  },
  titulo: {
    margin: 24,
    fontSize: 18,              
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: Platform.select({ ios: "San Francisco", android: "Roboto" })
  },
  inputContainer: {
  flexDirection: 'row',
    marginBottom: 20,           
    gap: 10,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ff0000',     
    padding: 10,                
    borderRadius: 5,           
  },
  lista: {
    width: '100%',
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  itemTexto: {
    fontSize: 18,              
  },
  botaoDeletar: {
    backgroundColor: '#ff4444',
    padding: 5,
    borderRadius: 5,
  },
  textoBotaoDeletar: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
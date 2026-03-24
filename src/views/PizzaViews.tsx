import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity,Alert, Platform, ImageBackground, useWindowDimensions } from 'react-native';
import React from 'react';
import { PizzaController } from '../controllers/PizzaController'; 
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation/types";

export const PizzaView = () => {
  const { itens, texto, setTexto, addItem, removeItem } = PizzaController();
  const { width, height } = useWindowDimensions();

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams, "Home">>();

  return (
    <ImageBackground 
      source={require('../../assets/background.png')} 
      style={[styles.background, { width, height }]}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        
      <Text style={styles.titulo}>Cardápio de Pizzaria</Text>

      <TouchableOpacity 
          style={styles.botaoAdicionar} 
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.textoBotaoAdicionar}>+ Adicionar Novo Sabor</Text>
        </TouchableOpacity>
     
      <ScrollView style={styles.lista}>
        {itens.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemTexto}>{item.nome}</Text>
            <TouchableOpacity 
                onPress={() => {
                  Alert.alert(
                    "Remover Pizza",
                    "Deseja excluir este item?",
                    [
                      { text: "Não", style: "cancel" },
                      { text: "Sim", onPress: () => removeItem(item.id) }
                    ]
                  );
                }}
                style={styles.botaoDeletar}
              >
                <Text style={styles.textoBotaoDeletar}>Remover</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
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
  },
  background: {
  justifyContent: 'center',
  alignItems: 'center',
  },
  overlay: {
    flex: 1, 
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    alignItems: 'center',
    paddingTop: 60,
  },
  botaoAdicionar: {
    backgroundColor: '#E67E22',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    elevation: 3,
  },
textoBotaoAdicionar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
}
});

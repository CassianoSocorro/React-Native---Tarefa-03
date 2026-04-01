import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PizzaView } from "../views/PizzaViews";
import { CadastroPizzaView } from "../views/CadastroPizzaView";
import { RootStackParams, RootTabParams } from "./types";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator<RootTabParams>();

const Cupo = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Texto de teste</Text>
    </View>
  );
};

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Cadastro"
      screenOptions={{
        headerStyle: { backgroundColor: "#C0392B" },
        headerTintColor: "#fff",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Cadastro"
        component={CadastroPizzaView}
        options={{ title: "Nova Pizza" }}
      />
      <Tab.Screen name="Teste" component={Cupo} options={{ title: "Cupo" }} />
    </Tab.Navigator>
  );
}

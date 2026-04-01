import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PizzaView } from "../views/PizzaViews";
import { CadastroPizzaView } from "../views/CadastroPizzaView";
import { RootStackParams } from "./types";
import { TabNavigator } from "./TabNavigator";

const Stack = createNativeStackNavigator<RootStackParams>();

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#C0392B" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Home"
        component={PizzaView}
        options={{ title: "Pizzaria do Cassiano" }}
      />
      {/* <Stack.Screen
        name="Cadastro"
        component={CadastroPizzaView}
        options={{ title: "Nova Pizza" }}
      /> */}
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ title: "Nova Pizza" }}
      />
    </Stack.Navigator>
  );
}

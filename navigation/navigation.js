import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "../screens/SearchScreen";
import ResultShowScreen from "../screens/ResultShowScreen";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ title: "Buisness Search" }}
        />
        <Stack.Screen
          name="ResultShowScreen"
          component={ResultShowScreen}
          options={{ title: "ResultShowScreen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

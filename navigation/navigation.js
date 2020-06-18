import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "../screens/SearchScreen";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

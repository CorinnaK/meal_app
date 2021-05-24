import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen, {
  categoryOptions,
} from "../screens/CategoryMealScreen";
import MealDetailScreen, { detailOptions } from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const MealsNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealScreen}
          // options={}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetailScreen}
          //options={}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;

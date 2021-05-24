import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";

const MealsNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FavoriteTabNavigator =
  Platform.OS === "android"
    ? () => {
        const Tab = createMaterialBottomTabNavigator();
        return (
          <NavigationContainer>
            <Tab.Navigator
              tabBarOptions={{
                activeColor: Colors.accentColor,
              }}
            >
              <Tab.Screen
                name="Meals"
                component={MealsNavigator}
                options={{
                  tabBarIcon: (tabInfo) => {
                    return (
                      <Ionicons
                        name="ios-restaurant"
                        color={tabInfo.color}
                        size={25}
                      />
                    );
                  },
                }}
              />
              <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                  tabBarIcon: (tabInfo) => {
                    return (
                      <Ionicons
                        name="ios-star"
                        color={tabInfo.color}
                        size={25}
                      />
                    );
                  },
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        );
      }
    : () => {
        const Tab = createBottomTabNavigator();

        return (
          <NavigationContainer>
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: Colors.accentColor,
              }}
            >
              <Tab.Screen
                name="Meals"
                component={MealsNavigator}
                options={{
                  tabBarIcon: (tabInfo) => {
                    return (
                      <Ionicons
                        name="ios-restaurant"
                        color={tabInfo.color}
                        size={25}
                      />
                    );
                  },
                }}
              />
              <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                  tabBarIcon: (tabInfo) => {
                    return (
                      <Ionicons
                        name="ios-star"
                        color={tabInfo.color}
                        size={25}
                      />
                    );
                  },
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        );
      };

export default FavoriteTabNavigator;

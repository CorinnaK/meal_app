import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

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

const FavoritesStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },

        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator =
  Platform.OS === "android"
    ? () => {
        const Tab = createMaterialBottomTabNavigator();

        return (
          <Tab.Navigator
            activeColor={Colors.accentColor}
            shifting={true}
            barStyle={{ backgroundColor: Colors.primaryColor }}
          >
            <Tab.Screen
              name="Meals"
              component={MealsNavigator}
              options={{
                // Use this option to change the tab Color when selecting this tab
                tabBarColor: Colors.primaryColor,
                tabBarLabel: (
                  <Text style={{ fontFamily: "open-sans" }}>Meals</Text>
                ),
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
              component={FavoritesStackNavigator}
              options={{
                tabBarLabel: (
                  <Text style={{ fontFamily: "open-sans" }}>Favorites</Text>
                ),
                tabBarIcon: (tabInfo) => {
                  return (
                    <Ionicons name="ios-star" color={tabInfo.color} size={25} />
                  );
                },
              }}
            />
          </Tab.Navigator>
        );
      }
    : () => {
        const Tab = createBottomTabNavigator();

        return (
          <NavigationContainer>
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: Colors.accentColor,
                labelStyle: {
                  fontFamily: "open-sans",
                },
              }}
            >
              <Tab.Screen
                name="Favorites"
                component={FavoritesStackNavigator}
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

              <Tab.Screen
                name="Favorites"
                component={FavoritesStackNavigator}
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

const MainNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={TabNavigator}
          options={{
            drawerLabel: "Home",
          }}
        />
        <Drawer.Screen
          name="Filters"
          component={FilterNavigator}
          options={{ drawerLabel: "Filters" }}
        />
        {/* <Drawer.Screen name="Favorites " component={FavoritesStackNavigator} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const FilterNavigator = () => {
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
      <Stack.Screen name="Filters" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

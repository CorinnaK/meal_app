import React, { useEffect, useState, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useDispatch } from "react-redux";

import { setFilters } from "../store/actions/meals";
import HeaderButton from "../components/HeaderButton";
import HamburgerMenuItem from "../components/HamburgerMenuItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";

const FilterScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegatarian, setIsVegatarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const { navigation } = props;

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegatarian: isVegatarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegatarian, dispatch]);

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: "Filtered Meals",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <HamburgerMenuItem navigation={props.navigation} />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={() => {
              saveFilters();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [saveFilters, navigation]);

  const FilterSwitch = (props) => {
    return (
      <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
          trackColor={{ true: Colors.primaryColor, false: "Gray" }}
          thumbColor={Colors.primaryColor}
          value={props.state}
          onValueChange={props.onChange}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegatarian"
        state={isVegatarian}
        onChange={(newValue) => setIsVegatarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});

export default FilterScreen;

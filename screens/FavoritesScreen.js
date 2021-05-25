import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import MealList from "../components/MealList";
import { HeaderButtons } from "react-navigation-header-buttons";
import HamburgerMenuItem from "../components/HamburgerMenuItem";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: "Your Favorites",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <HamburgerMenuItem navigation={props.navigation} />
        </HeaderButtons>
      ),
    });
  });
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText> No favorite meals found. Start adding some </DefaultText>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;

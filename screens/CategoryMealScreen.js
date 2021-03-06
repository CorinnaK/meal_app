import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";

import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: props.route.params.categoryTitle,
    });
  });
  // Get the Id of the category from the parameters passed through the navigator
  const catId = props.route.params.categoryId;
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals to display.</DefaultText>
        <DefaultText>Check your filters and try again.</DefaultText>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;

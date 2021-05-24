import React, { useEffect } from "react";
import { View, Text, StyleSheet, Flatlist, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: props.route.params.categoryTitle,
    });
  });

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate("MealDetails", {
            id: itemData.item.id,
            title: itemData.item.title,
          });
        }}
      />
    );
  };

  // Get the Id of the category from the parameters passed through the navigator
  const catId = props.route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;

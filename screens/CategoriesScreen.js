import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";
import HamburgerMenuItem from "../components/HamburgerMenuItem";

const CategoriesScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: "MealCategories",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <HamburgerMenuItem navigation={props.navigation} />
        </HeaderButtons>
      ),
    });
  });
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            // navigate takes a second argument - the params - an object that will be passed as params
            // Pass along the item ID in the parameters to retrieve on the Category Meal screen
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;

import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const HamburgerMenuItem = (props) => {
  return (
    <Item
      title="Menu"
      iconName="ios-menu"
      color="black"
      onPress={() => {
        props.navigation.toggleDrawer();
      }}
    />
  );
};

export default HamburgerMenuItem;

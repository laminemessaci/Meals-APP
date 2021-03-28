import React from "react";
import { StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favMeal = useSelector((state) => state.meals.favoriteMeals);
  /*  const favMeal = availableMeals.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  ); */
  return <MealList listData={favMeal} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;

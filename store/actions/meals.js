export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const FILTER_MEALS = "FILTER_MEALS";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};
export const setFilters = (appliedFilters) => {
  return { type: FILTER_MEALS, filters: appliedFilters };
};

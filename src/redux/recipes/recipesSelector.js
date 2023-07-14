export const selectCategoryList = state => state.recipes.categoryList;
export const selectMainPageRecipes = state => state.recipes.mainPageRecipes;
export const selectSearchFilter = state => state.recipes.searchFilter;
export const selectRecipeByTitle = state => state.recipes.recipeByTitle;
export const selectRecipeById = state => state.recipes.recipeById;
export const selectOwnRecipes= state => state.recipes.ownRecipes;
export const selectFavoriteRecipes= state => state.recipes.favoriteRecipes;
export const selectRecipesByIngredient= state => state.recipes.recipesByIngredient;
export const selectRecipesByCategory = state => state.recipes.recipesByCategory;
export const selectError = state => state.recipes.error;
export const selectIsLoading = state => state.recipes.isLoading;
export const selectPopularRecipes = state => state.recipes.popularRecipes;


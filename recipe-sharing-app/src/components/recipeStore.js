import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) => set( state => ({
   recipes: state.recipes.filter((recipes) => recipes.id !== id)
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map((recipes) => {
      recipes.id === updatedRecipe.id ? { ...recipes, ...updatedRecipe } : recipes
    })
  }))
}))


export default useRecipeStore;
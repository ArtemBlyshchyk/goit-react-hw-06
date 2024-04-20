import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу (Anoteher variant initialState: {items: []})
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
      //Second variant
      //   state.items = [...state.items, action.payload]
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );

      // //Second variant (finds index in array)
      // const itemIndex = state.items.findIndex(
      //   (item) => item.id === action.payload
      // );
      // // cut the choosen element
      // state.items.splice(itemIndex, 1);
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

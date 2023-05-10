import { createSlice, configureStore } from "@reduxjs/toolkit";
interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    status: string;
  }
  
 export interface ContactsState {
    contacts: Contact[];
  }
  
const initialState: ContactsState = {
    contacts: []
}   

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      console.log(action.payload)
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const filteredContacts = state.contacts.filter(
        (c) => action.payload !== c.id
      );
      state.contacts = filteredContacts;
    },
    updateContact(state, action) {
      const filteredContacts = state.contacts.filter(
        (c) => action.payload.id !== c.id
      );
      filteredContacts.push(action.payload);
      state.contacts = filteredContacts;
    },
  },
});

const store = configureStore({
  reducer: contactSlice.reducer,
});

export const contactActions = contactSlice.actions;

export default store;

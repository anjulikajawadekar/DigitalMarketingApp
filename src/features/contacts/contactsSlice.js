import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] }, // {id,name,email,subject,message,createdAt}
  reducers: {
    submitContact: (state, action) => {
      const { name, email, subject, message } = action.payload;
      state.items.unshift({ id: uuidv4(), name, email, subject, message, createdAt: new Date().toISOString() });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(c => c.id !== action.payload);
    },
    clearContacts: (state) => { state.items = []; }
  }
});

export const { submitContact, deleteContact, clearContacts } = contactsSlice.actions;
export default contactsSlice.reducer;

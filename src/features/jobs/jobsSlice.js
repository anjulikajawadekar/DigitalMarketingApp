import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: { items: [] }, // {id,name,email,position,message,cvDataUrl,cvName,createdAt}
  reducers: {
    submitJob: (state, action) => {
      const { name, email, position, message, cvDataUrl, cvName } = action.payload;
      state.items.unshift({
        id: uuidv4(),
        name, email, position, message, cvDataUrl, cvName,
        createdAt: new Date().toISOString()
      });
    },
    deleteJob: (state, action) => {
      state.items = state.items.filter(j => j.id !== action.payload);
    },
    clearJobs: (state) => { state.items = []; }
  }
});

export const { submitJob, deleteJob, clearJobs } = jobsSlice.actions;
export default jobsSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from '../features/gallery/gallerySlice';
import jobsReducer from '../features/jobs/jobsSlice';
import contactsReducer from '../features/contacts/contactsSlice';
import { loadState, saveState } from './localStorage';

const persisted = loadState();

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    jobs: jobsReducer,
    contacts: contactsReducer,
  },
  preloadedState: persisted,
});

// Persist only feature slices to localStorage on changes
// store.subscribe(() => {
//   const state = store.getState();
//   saveState({
//     gallery: state.gallery,
//     jobs: state.jobs,
//     contacts: state.contacts,
//   });
// });

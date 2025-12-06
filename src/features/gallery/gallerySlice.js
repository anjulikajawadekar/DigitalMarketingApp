import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [
    {
      id: 1,
      title: "Laptop",
      description: "A high-performance laptop.",
      image: '/DigitalMarketingApp/images/img4.jpg',
    },
    {
      id: 2,
      title: "Mobile Phone",
      description: "Latest smartphone device.",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/918f8e98514489.5ede33e4edd95.jpg",
    },
  ],
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
});

export default gallerySlice.reducer;

// import galleryData from "../../data/galleryData.json";

// const initialState = {
//   sections: galleryData.sections
// };

// const gallerySlice = createSlice({
//   name: "gallery",
//   initialState,
//   reducers: {}
// });

/*import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


const gallerySlice = createSlice({
  name: 'gallery',
  initialState: { items: [
    
  ] }, // {id, title, dataUrl, createdAt}
  reducers: {
    addImage: (state, action) => {
      const { title, dataUrl } = action.payload;
      state.items.unshift({
        id: uuidv4(),
        title,
        dataUrl,
        createdAt: new Date().toISOString(),
      });
    },
    deleteImage: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clearGallery: (state) => {
      state.items = [];
    }
  }
});

export const { addImage, deleteImage, clearGallery } = gallerySlice.actions;
export default gallerySlice.reducer;

*/

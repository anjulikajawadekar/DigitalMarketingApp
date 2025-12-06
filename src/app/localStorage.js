// export const loadState = (key = 'dmapp_state') => {
//   try {
//     const serialized = localStorage.getItem(key);
//     if (!serialized) return undefined;
//     return JSON.parse(serialized);
//   } catch (e) {
//     console.warn("Could not load state", e);
//     return undefined;
//   }
// };

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;   // 🔥 return undefined so initialState loads normally
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, key = 'dmapp_state') => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(key, serialized);
  } catch (e) {
    console.warn("Could not save state", e);
  }
};

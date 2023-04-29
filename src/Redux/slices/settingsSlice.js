import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ageRange: [
    {id: 0, title:"18-24", checked: false },
    {id: 1, title:"25-34", checked: false },
    {id: 2, title:"35-44", checked: false },
    {id: 3, title:"44-55", checked: false },
    {id: 4, title:"55+", checked: false },
  ],
  allergies: '',
  appNoti: true,
  notificationType: [
    {id:0, title:'Extreme Weather', checked: false},
    {id:1, title:'Forecast', checked: false},
    {id:2, title:'Allergy', checked: false}
  ],
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateAllergies: (state, action) => {
      state.allergies = action.payload;
    },
    toggleAppNoti: (state) => {
      state.appNoti = !state.appNoti;
    },
    updateNotificationType: (state, action) => {
      const { type, value } = action.payload;
      state.notificationType[type] = value;
    },
     updateAgeCheckbox: (state, action) => {
      const { id, checked } = action.payload;
      const updatedAgeRange = state.ageRange.map(item => {
        if (item.id === id) {
          return { ...item, checked };
        }
        return item;
      });
      state.ageRange = updatedAgeRange;
    },
  },
});

export const {
  updateAllergies,
  toggleAppNoti,
  updateNotificationType,
  updateAgeCheckbox,
} = settingsSlice.actions;

export default settingsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    
  ]
};

const StudentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    deleteUserAction: (state, action) => {
      state.students.splice(action.payload.index, 1);
    },
    addUserAction: (state, action) => {
      state.students.push(action.payload);
    },
    updateUserAction: (state, action) => {
      const { index, student } = action.payload;
      state.students[index] = student;
    }
  }
});

export default StudentsSlice.reducer;
export const { deleteUserAction, addUserAction, updateUserAction } = StudentsSlice.actions;

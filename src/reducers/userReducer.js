import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [
    {id: 1, name: "gia bảo",age: 10},
    {id: 2, name: "anh sang",age: 20},
    {id: 3, name: "minh nhật",age: 30}
    ]
  },
  reducers: {
    remove(state, action) {
    //   console.log("state", state);
      console.log("action", action);
      const  index = state.data.findIndex(item => item.id === action.id);
      state.data.splice(index,1);
    }
  },
});
const {actions, reducer} = todosSlice;
console.log(todosSlice);
export const {remove} = actions;
export default reducer;


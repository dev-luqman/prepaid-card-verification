import { SidebarState } from "@/lib/redux/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: SidebarState = {
  isSidebarOpen: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: state => {
      state.isSidebarOpen = true
    },
    closeSidebar: state => {
      state.isSidebarOpen = false
    },
  }
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;

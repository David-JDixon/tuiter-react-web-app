import { createSlice } from "@reduxjs/toolkit";
import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

const initialState = {
  modules: [],
  module: { name: "New Module 123", description: "New Description" },
};


const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      state.modules = [action.payload, ...state.modules] as typeof state.modules;
    },
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module: any) => module._id !== action.payload
      );
    },
    updateModule: (state: { modules: any[]; module: { name: string; description: string; }; }, action) => {
      state.modules = state.modules.map((module: any) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule, setModules }: { addModule: any, deleteModule: any, updateModule: any, setModule: any, setModules: any } = modulesSlice.actions;
export default modulesSlice.reducer;
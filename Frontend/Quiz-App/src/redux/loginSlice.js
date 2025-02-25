import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../services/loginApi";

export const fetchUsers = createAsyncThunk("users/fetchUsers",
async )
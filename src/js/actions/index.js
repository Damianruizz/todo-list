import { ADD_TASK } from "../constants/action-types";

// src/js/actions/index.js
export function addTask(payload) {
  return { type: ADD_TASK, payload }
};
import { ADD_ARTICLE } from "../constants/action-types";

// src/js/actions/index.js
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};
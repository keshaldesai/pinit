import axios from "axios";
import {
  SIGN_IN,
  SIGN_OUT,
  NO_TOKEN,
  GET_ALL,
  GET_ALL_USER,
  GET_MINE,
  POST_PIN,
  LIKE_PIN,
  UNLIKE_PIN,
  DELETE_PIN
} from "./types";

const API = "http://localhost:8000/api";

export function signInUser(token) {
  const request = axios.post(`${API}/auth/in`, { token });
  return {
    type: SIGN_IN,
    payload: request
  };
}

export function signOutUser(token) {
  const request = axios.post(`${API}/auth/out`, { token });
  return {
    type: SIGN_OUT,
    payload: request
  };
}

export function noToken() {
  return {
    type: NO_TOKEN
  };
}

export function getAllPins() {
  const request = axios.get(`${API}`);
  return {
    type: GET_ALL,
    payload: request
  };
}

export function getUserPins(id) {
  const request = axios.get(`${API}/${id}`);
  return {
    type: GET_ALL_USER,
    payload: request
  };
}

export function getMyPins(id) {
  const request = axios.get(`${API}/${id}`);
  return {
    type: GET_MINE,
    payload: request
  };
}

export function postPin(token, url, title) {
  const request = axios.post(`${API}`, { token, url, title });
  return {
    type: POST_PIN,
    payload: request
  };
}

export function likePin(token, pinId) {
  const request = axios.post(`${API}/like`, { token, pinId });
  return {
    type: LIKE_PIN,
    payload: request
  };
}

export function unlikePin(token, pinId) {
  const request = axios.post(`${API}/unlike`, { token, pinId });
  return {
    type: UNLIKE_PIN,
    payload: request
  };
}

export function deletePin(token, pinId) {
  const request = axios.delete(`${API}`, { data: { token, pinId } });
  return {
    type: DELETE_PIN,
    payload: request
  };
}

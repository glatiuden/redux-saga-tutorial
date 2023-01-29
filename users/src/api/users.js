import axios from "axios";

export function getUsers() {
  return axios.get("/users", {
    params: {
      limit: 1000,
    },
  });
}

export function createUser(payload) {
  return axios.post("/users", payload);
}

export function deleteUser(userId) {
  return axios.delete(`/users/${userId}`);
}

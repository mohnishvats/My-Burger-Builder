import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-app-724e9-default-rtdb.firebaseio.com/",
});

export default instance;

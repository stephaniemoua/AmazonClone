import axios from "axios";

const instance = axios.create({
  //baseURL: "...", // The API URL (cloud function)
  //baseURL: 'http://localhost:5001/clone-b18f5/us-central1/api' //emulator
  baseURL: "https://us-central1-clone-b18f5.cloudfunctions.net/api", //cloud deployed url
});

export default instance;

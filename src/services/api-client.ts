import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "533858131d544230bbac4b558904c62d",
  },
});

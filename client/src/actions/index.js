import axios from "axios";
import * as actionTypes from "./types";

const fetchUser = () => {
  axios.get("/api/current_user");
};

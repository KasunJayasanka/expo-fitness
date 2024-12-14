import axios from "axios";
import { RAPIDAPI_KEY } from "../constants";
import { RAPIDAPI_HOST } from "../constants";
import { BASE_URL } from "../constants";

const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY, // Using the key from .env
        "X-RapidAPI-Host": RAPIDAPI_HOST, // Using the host from .env
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.error("API call error:", err.message);
    throw err;
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
    let data = await apiCall(BASE_URL + `/exercises/bodyPart/${bodyPart}`);
    return data;
};
  

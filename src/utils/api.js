import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  console.log("API URL:", process.env.REACT_APP_STRIPE_APP_PROD_URL);
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_STRIPE_APP_PROD_URL + url,
      params
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_STRIPE_APP_PROD_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
  },
});

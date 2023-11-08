import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://strapi-stripe-ecommerce-app-yqw6o.ondigitalocean.app/api",
  headers: {
    Authorization:
      "bearer " +
      "1c35c9c8432d630bc32fee31c93492c34d119d479d2ea5cabe54a80aa87b9b224fa0af731d0b4f8e3eb3abaa27a15f9b49574e7c5e98999a7cb6dc1b42b4931fec3bacf6857873e3019faa59036c6c5b0e679430a8548d545b3c6b72afb7c1be2b8454964cc69d28500775212b1e2981d15fdcffa2b74b2074c2d0fa30e3f0a6",
  },
});






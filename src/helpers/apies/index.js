import axios from "axios";

/**
 * Endpoint of getting the random user
 */
const GET_RANDOM_USER = "https://randomuser.me/api/";

/**
 * This function fetches the data from our random user generator and returns the data with it
 * @returns 
 */

export const getRandomUser = async () =>
  await axios.get(GET_RANDOM_USER);

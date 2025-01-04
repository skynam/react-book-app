import axios from 'axios';

const apiDomain = process.env.REACT_APP_API_DOMAIN;
const subscriptionKey = process.env.REACT_APP_API_SUBSCRIPTION_KEY;

export async function post(url, data = {}) {
  try {
    const response = await axios.post(`${apiDomain}${url}`, data, {
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": subscriptionKey
      }
    });

    if (response?.status === 200) {
      return {
        success: true,
        ...response?.data
      }
    } else {
      return {
        success: false,
      }
    }
  } catch (error) {
    return {
      success: false,
    }
  }
}
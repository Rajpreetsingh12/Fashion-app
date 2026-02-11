const axios = require("axios");

async function fetchAffiliateProducts() {
  try {
    const response = await axios.get("https://official-partner-api.com/products");
    return response.data;
  } catch (err) {
    return [];
  }
}

module.exports = { fetchAffiliateProducts };

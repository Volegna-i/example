const API_KEY = import.meta.env.VITE_CAT_API_KEY;

export const fetchCatImage = async () => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data[0].url;
  } catch (error) {
    console.error("Error fetching cat image:", error);
    return null;
  }
};

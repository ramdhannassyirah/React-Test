const API_KEY = "a141e047ff074852ae044edafa4d074f";
const BASE_URL = "https://newsapi.org/v2/";

export const getNews = async () => {
  const response = await fetch(
    `${BASE_URL}top-headlines?country=us&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.articles;
};

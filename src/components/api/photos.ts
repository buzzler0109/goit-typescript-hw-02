import axios from "axios";

const API_KEY = "1CxCun9CtMVy2CMyIbqzUlhqHU3csPKCQ39pqsp3hjU";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers["Authorization"] = `Client-ID ${API_KEY}`;
// axios.defaults.headers.common["Version"] = "Accept-Version: v1";
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export type Photo = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
  alt_description: string | null;
  likes: number;
  user: {
    name: string;
    username: string;
    profile_image: { medium: string };
  };
};

export const getPhotos = async (
  query: string,
  page: number
): Promise<{ results: Photo[] }> => {
  const { data } = await axios.get(`search/photos?page=${page}&query=${query}`);

  return data;
};

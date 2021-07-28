import axios from "axios";

export const createNews= async (news, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/news`, news, {
    headers: {
      authtoken,
    },
  });

export const getNewsByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/allNews/${count}`);


export const removeNews = async (slug, authtoken) =>
await axios.delete(`${process.env.REACT_APP_API}/news/${slug}`, {
  headers: {
    authtoken,
  },
});

export const getNews = async (slug) =>
await axios.get(`${process.env.REACT_APP_API}/news/${slug}`);

export const updateNews = async (slug, news, authtoken) =>
await axios.put(`${process.env.REACT_APP_API}/news/${slug}`, news, {
  headers: {
    authtoken,
  },
});
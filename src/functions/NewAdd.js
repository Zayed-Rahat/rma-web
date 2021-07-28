import axios from "axios";

export const createNews= async (news, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/latestnews/new`, news, {
    headers: {
      authtoken,
    },
  });

export const getNewsByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/latestnews/${count}`);


export const removeNews = async (id, authtoken) =>
await axios.delete(`${process.env.REACT_APP_API}/latestnews/delete/${id}`, {
  headers: {
    authtoken,
  },
});

export const getNews = async (id) =>
await axios.get(`${process.env.REACT_APP_API}/latestnews/${id}`);

/* export const updateNews = async (id, news, authtoken) =>
await axios.put(`${process.env.REACT_APP_API}/news/${id}`, news, {
  headers: {
    authtoken,
  },
}); */
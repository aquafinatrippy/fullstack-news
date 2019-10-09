import axios from "axios";

const url = "http://localhost:3000/api/news/allNews";
//const url = "https://jsonplaceholder.typicode.com/posts";
class Service {
  static getNews() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(news => ({
            ...news
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default Service;

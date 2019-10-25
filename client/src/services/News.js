import axios from "axios";

const url = "http://localhost:3000/api/";

class Service {
    static getExamples() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(
                    "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=" +
                        process.env.VUE_APP_NEWS_API
                );
                const data = res.data;
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
    static getNews() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url + "news/all");
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
    static addNewNews(title, content, author, authorId) {
        return axios.post(url + "news", {
            title,
            content,
            author,
            authorId
        });
    }
    static remove(id) {
        return axios.delete(url + "news/" + id);
    }
    static singleNews(reconize) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url + "article/" + reconize);
                const data = res.data;
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default Service;

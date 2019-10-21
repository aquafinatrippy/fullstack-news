import axios from "axios";

const url = "http://localhost:3000/api/";

class Service {
    static getNews() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url + 'news/all');
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
    static addNewNews(title, content, author, authorId){
        return axios.post(url + 'news', {
            title, content, author, authorId
        })
    }
    static remove(id){
        return axios.delete()
    }
}

export default Service;

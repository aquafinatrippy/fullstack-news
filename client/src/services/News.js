import axios from "axios";

const url = "http://localhost:3000/api/news/news";

class Service {
    static getNews() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(genre => ({
                        ...genre
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default Service;

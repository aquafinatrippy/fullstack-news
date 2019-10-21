import axios from "axios";

const url = "http://localhost:3000/api/";

class User {
    static currentUser() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url + "me");
                const data = res.data;
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
    
}

export default User;

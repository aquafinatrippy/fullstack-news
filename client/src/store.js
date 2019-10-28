import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: "",
        user: {},
        token: ""
    },
    mutations: {
        auth_request(state) {
            state.status = "loading";
        },
        auth_success(state, user, token) {
            state.status = "success";
            state.user = user;
            state.token = localStorage.getItem("token");
        },
        auth_error(state) {
            state.status = "error";
        },
        logout(state) {
            state.status = "";
            state.token = "";
            state.user = null;
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit("auth_request");
                axios({
                    url: "http://localhost:3000/api/users/login",
                    data: user,
                    method: "POST"
                })
                    .then(res => {
                        const token = res.data.token;
                        const user = res.data.user;
                        localStorage.setItem("token", token);
                        axios.defaults.headers.common["Authorization"] = token;
                        commit("auth_success", user, token);
                        resolve(res);
                    })
                    .catch(err => {
                        commit("auth_error");
                        localStorage.removeItem("token");
                        reject(err);
                    });
            });
        },
        register({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit("auth_request");
                axios({
                    url: "http://localhost:3000/api/users",
                    data: user,
                    method: "POST"
                })
                    .then(res => {
                        const token = res.data.token;
                        const user = res.data.user;
                        localStorage.setItem("token", token);
                        axios.defaults.headers.common["Authorization"] = token;
                        commit("auth_success", token, user);
                        resolve(res);
                    })
                    .catch(err => {
                        commit("auth_error");
                        localStorage.removeItem("token");
                        reject(err);
                    });
            });
        },
        logout({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    await axios.post(
                        "http://localhost:3000/api/users/me/logout"
                    );
                    commit("logout");
                    localStorage.removeItem("token");
                    delete axios.defaults.headers.common["Authorization"];
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        userInfo: state => state.user
    }
});

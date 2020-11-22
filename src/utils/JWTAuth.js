import axios from 'axios';

/**
 * Asynchronous login method since axios returns a promise
 * @param {*} data 
 */
const login = async (data) => {

    const LOGIN_ENDPOINT = 'http://localhost/con/CON/api/login.php';

    try {
        let response = await axios.post(
            LOGIN_ENDPOINT,
            data,
        );

        if (response.status === 200 && response.data.jwt && response.data.expireAt) {

            let jwt = response.data.jwt;
            let expire_at = response.data.expireAt;

            localStorage.setItem("access_token", jwt);
            localStorage.setItem("expire_at", expire_at);
            localStorage.setItem("is_authenticated", true);
            return response.data;
        }
    } catch (e) {
        console.log('login error')
        console.log(e)
    }
}

/**
 * Method that creates a new user in the database
 * @param {*} data 
 */
const register = async (data) => {
    const REGISTER_ENDPOINT = 'http://localhost/con/CON/api/register.php';

    try {
        let response = await axios({
            method: 'post',
            responseType: 'json',
            url: REGISTER_ENDPOINT,
            data: data
        });
    } catch (e) {
        console.log(e);
        console.log('registration error');
    }
}

const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expire_at");
}

export { login, register, logout } 
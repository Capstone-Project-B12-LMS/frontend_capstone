import axios from "axios";
import CONST from '../utils/constants';


const { BASE_URL_API } = CONST;

const config = {
    ...(!!BASE_URL_API && { baseURL : `${BASE_URL_API}` })
}

const axiosInstance = axios.create(config);

export default axiosInstance;
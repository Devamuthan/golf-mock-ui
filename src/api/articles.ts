import axios from "axios";
import apiConstants from "@/constants/apiConstants";

export default class Articles {
    static getArticles = () => {
        return axios.get(apiConstants.GET_ARTICLES);
    }

    static getTestData = () => {
        return axios.get(apiConstants.GET_TEST_DATA);
    }
}
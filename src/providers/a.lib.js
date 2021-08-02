import { host } from './constants'

export const GET_IMAGE = (url) => host + '/public/' + url

const axios = require("axios");

export const request = (axiosInfo) => {
    return new Promise((rslv, rjct) => {
    try {
        axios(axiosInfo)
            .then((response) => {
                rslv(response.data);
            })
            .catch((err) => {
                rjct(err);
            });
    } catch (err) {
        rjct(err);
    }
})}
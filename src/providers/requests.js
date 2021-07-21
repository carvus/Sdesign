import { request } from './a.lib';
import { host } from './constants';

export const getProjects = async (setData)  => {
    try {
        const rslt = await request({ method: "GET", url: host + "/api/data/projects"})
        setData(rslt)
    }
    catch (err) {
        console.log(err);
    }
}

export const getPartners = async (setData) => {
    try {
        const rslt = await request({ method: "GET", url: host + "/api/data/partners"})
        setData(rslt)
    }
    catch (err) {
        console.log(err);
    }
} 

export const postContactFormData = (formData) => new Promise(async (rslv, rjct) => {
    try{
       const postData = await request({method: "POST", url: host + "/api/data/notifications", data: formData})
       rslv(postData)
    }
    catch(err) {
        rjct(err)
    }
})
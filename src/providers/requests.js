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

export const postContactFormData = async (formData) => {
    try{
       const postData = await request({method: "POST", url: host + "/api/send-msg", data: formData})
       console.log(postData);
    }
    catch(err) {
        console.log(err);
    }
}
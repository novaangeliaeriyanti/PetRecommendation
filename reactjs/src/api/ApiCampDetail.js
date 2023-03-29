import axios from "axios";
import config from "../config/config";

//CRITERIA
const findAllCrite = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/crite/`);
        return result.data;    
    } catch (error) {
        return error;
    }
}

//HABITAT
const findAllHab = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/habitat/`);
        return result.data;    
    } catch (error) {
        return error;
    }
}

//RESULT DATA
const createResult = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/result`, payload);
        //console.log(payload);
        return result.data;         
    } catch (error) {
        return error;
    }
}

export default {
    findAllCrite,
    findAllHab,
    createResult
}
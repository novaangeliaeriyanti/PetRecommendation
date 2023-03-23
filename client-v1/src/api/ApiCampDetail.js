import axios from "axios";
import config from "../config/config";

const findAll = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/criteria`);
        return result.data;    
    } catch (error) {
        return error;
    }
}

const findCriteriaTable = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/critetable`);
        return result.data;    
    } catch (error) {
        return error;
    }
}

const findAllPet = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/`);
        return result.data;    
    } catch (error) {
        return error;
    }
}

export default {
    findAll,
    findCriteriaTable,
    findAllPet
}
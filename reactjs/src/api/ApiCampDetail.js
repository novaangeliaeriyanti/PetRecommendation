import axios from "axios";
import config from "../config/config";

//CRITERIA
const findAllCrite = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/crite/`);
        // console.log(result.data);
        // console.log("sudah sampai di apiCampDetail");
        return result.data;    
    } catch (error) {
        return error;
    }
}

//HABITAT
const findAllHab = async(id)=>{
    try {
        const result = await axios.get(`${config.domain}/habitat/`);
        // console.log(result.data);
        // console.log("sudah sampai di apiCampDetail");
        return result.data;    
    } catch (error) {
        return error;
    }
}

export default {
    findAllCrite,
    findAllHab
}
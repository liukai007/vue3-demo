import axios from "axios";
import path from "./path"

const api={
    getChengpin(){
        return axios.get(path.baseUrl+path.chengpin)
    }
}
export default  api
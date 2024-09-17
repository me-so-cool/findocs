import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfToken } from "../Models/User";

const api = "http://localhost:5167/api/";

export const loginAPI = async (username: string, password: string)=> {
    try{
        const data = await axios.post<UserProfToken>(api + "account/login", {
            username : username,
            password: password,
        });

        return data;
    } catch(err){
        handleError(err);
    }
};

export const registerAPI = async (email: string, username: string, password: string) => {
    try{
        const data = await axios.post<UserProfToken>(api + "account/register", {
            email:email,
            username : username,
            password: password,
        });

        return data;
    } catch(err){
        handleError(err);
    }
};
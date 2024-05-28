/* eslint-disable no-useless-catch */
import { useState } from "react";
import { getMeApi, getUsersApi, addUserApi } from "../api/user"
import { useAuth } from ".";

export const useUser = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState(null);
    const { auth } = useAuth();
    
    
    const getME = async ( token ) => {
        try {
            const response = await getMeApi(token);
            return response;
        } catch (error) {
            throw error;
        }
    };

    const getUsers = async ( ) => {
        try {
            setLoading(true);
            const response = await getUsersApi(auth.token);
            setLoading(false);
            setUsers(response);
        } catch (error) {
            setLoading(false);
            setError(error);
            
        }
    };

    
    const addUser = async (data) => {
        try {
            setLoading(true);
            await addUserApi(data, auth.token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    return {
        loading,
        error,
        users,
        getME,
        getUsers,
        addUser,

    }
}

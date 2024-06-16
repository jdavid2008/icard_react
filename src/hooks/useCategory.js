import { useState } from "react";
import { getCategoriesApi, addCategoryApi, updateCategoryApi, deleteCategoryApi } from "../api/category"
import { useAuth } from "./";

export function useCategory() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState(null);
    const { auth } = useAuth();

    const getCategories = async () => {
        try {
            setLoading(true);
            const response = await getCategoriesApi();
            setLoading(false);
            setCategories(response)

        } catch (error) {
            setError(error);
            setLoading(false);
        }

    };

    const addCategory = async (data) => {
        try {
            setLoading(true);
            const response = await addCategoryApi(data, auth.token);
            setLoading(false);
            return response;
        } catch (error) {
            setError(error);
            setLoading(false);
        }

    };

    const updateCategory = async (id, data) => {
        try {
            setLoading(true);
            const response = await updateCategoryApi(id, data, auth.token);
            setLoading(false);
            return response;
        } catch (error) {
            setError(error);
            setLoading(false);
        }

    };

    const deleteCategory = async (id) => {
        try {
            setLoading(true);
            const response = await deleteCategoryApi(id, auth.token);
            setLoading(false);
            return response;
        } catch (error) {
            setError(error);
            setLoading(false);
        }

    };

    return {
        categories,
        error,
        loading,
        getCategories,
        addCategory,
        updateCategory,
        deleteCategory,
    }
}
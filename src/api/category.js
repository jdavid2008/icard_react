/* eslint-disable no-useless-catch */
const apiUrl = import.meta.env.VITE_API_URL;

export const getCategoriesApi = async () => {
    try {
        const url = `${apiUrl}/api/categories/`;
        const response = await fetch(url);
        const result = await response.json();
        return result
    } 
    catch (error) {
        throw error
    }
}

export const addCategoryApi = async (data, token) => {
    try {
        const formData = new FormData(); // Para mandar Imagenes al servidor
        formData.append('image', data.image);
        formData.append('title', data.title);
        
        const url = `${apiUrl}/api/categories/`;
        const params = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        }

        const response = await fetch(url,params);
        const result = await response.json();
        return result

    } catch (error) {
        throw error;
    }
}

export const updateCategoryApi = async (id, data, token) => {
    try {
        const formData = new FormData(); // Para mandar Imagenes al servidor
        formData.append('title', data.title);
        if (data.image) formData.append('image', data.image);
        
        const url = `${apiUrl}/api/categories/${id}/`;
        const params = {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        }

        const response = await fetch(url,params);
        const result = await response.json();
        return result

    } catch (error) {
        throw error;
    }
}

export const deleteCategoryApi = async (id, token) => {
    try {
        
        const url = `${apiUrl}/api/categories/${id}/`;
        const params = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const response = await fetch(url,params);
        const result = await response.json();
        return result

    } catch (error) {
        throw error;
    }
}

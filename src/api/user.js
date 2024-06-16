/* eslint-disable no-useless-catch */
const apiUrl = import.meta.env.VITE_API_URL;

export const loginApi = async ( formValue ) => {
    try {
         const url = `${apiUrl}/api/auth/login/`
         
         const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // Convertimos un objeto formValue a Json
            body: JSON.stringify( formValue ),
         }

        const response = await fetch(url, params);

        if (response.status !== 200 ) {
            throw new Error("Usuario o contraseña incorrectos");
         }

         const resul = await response.json();
         return resul

    } catch (error) {
        throw error
    }

}

export const getMeApi = async ( token ) => {
    try {
         const url = `${apiUrl}/api/auth/me/`
         
         const params = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
         }

        const response = await fetch(url, params);
        const result = await response.json();
        return result

    } catch (error) {
        throw error
    }

}

export const getUsersApi = async (token) => {
    try {
        const url = `${apiUrl}/api/users/`;

        const params = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }

        const response = await fetch(url, params);
        const result = await response.json();
        return result


    } catch (error) {
        throw error
    }
}


export async function addUserApi(data, token) {
    try {
      const url = `${apiUrl}/api/users/`;
      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
  
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }

  export async function updateUserApi(id, data, token) {
    try {
        const url = `${apiUrl}/api/users/${id}/`;
        const params = {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          };
      
          const response = await fetch(url, params);
          const result = await response.json();
          return result;

    } catch (error) {
        throw error;
    }
  }

  export async function deleteUserApi(id, token) {
    try {
        const url = `${apiUrl}/api/users/${id}/`;
        const params = {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          };
      
          const response = await fetch(url, params);
          const result = await response.json();
          return result;

    } catch (error) {
        throw error;
    }
  }

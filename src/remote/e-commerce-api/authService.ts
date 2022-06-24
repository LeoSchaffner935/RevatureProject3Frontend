import eCommerceClient, { eCommerceApiResponse } from "./eCommerceClient";

const baseURL = "/auth"

export const apiLogin = async (email: string, password: string): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}/login`,
        { email: email, password: password }
    );
    return { status: response.status, payload: response.data };
}

export const apiLogout = async (): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}/logout`
    );
    return { status: response.status, payload: response.data };
}

export const apiRegister = async (firstName: string, lastName: string, email: string, password: string): Promise<eCommerceApiResponse> => {
//throws on 400+ errors at least
    try 
    {
        const response = await eCommerceClient.post<any>(
            `${baseURL}/register`,
            { firstname: firstName, lastName: lastName, email: email, password: password }
        );
        return { status: response.status, payload: response.data };
    }
    catch(error){
        return {status: 400, payload:null}
    }    
}

export const apiForgotPassword = async (email: string): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}/reset`,
        {email: email}
    );
    return { status: response.status, payload: response.data };
}

export const apiResetPassword = async (id: number, pass:string): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.patch<any>(
        `${baseURL}/users/${id}`,
        {password:pass}
    );
    return { status: response.status, payload: response.data };
}
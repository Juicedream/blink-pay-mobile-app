export const loginApi = async (email:string, password:string) => {
    const api = `https://blink-pay-bank-app-backend.onrender.com/api/v1/auth/login`;
    const response = await fetch(api, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        }, 
        body: JSON.stringify({
            email, 
            password
        })
    });
    const data = await response.json();
    return data;
}
export const fetchUserDetails = async (token:string) => {
    const apiUrl = "https://blink-pay-bank-app-backend.onrender.com/api/v1/auth/profile";
    const response = await fetch(apiUrl, {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}
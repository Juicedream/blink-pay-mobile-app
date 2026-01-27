export const singleTransfer = async (receiver_acc_number: any, amount:any, narration: any, sender_pin:any, token:string) => {
    const apiUrl = "https://blink-pay-bank-app-backend.onrender.com/api/v1/account/single-transfer";
    const response = await fetch(apiUrl, {
        method: 'post',
        headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body:  JSON.stringify({
            receiver_acc_number: receiver_acc_number,
            amount,
            narration,
            sender_pin
        })

    });
    const data = await response.json();
    console.log({datafromapi: data})
    console.log({
            receiver_acc_number: receiver_acc_number,
            amount,
            narration,
            sender_pin
        })
    return data;
}
export const showAccountInfo = async (accountNumber: number, token:string) => {
    const apiUrl = "https://blink-pay-bank-app-backend.onrender.com/api/v1/account/show-account-info/" + accountNumber;
    const response = await fetch(apiUrl, {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        },

    });
    const data = await response.json();
    return data;
}
export interface chat_message{
    "id": number,
    "user_input": string,
    "gpt_response": string,
    "timestamp": string,
}

export interface chat_history{
    "id":number,
    "chat_name":string
}
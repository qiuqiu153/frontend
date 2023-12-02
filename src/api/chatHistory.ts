import request from "@/util/request"
import type {chat_message,chat_history} from "./chatType"


enum ChatHistoryUrl{
    base="/CompanyGPT",
    LISTHISTORY="/",
    DELETEHISTORY="/",
    CREATEHISTORY="/",
    LISTMESSAGE="/chat_messages",
}

export const getChatHitoryList=()=>request.get<any,chat_history>(ChatHistoryUrl.base+ChatHistoryUrl.LISTHISTORY)

export const getChatMessages=(id:number)=>request.get<any,chat_message[]>(ChatHistoryUrl.base+"/"+id+ChatHistoryUrl.LISTMESSAGE)




export const deleteChatMessages=(id:number)=>request.delete<any,chat_message[]>(ChatHistoryUrl.base+"/"+id+ChatHistoryUrl.DELETEHISTORY)

export const createHistory=(chat_history:chat_history)=>request.post<any,chat_history>(ChatHistoryUrl.base+ChatHistoryUrl.CREATEHISTORY,chat_history)
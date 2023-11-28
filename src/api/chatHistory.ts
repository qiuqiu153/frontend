import request from "@/util/request"
import type {chat_message,chat_history} from "./chatType"

enum ChatHistoryUrl{
    base="/CompanyGPT",
    LIST="",
    MESSAGE="/chat_messages"
}

export const getChatHitoryList=()=>request.get<any,chat_history>(ChatHistoryUrl.base+ChatHistoryUrl.LIST)

export const getChatMessages=(id:number)=>request.get<any,chat_message[]>(ChatHistoryUrl.base+"/"+id+ChatHistoryUrl.MESSAGE)
import request from "@/util/request"

import type {chat_message} from "./chatType"


enum MessageUrl{
    base="/CompanyGPT",
    ChatUrl="/chat/"

}




export type option="CompanyGPT"|'CompanySpark'|'向量数据库'

export const sendMessageAPI=
(option:option,message:string,chat_id:number)=>request.post<any,chat_message>(MessageUrl.base+MessageUrl.ChatUrl,{message,chat_id,option})
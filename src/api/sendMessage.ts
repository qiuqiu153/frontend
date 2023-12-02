import request from "@/util/request"

import type {chat_message} from "./chatType"


enum MessageUrl{
    base="/CompanyGPT",
    CompanyGPT="/chatgpt/",

    CompanySpark="/chatgpt/",

    向量数据库="/chatgpt/",

}


export type option=keyof typeof MessageUrl

export const sendMessageAPI=(option:option,message:string,chat_id:number)=>request.post<any,chat_message>(MessageUrl.base+MessageUrl[option],{message,chat_id})
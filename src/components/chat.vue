<template>
   <div class="layout">
      <div class="sider">
         <logo></logo>
         <div class="history-item">
            <el-input :style="{ width: '100%' }" placeholder="在此处搜索历史记录" search-button />
         </div>
         <div class="history-list">

            <el-scrollbar>
               <div class="history-list-item" v-for="(item, index) in historyList" :key="item.id"
                  @click="FindMessages(item.id)" :class="{ active: item.id == chat_id }">
                  <div class="history-icon"><el-icon class="icon">
                        <ChatDotRound />
                     </el-icon></div>
                  <div class="item-title">
                     {{ item.chat_name }}
                  </div>
                  <div class="item-button">


                     <el-dropdown class="el-dropdown-link" @command="handleCommand(item.id)">
                        <span>
                           <el-icon>
                              <MoreFilled />
                           </el-icon>
                        </span>
                        <template #dropdown>
                           <el-dropdown-menu>
                              <el-dropdown-item icon="Delete" command="Delete"> <el-popconfirm width="220" :temported="false"
                                    confirm-button-text="确定" cancel-button-text="取消" icon-color="red"
                                    title="您要删除对话吗?删除后不能恢复" @confirm="DeleteChatHistory">
                                    <template #reference>
                                       <span>Delete</span>
                                    </template>
                                 </el-popconfirm></el-dropdown-item>
                              <el-dropdown-item icon="Edit" command="Rename">重命名</el-dropdown-item>
                           </el-dropdown-menu>
                        </template>
                     </el-dropdown>
                  </div>



               </div>

            </el-scrollbar>



         </div>

         <div class="user">
            <div class="tou">
               <el-button class="userImage" circle icon="UserFilled" size="large" type="primary"></el-button>
            </div>


         </div>

      </div>
      <div class="diplay_page">


         <div class="header">
            <div class="header_btn">

               <el-select v-model="option" placeholder="选择模式" size="large">
                  <el-option v-for="item in Options" :key="item.value" :label="item.label" :value="item.value" />
               </el-select>

            </div>

            <div class="new_chat">
               <el-button type="primary" @click="newChat">
                  + 新建会话
               </el-button>
            </div>

         </div>


         <div class="content">
            <div v-for="message in messages" :key="message.id">
               <div class="message">
                  <el-button icon="User" circle class="avater user">

                  </el-button>:<div class="content"> {{ message.user_input }}</div>


               </div>
               <div class="message">
                  <el-button icon="Printer" circle class="avater robot">

                  </el-button>:<div class="content"> {{ message.gpt_response }}</div>
               </div>

            </div>


         </div>
         <!-- <div class="footer">
             <Footer></Footer>
          </div> -->

         <div class="footer">
            <div class="shuru">
               <div class="input-container">

                  <el-input v-model="userInput" :rows="2" type="textarea" placeholder="请输入" />
               </div>
               <el-button type="primary" @click="sendMessage" icon="Top">
                  发送
               </el-button>
            </div>

         </div>

      </div>

   </div>
</template>


<style scoped>
.layout {
   width: 100%;
   height: 100vh;
   display: flex;

   .sider {
      background-color: rgba(24, 27, 28);
      width: 300px;
      height: 100vh;
      position: relative;


      .logo {

         .logo-png {
            height: 10vh;


         }


      }


      .history-item {
         margin-top: 30px;
         height: 30px;
         margin-left: 8px;
         margin-right: 8px;
         margin-bottom: 20px;
         text-align: left;
         font-size: 10px;
         border-radius: 5px;

      }

      .history-list {

         height: 50%;
         display: flex;
         flex-direction: column-reverse;

         .history-list-item {
            height: 60px;
            margin: 10px;
            padding-left: 15px;
            padding-right: 15px;
            text-align: left;
            font-size: 15px;
            /* 调整历史列表文字大小 */
            line-height: 30px;
            cursor: pointer;
            background: #555555;
            border-radius: 5px;

            display: flex;
            flex-direction: row;
            align-items: center;


            &:hover {

               background-color: #777;
            }

            .el-dropdown-link {


               font-size: 20px;

               vertical-align: middle;
            }

            &.active {
               background: #ccc;

            }

         }

         .history-icon {
            width: 10%;
            text-align: center;
            line-height: 60px;
            justify-items: center;
            display: flex;
            align-items: center;
            color: #fff;

            .icon {

               font-size: 30px;
            }
         }

         .item-title {
            width: 80%;
            line-height: 60px;
            color: #fff;
            padding-left: 10%;
         }
      }

      .user {

         width: 90%;
         height: 10%;
         position: absolute;
         bottom: 0;
         align-items: center;
         display: flex;
         padding-left: 5%;
         left: 5%;

         bottom: 10%;

         .userImage {
            width: 70px;
            height: 70px;
            font-size: 30px;

            &:hover {
               color: #0d0202;
            }
         }
      }

   }

   .diplay_page {
      width: calc(100% - 300px);
      height: 100%;
      margin: 0 auto;
      /* 水平居中 */
      display: flex;
      flex-direction: column;

      .header {


         background-color: #181B3A;
         flex: 1;
         width: 100%;
         height: 30px;
         display: flex;
         align-items: center;
         padding: 20px;


         .new_chat {
            padding-left: 73%;
         }

         .header_btn {
            padding-left: 8vh;
            display: flex;
            justify-content: flex-end;

         }

      }

      .content {
         background-color: #0a0a0a;
         flex-grow: 1;
         width: 100%;
         height: 75%;
         overflow-y: auto;
         padding: 20px;

         .message {

            margin-bottom: 15px;
            color: #fff;
            font-size: 28px;

            .content {
               padding-left: 30px;
            }

            .avater {

               color: #aaa;
               font-size: 30px;
               background-color: #181B3A;


               width: 40px;
               height: 40px;
               margin-left: 25px;
               margin-right: 25px;
            }
         }
      }

      .footer {
         background-color: #181B3A;
         flex: 1;
         width: 100%;
         height: 100%;
         padding-left: 2%;
         display: flex;

         .shuru {
            width: 88%;
            display: flex;
            align-items: center;
            margin: 10px;
            padding-left: 4%;
            background-color: #181B3A;

            .input-container {
               flex: 1;
               align-items: center;
               margin-right: 50px;
            }

         }

      }
   }
}
</style>
<script setup lang="ts">
import logo from "./logo.vue";
import type { chat_message, chat_history } from "@/api/chatType"
import type { option } from "@/api/sendMessage"
import { ref, onMounted, watch } from "vue"
import { getChatHitoryList, getChatMessages, createHistory } from "@/api/chatHistory"
import { sendMessageAPI } from "@/api/sendMessage"
import { ElMessage } from "element-plus";


let handleCommand = (command: string) => {
   console.log(command)
   if (command == "Delete") { return }
   ElMessage(command)

}

let DeleteChatHistory = (e:any) => {
   console.log(e)
}


let historyList = ref<chat_history>()
let messages = ref<chat_message[]>([{
   "id": 47,
   "user_input": "你知道什么是vue2嘛",
   "gpt_response": "Vue.js 2,又称为 Vue.js 2.x,是 Vue.js 框架的一个版本。Vue.js 是一个用于构建用户界面的渐进式 JavaScript 框架。它的核心库专注于视图层，易于与其他库或现有项目集成。Vue.js 2 是较早的 Vue.js 版本，但在许多项目中仍然广泛使用。\n\nVue.js 的主要特点包括：\n\n  1. 响应式数据绑定：Vue.js 通过双向数据绑定实现数据的实时更新，使得开发者能够更轻松地处理数据变化。\n\n  2. 组件化：Vue.js 支持将应用程序拆分成独立的、可重用的组件。这有助于提高代码的可维护性和可读性。\n\n  3. 模板语法：Vue.js 使用基于 HTML 的模板语法，让开发者能够更直观地描述 UI 结构。\n\n  4. 虚拟 DOM:Vue.js 利用虚拟 DOM(Virtual DOM)技术进行高效的 DOM 操作和渲染，从而提高性能。\n\n  5. 插件系统：Vue.js 具有丰富的插件生态系统，可以方便地为框架添加新功能。\n\nVue.js 2 目前已经停止更新，取而代之的是 Vue.js 3。Vue.js 3 在很多方面进行了优化和改进，例如性能提升、更好的 TypeScript 支持等。因此，建议开发者使用最新的 Vue.js 3 版本。",
   "timestamp": "2023-08-15T15:40:05.364622Z"
}])
let chat_id = ref<number>()
let FindMessages = (id: number) => {
   chat_id.value = id
}
watch(
   chat_id, async (n) => {
      messages.value = await getChatMessages(n as number)

      console.log(messages.value)
   }
)
const Options = [
   {
      value: 'CompanyGPT',
      label: 'CompanyGpt',
   },
   {
      value: 'CompanySpark',
      label: 'CompanySpark',
   },
   {
      value: '向量数据库',
      label: '向量数据库',
   },

]

const option = ref<option>("CompanyGPT")

const userInput = ref("")
onMounted(async () => {
   historyList.value = await getChatHitoryList()

   console.log(historyList)

   chat_id.value = 41

})
let sendMessage = async () => {

   let message:chat_message={user_input:userInput.value,gpt_response:""}
   messages.value.push(message)
   let result = await sendMessageAPI(option.value, userInput.value, chat_id.value as number)
   
   messages.value.pop()
   messages.value.push(result)
   console.log(messages.value)
   

}
let newChat = async () => {
   let chatHitory: chat_history = { chat_name: "新对话" }
   let result = await createHistory(chatHitory)
   chat_id.value = result.id

   historyList.value = await getChatHitoryList()



}
</script>
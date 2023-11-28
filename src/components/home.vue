<template>
  <div class="backcont">
      <div class="header">
        <div class="logoContainer">

          <logo></logo>
        </div>
        
        <div class="banner">
          <div class="banner-title">Company GPT</div>
          <div class="ing"></div>
          <div class="banner-desc">专注于提供全面知识管理和培训解决方案的领先企业。通过整合行业顶尖的资源和最佳实践，我们致力于帮助企业实现持续创新、高效决策和团队协作的目标</div>
        </div>
        
      </div>
      <div class="btn">
        <el-button type="primary" size="large" @click="chat" round>加入体验</el-button>
      </div>
      
    </div>
</template>


<style lang="scss" scoped>
    .backcont {
    background-image: url(../assets/beijing.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    min-height: 100vh;
  }
  .logoContainer{
    width: 40%;
  }
 
 
   
  

  .banner-title {
    font-family: 'KoHo';
    font-style: normal;
    font-weight: 600;
    font-size: 88px;
    line-height: 155.52%;
    color:#fff;
    
    padding-top:95px;
    padding-left:328px;
    padding-right:20%;
  }
  .banner-desc {
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 48px;
/* identical to box height, or 157% */
    display: flex;
    align-items: center;
    color:#fff;
    padding-left:328px;
    padding-right:20%;
  }
  .banner-tag {
    border: 1px solid #fff;
  }

  .btn{
    padding-top:2%;
    padding-left:30%;
    width:100px;
  }
</style>

<script setup lang="ts">

import logo from './logo.vue';
import { useRouter } from 'vue-router'
  const router = useRouter()
 
  const chat = () => {
  router.push('/chat')
}
</script>
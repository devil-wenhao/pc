<template>
  <div class='container-login'>
    <el-card class="mycard">
        <img src="../../assets/logo_index.png" alt="">
        <el-form :model="loginForm">
            <el-form-item>
                <el-input v-model="loginForm.mible" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:238px;margin-right:10px"></el-input>
                <el-button>发送验证码</el-button>
            </el-form-item>
            <el-checkbox :value="true">我已阅读和同意用户协议和隐私条款</el-checkbox>
            <el-form-item>
                <el-button type="primary" style="width:100%;margin-top:20px">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mible: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .container-login{
        width: 100%;
        height: 100%;
        position: absolute;
        left:0;
        top:0;
        background: url(../../assets/login_bg.jpg) no-repeat center / cover;
        .mycard{
            width: 400px;
            height:350px;
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            img{
                display: block;
                width: 200px;
                margin: 0 auto 20px;
            }
        }
    }
</style>

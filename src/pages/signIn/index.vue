<template>
    <div class="sign-in-container">
        <h1>登录</h1>
        <el-form ref="form" label-width="80px" class="formData">
            <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="signIn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import axios from 'axios'
  export default {
    data() {
      return {
        username:'',
        password:''
      }
    },
    methods: {
        signIn(){
            //1.获取表单内数据进行初步校验
            if(this.username.trim() == '' || this.password.trim() == '') {
                this.$message({
                    showClose: true,
                    message: '用户名或密码都不能为空',
                    type: 'error'
                });
            }
            //2.如果填入了数据,就发送请求,看是否正确,用axios发送请求
            axios.post('http://litc.pro:9999/v1/users/login',{username:this.username , password:this.password})
            .then(result=>{
                console.log(result);
                //登录成功就把返回的用户信息和token存储到本地缓存
                let token = result.data.data.token
                localStorage.setItem('token',token)
                localStorage.setItem('userInfo',result.data.data)
                this.$router.push('/home')
            })
            .catch(err=>{
                console.dir(err);
            })
        }
    }
  }
</script>
<style lang="less" scoped>
.sign-in-container{
    
        margin: 200px auto;
    h1{
        text-align: center;
        font-size: 24px;
        color:#002962;

    }
    .formData{
        text-align: center;
        width: 400px;
        margin: auto;
    }
}
</style>

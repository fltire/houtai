<template>
    <div class="login-container">
        <div class="form">
            <div class="title">登录</div>
            <el-form ref="form" :model="form" >
                <el-form-item >
                    <el-input v-model="form.username" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-input v-model="form.password" prefix-icon="el-icon-s-finance" show-password></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button type="primary" style="width:100%" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import Cookies from "js-cookie";
import {sendServer} from '@/utils/request.js'
export default {
    data () {
        return {
            form: {
                username: 'admin',
                password: '123456'
            }
        }
    },
    methods: {
        login(){
            this.$refs.form.validate(valid => {
                if (valid) {
                    let Params = {},
                        send = {}
                    send.UserMobile = this.form.username
                    send.USerPwd = this.form.password
                    Params.url = '/f/userAction/mobileLogin'
                    Params.send = send
                    sendServer(Params,this).then(
                        (res)=>{
                            console.log(res)
                            if(res.code===0){
                                Cookies.set('token',123)
                                this.$router.push({ path:'/'})
                                localStorage.setItem('name',res.data.name)
                            }
                        },(res)=>{
                        }
                    )
                }
            })
             
        }
    }
}
</script>
<style>
.login-container input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #283442 inset !important; 
    text-fill-color: white;
    -webkit-text-fill-color: white; 
    border: 0;
    /* border: 1px solid rgba(255, 255, 255, .1)!important; */
}
.login-container .el-input__inner{
    background:#283442;
    border: 1px solid rgba(255, 255, 255, .1)!important;
    height: 52px;
    color: #fff;
    line-height: 52px;
}
.login-container .el-input__icon{
    line-height: 52px;
}
</style>
<style scoped>
.login-container{
    background-color: #2d3a4b;
    width: 100%;
    height: 100%;
}
.form{
    width: 500px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 20px;
    margin-left: -250px;
    margin-top: -150px;
}
.title{
    font-size: 30px;
    font-weight: 900;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
}

</style>
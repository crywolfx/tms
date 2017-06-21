<template>
    <div class="login">
        <div class="content">
            <img class="login-img" src="../assets/svg/teacher.svg" alt="">
            <div class="login-content">
                <el-input class="uname " v-model="uname" type="text" placeholder="请输入用户名"></el-input>
                <el-input class="password " v-model="upass" type="password" placeholder="请输入密码"></el-input>
                <el-button @click="submit" type="primary">登录</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'login',
    data() {
        return {
            uname: '',
            upass: '',
        }
    },
    methods: {
        submit() {
            if(!this.uname.trim() || !this.upass.trim()){
                return ;
            }
            axios.post('/api/users/login',{
                name:this.uname,
                password:this.upass,
            }).then(res=>{
                console.log(res);
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.login {
    position: relative;
    top: -80px;
    height: 100%;
    width: 100%;
    background: #20A0FF;
    .content {
        position: absolute;
        left: 50%;
        width: 280px;
        top: 50%;
        transform: translate(-50%, -70%);
        .login-img {
            display: block;
            margin: 0 auto;
        }
        .login-content {
            margin-top: 30px;
            .el-input {
                display: block;
                margin-top: 10px;
            }
            .el-button {
                width: 100%;
                margin-top: 10px;
                background: #324157;
                color: #fff;
                &:hover {
                    background: #42474F;
                }
            }
        }
    }
}
</style>

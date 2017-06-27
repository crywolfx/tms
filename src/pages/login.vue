<template>
    <div class="login">
        <div class="content">
            <img class="login-img" :src="type=='a'? 'static/img/teacher.svg' :'static/img/admin.svg'" alt="">
            <div class="login-content">
                <el-dropdown @command="handleCommand">
                    <el-button type="primary">
                        登录类型:{{type=='a' ? '教师' : '管理员'}}
                        <i class="el-icon-caret-bottom el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">教师</el-dropdown-item>
                        <el-dropdown-item command="b">管理员</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-input class="uname " v-model="uname" type="text" placeholder="请输入用户名"></el-input>
                <el-input class="password " v-model="upass" type="password" placeholder="请输入密码"></el-input>
                <el-button @click="login" type="primary">登录</el-button>
                <transition name="el-zoom-in-top">
                    <el-button v-show="type=='a'" class="reg" @click="$router.push({name:'reg'})" type="text">注册</el-button>
                </transition>
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
            type: 'a',
        }
    },
    watch: {

    },
    methods: {
        login() {
            if (!this.uname.trim() || !this.upass.trim()) {
                return;
            }
            if (this.type == 'b') {
                axios.post('/api/teacher/checkAdmin', {
                    name: this.uname,
                }).then(res => {
                    if (!res.data.isAdmin) {
                        this.$message.error('您没有权限登录');
                    } else {
                        this.teacherLogin('aindex', true);
                    }
                })
            } else {
                this.teacherLogin('tindex', false);
            }
        },
        handleCommand(command) {
            this.type = command;
        },
        teacherLogin(pathName, isAdmin) {
            axios.post('/api/teacher/login', {
                name: this.uname,
                password: this.upass,
            }).then(res => {
                if (res.data.success) {
                    this.$message({
                        type: 'success',
                        message: `欢迎${res.data.data.reName}登录`,
                    })
                    this.$store.commit('SET_TOKEN', res.data.token);
                    this.$store.commit('SET_IS_ADMIN', isAdmin);
                    this.$store.commit('SET_USER_INFO',res.data.data);
                    localStorage.setItem('userInfo',JSON.stringify(res.data.data));
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('isAdmin', isAdmin);
                    this.$router.push({
                        name: pathName,
                    })
                } else {
                    this.$message.error('用户名或者密码错误');
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.login {
    position: relative;
    height: 100%;
    width: 100%;
    background: #20A0FF;
    .content {
        position: absolute;
        left: 50%;
        width: 280px;
        top: 50%;
        transform: translateX(-50%);
        margin-top: -300px;
        .login-img {
            display: block;
            margin: 0 auto;
        }
        .login-content {
            margin-top: 30px;
            .el-dropdown {
                width: 100%;
                .el-dropdown-menu {
                    width: 100%;
                }
                .el-dropdown-item {
                    width: 100%;
                }
            }
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
            .reg {
                margin-left: 0;
                background: #474F5C;
            }
        }
    }
}
</style>

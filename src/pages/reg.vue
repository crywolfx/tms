<template>
    <div class="reg">
        <div class="content">
            <img class="login-img" src="../assets/svg/teacher.svg" alt="">
            <div class="login-content">
                <el-input ref="uname" :class="[unameR===true ? 'right' : 'wrong']" v-model="uname" type="text" placeholder="请输入用户名"></el-input>
                <el-input v-model="upass" type="password" placeholder="请输入密码"></el-input>
                <el-input v-model="rpass" :class="[rpassR===true ? 'right' : 'wrong']" type="password" placeholder="请再次输入密码"></el-input>
                <el-button @click="reg" type="primary">注册</el-button>
                <el-button class="back" @click="$router.go(-1)">返回</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'reg',
    data() {
        return {
            uname: '',
            upass: '',
            rpass: '',
            unameR: false,
            rpassR: false,
        }
    },
    watch: {
        uname(val, oldval) {
            const unamer = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
            const unameReg = new RegExp(unamer);
            if (unameReg.test(val)) {
                this.unameR = true;
            } else {
                this.unameR = false;
            }
        },
        rpass(val) {
            if (val != this.upass) {
                this.rpassR = false;
            } else {
                this.rpassR = true;
            }
        }
    },
    methods: {
        reg() {
            if (!this.unameR || !this.rpassR) {
                this.$message({
                    message: '请检查填写内容',
                    type: 'warning'
                });
            } else {
                this.doreg();
            }
        },
        doreg() {
            this.axios.post('/api/teacher/reg', {
                uname: this.uname,
                upass: this.upass
            }).then(res => {
                if (res.data.hasReg) {
                    this.$message({
                        message: '该帐号已被注册',
                        type: 'warning'
                    });
                } else if (res.data.success) {
                    this.$message({
                        message: '注册成功',
                        type: 'success'
                    });
                    this.$router.push({
                        name: 'Login',
                    })
                }
            })
        }
    },
}
</script>
<style lang="scss" scoped>
.reg {
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
            .el-input {
                display: block;
                margin-top: 10px;
            }
            .right::after {
                content: '';
                position: absolute;
                right: -32px;
                top: 50%;
                margin-top: -15px;
                display: block;
                width: 30px;
                height: 30px;
                background: url('../assets/svg/right.svg') no-repeat;
                background-size: contain;
            }
            .wrong::after {
                content: '';
                position: absolute;
                right: -32px;
                top: 50%;
                margin-top: -15px;
                display: block;
                width: 30px;
                height: 30px;
                background: url('../assets/svg/wrong.svg') no-repeat;
                background-size: contain;
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
            .back{
                margin-left: 0;
            }
        }
    }
}
</style>


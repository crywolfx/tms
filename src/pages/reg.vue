<template>
    <div class="reg">
        <div class="content">
            <img class="login-img" v-show="!isNext" src="../assets/svg/teacher.svg" alt="">
            <div class="login-content" v-show="!isNext">
                <el-input ref="uname" :class="[unameR===true ? 'right' : 'wrong']" v-model="uname" type="text" placeholder="请输入用户名"></el-input>
                <el-input v-model="upass" type="password" placeholder="请输入密码"></el-input>
                <el-input v-model="rpass" :class="[rpassR===true ? 'right' : 'wrong']" type="password" placeholder="请再次输入密码"></el-input>
                <el-button @click="next">下一步</el-button>
                <el-button class="back" @click="$router.go(-1)">返回</el-button>
            </div>
        </div>
        <div class="reg-detail" v-show="isNext">
            <table>
                <tr>
                    <td class="name">姓名:</td>
                    <td>
                        <el-input type="text" class="detail" placeholder="请输入真实姓名" v-model="userInfo.reName"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">性别:</td>
                    <td>
                        <label>
                            <input name="sex" type="radio" value="男" v-model="userInfo.sex">男</label>
                        <label>
                            <input name="sex" type="radio" value="女" v-model="userInfo.sex">女</label>
                    </td>
                </tr>
                <tr>
                    <td class="name">年龄:</td>
                    <td>
                        <el-input type="number" placeholder="请输入年龄" v-model="userInfo.age"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">民族:</td>
                    <td>
                        <el-input type="text" v-model="userInfo.nationality"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">籍贯:</td>
                    <td>
                        <el-input type="text" v-model="userInfo.native"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">身份证号:</td>
                    <td>
                        <el-input type="text" placeholder="请输入18位身份证号" v-model="userInfo.idcard"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">联系电话:</td>
                    <td>
                        <el-input type="text" placeholder="请输入11位手机号码" v-model="userInfo.phoneNum"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">邮箱:</td>
                    <td>
                        <el-input type="text" placeholder="e-mail" v-model="userInfo.email"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">出身日期:</td>
                    <td>
                        <el-input type="text" placeholder="请输入密码" v-model="userInfo.born"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">健康状况:</td>
                    <td>
                        <el-select v-model="userInfo.health" placeholder="请选择">
                            <el-option label="良好" value="良好"> </el-option>
                            <el-option label="一般" value="一般"></el-option>
                            <el-option label="差" value="差"></el-option>
                        </el-select>
                    </td>
                </tr>
                <tr>
                    <td class="name">联系地址:</td>
                    <td>
                        <el-input type="text" v-model="userInfo.address"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">政治面貌:</td>
                    <td>
                        <el-select v-model="userInfo.politics" placeholder="请选择">
                            <el-option label="党员" value="党员"> </el-option>
                            <el-option label="团员" value="党员"></el-option>
                            <el-option label="群众" value="党员"></el-option>
                            <el-option label="其他" value="党员"></el-option>
                        </el-select>
                    </td>
                </tr>
                <tr>
                    <td class="name">最高学历:</td>
                    <td>
                        <el-select v-model="userInfo.qualification" placeholder="请选择">
                            <el-option label="博士" value="博士"> </el-option>
                            <el-option label="硕士" value="硕士"></el-option>
                            <el-option label="本科" value="本科"></el-option>
                            <el-option label="其他" value="其他"></el-option>
                        </el-select>
                    </td>
                </tr>
                <tr>
                    <td class="name">学校:</td>
                    <td>
                        <el-input type="text" v-model="userInfo.school"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">所属部门:</td>
                    <td>
                        <el-input type="text" v-model="userInfo.division"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">入职年份:</td>
                    <td>
                        <el-input type="date" placeholder="2000-01-01" v-model="userInfo.workyear"></el-input>
                    </td>
                </tr>
                <tr>
                    <td class="name">职称:</td>
                    <td>
                        <el-input type="text" v-model="userInfo.title"></el-input>
                    </td>
                </tr>
    
            </table>
            <el-button @click="reg">确定无误,点击注册</el-button>
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
            isNext: false,
            userInfo: {
                reName: '',
                sex: '男',
                age: '',
                health: '',
                nationality: '',
                native: '',
                idcard: '',
                email: '',
                phoneNum: '',
                born: '',
                address: '',
                school: '',
                division: '',
                workyear: '',
                title: '',
                politics: '',
                qualification: '',
            }
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
        checkInfo() {
            let flag = false;
            for (let i in this.userInfo) {
                if (!this.userInfo[i]) {
                    flag = false;
                    break;
                } else {
                    flag = true;
                }
            }
            return flag;
        },
        next() {
            if (!this.unameR || !this.rpassR) {
                this.$message({
                    message: '请检查填写内容',
                    type: 'warning'
                });
            } else {
                this.cheackName();
            }
        },
        reg() {
            if (this.checkInfo()) {
                this.doreg();
            } else {
                this.$message({
                    message: '请检查未填项',
                    type: 'warning'
                });
            }

        },
        doreg() {
            this.userInfo.name = this.uname;
            this.userInfo.pass = this.upass;
            this.axios.post('/api/teacher/reg', this.userInfo)
            .then(res => {
                if (res.data.success) {
                    this.$message({
                        message: '注册成功',
                        type: 'success'
                    });
                    this.$router.push({
                        name: 'Login',
                    })
                }
            })
        },
        cheackName() {
            this.axios.post('/api/teacher/checkName', {
                uname: this.uname,
            }).then(res => {
                if (res.data.success) {
                    this.isNext = true;
                } else {
                    this.$message({
                        message: '该帐号已被注册',
                        type: 'warning'
                    });
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
            .back {
                margin-left: 0;
            }
        }
    }
    .reg-detail {
        width: 350px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .name {
            width: 80px;
            padding: 6px;
            text-align: right;
        }
        .el-button {
            width: 100%;
            margin-top: 20px;
            background: #324157;
            color: #fff;
        }
    }
}
</style>


<template>
    <div class="tindex">
        <vheader></vheader>
        <div class="aside">
            <el-col :span="24">
                <el-menu default-active="1" class="el-menu-vertical-demo">
                    <el-menu-item index="1" @click="changeTab(1)">
                        <i class="el-icon-menu"></i>查看资料</el-menu-item>
                    <el-menu-item index="2" @click="changeTab(2)">
                        <i class="el-icon-edit"></i>修改资料</el-menu-item>
                    <el-menu-item index="3" @click="changeTab(3)">
                        <i class="el-icon-minus"></i>修改密码</el-menu-item>
                    <el-menu-item index="4" @click="changeTab(4)">
                        <i class="el-icon-message"></i>发送反馈</el-menu-item>
                </el-menu>
            </el-col>
        </div>
        <div class="in-content" v-show="tab===1">
            <el-row>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">姓名:</span>{{userInfo.reName}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">性别:</span>{{userInfo.sex}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">年龄:</span>{{userInfo.age}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">族别:</span>{{userInfo.nationality}}</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">身份证号:</span>{{userInfo.idcard}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">出生日期:</span>{{userInfo.born}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">籍贯:</span>{{userInfo.native}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">政治面貌:</span>{{userInfo.politics}}</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">联系电话:</span>{{userInfo.phoneNum}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">联系邮箱:</span>{{userInfo.email}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">健康状况:</span>{{userInfo.health}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">入职年份:</span>{{userInfo.workyear}}</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">最高学历:</span>{{userInfo.qualification}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">所在学校:</span>{{userInfo.school}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">所属部门:</span>{{userInfo.division}}</div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content block"><span class="type-name">职称:</span>{{userInfo.title}}</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import header from '../components/header'
export default {
    name: 'tindex',
    data() {
        return {
          tab:1,  
        }
    },
    components: {
        vheader: header,
    },
    computed: {
        userInfo() {
            return this.$store.state.userInfo;
        }
    },
    methods: {
        changeTab(index) {
            this.tab = index;
        }
    }

}
</script>
<style lang="scss">
.tindex {
    height: 100%;
    width: 100%;
    .aside {
        position: absolute;
        width: 260px;
        top: 80px;
        bottom: 0;
        background: #EEF1F6;
    }
    .in-content {
        position: absolute;
        top: 80px;
        bottom: 0;
        left: 260px;
        right: 0;
        box-sizing: border-box;
        padding: 80px;
        .el-row{
            margin-bottom: 20px;
        }
        .grid-content{
            background: #eee;
            padding: 15px;
            margin-right: 20px;
            color: #5E5E5E;
            .type-name{
                margin-right: 8px;
                color:#303030;
                display: block;
                float: left;
                height: 100%;
            }
        }
    }
}
</style>

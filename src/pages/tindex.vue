<template>
    <div class="tindex">
        <vheader></vheader>
        <div class="aside">
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-message"></i>用户详情</template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">查看资料</el-menu-item>
                            <el-menu-item index="1-2">修改资料</el-menu-item>
                            <el-menu-item index="1-3">修改密码</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>发送反馈</el-menu-item>
                </el-menu>
            </el-col>
        </div>
    </div>
</template>
<script>
import header from '../components/header'
export default {
    name: 'tindex',
    components: {
        vheader: header,
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
}
</style>

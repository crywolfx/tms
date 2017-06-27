<template>
    <header>
        <div class="title">T M S</div>
        <div class="user-info">
            <span>{{userInfo.reName}}</span><span>已登录</span>
            <span class="logout" @click="logout"><u>登出</u></span>
        </div>
    </header>
</template>
<script>
export default {
    name:'header',
    computed: {
        userInfo() {
            return this.$store.state.userInfo;
        }
    },
    watch: {
        userInfo(val,oldval) {
            
        }
    },
    methods: {
        logout() {
            this.$store.commit('SET_TOKEN', '');
            this.$store.commit('SET_USER_INFO','');
            localStorage.clear();
            this.$router.push({
                        name: 'login',
                    })
        }
    }
  
}
</script>
<style lang="scss" scoped>
header{
    height: 80px;
    width: 100%;
    background: #20A0FF;
    color:#fff;
    .title{
        float: left;
        width: 260px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 44px;
    }
    .user-info{
        float: right;
        height: 80px;
        padding: 0 20px;
        line-height: 100px;
        span{
            padding: 0 6px;
        }
        .logout{
            color: #eee;
            cursor: pointer;
        }
    }
}
</style>

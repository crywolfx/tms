<template>
    <div class="aindex">
        <vheader></vheader>
    </div>
</template>
<script>
import header from '../components/header'
export default {
    name: 'aindex',
    data() {
        return {

        }
    },
    components: {
        vheader: header,
    },
    computed: {
        token() {
            return this.$store.state.token;
        }
    },
    methods: {
        test() {
            this.axios.post('/api/teacher/test',{
                name:'wwwww'
            }).then(res => {
                console.log(res);
            })
        }
    }
}
</script>
<style lang="scss">
.tindex {
    height: 100%;
    width: 100%;
}
</style>

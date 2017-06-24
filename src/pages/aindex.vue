<template>
    <button @click="test">
        11111111</button>
</template>
<script>
export default {
    name: 'aindex',
    data() {
        return {

        }
    },
    computed: {
        token() {
            return this.$store.state.token;
        }
    },
    methods: {
        test() {
            this.axios({
                method: "POST",
                url: '/api/teacher/test',
                data: {
                    firstName: "Fred",
                    lastName: "Flintstone"
                },
            }).then(res => {
                console.log(res);
            })
        }
    }
}
</script>
<style lang="scss">

</style>

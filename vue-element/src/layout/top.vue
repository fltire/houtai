<template>
    <div>
        <div class="left" @click="toggleCollapse"><i :class="isCollapse?'el-icon-s-unfold' :'el-icon-s-fold'"></i></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    computed:{
        isCollapse(){
            return this.$store.state.layout.isCollapse
        }
    },
    methods:{
        toggleCollapse(){
            this.$store.commit('layout/toggleCollapse',!this.isCollapse)
        }
    }
}
</script>
<style  scoped>
.left{
    float: left;
    font-size: 30px;
    height: 54px;
    line-height: 54px;
    margin-left: 10px;
    cursor: pointer;
}
</style>

<template>
    <div>
        <div class="top">
            <div class="left" @click="toggleCollapse"><i :class="isCollapse?'el-icon-s-unfold' :'el-icon-s-fold'"></i></div>
            <div class="title">后台管理系统</div>
            <div class="right">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{name}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" @click.native="logout">
                        <el-dropdown-item >退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <view-item></view-item>
    </div>
</template>
<script>
import Cookies from "js-cookie";
import ViewItem from './viewItem.vue'
export default {
    data () {
        return {
            name:''
        }
    },
    components: {
        ViewItem
    },
    computed:{
        isCollapse(){
            return this.$store.state.layout.isCollapse
        }
    },
    mounted () {
        this.name = localStorage.getItem('name')
    },
    methods:{
        toggleCollapse(){
            this.$store.commit('layout/toggleCollapse',!this.isCollapse)
        },
        logout(){
            Cookies.remove('token');
            localStorage.removeItem('name')
            this.$router.push({ path:'/login'})
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
.title{
    line-height: 54px;
    font-size: 17px;
    font-weight: 700;
    float: left;
    margin-left: 20px;
}
.top{
    width: 100%;
    height: 54px;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
}
.right{
    float:right;
    line-height: 54px;
    cursor: pointer;
}
</style>

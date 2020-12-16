<template>
    <div>
        <div v-for="menu in menuData" :key="menu.name">
            <el-menu-item v-if='menu.children===undefined' :index='menu.name' @click="change(menu.path)">
                <svg-icon :icon-class="menu.meta.icon"></svg-icon>
                <!-- <i :class="menu.meta.icon"></i> -->
                <span slot="title">{{menu.name}}</span>
            </el-menu-item>
            <el-menu-item v-else-if='menu.children.length===1' :index='menu.children[0].name' @click="change(menu.path)">
                <svg-icon :icon-class="menu.children[0].meta.icon"></svg-icon>
                <!-- <i :class="menu.children[0].meta.icon"></i> -->
                <span slot="title">{{menu.children[0].name}}</span>
            </el-menu-item>
            <el-submenu  v-else :index='menu.path' @click="change(menu.path)">
                <template slot="title">
                    <svg-icon :icon-class="menu.meta.icon"></svg-icon>
                    <!-- <i  :class="menu.meta.icon"></i> -->
                    <span v-if="!isCollapse" slot="title">{{menu.meta.title}}</span>
                </template>
                <menu-tree :menuData="menu.children"></menu-tree>
            </el-submenu>
        </div>
    </div>
</template>
<script>
import {dynamicRouter} from '../router/index'
export default {
    props: ['menuData'],
    name: 'MenuTree',
    data () {
        return {
            dynamicRouter:dynamicRouter
        }
    },
    computed:{
        isCollapse(){
            return this.$store.state.layout.isCollapse
        }
    },
    mounted(){
    },
    methods:{
        change(e){
            let route = ''
            let p = JSON.parse(JSON.stringify(this.dynamicRouter))
            // let p = JSON.parse(JSON.stringify(this.options))
            let out=false;
            function fun(p){
                let bg = 0
                for(let item of p){
                    if(item.path === e){
                        route+=item.path
                        out=true
                        return
                    }else if(item.children && item.children.length > 0){
                        route+=item.path+'/'
                        fun(item.children)
                    }
                    bg++
                    if(out) return
                    if(bg===p.length&&route&&route.length>0){
                        route = ''
                    }
                }      
            }
            fun(p)
            this.$router.push({ path: route })
        }
    }
    
}
</script>
<style>
.el-icon-arrow-right{
  display: none;
}
</style>
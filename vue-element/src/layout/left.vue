<template>
    <div style="height:100%">
        <el-menu background-color='rgb(48, 65, 86)' text-color='rgb(191, 203, 217)' :collapse="isCollapse">
            <menu-tree :menuData='dynamicRouter'></menu-tree>
        </el-menu>
    </div>
</template>
<script>
import {dynamicRouter} from '../router/index'
import MenuTree from './menuTree.vue'
  export default {
    data() {
      return {
          dynamicRouter:dynamicRouter
      };
    },
    components:{
        MenuTree
    },
    computed:{
        isCollapse(){
            return this.$store.state.layout.isCollapse
        }
    },
    mounted(){
        console.log(dynamicRouter)
    },
    methods: {
        child(e){
            if(e.children.length===1){
                return true
            }
        },
    }
  }
</script>
<style >
.el-menu-item:hover{  
  outline: 0 !important;  
  background: #001528 !important;  
}  
.el-menu-item.is-active {  
  color: #fff !important;  
  background: #001528 !important;  
}  
.el-submenu__title:focus, .el-submenu__title:hover{  
  outline: 0 !important;  
  color: #409EFF !important;  
  background: none !important;  
}  
.el-menu{
    border: 0;
    height: 100%;
}
</style>
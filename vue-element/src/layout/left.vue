<template>
    <div class="leftbox" style="height:100%">
        <el-menu :default-active='activeIndex' background-color='rgb(48, 65, 86)' @select='handleSelect' text-color='rgb(191, 203, 217)' active-text-color='#409EFF' :collapse="isCollapse">
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
          dynamicRouter:dynamicRouter,
          activeIndex:''
      };
    },
    watch: {
      // $route(e){
      //   this.handleSelect(e.name)
      // }
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
      this.handleSelect(this.$route.name)
    },
    methods: {
      handleSelect(e){
        this.activeIndex = e
      },
    }
  }
</script>

<style >

.leftbox .el-menu-item:hover{  
  outline: 0 !important;  
  background: #001528 !important;  
}  
/* .el-menu-item.is-active {  
  background: #001528 !important;  
}   */
.el-submenu__title:focus, .el-submenu__title:hover{  
  outline: 0 !important;  
  color: #409EFF !important;  
  background: none !important;  
}  
.el-menu{
    border: 0;
    height: 100%;
}
.el-submenu .el-menu-item{
  background-color: #1f2d3d !important
}

</style>
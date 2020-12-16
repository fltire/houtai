<template>
    <div class="main">
        <div class="left">
            <left></left>
        </div>
        <div class="right">
            <div class="top">
                <top></top>
            </div>
            <div class="box">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
import left from './left'
import top from './top'
export default {
    data () {
        return {
            
        }
    },
    components: {
        left,
        top
    },
    computed:{
        isCollapse(){
            return this.$store.state.layout.isCollapse
        }
    },
    watch:{
        isCollapse:(e)=>{
            console.log(e)
            if(e===true){
                document.getElementsByClassName('left')[0].style.setProperty('--width', '54px');
                document.getElementsByClassName('right')[0].style.setProperty('--width', '54px');
                document.getElementsByClassName('el-submenu__icon-arrow')[0].style.display = 'none'
            }else{
                document.getElementsByClassName('left')[0].style.setProperty('--width', '220px');
                document.getElementsByClassName('right')[0].style.setProperty('--width', '220px');
            }
        }
    },
    beforeMount(){
        window.addEventListener('resize', this.resizeHandler)
    },
    mounted(){
         this.resizeHandler()
    },
    methods:{
        resizeHandler() {
            const rect = document.body.getBoundingClientRect()
            if(rect.width<1024){
                this.$store.commit('layout/toggleCollapse',true)
            }else{
                this.$store.commit('layout/toggleCollapse',false)
            }
        },
    }
}
</script>
<style lang="scss" scoped>
$width:220px;
.main{
    width: 100%;
    height: 100%;
}
.left{
    height: 100%;
    overflow: hidden;
    width: var(--width, var(--width, 220px));
    // background-color: rgb(48, 65, 86);
    float: left;
}

.right{
    width:calc(100% - var(--width, 220px));
    height: 100%;
    margin-left: var(--width, 220px);
}
.top{
    width: 100%;
    
}
.box{
    width: 100%;
    height: calc(100% - 94px);
}
</style>
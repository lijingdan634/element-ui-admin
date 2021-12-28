<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <h4>通用后台管理系统</h4>

  <el-menu-item :index="item.path" v-for='item in noChildren' :key='item.path'>
    <i :class="'el-icon-'+item.icon" ></i>
    <span slot="title">{{item.label}}</span>
    <!-- {{item.label}} -->
  </el-menu-item>

  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>

    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>

    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>

    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>



</el-menu>

</template>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
        menu:[
          {
            path:'/',
            name:'home',
            label:'首页',
            icon:'s-home',
            url:'Home/Home'
          }, 
          {
            path:'/mall',
            name:'mall',
            label:'商品管理',
            icon:'video-play',
            url:'MallManage/MallManage'
          },
          {
            path:'/user',
            name:'user',
            label:'用户管理',
            icon:'user',
            url:'UserManage/UserManage'
          },
          {
            label:'其他',
            icon:'location',
            children:[
              {
                path:'/page1',
                name:'page1',
                label:'页面1',
                icon:'setting',
                url:'Other/PageOne'
              },
              {
                path:'/page2',
                name:'page2',
                label:'页面2',
                icon:'setting',
                url:'Other/PageTwo'
              }
            ]
          },
        ]

      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed:{
      noChildren(){
        return this.menu.filter(item=> !item.children)
      },
      hasChildren(){
        return this.menu.filter(item=> item.children)
      },

    }
  }
</script>
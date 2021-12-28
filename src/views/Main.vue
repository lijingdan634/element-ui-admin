<template>
  <div>
    <el-container style="height: 100%">
      <el-aside width='auto'><common-aside></common-aside></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue'
export default {
  name:'Main',
  components:{
    CommonAside
  }
}
</script>

<style scoped>
 .el-header{
   background:#333;
 }
 .el-main{
   padding-top:0;
 }
 
</style>
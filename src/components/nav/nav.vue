<template>
  <div id="nav1">
    <ul>
      <li>
        <router-link to="/body01">推荐</router-link>
      </li>
      <li>
        <router-link to="/body02">歌手</router-link>
      </li>
      <li>
        <router-link to="/body03">排行</router-link>
      </li>
      <li>
        <router-link to="/body04">搜索</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
#nav1{
  width: 100%;
  height: 40px;
}
#nav1 ul{
  display: flex;
}
#nav1 ul li{
  list-style: none;
  text-align: center;
  width: 20%;
  padding: 6px 12px;
}
#nav1 ul li a{
   color: #F8c731;
   text-decoration: none;
}
#nav1 ul li a:hover{
  padding-bottom: 4px;
  border-bottom: 2px solid #F8c731;
}
</style>

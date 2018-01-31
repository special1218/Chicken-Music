<template>
  <div id="nav1">
    <ul>
      <li>
        <router-link to="/lists">推荐</router-link>
      </li>
      <li>
        <router-link to="/singer">歌手</router-link>
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
   color: #7e7d80;
   text-decoration: none;
}
#nav1 ul li a:hover{
  padding-bottom: 4px;
  color: #F8C731;
  border-bottom: 2px solid #F8c731;
}
</style>

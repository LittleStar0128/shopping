<template>
<div>我是layout
  <!-- 二级路由出口 -->
  <template>
  <div>
    <!-- 二级路由出口 -->
    <router-view></router-view>
    <van-tabbar route active-color="" inactive-color="#a3a3a3">
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类页</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
</div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style>

</style>

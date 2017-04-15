<style lang="scss" scoped>
  #header {
    flex: 0 0 auto;
    height: 100px;
    border-bottom: solid 1px #F5F5F5;
    display: flex;
    justify-content: space-between;

    .logo {
      margin: -10px 0 0 30px;
    }

    .nav {
      height: 100%;
      ul {
        list-style: none;
        height: 100%;
        margin: 0 30px 0 0;
        display: flex;
        align-items: center;

        li {
          float: left;
          margin: 0 20px 0 20px;

          a {
            text-decoration: none;
            color: #8A8A8A;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
<template>
  <div id="header">
    <img class="logo" src="../assets/logo.svg"/>

    <div class="nav">
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">项目</a></li>
        <li><a href="#">合作</a></li>
        <li><a href="#">关于</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {}
</script>

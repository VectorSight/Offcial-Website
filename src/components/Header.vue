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

            .active-bar {
              width: 15px;
              height: 2px;
              background-color: #FFFFFF;
              margin: 2px auto 0 auto;
            }

            &.router-link-active {
              .active-bar {
                background-color: #F87756;
              }
            }
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
        <li><router-link to="/" exact>首页<div class="active-bar"></div></router-link></li>
        <li><router-link to="/project">项目<div class="active-bar"></div></router-link></li>
        <li><router-link to="/coop">合作<div class="active-bar"></div></router-link></li>
        <li><router-link to="/about">关于<div class="active-bar"></div></router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {}
</script>

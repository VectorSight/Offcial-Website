<style lang="scss" scoped>
  .coop {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 16px;
      color: #8A8A8A;
      font-weight: normal;
      text-align: center;
    }

    .coops {
      display: flex;
      flex-direction: row;
      margin-top: 30px;


      .coop-item {
        width: 160px;
        height: 70px;
        border: 1px solid #F3F3F3;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 18px;

        &:last-child {
          margin-right: 0;
        }

        img {
          width: 110px;
        }
      }
    }
  }
</style>
<template>
  <div class="coop">
    <h2>我们为他们提供支持</h2>
    <div class="coops">
      <div class="coop-item"><img src="../assets/coop_1.png"></div>
      <div class="coop-item"><img src="../assets/coop_2.png"></div>
      <div class="coop-item"><img src="../assets/coop_3.png"></div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>

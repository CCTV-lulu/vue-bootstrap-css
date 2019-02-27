<template>
  <div class="container-fluid app-container">
    <h3>css展示卡片</h3>
    <div class="row ">
      <div class="block col-md-3 ">
          <h5>只有颜色不同的按钮</h5>

      </div>
      <div class="block col-md-3 ">
        <h5>透明边框</h5>
      </div>
      <div class="block col-md-3 ">
        <h5>多层边框</h5>
      </div>
      <div class="block col-md-3 ">
        <h5>两层边框</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
// $(function () {
//   alert('引入成功')
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .app-container{
    background: no-repeat url("../assets/background.jpg");
    background-size: 100%;
    text-align: center;
    height: 100%;
  }
  .row{
    height: 30%;
  }
  .block{
    /*border: 10px solid rgba(0,0,0,0);*/
    padding: 10px;
    height: 100%;
    background-color: #9efa74;
    background-clip: content-box;

  }

</style>

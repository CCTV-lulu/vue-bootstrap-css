<template>
  <div class="container-fluid app-container">
    <h3>css展示卡片</h3>
    <div class="row ">
      <div class="block col-md-3 ">
        <div class="title">
          <span>只有颜色不同的按钮</span>
        </div>
        <div class="content">

        </div>
      </div>
      <div class="block col-md-3 ">
        <div class="title">
          <span>透明边框</span>
        </div>
        <div class="content">

        </div>
      </div>
      <div class="block col-md-3 ">
        <div class="title">
          <span>多层边框</span>
        </div>
        <div class="content">

        </div>
      </div>
      <div class="block col-md-3 ">
        <div class="title">
          <span>两层边框</span>
        </div>
        <div class="content">

        </div>
      </div>
      <div class="block col-md-3 ">
        <div class="title">
          <span>内侧圆角</span>
        </div>
        <div class="content">
            <div class="something-meaningful">
                <div>内侧圆角的div块1</div>
            </div>
            <div class="second-meaningful">
              <div>内侧圆角的div块2</div>
            </div>
        </div>
      </div>
      <div class="block col-md-3 ">
        <div class="title">
          <span>条纹背景</span>
        </div>
        <div class="content">
          <div class="transverse-stripe">
            横向条纹
          </div>
          <div class="portrait-stripe">
            纵向条纹
          </div>
        </div>
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
    background: url("../assets/background.jpg") no-repeat center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: scroll;
    text-align: center;
    height: 100%;
  }
  .title{
    height: 15%;
    width: 93%;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(175, 199, 217, 0.5);
    /*background-color: rgba(158,250,116,0.9);*/
    /*color: #3aff73;*/
  }
  .content{
    height: 73%;
    width: 93%;
    margin: 0 auto;
    background-color: rgba(175, 199, 217, 0.5);
    /*background-color: rgba(158,250,116,0.9);*/
  }
  .row{
    height: 40%;
  }
  .block{
    /*padding: 10px;*/
    margin-bottom: 10px;
    box-shadow: 0 0 0 10px rgba(0,0,0,0),
                3px 5px 2px 2px rgba(176, 195, 192, 0.1);
    height: 100%;
    background-color: rgba(158,250,116,0.7);
    background-clip: content-box;
  }
  .something-meaningful{
    margin: 10px;
    background: #655;
    padding: .8em;
  }
  .something-meaningful > div{
    background: tan;
    border-radius: .8em;
    padding: 1em;
  }
  .second-meaningful{
    margin: 10px;
    background: tan;
    border-radius: .8em;
    padding: 1em;
    /*非常聪明的一种实现方式*/
    /*对css的和模型理解的非常到位*/
    box-shadow: 0 0 0 .3em #655;
    outline: .3em solid #655;
  }
  .transverse-stripe{
    height: 50%;
    background: linear-gradient(#fb3 33.3%,#58a 0, #58a 66.6%, yellowgreen 0);
    background-size: 100% 30px;
  }
  .portrait-stripe{
    height: 50%;
    /*background: linear-gradient(45deg, #fb3 33.3%,#58a 0, #58a 66.6%, yellowgreen 0);*/
    /*background-size: 100% 30px;*/
    background: linear-gradient(45deg,#fb3 25%, #58a 0, #58a 50%,#fb3 0, #fb3 75%, #58a 0);
    background-size: 30px 30px;
  }

</style>

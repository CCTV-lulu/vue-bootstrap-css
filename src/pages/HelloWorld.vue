<template>
    <div class="container-fluid app-container">
        <h3>css展示卡片</h3>
        <div class="row ">
            <div class="block col-md-3 ">
                <div class="title">
                    <a href="#top">点击链接到锚点定位</a>
                </div>
                <div class="content">

                </div>
            </div>
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
                        斜向条纹
                    </div>
                </div>
            </div>
            <div class="block col-md-3 ">
                <div class="title">
                    <span>条纹背景</span>
                </div>
                <div class="content">
                    <div id="bitmap">The image is stretched to fill the area.</div>
                </div>
            </div>
            <div class="block col-md-3 ">
                <div class="title">
                    <span>蚂蚁行军边框</span>
                </div>
                <div class="content">
                    <div class="some-color"></div>
                </div>
            </div>
            <div class="block col-md-3 ">
                <div class="title">
                    <span>任意高度展开收起动画</span>
                </div>
                <div class="content">
                    <div class="element">
                        <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                        <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                        <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                        <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                    </div>
                </div>
            </div>
            <div class="block col-md-3 ">
                <div class="title">
                    <span>图片加载优化</span>
                </div>
                <div class="content">
                    <img :src="imgSrc" alt="风景图片">
                    <p>{{imgSrc}}</p>
                </div>
            </div>
            <div class="block col-md-3 ">
                <div class="title">
                    <span>加载动画</span>
                </div>
                <div class="content">
                    <p>正在加载中
                        <dot>...</dot>
                    </p>
                </div>
            </div>
            <div class="block col-md-3 ">
                <div class="title">
                    <span>兼容性好的按钮</span>
                </div>
                <div class="content">
                    <button id="btn" @click="alert('aaaaaa')"></button>
                    <label for="btn">这是一个按钮</label>
                </div>
            </div>
            <div class="block col-md-3 ">
                <div class="title">
                    <span id="top">锚点定位的位置</span>
                </div>
                <div class="content">

                </div>
            </div>
            <div class="block col-md-3 ">
                <div class="title">
                    <span>css实现切角</span>
                </div>
                <div class="content">
                    <div class="card"></div>
                    <div class="card-fillet"></div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                imgSrc: '../assets/background.jpg'
            }
        },
        mounted() {
            setTimeout(this.getImgSrc, 10000)
        },
        methods: {
            getImgSrc() {
                this.imgSrc = 'http://seopic.699pic.com/photo/50035/0520.jpg_wh1200.jpg'
            }
        }
    }
    // $(function () {
    //   alert('引入成功')
    // })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $block-background: rgba(175, 199, 217, 0.5);
    .app-container {
        background: url("../assets/background.jpg") no-repeat center scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        overflow: scroll;
        text-align: center;
        height: 100%;
    }

    .title {
        height: 15%;
        width: 93%;
        margin: 10px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $block-background;
        /*background-color: rgba(158,250,116,0.9);*/
        /*color: #3aff73;*/
    }

    .content {
        height: 73%;
        width: 93%;
        margin: 0 auto;
        background-color: $block-background;
        /*background-color: rgba(158,250,116,0.9);*/
    }

    .row {
        height: 40%;
    }

    .block {
        /*padding: 10px;*/
        margin-bottom: 10px;
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0),
        3px 5px 2px 2px rgba(176, 195, 192, 0.1);
        height: 100%;
        background-color: rgba(158, 250, 116, 0.7);
        background-clip: content-box;
    }

    .something-meaningful {
        margin: 10px;
        background: #655;
        padding: .8em;
    }

    .something-meaningful > div {
        background: tan;
        border-radius: .8em;
        padding: 1em;
    }

    .second-meaningful {
        margin: 10px;
        background: tan;
        border-radius: .8em;
        padding: 1em;
        /*非常聪明的一种实现方式*/
        /*对css的和模型理解的非常到位*/
        box-shadow: 0 0 0 .3em #655;
        outline: .3em solid #655;
    }

    .transverse-stripe {
        height: 50%;
        background: linear-gradient(#fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0);
        background-size: 100% 30px;
    }

    .portrait-stripe {
        height: 50%;
        /*background: linear-gradient(45deg, #fb3 33.3%,#58a 0, #58a 66.6%, yellowgreen 0);*/
        /*background-size: 100% 30px;*/
        background: linear-gradient(45deg, #fb3 25%, #58a 0, #58a 50%, #fb3 0, #fb3 75%, #58a 0);
        background-size: 30px 30px;
    }

    #bitmap {
        border: 30px solid red;
        padding: 20px;
        border-image: url("https://mdn.mozillademos.org/files/4127/border.png") 30 stretch;
    }

    .some-color {
        /*径向渐变*/
        height: 100%;
        /*background: repeating-conic-gradient(#79b 0 15deg,yellowgreen 0 30deg);*/
        /*同色系渐变*/
        /*background: repeating-linear-gradient(30deg,#79b,#79d 15px,#58a 0,#58a 30px);*/
        /*更简便的一种方法*/

    }

    /*.element{*/
    /*height:10px;*/
    /*overflow: hidden;*/
    /*transition: height 0.25s;*/
    /*}*/
    /*.element:active{*/
    /*height: auto;*/
    /*!*没有动画效果,因为高度设置为auto是无法计算的*!*/
    /*}*/
    .element {
        max-height: 10px;
        overflow: hidden;
        transition: max-height 0.5s;
    }

    .element:active {
        max-height: 666px;
        /*动画效果,因为最大高度是可计算的*/
    }

    /*关于图片的这部分尝试失败*/
    .content > img {
        height: 100px;
        width: 100px;
    }

    img::after {
        content: attr(alt);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, .5);
        transform: translateY(100%);
        transition: transform .2s;
    }

    /*img:hover::after{*/
    /*!* alt 信息显示 *!*/
    /*transform: translateY(0);*/
    /*}*/
    img:hover {
        content: url("../assets/background.jpg");
        /*替换内容的方式*/
    }

    dot {
        display: inline-block;
        height: 1em;
        line-height: 1;
        text-align: left;
        vertical-align: -.25em;
        overflow: hidden
    }

    dot::before {
        display: block;
        content: '...\A..\A.';
        white-space: pre-wrap;
        animation: dot 3s infinite step-start both;
    }

    @keyframes dot {
        33% {
            transform: translateY(-2em);
        }
        66% {
            transform: translateY(-1em);
        }
    }
    button{
        position:absolute;
        clip: rect(0 0 0 0);
    }
    label{
        display: inline-block;
        line-height: 20px;
        padding: 10px;
    }
    @mixin cutCorner ($bg,$t:0){
        background: $bg;
        background: radial-gradient(circle at bottom right, transparent $t , $bg 0)  bottom right,
        radial-gradient(circle at bottom left, transparent $t , $bg 0) bottom left ,
        radial-gradient(circle at top right, transparent $t , $bg 0) top right,
        radial-gradient(circle at top left, transparent $t , $bg 0) top left ;
        background-size: 50% 60%;
        background-repeat: no-repeat;
    }
    .card{
        height: 100px;
        width: 200px;
        background: antiquewhite;
        background: linear-gradient(-45deg, transparent 15px , antiquewhite 0)  bottom right,
        linear-gradient(45deg, transparent 15px , antiquewhite 0) bottom left ,
        linear-gradient(-135deg, transparent 15px , antiquewhite 0) top right,
        linear-gradient(135deg, transparent 15px , antiquewhite 0) top left ;
        background-size: 50% 60%;
        background-repeat: no-repeat;
    }
    .card-fillet{
        height: 100px;
        width: 200px;
        @include cutCorner(#fa60f9,15px);
    }
</style>

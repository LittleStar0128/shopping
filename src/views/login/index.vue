<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input v-model="picCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img v-if="picUrl" :src="picUrl" @click="getPicCode" alt="">
        </div>
        <div class="form-item">
          <input class="inp" placeholder="请输入短信验证码" type="text">
          <button @click="getCode">{{ second === toastSecond ? '获取验证码'  : second + '重新获取验证码' }}</button>
        </div>
      </div>

      <div class="login-btn">登录</div>
    </div>
  </div>
</template>

<script>
import { getPicCode } from '@/api/login'
// import { Toast } from 'vant'

export default {
  name: 'LoginPage',
  data () {
    return {
      picCode: '', // 用户输入的图形验证码
      picKey: '', // 用于请求传递图形验证码的唯一标识
      picUrl: '', // 存储请求渲染的图片地址
      toastSecond: 6, // 总秒数
      second: 6, // 当前秒数, 开定时器 对 second--
      timer: null //
    }
  },
  async created () {
    this.getPicCode()
  },
  methods: {
    async getPicCode () {
      const { data: { base64, key } } = await getPicCode()
      // console.log(res)
      this.picUrl = base64
      this.picKey = key

      // this.$toast('验证码获取成功')
      this.$toast.success('验证码获取成功')
    },
    // 获取短信验证码
    getCode () {
      // 当前没有定时器开着，且秒数归位 才可以倒计时
      if (!this.timer && this.second === this.toastSecond) {
        // 开启倒计时
        this.timer = setInterval(() => {
          this.second--

          if (this.second <= 0) {
            clearInterval(this.timer)
            this.timer = null // 清除定时器
            this.second = this.toastSecond // 归位
          }
        }, 1000)
      }
    }
  }
}
</script>

<style lang="less" scoped>
 .container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

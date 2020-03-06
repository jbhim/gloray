<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        screenWidth: document.body.clientWidth // 屏幕宽度
      }
    },
    watch: {
      screenWidth (val, oldVal) {
        const fullPath = this.$route.fullPath
        console.log(fullPath)
        // 监听宽度变化
        if (oldVal > 450 && val < 450) {
          this.$router.push({ path: fullPath.replace('pc', 'mobile') })
        } else if (oldVal < 450 && val > 450) {
          this.$router.push({ path: fullPath.replace('mobile', 'pc') })
        }
        return val
      }
    },
    mounted () {
      // 监听窗口大小
      window.onresize = () => {
        return (() => {
          this.screenWidth = document.body.clientWidth
        })()
      }
    }
  }
</script>

<style lang="stylus">
    #app
        width 100%
        height 100%
</style>

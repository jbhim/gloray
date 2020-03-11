<template>
  <div class="timer" style="position:relative">
    <div class="title" style="text-align: center; font-size: 20px;color: white;margin-bottom: 20px">{{title}}</div>
    <div class="time-container" style="position: absolute;display: flex;flex-direction: row; width: 70%;left: 50%;
    transform: translateX(-50%);">
      <div class="day" style="flex: 1;
      flex-direction: column;
      border-left: solid 1px white;
      border-right: solid 1px white;
      padding: 0 10px 0 10px">
        <p style="text-align: center; font-size: 40px;color: white;font-weight: bold">{{filling(this.day)}}</p>
        <p style="text-align: center; font-size: 10px;color: white">DAY</p>
      </div>
      <div class="hour" style="flex: 1;
      flex-direction: column;
      border-right: solid 1px white;
      padding: 0 10px 0 10px">
        <p style="text-align: center; font-size: 40px;color: white;font-weight: bold">{{filling(this.hour)}}</p>
        <p style="text-align: center; font-size: 10px;color: white">HOUR</p>
      </div>
      <div class="minutes" style="flex: 1;
      flex-direction: column;
      border-right: solid 1px white;
      padding: 0 10px 0 10px">
        <p style="text-align: center; font-size: 40px;color: white;font-weight: bold">{{filling(this.minutes)}}</p>
        <p style="text-align: center; font-size: 10px;color: white">MINUTES</p>
      </div>
      <div class="seconds" style="flex: 1;
      flex-direction: column;
      border-right: solid 1px white;
      padding: 0 10px 0 10px">
        <p style="text-align: center; font-size: 40px;color: white;font-weight: bold">{{filling(this.seconds)}}</p>
        <p style="text-align: center; font-size: 10px;color: white">SECONDS</p>
      </div>
    </div>
    <div class="header" style="text-align: center; font-size: 20px;color: white;margin-top: 220px;
    padding-bottom: 30px">
      {{desc}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Timer',
    props: {
      title: {
        type: String,
        default: 'title'
      },
      desc: String,
      targetDateStr: {
        type: String,
        default: '2020-07-18'
      }

    },
    data() {
      return {
        day: 0,
        hour: 0,
        minutes: 0,
        seconds: 0,
        intervalFlag: undefined
      }
    },
    created() {
      this.calTime()
      this.interval = setInterval(() => {
        this.calTime()
      }, 1000)
    },
    destroyed() {
      if (this.interval) {
        clearInterval(this.interval)
      }
    },
    methods: {
      calTime() {
        const date = new Date()
        const targetDate = new Date(this.targetDateStr)
        const day = (targetDate.getTime() - date.getTime()) / (1000 * 3600 * 24)
        const hour = (targetDate.getTime() - date.getTime()) % (1000 * 3600 * 24) / (3600 * 1000)
        const minutes = (targetDate.getTime() - date.getTime()) % (1000 * 3600 * 24) % (3600 * 1000) / (60 * 1000)
        const seconds = (targetDate.getTime() - date.getTime()) % (1000 * 3600 * 24) % (3600 * 1000) % (60 * 1000) / 1000
        this.day = Math.floor(day)
        this.hour = Math.floor(hour)
        this.minutes = Math.floor(minutes)
        this.seconds = Math.floor(seconds)
      },
      filling(val) {
        const length = val.toString().length
        if (length === 1) {
          return '0'.concat(val)
        } else {
          return val
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>

<template>
  <div id="pc" style="background-color: black;">
    <h1>this is pc</h1>
    <Timer :title="title" :desc="this.desc" target-date-str="2020-03-10" style="width: 400px"></Timer>
  </div>
</template>

<script>
  import Timer from '@/components/Timer'

  export default {
    name: 'Index',
    data() {
      return {
        title: 'LAUNCHINGIN',
        desc: '2020.7.18/19 中国上海'
      }
    },
    components: {
      Timer
    }
  }
</script>

<style scoped>

</style>

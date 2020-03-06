<template>
    <div id="mobile">
        <Header></Header>
        <h1>this is mobile</h1>
    </div>
</template>

<script>
  import Header from './Header'

  export default {
    name: 'Index',
    components: {
      Header
    }
  }
</script>

<style scoped lang="stylus">
    #mobile
        width 100%
        height 100%

        h1
            text-align center

</style>

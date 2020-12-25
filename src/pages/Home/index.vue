<template>
  <div>
    <TypeNav/>
    <!-- 列表 -->
    <ListContainer/>
    <!-- 今日推荐 -->
    <TodayRecommend/>
    <!-- 商品排行 -->
    <Rank/>
    <!-- 今日推荐 -->
    <Like/>
    <!-- 楼层 -->
    <Floor/>
    <!-- 商标 -->
    <Brand/>
  </div>
</template>

<script>

import ListContainer from './ListContainer/ListContainer'
import TodayRecommend from './TodayRecommend/TodayRecommend'
import Rank from './Rank/Rank'
import Like from './Like/Like'
import Floor from './Floor/Floor'
import Brand from './Brand/Brand'

export default {
  name: 'Home',
  
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped>

</style>

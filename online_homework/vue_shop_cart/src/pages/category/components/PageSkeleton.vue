<template name="skeleton">
  <view class="search">
    <view class="input">
      <text
        class="icon-search sk-transparent sk-text-14-2857-540 sk-text sk-pseudo sk-pseudo-circle"
        >女靴</text
      >
    </view>
  </view>
  <view class="categories">
    <scroll-view :scroll-y="true" class="primary">
      <view class="item active sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-270 sk-text">居家</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-865 sk-text">美食</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-175 sk-text">服饰</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-806 sk-text">母婴</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-691 sk-text">个护</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-727 sk-text">严选</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-639 sk-text">数码</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-899 sk-text">运动</text>
      </view>
      <view class="item sk-pseudo sk-pseudo-circle">
        <text class="name sk-transparent sk-text-14-2857-438 sk-text">杂项</text>
      </view>
    </scroll-view>
    <scroll-view :scroll-y="true" class="secondary">
      <view is="components/XtxSwiper/XtxSwiper" class="banner">
        <view class="carousel XtxSwiper--carousel">
          <swiper :autoplay="false" :circular="true" :interval="3000" :current="0"></swiper>
          <view class="indicator XtxSwiper--indicator">
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot"></text>
            <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
          </view>
        </view>
      </view>
      <view class="panel">
        <view class="title">
          <text class="name sk-transparent sk-text-26-6667-577 sk-text">居家生活用品</text>
          <navigator
            class="more sk-transparent sk-text-30-0000-306 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >全部</navigator
          >
        </view>
        <view class="section">
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-110 sk-text"
              >飞天53%vol500ml贵州茅台酒（带杯）</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-103 sk-text">1499.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-309 sk-text"
              >地道卤香好味道，桂林鲜米粉245克*6盒</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-92 sk-text">69.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-424 sk-text"
              >玛歌正牌干红750毫升2017年</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-857 sk-text">6699.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-118 sk-text"
              >苏格兰陈年单一麦芽威士忌700毫升</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-628 sk-text">318.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-619 sk-text"
              >下饭神器酸豆角50克*10袋</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-757 sk-text">16.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-869 sk-text"
              >大丈夫方便面轻巧款私房牛肉味64克*6杯</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-115 sk-text">28.50</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-788 sk-text"
              >百年名庄出品，法国南部干红750毫升</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-649 sk-text">58.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-111 sk-text"
              >三分钟即享简餐，日式即食咖喱150克</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-749 sk-text">15.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-369 sk-text"
              >古田糯耳150克</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-232 sk-text">26.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
          </navigator>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-540 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-270 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-865 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-175 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-806 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-691 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-727 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-639 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-899 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-438 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-26-6667-577 {
  background-image: linear-gradient(
    transparent 26.6667%,
    #eeeeee 0%,
    #eeeeee 73.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-30-0000-306 {
  background-image: linear-gradient(
    transparent 30%,
    #eeeeee 0%,
    #eeeeee 70%,
    transparent 0%
  ) !important;
  background-size: 100% 60rpx;
  position: relative !important;
}
.sk-text-14-2857-110 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-103 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-309 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-92 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-424 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-857 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-118 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-628 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-619 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-757 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-869 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-115 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-788 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-649 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-111 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-749 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-369 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 30.8rpx;
  position: relative !important;
}
.sk-text-14-2857-232 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>

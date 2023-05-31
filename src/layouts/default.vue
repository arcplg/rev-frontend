<template>
  <main class="base">
    <div class="base__body">
      <slot />
    </div>
    <div class="base__navigation-bar-dummy" />
    <div class="base__navigation-bar">
      <NavigationBar
        v-bind:route="route.name"
      />
    </div>
    <!-- <loading v-bind:loaded="true" /> -->
  </main>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style lang="scss" scoped>
.base {
  display: flex;
  flex-direction: column;
  max-width: 750px;
  height: 100vh;
  margin: 0 auto;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available; /* stylelint-disable-line */
    min-height: -webkit-fill-available; /* stylelint-disable-line */
  }

  .base__body {
    position: relative;
    flex: 1;
  }

  .base__navigation-bar {
    position: fixed;
    z-index: 10;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 750px;
    height: calc(4.9rem + 34px);
    margin: 0 auto;
    border-top: $border-default;
    background-color: #fff;
  }

  .base__navigation-bar-dummy {
    flex-shrink: 0;

    // LINEミニアプリのセーフエリア対応（ノーマルモード）
    // https://developers.line.biz/ja/docs/line-mini-app/design/landscape/
    height: calc(4.9rem + 34px);
    border-top: $border-default;
    border-top-color: transparent;
  }

  // LINEミニアプリのセーフエリア対応（ランドスケープモード）
  // https://developers.line.biz/ja/docs/line-mini-app/design/landscape/
  @media (orientation: landscape) {
    padding-right: 44px;
    padding-left: 44px;

    .base__navigation-bar {
      height: calc(4.9rem + 21px);
    }

    .base__navigation-bar-dummy {
      height: calc(4.9rem + 21px);
    }
  }
}
</style>

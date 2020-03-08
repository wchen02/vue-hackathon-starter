<template lang="pug">
  #app
    header-section
    .container.pl-sm-0.pr-sm-0.pl-lg-3.pr-lg-3
      flash-message
      router-view
    footer-section
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'App',
  components: {
    FooterSection,
    HeaderSection,
    FlashMessage,
  },
};
</script>

<style lang="scss">
$fa-font-path: "~@/assets/fonts";
@import "~@/assets/css/themes/default/variables";
@import 'bootstrap/scss/bootstrap';
@import 'font-awesome/scss/font-awesome';
@import "~@/assets/css/themes/default/default";

// Scaffolding
// -------------------------

html {
  position: relative;
  min-height: 100%;
}

body {
  padding-top: 80px;
  margin-bottom: 75px;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;

  p, ul {
    margin-bottom: 0;
  }
}

// Input Fields
// -------------------------

textarea {
  resize: vertical;
}

// Navbar
// -------------------------

.navbar-nav img {
  width: 30px;
  height: 30px;
  margin: -15px 15px -15px;
}

// Alerts
// -------------------------

.alert {
  margin-top: 20px;
}

// Thumbnails
// -------------------------

.thumbnail {
  padding: 0;
  border-radius: 0;
  box-shadow: 0 0 5px #ccc, inset 0 0 0 #000;
}

// Font Icons
// -------------------------

.fa {
  margin-right: 6px;
}
</style>

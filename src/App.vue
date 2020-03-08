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

// Buttons
// -------------------------

.btn {
  border-radius: 0;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.11), 1px 1px 0 rgba(255, 255, 255, 0.21) inset;

  &:focus {
    outline: none;
  }
}

.btn-link {
  box-shadow: none;
}

.btn-default, .btn-default:focus {
  background-image: linear-gradient(to bottom, #ffffff 60%, #f8f8f8 100%);
}

// Forms
// -------------------------

.form-control:focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1) inset;
}

// Alerts
// -------------------------

.alert {
  border-radius: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.10);
}

// Navbar
// -------------------------

.navbar-default {
  border: 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

  .navbar-nav {
    > li > a {
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      transition: all 0.2s linear;
    }
  }
}

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

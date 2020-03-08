<template lang="pug">
  footer
    .container.text-center
      p.float-left © 2020 Company, Inc. All Rights Reserved
      ul.float-right.list-inline
        li.list-inline-item
          a(href='https://github.com/wchen02/vue-hackathon-starter') GitHub Project
        li.list-inline-item
          a(href='https://github.com/wchen02/vue-hackathon-starter/issues') Issues
</template>

<script>
import 'jquery';
import 'popper.js';
import 'bootstrap';

export default {
  name: 'FooterSection',
};
</script>

<template lang="pug">
  #flash
    div(v-if="messages.errors")
      .alert.alert-danger.fade.show
        button.close(type='button', data-dismiss='alert')
          i.fa.fa-times-circle-o
        div(v-for="error in messages.errors")
          div {{ error.msg }}
    div(v-if="messages.info")
      .alert.alert-info.fade.show
        button.close(type='button', data-dismiss='alert')
          i.fa.fa-times-circle-o
        div(v-for="info in messages.info")
          div {{ info.msg }}
    div(v-if="messages.success")
      .alert.alert-success.fade.show
        button.close(type='button', data-dismiss='alert')
          i.fa.fa-times-circle-o
        div(v-for="success in messages.success")
          div {{ success.msg }}
</template>

<script>
export default {
  name: 'FlashMessage',
  data: () => ({
    messages: Object,
  }),
};
</script>

<style lang="scss">

</style>

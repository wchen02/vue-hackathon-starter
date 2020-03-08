<template lang='pug'>
  #login
    .page-header
      h3 Sign in
      hr

    form.form-horizontal(method='POST')
      input(type='hidden', name='_csrf', value=_csrf)
      .form-group.row
        label.col-sm-3.col-form-label.text-right.font-weight-bold(for='email') Email
        .col-sm-7
          input.form-control(
            type='email',
            name='email',
            id='email',
            placeholder='Email',
            autofocus,
            required
          )
      .form-group.row
        label.col-sm-3.col-form-label.text-right.font-weight-bold(for='password') Password
        .col-sm-7
          input.form-control(
            type='password',
            name='password',
            id='password',
            placeholder='Password',
            required
          )
      .form-group.row
        .offset-sm-3.col-sm-7
          button.col-sm-3.btn.btn-primary(type='submit')
            i.far.fa-user
            |  Login
          a.btn.btn-link(href='#/forgot') Forgot your password?
      .form-group.row
        .offset-sm-3.col-sm-7
          hr
      .form-group.row
        .offset-sm-3.col-sm-7
          a.btn.btn-block.btn-facebook.btn-social(href='#/auth/facebook')
            i.fab.fa-facebook-f.fa-sm
            | Sign in with Facebook
</template>

<script>
// import 'bootstrap-social/bootstrap-social.css';

export default {
  name: 'Login',
};
</script>

<style lang="scss">
.btn-social > :first-child, .btn-social-icon > :first-child {
  // line-height: 1.25 !important;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  font-size: 38px;
}
</style>

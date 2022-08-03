import './styles/contact.css';

const Contact = () => {
  return (
  <div class="login">

  <div class="content-login">
    <br/>
    <h1>Log in to</h1>
    <h1>'MyMoney'</h1>
    {/* <div class="content-login__form">
      <div class="content-login__form__input">
        <b-form @submit="signin" @submit.stop.prevent>
          <!-- <label for="feedback-user">Username</label> -->
          <b-form-input placeholder="username" v-model="username" :state="validation" id="feedback-user"></b-form-input>
          <b-form-invalid-feedback :state="validation">
            Your Username must be 5-12 characters long.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation">
            Looks Good.
          </b-form-valid-feedback>

          <!-- <label for="text-password"></label> -->
          <b-form-input placeholder="password" v-model="password" type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
          <div class="content-login__form__submit">
            <b-button type="submit" variant="primary">LOGIN</b-button>
            <hr/>
            <div class="content-login__form__alreadyregistered">
              Not registered yet?
            </div>
          </div>
        </b-form>
      </div>
    </div> */}
  </div>
</div>
  );
}
 
export default Contact;

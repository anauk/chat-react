import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Settings/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../utils/validation/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "../Settings/FormsControls/FormControll.module.css"
const mL5 = maxLengthCreator(5)
const Login = (props) => {
  const onSubmit=(formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if(props.isAuth){
    return <Redirect to={'/profile'}/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}
const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={'Login'}
            component={Input}
            name={'login'}
            validate={[required, mL5 ]}
          />
        </div>
        <div>
          <Field
            placeholder={'Password'}
            name={'password'}
            type={'password'}
            component={Input}
            validate={[required, mL5 ]}/>
        </div>
        <div>
          <Field
            type={'checkbox'}
            component={Input}
            validate={[required, mL5 ]}
            name={'rememberMe'}remember me/>
        </div>
        {props.error && <div className={style.formSummaryError}>{props.error}</div>}
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const mapStateToProps = (state) =>({
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login} )(Login)
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { loginUser } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.renderField.bind(this);
  }

  renderField(field) {
    const { touched, error } = field.meta;
    //or const { meta: { touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger' : '' }`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input} //field.input contains event handlers and props, onChange, etc
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  login(values) {
    this.props.loginUser(values,() => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(this.login.bind(this))}>
          <Field
            label="Email:"
            name="email"
            type="email"
            component={this.renderField}
          />
          <Field
            label="Password:"
            name="password"
            type="password"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'LoginForm',
})(
  connect(null,{ loginUser })(Login)
);

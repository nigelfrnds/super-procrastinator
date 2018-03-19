import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { registerUser } from '../actions';

class Register extends Component {
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
          placeholder={field.placeholder}
          {...field.input} //field.input contains event handlers and props, onChange, etc
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  register(values) {
    this.props.registerUser(values,() => {
      this.props.history.push('/login');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(this.register.bind(this))}>
          <Field
            label="Username:"
            name="username"
            type="text"
            placeholder="username"
            component={this.renderField}
          />
          <Field
            label="Email:"
            name="email"
            type="email"
            placeholder="email@domain.com"
            component={this.renderField}
          />
          <Field
            label="Password:"
            name="password"
            type="password"
            placeholder="password"
            component={this.renderField}
          />
          <Field
            label="Repeat Password:"
            name="password2"
            type="password"
            placeholder="confirm password"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'RegisterForm',
})(
  connect(null, { registerUser })(Register)
);

import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Row, Form, Input } from 'antd'
// import UserLogin from './components/UserLogin';
import styles from './Login.less';

const FormItem = Form.Item

class Login extends Component {
  static displayName = 'Login';
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  handleOk () {
    const { validateFieldsAndScroll } = this.props.form;
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      // dispatch({ type: 'login/login', payload: values })
    })
  }
  render() {
    // const { router } = this.props;
    const { getFieldDecorator } = this.props.form;
    const handleOk = this.handleOk.bind(this);
    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt="logo" src={logo} />
          <span>BootReact</span>
        </div>
        <form>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input onPressEnter={handleOk} placeholder="Username" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                },
              ],
            })(<Input type="password" onPressEnter={handleOk} placeholder="Password" />)}
          </FormItem>
          <Row>
            <Button type="primary" onClick={handleOk} loading={this.state.loading}>
              Sign in
            </Button>
            <p>
              <span>Username：guest</span>
              <span>Password：guest</span>
            </p>
          </Row>
        </form>
      </div>
    );
  }
}


const CustomValidForm = Form.create()(Login)

export default CustomValidForm;

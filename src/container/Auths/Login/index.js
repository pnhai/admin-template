import React, { useState, useEffect } from "react";
import { Redirect } from "@reach/router";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useInjectSaga } from "../../../utils/injectSaga";
import { useInjectReducer } from "../../../utils/injectReducer";
import { makeSelectIsLogin, makeSelectError } from "../selectors";
import { logIn, setError } from "../actions";
import saga from "../saga";
import reducer from "../reducer";
import { Button, Input, Form } from "antd";

const key = "auth";

function LogIn({ isLogin, logIn, error, setError }) {
  const [form] = Form.useForm();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  useEffect(() => {
    return () => {
      setError(null);
    };
  }, [setError]);

  if (isLogin) {
    return <Redirect to="/" noThrow />;
  }

  const onLogin = (values) => {
    logIn({
      password: values.password,
      username: values.username.toLowerCase(),
    });
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center p-4"
      style={{ backgroundColor: "#181818" }}
    >
      <div
        className="shadow-md rounded p-8 mb-4 w-full max-w-md"
        style={{ backgroundColor: "#232323" }}
      >
        <div className="py-4">
          <div
            className="font-bold px-8 text-center text-white"
            style={{
              letterSpacing: -5,
              lineHeight: 1,
              fontSize: "4rem",
            }}
          >
            chongluadao
          </div>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          layout="vertical"
          form={form}
          onFinish={onLogin}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <p className="text-red-500 text-xs italic" style={{ height: 18 }}>
            {error ? error : ""}
          </p>
          <Form.Item className="text-center">
            <Button type="primary" htmlType="submit" style={{ minWidth: 150 }}>
              Login
            </Button>
          </Form.Item>
        </Form>

        <p className="text-center text-white text-xs">
          &copy;2020 chongluadao.vn - All rights reserved.
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLogin: makeSelectIsLogin(),
  error: makeSelectError(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (data) => dispatch(logIn(data)),
    setError: (data) => dispatch(setError(data)),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(LogIn);

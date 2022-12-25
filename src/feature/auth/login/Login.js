import React, { useEffect, useState } from 'react'
import BG from "../../../assets/background.avif";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import {
  LoginBox,
  LoginContainer,
  IllustrationWrapper,
  ImageLogin,
  FormContainer,
  FormTitle,
} from "./LoginStyled";
import {useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../redux/slice/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const response = await axios.get('https://63a3cf8a471b38b206167fa8.mockapi.io/users');
    // console.log('res', response.data.data.username);
    setUsers(response.data);
  }

  const onFinish = (values) => {
     const {username, password} = values;
     const findUser = users.find((user, index) =>{
        return user.username === username && user.password=== password;
     })
    //  console.log(findUser)

     if(!findUser){
       notification['error']({
       message: 'ToDo list',
       description:'Tài khoản hoặc mật khẩu không chính xác',
     })
     }else{
       dispatch(loginSuccess(findUser));
       navigate("/listtask");
     }
    
  };

  const onFinishFailed = () =>{

  }

  return (
    <LoginContainer>
      <LoginBox>
        <IllustrationWrapper>
          <ImageLogin src={BG} />
        </IllustrationWrapper>
        <FormContainer>
          <Form
            name="login-form"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <FormTitle>Welcome back</FormTitle>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên tài khoản!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
                {
                  min: 6,
                  message: "Mật khẩu phải có ít nhất 6 ký tự",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size="large"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                block
                size="large"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </FormContainer>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;

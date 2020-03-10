import React , {Component} from 'react';
import './SignUp.css';

import {Button ,Icon} from "semantic-ui-react";
import {Form,Input} from "semantic-ui-react-form-validator";
import {signUp} from "../../../services/signUpService";
import {toast , ToastContainer} from "react-toastify";

class SignUp extends Component {
    state={
        name: "",
        email:"",
        password:"",
        confirmPassword:""
    };

    handleSubmit =async e =>{
        const {name,email,password,confirmPassword} = this.state;

        e.preventDefault();
        if(confirmPassword!== password){
            toast.error("لطفا کلمه عبورهای یکسان وارد نمایید")
        }else {

            try {
                await signUp(name , email , password);
                toast.success("اکانت شما با موفقیت ایجاد شد");

            } catch (err) {
                if (err.response && err.response.status === 400) toast.error("ایمیل یا کلمه عبور اشتباه است");
                if (err.response && err.response.status === 405) toast.error("کاربر قبلا ثبت نام کرده است");
            }
        }

    };

    render() {

        return (
            <div className={"mainContainer-signUp"}>
                <ToastContainer/>
                <h3 className={"title-signUp"}>عضویت</h3>

                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type={"text"}
                        label={"نام کاربری"}
                        size={"small"}
                        labelPosition={"left"}
                        placeholder={"نام کاربری را وارد نمایید"}
                        icon={"user outline"}
                        fluid
                        iconPosition={"left"}
                        className={"textAlign-input"}
                        value={this.state.name}
                        onChange={e => this.setState({name : e.target.value})}
                        validators={['required' , 'isString','minStringLength:5']}
                        errorMessages={['ورود نام کاربری الزامی است' ,'ورود نام کاربری', 'نام کاربری خود را به درستی وارد نمایید']}

                    />

                    <Input
                        type={"email"}
                        size={"small"}
                        label={"ایمیل"}
                        labelPosition={"left"}
                        placeholder={"ایمیل خود را وارد نمایید"}
                        icon={"mail"}
                        fluid
                        iconPosition={"left"}
                        className={"textAlign-input"}
                        value={this.state.email}
                        onChange={e => this.setState({email : e.target.value})}
                        validators={['required' , 'isEmail','minStringLength:5']}
                        errorMessages={['ورود ایمیل الزامی است' ,'ورود ایمیل', 'ایمیل خود را به درستی وارد نمایید']}
                    />

                    <Input
                        type={"password"}
                        size={"small"}
                        label={"کلمه عبور"}
                        labelPosition={"left"}
                        placeholder={"لطفا کلمه عبور را وارد نمایید"}
                        icon={"lock"}
                        fluid
                        iconPosition={"left"}
                        className={"textAlign-input"}
                        value={this.state.password}
                        onChange={e => this.setState({password : e.target.value})}
                        validators={['required' , 'isString','minStringLength:6']}
                        errorMessages={['ورود کلمه عبور الزامی است' ,'ورود کلمه عبور', 'کلمه عبور را به درستی وارد نمایید']}
                    />

                    <Input
                        type={"password"}
                        size={"small"}
                        label={"تکرار کلمه عبور"}
                        labelPosition={"left"}
                        placeholder={"لطفا دوباره کلمه عبور را وارد نمایید"}
                        icon={"lock"}
                        fluid
                        iconPosition={"left"}
                        className={"textAlign-input"}
                        value={this.state.confirmPassword}
                        onChange={e => this.setState({confirmPassword : e.target.value})}
                        validators={['required' , 'isString','minStringLength:6']}
                        errorMessages={['ورود کلمه عبور الزامی است' ,'ورود کلمه عبور', 'کلمه عبور را به درستی وارد نمایید']}
                    />

                    <Button icon labelPosition='right' inverted type={"submit"}>
                        <Icon name='checkmark'/>
                        ثبت نــام
                    </Button>

                </Form>

            </div>
        )
    }
}

export default SignUp;

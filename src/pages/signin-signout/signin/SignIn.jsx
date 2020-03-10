import React , {Component} from 'react';
import {Button , Form , Icon , Input} from "semantic-ui-react";
import {login} from "../../../services/loginService";
import {toast , ToastContainer} from "react-toastify";
import {withRouter} from 'react-router-dom';
import {loginAction} from "../../../redux/user/userAction";
import {connect} from "react-redux";

class SignIn extends Component {

    state={
        email:"",
        password:""
    };

    handleSubmit= async e =>{
        const {loginAct,history}= this.props;
        e.preventDefault();

        try{
            const {data} = await login(this.state.email,this.state.password);
            localStorage.setItem("token",data);
            loginAct(this.state.email);
            history.replace('/admin');

        }catch (err) {
            if (err.response && err.response.status === 400) toast.error("ایمیل یا کلمه عبور اشتباه است")
        }
    };

    render() {
        if (this.props.currentUser.length>0) this.props.history.push('/');

        return (
            <div className={"mainContainer-signUp"}>
                <ToastContainer/>
                <h3 className={"title-signUp"}>ورود</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field required>
                        <Input
                            required
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
                            onChange={e=> this.setState({ email: e.target.value } )}
                        />
                    </Form.Field>

                    <Form.Field required>
                        <Input
                            required
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
                            onChange={e=> this.setState({ password: e.target.value } )}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Button icon labelPosition='right' inverted type={"submit"}>
                            <Icon name='checkmark'/>
                            ورود
                        </Button>
                    </Form.Field>
                </Form>
            </div>
        )
    }
}

const mapDispatchToPros= dispatch =>({
   loginAct : credential => dispatch(loginAction(credential))
});

const mapStateToProps= state => ({
    currentUser : state.user.currentUser
});

export default withRouter(connect(mapStateToProps,mapDispatchToPros)(SignIn));
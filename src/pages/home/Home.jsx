import React,{Component,Fragment} from 'react';
import './Home.css';

import {connect} from "react-redux";
import {logoutAction} from "../../redux/user/userAction";

import {Header,Container,Button,Icon,Grid} from "semantic-ui-react";
import {Link} from "react-router-dom";



class Home extends Component{

    render() {

        const {authenticated} = this.props;

        return(
            <Fragment>
                <Container fluid className={"jumbotron"}>
                    <Header
                        as='h1'
                        content='اپ فرم ساز'
                        inverted
                        style={{
                            fontSize: '3em',
                            fontWeight: 'bold' ,
                            marginBottom: 0 ,
                            marginTop: '2em',
                            padding:'1.5em 0'
                        }}
                    />
                    <Header
                        as='h2'
                        content='لطفا ثبت نام کرده و وارد پنل مدیریت شوید'
                        inverted
                        style={{
                            fontSize: '1.6em',
                            fontWeight: 'normal',
                            marginTop: '0.5em',
                        }}
                    />
                    {
                        authenticated?
                            <Button
                                basic
                                inverted
                                size='huge'
                                as={Link}
                                to={"/admin"}
                            >
                                ورود به پنل مدیریت
                                <Icon name='left arrow' />
                            </Button>
                            :
                            <Button
                                primary
                                size='huge'
                                as={Link}
                                to={"/signInSignOut"}
                            >
                                برای شروع کلیک کنید
                                <Icon name='left arrow' />
                            </Button>
                    }
                </Container>

                <Container fluid>
                    <Grid className={"homeDescriptionForms"}>
                        <Grid.Row>
                            <Grid.Column computer={8} tablet={8} mobile={16}>
                                <div className={"loginFormDescription"}/>
                                <div className={"textDescription"}>
                                    <p className={"loginFormHeader"}>
                                        ایجاد فرم ورود و ثبت نام به صورت داینامیک
                                    </p>
                                </div>
                            </Grid.Column>

                            <Grid.Column computer={8} tablet={8} mobile={16}>
                                <div className={"designFormDescription"}/>
                                <div className={"textDescription"}>
                                    <p>
                                        طراحی تمامی فرم های ورود اطلاعات بصورت کاملا داینامیک
                                    </p>
                                </div>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Container>

            </Fragment>
        )
    }
}

const mapStateToProps = state =>({
   currentUser  : state.user.currentUser,
   authenticated: state.user.authenticated
});

const mapDispatchToProps = dispatch => ({
   logoutAct : ()=> dispatch(logoutAction())
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);

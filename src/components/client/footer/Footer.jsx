import React from 'react';
import './Footer.css';

import {Container,Grid,Segment,Header,List,Image} from "semantic-ui-react";
import {Link} from "react-router-dom";

const Footer =() =>{
    return(
        <Segment vertical className={"mainSegmentFooter"}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='درباره ما' />
                            <List link inverted>
                                <List.Item as={Link} to={"/"}>نقشه سایت</List.Item>
                                <List.Item as={Link} to={"/"}>ارتباط با ما</List.Item>
                                <List.Item as={Link} to={"/"}>مستندات </List.Item>
                                <List.Item as={Link} to={"/"}>نسخه پیشرفته</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='خدمات' />
                            <List link inverted>
                                <List.Item as={Link} to={"/"}>خدمات 1</List.Item>
                                <List.Item as={Link} to={"/"}>خدمات 2</List.Item>
                                <List.Item as={Link} to={"/"}>خدمات 3</List.Item>
                                <List.Item as={Link} to={"/"}>خدمات 4</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                اپ فرم ساز
                            </Header>
                            <p className={"footerHeader"}>
                                این اپ تحت وب، برای ایجاد و ساخت فرم های ورود اطلاعات و سایر فرمها برای راحتی کار شما در پنل مدیریت ساخته شده است.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={3} className={"hideInMobile"}>
                            <Image src={"/assets/images/editor.png"} verticalAlign='middle' size='small'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
};

export default Footer;
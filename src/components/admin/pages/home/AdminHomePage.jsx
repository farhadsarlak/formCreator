import React , {Component} from 'react';
import './AdminHomePage.css';

import {Container,Grid,Dimmer,Loader,Table,Pagination} from "semantic-ui-react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsUsersFetching , selectUsersData} from "../../../../redux/user/userSelector";
import {getAllUser} from "../../../../redux/user/userAction";
import * as PropTypes from "prop-types";
import config from '../../../../config.json';
import {paginate} from "../../../../utils/paginate";


class AdminHomePage extends Component {

    state = {
        data: [] ,
        activePage: 1 ,
        pageSize: 15 ,
    };

    componentDidMount() {
        let {fetchUsers,users} = this.props;
        fetchUsers(config.api_users);
        this.setState({data:users})
    }

    handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

    getPageData = () => {
        let {isFetching} = this.props;
        if(isFetching === false) return;
        const { pageSize, activePage, data: allUsers } = this.state;
        const users = paginate(allUsers, activePage, pageSize);

        return {
            totalCount: allUsers.length,
            data: users
        };
    };

    render() {
        let {isFetching} = this.props;
        const { activePage,pageSize} = this.state;
        const { totalCount, data } = this.getPageData();

        if (isFetching === false) return <Dimmer><Loader> درحال بارگزاری ... </Loader></Dimmer>;

        return (
            <Container fluid className={"mainContainerHomePage"}>
                <Grid padded>
                    <Grid.Row>
                        <Grid.Column computer={8} tablet={8} mobile={16}>
                            <h3> لیست کاربران </h3>
                            <Table celled fixed singleLine>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>نام کاربری</Table.HeaderCell>
                                        <Table.HeaderCell>ایمیل</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {
                                        data.map(user=>
                                            <Table.Row key={user._id}>
                                                <Table.Cell>{user.name}</Table.Cell>
                                                <Table.Cell>{user.email}</Table.Cell>
                                            </Table.Row>
                                        )}
                                </Table.Body>
                            </Table>
                            <Pagination
                                totalPages={Math.ceil(totalCount/pageSize)}
                                onPageChange={this.handlePaginationChange}
                                activePage={activePage}
                                pointing
                                secondary
                            />
                        </Grid.Column>

                        <Grid.Column computer={8} tablet={8} mobile={16}>
                            2
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

AdminHomePage.propTypes = {
    users: PropTypes.any ,
    isFetching: PropTypes.any ,
    fetchUsers: PropTypes.any
};

const mapStateToProps= createStructuredSelector({
   users     : selectUsersData,
   isFetching: selectIsUsersFetching
});

const mapDispatchToProps = dispatch =>({
   fetchUsers : (url) => dispatch(getAllUser(url))
});

export default connect(mapStateToProps,mapDispatchToProps)(AdminHomePage);
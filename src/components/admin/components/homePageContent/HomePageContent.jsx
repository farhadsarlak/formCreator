import React,{Fragment} from 'react';
import {Pagination,Table} from "semantic-ui-react";

const HomePageContent = () =>{

    return(
        <Fragment>
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
        </Fragment>
    )
};

export default HomePageContent;
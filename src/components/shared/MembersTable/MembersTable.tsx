import React from 'react';
import typesOfRoles from './helpers';
import {
    MembersBox,
    Table,
    TableBox,
    TableBody,
    TableContent,
    TableData,
    TableHeader,
    TableRow,
    TableHeaderRow,
    ProfileImg,
} from './styles';

function MembersTable({ listOfMembers }: any) {
    return (
        <MembersBox>
            <h1>Members</h1>

            <TableBox>
                <thead>
                    <TableHeaderRow>
                        <TableHeader>NAME</TableHeader>
                        <TableHeader>EMAIL</TableHeader>
                        <TableHeader>USERNAME</TableHeader>
                        <TableHeader>ROLE</TableHeader>
                    </TableHeaderRow>
                </thead>
            </TableBox>

            <TableContent>
                <Table>
                    <TableBody>
                        {listOfMembers !== null
                            ? listOfMembers?.map((member: any) => (
                                  <TableRow key={member.id}>
                                      <TableData>
                                          <ProfileImg image={member.profile.image_192} />
                                          <span>{member.real_name}</span>
                                      </TableData>
                                      <TableData>{member.profile.email}</TableData>
                                      <TableData>{member.name}</TableData>
                                      <TableData>{typesOfRoles(member)}</TableData>
                                  </TableRow>
                              ))
                            : null}
                    </TableBody>
                </Table>
            </TableContent>
        </MembersBox>
    );
}

export default MembersTable;

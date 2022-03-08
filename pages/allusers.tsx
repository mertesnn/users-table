import axios from 'axios';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

type Users = {
  users: {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  }[];
};

export const getStaticProps = async () => {
  const { data } = await axios.get('https://gorest.co.in/public/v2/users');
  return {
    props: { users: data },
  };
};

const AllUsers = ({ users }: Users) => {
  return (
    <>
      <Head>
        <title>Users Table | All Users</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <table>
        <thead>
          <td>Name</td>
          <td>Email</td>
          <td>Gender</td>
          <td>Status</td>
        </thead>
        {users
          ? users.map((item) => (
              <tr key={item?.id}>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.gender}</td>
                <td>{item?.status}</td>
              </tr>
            ))
          : 'No data.'}
      </table>
    </>
  );
};

export default AllUsers;

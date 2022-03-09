import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaEye } from 'react-icons/fa';

type Users = {
  users: {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  }[];
  pagination: {
    pages: number;
    page: number;
    links: {
      previous: string;
      current: string;
      next: string;
    };
  };
};

export const getStaticProps = async () => {
  const { data } = await axios.get('https://gorest.co.in/public/v1/users');
  return {
    props: { users: data?.data, pagination: data?.meta?.pagination },
  };
};

const AllUsers = ({ users, pagination }: Users) => {
  return (
    <>
      <Head>
        <title>Users Table | All Users</title>
        <link rel="shortcut icon" href="../favicon.png" type="image/x-icon" />
      </Head>
      <table>
        <thead>
          <td>Name</td>
          <td>Email</td>
          <td>Gender</td>
          <td>Status</td>
          <td>Action</td>
        </thead>
        <tbody>
          {users
            ? users.map((item) => (
                <tr key={item?.id}>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.gender}</td>
                  <td>{item?.status}</td>
                  <td>
                    <Link href={`/users/${item?.id}`}>
                      <a>
                        <FaEye />
                      </a>
                    </Link>
                  </td>
                </tr>
              ))
            : 'No data.'}
        </tbody>
      </table>
      <div>
        <span>
          {pagination?.page} of {pagination?.pages}
        </span>
        <button>
          <FaAngleDoubleLeft />
        </button>
        <button>Previous</button>
        <button>Next</button>
        <button>
          <FaAngleDoubleRight />
        </button>
      </div>
    </>
  );
};

export default AllUsers;

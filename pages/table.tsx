import axios from 'axios'
import React from 'react'
import { Column, useTable } from 'react-table'

type TableData = {
    name: string
    email: string
    gender: string
    status: string
}

type Users = {
    users: {
        id: number
        name: string
        email: string
        gender: string
        status: string
    }[]
    pagination: {
        pages: number
        page: number
        links: {
            previous: string
            current: string
            next: string
        }
    }
}

export const getStaticProps = async () => {
    const { data } = await axios.get('https://gorest.co.in/public/v1/users')
    return {
        props: { users: data?.data, pagination: data?.meta?.pagination },
    }
}

const Table = ({ users, pagination }: Users) => {
    const asd: Users['users'] = []

    users.forEach((item) => {
        asd.push(item)
    })

    const data = React.useMemo(() => asd, [])

    const columns: Column<TableData>[] = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Gender',
                accessor: 'gender',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
        ],
        []
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable<TableData>({ columns, data })
    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup?.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: 'solid 3px red',
                                    background: 'aliceblue',
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '10px',
                                            border: 'solid 1px gray',
                                            background: 'papayawhip',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table

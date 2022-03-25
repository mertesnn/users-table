type Children = {
    children: ReactNode
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

type TableData = {
    id: number
    name: string
    email: string
    gender: string
    status: string
}

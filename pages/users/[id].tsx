import { useRouter } from 'next/router'

const User = () => {
    const router = useRouter()
    const { id } = router.query

    return <div>user {id}</div>
}

export default User

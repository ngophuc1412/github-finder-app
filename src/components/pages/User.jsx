import { useContext, useEffect, useParams  } from 'react'
import GithubContext from '../../context/github/GithubContext'

function User() {
    const {user, getUser} = useContext(GithubContext)

    const params = useParams()

    useEffect(() => {
        getUser(params.login)
    }, [])

    return (
        <div>
            <h1>{user.login}</h1>
        </div>
    )
}

export default User
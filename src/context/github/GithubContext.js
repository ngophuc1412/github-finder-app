import {createContext, useReducer} from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // for testing
    const fetchUsers = async () => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        const data = await response.json()

        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    }

    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({q: text})

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        const data = await response.json()

        console.log(data)

        dispatch({
            type: 'SEARCH_USERS',
            payload: data.items
        })
    }

    const clearUsers = () => {
        dispatch({ type: 'CLEAR_USERS' })
    }

    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        if (response.status === 404) {
            window.location.href = '/NotFound'
        } else {
            const data = await response.json()

            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }
    }

    const setLoading = () => dispatch({type: 'SET_LOADING'})

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
        searchUsers,
        dispatch,
        clearUsers,
        getUser,
        user: state.user,
        repos: state.repos
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext
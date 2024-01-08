import axios from "axios"
import {
    toastErrorNotify,
    toastSuccessNotify
} from "../helper/ToastNotify"
import {
    useNavigate
} from "react-router-dom"
import {
    useDispatch
} from "react-redux"
import {
    fetchFail,
    fetchStart,
    loginSuccess,
    registerSuccess,
    logOut
} from "../features/authSlice"

const useAuthCalls = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login = async (userInfo) => {
        dispatch(fetchStart())
        try {
            const {
                data
            } = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/auth/login/`,
                userInfo
            )
            dispatch(loginSuccess(data))
            toastSuccessNotify("Login işlemi başarılı.")
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Login işlemi başarısız.")
        }
    }

    const register = async (userInfo) => {
        dispatch(fetchStart())
        try {
            const {
                data
            } = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/users/`,
                userInfo
            )
            dispatch(registerSuccess(data))
            toastSuccessNotify("Register işlemi başarılı.")
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Login işlemi başarısız.")
            console.log(error)
        }
    }

    const logout = async () => {
        dispatch(fetchStart())
        try {
            await axios.get(
                `${process.env.REACT_APP_BASE_URL}/auth/logout`
            )
            dispatch(logOut())
            toastSuccessNotify("Logout işlemi başarılı.")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Login işlemi başarısız.")
            console.log(error)
        }
    }
    return {
        login,
        register,
        logout
    }
}

export default useAuthCalls
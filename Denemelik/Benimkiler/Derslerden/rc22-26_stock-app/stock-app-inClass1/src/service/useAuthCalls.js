import axios from "axios"
import {
    toastErrorNotify,
    toastSuccessNotify
} from "../helper/ToastNotify"
import {
    useNavigate
} from "react-router-dom"
import {
    useDispatch,
    // useSelector
} from "react-redux"
import {
    fetchFail,
    fetchStart,
    loginSuccess,
    registerSuccess,
    logOut
} from "../features/authSlice"
import useAxios from "./useAxios"

const useAuthCalls = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const {
    //     token
    // } = useSelector(state => state.auth.token)
    const {
        axiosWithToken
    } = useAxios()

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
            // await axios.post(
            //     `${process.env.REACT_APP_BASE_URL}/auth/logout`, {
            //         headers: {
            //             Authorization: `Token ${token}`
            //         }
            //     }
            // )
            await axiosWithToken("/auth/logout")
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
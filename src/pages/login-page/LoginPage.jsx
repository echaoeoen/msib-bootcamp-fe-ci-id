import { useEffect } from "react"
import { ButtonGoogleLogin } from "../../components/ButtonGoogleLogin"
import { useLocalStorage } from "../../hooks/localStorage"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const [credentials] = useLocalStorage('credential')
    const navigate = useNavigate()
    useEffect(() => {
        credentials && navigate('/home')
    }, [credentials])
    return <div style={{ textAlign: 'center' }}>
        <h1>Login Page Test</h1>
        <ButtonGoogleLogin/>
    </div>
}
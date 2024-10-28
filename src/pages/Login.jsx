import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {

    const [formData, setFormData] = useState({username: '', password: ''})
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('')

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMsg('')
        setSuccessMsg('')
        
        try {
            const res = await axios.post('https://ong-adote-um-bichinho-back-end.onrender.com/api/auth/login', formData);
            console.log(res.data)
            localStorage.setItem('token', res.data.token)

            setFormData({username: '', password: ''})
            setSuccessMsg(res.data.msg)

            setTimeout(() => {
                window.location.href = '/pets';
            }, 1000)
        } catch (error) {
            if(error.response && error.response.data.msg) {
                setErrorMsg(error.response.data.msg)
            } else {
                setErrorMsg('Erro ao tentar fazer login.')
            }
        }
    }

  return (
    <section className='h-[80vh] flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-5xl'>Login</h1>
        <form onSubmit={handleSubmit} className='bg-white shadow-md flex flex-col p-5 gap-5 rounded-lg border-2 border-secondary'>
            <div className='flex justify-between items-center'>
                <label htmlFor="username">Nome: </label>
                <input type="text" id="username" placeholder='Digite o login' onChange={handleChange} value={formData.username} className='border-2 p-1 border-secondary rounded-md placeholder:text-center' />
            </div>
            <div className='flex justify-between items-center gap-2'>
                <label htmlFor="password">Senha: </label>
                <input type="password" id="password" placeholder='Digite a senha' onChange={handleChange} value={formData.password} className='border-2 p-1 border-secondary rounded-md placeholder:text-center' />
            </div>
            {errorMsg && <p className='text-red-600'>{errorMsg}</p>}
            {successMsg && <p className='text-green-600'>{successMsg}</p>}
            <button type="submit" className='bg-primary p-2 rounded-md'>Logar</button>
        </form>
    </section>
  )
}

export default Login
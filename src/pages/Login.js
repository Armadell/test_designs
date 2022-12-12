import React, { useState } from 'react'
import axios from 'axios'
const baseURL = 'http://127.0.0.1:8000/api/token/'
const Login = () => {
 

    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

    const loginUser = async (e) => {
        console.log(e.target.email.value)
        e.preventDefault()
        console.log('form submitted')
        try {
            const config = {
                method: 'post',
                url: baseURL,
                headers: {
                  'Content-Type': 'application/json'
                },
                //axios use data to send data
                data: {
                  email:e.target.email.value,
                  password:e.target.password.value,
                }
              }
            const response = await axios(config)

            
            console.log(response)
        } catch (error) {
            // console.log(error)
        }

    }

    return (
        <>
            <section>
                <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>

                <div style={{ overflow: "hidden" }} class=" min-w-screen min-h-screen  overflow:hidden bg-white flex items-center justify-center px-5 py-2 ">
                    <div class="bg-[#D9D9D9] text-gray-500  rounded-3xl shadow-xl w-full overflow-hidden" style={{ width: "900px", overflow: "hidden" }}>
                        <div class="md:flex w-full">
                            <div class="hidden md:block  w-1/2 bg-indigo-500 py- px-">
                                <img src={require("../assets/login_image.png")} alt="register" />
                            </div>
                            <div class="w-full md:w-1/2  py-10 px-5 md:px-10">
                                <div class="text-center mb-10">
                                    <h1 class="font-bold text-3xl text-gray-900">SIGN IN</h1>

                                </div>
                                <form onSubmit={loginUser}>
                                    <div>

                                        <div class="flex -mx-3">
                                            <div class="w-full px-3 mb-5">
                                                <label  class="text-xs font-semibold px-1">Email</label>
                                                <div class="flex">
                                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                    <input name='email' type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex -mx-3">
                                            <div class="w-full px-3 mb-12">
                                                <label  class="text-xs font-semibold px-1">Password</label>
                                                <div class="flex">
                                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                    <input name='password' type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex -mx-3">
                                            <div class="w-full px-3 mb-5">
                                                <button type='submit' class="block w-full max-w-xs mx-auto bg-primary hover:bg-violet-600 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Log in</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Login





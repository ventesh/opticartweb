/* eslint-disable */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { varibles } from "../../API/variable";


function Register() {

    const [customerFname,setfname] = useState("")
    const [customerLname,setlname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpass] = useState("")
    const [city,setcity] = useState("")
    const [state,setstate] = useState("")
    const [address,setadd] = useState("")
    const [pincode,setpin] = useState("")

    async function signup() 
    {        

        const pin = Number.parseInt(pincode)

        let item = {customerFname,customerLname,email,password,city,state,address,pincode:pin}
        console.warn(item)

        let result = await fetch(varibles.API_URL + "CustomerTbls" , {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        result = await result.json()
        console.warn(result)
    }

    return (
        <html lang="en">
            <head>
                <title>Login V18</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <!--===============================================================================================-->	 */}
                <link rel="icon" type="image/png" href="/assets/login/images/icons/favicon.ico" />
                {/* <!--===============================================================================================--> */}
                <link rel="stylesheet" type="text/css" href="/assets/login/vendor/bootstrap/css/bootstrap.min.css" />
                {/* <!--===============================================================================================--> */}
                <link rel="stylesheet" type="text/css" href="/assets/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
                {/* <!--===============================================================================================--> */}
                <link rel="stylesheet" type="text/css" href="/assets/login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css" />
                {/* <!--===============================================================================================--> */}
                <link rel="stylesheet" type="text/css" href="/assets/login/vendor/animate/animate.css" />
                {/* <!--===============================================================================================-->	 */}
                <link rel="stylesheet" type="text/css" href="/assets/login/vendor/css-hamburgers/hamburgers.min.css" />
                {/* <!--===============================================================================================--> */}
                <link rel="stylesheet" type="text/css" href="/assets/login/vendor/animsition/css/animsition.min.css" />
                {/* <!--===============================================================================================--> */}
                <link rel="stylesheet" type="text/css" href="/assets/login/vendor/select2/select2.min.css" />
                {/* <!--===============================================================================================-->	 */}
                <link rel="stylesheet" type="text/css" href="/assets/login/vendor/daterangepicker/daterangepicker.css" />
                {/* <!--===============================================================================================--> */}
                <link rel="stylesheet" type="text/css" href="/assets/login/css/util.css" />
                <link rel="stylesheet" type="text/css" href="/assets/login/css/main.css" />
                {/* <!--===============================================================================================--> */}
            </head>
            <body style={{ "background-color": "#666666;" }}>

                <div class="limiter">
                    <div class="container-login100">
                        <div class="wrap-login100">
                            <form class="login100-form validate-form" >
                                <span class="login100-form-title p-b-43">
                                    Registration Form
                                </span>


                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="text" name="fnm"
                                     value={customerFname}
                                    onChange={(e)=>setfname(e.target.value)} />
                                    <span class="focus-input100"></span>
                                    <span class="label-input100">First Name</span>
                                </div>

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="text" name="lnm"
                                    value={customerLname} 
                                    onChange={(e)=>setlname(e.target.value)}/>
                                    <span class="focus-input100"></span>
                                    <span class="label-input100">Last Name</span>
                                </div>

                                <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input class="input100" type="text" name="email"
                                    value={email} 
                                    onChange={(e)=>setemail(e.target.value)}/>
                                    <span class="focus-input100"></span>
                                    <span class="label-input100">Email</span>
                                </div>

                                <div class="wrap-input100 validate-input" data-validate="Password is required">
                                    <input class="input100" type="password" name="pass"
                                    value={password} 
                                    onChange={(e)=>setpass(e.target.value)}/>
                                    <span class="focus-input100"></span>
                                    <span class="label-input100">Password</span>
                                </div>

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="text" name="ct"
                                    value={city} 
                                    onChange={(e)=>setcity(e.target.value)}/>
                                    <span class="focus-input100"></span>
                                    <span class="label-input100">City</span>
                                </div>

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="text" name="st"
                                    value={state} 
                                    onChange={(e)=>setstate(e.target.value)}/>
                                    <span class="focus-input100"></span>
                                    <span class="label-input100">State</span>
                                </div>

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="text" name="add"
                                    value={address} 
                                    onChange={(e)=>setadd(e.target.value)}/>
                                    <span class="focus-input100"></span>
                                    <span class="label-input100">Address</span>
                                </div>

                                <div class="wrap-input100 validate-input">
                                    <input class="input100" type="number" name="pin"
                                    value={pincode} 
                                    onChange={(e)=>setpin(e.target.value)}/>
                                    <span class="focus-input100"></span>
                                    <span class="label-input100">Pincode</span>
                                </div>

                                <div class="container-login100-form-btn">
                                    <button class="login100-form-btn"
                                     onClick={signup} >
                                        <NavLink to="/">Register</NavLink>
                                    </button>
                                </div>

                                <div class="text-center p-t-46 p-b-20">
                                    <span class="txt2">
                                        or sign up using
                                    </span>
                                </div>

                                <div class="login100-form-social flex-c-m">
                                    <a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
                                        <i class="fa fa-facebook-f" aria-hidden="true"></i>
                                    </a>

                                    <a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </form>

                            <div class="login100-more" style={{ "background-image": "url('/assets/login/images/bg-01.jpg');" }}>
                                <img src="/assets/login/images/bg-01.jpg" />
                            </div>
                        </div>
                    </div>
                </div>





                {/* <!--===============================================================================================--> */}
                <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
                {/* <!--===============================================================================================--> */}
                <script src="vendor/animsition/js/animsition.min.js"></script>
                {/* <!--===============================================================================================--> */}
                <script src="vendor/bootstrap/js/popper.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
                {/* <!--===============================================================================================--> */}
                <script src="vendor/select2/select2.min.js"></script>
                {/* <!--===============================================================================================--> */}
                <script src="vendor/daterangepicker/moment.min.js"></script>
                <script src="vendor/daterangepicker/daterangepicker.js"></script>
                {/* <!--===============================================================================================--> */}
                <script src="vendor/countdowntime/countdowntime.js"></script>
                {/* <!--===============================================================================================--> */}
                <script src="js/main.js"></script>

            </body>
        </html>
    )
}

export default Register;
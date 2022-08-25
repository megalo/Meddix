
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Formik } from 'formik';
import logo from "./logo.jpg"
import './login.css';
import CardHeader from '@mui/material/CardHeader';

function Login() {
    const [password, setPassword] = useState("");
    const [userid, setUserid] = useState("");
    const [showPassword, setShowPassword] = useState("");
    const [state, setState] = useState({
        userid: "",
        password: "",
        showPassword: "false",
    })
    const handleChange = () => {


    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);

    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Formik>
            {
                ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, handleClick }) => {
                    return (
                        <>

                            <div className="py-lg-5 text-center text-lg-start logincon bg" >
                                <div className="container">
                                    <div className="row gx-lg-5 align-items-center">
                                        <div className="col-lg-6 mb-5 mb-lg-0">
                                            {/* <h1 className="my-5 display-3 fw-bold ls-tight">
                                                MED
                                                <span className="textsec">DIX</span>
                                            </h1>
                                             */}
                                        </div>

                                        <div className="col-lg-6 mb-5 mb-lg-0">
                                            <div className="card ">
                                                <Card variant="outlined" className="card-body py-5 px-md-5">

                                                    <CardMedia
                                                        component="img"
                                                        alt="meddix logo"

                                                        image={logo}
                                                    />

                                                    <CardContent>
                                                        <Form>


                                                            <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">

                                                                <TextField
                                                                    id="userid"
                                                                    label="User ID"
                                                                    type="text"
                                                                    value={userid}
                                                                    variant="standard"
                                                                    onChange={(e) => {
                                                                        setUserid(e.target.value)
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormControl sx={{ m: 5, width: '30ch' }} variant="standard">
                                                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                                <Input
                                                                    id="password"
                                                                    type={showPassword ? 'text' : 'password'}
                                                                    value={password}
                                                                    onChange={(e) => {
                                                                        setPassword(e.target.value)
                                                                    }}
                                                                    endAdornment={
                                                                        <InputAdornment position="end">
                                                                            <IconButton
                                                                                aria-label="toggle password visibility"
                                                                                onClick={handleClickShowPassword}
                                                                                onMouseDown={handleMouseDownPassword}
                                                                            >
                                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    }
                                                                />
                                                            </FormControl>
                                                            <div className="forgot-password">                                                                 
                                                                   <b><a href="#">Forgot Password?</a></b>
                                                            </div>

                                                            <Button type="submit" className=" btd btn-block mb-5">
                                                                Login
                                                            </Button>

                                                        </Form>
                                                        <div className="contact-us">                                                                 
                                                               <b> Get in touch.</b>  <a href="#"><b>Contact us.</b></a>
                                                            </div>
                                                    </CardContent>

                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                }
            }

        </Formik>
    )
}

export default Login
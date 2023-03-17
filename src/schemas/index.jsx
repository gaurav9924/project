import * as Yup from "yup";

export const signUpSchema=Yup.object({
    fullName:Yup.string().min(2).max(25).required("Please Enter Your Full Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().min(6).required("Please Enter Your Password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null],"Password Must Match"),
    // mobile:Yup.min(10)
})

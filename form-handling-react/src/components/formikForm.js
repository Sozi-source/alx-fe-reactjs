import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import React from "react";

const validationSchema = Yup.object({
    username: Yup.string().required('Name is required'),
    email: Yup.string().email('invalid email').required('Email is required'),
    password: Yup.string().required('password is required').min(6, 'Password must be 6 character long')
})

const formikForm = ()=>{

return(
    <Formik
initialValues={{username: '', email:'', password:''}}
validationSchema={validationSchema}
onSubmit={(values, {resetForm})=>{
    console.log(values)
    resetForm()
}}
>
{()=>(
    <Form>
       <div>
        <label htmlFor="username">User Name</label>
       <Field type ="text" name="username" />
       <ErrorMessage name= "username" component="div" />
       </div>

       <div>
        <label htmlFor="email">Email</label>
       <Field type ="text" name="email" />
       <ErrorMessage name="email" component="div"  />
       </div>

       <div>
        <label htmlFor="password">Password</label>
       <Field type ="password" name="password" />
       <ErrorMessage name="password" component="div" />
       </div>

       <div>
        <button type="submit"> Submit</button>
       </div>

    </Form>
)}

</Formik>
)
}
export default formikForm;
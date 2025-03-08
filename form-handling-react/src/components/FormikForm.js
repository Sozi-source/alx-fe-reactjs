import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Name is required'),
    email: Yup.string().email('invalid email').required('Email is required'),
    password: Yup.string().required('password is required').min(6, 'Password must be 6 character long')
})

const FormikForm = ()=>{

return(
    <Formik
initialValues={{username: '', email:'', password:''}}
validationSchema={validationSchema}
onSubmit={(values)=>{
    console.log(values)
}}
>
{()=>(
    <Form>
       <div>
       <Field type ="text" name="username" />
       <ErrorMessage name='username' component='div' />
       </div>

       <div>
       <Field type ="text" name="email" />
       <ErrorMessage name='email' component='div'  />
       </div>

       <div>
       <Field type ="password" name="password" />
       <ErrorMessage name='password' component='div'  />
       </div>

       <div>
        <button type="submit"> Submit</button>
       </div>

    </Form>
)}

</Formik>
)
}
export default FormikForm;
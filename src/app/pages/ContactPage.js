import { Formik } from "formik";

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Us to Set Up an Appointment!</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNum: '',
                    inPerson: false,
                    virtual: false,
                    realEstate: false,
                }}
            >

            </Formik>
        </div>
    )
}

export default ContactPage; 
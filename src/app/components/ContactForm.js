import { Button, Label, Col, FormGroup, Card, CardBody, CardTitle } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from '../utils/validateContactForm';

const ContactForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log('form values:', values);
        console.log('in JSON forma:', JSON.stringify(values));
        resetForm();
    }

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
                onSubmit={handleSubmit}
                validate={validateContactForm}
            >

            </Formik>
        </div>
    )
}

export default ContactForm;
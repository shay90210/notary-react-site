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
            <h1
                className='pt-4 pb-4'
                style={{ textAlign: 'center' }}
            >
                Contact Us
            </h1>
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
                <Card className='form-content'>
                    <Form>
                        <CardBody>
                            <CardTitle>
                                Fill out the contact form with the required information, and we will get back to you to set up an appointment.
                            </CardTitle>
                            <FormGroup row>
                                <Label htmlFor='firstName' md='2'>
                                    First Name
                                </Label>
                                <Col md='10'>
                                    <Field
                                        name='firstName'
                                        placeholder='First Name'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='firstName'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastName' md='2'>
                                    Last Name
                                </Label>
                                <Col md='10'>
                                    <Field
                                        name='lastName'
                                        placeholder='Last Name'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='lastName'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md='2'>
                                    Email Address
                                </Label>
                                <Col md='10'>
                                    <Field
                                        name='email'
                                        placeholder='Email Address'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='email'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='phoneNum' md='2'>
                                    Phone Number
                                </Label>
                                <Col md='10'>
                                    <Field
                                        name='phoneNum'
                                        placeholder='Phone Number'
                                        className='form-control'
                                    />
                                    <ErrorMessage name='phoneNum'>
                                        {(msg) => <p className='text-danger'>{msg}</p>}
                                    </ErrorMessage>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md='2'>
                                    Notary Type?
                                </Label>
                                <Label md={{ size:4, offset: 2 }}>
                                    Real Estate 
                                    <Field 
                                        name='agree'
                                        type='checkbox'
                                        className='form-check-input'
                                    /> { ' ' }
                                </Label>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit'>
                                        SUBMIT
                                    </Button>
                                </Col>
                            </FormGroup>
                        </CardBody>
                    </Form>
                </Card>
            </Formik>
        </div>
    )
}

export default ContactForm;
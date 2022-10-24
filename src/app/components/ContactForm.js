import { Button, Label, Col, FormGroup, Card, CardBody } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateContactForm } from '../utils/validateContactForm';
import { useRef } from 'react';

import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k0z3tdi', 'template_enbqqht', form.current, 'HsQ73zypgOlmQBhhb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <h1
                className='pt-4 pb-4'
                style={{ 
                    textAlign: 'center',
                    fontFamily: 'cabin'
                }}
            >
                Contact Us
            </h1>
            <h3
                style={{ 
                    textAlign: 'center',
                    fontSize: '18px',
                    fontFamily: 'open-sans'

                }}
            >
                Please fill out the form below so that we can schedule the next available appointment for you!
            </h3>
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
                onSubmit={sendEmail}
                validate={validateContactForm}
                className='contact-form'
                ref={form}
            >
                <Card>
                    <Form>
                        <CardBody>
                            <FormGroup row>
                                <Label htmlFor='firstName' md='2'>
                                    First Name
                                </Label>
                                <Col md='6'>
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
                                <Col md='6'>
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
                                <Col md='6'>
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
                                <Col md='6'>
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
                                    Notary Type
                                </Label>
                                <div role='group' aria-labelledby='checkbox-group'>
                                    <label md='4'>
                                        <Field 
                                            type='checkbox'
                                            name='checked'
                                            value='inPerson'
                                        />
                                        In-Person
                                    </label>
                                    <label md='4'>
                                        <Field 
                                            type='checkbox'
                                            name='checked'
                                            value='virtual' 
                                        />
                                        Virtual
                                    </label>
                                    <label>
                                    <Field 
                                        type='checkbox'
                                        name='checked'
                                        value='realEstate' 
                                    />
                                    Real Estate
                                    </label>
                                </div>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button 
                                        type='submit' 
                                        className='form-button'
                                        style={{ backgroundColor: 'purple' }}
                                    >
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
import { 
    Button, 
    Label, 
    Col, 
    FormGroup, 
    Form, 
    Input,  
} from 'reactstrap';

import * as emailjs from '@emailjs/browser';

const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1um3byl', 'template_enbqqht', e.target, 'HsQ73zypgOlmQBhhb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
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
                <Form
                    onSubmit={sendEmail}
                >
                <FormGroup row>
                    <Label
                    for='firstName'
                    sm={2}
                    >
                    First Name
                    </Label>
                    <Col sm={10}>
                    <Input
                        id='firstName'
                        name='firstName'
                        placeholder='First Name'
                        type='text'
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for='lastName'
                    sm={2}
                    >
                    LastName
                    </Label>
                    <Col sm={10}>
                    <Input
                        id='lastName'
                        name='lastName'
                        placeholder='Last Name'
                        type='text'
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for='email'
                    sm={2}
                    >
                    Email Address
                    </Label>
                    <Col sm={10}>
                    <Input
                        id='email'
                        name='email'
                        placeholder='Email Address'
                        type='email'
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for='phoneNum'
                    sm={2}
                    >
                    Phone Number
                    </Label>
                    <Col sm={10}>
                    <Input
                        id='phoneNum'
                        name='phoneNum'
                        placeholder='Phone Number'
                        type='phoneNum'
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="checkbox"
                    sm={2}
                    >
                    Appointment Type
                    </Label>
                    <Col
                    sm={{
                        size: 2
                    }}
                    >
                    <FormGroup check>
                        <Input
                        id="checkbox1"
                        type="checkbox"
                        />
                        {' '}
                        <Label check>
                        In-Person
                        </Label>
                    </FormGroup>
                    </Col>
                    <Col
                    sm={{
                        size: 2
                    }}
                    >
                    <FormGroup check>
                        <Input
                        id="checkbox2"
                        type="checkbox"
                        />
                        {' '}
                        <Label check>
                        In-Person
                        </Label>
                    </FormGroup>
                    </Col>
                </FormGroup>
                   <Col
                    sm={{
                        size: 2
                    }}
                    >
                    <FormGroup check>
                        <Input
                        id="checkbox3"
                        type="checkbox"
                        />
                        {' '}
                        <Label check>
                        Real Estate
                        </Label>
                    </FormGroup>
                    </Col>
                <FormGroup
                    check
                    row
                >
                    <Col
                    sm={{
                        offset: 2,
                        size: 10
                    }}
                    >
                    <Button
                        type='submit'
                        style={{ backgroundColor: '#561A68' }}
                    >
                        Submit
                    </Button>
                    </Col>
                </FormGroup>
                </Form>
        </div>
    )
}

export default ContactForm;
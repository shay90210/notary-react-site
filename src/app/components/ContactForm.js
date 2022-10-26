import { 
    Button, 
    Label, 
    Col, 
    FormGroup, 
    Form, 
    Input,  
} from 'reactstrap';

import emailjs from '@emailjs/browser';

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
                    <Col sm={6}>
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
                    <Col sm={6}>
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
                    <Col sm={6}>
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
                    <Col sm={6}>
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
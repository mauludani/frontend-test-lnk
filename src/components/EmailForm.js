import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import './EmailForm.css';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailData = {
            email,
            date,
            description,
        };


        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://localhost:3000/email/send', emailData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Menambahkan token di header Authorization
                },
            }
            );
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Failed to send email.');
            console.error('There was an error sending the email!', error);
        }
    };

    return (
        <Container className="email-form">
            <h2 className="text-center">Send Email</h2>
            {message && <p className="text-center">{message}</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </Container>
    );
};

export default EmailForm;

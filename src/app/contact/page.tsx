'use client';

import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: ''
  });

  const contactInfo = [
    {
      title: "Office Address",
      details: [
        "45 Thabo Mbeki Street",
        "Lebowakgomo Unit 2",
        "Lebowakgomo, 0737",
        "Limpopo, South Africa"
      ],
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Phone Number",
      details: [
        "+27 15 633 2847",
        "+27 82 456 7890",
        "Business Hours:",
        "Mon-Fri: 8:00 AM - 5:00 PM"
      ],
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      )
    },
    {
      title: "Email Address",
      details: [
        "info@fiduciarypartners.co.za",
        "legal@fiduciarypartners.co.za",
        "support@fiduciarypartners.co.za",
        "Response within 24 hours"
      ],
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      )
    },
    {
      title: "Business Hours",
      details: [
        "Monday - Friday:",
        "8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ],
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const serviceTypes = [
    "Company Formation",
    "Legal Documentation",
    "Compliance Support",
    "Business Development",
    "Contract Review",
    "Employment Law",
    "Trademark Services",
    "General Inquiry",
    "Other"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailBody = `New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Service Type: ${formData.serviceType}
Subject: ${formData.subject}

Message:
${formData.message}

--
This message was sent from the Fiduciary Partners contact form.`;

    const mailtoLink = `mailto:info@fiduciarypartners.co.za?subject=${encodeURIComponent(`Contact Form: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: '60vh' }}>
        <Container className="hero-content">
          <Row className="align-items-center justify-content-center text-center">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-title">
                  Get In <span className="highlight">Touch</span>
                </h1>
                <p className="hero-subtitle">
                  Ready to discuss your legal needs? We're here to help you build a compliant and successful business. Contact us today for a consultation.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="section-title">
              Contact <span className="highlight">Information</span>
            </h2>
            <Row>
              {contactInfo.map((info, index) => (
                <Col lg={3} md={6} className="mb-4" key={index}>
                  <motion.div variants={itemVariants}>
                    <Card className="service-card text-center">
                      <div className="service-icon">
                        {info.icon}
                      </div>
                      <h4>{info.title}</h4>
                      {info.details.map((detail, dIndex) => (
                        <p key={dIndex} style={{ 
                          marginBottom: '0.3rem',
                          color: dIndex === info.details.length - 1 && info.title !== "Office Address" ? '#4CAF50' : '#6c757d',
                          fontWeight: dIndex === info.details.length - 1 && info.title !== "Office Address" ? '500' : 'normal'
                        }}>
                          {detail}
                        </p>
                      ))}
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form and Map Section */}
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
        <Container>
          <Row>
            {/* Contact Form */}
            <Col lg={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="service-card">
                  <h3 className="mb-4">Send Us a Message</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            style={{ borderRadius: '10px', padding: '12px' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            style={{ borderRadius: '10px', padding: '12px' }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            style={{ borderRadius: '10px', padding: '12px' }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            style={{ borderRadius: '10px', padding: '12px' }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Service Type</Form.Label>
                      <Form.Select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        style={{ borderRadius: '10px', padding: '12px' }}
                      >
                        <option value="">Select a service...</option>
                        {serviceTypes.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Subject *</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        style={{ borderRadius: '10px', padding: '12px' }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        style={{ borderRadius: '10px', padding: '12px' }}
                        placeholder="Please describe your legal needs or questions..."
                      />
                    </Form.Group>

                    <Button type="submit" className="btn-primary-custom w-100">
                      Send Message
                    </Button>
                  </Form>
                </Card>
              </motion.div>
            </Col>

            {/* Google Map */}
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="service-card h-100">
                  <h3 className="mb-4">Find Us Here</h3>
                  <div style={{ height: '450px', borderRadius: '15px', overflow: 'hidden' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.123456789!2d29.4833!3d-24.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec1234567890abc%3A0x1234567890abcdef!2s45%20Thabo%20Mbeki%20St%2C%20Lebowakgomo%20Unit%202%2C%20Lebowakgomo%2C%200737!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Fiduciary Partners Office Location"
                    ></iframe>
                  </div>
                  <div className="mt-3">
                    <p style={{ color: '#6c757d', marginBottom: '0.5rem' }}>
                      <strong>Office Address:</strong>
                    </p>
                    <p style={{ color: '#6c757d' }}>
                      45 Thabo Mbeki Street, Lebowakgomo Unit 2<br />
                      Lebowakgomo, 0737, Limpopo, South Africa
                    </p>
                  </div>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="section-title">
              Common <span className="highlight">Questions</span>
            </h2>
            <Row className="justify-content-center">
              <Col lg={8}>
                <motion.div variants={itemVariants}>
                  <Card className="service-card mb-4">
                    <h5>How quickly can you respond to my inquiry?</h5>
                    <p style={{ color: '#6c757d', marginBottom: 0 }}>
                      We typically respond to all inquiries within 24 hours during business days. For urgent legal matters, please call our office directly.
                    </p>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card className="service-card mb-4">
                    <h5>Do you offer free consultations?</h5>
                    <p style={{ color: '#6c757d', marginBottom: 0 }}>
                      Yes! We offer a complimentary 30-minute consultation to discuss your needs and how we can help your business succeed.
                    </p>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card className="service-card mb-4">
                    <h5>Can you help businesses outside of Limpopo?</h5>
                    <p style={{ color: '#6c757d', marginBottom: 0 }}>
                      Absolutely! While our office is in Lebowakgomo, we serve clients throughout South Africa and can handle most services remotely.
                    </p>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card className="service-card">
                    <h5>What should I bring to our first meeting?</h5>
                    <p style={{ color: '#6c757d', marginBottom: 0 }}>
                      Bring any existing business documents, identification, and a clear outline of your goals. We'll guide you through what else might be needed.
                    </p>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="section-title">
              Ready to <span className="highlight">Get Started?</span>
            </h2>
            <p className="lead mb-4">
              Don't let legal complexities hold your business back. Contact us today and let's build your success together.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <Button 
                className="btn-primary-custom"
                onClick={() => window.location.href = 'tel:+27156332847'}
              >
                Call Now
              </Button>
              <Button 
                className="btn-outline-custom"
                onClick={() => window.location.href = 'mailto:info@fiduciarypartners.co.za?subject=Free Consultation Request'}
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
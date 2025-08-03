'use client';

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Home = () => {
  const services = [
    {
      title: "Custom Business Formation & Structure",
      description: "Complete company registration(PTY LTD), Beneficial ownership(CIPC), Memorandum of Incorporation, and business structuring services tailored to your needs.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
        </svg>
      )
    },
    {
      title: "Legal Documentation",
      description: "Professional contract drafting, employment agreements, NDAs, and comprehensive legal writing services.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
          <path fillRule="evenodd" d="M3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Compliance Support",
      description: "Regulatory compliance monitoring, board resolutions, employment policies, and ongoing compliance assistance.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Business Development",
      description: "Comprehensive business plans, professional website development, trademark services, and branding solutions.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
      <section style={{
        minHeight: '100vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(96, 116, 97, 0.9) 0%, rgba(79, 97, 80, 0.8) 10%)',
          zIndex: 1
        }}></div>
        
        <Container style={{ position: 'relative', zIndex: 2, paddingTop: '100px' }}>
          <Row className="align-items-center min-vh-100">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 style={{
                  fontSize: '3.5rem',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  marginBottom: '2rem',
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                Legal Support Without Barriers</h1>
                <p style={{
                  fontSize: '1.3rem',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '3rem',
                  lineHeight: '1.6',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                }}>
	Comprehensive legal support
services ,specializing in providing essential
business documentation, compliance assistance,
Marketing, and corporate structuring services 
across South Africa.                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Button style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: 'none',
                    color: '#4CAF50',
                    padding: '12px 30px',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(255,255,255,0.3)'
                  }}>Get Started</Button>
                  <Button style={{
                    border: '2px solid rgba(255,255,255,0.9)',
                    color: 'white',
                    background: 'transparent',
                    padding: '12px 30px',
                    borderRadius: '50px',
                    fontWeight: '500',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease'
                  }}>Learn More</Button>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(76, 175, 80, 0.9) 0%, transparent 100%)',
                    padding: '30px',
                    color: 'white'
                  }}>
                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                      margin: 0,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      Fiduciary Partners
                    </h3>
                    <p style={{
                      margin: 0,
                      fontSize: '1rem',
                      opacity: 0.9,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      Your Legal Success Partners
                    </p>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="section-title">
              Our <span className="highlight">Services</span>
            </h2>
            <Row>
              {services.map((service, index) => (
                <Col lg={3} md={6} className="mb-4" key={index}>
                  <motion.div variants={itemVariants}>
                    <Card className="service-card">
                      <div className="service-icon">
                        {service.icon}
                      </div>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="section-title">
              Why Choose <span className="highlight">Fiduciary Partners</span>
            </h2>
            <Row>
              <Col lg={6} className="mb-4">
                <motion.div variants={itemVariants}>
                  <h4>🎯 Purpose-Driven Approach</h4>
                  <p>We're not just service providers; we're partners in your business journey, committed to your success at every stage.</p>
                </motion.div>
              </Col>
              <Col lg={6} className="mb-4">
                <motion.div variants={itemVariants}>
                  <h4>💡 Innovation Meets Tradition</h4>
                  <p>We enhance traditional legal services with modern technology while maintaining professional integrity.</p>
                </motion.div>
              </Col>
              <Col lg={6} className="mb-4">
                <motion.div variants={itemVariants}>
                  <h4>🏢 Industry-Specific Solutions</h4>
                  <p>Tailored legal support for startups, SMEs, technology companies, e-commerce, and professional services.</p>
                </motion.div>
              </Col>
              <Col lg={6} className="mb-4">
                <motion.div variants={itemVariants}>
                  <h4>💰 Transparent Pricing</h4>
                  <p>Clear, upfront pricing with no hidden fees. Quality legal services shouldn't be shrouded in mystery.</p>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
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
              Let us help you build a compliant, successful business with our comprehensive legal support services.
            </p>
            <Button className="btn-primary-custom" size="lg">
              Contact Us Today
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default Home;
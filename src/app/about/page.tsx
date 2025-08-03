'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our professional dealings, ensuring transparency and honesty in every interaction.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every service we provide, continuously improving our processes and staying ahead of industry standards.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "We embrace modern technology and innovative approaches to make legal services more accessible and efficient for our clients.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Partnership",
      description: "We believe in building long-term partnerships with our clients, supporting their growth and success at every stage of their journey.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      )
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      position: "Founding Partner & CEO",
      description: "With over 15 years of corporate law experience, Sarah leads our strategic vision and client relations.",
      image: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)"
    },
    {
      name: "Michael Chen",
      position: "Head of Compliance",
      description: "Michael specializes in regulatory compliance and has helped over 500 companies navigate complex legal frameworks.",
      image: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)"
    },
    {
      name: "Emily Rodriguez",
      position: "Business Development Director",
      description: "Emily focuses on helping startups and SMEs establish strong legal foundations for sustainable growth.",
      image: "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)"
    },
    {
      name: "David Thompson",
      position: "Technology Integration Lead",
      description: "David bridges the gap between traditional legal services and modern technology solutions.",
      image: "linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)"
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
      <section className="hero-section" style={{ minHeight: '70vh' }}>
        <Container className="hero-content">
          <Row className="align-items-center justify-content-center text-center">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-title">
                  About <span className="highlight">Fiduciary Partners</span>
                </h1>
                <p className="hero-subtitle">
                  We're a forward-thinking legal services firm dedicated to democratizing access to quality legal support for businesses of all sizes. Our mission is to remove barriers and empower entrepreneurs to succeed.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="section-title text-start">
                  Our <span className="highlight">Story</span>
                </h2>
                <p className="mb-4">
                  Founded in 2018, Fiduciary Partners emerged from a simple observation: too many promising businesses fail not because of poor ideas or lack of market demand, but due to legal and compliance obstacles that could have been easily avoided.
                </p>
                <p className="mb-4">
                  Our founders, experienced legal professionals and entrepreneurs themselves, recognized the need for accessible, transparent, and comprehensive legal services that grow with businesses rather than constraining them.
                </p>
                <p>
                  Today, we've helped over 1,000 businesses establish strong legal foundations, maintain compliance, and scale successfully across various industries.
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div style={{
                  width: '100%',
                  height: '350px',
                  background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  Building Success Together
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="section-title">
              Our <span className="highlight">Values</span>
            </h2>
            <Row>
              {values.map((value, index) => (
                <Col lg={6} className="mb-4" key={index}>
                  <motion.div variants={itemVariants}>
                    <Card className="service-card">
                      <div className="service-icon">
                        {value.icon}
                      </div>
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Our Team Section */}
      <section className="section-padding">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="section-title">
              Meet Our <span className="highlight">Team</span>
            </h2>
            <Row>
              {team.map((member, index) => (
                <Col lg={3} md={6} className="mb-4" key={index}>
                  <motion.div variants={itemVariants}>
                    <Card className="service-card text-center">
                      <div style={{
                        width: '100px',
                        height: '100px',
                        background: member.image,
                        borderRadius: '50%',
                        margin: '0 auto 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h4>{member.name}</h4>
                      <h6 style={{ color: '#4CAF50', marginBottom: '1rem' }}>
                        {member.position}
                      </h6>
                      <p>{member.description}</p>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="service-card">
                  <div className="service-icon">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3>Our Mission</h3>
                  <p>
                    To democratize access to quality legal services and empower every entrepreneur to build compliant, successful businesses through transparent, accessible, and comprehensive legal support.
                  </p>
                </Card>
              </motion.div>
            </Col>
            <Col lg={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="service-card">
                  <div className="service-icon">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3>Our Vision</h3>
                  <p>
                    To become the leading partner for businesses seeking reliable, innovative legal solutions that adapt to the evolving landscape of commerce and regulation, fostering a world where legal compliance enhances rather than hinders business growth.
                  </p>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
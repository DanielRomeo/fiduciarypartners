
// pages/about.js
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
// import Layout from '../layouts/Layout';
// import Layout from '../layout';
// import Head from 'next/head';

const About = () => {
  const values = [
    {
      title: "Accessibility",
      description: "Making professional legal support accessible to every business through transparent pricing and innovative approaches."
    },
    {
      title: "Innovation",
      description: "Enhancing traditional legal services with modern technology while maintaining professional integrity."
    },
    {
      title: "Accountability", 
      description: "Taking responsibility for our clients' success and maintaining the highest standards of professional service."
    },
    {
      title: "Empowerment",
      description: "Empowering clients with knowledge and support to make informed business decisions and grow confidently."
    },
    {
      title: "Quality",
      description: "Delivering uncompromising quality regardless of package tier, ensuring every client receives excellent service."
    },
    {
      title: "Partnership",
      description: "Building lasting partnerships rather than transactional relationships, supporting growth at every stage."
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    // <Layout>
    <div>
      {/* <Head>
        <title>About Us - Fiduciary Partners</title>
        <meta name="description" content="Learn about Fiduciary Partners' mission to democratize legal access and empower entrepreneurs across South Africa." />
      </Head> */}

      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: '60vh' }}>
        <Container className="hero-content">
          <Row className="align-items-center" style={{ minHeight: '60vh' }}>
            <Col lg={8} className="mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-title">
                  About <span className="highlight">Fiduciary Partners</span>
                </h1>
                <p className="hero-subtitle">
                  We're innovators, collaborators, and problem-solvers. More than a company — we're liberators, democratizing legal access for every entrepreneur.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>Our Origin Story</h2>
                <p className="lead">Founded in 2025</p>
                <p>
                  Born from a vision to create astute, scalable solutions that improve businesses, Fiduciary Partners was established to bridge the gap between expensive traditional legal services and the practical needs of modern businesses.
                </p>
                <p>
                  Under the leadership of CEO Cecil Maboko, we recognized that entrepreneurs and small businesses needed professional legal support but couldn't afford premium law firm rates. This insight drove us to create structured, affordable, and accessible legal support solutions.
                </p>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div style={{
                  width: '100%',
                  height: '350px',
                  background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}>
                  <span>Empowering Entrepreneurs</span> 
                </div>
              </motion.div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {values.map((value, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="mb-4">
                      <Card.Body>
                        <Card.Title>{value.title}</Card.Title>
                        <Card.Text>{value.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>Our Mission</h2>
                <p>
                  At Fiduciary Partners, our mission is to democratize legal access for every entrepreneur in South Africa. We believe that professional legal support should be transparent, affordable, and accessible to all businesses, regardless of size or budget.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>Our Vision</h2>
                <p>
                  We envision a future where every entrepreneur has access to the legal resources they need to succeed. By leveraging technology and innovative service delivery models, we aim to create a more equitable legal landscape for all.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>Join Us</h2>
                <p>
                  If you share our passion for empowering entrepreneurs and believe in the power of accessible legal support, we invite you to join us on this journey. Together, we can create a brighter future for South Africa's business landscape.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Footer Section */}
      <footer className="footer-section">
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; {new Date().getFullYear()} Fiduciary Partners. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
      </div>
    // </Layout>
  );
}
export default About;


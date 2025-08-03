'use client';

import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "R2,500",
      period: "/month",
      description: "Perfect for new entrepreneurs and small startups getting started",
      isPopular: false,
      features: [
        "Basic company formation (PTY LTD)",
        "Essential legal documentation",
        "CIPC compliance setup",
        "Email support",
        "Basic contract templates",
        "Monthly compliance reminders"
      ],
      buttonText: "Get Started",
      emailSubject: "Inquiry about Starter Plan - Legal Services",
      gradient: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)"
    },
    {
      name: "Professional",
      price: "R4,750",
      period: "/month",
      description: "Comprehensive legal support for growing businesses",
      isPopular: true,
      features: [
        "Everything in Starter",
        "Advanced legal documentation",
        "Employment contracts & policies",
        "Board resolutions",
        "Priority phone & email support",
        "Quarterly compliance reviews",
        "Contract review (up to 3/month)",
        "Basic trademark services"
      ],
      buttonText: "Choose Professional",
      emailSubject: "Inquiry about Professional Plan - Legal Services",
      gradient: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)"
    },
    {
      name: "Enterprise",
      price: "R8,900",
      period: "/month",
      description: "Full-service legal partnership for established businesses",
      isPopular: false,
      features: [
        "Everything in Professional",
        "Dedicated legal consultant",
        "Unlimited contract reviews",
        "Advanced compliance monitoring",
        "Custom legal document creation",
        "Business plan development",
        "Website legal compliance",
        "24/7 priority support",
        "Quarterly legal audits"
      ],
      buttonText: "Go Enterprise",
      emailSubject: "Inquiry about Enterprise Plan - Legal Services",
      gradient: "linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)"
    },
    {
      name: "Custom",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for unique business requirements",
      isPopular: false,
      features: [
        "Bespoke service package",
        "Multi-entity support",
        "International compliance",
        "Specialized industry requirements",
        "Custom SLA agreements",
        "Dedicated legal team",
        "On-site consultations",
        "Emergency legal support"
      ],
      buttonText: "Contact Us",
      emailSubject: "Inquiry about Custom Legal Services",
      gradient: "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)"
    }
  ];

  const additionalServices = [
    {
      name: "One-time Company Formation",
      price: "R3,500",
      description: "Complete PTY LTD setup with all required documentation"
    },
    {
      name: "Contract Review",
      price: "R750",
      description: "Professional review of contracts up to 10 pages"
    },
    {
      name: "Employment Policy Package",
      price: "R2,200",
      description: "Comprehensive employment policies and procedures"
    },
    {
      name: "Trademark Registration",
      price: "R4,500",
      description: "Full trademark search and registration service"
    },
    {
      name: "Business Plan Development",
      price: "R5,500",
      description: "Professional business plan with financial projections"
    },
    {
      name: "Legal Compliance Audit",
      price: "R3,800",
      description: "Comprehensive review of your business compliance status"
    }
  ];

  const handlePlanSelection = (plan) => {
    const emailBody = `Hello Fiduciary Partners,

I am interested in learning more about your ${plan.name} plan priced at ${plan.price}${plan.period}.

Could you please provide me with more information about:
- Service implementation timeline
- Onboarding process
- Payment terms
- Any current promotions

My business details:
- Company Name: [Please fill in]
- Industry: [Please fill in]
- Current stage: [Startup/Growing/Established]
- Specific requirements: [Please describe any specific needs]

I look forward to hearing from you.

Best regards,
[Your Name]
[Your Phone Number]`;

    const mailtoLink = `mailto:info@fiduciarypartners.co.za?subject=${encodeURIComponent(plan.emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const handleAdditionalService = (service) => {
    const emailBody = `Hello Fiduciary Partners,

I am interested in your ${service.name} service priced at ${service.price}.

Could you please provide more information about:
- Service scope and deliverables
- Timeline for completion
- Payment terms
- Next steps to get started

My contact details:
- Name: [Please fill in]
- Company: [Please fill in]
- Phone: [Please fill in]
- Preferred contact method: [Email/Phone]

Thank you for your time.

Best regards,
[Your Name]`;

    const emailSubject = `Inquiry about ${service.name} - Fiduciary Partners`;
    const mailtoLink = `mailto:info@fiduciarypartners.co.za?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
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
                  Transparent <span className="highlight">Pricing</span>
                </h1>
                <p className="hero-subtitle">
                  Choose the perfect plan for your business needs. No hidden fees, no surprises - just clear, honest pricing for quality legal services.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing Plans Section */}
      <section className="section-padding">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <Row>
              {pricingPlans.map((plan, index) => (
                <Col lg={3} md={6} className="mb-4" key={index}>
                  <motion.div variants={itemVariants}>
                    <Card className={`service-card text-center position-relative ${plan.isPopular ? 'border-primary' : ''}`} style={{
                      borderWidth: plan.isPopular ? '3px' : '1px',
                      borderColor: plan.isPopular ? '#4CAF50' : 'transparent'
                    }}>
                      {plan.isPopular && (
                        <Badge 
                          className="position-absolute top-0 start-50 translate-middle"
                          style={{
                            background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                            padding: '8px 20px',
                            fontSize: '0.8rem',
                            borderRadius: '50px'
                          }}
                        >
                          Most Popular
                        </Badge>
                      )}
                      
                      <div style={{
                        width: '80px',
                        height: '80px',
                        background: plan.gradient,
                        borderRadius: '50%',
                        margin: '0 auto 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        {plan.name[0]}
                      </div>
                      
                      <h3>{plan.name}</h3>
                      <div className="mb-3">
                        <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4CAF50' }}>
                          {plan.price}
                        </span>
                        <span style={{ color: '#6c757d' }}>{plan.period}</span>
                      </div>
                      <p style={{ color: '#6c757d', marginBottom: '2rem' }}>
                        {plan.description}
                      </p>
                      
                      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            marginBottom: '0.8rem',
                            fontSize: '0.9rem'
                          }}>
                            <svg 
                              style={{ 
                                width: '16px', 
                                height: '16px', 
                                color: '#4CAF50', 
                                marginRight: '10px',
                                flexShrink: 0
                              }} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={plan.isPopular ? "btn-primary-custom w-100" : "btn-outline-custom w-100"}
                        onClick={() => handlePlanSelection(plan)}
                        style={{ marginTop: 'auto' }}
                      >
                        {plan.buttonText}
                      </Button>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Additional Services Section */}
      <section className="section-padding" style={{ background: '#f8f9fa' }}>
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h2 className="section-title">
              Additional <span className="highlight">Services</span>
            </h2>
            <p className="text-center mb-5" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
              Need something specific? Choose from our à la carte services
            </p>
            <Row>
              {additionalServices.map((service, index) => (
                <Col lg={4} md={6} className="mb-4" key={index}>
                  <motion.div variants={itemVariants}>
                    <Card className="service-card">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <h4 style={{ flex: 1 }}>{service.name}</h4>
                        <span style={{ 
                          fontSize: '1.5rem', 
                          fontWeight: 'bold', 
                          color: '#4CAF50',
                          marginLeft: '10px'
                        }}>
                          {service.price}
                        </span>
                      </div>
                      <p style={{ color: '#6c757d', marginBottom: '1.5rem' }}>
                        {service.description}
                      </p>
                      <Button 
                        className="btn-outline-custom w-100"
                        onClick={() => handleAdditionalService(service)}
                      >
                        Get Quote
                      </Button>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
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
              Frequently Asked <span className="highlight">Questions</span>
            </h2>
            <Row className="justify-content-center">
              <Col lg={8}>
                <motion.div variants={itemVariants}>
                  <Card className="service-card mb-4">
                    <h5>Can I change my plan later?</h5>
                    <p style={{ color: '#6c757d', marginBottom: 0 }}>
                      Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle, and we'll help you transition smoothly.
                    </p>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card className="service-card mb-4">
                    <h5>Are there any setup fees?</h5>
                    <p style={{ color: '#6c757d', marginBottom: 0 }}>
                      No hidden setup fees! The prices shown include everything you need to get started. For company formation, government fees are additional and clearly stated.
                    </p>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card className="service-card mb-4">
                    <h5>What payment methods do you accept?</h5>
                    <p style={{ color: '#6c757d', marginBottom: 0 }}>
                      We accept bank transfers, credit cards, and direct debits. Monthly plans are billed in advance, and we offer annual payment discounts.
                    </p>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card className="service-card">
                    <h5>Do you offer refunds?</h5>
                    <p style={{ color: '#6c757d', marginBottom: 0 }}>
                      We want you to be satisfied! If you're not happy with our services within the first 30 days, we offer a full refund. After that, we handle cancellations on a case-by-case basis. 
                      Please contact us to discuss any issues.
                    </p>
                    </Card>
                </motion.div>
                </Col>
            </Row>
            </motion.div>
            </Container>
        </section>
    </>
    );
}
export default Pricing;                
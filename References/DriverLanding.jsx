import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from '@mui/material';
import {
  TwoWheeler as DriverIcon,
  MonetizationOn as EarningsIcon,
  Schedule as FlexibleIcon,
  TrendingUp as GrowthIcon,
  CheckCircle as CheckIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Navigation as NavigationIcon,
  Assignment as DeliveryIcon,
  Star as StarIcon,
  ExpandMore as ExpandMoreIcon,
  Add as AddIcon,
  WhatsApp as WhatsAppIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const DriverLanding = () => {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : null);
  };

  const benefits = [
    {
      icon: <EarningsIcon sx={{ color: '#4ecdc4', fontSize: 40 }} />,
      title: 'Competitive Earnings',
      description:
        'Earn competitive rates per delivery plus tips. Average 5-8 AED per delivery.',
    },
    {
      icon: <FlexibleIcon sx={{ color: '#ff6b35', fontSize: 40 }} />,
      title: 'Flexible Schedule',
      description:
        'Work when you want. Turn on availability anytime and start earning immediately.',
    },
    {
      icon: <StarIcon sx={{ color: '#ff6b35', fontSize: 40 }} />,
      title: 'Instant Activation',
      description:
        'Start delivering within 24 hours after completing your registration.',
    },
  ];

  const requirements = [
    'Valid UAE driving license',
    'Must own a motorcycle or car',
    'Must live in Ajman',
    'Smartphone with GPS',
    'Age 18 or above',
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      {/* Header */}
      <Box
        sx={{
          bgcolor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          py: 2,
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                cursor: 'pointer',
              }}
              onClick={() => navigate('/')}
            >
              <Box
                component="img"
                src="/SocialmediaSVG/gosnelLogoTransparate.png"
                alt="GoSnel Logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  console.error('Failed to load GoSnel logo');
                }}
                sx={{
                  height: 40,
                  width: 'auto',
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: '#4ecdc4',
                  fontWeight: 700,
                }}
              >
                GoSnel
              </Typography>
            </Box>
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate('/driver/login')}
              sx={{
                color: '#4ecdc4',
                borderColor: '#4ecdc4',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#38b2ac',
                  bgcolor: 'rgba(78, 205, 196, 0.1)',
                  color: '#38b2ac',
                },
              }}
            >
              Driver Login
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Hero Section with Full-Screen Background Image */}
      <Box
        sx={{
          position: 'relative',
          height: '60vh',
          backgroundImage: 'url(/SocialmediaSVG/driversLandingpage.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          color: '#1f2937',
          // Overlay for better text readability
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            spacing={6}
            alignItems="flex-end"
            justifyContent="left"
            sx={{ height: '100%' }}
          >
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '4.5rem', sm: '3.5rem', md: '5rem' },
                    background:
                      'linear-gradient(135deg, #4ecdc4 100%, #4ecdc4 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Deliver Food with GoSnel
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#1f2937',
                    mb: 4,
                    fontWeight: 600,
                    bgcolor: '#fef3c7ff',
                    padding: '12px 20px',
                    borderRadius: 2,
                    border: '2px solid #4ecdc4',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Work when you want. Get paid fast. No commitments.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ color: '#1f2937', fontWeight: 600, mb: 6 }}
        >
          Why Deliver Food with GoSnel?
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  bgcolor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  height: '100%',
                  '&:hover': {
                    border: '1px solid #4ecdc4',
                    boxShadow: '0 4px 12px rgba(78, 205, 196, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box mb={2}>{benefit.icon}</Box>
                  <Typography variant="h6" sx={{ color: '#1f2937', mb: 2 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            sx={{ color: '#1f2937', fontWeight: 600, mb: 2 }}
          >
            How It Works
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ color: '#6b7280', mb: 6, fontStyle: 'italic' }}
          >
            No interviews. No complicated steps. Just register, verify, and
            start earning.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              overflow: 'auto',
            }}
          >
            {/* Step 1 */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                flexShrink: 0,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: '#4ecdc4',
                  width: 50,
                  height: 50,
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1a202c',
                }}
              >
                1
              </Avatar>
              <Typography
                variant="body2"
                sx={{
                  color: '#1f2937',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                }}
              >
                Sign Up
              </Typography>
            </Box>

            {/* Arrow Connector */}
            <Box
              sx={{
                width: 40,
                height: 2,
                bgcolor: '#d1d5db',
                mx: 2,
                mt: 2,
                flexShrink: 0,
              }}
            />

            {/* Step 2 */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                flexShrink: 0,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: '#ff6b35',
                  width: 50,
                  height: 50,
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                2
              </Avatar>
              <Typography
                variant="body2"
                sx={{
                  color: '#1f2937',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                }}
              >
                Go Online
              </Typography>
            </Box>

            {/* Arrow Connector */}
            <Box
              sx={{
                width: 40,
                height: 2,
                bgcolor: '#d1d5db',
                mx: 2,
                mt: 2,
                flexShrink: 0,
              }}
            />

            {/* Step 3 */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                flexShrink: 0,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: '#48bb78',
                  width: 50,
                  height: 50,
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                3
              </Avatar>
              <Typography
                variant="body2"
                sx={{
                  color: '#1f2937',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                }}
              >
                Earn Money
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Requirements Section */}
      <Container maxWidth="lg" sx={{ py: 8, bgcolor: '#ffffff' }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ color: '#1f2937', fontWeight: 600, mb: 2 }}
            >
              Requirements
            </Typography>
            <List>
              {requirements.map((requirement, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#4ecdc4' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={requirement}
                    primaryTypographyProps={{
                      color: '#374151',
                      fontSize: '1.1rem',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>

      {/* Grow With Us Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              color: '#1f2937',
              fontWeight: 700,
              mb: 3,
            }}
          >
            Grow With Us
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              color: '#6b7280',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            As GoSnel expands across the UAE, top-performing riders will unlock
            exclusive opportunities such as higher-tier bonuses, early access to
            new features, and potential future partnership programs. Your
            performance today opens the door for bigger opportunities tomorrow.
          </Typography>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            sx={{ color: '#1f2937', fontWeight: 600, mb: 6 }}
          >
            Frequently Asked Questions
          </Typography>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Accordion
              expanded={expandedFaq === 'panel1'}
              onChange={handleFaqChange('panel1')}
              sx={{
                mb: 3,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:before': { display: 'none' },
                border: '1px solid #e5e7eb',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      bgcolor: '#4ecdc4',
                      borderRadius: '50%',
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AddIcon
                      sx={{
                        color: '#ffffff',
                        fontSize: 16,
                        transform:
                          expandedFaq === 'panel1'
                            ? 'rotate(45deg)'
                            : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </Box>
                }
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '8px 8px 0 0',
                  '&:hover': { bgcolor: '#f8f9fa' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: '#1f2937' }}
                >
                  Can I be an employee driver?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ bgcolor: '#ffffff', borderRadius: '0 0 8px 8px' }}
              >
                <Typography sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                  Yes, it’s possible in the future. We choose full-time drivers
                  based on activity and good performance. If you stay active and
                  deliver well, you’ll have a chance to be selected.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expandedFaq === 'panel2'}
              onChange={handleFaqChange('panel2')}
              sx={{
                mb: 3,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:before': { display: 'none' },
                border: '1px solid #e5e7eb',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      bgcolor: '#4ecdc4',
                      borderRadius: '50%',
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AddIcon
                      sx={{
                        color: '#ffffff',
                        fontSize: 16,
                        transform:
                          expandedFaq === 'panel2'
                            ? 'rotate(45deg)'
                            : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </Box>
                }
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '8px 8px 0 0',
                  '&:hover': { bgcolor: '#f8f9fa' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: '#1f2937' }}
                >
                  Am I an employee of GoSnel?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ bgcolor: '#ffffff', borderRadius: '0 0 8px 8px' }}
              >
                <Typography sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                  No. This is fully independent work. You control your own
                  schedule and only accept orders when you want.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expandedFaq === 'panel3'}
              onChange={handleFaqChange('panel3')}
              sx={{
                mb: 3,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:before': { display: 'none' },
                border: '1px solid #e5e7eb',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      bgcolor: '#4ecdc4',
                      borderRadius: '50%',
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AddIcon
                      sx={{
                        color: '#ffffff',
                        fontSize: 16,
                        transform:
                          expandedFaq === 'panel3'
                            ? 'rotate(45deg)'
                            : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </Box>
                }
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '8px 8px 0 0',
                  '&:hover': { bgcolor: '#f8f9fa' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: '#1f2937' }}
                >
                  Is there any commitment after signing up?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ bgcolor: '#ffffff', borderRadius: '0 0 8px 8px' }}
              >
                <Typography sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                  No commitments at all. You can activate or deactivate order
                  availability anytime.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expandedFaq === 'panel4'}
              onChange={handleFaqChange('panel4')}
              sx={{
                mb: 3,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:before': { display: 'none' },
                border: '1px solid #e5e7eb',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      bgcolor: '#4ecdc4',
                      borderRadius: '50%',
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AddIcon
                      sx={{
                        color: '#ffffff',
                        fontSize: 16,
                        transform:
                          expandedFaq === 'panel4'
                            ? 'rotate(45deg)'
                            : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </Box>
                }
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '8px 8px 0 0',
                  '&:hover': { bgcolor: '#f8f9fa' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: '#1f2937' }}
                >
                  Is the income fixed or based on orders?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ bgcolor: '#ffffff', borderRadius: '0 0 8px 8px' }}
              >
                <Typography sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                  Income depends on how many deliveries you complete, plus tips.
                  Drivers typically earn AED 5–8 per delivery, and sometimes
                  more depending on area and time.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expandedFaq === 'panel5'}
              onChange={handleFaqChange('panel5')}
              sx={{
                mb: 3,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:before': { display: 'none' },
                border: '1px solid #e5e7eb',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      bgcolor: '#4ecdc4',
                      borderRadius: '50%',
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AddIcon
                      sx={{
                        color: '#ffffff',
                        fontSize: 16,
                        transform:
                          expandedFaq === 'panel5'
                            ? 'rotate(45deg)'
                            : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </Box>
                }
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '8px 8px 0 0',
                  '&:hover': { bgcolor: '#f8f9fa' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: '#1f2937' }}
                >
                  Do I need a specific vehicle?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ bgcolor: '#ffffff', borderRadius: '0 0 8px 8px' }}
              >
                <Typography sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                  If you get hired full-time in the future, we will provide what
                  you need. But if you choose to work as an independent driver,
                  you must have your own vehicle — car, motorcycle, bicycle, or
                  van.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expandedFaq === 'panel6'}
              onChange={handleFaqChange('panel6')}
              sx={{
                mb: 3,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                '&:before': { display: 'none' },
                border: '1px solid #e5e7eb',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    sx={{
                      bgcolor: '#4ecdc4',
                      borderRadius: '50%',
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <AddIcon
                      sx={{
                        color: '#ffffff',
                        fontSize: 16,
                        transform:
                          expandedFaq === 'panel6'
                            ? 'rotate(45deg)'
                            : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </Box>
                }
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '8px 8px 0 0',
                  '&:hover': { bgcolor: '#f8f9fa' },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: '#1f2937' }}
                >
                  How do I receive my payments?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ bgcolor: '#ffffff', borderRadius: '0 0 8px 8px' }}
              >
                <Typography sx={{ color: '#6b7280', lineHeight: 1.6 }}>
                  Payments are sent weekly. You can track your earnings in real
                  time directly from the app.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>

      {/* Ready to Start Earning Section */}
      <Box
        sx={{
          position: 'relative',
          height: '60vh',
          backgroundImage: 'url(/SocialmediaSVG/driverslandingpage3.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          color: '#1f2937',
          // Overlay for better text readability
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Typography
              variant="h3"
              sx={{
                color: '#ffffff',
                fontWeight: 600,
                mb: 3,
                textAlign: 'center',
              }}
            >
              Ready to Start Earning?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#ffffff',
                mb: 4,
                opacity: 0.9,
                textAlign: 'center',
              }}
            >
              Join GoSnel today and start making money on your schedule
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/driver/signup')}
                sx={{
                  py: 2,
                  px: 6,
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  bgcolor: '#4ecdc4',
                  color: '#ffffff',
                  '&:hover': { bgcolor: '#38b2ac' },
                }}
              >
                Sign Up Now
              </Button>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="body2"
                sx={{ color: '#ffffff', opacity: 0.9 }}
              >
                Already a driver?{' '}
                <Button
                  onClick={() => navigate('/driver/login')}
                  sx={{
                    color: '#4ecdc4',
                    textTransform: 'none',
                    p: 0,
                    minWidth: 'auto',
                    '&:hover': {
                      bgcolor: 'transparent',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Sign in to your dashboard
                </Button>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Support Section */}
      <Box
        sx={{
          bgcolor: '#ffffff',
          py: 8,
          textAlign: 'center',
          borderTop: '1px solid #e5e7eb',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{ color: '#1f2937', fontWeight: 600, mb: 3 }}
          >
            Need Help Getting Started?
          </Typography>
          <Typography variant="h6" sx={{ color: '#6b7280', mb: 4 }}>
            Our support team is here to help you every step of the way
          </Typography>
          <Box display="flex" justifyContent="center" gap={4} mb={4}>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              onClick={() =>
                window.open('https://wa.me/971542503729', '_blank')
              }
              sx={{
                bgcolor: '#25D366',
                color: '#fff',
                py: 2,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': { bgcolor: '#128C7E' },
              }}
            >
              WhatsApp
            </Button>
          </Box>
          <Typography variant="body2" sx={{ color: '#6b7280' }}>
            drivers@gosnel.com
          </Typography>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: '#1f2937',
          borderTop: '1px solid #374151',
          pt: 6,
          pb: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 4 }}>
            {/* GoSnel Brand */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="h6"
                sx={{
                  color: '#ffffff',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                GoSnel
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#9ca3af',
                  mb: 2,
                  lineHeight: 1.6,
                }}
              >
                Smart food delivery platform connecting riders, restaurants, and
                customers across the UAE.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#4ecdc4',
                  fontWeight: 600,
                }}
              >
                Drive. Deliver. Earn.
              </Typography>
            </Grid>

            {/* For Drivers */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  mb: 2,
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  letterSpacing: '0.5px',
                }}
              >
                For Drivers
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button
                  onClick={() => navigate('/driver/signup')}
                  sx={{
                    color: '#4ecdc4',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    p: 0.5,
                    fontSize: '0.875rem',
                    '&:hover': {
                      bgcolor: 'transparent',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Become a Driver
                </Button>
                <Button
                  onClick={() => navigate('/driver/login')}
                  sx={{
                    color: '#a0aec0',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    p: 0.5,
                    fontSize: '0.875rem',
                    '&:hover': { bgcolor: 'transparent', color: '#4ecdc4' },
                  }}
                >
                  Driver Login
                </Button>
                <Button
                  onClick={() => navigate('/driver/help')}
                  sx={{
                    color: '#9ca3af',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    p: 0.5,
                    fontSize: '0.875rem',
                    '&:hover': { bgcolor: 'transparent', color: '#4ecdc4' },
                  }}
                >
                  Driver Support
                </Button>
              </Box>
            </Grid>

            {/* Legal */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                  mb: 2,
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  letterSpacing: '0.5px',
                }}
              >
                Legal
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button
                  onClick={() => navigate('/privacy')}
                  sx={{
                    color: '#9ca3af',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    p: 0.5,
                    fontSize: '0.875rem',
                    '&:hover': { bgcolor: 'transparent', color: '#4ecdc4' },
                  }}
                >
                  Privacy Policy
                </Button>
                <Button
                  onClick={() => navigate('/terms')}
                  sx={{
                    color: '#9ca3af',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    p: 0.5,
                    fontSize: '0.875rem',
                    '&:hover': { bgcolor: 'transparent', color: '#4ecdc4' },
                  }}
                >
                  Terms & Conditions
                </Button>
                <Button
                  onClick={() => navigate('/cookies')}
                  sx={{
                    color: '#9ca3af',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    p: 0.5,
                    fontSize: '0.875rem',
                    '&:hover': { bgcolor: 'transparent', color: '#4ecdc4' },
                  }}
                >
                  Cookie Policy
                </Button>
              </Box>
            </Grid>

            {/* Company */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  mb: 2,
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  letterSpacing: '0.5px',
                }}
              >
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button
                  onClick={() => navigate('/')}
                  sx={{
                    color: '#9ca3af',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    p: 0.5,
                    fontSize: '0.875rem',
                    '&:hover': { bgcolor: 'transparent', color: '#4ecdc4' },
                  }}
                >
                  GoSnel Home
                </Button>
                <Button
                  onClick={() => navigate('/vendor/landing')}
                  sx={{
                    color: '#9ca3af',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    p: 0.5,
                    fontSize: '0.875rem',
                    '&:hover': { bgcolor: 'transparent', color: '#4ecdc4' },
                  }}
                >
                  For Restaurants
                </Button>
                <Button
                  onClick={() => navigate('/about')}
                  sx={{
                    color: '#9ca3af',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    p: 0.5,
                    fontSize: '0.875rem',
                    '&:hover': { bgcolor: 'transparent', color: '#4ecdc4' },
                  }}
                >
                  About Us
                </Button>
                <Button
                  onClick={() => navigate('/support')}
                  sx={{
                    color: '#9ca3af',
                    textAlign: 'left',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    p: 0.5,
                    fontSize: '0.875rem',
                    '&:hover': { bgcolor: 'transparent', color: '#4ecdc4' },
                  }}
                >
                  Help & Support
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Social Media */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
              py: 3,
              borderTop: '1px solid #e5e7eb',
              borderBottom: '1px solid #e5e7eb',
            }}
          >
            {/* Instagram */}
            <Button
              href="https://www.instagram.com/gosnelai?igsh=NHA2eHhrZ2tpMnFu"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.3)',
                color: '#4ecdc4',
                minWidth: 'unset',
                '&:hover': {
                  bgcolor: 'rgba(78, 205, 196, 0.3)',
                  borderColor: '#4ecdc4',
                },
              }}
              title="Instagram"
            >
              <InstagramIcon sx={{ fontSize: 20 }} />
            </Button>

            {/* Facebook */}
            <Button
              href="https://www.facebook.com/share/1AGMEkChEX/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.3)',
                color: '#4ecdc4',
                minWidth: 'unset',
                '&:hover': {
                  bgcolor: 'rgba(78, 205, 196, 0.3)',
                  borderColor: '#4ecdc4',
                },
              }}
              title="Facebook"
            >
              <FacebookIcon sx={{ fontSize: 20 }} />
            </Button>

            {/* LinkedIn */}
            <Button
              href="https://www.linkedin.com/company/gosnel"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.3)',
                color: '#4ecdc4',
                minWidth: 'unset',
                '&:hover': {
                  bgcolor: 'rgba(78, 205, 196, 0.3)',
                  borderColor: '#4ecdc4',
                },
              }}
              title="LinkedIn"
            >
              <LinkedInIcon sx={{ fontSize: 20 }} />
            </Button>

            {/* Twitter */}
            <Button
              href="https://twitter.com/gosnelai"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.3)',
                color: '#4ecdc4',
                minWidth: 'unset',
                '&:hover': {
                  bgcolor: 'rgba(78, 205, 196, 0.3)',
                  borderColor: '#4ecdc4',
                },
              }}
              title="Twitter"
            >
              <Box
                component="svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </Box>
            </Button>
          </Box>

          {/* Copyright */}
          <Box sx={{ textAlign: 'center', pt: 3 }}>
            <Typography
              variant="body2"
              sx={{
                color: '#9ca3af',
                fontSize: '0.875rem',
              }}
            >
              © {new Date().getFullYear()} GoSnel. All rights reserved. GoSnel
              Delivery Riders in the UAE.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DriverLanding;

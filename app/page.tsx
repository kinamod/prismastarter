'use client';

import { 
  Button, 
  PrismaProvider, 
  Box, 
  Flex, 
  Card,
  Divider 
} from '@edreamsodigeo/prisma-design-system';

export default function Home() {
  return (
    <PrismaProvider>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
        }}
      >
        {/* Header */}
        <Box
          as="header"
          sx={{
            background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
            color: 'white',
            padding: ['32px 24px', '48px 24px'],
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '42px',
              fontWeight: 700,
              margin: '0 0 12px 0',
            }}
          >
            Prisma Sample App
          </h1>
          <p
            style={{
              fontSize: '18px',
              margin: 0,
              opacity: 0.9,
            }}
          >
            A simple application built with Prisma Design System
          </p>
        </Box>

        {/* Main Content */}
        <Box
          as="main"
          sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: ['32px 24px', '48px 24px'],
          }}
        >
          {/* Hero Section */}
          <Flex
            flexDirection="column"
            alignItems="center"
            sx={{
              textAlign: 'center',
              marginBottom: ['48px', '64px'],
            }}
          >
            <h2
              style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#1e293b',
                margin: '0 0 16px 0',
              }}
            >
              Welcome to Prisma
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#64748b',
                margin: '0 0 32px 0',
              }}
            >
              Explore components from the Prisma Design System
            </p>
            
            <Flex
              sx={{
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">Learn More</Button>
            </Flex>
          </Flex>

          {/* Features Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: ['1fr', 'repeat(auto-fit, minmax(300px, 1fr))'],
              gap: '24px',
            }}
          >
            <Card
              sx={{
                padding: '32px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#1e293b',
                  margin: '0 0 12px 0',
                }}
              >
                Component Library
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#64748b',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Access a comprehensive set of UI components designed for modern applications.
              </p>
            </Card>

            <Card
              sx={{
                padding: '32px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#1e293b',
                  margin: '0 0 12px 0',
                }}
              >
                Responsive Design
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#64748b',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                All components are built mobile-first and adapt to any screen size.
              </p>
            </Card>

            <Card
              sx={{
                padding: '32px',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#1e293b',
                  margin: '0 0 12px 0',
                }}
              >
                Easy Integration
              </h3>
              <p
                style={{
                  fontSize: '16px',
                  color: '#64748b',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Simple to use and integrate into your existing projects.
              </p>
            </Card>
          </Box>
        </Box>
      </Box>
    </PrismaProvider>
  );
}

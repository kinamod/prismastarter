'use client';

import {
  Button,
  PrismaThemeProvider,
  themes,
  Box,
  Flex,
  Card,
  Divider,
  Heading,
  Body,
} from '@edreamsodigeo/prisma-design-system';
import Link from 'next/link';

export default function Home() {
  return (
    <PrismaThemeProvider theme={themes.COBALT_ED}>
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
          <Heading type={1} sx={{ margin: '0 0 12px 0', color: 'white' }}>
            Prisma Sample App
          </Heading>
          <Body size="large" sx={{ margin: 0, opacity: 0.9, color: 'white' }}>
            A simple application built with Prisma Design System
          </Body>
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
            <Heading
              type={2}
              sx={{
                margin: '0 0 16px 0',
              }}
            >
              Welcome to Prisma
            </Heading>
            <Body
              size="large"
              sx={{
                color: '#64748b',
                margin: '0 0 16px 0',
                maxWidth: '600px',
              }}
            >
              Click <strong>"Explore Destinations"</strong> below to see interactive flip cards built with Prisma components!
            </Body>
            <Body
              sx={{
                color: '#64748b',
                margin: '0 0 32px 0',
                fontSize: '14px',
              }}
            >
              Try adding more functionality to this app and experiment with the design system.
            </Body>
            
            <Flex
              sx={{
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <Link href="/destinations" style={{ textDecoration: 'none' }}>
                <Button
                  variant="primary"
                  sx={{
                    fontSize: '18px',
                    padding: '16px 48px',
                    boxShadow: '0 4px 16px rgba(0, 102, 204, 0.3)',
                    transform: 'scale(1.1)',
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { transform: 'scale(1.1)' },
                      '50%': { transform: 'scale(1.15)' },
                    },
                  }}
                >
                  🌍 Explore Destinations
                </Button>
              </Link>
            </Flex>
            <Flex
              sx={{
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '16px',
              }}
            >
              <Button variant="secondary">Get Started</Button>
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
              <Heading type={3} sx={{ margin: '0 0 12px 0' }}>
                Component Library
              </Heading>
              <Body sx={{ margin: 0 }}>
                Access a comprehensive set of UI components designed for modern applications.
              </Body>
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
              <Heading type={3} sx={{ margin: '0 0 12px 0' }}>
                Responsive Design
              </Heading>
              <Body sx={{ margin: 0 }}>
                All components are built mobile-first and adapt to any screen size.
              </Body>
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
              <Heading type={3} sx={{ margin: '0 0 12px 0' }}>
                Easy Integration
              </Heading>
              <Body sx={{ margin: 0 }}>
                Simple to use and integrate into your existing projects.
              </Body>
            </Card>
          </Box>
        </Box>
      </Box>
    </PrismaThemeProvider>
  );
}

'use client';

import {
  Button,
  PrismaProvider,
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
          <Heading level={1} sx={{ margin: '0 0 12px 0', color: 'white' }}>
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
              level={2}
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
                margin: '0 0 32px 0',
              }}
            >
              Explore components from the Prisma Design System
            </Body>
            
            <Flex
              sx={{
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button variant="primary">Get Started</Button>
              <Link href="/destinations" style={{ textDecoration: 'none' }}>
                <Button variant="primary">Explore Destinations</Button>
              </Link>
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
              <Heading level={3} sx={{ margin: '0 0 12px 0' }}>
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
              <Heading level={3} sx={{ margin: '0 0 12px 0' }}>
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
              <Heading level={3} sx={{ margin: '0 0 12px 0' }}>
                Easy Integration
              </Heading>
              <Body sx={{ margin: 0 }}>
                Simple to use and integrate into your existing projects.
              </Body>
            </Card>
          </Box>
        </Box>
      </Box>
    </PrismaProvider>
  );
}

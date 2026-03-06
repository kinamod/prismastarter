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
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useModal,
} from '@edreamsodigeo/prisma-design-system';
import Link from 'next/link';

export default function Home() {
  const getStartedModal = useModal();
  const learnMoreModal = useModal();

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
                <Button variant="primary">
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
              <Button variant="secondary" onClick={getStartedModal.open}>
                Get Started
              </Button>
              <Button variant="secondary" onClick={learnMoreModal.open}>
                Learn More
              </Button>
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

      {/* Get Started Modal */}
      <Modal {...getStartedModal.modalProps}>
        <ModalHeader onClose={getStartedModal.close}>
          <Heading type={3} sx={{ margin: 0, color: '#1e293b' }}>
            🚀 Get Started with Prisma Design System
          </Heading>
        </ModalHeader>
        <ModalContent>
          <Flex flexDirection="column" sx={{ gap: '20px' }}>
            <Box>
              <Heading type={4} sx={{ margin: '0 0 12px 0', color: '#0066cc' }}>
                👀 Explore Interactive Destinations
              </Heading>
              <Body>
                Click the <strong>🌍 Explore Destinations</strong> button above to see beautiful interactive flip cards built entirely with Prisma Design System components. Click any card to flip it and reveal more information!
              </Body>
            </Box>

            <Box>
              <Heading type={4} sx={{ margin: '0 0 12px 0', color: '#0066cc' }}>
                🎨 For Designers: Build More Features
              </Heading>
              <Body>
                This is your canvas! Use Builder's AI assistant to add more functionality to this app. Try prompting:
              </Body>
              <Box
                as="ul"
                sx={{
                  margin: '12px 0',
                  paddingLeft: '24px',
                  color: '#475569',
                }}
              >
                <li>"Add a booking form to the destinations page"</li>
                <li>"Create a search and filter feature"</li>
                <li>"Add a photo gallery for each destination"</li>
                <li>"Build a favorites feature"</li>
              </Box>
              <Body sx={{ fontStyle: 'italic', color: '#64748b' }}>
                All components will use the Prisma Design System automatically!
              </Body>
            </Box>
          </Flex>
        </ModalContent>
        <ModalFooter>
          <Flex sx={{ gap: '12px', justifyContent: 'flex-end' }}>
            <Button variant="secondary" onClick={getStartedModal.close}>
              Close
            </Button>
            <Link href="/destinations" style={{ textDecoration: 'none' }}>
              <Button variant="primary" onClick={getStartedModal.close}>
                Explore Now
              </Button>
            </Link>
          </Flex>
        </ModalFooter>
      </Modal>

      {/* Learn More Modal */}
      <Modal {...learnMoreModal.modalProps}>
        <ModalHeader onClose={learnMoreModal.close}>
          <Heading type={3} sx={{ margin: 0, color: '#1e293b' }}>
            💡 About Builder & Design Systems
          </Heading>
        </ModalHeader>
        <ModalContent>
          <Flex flexDirection="column" sx={{ gap: '20px' }}>
            <Box>
              <Heading type={4} sx={{ margin: '0 0 12px 0', color: '#0066cc' }}>
                What is Builder?
              </Heading>
              <Body>
                Builder is an AI-powered development platform that helps you create applications using your design system. This project is specifically set up to build apps using the <strong>Prisma Design System</strong>.
              </Body>
            </Box>

            <Box>
              <Heading type={4} sx={{ margin: '0 0 12px 0', color: '#0066cc' }}>
                How Does It Work?
              </Heading>
              <Body>
                Simply describe what you want to build in natural language, and Builder's AI will generate code using authentic Prisma components. No need to manually look up component APIs or design tokens—Builder knows the design system and uses it correctly.
              </Body>
            </Box>

            <Box
              sx={{
                background: '#f0f9ff',
                border: '2px solid #0066cc',
                borderRadius: '8px',
                padding: '20px',
              }}
            >
              <Heading type={4} sx={{ margin: '0 0 12px 0', color: '#0066cc' }}>
                📤 Share Your Preview
              </Heading>
              <Body sx={{ marginBottom: '12px' }}>
                Want to share your work? Click the <strong>Share button</strong> at the top right of your screen <span style={{ fontSize: '24px' }}>↗️</span>
              </Body>
              <Body size="small" sx={{ color: '#64748b' }}>
                This generates a preview link that anyone can view—perfect for getting feedback from your team or stakeholders!
              </Body>
            </Box>

            <Box>
              <Heading type={4} sx={{ margin: '0 0 12px 0', color: '#0066cc' }}>
                🎯 This Prisma Starter
              </Heading>
              <Body>
                This repository is pre-configured with the Prisma Design System. All UI components, typography, colors, and spacing automatically follow Prisma's design tokens. Just focus on building features—the design consistency is handled for you.
              </Body>
            </Box>
          </Flex>
        </ModalContent>
        <ModalFooter>
          <Button variant="primary" onClick={learnMoreModal.close} fullWidth>
            Got It!
          </Button>
        </ModalFooter>
      </Modal>
    </PrismaThemeProvider>
  );
}

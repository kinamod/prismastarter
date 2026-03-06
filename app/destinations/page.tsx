'use client';

import {
  Button,
  PrismaThemeProvider,
  themes,
  Box,
  Flex,
  Card,
  Heading,
  Body,
  Badge,
} from '@edreamsodigeo/prisma-design-system';
import Link from 'next/link';

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    description: 'The City of Light offers iconic landmarks, world-class museums, and romantic streets. Experience the Eiffel Tower, Louvre Museum, and charming cafés.',
    highlights: 'Eiffel Tower • Louvre • Notre-Dame',
    bestTime: 'April to June, September to October',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    description: 'A vibrant metropolis blending ancient traditions with cutting-edge technology. Discover temples, modern architecture, and incredible cuisine.',
    highlights: 'Senso-ji Temple • Shibuya Crossing • Mount Fuji',
    bestTime: 'March to May, September to November',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
  },
  {
    id: 3,
    name: 'Barcelona, Spain',
    description: 'Mediterranean beauty meets Gaudí\'s architectural wonders. Enjoy stunning beaches, vibrant culture, and world-renowned tapas.',
    highlights: 'Sagrada Familia • Park Güell • La Rambla',
    bestTime: 'May to June, September to October',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
  },
  {
    id: 4,
    name: 'New York City, USA',
    description: 'The city that never sleeps offers endless entertainment, iconic skylines, and diverse neighborhoods. A cultural melting pot like no other.',
    highlights: 'Statue of Liberty • Central Park • Times Square',
    bestTime: 'April to June, September to November',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
  },
  {
    id: 5,
    name: 'Santorini, Greece',
    description: 'Breathtaking sunsets, white-washed buildings, and crystal-clear waters. A perfect romantic getaway in the Aegean Sea.',
    highlights: 'Oia Sunset • Red Beach • Ancient Akrotiri',
    bestTime: 'April to November',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
  },
  {
    id: 6,
    name: 'Dubai, UAE',
    description: 'A modern oasis in the desert featuring luxury shopping, ultramodern architecture, and world-class entertainment.',
    highlights: 'Burj Khalifa • Dubai Mall • Palm Jumeirah',
    bestTime: 'November to March',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
  },
];

export default function DestinationsPage() {
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
            Tourism Destinations
          </Heading>
          <Body size="large" sx={{ margin: 0, opacity: 0.9, color: 'white' }}>
            Discover amazing places around the world
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
          {/* Back Button */}
          <Box sx={{ marginBottom: '32px' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button variant="secondary">← Back to Home</Button>
            </Link>
          </Box>

          {/* Destinations Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: ['1fr', 'repeat(auto-fit, minmax(350px, 1fr))'],
              gap: '24px',
            }}
          >
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 0,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {/* Background Image */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${destination.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                    },
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <Heading
                    type={3}
                    sx={{
                      margin: '0 0 16px 0',
                      color: 'white',
                    }}
                  >
                    {destination.name}
                  </Heading>

                  <Body
                    sx={{
                      margin: '0 0 20px 0',
                      color: 'white',
                      flexGrow: 1,
                    }}
                  >
                    {destination.description}
                  </Body>

                  {/* Bottom Section - Fixed Height */}
                  <Box
                    sx={{
                      marginTop: 'auto',
                    }}
                  >
                    <Box
                      sx={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                        paddingTop: '16px',
                        marginBottom: '20px',
                      }}
                    >
                      <Flex
                        flexDirection="column"
                        sx={{ gap: '12px' }}
                      >
                        <Box>
                          <Body weight="bold" size="small" sx={{ marginBottom: '4px', display: 'block', color: 'white' }}>
                            Highlights
                          </Body>
                          <Body size="small" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            {destination.highlights}
                          </Body>
                        </Box>

                        <Box>
                          <Body weight="bold" size="small" sx={{ marginBottom: '4px', display: 'block', color: 'white' }}>
                            Best Time to Visit
                          </Body>
                          <Body size="small" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            {destination.bestTime}
                          </Body>
                        </Box>
                      </Flex>
                    </Box>

                    {/* Button - Always same distance from bottom */}
                    <Button variant="primary" fullWidth>
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </PrismaThemeProvider>
  );
}

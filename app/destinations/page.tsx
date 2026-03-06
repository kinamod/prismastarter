'use client';

import {
  Button,
  CobaltProvider,
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
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    description: 'A vibrant metropolis blending ancient traditions with cutting-edge technology. Discover temples, modern architecture, and incredible cuisine.',
    highlights: 'Senso-ji Temple • Shibuya Crossing • Mount Fuji',
    bestTime: 'March to May, September to November',
  },
  {
    id: 3,
    name: 'Barcelona, Spain',
    description: 'Mediterranean beauty meets Gaudí\'s architectural wonders. Enjoy stunning beaches, vibrant culture, and world-renowned tapas.',
    highlights: 'Sagrada Familia • Park Güell • La Rambla',
    bestTime: 'May to June, September to October',
  },
  {
    id: 4,
    name: 'New York City, USA',
    description: 'The city that never sleeps offers endless entertainment, iconic skylines, and diverse neighborhoods. A cultural melting pot like no other.',
    highlights: 'Statue of Liberty • Central Park • Times Square',
    bestTime: 'April to June, September to November',
  },
  {
    id: 5,
    name: 'Santorini, Greece',
    description: 'Breathtaking sunsets, white-washed buildings, and crystal-clear waters. A perfect romantic getaway in the Aegean Sea.',
    highlights: 'Oia Sunset • Red Beach • Ancient Akrotiri',
    bestTime: 'April to November',
  },
  {
    id: 6,
    name: 'Dubai, UAE',
    description: 'A modern oasis in the desert featuring luxury shopping, ultramodern architecture, and world-class entertainment.',
    highlights: 'Burj Khalifa • Dubai Mall • Palm Jumeirah',
    bestTime: 'November to March',
  },
];

export default function DestinationsPage() {
  return (
    <CobaltProvider>
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
                  padding: '32px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Heading
                  level={3}
                  sx={{
                    margin: '0 0 16px 0',
                    color: '#0066cc',
                  }}
                >
                  {destination.name}
                </Heading>

                <Body
                  sx={{
                    margin: '0 0 20px 0',
                    flexGrow: 1,
                  }}
                >
                  {destination.description}
                </Body>

                <Box
                  sx={{
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '16px',
                    marginTop: 'auto',
                  }}
                >
                  <Flex
                    flexDirection="column"
                    sx={{ gap: '12px' }}
                  >
                    <Box>
                      <Body weight="bold" size="small" sx={{ marginBottom: '4px', display: 'block' }}>
                        Highlights
                      </Body>
                      <Body size="small" sx={{ color: '#64748b' }}>
                        {destination.highlights}
                      </Body>
                    </Box>

                    <Box>
                      <Body weight="bold" size="small" sx={{ marginBottom: '4px', display: 'block' }}>
                        Best Time to Visit
                      </Body>
                      <Body size="small" sx={{ color: '#64748b' }}>
                        {destination.bestTime}
                      </Body>
                    </Box>
                  </Flex>

                  <Box sx={{ marginTop: '20px' }}>
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
    </CobaltProvider>
  );
}

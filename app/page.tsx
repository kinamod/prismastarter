'use client';

import '@/builder-registry';
import VideoSlider from '@/components/VideoSlider/VideoSlider';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="showcase-header">
        <h1>Component Showcase</h1>
        <p>A storybook of reusable components</p>
        <div className="api-key-notice">
          ⚠️ <strong>Setup Required:</strong> Set your{' '}
          <code>NEXT_PUBLIC_BUILDER_API_KEY</code> environment variable to enable
          Builder.io integration.{' '}
          <a
            href="https://builder.io/account/organization"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get your API key →
          </a>
        </div>
      </div>

      <div className="showcase-container">
        <section className="showcase-section">
          <div className="showcase-section-header">
            <h2>Video Slider</h2>
            <p className="showcase-section-description">
              A responsive video carousel/slider component with navigation controls,
              slide indicators, and video background support. Perfect for hero
              sections and promotional content.
            </p>
          </div>
          <div className="showcase-component-wrapper">
            <VideoSlider
              slides={[
                { backgroundColor: 'rgb(0, 109, 160)' },
                { backgroundColor: 'rgb(160, 0, 109)' },
                { backgroundColor: 'rgb(109, 160, 0)' },
              ]}
              showNavigation={true}
              showIndicators={true}
              autoplay={true}
              height={600}
            />
          </div>
        </section>
      </div>

      <style jsx>{`
        .showcase-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 20px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .showcase-header h1 {
          font-size: 48px;
          font-weight: 800;
          margin: 0 0 12px 0;
          letter-spacing: -0.02em;
        }

        .showcase-header p {
          font-size: 18px;
          margin: 0;
          opacity: 0.95;
          font-weight: 500;
        }

        .api-key-notice {
          margin-top: 24px;
          padding: 16px 24px;
          background: rgba(255, 255, 255, 0.15);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          font-size: 15px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          backdrop-filter: blur(10px);
        }

        .api-key-notice code {
          background: rgba(255, 255, 255, 0.25);
          padding: 3px 8px;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          font-weight: 600;
        }

        .api-key-notice a {
          color: white;
          text-decoration: underline;
          font-weight: 600;
        }

        .api-key-notice a:hover {
          opacity: 0.8;
        }

        .showcase-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .showcase-section {
          margin-bottom: 80px;
        }

        .showcase-section-header {
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .showcase-section-header h2 {
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #1a202c;
          letter-spacing: -0.01em;
        }

        .showcase-section-description {
          font-size: 16px;
          color: #718096;
          margin: 0;
          max-width: 600px;
          line-height: 1.6;
        }

        .showcase-component-wrapper {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          overflow: visible;
        }

        .showcase-header-wrapper {
          background: transparent;
          box-shadow: none;
          border-radius: 0;
          overflow: visible;
        }

        .showcase-event-grid {
          background: transparent;
          box-shadow: none;
          border-radius: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          padding: 0;
        }

        .showcase-footer-wrapper {
          background: transparent;
          box-shadow: none;
          border-radius: 0;
        }
      `}</style>
    </div>
  );
}

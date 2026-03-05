'use client';

import { Button } from '@edreamsodigeo/prisma-design-system';

export default function Home() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Prisma Sample App</h1>
        <p>A simple application built with Prisma Design System</p>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h2>Welcome to Prisma</h2>
          <p>Explore components from the Prisma Design System</p>
          <div className="button-group">
            <Button variant="primary">Get Started</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </section>

        <section className="features-grid">
          <div className="feature-card">
            <h3>Component Library</h3>
            <p>Access a comprehensive set of UI components designed for modern applications.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive Design</h3>
            <p>All components are built mobile-first and adapt to any screen size.</p>
          </div>
          <div className="feature-card">
            <h3>Easy Integration</h3>
            <p>Simple to use and integrate into your existing projects.</p>
          </div>
        </section>
      </main>

      <style jsx>{`
        .app-container {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #f8fafc, #e2e8f0);
        }

        .app-header {
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
          color: white;
          padding: 48px 24px;
          text-align: center;
        }

        .app-header h1 {
          font-size: 42px;
          font-weight: 700;
          margin: 0 0 12px 0;
        }

        .app-header p {
          font-size: 18px;
          margin: 0;
          opacity: 0.9;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 24px;
        }

        .hero-section {
          text-align: center;
          margin-bottom: 64px;
        }

        .hero-section h2 {
          font-size: 36px;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 16px 0;
        }

        .hero-section p {
          font-size: 18px;
          color: #64748b;
          margin: 0 0 32px 0;
        }

        .button-group {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .feature-card {
          background: white;
          padding: 32px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
        }

        .feature-card h3 {
          font-size: 24px;
          font-weight: 600;
          color: #1e293b;
          margin: 0 0 12px 0;
        }

        .feature-card p {
          font-size: 16px;
          color: #64748b;
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .app-header h1 {
            font-size: 32px;
          }

          .hero-section h2 {
            font-size: 28px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

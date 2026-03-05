'use client';

import { useState } from 'react';
import styles from './styles.module.css';

export interface VideoSliderProps {
  slides?: Array<{
    videoUrl?: string;
    backgroundColor?: string;
  }>;
  showNavigation?: boolean;
  showIndicators?: boolean;
  autoplay?: boolean;
  height?: number;
}

export default function VideoSlider({
  slides = [
    { backgroundColor: 'rgb(0, 109, 160)' },
  ],
  showNavigation = false,
  showIndicators = false,
  autoplay = true,
  height = 600,
}: VideoSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sliderOuter}>
          <div className={styles.sliderInner} style={{ minHeight: `${height}px` }}>
            <div className={styles.sliderContent}>
              <ul className={styles.slideList} style={{ minHeight: `${height}px` }}>
                {slides.map((slide, index) => (
                  <li
                    key={index}
                    className={
                      index === currentSlide
                        ? styles.slideActive
                        : styles.slideHidden
                    }
                    style={{
                      backgroundColor: slide.backgroundColor || 'rgb(0, 109, 160)',
                      height: `${height}px`,
                    }}
                  >
                    <div className={styles.contentOverlay}>
                      <div
                        className={styles.contentContainer}
                        style={{ height: `${height}px` }}
                      ></div>
                    </div>
                    {slide.videoUrl && (
                      <video
                        autoPlay={autoplay}
                        loop
                        muted
                        playsInline
                        className={styles.video}
                        src={slide.videoUrl}
                      />
                    )}
                  </li>
                ))}
              </ul>

              {showIndicators && slides.length > 1 && (
                <ol className={styles.indicators}>
                  {slides.map((_, index) => (
                    <li key={index} className={styles.indicatorItem}>
                      <a
                        aria-label={`display slide ${index + 1}`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          goToSlide(index);
                        }}
                        className={`${styles.indicator} ${
                          index === currentSlide ? styles.indicatorActive : ''
                        }`}
                      ></a>
                    </li>
                  ))}
                </ol>
              )}

              {showNavigation && slides.length > 1 && (
                <>
                  <div className={styles.nextButton}>
                    <a
                      aria-label="next slide"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        nextSlide();
                      }}
                      className={styles.navButton}
                    >
                      <em className={styles.navIcon}>›</em>
                    </a>
                  </div>
                  <div className={styles.prevButton}>
                    <a
                      aria-label="previous slide"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        previousSlide();
                      }}
                      className={styles.navButton}
                    >
                      <em className={styles.navIcon}>‹</em>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

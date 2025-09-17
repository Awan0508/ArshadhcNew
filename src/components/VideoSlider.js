"use client"; // ← Add this line

import { useState, useEffect, useRef } from 'react';
import styles from '../styles/videoslider.module.css';

const VideoSlider = () => {
  const videos = [
    { id: 1, title: 'Reviews', videoId: 'hGVUI6-RnoU' },
    { id: 2, title: 'Kidney Stones', videoId: '01tKoQGZzXM' },
    { id: 3, title: 'Breast Tumor', videoId: 'FJbfov8Hu40' },
    { id: 4, title: 'PCOS', videoId: 'ylrZ01vUxwI' },
    { id: 5, title: 'Ovary Cyst', videoId: 'ZLsQ_p0HscU' },
    { id: 6, title: 'Gastric Ulcer', videoId: 'WC3rmaBQOus' },
    { id: 7, title: 'Spinal Stenosis', videoId: 'cn5lqx7fiS4' },
    { id: 8, title: 'Sciatica', videoId: 'bFOWZa0Lg1s' },
    { id: 9, title: 'IBS', videoId: 'GImzXsoLB-g' }
  ];

  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 1; // Adjust speed as needed (pixels per frame)

  // Auto-scroll functionality
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const animate = () => {
      if (!isHovering && slider) {
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += scrollSpeed;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const openVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className={styles.sliderWrapper}>
      
      <div 
        ref={sliderRef}
        className={styles.sliderContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.sliderTrack}>
          {videos.map((video) => (
            <div 
              key={video.id} 
              className={styles.videoCard}
              onClick={() => openVideo(video.videoId)}
            >
              <div className={styles.thumbnail}>
                <img 
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} 
                  alt={video.title}
                  loading="lazy"
                />
              </div>
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
              </div>
            </div>
          ))}
          {/* Duplicate items for seamless looping */}
          {videos.map((video) => (
            <div 
              key={`duplicate-${video.id}`} 
              className={styles.videoCard}
              onClick={() => openVideo(video.videoId)}
            >
              <div className={styles.thumbnail}>
                <img 
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} 
                  alt={video.title}
                  loading="lazy"
                />
              </div>
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
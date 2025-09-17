import React from 'react';
import styles from '../styles/videos.module.css';

const data = [
  { id: 1, title: 'Reviews', videoId: 'hGVUI6-RnoU' },
  { id: 2, title: 'Kidney Stones', videoId: '01tKoQGZzXM' },
  { id: 3, title: 'Breast Tumor', videoId: 'FJbfov8Hu40' },
  { id: 4, title: 'PCOS', videoId: 'ylrZ01vUxwI' },
  { id: 5, title: 'Ovary Cyst', videoId: 'ZLsQ_p0HscU' },
  { id: 6, title: 'Gastric Ulcer', videoId: 'WC3rmaBQOus' },
  { id: 7, title: 'Spinal Stenosis', videoId: 'cn5lqx7fiS4' },
  { id: 8, title: 'Sciatica', videoId: 'bFOWZa0Lg1s' },
  { id: 9, title: 'IBS', videoId: 'GImzXsoLB-g' } // Fixed duplicate id 8
];

const Videos = () => {
  const openYoutubeVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.videoGrid}>
          {data.map(({ title, videoId }) => (
            <div 
              key={videoId} 
              className={styles.videoCard}
              onClick={() => openYoutubeVideo(videoId)}
            >
              <div className={styles.thumbnailContainer}>
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={title}
                  className={styles.thumbnail}
                />
                <div className={styles.playButton}></div>
              </div>
              <h3 className={styles.videoTitle}>{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
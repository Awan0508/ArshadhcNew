
import styles from '../styles/videoContent.module.css';
import Header from'../components/Header'
import DoctorsFooter from '../components/DoctorsFooter';
import BookAppointment from '../components/BookAppointment'
import TestimonialSlider from '../components/TestimonialSlider'
import BackgroundAnimation from '../components/BackgroundAnimation'
import Link from'next/link'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import ClientProviders from '../app/ClientProviders';



// Page-specific metadata overrides (merges with layout defaults)
export async function generateMetadata() {
  return {
    title: "Our YouTube Videos | Homeopathic Treatment Videos",
    description: "Watch our educational videos about homeopathic treatments, rheumatoid arthritis, and natural healing methods.",
    keywords: "homeopathic treatment videos, rheumatoid arthritis videos, natural healing videos, homeopathy education, Arshad Homeopathic Clinic YouTube, health videos Rawalpindi, thyroid treatment videos, PCOS homeopathy videos, kidney stone treatment videos, natural remedies video content",
    openGraph: {
      title: "Our YouTube Videos | Homeopathic Treatment Videos",
      description: "Watch our educational videos about homeopathic treatments, rheumatoid arthritis, and natural healing methods.",
      type: "website",
      url: "https://www.arshadhc.com/VideoContent",
      images: [
        {
          url: "https://www.arshadhc.com/images/video-content-thumbnail.jpg",
          width: 1200,
          height: 630,
          alt: "Homeopathic Treatment Videos",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/VideoContent",
    },
  };
}







const VideoContent = () => {
  // Replace with your actual YouTube channel ID and videos data
  const channelId = 'UCDl4Dk38VGZoSS3htAk-_KQ';
  const channelUrl = `https://www.youtube.com/channel/${channelId}`;
  
  // Sample video data - replace with your actual videos
  const videos = [
    {
      id: 'video1',
      title: 'Reviews',
      thumbnail: 'https://img.youtube.com/vi/hGVUI6-RnoU/mqdefault.jpg',
      youtubeId: 'hGVUI6-RnoU',
      date: 'March 9, 2022'
    },
     {
      id: 'video2',
      title: 'IBS',
      thumbnail: 'https://img.youtube.com/vi/GImzXsoLB-g/mqdefault.jpg',
      youtubeId: 'GImzXsoLB-g',
      date: 'December 13, 2022'
    },
    {
      id: 'video3',
      title: 'Kidney Stone',
      thumbnail: 'https://img.youtube.com/vi/01tKoQGZzXM/mqdefault.jpg',
      youtubeId: '01tKoQGZzXM',
      date: 'June 14, 2021'
    },
    {
      id: 'video4',
      title: 'Breast Tumor',
      thumbnail: 'https://img.youtube.com/vi/FJbfov8Hu40/mqdefault.jpg',
      youtubeId: 'FJbfov8Hu40',
      date: 'June 15, 2021'
    },
    {
      id: 'video5',
      title: 'PCOS',
      thumbnail: 'https://img.youtube.com/vi/ylrZ01vUxwI/mqdefault.jpg',
      youtubeId: 'ylrZ01vUxwI',
      date: 'January 17, 2021'
    },
    {
      id: 'video6',
      title: 'Ovary Cyst',
      thumbnail: 'https://img.youtube.com/vi/ZLsQ_p0HscU/mqdefault.jpg',
      youtubeId: 'ZLsQ_p0HscU',
      date: 'March 5, 2023'
    },
    {
      id: 'video7',
      title: 'Gastric Ulcer',
      thumbnail: 'https://img.youtube.com/vi/WC3rmaBQOus/mqdefault.jpg',
      youtubeId: 'WC3rmaBQOus',
      date: 'September 07, 2020'
    },
    {
      id: 'video8',
      title: 'Spinal Stenosis',
      thumbnail: 'https://img.youtube.com/vi/cn5lqx7fiS4/mqdefault.jpg',
      youtubeId: 'cn5lqx7fiS4',
      date: 'August 21, 2020'
    },
    {
      id: 'video9',
      title: 'Sciatica',
      thumbnail: 'https://img.youtube.com/vi/bFOWZa0Lg1s/mqdefault.jpg',
      youtubeId: 'bFOWZa0Lg1s',
      date: 'August 18, 2020'
    },
   {
      id: 'video10',
      title: 'Polycystic Ovary Syndrome (PCOS) Symptoms & Treatment',
      thumbnail: 'https://img.youtube.com/vi/foPbMCG8HQE/mqdefault.jpg',
      youtubeId: 'foPbMCG8HQE',
      date: 'May 21, 2021'
    },
    {
      id: 'video11',
      title: 'Early Signs Of Rheumatoid Arthritis Symptoms',
      thumbnail: 'https://img.youtube.com/vi/T2ea0fYPlO0/mqdefault.jpg',
      youtubeId: 'T2ea0fYPlO0',
      date: 'December 24, 2020'
    },
    {
      id: 'video12',
      title: 'GOUT TREATMENT IN HOMEOPATHY',
      thumbnail: 'https://img.youtube.com/vi/mTNczfDw9PA/mqdefault.jpg',
      youtubeId: 'mTNczfDw9PA',
      date: 'November 27, 2020'
    },
    {
      id: 'video13',
      title: 'URIC ACID TREATMENT',
      thumbnail: 'https://img.youtube.com/vi/j21fpESFQ0s/mqdefault.jpg',
      youtubeId: 'j21fpESFQ0s',
      date: 'November 03, 2020'
    },
    {
      id: 'video14',
      title: 'Treatment for Irritable Bowel Syndrome',
      thumbnail: 'https://img.youtube.com/vi/VguvMntPhgU/mqdefault.jpg',
      youtubeId: 'VguvMntPhgU',
      date: 'October 08, 2020'
    },
    {
      id: 'video15',
      title: 'Inflammatory Bowel Disease Homeopathic Treatment',
      thumbnail: 'https://img.youtube.com/vi/xUlmFZSxsLw/mqdefault.jpg',
      youtubeId: 'xUlmFZSxsLw',
      date: 'September 15, 2020'
    },
    {
      id: 'video16',
      title: 'FATTY LIVER SYMPTOMS, CAUSES, DIET, TREATMENT IN HOMEOPATHY',
      thumbnail: 'https://img.youtube.com/vi/QS8cwzuTxxE/mqdefault.jpg',
      youtubeId: 'QS8cwzuTxxE',
      date: 'August 30, 2020'
    },
    {
      id: 'video17',
      title: 'DUODENAL ULCER SYMPTOMS, CAUSES AND TREATMENT',
      thumbnail: 'https://img.youtube.com/vi/542UZljBt24/mqdefault.jpg',
      youtubeId: '542UZljBt24',
      date: 'August 18, 2020'
    },
    {
      id: 'video18',
      title: 'GASTRIC ULCER TREATMENT IN HOMEOPATHY',
      thumbnail: 'https://img.youtube.com/vi/woEtfMW9EOE/mqdefault.jpg',
      youtubeId: 'woEtfMW9EOE',
      date: 'July 16, 2020'
    },
  ];


  // Page-specific schema (VideoObject schema suitable for video content page)
const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Homeopathic Treatment Educational Videos",
  description: "Educational videos on homeopathic treatments, rheumatoid arthritis, and natural healing methods by Arshad Homeopathic Clinic",
  thumbnailUrl: "https://www.arshadhc.com/images/video-content-thumbnail.jpg",
  uploadDate: "2023-01-01", // Update with actual date or dynamic logic
  publisher: {
    "@type": "Organization",
    name: "Arshad Homeopathic Clinic",
    logo: {
      "@type": "ImageObject",
      url: "https://www.arshadhc.com/images/clinic-logo.jpg",
    },
  },
  contentUrl: "https://www.youtube.com/@ArshadHomeopathicClinic", // Update with actual YouTube channel or playlist URL
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (
    <section className={styles.section} id="videos">
        <BackgroundAnimation />
        <Header />
        {/* Inject page-specific JSON-LD schema here (after common elements from layout) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeJson(videoSchema) }}
          key="video-schema"
        />
      <div className={styles.main}>
      <div className={styles.col1}>
            <h1 className={styles.title}>Our Educational & Patients Feedback Videos</h1>
          </div>
      <main className={styles.main}>
        
        <header className={styles.header}>
          
          
          <p className={styles.description}>
            Learn more about homeopathic treatments and natural healing through our YouTube channel
          </p>
          <a 
            href={channelUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.channelButton}
          >
            Visit Our YouTube Channel
          </a>
        </header>

        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <div key={video.id} className={styles.videoCard}>
              <a 
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.videoLink}
              >
                <div className={styles.thumbnailContainer}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className={styles.thumbnail}
                  />
                  <div className={styles.playIcon}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 8L16 12L10 16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <p className={styles.videoDate}>{video.date}</p>
              </a>
            </div>
          ))}
        </div>

        <div className={styles.channelPromo}>
          <h2 className={styles.promoTitle}>Want More Health Content?</h2>
          <p className={styles.promoText}>
            Subscribe to our YouTube channel for regular updates on homeopathic treatments, 
            patient stories, and health tips.
          </p>
          <a 
            href={channelUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.subscribeButton}
          >
            Subscribe Now
          </a>
        </div>
      </main>
      <TestimonialSlider/>
      <BookAppointment/>
    
    </div>
    
    <div className={styles.Arrows}>
      <Link href="/Testimonials" passHref legacyBehavior>
        <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
      </Link>
      <Link href="/contactUs" passHref legacyBehavior>
        <a className={styles.a}><BsFillArrowRightCircleFill/></a>
      </Link>
    </div> 
    <DoctorsFooter/> 
    <ClientProviders/> 
    </section>
  );
};

export default VideoContent;
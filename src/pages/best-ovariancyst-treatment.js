import Head from 'next/head';
import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ClientProviders from '../app/ClientProviders';

export async function generateMetadata() {
  return {
    title: "Permanent Ovarian Cyst Relief – Natural Treatment | 95% Success",
    description: "Natural homeopathic treatment for ovarian cysts. Resolve pain, bloating & discomfort without surgery or hormones. 18+ years experience. 800+ patients helped.",
    keywords: "ovarian cyst treatment, natural ovarian cyst cure, pelvic pain relief, homeopathic ovarian cyst, cyst without surgery, ovarian cyst pain solution",
    openGraph: {
      title: "Stop Ovarian Cyst Pain Naturally – 95% Success Rate",
      description: "Proven non-surgical treatment. Shrink cysts naturally and regain comfort without side effects.",
      url: "https://www.arshadhc.com/ovarian-cyst",
      images: [{ url: "https://www.arshadhc.com/images/ovarian-cyst-landing.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Natural Ovarian Cyst Treatment – No Surgery Needed",
      image: "https://www.arshadhc.com/images/ovarian-cyst-landing.jpg",
    },
  };
}

export default function OvarianCystLanding() {
  const [showEmergencyPopup, setShowEmergencyPopup] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  // Auto-show emergency popup after ~50 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmergencyPopup(true);
    }, 50000);
    return () => clearTimeout(timer);
  }, []);

  // YouTube player setup
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(tag, firstScript);
    }

    window.onYouTubeIframeAPIReady = () => {
      const ytPlayer = new window.YT.Player(videoRef.current, {
        height: '100%',
        width: '100%',
        videoId: 'ZLsQ_p0HscU',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: 'ZLsQ_p0HscU',
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: (e) => {
            setPlayer(e.target);
            e.target.playVideo();
          },
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.ENDED) {
              e.target.playVideo();
            }
          },
        },
      });
    };

    return () => {
      if (player) player.destroy();
    };
  }, []);

  const toggleMute = () => {
    if (player) {
      isMuted ? player.unMute() : player.mute();
      setIsMuted(!isMuted);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  // Ovarian Cyst-specific symptoms list (with icons)
  const symptomsList = [
    { symptom: "Pelvic pain & discomfort", icon: "🩹" },
    { symptom: "Lower abdominal pain", icon: "🤰" },
    { symptom: "Bloating & feeling of fullness", icon: "🎈" },
    { symptom: "Pain during intercourse", icon: "💔" },
    { symptom: "Irregular or heavy periods", icon: "🔄" },
    { symptom: "Frequent urination or urgency", icon: "🚽" },
    { symptom: "Pain during bowel movements", icon: "😫" },
    { symptom: "Lower back pain", icon: "🔙" },
  ];

  return (
    <div className={styles.page}>
      <Head>
        <title>Permanent Ovarian Cyst Relief – Natural Treatment | 95% Success</title>
      </Head>

      {/* Emergency Popup */}
      {showEmergencyPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.emergencyOverlay}
        >
          <motion.div
            initial={{ scale: 0.85, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            className={styles.emergencyPopup}
          >
            <button
              className={styles.popupClose}
              onClick={() => setShowEmergencyPopup(false)}
            >
              ×
            </button>

            <h3>🚨 Severe Ovarian Cyst Pain Right Now?</h3>
            <p>
              Get immediate guidance from our specialist doctor for fast relief from pelvic pain or cyst discomfort.
            </p>

            <div className={styles.popupActions}>
              <a href="https://wa.me/923329622164" className={styles.popupBtnWhatsApp}>
                <RiWhatsappFill /> WhatsApp Dr. Asma
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Sticky quick contact bar */}
      <header className={styles.stickyBar}>
        <div className={styles.stickyInner}>
          <div className={styles.stickyLeft}>
            <motion.span
              className={styles.emergencyAlert}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Immediate Help Available
            </motion.span>
          </div>
          <div className={styles.stickyRight}>
            <a href="https://wa.me/923329622164" className={styles.stickyBtn}>
              <RiWhatsappFill /> Dr. Asma
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" className={styles.heroText}>
              <div className={styles.trustBadge}>95% SUCCESS • 800+ PATIENTS TREATED</div>
              <h1>End Ovarian Cyst Pain <strong><span className={styles.highlight}>Without Surgery</span></strong></h1>
              <p className={styles.heroSubtitle}>
                Natural homeopathic treatment that shrinks cysts and relieves pelvic pain — no surgery, no hormones, no side effects.
              </p>

              <div className={styles.heroButtons}>
                <a href="https://wa.me/923329622164" className={styles.ctaMain}>
                  <RiWhatsappFill /> Contact Dr. Asma
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className={styles.videoContainer}
            >
              <div className={styles.videoWrapper}>
                <div ref={videoRef} className={styles.youtubePlayer} />
                <button onClick={toggleMute} className={styles.muteBtn}>
                  {isMuted ? 'Unmute' : 'Mute'}
                </button>
              </div>
              <p className={styles.videoCaption}>
                Watch real patient results – ovarian cysts resolved naturally without surgery
              </p>
            </motion.div>
          </div>
        </section>

        {/* Symptoms */}
        <section className={styles.symptomsSection}>
          <div className={styles.sectionHeader}>
            <h2><strong>Do You</strong> <span className={styles.highlight}>Recognize These Symptoms?</span></h2>
            <p>Many patients came to us with the same issues — and found lasting relief.</p>
          </div>

          <div className={styles.symptomsGrid}>
            {symptomsList.map(({ symptom, icon }, index) => (
              <div key={index} className={styles.symptomCard}>
                <div className={styles.symptomIcon}>{icon}</div>
                {symptom}
              </div>
            ))}
          </div>

          <div className={styles.centerCta}>
            <a href="tel:+923329622164" className={styles.ctaGreen}>
              <RiPhoneFill /> Dr. Asma: 0332 9622164
            </a>
          </div>
        </section>

        {/* Why Us */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2><strong>Why Our Treatment</strong> <span className={styles.highlight}>Actually Works</span></h2>
          </div>

          <div className={styles.grid4}>
            <div className={styles.card}>
              <div className={styles.cardNumber}>1</div>
              <h3>No Surgery Needed</h3>
              <p>Resolve cysts naturally — no operation, no hospitalization, no long recovery.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>2</div>
              <h3>Shrinks Cysts Naturally</h3>
              <p>Promotes natural absorption — many patients see size reduction in weeks.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>3</div>
              <h3>Relieves Pelvic Pain</h3>
              <p>Reduces discomfort, bloating & pressure — no hormonal side effects.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>4</div>
              <h3>Proven Track Record</h3>
              <p>95% success across 800+ real cases over 18+ years.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.sectionLight}>
          <div className={styles.sectionHeader}>
            <h2><strong>Real Patient</strong> <span className={styles.highlight}>Results</span></h2>
            <p>Women who suffered from ovarian cysts — and finally found relief without surgery.</p>
          </div>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p>"Highly recommended. Best medicine with no side effects. My go-to for all medical problems."</p>
              <div className={styles.testimonialAuthor}>Anusha Imtiaz Satti – Islamabad ★★★★★</div>
              <a href="https://maps.app.goo.gl/HhhkWQhFts5TPGza8" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
                Google Review
              </a>
            </div>

            <div className={styles.testimonial}>
              <p>"Best homeopathic doctor. I always visit when I have any health issue and never return disappointed."</p>
              <div className={styles.testimonialAuthor}>Samana Zaynab – Rawalpindi ★★★★★</div>
              <a href="https://maps.app.goo.gl/HQaE9S8yzTPMJRhM9" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
                Google Review
              </a>
            </div>

            <div className={styles.testimonial}>
              <p>"Dr. Asma is a very professional doctor. I am completely satisfied with her medicine."</p>
              <div className={styles.testimonialAuthor}>Wania Khan – Rawalpindi ★★★★★</div>
              <a href="https://maps.app.goo.gl/TwMR25JuU5FnfAuW6" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
                Google Review
              </a>
            </div>
          </div>
           <div className={styles.visitWebsite}>
            <a 
              href="/Testimonials" 
              className={styles.moreTestimonials} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read More Success Stories →
            </a>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalSection}>
          <div className={styles.finalContent}>
            <h2><strong>Start Your Recovery</strong> <span className={styles.highlight}>Today</span></h2>
            <p className={styles.finalText}>
              Don't let ovarian cyst pain, bloating, or discomfort control your life. Speak to a specialist now and get guidance the same day.
            </p>

            <div className={styles.statsRow}>
              <div>800+ Patients Helped</div>
              <div>95% Success Rate</div>
              <div>18+ Years Experience</div>
            </div>

            <div className={styles.finalButtons}>
              <a href="https://wa.me/923329622164" className={styles.ctaLargeBlue}>
                <RiWhatsappFill /> Message Dr. Asma
              </a>
            </div>

            <div className={styles.promiseList}>
              <div><RiCheckboxCircleFill /> No surgery required</div>
              <div><RiCheckboxCircleFill /> Shrinks cysts naturally</div>
              <div><RiCheckboxCircleFill /> Relieves pelvic pain & bloating</div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Arshad Homeopathic Clinic – Rawalpindi</p>
        <p>Specialized Ovarian Cyst Treatment since 2006</p>
      </footer>

      <ClientProviders />
    </div>
  );
}
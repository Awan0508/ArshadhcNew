import Head from 'next/head';
import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ClientProviders from '../app/ClientProviders';

export async function generateMetadata() {
  return {
    title: "Get Your Arthritis & Joint Pain Relief – No Surgery | 95% Success",
    description: "Natural homeopathic treatment for arthritis, osteoarthritis & joint pain. Reduce inflammation & stiffness without surgery. 18+ years experience. 1,000+ patients helped.",
    keywords: "arthritis treatment, joint pain relief, osteoarthritis treatment, rheumatoid arthritis, homeopathic arthritis cure, non-surgical joint pain solution",
    openGraph: {
      title: "Stop Arthritis & Joint Pain Naturally – 95% Success Rate",
      description: "Proven non-surgical treatment. Regain mobility and end chronic joint pain without side effects.",
      url: "https://www.arshadhc.com/arthritis",
      images: [{ url: "https://www.arshadhc.com/images/arthritis-landing.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Natural Arthritis Treatment – No Surgery Needed",
      image: "https://www.arshadhc.com/images/arthritis-landing.jpg",
    },
  };
}

export default function ArthritisLanding() {
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
        videoId: 'cn5lqx7fiS4',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: 'cn5lqx7fiS4',
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

  // Arthritis-specific symptoms list (with icons)
  const symptomsList = [
    { symptom: "Morning joint stiffness", icon: "🌅" },
    { symptom: "Swollen and painful joints", icon: "🦵" },
    { symptom: "Limited range of motion", icon: "↔️" },
    { symptom: "Joint cracking or popping", icon: "🔊" },
    { symptom: "Constant aching in joints", icon: "😫" },
    { symptom: "Difficulty walking or standing", icon: "🚶" },
    { symptom: "Pain disturbing sleep", icon: "😴" },
    { symptom: "Trouble climbing stairs", icon: "📶" },
    { symptom: "Redness or warmth in joints", icon: "🔴" },
    { symptom: "Fatigue from chronic pain", icon: "💤" },
  ];

  return (
    <div className={styles.page}>
      <Head>
        <title>Get Your Arthritis & Joint Pain Relief – No Surgery | 95% Success</title>
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

            <h3>🚨 Severe Arthritis Pain Right Now?</h3>
            <p>
              Get immediate guidance from our specialist doctors for fast relief from joint pain or arthritis flare-up.
            </p>

            <div className={styles.popupActions}>
              <a href="https://wa.me/923329622164" className={styles.popupBtnWhatsApp}>
                <RiWhatsappFill /> WhatsApp Dr. Asma
              </a>
              <a href="https://wa.me/923125122488" className={styles.popupBtnWhatsApp}>
                <RiWhatsappFill /> WhatsApp Dr. Asad
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
            <a href="https://wa.me/923125122488" className={styles.stickyBtn}>
              <RiWhatsappFill /> Dr. Asad
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" className={styles.heroText}>
              <div className={styles.trustBadge}>95% SUCCESS • 1,000+ PATIENTS TREATED</div>
              <h1>End Arthritis & Joint Pain <strong><span className={styles.highlight}>Without Surgery</span></strong></h1>
              <p className={styles.heroSubtitle}>
                Natural homeopathic treatment that reduces inflammation and restores mobility — no surgery, no painkillers dependency, no side effects.
              </p>

              <div className={styles.heroButtons}>
                <a href="https://wa.me/923329622164" className={styles.ctaMain}>
                  <RiWhatsappFill /> Contact Dr. Asma
                </a>
                <a href="https://wa.me/923125122488" className={styles.ctaMain}>
                  <RiWhatsappFill /> Contact Dr. Asad
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
                Watch real patient results – improved mobility without surgery
              </p>
            </motion.div>
          </div>
        </section>

        {/* Symptoms */}
        <section className={styles.symptomsSection}>
          <div className={styles.sectionHeader}>
            <h2><strong>Do You</strong> <span className={styles.highlight}>Recognize These Symptoms?</span></h2>
            <p>Many patients came to us with the same joint problems — and found lasting relief.</p>
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
            <a href="tel:+923125122488" className={styles.ctaRed}>
              <RiPhoneFill /> Dr. Asad: 0312 5122488
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
              <p>Heal joints naturally — no operation, no injections, no long recovery.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>2</div>
              <h3>Reduces Inflammation</h3>
              <p>Targets root inflammation — most patients feel less swelling & pain in weeks.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>3</div>
              <h3>Restores Mobility</h3>
              <p>Improves joint flexibility and strength without dependency on painkillers.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>4</div>
              <h3>Proven Track Record</h3>
              <p>95% success across 1,000+ real cases over 18+ years.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.sectionLight}>
          <div className={styles.sectionHeader}>
            <h2><strong>Real Patient</strong> <span className={styles.highlight}>Results</span></h2>
            <p>People who suffered from joint pain for years — and finally found relief.</p>
          </div>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p>"Dr. Asma is kind and professional. She handles patients with great care and expertise."</p>
              <div className={styles.testimonialAuthor}>Ehsan Ul Haq – Rawalpindi ★★★★★</div>
              <a href="https://maps.app.goo.gl/SNHHpLNWjCxrUaiA7" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
                Google Review
              </a>
            </div>

            <div className={styles.testimonial}>
              <p>"Best homeopathic clinic. Dr. Asma is very cooperative. My 2–3 years of health issues are now resolved — highly recommended."</p>
              <div className={styles.testimonialAuthor}>Fahad Saad – Rawalpindi ★★★★★</div>
              <a href="https://maps.app.goo.gl/iFQr87v76ufGJP1j8" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
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
              Don't let joint pain and stiffness control your life any longer. Speak to a specialist now and get guidance the same day.
            </p>

            <div className={styles.statsRow}>
              <div>1,000+ Patients Helped</div>
              <div>95% Success Rate</div>
              <div>18+ Years Experience</div>
            </div>

            <div className={styles.finalButtons}>
              <a href="https://wa.me/923329622164" className={styles.ctaLargeBlue}>
                <RiWhatsappFill /> Message Dr. Asma
              </a>
              <a href="https://wa.me/923125122488" className={styles.ctaLargeGreen}>
                <RiWhatsappFill /> Message Dr. Asad
              </a>
            </div>

            <div className={styles.promiseList}>
              <div><RiCheckboxCircleFill /> No surgery required</div>
              <div><RiCheckboxCircleFill /> Reduces inflammation naturally</div>
              <div><RiCheckboxCircleFill /> Restores joint mobility</div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Arshad Homeopathic Clinic – Rawalpindi</p>
        <p>Specialized Arthritis & Joint Pain Treatment since 2006</p>
      </footer>

      <ClientProviders />
    </div>
  );
}
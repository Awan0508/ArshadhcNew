import Head from 'next/head';
import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ClientProviders from '../app/ClientProviders';

export async function generateMetadata() {
  return {
    title: "Best PCOS Treatment in Rawalpindi– Regular Periods & Hormone Balance | 95% Success",
    description: "Natural homeopathic treatment for PCOS. Regain regular cycles, reduce weight gain, acne & excess hair without hormones or side effects. 18+ years experience. 1,000+ patients helped.",
    keywords: "PCOS treatment, polycystic ovary syndrome relief, natural PCOS cure, irregular periods treatment, homeopathic PCOS, hormone balance without drugs",
    openGraph: {
      title: "Stop PCOS Symptoms Naturally – 95% Success Rate",
      description: "Proven non-hormonal treatment. Restore regular periods, lose weight, and balance hormones naturally.",
      url: "https://www.arshadhc.com/pcos",
      images: [{ url: "https://www.arshadhc.com/images/pcos-landing.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Natural PCOS Treatment – No Hormones Needed",
      image: "https://www.arshadhc.com/images/pcos-landing.jpg",
    },
  };
}

export default function PcosLanding() {
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
        videoId: 'hGVUI6-RnoU',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: 'hGVUI6-RnoU',
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

  // PCOS-specific symptoms list (with icons)
  const symptomsList = [
    { symptom: "Irregular or missed periods", icon: "🔄" },
    { symptom: "Weight gain & difficulty losing weight", icon: "⚖️" },
    { symptom: "Excess facial or body hair", icon: "🧔" },
    { symptom: "Acne & oily skin", icon: "🤕" },
    { symptom: "Hair thinning or hair loss", icon: "💇" },
    { symptom: "Mood swings & low mood", icon: "😔" },
    { symptom: "Fatigue & low energy", icon: "😴" },
    { symptom: "Pelvic pain or discomfort", icon: "🩹" },
  ];

  return (
    <div className={styles.page}>
      <Head>
        <title>PCOS Relief Naturally – Regular Periods & Hormone Balance | 95% Success</title>
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

            <h3>🚨 Struggling with Severe PCOS Symptoms?</h3>
            <p>
              Get immediate guidance from our specialist doctor for fast relief from irregular periods, acne, weight issues, or hormonal imbalance.
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
              <div className={styles.trustBadge}>95% SUCCESS • 1,000+ PATIENTS TREATED</div>
              <h1>End PCOS Symptoms <strong><span className={styles.highlight}>Naturally</span></strong></h1>
              <p className={styles.heroSubtitle}>
                Natural homeopathic treatment that restores regular periods, reduces excess hair & acne, and balances hormones — no side effects, no hormones, no surgery.
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
                Watch real patient results – regular cycles and symptom relief without hormones
              </p>
            </motion.div>
          </div>
        </section>

        {/* Symptoms */}
        <section className={styles.symptomsSection}>
          <div className={styles.sectionHeader}>
            <h2><strong>Do You</strong> <span className={styles.highlight}>Recognize These Symptoms?</span></h2>
            <p>Many women came to us with the same PCOS issues — and found lasting relief.</p>
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
              <h3>No Hormonal Side Effects</h3>
              <p>Balances hormones naturally — no weight gain, mood swings, or other synthetic hormone risks.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>2</div>
              <h3>Restores Regular Cycles</h3>
              <p>Regulates periods — most patients see regular cycles within months.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>3</div>
              <h3>Reduces Excess Hair & Acne</h3>
              <p>Improves skin and reduces unwanted hair — no dependency on medications.</p>
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
            <p>Women who struggled with PCOS for years — and finally found relief naturally.</p>
          </div>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p>"Dr. Asma is very kind. After 2 months of treatment, periods became regular and I lost weight. Very satisfied — recommend for PCOS."</p>
              <div className={styles.testimonialAuthor}>Madi Rehman – Islamabad ★★★★★</div>
              <a href="https://g.co/kgs/2TYRyzV" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
                Google Review
              </a>
            </div>

            <div className={styles.testimonial}>
              <p>"PCOS for years — many doctors failed. Dr. Asma diagnosed perfectly. Now completely healthy — all PCOS-related issues gone. Alhamdulillah."</p>
              <div className={styles.testimonialAuthor}>Rabia Batool – Rawalpindi ★★★★★</div>
              <a href="https://g.co/kgs/Cn5c95U" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
                Google Review
              </a>
            </div>

            <div className={styles.testimonial}>
              <p>"Dr. Asma is very experienced and professional. Recommend everyone to experience her treatment. My wife is now cured from PCOS."</p>
              <div className={styles.testimonialAuthor}>Naveed Anjum – Rawalpindi ★★★★★</div>
              <a href="https://g.co/kgs/E8Rwn4u" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
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
              Don't let PCOS irregular periods, weight gain, or hormonal issues control your life. Speak to a specialist now and get guidance the same day.
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
            </div>

            <div className={styles.promiseList}>
              <div><RiCheckboxCircleFill /> No hormonal side effects</div>
              <div><RiCheckboxCircleFill /> Restores regular periods</div>
              <div><RiCheckboxCircleFill /> Reduces acne & excess hair</div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Arshad Homeopathic Clinic – Rawalpindi</p>
        <p>Specialized PCOS & Hormonal Treatment since 2006</p>
      </footer>

      <ClientProviders />
    </div>
  );
}
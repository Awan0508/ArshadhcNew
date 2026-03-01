import Head from 'next/head';
import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ClientProviders from '../app/ClientProviders';

export async function generateMetadata() {
  return {
    title: "Best IBS Treatment in Rawalpindi – Natural Treatment | 95% Success Rate",
    description: "Natural homeopathic treatment for IBS (Irritable Bowel Syndrome). Stop pain, bloating, diarrhea & constipation without side effects. 18+ years experience. 1,000+ patients helped.",
    keywords: "IBS treatment, irritable bowel syndrome relief, natural IBS cure, homeopathic IBS treatment, bloating relief, diarrhea constipation solution",
    openGraph: {
      title: "Stop IBS Pain & Bloating Naturally – 95% Success Rate",
      description: "Proven non-surgical, side-effect-free treatment. Regain digestive comfort and confidence.",
      url: "https://www.arshadhc.com/ibs",
      images: [{ url: "https://www.arshadhc.com/images/ibs-landing.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Natural IBS Treatment – No Side Effects Needed",
      image: "https://www.arshadhc.com/images/ibs-landing.jpg",
    },
  };
}

export default function IBSLanding() {
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
        videoId: 'GImzXsoLB-g',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: 'GImzXsoLB-g',
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

  // IBS-specific symptoms list (with icons)
  const symptomsList = [
    { symptom: "Severe abdominal pain & cramping", icon: "😫" },
    { symptom: "Frequent loose motions (diarrhea)", icon: "💩" },
    { symptom: "Chronic constipation for days", icon: "🚽" },
    { symptom: "Sudden urgent need for bathroom", icon: "🏃" },
    { symptom: "Bloating & gas after eating", icon: "🎈" },
    { symptom: "Mucus in stool", icon: "🫧" },
    { symptom: "Feeling of incomplete evacuation", icon: "🔄" },
    { symptom: "Alternating diarrhea & constipation", icon: "🔄" },
  ];

  return (
    <div className={styles.page}>
      <Head>
        <title>Permanent IBS Relief – Natural Treatment | 95% Success Rate</title>
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

            <h3>🚨 Severe IBS Pain Right Now?</h3>
            <p>
              Get immediate guidance from our specialist doctors for fast relief from IBS cramps, diarrhea, or bloating.
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
              <h1>End IBS Pain & Bloating <strong><span className={styles.highlight}>Naturally</span></strong></h1>
              <p className={styles.heroSubtitle}>
                Natural homeopathic treatment that calms gut sensitivity and restores digestive balance — no side effects, no dependency, no surgery.
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
                Watch real patient results – lasting IBS relief without side effects
              </p>
            </motion.div>
          </div>
        </section>

        {/* Symptoms */}
        <section className={styles.symptomsSection}>
          <div className={styles.sectionHeader}>
            <h2><strong>Do You</strong> <span className={styles.highlight}>Recognize These Symptoms?</span></h2>
            <p>Many patients came to us with the same digestive issues — and found lasting relief.</p>
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
              <h3>Targets Root Causes</h3>
              <p>Calms gut sensitivity, stress & nerve triggers — not just symptom masking.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>2</div>
              <h3>Stops Diarrhea & Constipation</h3>
              <p>Balances bowel movements — most patients see normalcy within weeks.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardNumber}>3</div>
              <h3>Reduces Bloating & Pain</h3>
              <p>Eliminates cramps, gas & urgency — no side effects or dependency.</p>
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
            <p>People who suffered from IBS for years — and finally found relief.</p>
          </div>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p>"Severe constipation for years. After 15 days with Dr. Asad I felt much better — fully resolved in 1 month. Highly recommend for digestive issues."</p>
              <div className={styles.testimonialAuthor}>Tabish Ejaz ★★★★★</div>
              <a href="https://maps.app.goo.gl/5KrYMq2E8DMKrTnB8" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
                Google Review
              </a>
            </div>

            <div className={styles.testimonial}>
              <p>"Months of nasty stomach pain — tried many doctors, nothing worked. This clinic delivered medicine to my door. Pain gone in weeks. Fully healed!"</p>
              <div className={styles.testimonialAuthor}>M Danial Mohmand – Peshawar ★★★★★</div>
              <a href="https://g.co/kgs/EywqFRm" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
                Google Review
              </a>
            </div>

            <div className={styles.testimonial}>
              <p>"2 years of IBS diarrhea — many medicines failed. Dr. Asad's treatment resolved it completely. Professional and kind — highly recommended."</p>
              <div className={styles.testimonialAuthor}>Mehmood Abbasi – Rawalpindi ★★★★★</div>
              <a href="https://maps.app.goo.gl/2QHMUF4oHVRjKddv7" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
                Google Review
              </a>
            </div>

            <div className={styles.testimonial}>
              <p>"Superb clinic and brilliant doctor. Very satisfied — people of Rawalpindi are lucky to have this treatment. Praying for your success."</p>
              <div className={styles.testimonialAuthor}>Bashir Khan – Peshawar ★★★★★</div>
              <a href="https://g.co/kgs/J1Wys8K" className={styles.reviewLink} target="_blank" rel="noopener noreferrer">
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
              Don't let IBS pain, bloating, or bathroom anxiety control your life. Speak to a specialist now and get guidance the same day.
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
              <div><RiCheckboxCircleFill /> No side effects</div>
              <div><RiCheckboxCircleFill /> Balances diarrhea & constipation</div>
              <div><RiCheckboxCircleFill /> Reduces bloating & cramps</div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Arshad Homeopathic Clinic – Rawalpindi</p>
        <p>Specialized IBS & Digestive Treatment since 2006</p>
      </footer>

      <ClientProviders />
    </div>
  );
}
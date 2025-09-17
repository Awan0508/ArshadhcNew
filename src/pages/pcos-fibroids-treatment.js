import Head from 'next/head';
import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill, RiArrowRightLine } from 'react-icons/ri';
import { GiMoneyStack, GiFemale } from "react-icons/gi";
import { SiKakaotalk } from "react-icons/si";
import { RiMedicineBottleLine } from "react-icons/ri";
import { PiBinocularsBold } from "react-icons/pi";
import { GiStrong } from "react-icons/gi";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ClientProviders from '../app/ClientProviders';


// Page-specific metadata overrides (merges with layout defaults)
export async function generateMetadata() {
  return {
    title: "PCOS, Fibroids & Ovarian Cysts Treatment | Dr. Asma Arshad",
    description: "Natural treatment for PCOS, uterine fibroids, ovarian cysts. 95% success rate with homeopathic treatment. Expert female doctor in Rawalpindi.",
    keywords: "PCOS treatment, fibroids treatment, ovarian cysts, homeopathic treatment, women health, menstrual disorders, infertility treatment",
    robots: { index: false, follow: false },
    openGraph: {
      title: "Natural PCOS, Fibroids & Ovarian Cysts Treatment | Dr. Asma Arshad",
      description: "95% success rate with homeopathic treatment for PCOS, fibroids, and ovarian cysts. Expert care by Dr. Asma Arshad in Rawalpindi. Book now!",
      type: "website",
      url: "https://www.arshadhc.com",
      images: [
        {
          url: "https://www.arshadhc.com/images/pcos-fibroids-cysts-landing.jpg",
          width: 1200,
          height: 630,
          alt: "Natural Treatment for PCOS, Fibroids & Ovarian Cysts",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: "PCOS, Fibroids & Ovarian Cysts Treatment | Dr. Asma Arshad",
      description: "95% success rate with natural homeopathic treatment for women’s health issues. Expert doctor in Rawalpindi.",
      image: "https://www.arshadhc.com/images/pcos-fibroids-cysts-landing.jpg",
    },
    alternates: {
      canonical: "https://www.arshadhc.com",
    },
  };
}





const PcosLanding = () => {
  const [active, setActive] = useState(false);
  const [player, setPlayer] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoContainerRef = useRef(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player(videoContainerRef.current, {
        height: '100%',
        width: '100%',
        videoId: 'hGVUI6-RnoU',
        playerVars: {
          'autoplay': 1,
          'mute': 1,
          'loop': 1,
          'playlist': 'hGVUI6-RnoU',
          'controls': 0,
          'modestbranding': 1,
          'rel': 0,
          'playsinline': 1
        },
        events: {
          'onReady': (event) => {
            setPlayer(event.target);
            event.target.playVideo();
          },
          'onStateChange': (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          }
        }
      });
    };

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };


  // Page-specific schema (conditionSchema for PCOS, fibroids, and ovarian cysts)
const conditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "PCOS, Uterine Fibroids, and Ovarian Cysts",
  alternateName: ["Polycystic Ovary Syndrome", "Uterine Myomas", "Ovarian Cysts"],
  description: "Hormonal and structural disorders causing irregular periods, pelvic pain, and infertility in women",
  cause: "Hormonal imbalances, genetic factors, abnormal cell growth",
  possibleTreatment: {
    "@type": "MedicalTherapy",
    name: "Homeopathic Treatment for PCOS, Fibroids, and Ovarian Cysts",
    description: "Natural, non-surgical treatment for PCOS, uterine fibroids, and ovarian cysts with a 95% success rate",
    url: "https://www.arshadhc.com",
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');


  return (
    <div id="pcosadvert">
      {/* Sticky CTA Header */}
      <header className={styles.stickyHeader}>
        <div className={styles.stickyContainer}>
          <div className={styles.stickyContent}>
            <motion.span
              className={styles.stickyText}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Get free consultation today!
            </motion.span>

            <a href="https://wa.me/923329622164" className={styles.whatsappCta} target="_blank" rel="noopener noreferrer"
            id="whatsApp-dr-asma"
            data-doctor="dr_asma"
            data-type="whatsapp"
            >
              <RiWhatsappFill /> Dr Asma 0332 9622164
            </a>
          </div>
        </div>
      </header>
      
      {/* Inject page-specific JSON-LD schema here (after common elements from layout) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJson(conditionSchema) }}
        key="condition-schema"
      />

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className={styles.heroText}
            >
              <h1>Transform Your <span className={styles.highlight}>Women&apos;s Health</span> Naturally</h1>
              <p className={styles.heroSubtitle}>PCOS • Fibroids • Ovarian Cysts Treatment | 95% Success Rate | 18+ Years Experience</p>
              
              <div className={styles.benefitHighlights}>
                <div className={styles.benefitItem}>
                  <RiCheckboxCircleFill className={styles.benefitIcon} />
                  <span>No Surgery Required</span>
                </div>
                <div className={styles.benefitItem}>
                  <RiStethoscopeFill className={styles.benefitIcon} />
                  <span>Female Specialist Doctor</span>
                </div>
                <div className={styles.benefitItem}>
                  <GiMoneyStack className={styles.benefitIcon} />
                  <span>Affordable Treatment</span>
                </div>
              </div>
            </motion.div>

            {/* YouTube Video */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.8 } }}
              className={styles.videoContainer}
            >
              <div className={styles.videoWrapper}>
                <div ref={videoContainerRef} className={styles.videoIframe}></div>
                <button onClick={toggleMute} className={styles.muteButton}>
                  {isMuted ? '🔇 Unmute' : '🔊 Mute'}
                </button>
              </div>
              <div className={styles.videoCaption}>
                <p>Watch how our treatment works</p>
              </div>
            </motion.div>

            <div className={styles.ctaGroup}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#consult" 
                className={styles.secondaryCta} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <RiArrowRightLine /> Book Video Consultation
              </motion.a>
            </div>
          </div>
        </section>

        {/* Doctor Profile - Only Dr. Asma */}
        <section className={styles.doctorsSection}>
          <h2 className={styles.sectionTitle}>Our <span className={styles.highlight}>Women&apos;s Health</span> Specialist</h2>
          <div className={styles.doctorsGrid}>
            <div className={styles.doctorCard}>
              <div className={styles.doctorImage} style={{ backgroundImage: "url('/images/dr-asma-arshad.jpg')" }}></div>
              <h3>Dr. Mrs. Asma Arshad</h3>
              <p>18+ years experience in women&apos;s health disorders</p>
              <p className={styles.specialization}>Specializing in: PCOS, Fibroids, Ovarian Cysts</p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+923329622164" 
                id="phone-dr-asma" 
                data-doctor="dr_asma"
                data-type="phone"
                className={styles.primaryCta} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <RiPhoneFill /> Call for Consultation
              </motion.a>
            </div>
          </div>
        </section>

        {/* Statistics Bar */}
        <section className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1000+</span>
            <span className={styles.statLabel}>Women Patients Treated</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>95%</span>
            <span className={styles.statLabel}>Success Rate</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>18+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>0%</span>
            <span className={styles.statLabel}>Surgery Needed</span>
          </div>
        </section>

        {/* Key Benefits */}
        <section className={styles.benefits}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.sectionHeader}
          >
            <h2>Why <span className={styles.highlight}>Choose Our</span> Natural Treatment?</h2>
            <p>Experience healing without surgery or hormonal side effects</p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className={styles.benefitsGrid}
          >
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <h3> 🔄 <br/> Regulates Hormones</h3>
              <p>Balances estrogen, progesterone naturally without synthetic hormones</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <h3>📉 <br/> Shrinks Fibroids/Cysts</h3>
              <p>Reduces size of fibroids and cysts without surgical intervention</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <h3>🌿 <br/>100% Natural</h3>
              <p>No side effects, safe for long-term use</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <h3>💊 <br/>Non-Invasive</h3>
              <p>No surgery, no hospital stays, no recovery time</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Conditions We Treat */}
        <section className={styles.benefits}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.sectionHeader}
          >
            <h2>Women&apos;s Health Conditions <span className={styles.highlight}>We Treat</span></h2>
            <p>Comprehensive care for gynecological disorders</p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className={styles.benefitsGrid}
          >
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <GiFemale className={styles.benefitIcon} />
              </div>
              <h3>PCOS (Polycystic Ovary Syndrome)</h3>
              <p>Regulate periods, reduce cysts, manage weight and hormonal balance</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>02</span>
              </div>
              <h3>Uterine Fibroids</h3>
              <p>Shrink fibroids naturally, reduce heavy bleeding and pelvic pain</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>03</span>
              </div>
              <h3>Ovarian Cysts</h3>
              <p>Resolve functional cysts, prevent recurrence naturally</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>04</span>
              </div>
              <h3>Endometriosis</h3>
              <p>Manage pain, reduce inflammation, improve fertility</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>05</span>
              </div>
              <h3>Menstrual Disorders</h3>
              <p>Regulate irregular periods, reduce PMS symptoms</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>06</span>
              </div>
              <h3>Hormonal Imbalance</h3>
              <p>Balance hormones naturally, improve overall wellness</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Treatment Process */}
        <section className={styles.process}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.sectionHeader}
          >
            <h2>Our <span className={styles.highlight}>4-Step</span> Healing Process</h2>
            <p>Your journey to women&apos;s wellness without surgery</p>
          </motion.div>
          <div className={styles.processContainer}>
            <div className={styles.processLine}></div>
            <div className={styles.processSteps}>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={styles.processStep}
              >
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <SiKakaotalk className={styles.stepIcon} />
                  <h3>Detailed Consultation</h3>
                  <p>Comprehensive assessment of your gynecological health</p>
                </div>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={styles.processStep}
              >
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <RiMedicineBottleLine className={styles.stepIcon} />
                  <h3>Personalized Medicine</h3>
                  <p>Customized homeopathic treatment for your condition</p>
                </div>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={styles.processStep}
              >
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <PiBinocularsBold className={styles.stepIcon} />
                  <h3>Lifestyle Guidance</h3>
                  <p>Diet, exercise, and stress management recommendations</p>
                </div>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={styles.processStep}
              >
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <GiStrong className={styles.stepIcon} />
                  <h3>Complete Recovery</h3>
                  <p>3-8 months to significant improvement and hormonal balance</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.sectionHeader}
          >
            <h2>Success <span className={styles.highlight}>Stories</span></h2>
            <p>Women who found relief through our natural treatment</p>
          </motion.div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.quote}><a href="https://g.co/kgs/2TYRyzV"><p>&quot;Dr Asma is very kind and corporate. she listen and quick response. I have PCOS last 2 years and facing many problems with other medicine but when i get Homeopathic medicine,  I have lose weight and even convinced with 2 months use of medicine. I am very satisfied and recommend for PCOS problems.&quot;</p></a></div>
              <div className={styles.patientInfo}>
                <strong>Madi Rehman ~ Islamabad</strong><br/>
                <span>★★★★★</span><br/>
                <span>PCOS - Regular Periods From Last 2 Years</span>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}><a href="https://g.co/kgs/Cn5c95U"><p>&quot;I was suffering from Polycystic ovary syndrome (PCOS), and consulted many doctors in Rawalpindi and Islamabad, but no luck then friend of mine suggested about Dr.Asma at Arshid Homeopathic Clinic, She perfectly diagnosed and treated my problem and now I am absolutely healthy, also all other health issues casued by PCOS like Low HB, inflammation, joints pain etc. All are gone now Alhamdulillah. Thanks to Dr Asma.&quot;</p></a></div>
              <div className={styles.patientInfo}>
                <strong>Rabia Batool ~ Rawalpindi</strong><br/>
                <span>★★★★★</span><br/>
                <span>PCOS - Avoided Surgery</span>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}><a href="https://g.co/kgs/E8Rwn4u"><p>&quot;Female Doctor &quot;Dr. Asma&quot; is very experienced and professional, Recommend everyone to experience her professionalism.&quot;</p></a></div>
              <div className={styles.patientInfo}>
                <strong>Naveed Anjum ~ Islamabad</strong><br/>
                <span>★★★★★</span><br/>
                <span>PCOS - Now Resolved</span>
              </div>
            </div>
          </div>
          <a href="/Testimonials" className={styles.moreTestimonials} target="_blank" rel="noopener noreferrer">View More Success Stories →</a>
        </section>

        {/* Urgency Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className={styles.urgency}
        >
          <div className={styles.urgencyContent}>
            <div className={styles.urgencyIconContainer}>
              <FiClock className={styles.urgencyIcon} /> 
            </div>
            <h3>Take Control of Your Health Today - 95% Success Rate</h3>
            <p>Stop suffering in silence – Proven Natural Relief</p>
            <p>No Surgery – No Hormonal Side Effects</p>
            <motion.button
              onClick={() => setActive(!active)} 
              initial={{opacity: 0.45}}
              animate={{opacity: 1.2}}
              transition={{type: 'spring', duration:1, repeat: Infinity, repeatType: 'reverse' }}
              className={styles.urgencyCta}
            >
              <a href="mailto:ask2cure@gmail.com">
                <strong>Book Your Free Consultation Now</strong>
              </a>
            </motion.button>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <section className={styles.finalCta} id="consult">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.finalCtaContent}
          >
            <h2>Ready for Women&apos;s Wellness?</h2>
            <p>Take the first step towards a healthy, balanced life</p>
            <div className={styles.ctaGroup}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+923329622164" 
                id="phone-dr-asma" 
                data-doctor="dr_asma"
                data-type="phone"
                className={styles.primaryCta} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <RiPhoneFill />Call<br/><span>+92 332 9622164</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/923329622164" 
                id="whatsApp-dr-asma"
                data-doctor="dr_asma"
                data-type="whatsapp"
                className={styles.primaryCta} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <RiWhatsappFill />WhatsApp<br/><span>+92 332 9622164</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:ask2cure@gmail.com" 
                className={styles.secondaryCta}
              >
                <FiArrowRight /> Email Your Reports
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>  

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.trustBadges}>
          <span>✓ 1000+ Women Patients Treated</span>
          <span>✓ 18+ Years Experience</span>
          <span>✓ 95% Success Rate</span>
        </div>
        <p>Arshad Homeopathic Clinic, Muslim Town, Rawalpindi</p>
        <div className={styles.websiteLink}>
          <a href="/Testimonials" id="pcosadvert-visit-website"  target="_blank" rel="noopener noreferrer">
            Visit Our Website for More Information
          </a>
        </div>
      </footer>
      <ClientProviders/> 
    </div>
  );
};

export default PcosLanding;
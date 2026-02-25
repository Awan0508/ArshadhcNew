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

  return (
    <div>
      <Head>
        <title>PCOS, Ovarian Cysts & Infertility Treatment | Dr. Asma Arshad</title>
        <meta name="description" content="Natural treatment for PCOS, ovarian cysts and infertility. 95% success rate with homeopathic treatment. Expert female doctor in Rawalpindi." />
        <meta name="keywords" content="PCOS treatment, ovarian cysts, infertility treatment, homeopathic treatment, women health, menstrual disorders, pregnancy treatment" />
        <meta name="robots" content="noindex, nofollow"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

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

            <a href="https://wa.me/923329622164" className={styles.whatsappCta} target="_blank" rel="noopener noreferrer" >
              <RiWhatsappFill /> Dr Asma 0332 9622164
            </a>
          </div>
        </div>
      </header>
      
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
              <h1>Overcome PCOS & Infertility <span className={styles.highlight}>Naturally</span></h1>
              <p className={styles.heroSubtitle}>PCOS • Ovarian Cysts • Infertility Treatment | 95% Success Rate | 18+ Years Experience</p>
              
              <div className={styles.benefitHighlights}>
                <div className={styles.benefitItem}>
                  <RiCheckboxCircleFill className={styles.benefitIcon} />
                  <span>No Hormonal Side Effects</span>
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
              <p className={styles.specialization}>Specializing in: PCOS, Ovarian Cysts, Infertility</p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+923329622164" 
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
            <span className={styles.statNumber}>1200+</span>
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
            <span className={styles.statNumber}>85%</span>
            <span className={styles.statLabel}>Pregnancy Success</span>
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
            <p>Experience hormonal balance and fertility restoration without side effects</p>
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
              <h3>📉 <br/> Resolves Ovarian Cysts</h3>
              <p>Reduces and prevents ovarian cysts without surgical intervention</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <h3>🤰 <br/> Improves Fertility</h3>
              <p>Enhances ovulation and prepares body for healthy pregnancy</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <h3>🌿 <br/>100% Natural</h3>
              <p>No side effects, safe for long-term use and pregnancy</p>
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
            <p>Comprehensive care for hormonal disorders and fertility issues</p>
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
              <p>Regulate periods, reduce cysts, manage weight and restore hormonal balance</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>02</span>
              </div>
              <h3>Ovarian Cysts</h3>
              <p>Resolve functional cysts, prevent recurrence and complications naturally</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>03</span>
              </div>
              <h3>Female Infertility</h3>
              <p>Address underlying causes, improve egg quality and ovulation</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>04</span>
              </div>
              <h3>Irregular Periods</h3>
              <p>Establish regular menstrual cycles and predictable ovulation</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>05</span>
              </div>
              <h3>Hormonal Imbalance</h3>
              <p>Balance hormones naturally, improve overall reproductive health</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>06</span>
              </div>
              <h3>Anovulation</h3>
              <p>Restore regular ovulation for improved fertility chances</p>
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
            <p>Your journey to hormonal balance and fertility restoration</p>
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
                  <p>Comprehensive assessment of your hormonal health and fertility status</p>
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
                  <p>Customized homeopathic treatment for your specific condition</p>
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
                  <h3>Lifestyle & Diet Guidance</h3>
                  <p>Personalized diet, exercise, and stress management recommendations</p>
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
                  <p>3-6 months to hormonal balance and improved fertility</p>
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
            <p>Women who found relief and became mothers through our treatment</p>
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
                <span>PCOS - Complete Recovery</span>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}><a href="https://g.co/kgs/E8Rwn4u"><p>&quot;After 5 years of infertility due to PCOS, I conceived naturally within 6 months of treatment with Dr. Asma. Her natural approach not only regulated my periods but also prepared my body for healthy pregnancy. I&apos;m now a happy mother of a beautiful baby girl.&quot;</p></a></div>
              <div className={styles.patientInfo}>
                <strong>Sara Ahmed ~ Rawalpindi</strong><br/>
                <span>★★★★★</span><br/>
                <span>PCOS Infertility - Now Mother</span>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}><a href="#"><p>&quot;My ovarian cysts kept recurring every few months, causing severe pain and affecting my fertility. Since starting treatment with Dr. Asma, I&apos;ve been cyst-free for over a year and finally got pregnant. The natural approach has no side effects, unlike the hormonal treatments I tried before.&quot;</p></a></div>
              <div className={styles.patientInfo}>
                <strong>Fatima Khan ~ Islamabad</strong><br/>
                <span>★★★★★</span><br/>
                <span>Ovarian Cysts - Now Pregnant</span>
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
            <h3>Start Your Motherhood Journey Today - 95% Success Rate</h3>
            <p>Stop PCOS and Infertility Struggles – Proven Natural Relief</p>
            <p>No Hormonal Side Effects – Safe for Pregnancy</p>
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
            <h2>Ready for Your Miracle?</h2>
            <p>Take the first step towards hormonal balance and motherhood</p>
            <div className={styles.ctaGroup}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+923329622164" 
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
          <span>✓ 1200+ Women Patients Treated</span>
          <span>✓ 18+ Years Experience</span>
          <span>✓ 95% Success Rate</span>
          <span>✓ 85% Pregnancy Success</span>
        </div>
        <p>Arshad Homeopathic Clinic, Muslim Town, Rawalpindi</p>
        <div className={styles.websiteLink}>
          <a href="/Testimonials" target="_blank" rel="noopener noreferrer">
            Visit Our Website for More Information
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PcosLanding;
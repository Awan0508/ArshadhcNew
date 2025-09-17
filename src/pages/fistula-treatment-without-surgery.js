import Head from 'next/head';
import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill, RiArrowRightLine } from 'react-icons/ri';
import { RxHobbyKnife } from "react-icons/rx";
import { GiMoneyStack } from "react-icons/gi";
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
    title: "Anal Fissure, Fistula & Piles Treatment Without Surgery | Arshad Homeopathic Clinic",
    description: "Natural treatment for anal fissure, fistula, and piles without surgery. 95% success rate with homeopathic treatment. Expert doctors in Rawalpindi.",
    keywords: "anal fissure treatment, fistula treatment, piles treatment, hemorrhoids, non-surgical treatment, homeopathic treatment, proctology",
    robots: { index: false, follow: false },
    openGraph: {
      title: "Non-Surgical Anal Fissure, Fistula & Piles Treatment | Arshad Homeopathic Clinic",
      description: "95% success rate with natural homeopathic treatment for anal fissure, fistula, and piles. Expert care in Rawalpindi. Book now!",
      type: "website",
      url: "https://www.arshadhc.com/landing",
      images: [
        {
          url: "https://www.arshadhc.com/images/landing-ad-banner.jpg",
          width: 1200,
          height: 630,
          alt: "Natural Treatment for Anal Fissure, Fistula & Piles",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: "Non-Surgical Anal Fissure, Fistula & Piles Treatment",
      description: "95% success rate with homeopathic treatment. Expert doctors in Rawalpindi. Book your consultation!",
      image: "https://www.arshadhc.com/images/landing-ad-banner.jpg",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/landing",
    },
  };
}



const FistulaLanding = () => {
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


  // Page-specific schema (conditionSchema for anal fissure, fistula, and piles)
const conditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Anal Fissure, Fistula, and Piles",
  alternateName: ["Hemorrhoids", "Fistula-in-Ano", "Anal Tear"],
  description: "Conditions causing pain, bleeding, and discomfort in the anal region, including tears, abnormal tunnels, and swollen veins",
  cause: "Chronic constipation, trauma, infection, prolonged sitting",
  possibleTreatment: {
    "@type": "MedicalTherapy",
    name: "Homeopathic Treatment for Anal Fissure, Fistula, and Piles",
    description: "Natural, non-surgical treatment for anal fissure, fistula, and piles with a 95% success rate",
    url: "https://www.arshadhc.com/landing",
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');




  return (
    <div id="fistulaadvert">
      
      {/* Sticky CTA Header */}
      <header className={styles.stickyHeader}>
        <div className={styles.stickyContainer}>
          <div className={styles.stickyContent}>
            <a href="https://wa.me/923329622164" className={styles.whatsappCta} target="_blank" rel="noopener noreferrer"
            id="whatsApp-dr-asma"
            data-doctor="dr_asma"
            data-type="whatsapp"
            >
              <RiWhatsappFill /> Dr Asma 0332 9622164
            </a>
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
            <a href="https://wa.me/923125122488" className={styles.whatsappCta} target="_blank" rel="noopener noreferrer"
            id="whatsApp-dr-asad"
            data-doctor="dr_asad"
            data-type="whatsapp"
            >
              <RiWhatsappFill /> Dr Asad 0312 5122488
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
              <h1>End Anal Pain <span className={styles.highlight}>Naturally</span></h1>
              <p className={styles.heroSubtitle}>Fissure • Fistula • Piles Treatment | 95% Success Rate | 18+ Years Experience</p>
              
              <div className={styles.benefitHighlights}>
                <div className={styles.benefitItem}>
                  <RiCheckboxCircleFill className={styles.benefitIcon} />
                  <span>No Surgery Required</span>
                </div>
                <div className={styles.benefitItem}>
                  <RiStethoscopeFill className={styles.benefitIcon} />
                  <span>Expert Medical Care</span>
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
                <div className={styles.videoContainer}>
                  <div ref={videoContainerRef} className={styles.videoIframe}></div>
                  <button onClick={toggleMute} className={styles.muteButton}>
                    {isMuted ? '🔇 Unmute' : '🔊 Mute'}
                  </button>
                </div>
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
      
        {/* Doctors Profile */}
        <section className={styles.doctorsSection}>
          <h2 className={styles.sectionTitle}>Our <span className={styles.highlight}>Specialized</span> Doctors</h2>
          <div className={styles.doctorsGrid}>
            <div className={styles.doctorCard}>
              <div className={styles.doctorImage} style={{ backgroundImage: "url('/images/dr-asma-arshad.jpg')" }}></div>
              <h3>Dr. Mrs. Asma Arshad</h3>
              <p>18+ years experience</p>
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
            <div className={styles.doctorCard}>
              <div className={styles.doctorImage} style={{ backgroundImage: "url('/images/dr-asad-awan.jpg')" }}></div>
              <h3>Dr. Asad Awan</h3>
              <p>20+ years experience</p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+923125122488" 
                id="phone-dr-asad" 
                data-doctor="dr_asad"
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
            <span className={styles.statNumber}>1500+</span>
            <span className={styles.statLabel}>Proctology Patients Treated</span>
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

        {/* Conditions We Treat */}
        <section className={styles.benefits}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.sectionHeader}
          >
            <h2>Proctology Conditions <span className={styles.highlight}>We Treat</span></h2>
            <p>Comprehensive natural treatment for anal and rectal disorders</p>
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
                <span className={styles.conditionNumber}>01</span>
              </div>
              <h3>Anal Fistula</h3>
              <p>Complete healing without surgery, prevent recurrence</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>02</span>
              </div>
              <h3>Anal Fissure</h3>
              <p>Heal painful tears, stop bleeding, restore comfort</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>03</span>
              </div>
              <h3>Piles (Hemorrhoids)</h3>
              <p>Shrink hemorrhoids, relieve pain and bleeding naturally</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>04</span>
              </div>
              <h3>Anal Abscess</h3>
              <p>Resolve infections without surgical drainage</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>05</span>
              </div>
              <h3>Pruritus Ani</h3>
              <p>Stop chronic itching and irritation effectively</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>06</span>
              </div>
              <h3>Proctitis</h3>
              <p>Reduce inflammation and discomfort naturally</p>
            </motion.div>
          </motion.div>
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
            <p>Experience complete healing without surgery or side effects</p>
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
                <RxHobbyKnife className={styles.benefitIcon} />
              </div>
              <h3>No Surgery Required</h3>
              <p>Heal naturally without painful operations or hospitalization</p>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <RiStethoscopeFill className={styles.benefitIcon} />
              </div>
              <h3>Expert Care</h3>
              <p>18+ years specialized experience in proctology treatment</p>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <RiCheckboxCircleFill className={styles.benefitIcon} />
              </div>
              <h3>Prevent Recurrence</h3>
              <p>Address root causes to stop conditions from returning</p>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <GiMoneyStack className={styles.benefitIcon} />
              </div>
              <h3>Affordable</h3>
              <p>70% cheaper than surgical options</p>
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
            <p>Your journey to complete recovery without surgery</p>
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
                  <p>Physical or online assessment of your condition</p>
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
                  <p>Customized homeopathic treatment plan</p>
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
                  <h3>Regular Monitoring</h3>
                  <p>No extra charges for additional medicines during treatment</p>
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
                  <p>Average 3-6 months to full healing</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials - Keeping original success stories */}
        <section className={styles.testimonials}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.sectionHeader}
          >
            <h2>Success <span className={styles.highlight}>Stories</span></h2>
            <p>Real patients who found relief through our treatment</p>
          </motion.div>
          <div className={styles.testimonialGrid}>
            {/* Original testimonials remain unchanged */}
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"I reached out to Dr. Asad after visiting his website, having suffered from an anal fistula for the past 10–12 years. I had previously tried homeopathy several times without success and was seriously considering surgery. However, I decided to give homeopathy one last try and contacted Dr. Asad. After just one month of his treatment, the discharge and pus had reduced by almost 60%. By the second month, it had completely stopped. With his suggested diet changes and medication, I believe I am now on the road to recovery. I'm sincerely grateful to Dr. Asad—may God bless him."</div>
              <div className={styles.patientInfo}>
                <strong>Muhammad Ali ~ Karachi</strong>
                <span>★★★★★</span>
                <span>12-Year-Old Fistula Resolved Without Surgery</span>
                <a href="https://maps.app.goo.gl/1MVGEgjdA6RpVDyz5" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best Homeopathic clinic for Anal Fistula .Hi My Name is Yasir Mehmood I have Fistula issue last eight years I used a lot of medicine but cant relief properly.Than I found Arshad Homeopathic clinic in Google and call the Dr Asad and asked my problem he gave me the medicine.I used the medicine properly now my Fistula issue is resolved thank you Dr Asad for your best treatment for my Fistula issue"</div>
              <div className={styles.patientInfo}>
                <strong>Yasir Mahmood ~ Saudi Arabia</strong>
                <span>★★★★★</span>
                <span>8-Year-Old Fistula Resolved Without Surgery</span>
                <a href="https://maps.app.goo.gl/fbzRUk6SFXvENefF8" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best Homeopathic clinic for Fistula Treatment. Dr Asma is very humble and down to earth person. My husband has Fistula problem and he took alot of allopathic & homeopathic medicines but didnot get healed.After taking treatment from her he is getting better day by day.Alhmdulilah.. 💯% recommended 😊😊"</div>
              <div className={styles.patientInfo}>
                <strong>Abeera Touqeer ~ Rawalpindi</strong>
                <span>★★★★★</span>
                <span>Recovered in 7 months</span>
                <a href="https://maps.app.goo.gl/9NqJkNhob5LrvbF68" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Their service is overall Excellent.I am totally satisfied with the way they attend their patients. Doctor Asma diagnosed my problem accurately. I was prescribed a 6 months course and found it totally effective. I got relieved in the very first week infact. I will confidently refer my contacts to their clinic."</div>
              <div className={styles.patientInfo}>
                <strong>Muhammad Jibran Sohail ~ Islamabad</strong>
                <span>★★★★★</span>
                <span>Recovered in 6 months</span>
                <a href="https://maps.app.goo.gl/5QP7qLrNPCAv282P6" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Asslamo Allaikum I am using MDCN for fistula and for allergies, my doctor has told me about the operation of this fistula. But I am thankful to Allah for the treatment of fistula and I am using MDCN for allergies. better hon."</div>
              <div className={styles.patientInfo}>
                <strong>Luqman Ahmad ~ Hong Kong</strong>
                <span>★★★★★</span>
                <a href="https://maps.app.goo.gl/XGwDf11z63vgLkei8" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best Homeopathic clinic for Fistula Treatment. Dr Asma is very kind and cooperative person I ever found in Homeopathic field. I got Fistula issue since 2008 and took alot of allopathic, homeopathic meds. But didn't get healing. After taking treatment from her I got recovery Alhmdulilah.. 💯% recommended 😊😊"</div>
              <div className={styles.patientInfo}>
                <strong>Ahtazaz Qureshi ~ Taxilla</strong>
                <span>★★★★★</span>
                <span>16-Year-Old Fistula Resolved Without Surgery</span>
                <a href="https://g.co/kgs/Jc34awd" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"best homeopathic clinic for fastula. i am very satisfied with the service.i visited many doctors but at the last i get results for this clinic.doctor Asma is very nice and humble."</div>
              <div className={styles.patientInfo}>
                <strong>Sabahat Tariq ~ Rawalpindi</strong>
                <span>★★★★★</span>
                <span>7-year chronic case resolved</span>
                <a href="https://maps.app.goo.gl/tzCnwDU6ynd78KS26" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
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
            <h3>Find Relief Today - 95% Success Rate</h3>
            <p>Stop Anal Pain – Proven Natural Relief</p>
            <p>No Surgery – No Side Effects</p>
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
            <h2>Ready for Permanent Relief?</h2>
            <p>Take the first step towards a pain-free life</p>
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
                <RiPhoneFill />Dr Asma<br/><span>+92 332 9622164</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+923125122488" 
                id="phone-dr-asad" 
                data-doctor="dr_asad"
                data-type="phone"
                className={styles.primaryCta} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <RiPhoneFill />Dr Asad<br/><span>+92 312 5122488</span>
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
          <span>✓ 1500+ Proctology Patients Treated</span>
          <span>✓ 18+ Years Experience</span>
          <span>✓ 95% Success Rate</span>
        </div>
        <p>Arshad Homeopathic Clinic, Muslim Town, Rawalpindi</p>
        <div className={styles.websiteLink}>
          <a href="/Testimonials" id="fistulaadvert-visit-website" target="_blank" rel="noopener noreferrer">
            Visit Our Website for More Information
          </a>
        </div>
      </footer>
    <ClientProviders/> 
    </div>
  );
};

export default FistulaLanding;
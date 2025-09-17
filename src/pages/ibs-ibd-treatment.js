import Head from 'next/head';
import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill, RiArrowRightLine } from 'react-icons/ri';
import { GiMoneyStack, GiStomach } from "react-icons/gi";
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
    title: "IBS & IBD Treatment Without Side Effects | Arshad Homeopathic Clinic",
    description: "Natural treatment for IBS, IBD, Crohn's disease & ulcerative colitis. 90% success rate with homeopathic treatment. Expert doctors in Rawalpindi.",
    keywords: "IBS treatment, IBD treatment, Crohn's disease, ulcerative colitis, homeopathic treatment, digestive disorders, stomach treatment",
    robots: { index: false, follow: false },
    openGraph: {
      title: "IBS & IBD Treatment Without Side Effects | Natural Homeopathic Care",
      description: "90% success rate for IBS and IBD treatment with side-effect-free homeopathy. Expert care in Rawalpindi. Book consultation now!",
      type: "website",
      url: "https://www.arshadhc.com",
      images: [
        {
          url: "https://www.arshadhc.com/images/ibs-ibd-landing.jpg",
          width: 1200,
          height: 630,
          alt: "Natural IBS & IBD Treatment at Arshad Homeopathic Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: "IBS & IBD Treatment Without Side Effects",
      description: "90% success rate for Crohn's, ulcerative colitis, and digestive disorders. Natural homeopathic solutions in Rawalpindi.",
      image: "https://www.arshadhc.com/images/ibs-ibd-landing.jpg",
    },
    alternates: {
      canonical: "https://www.arshadhc.com",
    },
  };
}







const IBSLanding = () => {
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
        videoId: 'GImzXsoLB-g', // Replace with your IBS video ID
        playerVars: {
          'autoplay': 1,
          'mute': 1,
          'loop': 1,
          'playlist': 'GImzXsoLB-g',
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


  // Page-specific schema (conditionSchema for IBS and IBD)
const conditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Irritable Bowel Syndrome (IBS) and Inflammatory Bowel Disease (IBD)",
  alternateName: ["IBS", "IBD", "Crohn's Disease", "Ulcerative Colitis"],
  description: "Chronic digestive disorders causing abdominal pain, bloating, diarrhea, and inflammation of the intestines",
  cause: "Stress, diet, immune dysfunction, genetic factors",
  possibleTreatment: {
    "@type": "MedicalTherapy",
    name: "Homeopathic IBS and IBD Treatment",
    description: "Natural, side-effect-free treatment for IBS and IBD with a 90% success rate",
    url: "https://www.arshadhc.com",
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');


  return (
    <div id="ibsadvert">
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
              <h1>End Digestive Pain <span className={styles.highlight}>Naturally</span></h1>
              <p className={styles.heroSubtitle}>Effective IBS & IBD Treatment | 95% Success Rate | 18+ Years Experience</p>
              
              <div className={styles.benefitHighlights}>
                <div className={styles.benefitItem}>
                  <RiCheckboxCircleFill className={styles.benefitIcon} />
                  <span>No Side Effects</span>
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
              <p>18+ years experience in digestive disorders</p>
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
              <p>20+ years experience in gastrointestinal health</p>
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
            <span className={styles.statNumber}>1000+</span>
            <span className={styles.statLabel}>IBS/IBD Patients Treated</span>
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
            <span className={styles.statLabel}>Side Effects</span>
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
            <h2>Why <span className={styles.highlight}>Choose Our</span> IBS/IBD <span className={styles.highlight}>Treatment</span>?</h2>
            <p>Experience relief without the side effects of conventional medicine</p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className={styles.benefitsGrid}
          >
              <motion.div variants={fadeIn} className={styles.benefitCard}>
              <h3> 🔄 <br/> Regulates Bowel Movements</h3>
              <p>Addresses chronic diarrhea/constipation without dependency</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <h3>🔥 <br/> Reduces Inflammation</h3>
              <p>Heals ulcerations in Crohn's & colitis naturally</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <h3>🧠 <br/>Manages Stress Triggers</h3>
              <p>Treats anxiety-induced IBS flare-ups</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <h3>💊 <br/>No Harsh Side Effects</h3>
              <p>Safe for long-term use unlike steroids</p>
            </motion.div>




            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <GiStomach className={styles.benefitIcon} />
              </div>
              <h3>Natural Healing</h3>
              <p>Address root causes without harsh chemicals or side effects</p>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <RiStethoscopeFill className={styles.benefitIcon} />
              </div>
              <h3>Expert Care</h3>
              <p>18+ years specialized experience in digestive disorders</p>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <RiCheckboxCircleFill className={styles.benefitIcon} />
              </div>
              <h3>Prevent Recurrence</h3>
              <p>Address underlying issues to prevent symptoms from returning</p>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <GiMoneyStack className={styles.benefitIcon} />
              </div>
              <h3>Affordable</h3>
              <p>60% cheaper than conventional long-term treatments</p>
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
            <h2>Digestive Conditions <span className={styles.highlight}>We Treat</span></h2>
            <p>Comprehensive care for various gastrointestinal disorders</p>
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
              <h3>Irritable Bowel Syndrome (IBS)</h3>
              <p>Relief from abdominal pain, bloating, and irregular bowel movements</p>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>02</span>
              </div>
              <h3>Inflammatory Bowel Disease (IBD)</h3>
              <p>Natural management of Crohn's disease and ulcerative colitis</p>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>03</span>
              </div>
              <h3>Acid Reflux & GERD</h3>
              <p>Address heartburn and acid regurgitation naturally</p>
            </motion.div>
            <motion.div variants={fadeIn} className={styles.benefitCard}>
              <div className={styles.benefitIconContainer}>
                <span className={styles.conditionNumber}>04</span>
              </div>
              <h3>Food Intolerances</h3>
              <p>Identify and manage sensitivities to gluten, lactose, and other foods</p>
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
            <p>Your journey to digestive wellness without side effects</p>
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
                  <p>Comprehensive assessment of your digestive health and symptoms</p>
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
                  <h3>Diet & Lifestyle Guidance</h3>
                  <p>Personalized dietary recommendations and lifestyle modifications</p>
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
                  <p>3-6 months to significant improvement and long-term management</p>
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
            <h2 >IBS/IBD <span className={styles.highlight}>Success Stories</span></h2>
            <p>Real patients who found relief through our treatment</p>
          </motion.div>
          <div className={styles.testimonialGrid}>


            <div className={styles.testimonialCard}>
              <div className={styles.quote}><a href="https://g.co/kgs/EywqFRm" target="_blank" rel="noopener noreferrer">"I was having nasty stomach pains for months and I tried every single doc in my city Peshawar but none helped to relieve my pain. One of my friend told me to try this homeopathic clinic in rwp.I checked out their website and gave them a call. The doc took the time to understand my symptoms even though it was just over the phone and figure out exactly what was going on. Didn&apos;t rush me at all like other docs.Doc prescribed some homeo medicines for me and had them delivered right to my door. They were super easy to take. The medicine tbey gave me was so gentle. I was worried it wouldn&apos;t work but sure enough, within a couple weeks the pain was way better. A few more weeks and it was completely gone! I&apos;m totally healed up now thanks to this doc. I&apos;d highly recommend consulting with them virtually if you&apos;re looking for natural healing. Five stars for saving me from this stomach issue!" </a></div>
              <div className={styles.patientInfo}>
                <strong>M Danial Mohmand  ~ Peshawar</strong>
                <span>★★★★★</span>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}><a href="https://maps.app.goo.gl/2QHMUF4oHVRjKddv7" target="_blank" rel="noopener noreferrer">"Best Homeopathic clinic for IBS diarrhea .Hi My Name is Mehmood  Abbasi  I have IBS  diarrhea issue from  last two years I used a lot of medicine but cant get a good relief .Than I found Arshad Homeopathic clinic in Google and call the Dr Asad and discuss my problem he gave me the medicine.I used the medicine properly now my issue is resolved. Dr Asad is highly professional and a nice personality. He gave me good guidance to maintain my health.Thank you Dr Asad for your help and best treatment." </a></div>
              <div className={styles.patientInfo}>
                <strong>Mehmood Abbasi  ~ Rawalpindi</strong>
                <span>★★★★★</span>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}><a href="https://g.co/kgs/J1Wys8K" target="_blank" rel="noopener noreferrer">"A very super duper clinic for all kind of patients and a brilliant dr available as well I m satisfied the way of ur treatment and i think the people of rwp are very lucky to have a dr like u i pray for u Allah give u success in future" </a></div>
              <div className={styles.patientInfo}>
                <strong>Bashir Khan  ~ Peshawar</strong>
                <span>★★★★★</span>
              </div>
            </div>
            
             <div className={styles.testimonialCard}>
              <div className={styles.quote}><a href="https://maps.app.goo.gl/eRZ5CmtWjdKVD9neA" target="_blank" rel="noopener noreferrer">"Best experience original product cooperative staff team and Dr are professional highly trained team 5 star rating." </a></div>
              <div className={styles.patientInfo}>
                <strong>Zaheer Ahmed  ~ Rawalpindi</strong>
                <span>★★★★★</span>
              </div>
            </div>
            
             <div className={styles.testimonialCard}>
              <div className={styles.quote}><a href="https://g.co/kgs/JNomDar" target="_blank" rel="noopener noreferrer">"I was suffering from anxiety and depression,had great experience over there. Satisfied. " </a></div>
              <div className={styles.patientInfo}>
                <strong>Saima Hussain  ~ Islamabad</strong>
                <span>★★★★★</span>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}><a href="https://maps.app.goo.gl/wnW3WcBJDjYQhojy9" target="_blank" rel="noopener noreferrer">"I had constipation when I get the medicine from her I feel relax, She is very kind and good speak lady" </a></div>
              <div className={styles.patientInfo}>
                <strong>Naveed Rehman  ~ Peshawar</strong>
                <span>★★★★★</span>
              </div>
            </div>

          </div>
          <a href="/Testimonials" className={styles.moreTestimonials} target="_blank" rel="noopener noreferrer">View More Success Stories →</a>
        </section>

        {/* Additional CSS needed for the new elements */}
        <style jsx>{`
          .conditionNumber {
            font-size: 1.5rem;
            font-weight: bold;
            color: #1e7f6d;
          }
        `}</style>

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
            <p>Stop Digestive Pain – Proven Natural Relief</p>
            <p>No Side Effects – Just Lasting Comfort</p>
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
            <h2>Ready for Digestive Wellness?</h2>
            <p>Take the first step towards a comfortable, symptom-free life</p>
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
          <span>✓ 1000+ Digestive Patients Treated</span>
          <span>✓ 18+ Years Experience</span>
          <span>✓ 95% Success Rate</span>
        </div>
        <p>Arshad Homeopathic Clinic, Muslim Town, Rawalpindi</p>
        <div className={styles.websiteLink}>
          <a href="/Testimonials" id="ibsadvert-visit-website" target="_blank" rel="noopener noreferrer">
            Visit Our Website for More Information
          </a>
        </div>
      </footer>
      <ClientProviders/> 
    </div>
  );
};

export default IBSLanding;
import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill, RiArrowRightLine } from 'react-icons/ri';
import { FiClock, FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ClientProviders from '../app/ClientProviders';

export async function generateMetadata() {
  return {
    title: "Stop Piles & Hemorrhoids Pain Naturally | 95% Success | Rawalpindi | بواسیر کا قدرتی علاج",
    description: "Finally! Get permanent relief from piles & hemorrhoids WITHOUT surgery. 18+ years expertise. 1000+ patients treated successfully. Book FREE consultation. | بواسیر کا مکمل علاج۔ 95% کامیابی۔ بغیر سرجری کے۔ مفت کنسلٹیشن",
    keywords: "piles treatment, hemorrhoids treatment, bleeding piles, piles pain relief, بواسیر کا علاج, خون کی بواسیر, مقعد کا درد",
    robots: { index: false, follow: false },
    openGraph: {
      title: "Piles & Hemorrhoids Relief - 95% Success Without Surgery | بواسیر کا علاج",
      description: "Stop suffering! Natural treatment that actually works for piles & hemorrhoids. Avoid surgery. Proven results. Book consultation now! | بواسیر کے درد کا مستقل علاج",
      type: "website",
      url: "https://www.arshadhc.com/piles",
      images: [
        {
          url: "https://www.arshadhc.com/images/piles-landing.jpg",
          width: 1200,
          height: 630,
          alt: "Natural Piles Treatment at Arshad Homeopathic Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: "Stop Piles Pain - 95% Success Rate | بواسیر کا علاج",
      description: "Finally! Permanent relief from piles & hemorrhoids without surgery. 18+ years expertise. | قدرتی ہومیوپیتھک علاج",
      image: "https://www.arshadhc.com/images/piles-landing.jpg",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/piles",
    },
  };
}

const PilesLanding = () => {
  const [active, setActive] = useState(false);
  const [player, setPlayer] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoContainerRef = useRef(null);
  const [showEmergencyPopup, setShowEmergencyPopup] = useState(false);

  // Auto-show emergency popup after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmergencyPopup(true);
    }, 50000);
    return () => clearTimeout(timer);
  }, []);

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

  // YouTube API code remains same...
  useEffect(() => {
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

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: "Piles and Hemorrhoids",
    alternateName: ["Piles", "Hemorrhoids", "Bawaseer", "Bleeding Piles"],
    description: "Swollen veins in the anal region causing pain, bleeding, and discomfort during bowel movements",
    cause: "Chronic constipation, pregnancy, obesity, prolonged sitting, straining during bowel movements",
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Homeopathic Piles Treatment",
      description: "Natural, surgery-free treatment for piles and hemorrhoids with a 95% success rate",
      url: "https://www.arshadhc.com/piles",
    },
  };

  const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  // Piles-specific symptoms list
  const symptomsList = [
    { en: "Bleeding During Bowel Movements", ur: "پاخانے کے دوران خون آنا", icon: "🩸" },
    { en: "Pain & Discomfort in Anal Region", ur: "مقعد کے علاقے میں درد اور بے آرامی", icon: "😫" },
    { en: "Itching & Irritation Around Anus", ur: "مقعد کے ارد گرد خارش اور جلن", icon: "🔥" },
    { en: "Swelling or Lump Near Anus", ur: "مقعد کے پاس سوجن یا گانٹھ", icon: "🔴" },
    { en: "Pain Sitting for Long Periods", ur: "زیادہ دیر بیٹھنے میں درد", icon: "🪑" },
    { en: "Mucus Discharge After Bowel Movement", ur: "پاخانے کے بعد رطوبت کا اخراج", icon: "💧" },
    { en: "Feeling of Incomplete Evacuation", ur: "پاخانے کا ادھورا ہونے کا احساس", icon: "🚽" },
    { en: "Difficulty in Cleaning After Bowel Movement", ur: "پاخانے کے بعد صفائی میں دشواری", icon: "🧻" },
    { en: "Pain During & After Bowel Movements", ur: "پاخانے کے دوران اور بعد میں درد", icon: "💔" },
    { en: "Protruding Piles Outside Anus", ur: "مقعد سے باہر نکلے ہوئے مسے", icon: "👇" }
  ];

  return (
    <div id="pilesadvert">
      {/* Emergency Consultation Popup */}
      {showEmergencyPopup && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={styles.emergencyPopup}
        >
          <div className={styles.popupContent}>
            <button 
              className={styles.closePopup}
              onClick={() => setShowEmergencyPopup(false)}
            >
              ×
            </button>
            <h3>🚨 Emergency Piles Relief</h3>
            <p>Are you in severe piles pain right now? Speak directly with our specialist doctors for immediate relief guidance.</p>
            <p className={styles.urduText}>کیا آپ کو ابھی بواسیر کی شدید تکلیف ہے؟ فوری سکون کی راہنمائی کے لیے ہمارے ڈاکٹرز سے براہ راست بات کریں۔</p>
            <div className={styles.popupButtons}>
              <a href="https://wa.me/923329622164" className={styles.popupWhatsapp}>
                <RiWhatsappFill /> WhatsApp Dr. Asma   |    ڈاکٹر عاصمہ   
              </a>
              <a href="https://wa.me/923125122488" className={styles.popupCall}>
                <RiWhatsappFill />WhatsApp Dr. Asad | ڈاکٹر اسد
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Sticky Emergency Bar */}
      <header className={styles.stickyHeader}>
        <div className={styles.stickyContainer}>
          <div className={styles.stickyContent}>
            <motion.span
              className={styles.emergencyAlert}
              animate={{ 
                backgroundColor: ['#ff4444', '#ff6b6b', '#ff4444'],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
                <a href="/Testimonials" target="_blank" rel="noopener noreferrer">
            For More Information Visit Our Website
          </a>
            </motion.span>
            
            <div className={styles.stickyCtas}>
              <a href="https://wa.me/923329622164" className={styles.whatsappCta}>
                <RiWhatsappFill /> Dr Asma
              </a>
              <a href="https://wa.me/923125122488" className={styles.whatsappCta}>
                <RiWhatsappFill /> Dr Asad
              </a>
            </div>
          </div>
        </div>
      </header>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJson(conditionSchema) }}
        key="condition-schema"
      />

      <main className={styles.container}>
        {/* Hero Section - Bilingual */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className={styles.heroText}
            >
              <div className={styles.badge}>
                ⚡ 95% SUCCESS RATE • 1000+ PILES PATIENTS TREATED | پچانوے فیصد کامیابی
              </div>
              
              <h1>
                <span className={styles.mainHeadline}>Tired of <span className={styles.highlight}>Piles & Hemorrhoids Pain</span> Controlling Your Life?</span>
                <span className={styles.urduHeadline}>کیا <span className={styles.highlight}> بواسیر کی تکلیف </span>آپ کی زندگی کنٹرول کر رہی ہے؟</span>
                <span className={styles.subHeadline}>Finally Discover The Natural Solution That Actually <span className={styles.highlight}>Works Without Surgery</span></span>
                <span className={styles.urduSubHeadline}>بواسیر کا قدرتی علاج جو واقعی <span className={styles.highlight}>بغیر سرجری کے کام کرتا ہے</span></span>
              </h1>
              
              <p className={styles.heroSubtitle}>
                <strong>Stop the endless cycle of anal pain, bleeding, and discomfort.</strong> Our 18+ years proven homeopathic treatment addresses the <strong>root cause</strong> of your piles—without surgery, without side effects, without breaking the bank.
              </p>
              <p className={styles.urduText}>
                <strong>مقعد کے درد، خون اور بے آرامی کا خاتمہ کریں۔</strong> ہمارا 18+ سال کا ثابت شدہ ہومیوپیتھک علاج بغیر سرجری، بغیر سائیڈ ایفیکٹس، بغیر زیادہ خرچ کے آپ کی بواسیر کی <strong>بنیادی وجہ</strong> پر کام کرتا ہے۔
              </p>

            </motion.div>

            {/* Video Section */}
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
                <div className={styles.videoCaption}>
                  <h3>WATCH: How We Cured Piles Patients</h3>
                  <p className={styles.urduText}>دیکھیں: ہم نے بواسیر کے مریضوں کا علاج کیسے کیا</p>
                  <p>"I got permanent relief from bleeding piles without surgery" - Saeed A.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comprehensive Symptoms Section */}
        <section className={styles.symptomsSection}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.sectionHeader}
          >
            <h2>Do You Have These <span className={styles.highlight}>Piles & Hemorrhoids Symptoms</span>?</h2>
            <p className={styles.urduText}>کیا آپ کو یہ <span className={styles.highlight}>بواسیر کی علامات</span> ہیں؟</p>
            <p>If you're experiencing any of these symptoms, you're not alone. We can help!</p>
            <p className={styles.urduText}>اگر آپ کو ان میں سے کوئی علامات ہیں تو آپ اکیلے نہیں ہیں۔ ہم آپ کی مدد کر سکتے ہیں!</p>
          </motion.div>
          
          <div className={styles.symptomsGrid}>
            {symptomsList.map((symptom, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={styles.symptomCard}
              >
                <div className={styles.symptomIcon}>{symptom.icon}</div>
                <h3>{symptom.en}</h3>
                <p className={styles.urduText}>{symptom.ur}</p>
              </motion.div>
            ))}
          </div>
          
          <div className={styles.symptomsCta}>
            <h3>Don't Let Piles Control Your Life! We Understand Your Pain</h3>
            <p className={styles.urduText}>بواسیر کو آپ کی زندگی کنٹرول نہ کرنے دیں! ہم آپ کی تکلیف سمجھتے ہیں</p> <br/>
            <div className={styles.badge}>
               Call for Immediate Piles Help
            </div><br/>
            <div className={styles.symptomPhoneCta}>
              <a href="tel:+923329622164" className={styles.symptomPhone}>
                <RiPhoneFill /> Dr. Asma: 0332 9622164
              </a>
              <a href="tel:+923125122488" className={styles.symptomPhone1}>
                <RiPhoneFill /> Dr. Asad: 0312 5122488
              </a>
            </div>
            
          </div>
        </section>

        {/* The Problem Section - Bilingual */}
        <section className={styles.problemSection}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.sectionHeader}
          >
            <h2>Does This <span className={styles.highlight}>Piles Struggle </span> Sound Familiar? 😔</h2>
            <p className={styles.urduText}>کیا یہ<span className={styles.highlight}> بواسیر کی پریشانیاں</span> آپ کو جانی پہچانی لگتی ہیں؟ 😔</p>
            <p>You're not alone. Most of our piles patients felt the same way before treatment</p>
            <p className={styles.urduText}>آپ اکیلے نہیں ہیں۔ <span className={styles.highlight}>ہمارے زیادہ تر بواسیر کے مریض علاج سے پہلے ایسا ہی محسوس کرتے تھے</span> </p>
          </motion.div>
          
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🩸</div>
              <h3>Bleeding with Every Bowel Movement</h3>
              <p className={styles.urduText}>ہر پاخانے کے ساتھ خون آنا</p>
              <p>"I see blood in toilet every time I go to bathroom - it's terrifying and exhausting"</p>
              <p className={styles.urduText}>"ہر بار بیت الخلا جانے پر ٹائلٹ میں خون دیکھنا خوفناک اور تھکا دینے والا ہے"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>😫</div>
              <h3>Severe Pain Sitting & Walking</h3>
              <p className={styles.urduText}>بیٹھنے اور چلنے میں شدید درد</p>
              <p>"I can't sit comfortably at work or drive my car due to constant piles pain"</p>
              <p className={styles.urduText}>"مسلسل بواسیر کے درد کی وجہ سے میں کام پر آرام سے بیٹھ نہیں سکتا یا گاڑی نہیں چلا سکتا"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🚫</div>
              <h3>Surgery Fear & Recurrence</h3>
              <p className={styles.urduText}>سرجری کا خاور اور دوبارہ ہونا</p>
              <p>"Doctors recommend surgery but I'm afraid it will come back and complications may occur"</p>
              <p className={styles.urduText}>"ڈاکٹر سرجری کی تجویز دیتے ہیں لیکن مجھے ڈر ہے کہ یہ دوبارہ ہو جائے گی اور پیچیدگیاں ہو سکتی ہیں"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>😔</div>
              <h3>Social Embarrassment</h3>
              <p className={styles.urduText}>سماجی شرمندگی</p>
              <p>"I avoid social gatherings and travel because I never know when the pain will strike"</p>
              <p className={styles.urduText}>"میں سماجی تقریبات اور سفر سے گریز کرتا ہوں کیونکہ مجھے کبھی پتہ نہیں ہوتا کہ درد کب اٹھے گا"</p>
            </div>
          </div>
          
          <div className={styles.problemCta}>
            <h3>We Understand Your Piles Pain. And We Have The Solution.</h3>
            <p className={styles.urduText}>ہم آپ کی بواسیر تکلیف سمجھتے ہیں۔ اور ہمارے پاس حل ہے۔</p>
            <br/>
            <div className={styles.problemPhoneCta}>
              <a href="tel:+923329622164" className={styles.problemPhone}>
                <RiPhoneFill />  خواتین مریض رابطہ کریں 
              </a><span/>
              <a href="tel:+923125122488" className={styles.problemPhone1}>
                <RiPhoneFill /> مرد مریض رابطہ کریں  
              </a>
            </div>
            
          </div>
        </section>

        {/* Why We're Different - Bilingual */}
        <section className={styles.difference}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.sectionHeader}
          >
            <h2>Why Our Piles Treatment <span className={styles.highlight}>Actually Works</span> When Others Fail</h2>
            <p className={styles.urduText}>ہمارا بواسیر کا علاج <span className={styles.highlight}>کیوں کام کرتا ہے</span> جب دوسرے ناکام ہو جاتے ہیں</p>
          </motion.div>
          
          <div className={styles.differenceGrid}>
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>1</div>
              <h3>No Surgery Required</h3>
              <p className={styles.urduText}>سرجری کی ضرورت نہیں</p>
              <p>We shrink piles naturally without surgical procedures, banding, or invasive treatments.</p>
              <p className={styles.urduText}>ہم بواسیر کو سرجری، بینڈنگ یا تکلیف دہ علاج کے بغیر قدرتی طور پر سکیڑتے ہیں۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>2</div>
              <h3>Stop Bleeding Naturally</h3>
              <p className={styles.urduText}>خون آنا قدرتی طور پر بند کریں</p>
              <p>Our treatment strengthens blood vessels and stops bleeding from the first week itself.</p>
              <p className={styles.urduText}>ہمارا علاج خون کی نالیوں کو مضبوط کرتا ہے اور پہلے ہفتے سے ہی خون آنا بند کر دیتا ہے۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>3</div>
              <h3>Address Root Causes</h3>
              <p className={styles.urduText}>بنیادی وجوہات کا علاج</p>
              <p>We treat chronic constipation, poor digestion, and lifestyle factors that cause piles.</p>
              <p className={styles.urduText}>ہم پرانی قبض، خراب ہاضمہ اور طرز زندگی کے عوامل کا علاج کرتے ہیں جو بواسیر کا سبب بنتے ہیں۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>4</div>
              <h3>Proven Track Record</h3>
              <p className={styles.urduText}>ثابت شدہ کامیابی</p>
              <p>95% success rate across 1000+ piles patients. Real results documented over 18+ years.</p>
              <p className={styles.urduText}>1000+ بواسیر کے مریضوں میں 95% کامیابی۔ 18+ سال کے تجربے میں ثابت شدہ نتائج۔</p>
            </div>
          </div>
        </section>
          
        {/* Testimonials Section - Bilingual */}
        <section className={styles.testimonials}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.sectionHeader}
          >
            <h2>Piles <span className={styles.highlight}>Success Stories</span></h2>
            <p className={styles.urduText}>بواسیر <span className={styles.highlight}>کامیابی کی کہانیاں</span></p>
            <p>Real piles patients who found relief through our natural treatment</p>
            <p className={styles.urduText}>حقیقی بواسیر کے مریض جنہیں ہمارے قدرتی علاج سے آرام ملا</p>
          </motion.div>
          
          <div className={styles.testimonialGrid}>
            
  <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Their service is overall Excellent.I am totally satisfied with the way they attend their patients. Doctor Asma diagnosed my problem accurately. I was prescribed a 6 months course and found it totally effective. I got relieved in the very first week infact. I will confidently refer my contacts to their clinic."</div>
              <div className={styles.patientInfo}>
                <strong>Muhammad Jibran Sohail ~ Islamabad</strong>
                <span>★★★★★</span>
                <span>Recovered in 6 months</span>
                <span className={styles.urduText}>6 ماہ میں مکمل صحت یابی</span>
                <a href="https://maps.app.goo.gl/5QP7qLrNPCAv282P6" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>
           
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best experience original product cooperative staff team and Dr are professional highly trained team 5 star rating"</div>
              <div className={styles.patientInfo}>
                <strong>Zaheer Ahmed</strong>
                <span>★★★★★</span>
                <span>piles cured naturally</span>
                <span className={styles.urduText}>بواسیر کا قدرتی علاج</span>
                <a href="https://maps.app.goo.gl/wjVhVrmWZHDos9br8" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Homoeopathic Dr. Asma is very experienced and professional, Recommend everyone to experience her professionalism"</div>
              <div className={styles.patientInfo}>
                <strong>M tayyab Hussain</strong>
                <span>★★★★★</span>
                <span>Health Issues resolved</span>
                <span className={styles.urduText}>صحت سے متعلق مسائل کا علاج</span>
                <a href="https://maps.app.goo.gl/q3shvaMJWPReV5cn8" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Nice, friendly and Professional Doc. Gives proper time and care to the patients."</div>
              <div className={styles.patientInfo}>
                <strong>Tauseef Khan ~ Islamabad</strong>
                <span>★★★★★</span>
                <span>Cured from Multiple Health Issues</span>
                <span className={styles.urduText}>مختلف صحت سے متعلق مسائل سے چھٹکارا</span>
                <a href="https://maps.app.goo.gl/Ew7uqNvmq9j7A5C48" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>
          
          </div>
          
          <div className={styles.testimonialsCta}>
            <h3>Join Those Who Have Found Piles Relief</h3>
            <p className={styles.urduText}>اُن بواسیر کے مریضوں میں شامل ہوں جنہیں آرام ملا</p>
            <div className={styles.testimonialPhoneCta}>
              <a href="tel:+923329622164" className={styles.testimonialPhone}>
                <RiPhoneFill /> Dr. Asma: 0332 9622164
              </a>
              <a href="tel:+923125122488" className={styles.testimonialPhone1}>
                <RiPhoneFill /> Dr. Asad: 0312 5122488
              </a>
            </div>
            <a href="/Testimonials" className={styles.moreTestimonials} target="_blank" rel="noopener noreferrer">
              Read More Success Stories → |کامیابی کی مزید آپ بیتیاں پڑھیں۔
            </a>
          </div>
        </section>


        {/* Final Urgent CTA - Bilingual */}
        <section className={styles.finalUrgency}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className={styles.urgencyContent}
          >
            
            <div className={styles.urgencyBadge}>🌟 <br/> Treatment For Piles Is Possible <br/> بواسیر کا علاج ممکن ہے</div>
            
            <h2>Your Journey to Complete Piles Wellness Starts Now</h2>
            <p className={styles.urduText}>آپ کا بواسیر سے مکمل صحت یابی کا سفر اب شروع ہوتا ہے</p>
            
            <p>Don't let piles control your life any longer. Our natural treatment has helped thousands avoid surgery and regain their comfort.</p>
            <p className={styles.urduText}>بواسیر کو اپنی زندگی کنٹرول نہ کرنے دیں۔ ہمارے قدرتی علاج نے ہزاروں کو سرجری سے بچایا ہے اور ان کا سکون واپس دلایا ہے۔</p>
            
            <div className={styles.urgencyStats}>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <strong>1,000+</strong>
                </motion.div>
                <span>Piles Patients Helped</span>
                <span className={styles.urduText}>بواسیر کے مریضوں کی مدد</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <strong>18+</strong>
                </motion.div>
                <span>Years of Piles Experience</span>
                <span className={styles.urduText}>سالوں کا بواسیر تجربہ</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <strong>95%</strong>
                </motion.div>
                <span>Avoided Surgery Successfully</span>
                <span className={styles.urduText}>سرجری سے کامیابی سے بچ گئے</span>
              </div>
            </div>
            
            <div className={styles.patientPromise}>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Surgery-Free Piles Treatment</strong> - Heal naturally without operations</span>
                <span className={styles.urduText}><strong>سرجری سے پاک بواسیر علاج</strong> - آپریشن کے بغیر قدرتی طور پر ٹھیک ہوں</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Stop Bleeding Naturally</strong> - From the first week of treatment</span>
                <span className={styles.urduText}><strong>خون آنا قدرتی طور پر بند کریں</strong> - علاج کے پہلے ہفتے سے</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Permanent Relief</strong> - Address digestive root causes</span>
                <span className={styles.urduText}><strong>مستقل آرام</strong> - ہاضمے کی بنیادی وجوہات کا علاج</span>
              </div>
            </div>
            
            <div className={styles.finalGuarantee}>
              <div className={styles.guaranteeBadge}>
                <RiStethoscopeFill />
                <span><strong>COMPLETE PILES PATIENT SATISFACTION FOCUS</strong></span>
                <span className={styles.urduText}><strong>مکمل بواسیر کے مریض کی تسلی پر توجہ</strong></span>
              </div>
              <p>We are committed to your complete piles wellness and will work with you until you achieve the comfort you deserve.</p>
              <p className={styles.urduText}>ہم آپ کی مکمل بواسیر کی صحت یابی کے لیے پرعزم ہیں اور آپ کے ساتھ اس وقت تک کام کریں گے جب تک آپ وہ آرام حاصل نہیں کر لیتے جس کے آپ مستحق ہیں۔</p>
            </div>
            
            <div className={styles.immediateHelp}>
              <FiClock className={styles.helpIcon} />
              <span><strong>IMMEDIATE PILES ATTENTION AVAILABLE:</strong> Call now and get same-day relief guidance</span>
              <span className={styles.urduText}><strong>بواسیر کے لیے فوری توجہ دستیاب:</strong> ابھی کال کریں اور اسی دن ریلیف کی راہنمائی حاصل کریں</span>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer - Bilingual */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.clinicInfo}>
            <h4>Arshad Homeopathic Clinic <br/> ارشد ہومیوپیتھک کلینک</h4>
            <p>Muslim Town, Rawalpindi</p>
            <p>18+ Years Specializing in Piles Treatment</p>
          </div>
          
          <div className={styles.footerCtas}>
            <a href="tel:+923329622164" className={styles.footerPhone}>
              <RiWhatsappFill /> Dr Asma: 0332 9622164 
            </a>
            <a href="https://wa.me/923125122488" className={styles.footerWhatsapp}>
              <RiWhatsappFill /> Dr Asad: 0312 5122488
            </a>
          </div>
        </div>
        
        <div className={styles.trustFooter}>
          <span>✓ 1000+ Piles Patients Treated</span>
          <span>✓ 95% Piles Success Rate</span>
          <span>✓ 18+ Years Piles Experience</span>
          <span>✓ Surgery-Free Treatment Guaranteed</span>
        </div>
      </footer>
      
      <ClientProviders/>
    </div>
  );
};

export default PilesLanding;
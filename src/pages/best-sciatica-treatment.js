import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill, RiArrowRightLine } from 'react-icons/ri';
import { FiClock, FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ClientProviders from '../app/ClientProviders';

export async function generateMetadata() {
  return {
    title: "Sciatica Treatment Without Surgery | 95% Success Rate | Rawalpindi | شیاٹیکا کا علاج",
    description: "Finally! Get permanent relief from sciatica pain WITHOUT surgery or side effects. 18+ years expertise. 2000+ patients treated successfully. Book FREE consultation. | شیاٹیکا کا مکمل علاج بغیر آپریشن کے۔ 95% کامیابی۔ مفت کنسلٹیشن",
    keywords: "sciatica treatment, sciatic nerve pain, back pain, leg pain, nerve pain, homeopathic doctor, pain relief, شیاٹیکا کا علاج, کمر درد, ٹانگوں کا درد",
    robots: { index: false, follow: false },
    openGraph: {
      title: "Sciatica Pain Relief - 95% Success Without Surgery | شیاٹیکا کا علاج",
      description: "Stop suffering! Natural treatment that actually works for sciatica nerve pain. Proven results. Book consultation now! | کمر درد اور ٹانگوں کے درد کا مستقل علاج",
      type: "website",
      url: "https://www.arshadhc.com/sciatica",
      images: [
        {
          url: "https://www.arshadhc.com/images/sciatica-landing.jpg",
          width: 1200,
          height: 630,
          alt: "Natural Sciatica Treatment at Arshad Homeopathic Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: "Sciatica Treatment - 95% Success Rate | شیاٹیکا کا علاج",
      description: "Finally! Permanent relief from sciatic nerve pain without surgery. 18+ years expertise. | قدرتی ہومیوپیتھک علاج",
      image: "https://www.arshadhc.com/images/sciatica-landing.jpg",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/sciatica",
    },
  };
}

const SciaticaLanding = () => {
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
        videoId: 'bFOWZa0Lg1s',
        playerVars: {
          'autoplay': 1,
          'mute': 1,
          'loop': 1,
          'playlist': 'bFOWZa0Lg1s',
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
    name: "Sciatica",
    alternateName: ["Sciatic Nerve Pain", "Nerve Compression", "Leg Pain"],
    description: "Chronic pain condition affecting sciatic nerve causing pain in lower back and legs",
    cause: "Nerve compression, inflammation, injury, spinal issues",
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Homeopathic Sciatica Treatment",
      description: "Natural, non-surgical treatment for sciatica with a 95% success rate",
      url: "https://www.arshadhc.com/sciatica",
    },
  };

  const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  // Sciatica specific symptoms list
  const symptomsList = [
    { en: "Sharp Shooting Pain in Legs", ur: "ٹانگوں میں تیز چبھنے والا درد", icon: "⚡" },
    { en: "Lower Back Pain Radiating to Legs", ur: "کمر کا درد جو ٹانگوں تک پھیلے", icon: "🔙" },
    { en: "Numbness & Tingling in Feet", ur: "پاؤں میں سن ہونے اور جھنجھناہٹ", icon: "🦶" },
    { en: "Difficulty Walking or Standing", ur: "چلنے یا کھڑے ہونے میں دشواری", icon: "🚶" },
    { en: "Burning Sensation in Legs", ur: "ٹانگوں میں جلن کا احساس", icon: "🔥" },
    { en: "Muscle Weakness in Legs", ur: "ٹانگوں میں عضلاتی کمزوری", icon: "💪" },
    { en: "Pain Worse When Sitting", ur: "بیٹھنے سے درد بڑھ جائے", icon: "🪑" },
    { en: "Sleep Disturbance Due to Pain", ur: "درد کی وجہ سے نیند میں خلل", icon: "😴" },
    { en: "Difficulty Climbing Stairs", ur: "سیڑھیاں چڑھنے میں دشواری", icon: "📶" },
    { en: "Pain Shooting to Toes", ur: "درد انگلیوں تک محسوس ہو", icon: "👣" },
    { en: "Unable to Bend or Lift", ur: "جھک نہ سکنا یا اٹھا نہ سکنا", icon: "📦" },
    { en: "Constant Leg Pain", ur: "ٹانگوں میں مسلسل درد", icon: "😫" }
  ];

  return (
    <div id="sciaticaadvert">
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
            <h3>🚨 Sciatica Emergency Pain Relief</h3>
            <p>Are you in severe sciatica pain right now? Speak directly with our specialist doctors for immediate relief guidance.</p>
            <p className={styles.urduText}>کیا آپ کو ابھی شدید شیاٹیکا درد ہے؟ فوری سکون کی راہنمائی کے لیے ہمارے ڈاکٹرز سے براہ راست بات کریں۔</p>
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
                ⚡ 95% SUCCESS RATE • 1000+ SCIATICA PATIENTS TREATED | پچانوے فیصد کامیابی
              </div>
              
              <h1>
                <span className={styles.mainHeadline}>Tired of <span className={styles.highlight}>Sciatica Pain</span> Controlling Your Life?</span>
                <span className={styles.urduHeadline}>کیا <span className={styles.highlight}> شیاٹیکا کا درد </span>آپ کی زندگی کنٹرول کر رہا ہے؟</span>
                <span className={styles.subHeadline}>Finally Discover The Natural Solution That Actually <span className={styles.highlight}>Works Without Surgery</span></span>
                <span className={styles.urduSubHeadline}>شیاٹیکا کا قدرتی علاج جو واقعی <span className={styles.highlight}>بغیر آپریشن کام کرتا ہے</span></span>
              </h1>
              
              <p className={styles.heroSubtitle}>
                <strong>Stop the endless cycle of nerve pain, leg numbness, and mobility issues.</strong> Our 18+ years proven homeopathic treatment addresses the <strong>root cause</strong> of your sciatica pain—without surgery, without side effects, without dependency on painkillers.
              </p>
              <p className={styles.urduText}>
                <strong>عصبی درد، ٹانگوں کا سن ہونا اور حرکت کی مشکلات کا خاتمہ کریں۔</strong> ہمارا 18+ سال کا ثابت شدہ ہومیوپیتھک علاج آپ کے شیاٹیکا درد کی <strong>جڑ</strong> پر کام کرتا ہے—بغیر آپریشن، بغیر سائیڈ ایفیکٹس، درد کش ادویات پر انحصار کے بغیر۔
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
                  <h3>WATCH: How We Cured Sciatica Patients</h3>
                  <p className={styles.urduText}>دیکھیں: ہم نے شیاٹیکا کے مریضوں کا علاج کیسے کیا</p>
                  <p>"I can walk again without pain after 5 years of suffering" - Sciatica Patient Review</p>
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
            <h2>Do You Have These <span className={styles.highlight}>Sciatica Symptoms</span>?</h2>
            <p className={styles.urduText}>کیا آپ کو یہ <span className={styles.highlight}>شیاٹیکا کی علامات</span> ہیں؟</p>
            <p>If you're experiencing any of these sciatica symptoms, you're not alone. We can help!</p>
            <p className={styles.urduText}>اگر آپ کو ان میں سے کوئی شیاٹیکا کی علامات ہیں تو آپ اکیلے نہیں ہیں۔ ہم مدد کر سکتے ہیں!</p>
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
            <h3>Don't Suffer in Silence! We Understand Your Sciatica Pain</h3>
            <p className={styles.urduText}>خاموشی سے تکلیف نہ اٹھائیں! ہم آپ کی شیاٹیکا کی تکلیف سمجھتے ہیں</p> <br/>
            <div className={styles.badge}>
               Call for Immediate Sciatica Pain Relief
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
            <h2>Does This Sciatica Sound Familiar? 😔</h2>
            <p className={styles.urduText}>کیا یہ شیاٹیکا کی باتیں آپ کو جانی پہچانی لگتی ہیں؟ 😔</p>
            <p>You're not alone. Most of our sciatica patients felt the same way before treatment</p>
            <p className={styles.urduText}>آپ اکیلے نہیں ہیں۔ <span className={styles.highlight}>ہمارے زیادہ تر شیاٹیکا مریض علاج سے پہلے ایسا ہی محسوس کرتے تھے</span> </p>
          </motion.div>
          
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>💊</div>
              <h3>Painkillers Stopped Working</h3>
              <p className={styles.urduText}>درد کش ادویات کا اثر ختم</p>
              <p>"The painkillers only worked for a few hours, then the sciatica pain came back worse"</p>
              <p className={styles.urduText}>"درد کش ادویات صرف چند گھنٹوں تک کام کرتی تھیں، پھر شیاٹیکا درد اور بدتر ہو گیا"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🚶</div>
              <h3>Walking Difficulties</h3>
              <p className={styles.urduText}>چلنے میں دشواری</p>
              <p>"I can't walk more than 10 minutes without severe pain shooting down my leg"</p>
              <p className={styles.urduText}>"میں شدید درد کے بغیر 10 منٹ سے زیادہ نہیں چل سکتا"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🛌</div>
              <h3>Sleep Disturbance</h3>
              <p className={styles.urduText}>نیند میں خلل</p>
              <p>"The sciatica pain wakes me up multiple times every night, I'm always exhausted"</p>
              <p className={styles.urduText}>"شیاٹیکا درد مجھے رات میں کئی بار جگا دیتا ہے، میں ہمیشہ تھکا رہتا ہوں"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>😔</div>
              <h3>Social Withdrawal</h3>
              <p className={styles.urduText}>سماجی علیحدگی</p>
              <p>"I've stopped going out with friends because I can't sit comfortably anywhere"</p>
              <p className={styles.urduText}>"میں نے دوستوں کے ساتھ باہر جانا چھوڑ دیا کیونکہ میں کہیں آرام سے نہیں بیٹھ سکتا"</p>
            </div>
          </div>
          
          <div className={styles.problemCta}>
            <h3>We Understand Your Sciatica Pain. And We Have The Solution.</h3>
            <p className={styles.urduText}>ہم آپ کی شیاٹیکا کی تکلیف سمجھتے ہیں۔ اور ہمارے پاس حل ہے۔</p>
            <br/>
            <div className={styles.problemPhoneCta}>
              <a href="tel:+923329622164" className={styles.problemPhone}>
                <RiPhoneFill />  خواتین رابطہ کریں 
              </a><span/>
              <a href="tel:+923125122488" className={styles.problemPhone1}>
                <RiPhoneFill /> مرد رابطہ کریں  
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
            <h2>Why Our Sciatica Treatment <span className={styles.highlight}>Actually Works</span> When Others Failed</h2>
            <p className={styles.urduText}>ہمارا شیاٹیکا علاج <span className={styles.highlight}>کیوں کام کرتا ہے</span> جب دوسرے ناکام ہو جاتے ہیں</p>
          </motion.div>
          
          <div className={styles.differenceGrid}>
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>1</div>
              <h3>No Surgery Required</h3>
              <p className={styles.urduText}>آپریشن کی ضرورت نہیں</p>
              <p>Complete sciatica healing without risky operations, hospitalization, or long recovery periods. Natural nerve regeneration.</p>
              <p className={styles.urduText}>خطرناک آپریشن، ہسپتال میں داخلے یا طویل آرام کے بغیر مکمل شفا یابی۔ قدرتی اعصاب کی بحالی۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>2</div>
              <h3>Address Root Causes</h3>
              <p className={styles.urduText}>مسئلے کی جڑ تک پہنچیں</p>
              <p>We don't just mask sciatica pain. We identify and treat underlying causes—nerve compression, inflammation, spinal issues.</p>
              <p className={styles.urduText}>ہم صرف شیاٹیکا درد کو چھپاتے نہیں ہیں۔ ہم بنیادی وجوہات کو پہچان کر ان کا علاج کرتے ہیں۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>3</div>
              <h3>Natural & Safe</h3>
              <p className={styles.urduText}>قدرتی اور محفوظ</p>
              <p>Zero side effects. No chemical dependency. Just your body's natural healing ability activated by our specialized remedies.</p>
              <p className={styles.urduText}>سائیڈ ایفیکٹس سے پاک۔ کیمیکل سے پاک۔ جسم کی قدرتی شفا یابی کی صلاحیت کو بیدار کریں۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>4</div>
              <h3>Proven Track Record</h3>
              <p className={styles.urduText}>ثابت شدہ کامیابی</p>
              <p>95% success rate across 1000+ sciatica patients. Real results documented over 18+ years of specialized practice.</p>
              <p className={styles.urduText}>1000+ شیاٹیکا مریضوں میں 95% کامیابی۔ 18+ سال کے تجربے میں ثابت شدہ نتائج۔</p>
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
            <h2>Sciatica <span className={styles.highlight}>Success Stories</span></h2>
            <p className={styles.urduText}>شیاٹیکا <span className={styles.highlight}>کامیابی کی کہانیاں</span></p>
            <p>Real sciatica patients who found relief through our natural treatment</p>
            <p className={styles.urduText}>حقیقی شیاٹیکا مریض جنہیں ہمارے قدرتی علاج سے آرام ملا</p>
          </motion.div>
          
          <div className={styles.testimonialGrid}>
            
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"ASLAMUALIAKUM I M SHAKIL AHMED FROM AZAD KASHMIR
              DOSTOO MAIN LAST 2 YEAR SE KAMER KI TAKLEEF MAIN THA BOHAT DOCTORS SE MEDICINE LI BUT KAHIN SE B KOI KHAS FARQ NAI PARA PHIR  MERAY  AIK DOST NE MUJAY ARSHAD HOMEOPATHIC CLINIC KA BATAYA TO MAIN NE CALL PE UN SE APNA MASLA BIYAAN KIYA  JAHAN MERI BAAT DOCTOR ASAD SHAB SE HOI UNHOON NE MUJAY TASALI DI OR APNAY CLINIC PE BULAYA OR JAHAN DOCTOR ASAD SHAB NE MERA POORA CASE DISCUSS KIYA OR MUJAY MEDICINE DI JO MAIN NE BAQAUDGI SE USE KI AB ALHUMDOLILLHA MUJAY TWO MONTH HO GAYE HAIN MAIN BOHAT SAKOON MAIN HUN DOCTOR ASAD SHAB BOHAT NAFEES INSAAN HAIN MAIN TEH DIL SE DOCTOR ASAD SHAB KA MASHKOOR HUN THANK YOU DOCTOR ASAD SHAB"</div>
              <div className={styles.patientInfo}>
                <strong>shakil ahmed ~ Azad Kashmir</strong>
                <span>★★★★★</span>
                <span>Two years of back pain were cured.</span>
                <span className={styles.urduText}>دو سال سے پرانا کمر درد ٹھیک ہو گیا</span>
                <a href="https://maps.app.goo.gl/dKQV8unbKZTgaxx3A" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best Homeopathic clinic.Highly recommended Dr Asma is very cooperative and kind i was having health issues from almost 2,3 years took many medicines but nothing worked but their medicine is really effective.Highly Recommended."</div>
              <div className={styles.patientInfo}>
                <strong>FAHAD SAAD ~ Rawalpindi</strong>
                <span>★★★★★</span>
                <span>Two years of multiple health issues were cured</span>
                <span className={styles.urduText}>دو سال کے متعدد صحت کے مسائل ٹھیک ہو گئے۔</span>
                <a href="https://maps.app.goo.gl/iFQr87v76ufGJP1j8" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

          </div>
          
          <div className={styles.testimonialsCta}>
            <h3>Join Those Who Have Found Sciatica Relief Without Surgery</h3>
            <p className={styles.urduText}>اُن افراد میں شامل ہوں جنہیں بغیر آپریشن شیاٹیکا سے آرام ملا</p>
            <div className={styles.testimonialPhoneCta}>
              <a href="tel:+923329622164" className={styles.testimonialPhone}>
                <RiPhoneFill /> Dr. Asma: 0332 9622164
              </a>
              <a href="tel:+923125122488" className={styles.testimonialPhone1}>
                <RiPhoneFill /> Dr. Asad: 0312 5122488
              </a>
            </div>
            <a href="/Testimonials" className={styles.moreTestimonials} target="_blank" rel="noopener noreferrer">
              Read More Success Stories → | کامیابی کی مزید آپ بیتیاں پڑھیں۔
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
            <div className={styles.urgencyBadge}> SPECIAL SCIATICA ATTENTION GUARANTEED <br/> خصوصی توجہ کی ضمانت</div>
            
            <h2>Your Journey to Complete Sciatica Pain-Free Living Starts Now</h2>
            <p className={styles.urduText}>آپ کے شیاٹیکا درد سے پاک زندگی کے سفر کا آغاز اب ہوتا ہے</p>
            
            <p>Don't let sciatica nerve pain control your life any longer. Our natural treatment has helped thousands avoid surgery and regain their mobility and comfort.</p>
            <p className={styles.urduText}>شیاٹیکا عصبی درد کو اپنی زندگی پر حکومت نہ کرنے دیں۔ ہمارے قدرتی علاج نے ہزاروں کو آپریشن سے بچایا ہے اور ان کی حرکت اور آرام واپس دلایا ہے۔</p>
            
            <div className={styles.urgencyStats}>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <strong>1,000+</strong>
                </motion.div>
                <span>Sciatica Patients Helped</span>
                <span className={styles.urduText}>شیاٹیکا مریضوں کی مدد</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <strong>18+</strong>
                </motion.div>
                <span>Years of Sciatica Experience</span>
                <span className={styles.urduText}>سالوں کا شیاٹیکا تجربہ</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <strong>95%</strong>
                </motion.div>
                <span>Avoided Surgery Successfully</span>
                <span className={styles.urduText}>آپریشن سے بچ گئے</span>
              </div>
            </div>
            
            <div className={styles.patientPromise}>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>No Surgery Required</strong> - Complete sciatica healing without operations</span>
                <span className={styles.urduText}><strong>آپریشن کی ضرورت نہیں</strong> - آپریشن کے بغیر مکمل شفا</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Zero Side Effects</strong> - Completely natural and safe</span>
                <span className={styles.urduText}><strong>سائیڈ ایفیکٹس سے پاک</strong> - مکمل طور پر قدرتی اور محفوظ</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Restore Mobility</strong> - Regain your freedom of movement</span>
                <span className={styles.urduText}><strong>حرکت بحال کریں</strong> - اپنی چلنے پھرنے کی آزادی واپس پائیں</span>
              </div>
            </div>
            
            <div className={styles.finalCtas}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+923329622164"
                className={styles.finalPrimaryCta}
              >
                <RiPhoneFill />
                <div>
                  <span>SPEAK WITH DR. ASMA ARSHAD</span>
                  <span className={styles.ctaUrdu}>ڈاکٹر عاصمہ ارشد سے براہ راست بات کریں</span>
                  <small>Get Personalized Sciatica Pain Relief Advice</small>
                  <small className={styles.ctaUrdu}>ذاتی شیاٹیکا درد سے نجات کی راہنمائی حاصل کریں</small>
                </div>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+923125122488"
                className={styles.finalSecondaryCta}
              >
                <RiPhoneFill />
                <div>
                  <span>SPEAK WITH DR ASAD AWAN</span>
                  <span className={styles.ctaUrdu}>ڈاکٹر اسد اعوان سے براہ راست بات کریں</span>
                  <small>Send Your Sciatica Symptoms & Get Expert Opinion</small>
                  <small className={styles.ctaUrdu}>اپنی شیاٹیکا کی علامات بھیجیں اور ماہرانہ رائے حاصل کریں</small>
                </div>
              </motion.a>
            </div>
            
            <div className={styles.finalGuarantee}>
              <div className={styles.guaranteeBadge}>
                <RiStethoscopeFill />
                <span><strong>COMPLETE SCIATICA PATIENT SATISFACTION FOCUS</strong></span>
                <span className={styles.urduText}><strong>مکمل شیاٹیکا مریض کی تسلی پر توجہ</strong></span>
              </div>
              <p>We are committed to your complete sciatica pain relief and will work with you until you achieve the mobility and comfort you deserve without surgery.</p>
              <p className={styles.urduText}>ہم آپ کے شیاٹیکا درد کے مکمل خاتمے کے لیے پرعزم ہیں اور آپ کے ساتھ اس وقت تک کام کریں گے جب تک آپ بغیر آپریشن کے وہ حرکت اور آرام حاصل نہیں کر لیتے جس کے آپ مستحق ہیں۔</p>
            </div>
            
            <div className={styles.immediateHelp}>
              <FiClock className={styles.helpIcon} />
              <span><strong>IMMEDIATE SCIATICA ATTENTION AVAILABLE:</strong> Call now and get same-day pain relief guidance</span>
              <span className={styles.urduText}><strong>فوری شیاٹیکا توجہ دستیاب:</strong> ابھی کال کریں اور اسی دن درد سے ریلیف کی راہنمائی حاصل کریں</span>
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
            <p>18+ Years Specializing in Sciatica Treatment</p>
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
          <span>✓ 1000+ Sciatica Patients Treated</span>
          <span>✓ 95% Success Rate</span>
          <span>✓ 18+ Years Sciatica Experience</span>
          <span>✓ Surgery-Free Sciatica Treatment Guaranteed</span>
        </div>
      </footer>
      
      <ClientProviders/>
    </div>
  );
};

export default SciaticaLanding;
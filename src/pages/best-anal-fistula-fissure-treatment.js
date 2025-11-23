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

export async function generateMetadata() {
  return {
    title: "Stop Anal Fistula & Fissure Pain Naturally | 95% Success | Rawalpindi | فسچولا اور فشر کا قدرتی علاج",
    description: "Finally! Get permanent relief from anal fistula & fissure WITHOUT surgery. 18+ years expertise. 1000+ patients treated successfully. Book FREE consultation. | فسچولا اور فشر کا مکمل علاج۔ 95% کامیابی۔ بغیر سرجری کے۔ مفت کنسلٹیشن",
    keywords: "anal fistula treatment, anal fissure treatment, fistula surgery alternative, fissure pain relief, فسچولا کا علاج, فشر کا علاج, مقعد کا فسچولا",
    robots: { index: false, follow: false },
    openGraph: {
      title: "Anal Fistula & Fissure Relief - 95% Success Without Surgery | فسچولا اور فشر کا علاج",
      description: "Stop suffering! Natural treatment that actually works for anal fistula & fissure. Avoid surgery. Proven results. Book consultation now! | فسچولا اور فشر کے درد کا مستقل علاج",
      type: "website",
      url: "https://www.arshadhc.com/fistula-fissure",
      images: [
        {
          url: "https://www.arshadhc.com/images/fistula-landing.jpg",
          width: 1200,
          height: 630,
          alt: "Natural Fistula & Fissure Treatment at Arshad Homeopathic Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: "Stop Fistula & Fissure Pain - 95% Success Rate | فسچولا اور فشر کا علاج",
      description: "Finally! Permanent relief from fistula & fissure without surgery. 18+ years expertise. | قدرتی ہومیوپیتھک علاج",
      image: "https://www.arshadhc.com/images/fistula-landing.jpg",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/fistula-fissure",
    },
  };
}

const FistulaFissureLanding = () => {
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
    name: "Anal Fistula and Anal Fissure",
    alternateName: ["Fistula", "Fissure", "Anal Fistula", "Anal Fissure"],
    description: "Painful anal conditions causing bleeding, discharge, and severe discomfort during bowel movements",
    cause: "Chronic constipation, infection, trauma, inflammatory conditions",
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Homeopathic Fistula & Fissure Treatment",
      description: "Natural, surgery-free treatment for anal fistula and fissure with a 95% success rate",
      url: "https://www.arshadhc.com/fistula-fissure",
    },
  };

  const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  // Fistula & Fissure-specific symptoms list
  const symptomsList = [
    { en: "Severe Pain During Bowel Movements", ur: "پاخانے کے دوران شدید درد", icon: "😫" },
    { en: "Blood in Stool or Toilet Paper", ur: "پاخانے یا ٹشو پر خون", icon: "🩸" },
    { en: "Constant Discharge or Pus", ur: "مسلسل رطوبت یا پیپ آنا", icon: "💧" },
    { en: "Itching and Irritation Around Anus", ur: "مقعد کے ارد گرد خارش اور جلن", icon: "🔥" },
    { en: "Pain Sitting for Long Periods", ur: "زیادہ دیر بیٹھنے میں درد", icon: "🪑" },
    { en: "Recurrent Abscess Formation", ur: "بار بار پھوڑے بننا", icon: "🤕" },
    { en: "Difficulty in Walking & Daily Activities", ur: "چلنے پھرنے اور روزمرہ کاموں میں دشواری", icon: "🚶" },
    { en: "Swelling and Redness Around Anus", ur: "مقعد کے ارد گرد سوجن اور لالی", icon: "🔴" },
    { en: "Fear of Passing Stool Due to Pain", ur: "درد کی وجہ سے پاخانے کے ڈر", icon: "😨" },
    { en: "Foul Smelling Discharge", ur: "بدبو دار رطوبت کا اخراج", icon: "👃" }
  ];

  return (
    <div id="fistulaadvert">
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
            <h3>🚨 Emergency Fistula/Fissure Relief</h3>
            <p>Are you in severe fistula/fissure pain right now? Speak directly with our specialist doctors for immediate relief guidance.</p>
            <p className={styles.urduText}>کیا آپ کو ابھی فسچولا/فشر کی شدید تکلیف ہے؟ فوری سکون کی راہنمائی کے لیے ہمارے ڈاکٹرز سے براہ راست بات کریں۔</p>
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
                ⚡ 95% SUCCESS RATE • 1000+ Fistula/Fissure PATIENTS TREATED | پچانوے فیصد کامیابی
              </div>
              
              <h1>
                <span className={styles.mainHeadline}>Tired of <span className={styles.highlight}>Fistula & Fissure Pain</span> Controlling Your Life?</span>
                <span className={styles.urduHeadline}>کیا <span className={styles.highlight}> فسچولا اور فشر کی تکلیف </span>آپ کی زندگی کنٹرول کر رہی ہے؟</span>
                <span className={styles.subHeadline}>Finally Discover The Natural Solution That Actually <span className={styles.highlight}>Works Without Surgery</span></span>
                <span className={styles.urduSubHeadline}>فسچولا اور فشر کا قدرتی علاج جو واقعی <span className={styles.highlight}>بغیر سرجری کے کام کرتا ہے</span></span>
              </h1>
              
              <p className={styles.heroSubtitle}>
                <strong>Stop the endless cycle of anal pain, bleeding, and discharge.</strong> Our 18+ years proven homeopathic treatment addresses the <strong>root cause</strong> of your fistula/fissure—without surgery, without side effects, without breaking the bank.
              </p>
              <p className={styles.urduText}>
                <strong>مقعد کے درد، خون اور رطوبت کا خاتمہ کریں۔</strong> ہمارا 18+ سال کا ثابت شدہ ہومیوپیتھک علاج بغیر سرجری، بغیر سائیڈ ایفیکٹس، بغیر زیادہ خرچ کے آپ کے فسچولا/فشر کی <strong>بنیادی وجہ</strong> پر کام کرتا ہے۔
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
                  <h3>WATCH: How We Cured Fistula/Fissure Patients</h3>
                  <p className={styles.urduText}>دیکھیں: ہم نے فسچولا/فشر کے مریضوں کا علاج کیسے کیا</p>
                  <p>"I avoided surgery and got permanent relief from fistula" - Ahmed R.</p>
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
            <h2>Do You Have These <span className={styles.highlight}>Fistula & Fissure Symptoms</span>?</h2>
            <p className={styles.urduText}>کیا آپ کو یہ <span className={styles.highlight}>فسچولا اور فشر کی علامات</span> ہیں؟</p>
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
            <h3>Don't Let Fistula/Fissure Control Your Life! We Understand Your Pain</h3>
            <p className={styles.urduText}>فسچولا/فشر کو آپ کی زندگی کنٹرول نہ کرنے دیں! ہم آپ کی تکلیف سمجھتے ہیں</p> <br/>
            <div className={styles.badge}>
               Call for Immediate Fistula/Fissure Help
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
            <h2>Does This <span className={styles.highlight}> Fistula/Fissure Struggle </span> Sound Familiar? 😔</h2>
            <p className={styles.urduText}>کیا یہ  <span className={styles.highlight}>فسچولا/فشر کی پریشانیاں</span> آپ کو جانی پہچانی لگتی ہیں؟ 😔</p>
            <p>You're not alone. Most of our fistula/fissure patients felt the same way before treatment</p>
            <p className={styles.urduText}>آپ اکیلے نہیں ہیں۔ <span className={styles.highlight}>ہمارے زیادہ تر فسچولا/فشر کے مریض علاج سے پہلے ایسا ہی محسوس کرتے تھے</span> </p>
          </motion.div>
          
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>😫</div>
              <h3>Severe Pain During Bowel Movements</h3>
              <p className={styles.urduText}>پاخانے کے دوران شدید درد</p>
              <p>"Every trip to bathroom feels like passing glass shards - the pain is unbearable"</p>
              <p className={styles.urduText}>"ہر بار بیت الخلا جانا شیشے کے ٹکڑے نکالنے جیسا محسوس ہوتا ہے - درد ناقابل برداشت ہے"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🩸</div>
              <h3>Constant Bleeding & Discharge</h3>
              <p className={styles.urduText}>مسلسل خون اور رطوبت آنا</p>
              <p>"The constant discharge stains my clothes and makes me feel embarrassed"</p>
              <p className={styles.urduText}>"مسلسل رطوبت میرے کپڑے خراب کرتی ہے اور مجھے شرمندگی محسوس ہوتی ہے"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🚫</div>
              <h3>Surgery Fear & Complications</h3>
              <p className={styles.urduText}>سرجری کا خوف اور پیچیدگیاں</p>
              <p>"Doctors recommend surgery but I'm terrified of complications and recurrence"</p>
              <p className={styles.urduText}>"ڈاکٹر سرجری کی تجویز دیتے ہیں لیکن مجھے پیچیدگیوں اور دوبارہ ہونے کا ڈر ہے"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>😔</div>
              <h3>Social Isolation from Pain</h3>
              <p className={styles.urduText}>درد کی وجہ سے سماجی علیحدگی</p>
              <p>"I can't sit comfortably with friends or travel due to constant pain and discharge"</p>
              <p className={styles.urduText}>"مسلسل درد اور رطوبت کی وجہ سے میں دوستوں کے ساتھ آرام سے بیٹھ نہیں سکتا یا سفر نہیں کر سکتا"</p>
            </div>
          </div>
          
          <div className={styles.problemCta}>
            <h3>We Understand Your Fistula/Fissure Pain. And We Have The Solution.</h3>
            <p className={styles.urduText}>ہم آپ کی فسچولا/فشر تکلیف سمجھتے ہیں۔ اور ہمارے پاس حل ہے۔</p>
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
            <h2>Why Our Fistula/Fissure Treatment <span className={styles.highlight}>Actually Works</span> When Surgery Fails</h2>
            <p className={styles.urduText}>ہمارا فسچولا/فشر کا علاج <span className={styles.highlight}>کیوں کام کرتا ہے</span> جب سرجری ناکام ہو جاتی ہے</p>
          </motion.div>
          
          <div className={styles.differenceGrid}>
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>1</div>
              <h3>No Surgery Required</h3>
              <p className={styles.urduText}>سرجری کی ضرورت نہیں</p>
              <p>We heal fistula & fissure naturally without surgical procedures, anesthesia, or hospital stays.</p>
              <p className={styles.urduText}>ہم فسچولا اور فشر کو سرجری، بے ہوشی یا ہسپتال میں داخلے کے بغیر قدرتی طور پر ٹھیک کرتے ہیں۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>2</div>
              <h3>Address Root Causes</h3>
              <p className={styles.urduText}>بنیادی وجوہات کا علاج</p>
              <p>We treat the underlying infection and inflammation that causes fistula formation, preventing recurrence.</p>
              <p className={styles.urduText}>ہم بنیادی انفیکشن اور سوزش کا علاج کرتے ہیں جو فسچولا بناتے ہیں، دوبارہ ہونے سے روکتے ہیں۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>3</div>
              <h3>Natural & Safe Healing</h3>
              <p className={styles.urduText}>قدرتی اور محفوظ شفا یابی</p>
              <p>Zero side effects. No chemical dependency. Just your body's natural healing ability activated by our specialized remedies.</p>
              <p className={styles.urduText}>سائیڈ ایفیکٹس سے پاک۔ کیمیکل سے پاک۔ ہماری مخصوص ادویات جسم کی قدرتی شفا یابی کی صلاحیت کو بیدار کرتی ہے۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>4</div>
              <h3>Proven Track Record</h3>
              <p className={styles.urduText}>ثابت شدہ کامیابی</p>
              <p>95% success rate across 1000+ fistula/fissure patients. Real results documented over 18+ years of specialized practice.</p>
              <p className={styles.urduText}>1000+ فسچولا/فشر کے مریضوں میں 95% کامیابی۔ 18+ سال کے تجربے میں ثابت شدہ نتائج۔</p>
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
            <h2>Fistula/Fissure <span className={styles.highlight}>Success Stories</span></h2>
            <p className={styles.urduText}>فسچولا/فشر کی <span className={styles.highlight}>کامیابی کی کہانیاں</span></p>
            <p>Real fistula/fissure patients who found relief through our natural treatment</p>
            <p className={styles.urduText}> فسچولا/فشر کے حقیقی مریض جنہیں ہمارے قدرتی علاج سے آرام ملا</p>
          </motion.div>
          
          <div className={styles.testimonialGrid}>
            
           <div className={styles.testimonialCard}>
              <div className={styles.quote}>"I reached out to Dr. Asad after visiting his website, having suffered from an anal fistula for the past 10–12 years. I had previously tried homeopathy several times without success and was seriously considering surgery. However, I decided to give homeopathy one last try and contacted Dr. Asad. After just one month of his treatment, the discharge and pus had reduced by almost 60%. By the second month, it had completely stopped. With his suggested diet changes and medication, I believe I am now on the road to recovery. I'm sincerely grateful to Dr. Asad—may God bless him."</div>
              <div className={styles.patientInfo}>
                <strong>Muhammad Ali ~ Karachi</strong>
                <span>★★★★★</span>
                <span>12 Years Long Fistula Resolved Without Surgery</span>
                <span className={styles.urduText}>12 سال پرانا فسچولا بغیر آپریشن کے حل ہوا</span>
                <a href="https://maps.app.goo.gl/1MVGEgjdA6RpVDyz5" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>
           
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Dr.Asma is very humble. She listens very carefully . I was suffering from anal fissure and she diagnosed my issue and I m under treatment. It's very effective and I m getting better day by day. Her clinic is highly recommended. Go and seek ur medical treatment on time. Thanks."</div>
                <div className={styles.patientInfo}>
                  <strong>Muhammad Abdullah</strong>
                  <span>★★★★★</span>
                  <span>Improving Fistula Without Surgery</span>
                  <span className={styles.urduText}>بغیر آپریشن فسچولا میں بہتری</span>
                  <a href="https://maps.app.goo.gl/BRRpG8ZDFdtGAJj98" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
                </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best Homeopathic clinic for Anal Fistula .Hi My Name is Yasir Mehmood I have Fistula issue last eight years I used a lot of medicine but cant relief properly.Than I found Arshad Homeopathic clinic in Google and call the Dr Asad and asked my problem he gave me the medicine.I used the medicine properly now my Fistula issue is resolved thank you Dr Asad for your best treatment for my Fistula issue"</div>
              <div className={styles.patientInfo}>
                <strong>Yasir Mahmood ~ Saudi Arabia</strong>
                <span>★★★★★</span>
                <span>8-Year-Old Fistula Resolved Without Surgery</span>
                <span className={styles.urduText}>8 سال پرانا فسچولا بغیر آپریشن کے حل ہوا</span>
                <a href="https://maps.app.goo.gl/fbzRUk6SFXvENefF8" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best Homeopathic clinic for Fistula Treatment. Dr Asma is very humble and down to earth person. My husband has Fistula problem and he took alot of allopathic & homeopathic medicines but didnot get healed.After taking treatment from her he is getting better day by day.Alhmdulilah.. 💯% recommended 😊😊"</div>
              <div className={styles.patientInfo}>
                <strong>Abeera Touqeer ~ Rawalpindi</strong>
                <span>★★★★★</span>
                <span>Recovered in 7 months</span>
                <span className={styles.urduText}>7 ماہ میں مکمل صحت یابی</span>
                <a href="https://maps.app.goo.gl/9NqJkNhob5LrvbF68" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Asslamo Allaikum I am using MDCN for fistula and for allergies, my doctor has told me about the operation of this fistula. But I am thankful to Allah for the treatment of fistula and I am using MDCN for allergies. better hon."</div>
              <div className={styles.patientInfo}>
                <strong>Luqman Ahmad ~ Hong Kong</strong>
                <span>★★★★★</span>
                <span>Avoided Surgery Successfully</span>
                <span className={styles.urduText}>آپریشن سے کامیابی سے بچ گئے</span>
                <a href="https://maps.app.goo.gl/XGwDf11z63vgLkei8" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best Homeopathic clinic for Fistula Treatment. Dr Asma is very kind and cooperative person I ever found in Homeopathic field. I got Fistula issue since 2008 and took alot of allopathic, homeopathic meds. But didn't get healing. After taking treatment from her I got recovery Alhmdulilah.. 💯% recommended 😊😊"</div>
              <div className={styles.patientInfo}>
                <strong>Ahtazaz Qureshi ~ Taxilla</strong>
                <span>★★★★★</span>
                <span>16-Year-Old Fistula Resolved Without Surgery</span>
                <span className={styles.urduText}>16 سال پرانا فسچولا بغیر آپریشن کے حل ہوا</span>
                <a href="https://g.co/kgs/Jc34awd" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>                    
          
              <div className={styles.testimonialCard}>
                <div className={styles.quote}>"best homeopathic clinic for fastula. i am very satisfied with the service.i visited many doctors but at the last i get results for this clinic.doctor Asma is very nice and humble."</div>
                <div className={styles.patientInfo}>
                  <strong>Sabahat Tariq ~ Rawalpindi</strong>
                  <span>★★★★★</span>
                  <span>7-year chronic case resolved</span>
                  <span className={styles.urduText}>7 سال پرانا پرانا کیس حل ہوا</span>
                  <a href="https://maps.app.goo.gl/tzCnwDU6ynd78KS26" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
                </div>
              </div>




          </div>
          
          <div className={styles.testimonialsCta}>
            <h3>Join Those Who Have Found Fistula Relief</h3>
            <p className={styles.urduText}>اُن فسچولا کے مریضوں میں شامل ہوں جنہیں آرام ملا</p>
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
            
            <div className={styles.urgencyBadge}>🌟 <br/> Treatment For fistula/fissure Is Possible <br/> فسچولا/فشر کا علاج ممکن ہے</div>
            
            <h2>Your Journey to Complete fistula/fissure Wellness Starts Now</h2>
            <p className={styles.urduText}>آپ کا فسچولا/فشر سے مکمل صحت یابی کا سفر اب شروع ہوتا ہے</p>
            
            <p>Don't let fistula/fissure control your life any longer. Our natural treatment has helped thousands avoid surgery and regain their comfort.</p>
            <p className={styles.urduText}>فسچولا/فشر کو اپنی زندگی کنٹرول نہ کرنے دیں۔ ہمارے قدرتی علاج نے ہزاروں کو سرجری سے بچایا ہے اور ان کا سکون واپس دلایا ہے۔</p>
            
            <div className={styles.urgencyStats}>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <strong>1,000+</strong>
                </motion.div>
                <span>Fistula/Fissure Patients Helped</span>
                <span className={styles.urduText}>فسچولا/فشر کے مریضوں کی مدد</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <strong>18+</strong>
                </motion.div>
                <span>Years of Fistula/Fissure Experience</span>
                <span className={styles.urduText}>سالوں کا فسچولا/فشر تجربہ</span>
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
                <span><strong>Surgery-Free Fistula Treatment</strong> - Heal naturally without operations</span>
                <span className={styles.urduText}><strong>سرجری سے پاک فسچولا علاج</strong> - آپریشن کے بغیر قدرتی طور پر ٹھیک ہوں</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Zero Side Effects</strong> - Completely natural and safe healing</span>
                <span className={styles.urduText}><strong>سائیڈ ایفیکٹس سے پاک</strong> - مکمل طور پر قدرتی اور محفوظ شفا یابی</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Permanent Relief</strong> - Address root causes to prevent recurrence</span>
                <span className={styles.urduText}><strong>مستقل آرام</strong> - دوبارہ ہونے سے روکنے کے لیے بنیادی وجوہات کا علاج</span>
              </div>
            </div>
            
            <div className={styles.finalGuarantee}>
              <div className={styles.guaranteeBadge}>
                <RiStethoscopeFill />
                <span><strong>COMPLETE FISTULA PATIENT SATISFACTION FOCUS</strong></span>
                <span className={styles.urduText}><strong> فسچولا کے مریض کی  مکمل تسلی پر توجہ</strong></span>
              </div>
              <p>We are committed to your complete fistula wellness and will work with you until you achieve the comfort you deserve.</p>
              <p className={styles.urduText}>ہم آپ کی مکمل فسچولا کی صحت یابی کے لیے پرعزم ہیں اور آپ کے ساتھ اس وقت تک کام کریں گے جب تک آپ وہ آرام حاصل نہیں کر لیتے جس کے آپ مستحق ہیں۔</p>
            </div>
            
            <div className={styles.immediateHelp}>
              <FiClock className={styles.helpIcon} />
              <span><strong>IMMEDIATE FISTULA ATTENTION AVAILABLE:</strong> Call now and get same-day relief guidance</span>
              <span className={styles.urduText}><strong>فسچولا کے لیے فوری توجہ دستیاب:</strong> ابھی کال کریں اور اسی دن ریلیف کی راہنمائی حاصل کریں</span>
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
            <p>18+ Years Specializing in Fistula Treatment</p>
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
          <span>✓ 1000+ Fistula Patients Treated</span>
          <span>✓ 95% Fistula Success Rate</span>
          <span>✓ 18+ Years Fistula Experience</span>
          <span>✓ Surgery-Free Treatment Guaranteed</span>
        </div>
      </footer>
      
      <ClientProviders/>
    </div>
  );
};

export default FistulaFissureLanding;
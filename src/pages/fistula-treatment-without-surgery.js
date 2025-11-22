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
    title: "Anal Fistula Treatment Without Surgery | 95% Success Rate | Rawalpindi | فسچولا کا بغیر آپریشن علاج",
    description: "Finally! Get permanent relief from anal fistula WITHOUT surgery. 18+ years expertise. 1500+ patients treated successfully. Book FREE consultation. | فسچولا کا مکمل علاج بغیر آپریشن کے۔ 95% کامیابی۔ مفت کنسلٹیشن",
    keywords: "anal fistula treatment, fistula in ano, non-surgical fistula treatment, homeopathic doctor, fistula pain relief, فسچولا کا علاج, بغیر آپریشن فسچولا کا علاج, فسچولا کا قدرتی علاج",
    robots: { index: false, follow: false },
    openGraph: {
      title: "Anal Fistula Treatment - 95% Success Without Surgery | فسچولا کا علاج",
      description: "Stop suffering! Natural treatment that actually works for anal fistula. Proven results. Book consultation now! | فسچولا کے درد، پیپ، سوجن کا مستقل علاج",
      type: "website",
      url: "https://www.arshadhc.com",
      images: [
        {
          url: "https://www.arshadhc.com/images/fistula-landing.jpg",
          width: 1200,
          height: 630,
          alt: "Natural Anal Fistula Treatment at Arshad Homeopathic Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: "Anal Fistula Treatment - 95% Success Rate | فسچولا کا علاج",
      description: "Finally! Permanent relief from anal fistula without surgery. 18+ years expertise. | قدرتی ہومیوپیتھک علاج",
      image: "https://www.arshadhc.com/images/fistula-landing.jpg",
    },
    alternates: {
      canonical: "https://www.arshadhc.com",
    },
  };
}

const FistulaLanding = () => {
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
    name: "Anal Fistula, Fissure and Piles",
    alternateName: ["Fistula-in-Ano", "Anal Fissure", "Hemorrhoids"],
    description: "Painful anal conditions causing discharge, bleeding, and discomfort including abnormal tunnels, tears and swollen veins",
    cause: "Chronic constipation, infection, trauma, prolonged sitting",
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Homeopathic Anal Fistula Treatment",
      description: "Natural, non-surgical treatment for anal fistula with a 95% success rate",
      url: "https://www.arshadhc.com",
    },
  };

  const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  // Comprehensive symptoms list for anal fistula
  const symptomsList = [
    { en: "Persistent Pus Discharge", ur: "مسلسل پیپ کا اخراج", icon: "💧" },
    { en: "Severe Anal Pain & Swelling", ur: "مقعد میں شدید درد اور سوجن", icon: "😫" },
    { en: "Recurrent Abscess Formation", ur: "بار بار پھوڑے بننا", icon: "🔥" },
    { en: "Blood in Stool", ur: "پاخانے میں خون آنا", icon: "🩸" },
    { en: "Itching Around Anus", ur: "مقعد کے ارد گرد خارش", icon: "🤚" },
    { en: "Pain During Bowel Movements", ur: "پاخانہ کرتے وقت درد", icon: "🚽" },
    { en: "Foul Smelling Discharge", ur: "بدبودار مواد کا اخراج", icon: "👃" },
    { en: "Fever with Anal Discomfort", ur: "بخار کے ساتھ مقعد میں تکلیف", icon: "🌡️" },
    { en: "Difficulty Sitting", ur: "بیٹھنے میں دشواری", icon: "🪑" },
    { en: "Skin Irritation Around Anus", ur: "مقعد کے ارد گرد جلد کی جلن", icon: "🦠" },
    { en: "Feeling of Lump Near Anus", ur: "مقعد کے پاس گانٹھ محسوس ہونا", icon: "🔴" },
    { en: "Constant Moisture", ur: "مسلسل نمی کا احساس", icon: "💦" },
    { en: "Pain Radiating to Lower Back", ur: "کمر کے نچلے حصے میں درد", icon: "🔙" },
    { en: "Difficulty Walking", ur: "چلنے میں دشواری", icon: "🚶" },
    { en: "Anxiety About Surgery", ur: "آپریشن کے بارے میں پریشانی", icon: "😥" },
    { en: "Multiple Failed Treatments", ur: "کئی علاج ناکام ہو چکے", icon: "❌" }
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
            <h3>🚨 Emergency Fistula Relief</h3>
            <p>Are you in pain right now? Speak directly with our specialist doctors for immediate relief guidance.</p>
            <p className={styles.urduText}>کیا آپ کو ابھی تکلیف ہے؟ فوری سکون کی راہنمائی کے لیے ہمارے ڈاکٹرز سے براہ راست بات کریں۔</p>
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
                ⚡ 95% SUCCESS RATE • 1500+ PATIENTS TREATED | پچانوے فیصد کامیابی
              </div>
              
              <h1>
                <span className={styles.mainHeadline}>Tired of <span className={styles.highlight}>Anal Fistula Pain</span> Ruining Your Life?</span>
                <span className={styles.urduHeadline}>کیا <span className={styles.highlight}> فسچولا کی تکلیف </span>آپ کی زندگی برباد کر رہی ہے؟</span>
                <span className={styles.subHeadline}>Finally Discover The Natural Solution That Actually <span className={styles.highlight}>Works Without Surgery</span></span>
                <span className={styles.urduSubHeadline}>فسچولا کا قدرتی علاج جو واقعی <span className={styles.highlight}>بغیر آپریشن کام کرتا ہے</span></span>
              </h1>
              
              <p className={styles.heroSubtitle}>
                <strong>Stop the endless cycle of pain, discharge, and surgery fear.</strong> Our 18+ years proven homeopathic treatment addresses the <strong>root cause</strong> of your fistula—without surgery, without side effects, without breaking the bank.
              </p>
              <p className={styles.urduText}>
                <strong>فسچولا کے درد، پیپ اور آپریشن کے خوف کا خاتمہ کریں۔</strong> ہمارا 18+ سال کا ثابت شدہ ہومیوپیتھک علاج آپ کے مسئلے کی <strong>جڑ</strong> پر کام کرتا ہے—بغیر آپریشن، بغیر سائیڈ ایفیکٹس، بغیر زیادہ خرچ کے۔
              </p>

              {/* Primary CTA */}
              <div className={styles.heroCtas}>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/923329622164"
                  className={styles.emergencyCta}
                >
                  <RiWhatsappFill />
                  <div>
                    <span className={styles.ctaMain}>Speak Directly With Dr. Asma</span>
                    <span className={styles.ctaUrdu}>اعتماد کے ساتھ مشورہ کریں</span>
                    <span className={styles.ctaSub}>Discuss With Confidence</span>
                  </div>
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/923125122488"
                  className={styles.whatsappCtaLarge}
                >
                  <RiWhatsappFill />
                  <div>
                    <span className={styles.ctaMain}>Speak Directly With Dr. Asad</span>
                    <span className={styles.ctaUrdu}>واٹس ایپ پر مفت مشورہ کریں</span>
                    <span className={styles.ctaSub}>FREE WhatsApp Consultation</span>
                  </div>
                </motion.a>
              </div>
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
                  <h3>WATCH: How We Cured Fistula Patients Without Surgery</h3>
                  <p className={styles.urduText}>دیکھیں: ہم نے فسچولا کے مریضوں کا بغیر آپریشن علاج کیسے کیا</p>
                  <p>"I avoided surgery after 12 years of suffering" - Muhammad Ali</p>
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
            <h2>Do You Have These <span className={styles.highlight}>Fistula Symptoms</span>?</h2>
            <p className={styles.urduText}>کیا آپ کو یہ <span className={styles.highlight}>فسچولا کی علامات</span> ہیں؟</p>
            <p>If you're experiencing any of these symptoms, you're not alone. We can help!</p>
            <p className={styles.urduText}>اگر آپ کو ان میں سے کوئی علامات ہیں تو آپ اکیلے نہیں ہیں۔ ہم مدد کر سکتے ہیں!</p>
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
            <h3>Don't Suffer in Silence! We Understand Your Pain</h3>
            <p className={styles.urduText}>خاموشی سے تکلیف نہ اٹھائیں! ہم آپ کی تکلیف سمجھتے ہیں</p> <br/>
            <div className={styles.badge}>
               Call for Immediate Help
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
            <h2>Does This Sound Familiar? 😔</h2>
            <p className={styles.urduText}>کیا یہ باتیں آپ کو جانی پہچانی لگتی ہیں؟ 😔</p>
            <p>You're not alone. Most of our patients felt the same way before treatment</p>
            <p className={styles.urduText}>آپ اکیلے نہیں ہیں۔ <span className={styles.highlight}>ہمارے زیادہ تر مریض علاج سے پہلے ایسا ہی محسوس کرتے تھے</span> </p>
          </motion.div>
          
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🔪</div>
              <h3>Surgery Fear</h3>
              <p className={styles.urduText}>آپریشن کا خوف</p>
              <p>"I'm terrified of surgery and the long recovery period"</p>
              <p className={styles.urduText}>"میں آپریشن اور طویل آرام کے دورانیے سے خوفزدہ ہوں"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>💧</div>
              <h3>Constant Discharge</h3>
              <p className={styles.urduText}>مسلسل مواد کا اخراج</p>
              <p>"I have to change pads multiple times a day due to discharge"</p>
              <p className={styles.urduText}>"مواد کے اخراج کی وجہ سے مجھے دن میں کئی بار پیڈ بدلنا پڑتے ہیں"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🪑</div>
              <h3>Sitting Discomfort</h3>
              <p className={styles.urduText}>بیٹھنے میں تکلیف</p>
              <p>"I can't sit for more than 15 minutes without severe pain"</p>
              <p className={styles.urduText}>"شدید درد کے بغیر میں 15 منٹ سے زیادہ نہیں بیٹھ سکتا"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>😔</div>
              <h3>Social Embarrassment</h3>
              <p className={styles.urduText}>سماجی شرمندگی</p>
              <p>"The smell and constant discomfort make me avoid social situations"</p>
              <p className={styles.urduText}>"بدبو اور مسلسل تکلیف مجھے سماجی حالات سے بچنے پر مجبور کرتی ہے"</p>
            </div>
          </div>
          
          <div className={styles.problemCta}>
            <h3>We Understand Your Pain. And We Have The Solution.</h3>
            <p className={styles.urduText}>ہم آپ کی تکلیف سمجھتے ہیں۔ اور ہمارے پاس حل ہے۔</p>
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
            <h2>Why Our Treatment <span className={styles.highlight}>Actually Works</span> When Others Failed</h2>
            <p className={styles.urduText}>ہمارا علاج <span className={styles.highlight}>کیوں کام کرتا ہے</span> جب دوسرے ناکام ہو جاتے ہیں</p>
          </motion.div>
          
          <div className={styles.differenceGrid}>
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>1</div>
              <h3>No Surgery Required</h3>
              <p className={styles.urduText}>آپریشن کی ضرورت نہیں</p>
              <p>Complete healing without painful operations, hospitalization, or long recovery periods. Natural tissue regeneration.</p>
              <p className={styles.urduText}>تکلیف دہ آپریشن، ہسپتال میں داخلے یا طویل آرام کے بغیر مکمل شفا یابی۔ قدرتی ؤتکوں کی بحالی۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>2</div>
              <h3>Address Root Causes</h3>
              <p className={styles.urduText}>مسئلے کی جڑ تک پہنچیں</p>
              <p>We don't just treat symptoms. We identify and treat underlying causes—infection, constipation, weak immunity.</p>
              <p className={styles.urduText}>ہم صرف علامات کا علاج نہیں کرتے۔ ہم بنیادی وجوہات کو پہچان کر ان کا علاج کرتے ہیں۔</p>
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
              <p>95% success rate across 1500+ fistula patients. Real results documented over 18+ years of specialized practice.</p>
              <p className={styles.urduText}>1500+ مریضوں میں 95% کامیابی۔ 18+ سال کے تجربے میں ثابت شدہ نتائج۔</p>
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
            <h2>Real <span className={styles.highlight}>Success Stories</span> From Our Patients</h2>
            <p className={styles.urduText}>ہمارے مریضوں کی <span className={styles.highlight}>کامیابی کی حقیقی کہانیاں</span></p>
            <p>Don't just take our word for it. Hear from patients who found relief through our natural treatment.</p>
            <p className={styles.urduText}>صرف ہماری بات پر یقین نہ کریں۔ ان مریضوں سے سنیں جنہیں ہمارے قدرتی علاج سے آرام ملا۔</p>
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
            <h3>Join Those Who Have Found Relief Without Surgery</h3>
            <p className={styles.urduText}>اُن افراد میں شامل ہوں جنہیں بغیر آپریشن آرام ملا</p>
            <div className={styles.testimonialPhoneCta}>
              <a href="tel:+923329622164" className={styles.testimonialPhone}>
                <RiPhoneFill /> Dr. Asma: 0332 9622164
              </a>
              <a href="tel:+923125122488" className={styles.testimonialPhone1}>
                <RiPhoneFill /> Dr. Asad: 0312 5122488
              </a>
            </div>
            <a href="/Testimonials" className={styles.moreTestimonials} target="_blank" rel="noopener noreferrer">
              Read More Success Stories → | مزید کامیابی کی آپ بیتیاں پڑھیں۔
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
            <div className={styles.urgencyBadge}>🌟 SPECIAL ATTENTION GUARANTEED | خصوصی توجہ کی ضمانت</div>
            
            <h2>Your Journey to Complete Fistula Healing Starts Now</h2>
            <p className={styles.urduText}>آپ کے فسچولا کے مکمل علاج کا سفر اب شروع ہوتا ہے</p>
            
            <p>Don't let fistula control your life any longer. Our natural treatment has helped thousands avoid surgery and regain their comfort.</p>
            <p className={styles.urduText}>فسچولا کو اپنی زندگی پر حکومت نہ کرنے دیں۔ ہمارے قدرتی علاج نے ہزاروں کو آپریشن سے بچایا ہے اور ان کی آرام واپس دلایا ہے۔</p>
            
            <div className={styles.urgencyStats}>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <strong>1,500+</strong>
                </motion.div>
                <span>Fistula Patients Helped</span>
                <span className={styles.urduText}>فسچولا کے مریضوں کی مدد</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <strong>18+</strong>
                </motion.div>
                <span>Years of Specialized Experience</span>
                <span className={styles.urduText}>سالوں کا خصوصی تجربہ</span>
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
                <span><strong>No Surgery Required</strong> - Complete healing without operations</span>
                <span className={styles.urduText}><strong>آپریشن کی ضرورت نہیں</strong> - آپریشن کے بغیر مکمل شفا</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Zero Side Effects</strong> - Completely natural and safe</span>
                <span className={styles.urduText}><strong>سائیڈ ایفیکٹس سے پاک</strong> - مکمل قدرتی اور محفوظ</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Prevent Recurrence</strong> - Address root causes permanently</span>
                <span className={styles.urduText}><strong>دوبارہ ہونے سے بچاؤ</strong> - وجوہات کا مستقل علاج</span>
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
                  <small>Get Personalized Advice</small>
                  <small className={styles.ctaUrdu}>ذاتی مشورہ حاصل کریں</small>
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
                  <small>Send Your Symptoms & Get Expert Opinion</small>
                  <small className={styles.ctaUrdu}>اپنی علامات بھیجیں اور ماہرانہ رائے حاصل کریں</small>
                </div>
              </motion.a>
            </div>
            
            <div className={styles.finalGuarantee}>
              <div className={styles.guaranteeBadge}>
                <RiStethoscopeFill />
                <span><strong>COMPLETE PATIENT SATISFACTION FOCUS</strong></span>
                <span className={styles.urduText}><strong>مکمل مریض کی تسلی پر توجہ</strong></span>
              </div>
              <p>We are committed to your complete healing and will work with you until you achieve the comfort you deserve without surgery.</p>
              <p className={styles.urduText}>ہم آپ کی مکمل صحت یابی کے لیے پرعزم ہیں اور آپ کے ساتھ اس وقت تک کام کریں گے جب تک آپ بغیر آپریشن کے وہ آرام حاصل نہیں کر لیتے جس کے آپ مستحق ہیں۔</p>
            </div>
            
            <div className={styles.immediateHelp}>
              <FiClock className={styles.helpIcon} />
              <span><strong>IMMEDIATE ATTENTION AVAILABLE:</strong> Call now and get same-day fistula relief guidance</span>
              <span className={styles.urduText}><strong>فوری توجہ دستیاب:</strong> ابھی کال کریں اور اسی دن فسچولا سے ریلیف کی راہنمائی حاصل کریں</span>
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
          <span>✓ 1500+ Fistula Patients Treated</span>
          <span>✓ 95% Success Rate</span>
          <span>✓ 18+ Years Specialized Experience</span>
          <span>✓ Surgery-Free Treatment Guaranteed</span>
        </div>
      </footer>
      
      <ClientProviders/>
    </div>
  );
};

export default FistulaLanding;
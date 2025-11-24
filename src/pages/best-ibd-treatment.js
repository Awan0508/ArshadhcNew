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
    title: "Stop IBD Pain Naturally | 95% Success Rate | Rawalpindi | IBD کا قدرتی علاج",
    description: "Finally! Get lasting relief from IBD, Crohn's & colitis WITHOUT side effects. 18+ years expertise. 1000+ patients treated successfully. Book FREE consultation. | IBD، کروہنز ڈزیز کا مکمل علاج۔ 95% کامیابی۔ مفت کنسلٹیشن",
    keywords: "IBD treatment, Crohn's disease treatment, ulcerative colitis, homeopathic doctor, IBD pain relief, پیٹ درد کا علاج, IBD علاج, کروہنز ڈزیز",
    robots: { index: false, follow: false },
    openGraph: {
      title: "IBD Pain Relief - 95% Success Without Side Effects | IBD کا علاج",
      description: "Stop suffering! Natural treatment that actually works for IBD, Crohn's & colitis. Proven results. Book consultation now! | IBD، کروہنز کے درد کا مستقل علاج",
      type: "website",
      url: "https://www.arshadhc.com/ibd",
      images: [
        {
          url: "https://www.arshadhc.com/images/ibd-landing.jpg",
          width: 1200,
          height: 630,
          alt: "Natural IBD Treatment at Arshad Homeopathic Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: "Stop IBD Pain - 95% Success Rate | IBD کا علاج",
      description: "Finally! Lasting relief from IBD without side effects. 18+ years expertise. | قدرتی ہومیوپیتھک علاج",
      image: "https://www.arshadhc.com/images/ibd-landing.jpg",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/ibd",
    },
  };
}

const IBDLanding = () => {
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
        videoId: 'GImzXsoLB-g',
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

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: "Inflammatory Bowel Disease (IBD)",
    alternateName: ["IBD", "Crohn's Disease", "Ulcerative Colitis"],
    description: "Chronic inflammatory digestive disorders causing abdominal pain, bleeding, diarrhea, and intestinal inflammation",
    cause: "Immune dysfunction, genetic factors, environmental triggers",
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Homeopathic IBD Treatment",
      description: "Natural, side-effect-free treatment for IBD with a 95% success rate",
      url: "https://www.arshadhc.com/ibd",
    },
  };

  const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  // IBD-specific symptoms list
  const symptomsList = [
    { en: "Severe Abdominal Pain & Cramping", ur: "پیٹ میں شدید درد اور مروڑ", icon: "😫" },
    { en: "Blood in Stool", ur: "پاخانے میں خون آنا", icon: "🩸" },
    { en: "Chronic Diarrhea with Blood/Mucus", ur: "خون اور بلغم کے ساتھ دست", icon: "💩" },
    { en: "Urgent Need for Bathroom", ur: "بیت الخلا کی فوری ضرورت", icon: "🏃" },
    { en: "Fever with Digestive Issues", ur: "بخار کے ساتھ پیٹ کے مسائل", icon: "🌡️" },
    { en: "Weight Loss Without Trying", ur: "بغیر کوشش کے وزن کم ہونا", icon: "⚖️" },
    { en: "Loss of Appetite", ur: "بھوک ختم ہو جانا", icon: "🍽️" },
    { en: "Fatigue & Weakness", ur: "تھکاوٹ اور کمزوری", icon: "😴" },
    { en: "Joint Pain", ur: "جوڑوں میں درد", icon: "🦵" },
    { en: "Skin Rashes & Problems", ur: "جلد کے مسائل اور خارش", icon: "🤕" }
  ];

  return (
    <div id="ibdadvert">
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
            <h3>🚨 Emergency IBD Relief</h3>
            <p>Are you in IBD pain right now? Speak directly with our specialist doctors for immediate IBD relief guidance.</p>
            <p className={styles.urduText}>کیا آپ کو ابھی آنتوں کی سوزش کی تکلیف ہے؟ فوری سکون کی راہنمائی کے لیے ہمارے ڈاکٹرز سے براہ راست بات کریں۔</p>
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
                ⚡ 95% SUCCESS RATE • 1000+ IBD PATIENTS TREATED | پچانوے فیصد کامیابی
              </div>
              
              <h1>
                <span className={styles.mainHeadline}>Tired of <span className={styles.highlight}>IBD Pain</span> Controlling Your Life?</span>
                <span className={styles.urduHeadline}>کیا <span className={styles.highlight}> آنتوں کی سوزش کی تکلیف </span>آپ کی زندگی کنٹرول کر رہی ہے؟</span>
                <span className={styles.subHeadline}>Finally Discover The Natural IBD Solution That Actually <span className={styles.highlight}>Works</span></span>
                <span className={styles.urduSubHeadline}>آنتوں کی سوزش کا قدرتی علاج جو واقعی <span className={styles.highlight}>کام کرتا ہے</span></span>
              </h1>
              
              <p className={styles.heroSubtitle}>
                <strong>Stop the endless cycle of IBD pain, bleeding, and inflammation.</strong> Our 18+ years proven homeopathic treatment addresses the <strong>root cause</strong> of your IBD—without side effects, without dependency, without breaking the bank.
              </p>
              <p className={styles.urduText}>
                <strong>آنتوں کی سوزش کے درد، خون اور سوزش کا خاتمہ کریں۔</strong> ہمارا 18+ سال کا ثابت شدہ ہومیوپیتھک علاج بغیر سائیڈ ایفیکٹس، بغیر انحصار، بغیر زیادہ خرچ کے آپ کی آنتوں کی سوزش کی <strong>بنیادی وجہ</strong> پر کام کرتا ہے۔
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
                  <h3>WATCH: How We Cured IBD Patients</h3>
                  <p className={styles.urduText}>دیکھیں: ہم نے آنتوں کی سوزش کے مریضوں کا علاج کیسے کیا</p>
                  <p>"I got my life back after 4 years of IBD suffering" - M Qasim</p>
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
            <h2>Do You Have These <span className={styles.highlight}>IBD Symptoms</span>?</h2>
            <p className={styles.urduText}>کیا آپ کو یہ <span className={styles.highlight}>آنتوں کی سوزش کی علامات</span> ہیں؟</p>
            <p>If you're experiencing any of these IBD symptoms, you're not alone. We can help!</p>
            <p className={styles.urduText}>اگر آپ کو ان میں سے کوئی آنتوں کی سوزش علامات ہیں تو آپ اکیلے نہیں ہیں۔ ہم آپ کی مدد کر سکتے ہیں!</p>
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
            <h3>Don't Let IBD Control Your Life! We Understand Your Pain</h3>
            <p className={styles.urduText}>آنتوں کی سوزش کو آپ کی زندگی کنٹرول نہ کرنے دیں! ہم آپ کی تکلیف سمجھتے ہیں</p> <br/>
            <div className={styles.badge}>
               Call for Immediate IBD Help
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
            <h2>Does This IBD Struggle Sound Familiar? 😔</h2>
            <p className={styles.urduText}>کیا یہ آنتوں کی سوزش کی پریشانیاں آپ کو جانی پہچانی لگتی ہیں؟ 😔</p>
            <p>You're not alone. Most of our IBD patients felt the same way before treatment</p>
            <p className={styles.urduText}>آپ اکیلے نہیں ہیں۔ <span className={styles.highlight}>ہمارے زیادہ تر آنتوں کی سوزش کے مریض علاج سے پہلے ایسا ہی محسوس کرتے تھے</span> </p>
          </motion.div>
          
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>💊</div>
              <h3>IBD Medications Stopped Working</h3>
              <p className={styles.urduText}>آنتوں کی سوزش کی دواؤں کا اثر ختم ہو گیا</p>
              <p>"The IBD medications only worked temporarily, then the inflammation came back worse"</p>
              <p className={styles.urduText}>"آنتوں کی سوزش کی دوائیں صرف عارضی طور پر کام کرتی تھیں، پھر سوزش اور بدتر ہو گئی"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🩸</div>
              <h3>Bleeding & Fear</h3>
              <p className={styles.urduText}>خون آنا اور خوف</p>
              <p>"Seeing blood in stool every day is terrifying and exhausting"</p>
              <p className={styles.urduText}>"ہر روز پاخانے میں خون دیکھنا خوفناک اور تھکا دینے والا ہے"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🍕</div>
              <h3>Severe Food Restrictions</h3>
              <p className={styles.urduText}>سخت غذائی پابندیاں</p>
              <p>"I can't eat anything without triggering severe pain and bleeding"</p>
              <p className={styles.urduText}>"میں کچھ بھی کھا نہیں سکتا کیونکہ ہر چیز شدید درد اور خون کا سبب بنتی ہے"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>😔</div>
              <h3>Social Isolation from IBD</h3>
              <p className={styles.urduText}>آنتوں کی سوزش کی وجہ سے سماجی علیحدگی</p>
              <p>"I've canceled so many plans due to IBD flare-ups that friends stopped inviting me"</p>
              <p className={styles.urduText}>"میں نے آنتوں کی سوزش کے حملوں کی وجہ سے اتنی ملاقاتیں منسوخ کیں کہ دوستوں نے بلانا ہی چھوڑ دیا"</p>
            </div>
          </div>
          
          <div className={styles.problemCta}>
            <h3>We Understand Your IBD Pain. And We Have The Solution.</h3>
            <p className={styles.urduText}>ہم آپ کی آنتوں کی سوزش تکلیف سمجھتے ہیں۔ اور ہمارے پاس حل ہے۔</p>
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
            <h2>Why Our IBD Treatment <span className={styles.highlight}>Actually Works</span> When Others Failed</h2>
            <p className={styles.urduText}>ہمارا آنتوں کی سوزش کا علاج <span className={styles.highlight}>کیوں کام کرتا ہے</span> جب دوسرے ناکام ہو جاتے ہیں</p>
          </motion.div>
          
          <div className={styles.differenceGrid}>
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>1</div>
              <h3>Address IBD Root Causes</h3>
              <p className={styles.urduText}>آنتوں کی سوزش کے مسئلے کی جڑ تک پہنچیں</p>
              <p>We don't just mask IBD symptoms. We identify and treat the underlying inflammation, immune dysfunction, and gut damage.</p>
              <p className={styles.urduText}>ہم صرف آنتوں کی سوزش کی علامات کو چھپاتے نہیں ہیں۔ ہم بنیادی سوزش، قوت مدافعت کے نظام کے مسائل اور آنتوں کے نقصان کا علاج کرتے ہیں۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>2</div>
              <h3>Personalized IBD Medicine</h3>
              <p className={styles.urduText}>ذاتی نوعیت کا آنتوں کی سوزش کا علاج</p>
              <p>No two IBD patients get the same treatment. Your medicine is customized based on your specific IBD type (Crohn's or Colitis) and severity.</p>
              <p className={styles.urduText}>ہر آنتوں کی سوزش کے مریض کا علاج الگ ہوتا ہے۔ آپ کی دوا آپ کی آنتوں کی سوزش کی قسم کے مطابق بنائی جاتی ہے۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>3</div>
              <h3>Natural & Safe for IBD</h3>
              <p className={styles.urduText}>آنتوں کی سوزش کے لیے قدرتی اور محفوظ</p>
              <p>Zero side effects. No chemical dependency. Just your body's natural healing ability activated by our specialized homeopathic remedies for IBD.</p>
              <p className={styles.urduText}>سائیڈ ایفیکٹس سے پاک۔ کیمیکل سے پاک۔آنتوں کی سوزش کے لیے ہماری مخصوص ہومیوپیتھک ادویات جسم کی قدرتی شفا یابی کی صلاحیت کو بیدار کرتی ہے۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>4</div>
              <h3>Proven IBD Track Record</h3>
              <p className={styles.urduText}>آنتوں کی سوزش میں ثابت شدہ کامیابی</p>
              <p>95% success rate across 1000+ IBD patients. Real results documented over 18+ years of specialized IBD practice.</p>
              <p className={styles.urduText}>1000+ آنتوں کی سوزش کے مریضوں میں 95% کامیابی۔ 18+ سال کے تجربے میں ثابت شدہ نتائج۔</p>
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
            <h2>IBD <span className={styles.highlight}>Success Stories</span></h2>
            <p className={styles.urduText}>آنتوں کی سوزش <span className={styles.highlight}>کامیابی کی کہانیاں</span></p>
            <p>Real IBD patients who found relief through our natural treatment</p>
            <p className={styles.urduText}>حقیقی آنتوں کی سوزش کے مریض جنہیں ہمارے قدرتی علاج سے آرام ملا</p>
          </motion.div>
          
          <div className={styles.testimonialGrid}>
            
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best Homeopathic clinic.Highly recommended Dr Asma is very cooperative and kind i was having health issues from almost 2,3 years took many medicines but nothing worked but their medicine is really effective.Highly Recommended."</div>
              <div className={styles.patientInfo}>
                <strong>FAHAD SAAD</strong>
                <span>★★★★★</span>
                <span>2 Years long health issues cured</span>
                <span className={styles.urduText}>دو سال پرانی صحت سے متعلق پیچیدگیوں کا کامیاب علاج</span>
                <a href="https://maps.app.goo.gl/f6aHELVJmLPrcBUM9" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>
           
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Assalam alaikum I am Abrish.I was suffering from skin infection for last 2 years. I was very worried about this. I got myself checked by many good doctors. But I was not getting well. Then someone told me about (Arshad Homeopathic Clinic). Then I made an appointment with Dr. Asma. I discussed my issue with her. She gave me medicines. Alhamdulillah now it has been 1 and half month since I started using the medicines and I am feeling much better ⭐👍 fully recommended 💯 (From Rawalpindi)😇😊"</div>
              <div className={styles.patientInfo}>
                <strong>Ahmed Shakil ~ Rawalpindi</strong>
                <span>★★★★★</span>
                <span>Cured from 2 years long skin infections.</span>
                <span className={styles.urduText}>دو سال پرانی جلدی انفیکشن کا کامیاب علاج</span>
                <a href="https://maps.app.goo.gl/Ehd12NVZ3ZQUyfYW6" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>



            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best homeopathic dr. I always visit their clinic when have any health issue and never return disappointed"</div>
              <div className={styles.patientInfo}>
                <strong>Samana Zaynab ~ Islamabad</strong>
                <span>★★★★★</span>
                <span>Cured from multiple health issues.</span>
                <span className={styles.urduText}>صحت سے متعلق متعدد مسائل کا کامیاب علاج</span>
                <a href="https://maps.app.goo.gl/5DaodyFG8BAqyLmk9" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best experience original product cooperative staff team and Dr are professional highly trained team 5 star rating"</div>
              <div className={styles.patientInfo}>
                <strong>Zaheer Ahmed</strong>
                <span>★★★★★</span>
                <span>Cured from IBD</span>
                <span className={styles.urduText}>آنتوں کی سوزش کا کامیاب علاج</span>
                <a href="https://maps.app.goo.gl/EL6bk8bGFV7KCW5y5" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>
          
          </div>
          
          <div className={styles.testimonialsCta}>
            <h3>Join Those Who Have Found IBD Relief</h3>
            <p className={styles.urduText}>اُن آنتوں کی سوزش کے مریضوں میں شامل ہوں جنہیں آرام ملا</p>
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
            
            <div className={styles.urgencyBadge}>🌟 <br/> Treatment For IBD Is Possible <br/> آنتوں کی سوزش کا علاج ممکن ہے</div>
            
            <h2>Your Journey to Complete IBD Wellness Starts Now</h2>
            <p className={styles.urduText}>آپ کا آنتوں کی سوزش سے مکمل صحت یابی کا سفر اب شروع ہوتا ہے</p>
            
            <p>Don't let IBD control your life any longer. Our natural IBD treatment has helped thousands regain their comfort and confidence.</p>
            <p className={styles.urduText}>آنتوں کی سوزش کو اپنی زندگی کنٹرول نہ کرنے دیں۔ ہمارے قدرتی آنتوں کی سوزش علاج نے ہزاروں کو ان کا سکون اور اعتماد واپس دلایا ہے۔</p>
            
            <div className={styles.urgencyStats}>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <strong>1,000+</strong>
                </motion.div>
                <span>IBD Patients Helped</span>
                <span className={styles.urduText}>آنتوں کی سوزش کے مریضوں کی مدد</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <strong>18+</strong>
                </motion.div>
                <span>Years of IBD Experience</span>
                <span className={styles.urduText}>سالوں کا آنتوں کی سوزش تجربہ</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <strong>95%</strong>
                </motion.div>
                <span>Report IBD Improvement</span>
                <span className={styles.urduText}>آنتوں کی سوزش مریضوں نے بہتری رپورٹ کی</span>
              </div>
            </div>
            
            <div className={styles.patientPromise}>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Personalized IBD Treatment Plans</strong> - Tailored specifically for Crohn's or Colitis</span>
                <span className={styles.urduText}><strong>ذاتی آنتوں کی سوزش علاج کے منصوبے</strong> - آپ کی آنتوں کی سوزش کی قسم کے مطابق دوا کا انتخاب کیا جاتا ہے</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Zero Side Effects</strong> - Completely natural and safe for IBD</span>
                <span className={styles.urduText}><strong>سائیڈ ایفیکٹس سے پاک</strong> - آنتوں کی سوزش کے لیے مکمل طور پر قدرتی اور محفوظ</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Lifetime IBD Management Guidance</strong> - Learn to manage your IBD naturally</span>
                <span className={styles.urduText}><strong>زندگی بھر کی آنتوں کی سوزش مینجمنٹ راہنمائی</strong> - اپنے آنتوں کی سوزش کو قدرتی طور پر قابو کریں</span>
              </div>
            </div>
            
            {/* <div className={styles.finalCtas}>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+923329622164"
                className={styles.finalPrimaryCta}
              >
                <RiPhoneFill />
                <div>
                  <span>SPEAK WITH IBD SPECIALIST DR. ASMA</span>
                  <span className={styles.ctaUrdu}>IBD سپیشلسٹ ڈاکٹر عاصمہ سے براہ راست بات کریں</span>
                  <small>Get Personalized IBD Advice</small>
                  <small className={styles.ctaUrdu}>ذاتی IBD مشورہ حاصل کریں</small>
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
                  <span>SPEAK WITH IBD EXPERT DR ASAD</span>
                  <span className={styles.ctaUrdu}>IBD ایکسپرٹ ڈاکٹر اسد سے براہ راست بات کریں</span>
                  <small>Send Your IBD Symptoms & Get Expert Opinion</small>
                  <small className={styles.ctaUrdu}>اپنی IBD علامات بھیجیں اور ماہرانہ رائے حاصل کریں</small>
                </div>
              </motion.a>
            </div> */}
            
            <div className={styles.finalGuarantee}>
              <div className={styles.guaranteeBadge}>
                <RiStethoscopeFill />
                <span><strong>COMPLETE IBD PATIENT SATISFACTION FOCUS</strong></span>
                <span className={styles.urduText}><strong>مکمل آنتوں کی سوزش کے مریض کی تسلی پر توجہ</strong></span>
              </div>
              <p>We are committed to your complete IBD wellness and will work with you until you achieve the comfort you deserve.</p>
              <p className={styles.urduText}>ہم آپ کی مکمل آنتوں کی سوزش کی صحت یابی کے لیے پرعزم ہیں اور آپ کے ساتھ اس وقت تک کام کریں گے جب تک آپ وہ آرام حاصل نہیں کر لیتے جس کے آپ مستحق ہیں۔</p>
            </div>
            
            <div className={styles.immediateHelp}>
              <FiClock className={styles.helpIcon} />
              <span><strong>IMMEDIATE IBD ATTENTION AVAILABLE:</strong> Call now and get same-day IBD relief guidance</span>
              <span className={styles.urduText}><strong>آنتوں کی سوزش کے لیے فوری توجہ دستیاب:</strong> ابھی کال کریں اور اسی دن آنتوں کی سوزش سے ریلیف کی راہنمائی حاصل کریں</span>
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
            <p>18+ Years Specializing in IBD Treatment</p>
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
          <span>✓ 1000+ IBD Patients Treated</span>
          <span>✓ 95% IBD Success Rate</span>
          <span>✓ 18+ Years IBD Experience</span>
          <span>✓ Zero Side Effects Guaranteed</span>
        </div>
      </footer>
      
      <ClientProviders/>
    </div>
  );
};

export default IBDLanding;
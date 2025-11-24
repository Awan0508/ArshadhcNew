import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill, RiArrowRightLine } from 'react-icons/ri';
import { FiClock, FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ClientProviders from '../app/ClientProviders';

export async function generateMetadata() {
  return {
    title: "Stop IBS Pain Naturally | 95% Success Rate | Rawalpindi | IBS کا قدرتی علاج",
    description: "Finally! Get lasting relief from IBS WITHOUT side effects. 18+ years expertise. 1000+ patients treated successfully. Book FREE consultation. | IBS کا مکمل علاج۔ 95% کامیابی۔ مفت کنسلٹیشن",
    keywords: "IBS treatment, IBS cure, homeopathic doctor, stomach pain relief, پیٹ درد کا علاج, IBS علاج, گیس کا علاج, بدہضمی",
    robots: { index: false, follow: false },
    openGraph: {
      title: "IBS Pain Relief - 95% Success Without Side Effects | IBS کا علاج",
      description: "Stop suffering! Natural treatment that actually works for IBS. Proven results. Book consultation now! | پیٹ کے درد، گیس، بدہضمی کا مستقل علاج",
      type: "website",
      url: "https://www.arshadhc.com/ibs",
      images: [
        {
          url: "https://www.arshadhc.com/images/ibs-landing.jpg",
          width: 1200,
          height: 630,
          alt: "Natural IBS Treatment at Arshad Homeopathic Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: "Stop IBS Pain - 95% Success Rate | IBS کا علاج",
      description: "Finally! Lasting relief from IBS without side effects. 18+ years expertise. | قدرتی ہومیوپیتھک علاج",
      image: "https://www.arshadhc.com/images/ibs-landing.jpg",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/ibs",
    },
  };
}

const IBSLanding = () => {
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
    name: "Irritable Bowel Syndrome (IBS)",
    alternateName: ["IBS", "Irritable Bowel Syndrome"],
    description: "Chronic digestive disorder causing abdominal pain, bloating, diarrhea, and constipation without inflammation",
    cause: "Stress, diet, gut sensitivity, nerve issues",
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Homeopathic IBS Treatment",
      description: "Natural, side-effect-free treatment for IBS with a 95% success rate",
      url: "https://www.arshadhc.com/ibs",
    },
  };

  const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  // IBS-specific symptoms list
  const symptomsList = [
    { en: "Severe Abdominal Pain & Cramping", ur: "پیٹ میں شدید درد اور مروڑ", icon: "😫" },
    { en: "Chronic Diarrhea (Loose Motions)", ur: "دستوں کی شکایت (پاخانہ ڈھیلا)", icon: "💩" },
    { en: "Constipation for Days", ur: "قبض کا مسئلہ (کئی دن تک)", icon: "🚽" },
    { en: "Urgent Need for Bathroom", ur: "بیت الخلا کی فوری ضرورت", icon: "🏃" },
    { en: "Bloating & Gas After Eating", ur: "کھانے کے بعد پیٹ پھولنا اور گیس", icon: "🎈" },
    { en: "Mucus in Stool", ur: "پاخانہ میں بلغم آنا", icon: "🫧" },
    { en: "Feeling of Incomplete Evacuation", ur: "پاخانہ مکمل نہ ہونے کا احساس", icon: "🔄" },
    { en: "Food Intolerances", ur: "کھانے سے الرجی", icon: "🚫" },
    { en: "Stress-Related Symptoms", ur: "پریشانی سے علامات بڑھنا", icon: "😥" },
    { en: "Alternating Diarrhea & Constipation", ur: "دست اور قبض کا بدلنا", icon: "🔄" }
  ];

  return (
    <div id="ibsadvert">
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
            <h3>🚨 Emergency IBS Relief</h3>
            <p>Are you in pain right now? Speak directly with our specialist doctors for immediate IBS relief guidance.</p>
            <p className={styles.urduText}>کیا آپ کو ابھی آنتوں کی غیر معمولی حساسیت کے مرض کی تکلیف ہے؟ فوری سکون کی راہنمائی کے لیے ہمارے ڈاکٹرز سے براہ راست بات کریں۔</p>
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
                ⚡ 95% SUCCESS RATE • 1000+ IBS PATIENTS TREATED | پچانوے فیصد کامیابی
              </div>
              
              <h1>
                <span className={styles.mainHeadline}>Tired of <span className={styles.highlight}>IBS Pain</span> Controlling Your Life?</span>
                <span className={styles.urduHeadline}>کیا <span className={styles.highlight}> آنتوں کی غیر معمولی حساسیت کے مرض  کی تکلیف </span>آپ کی زندگی کنٹرول کر رہی ہے؟</span>
                <span className={styles.subHeadline}>Finally Discover The Natural IBS Solution That Actually <span className={styles.highlight}>Works</span></span>
                <span className={styles.urduSubHeadline}>آنتوں کی غیر معمولی حساسیت کے مرض کا قدرتی علاج جو واقعی <span className={styles.highlight}>کام کرتا ہے</span></span>
              </h1>
              
              <p className={styles.heroSubtitle}>
                <strong>Stop the endless cycle of IBS pain, bloating, and bathroom anxiety.</strong> Our 18+ years proven homeopathic treatment addresses the <strong>root cause</strong> of your IBS—without side effects, without dependency, without breaking the bank.
              </p>
              <p className={styles.urduText}>
                <strong>آنتوں کی غیر معمولی حساسیت کے مرض کے درد، گیس اور بیت الخلا کی پریشانیوں کا خاتمہ کریں۔</strong> ہمارا 18+ سال کا ثابت شدہ ہومیوپیتھک علاج بغیر سائیڈ ایفیکٹس، بغیر انحصار، بغیر زیادہ خرچ کے آپ کی آنتوں کی غیر معمولی حساسیت کے مرض کی <strong>بنیادی وجہ</strong> پر کام کرتا ہے۔
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
                  <h3>WATCH: How We Cured IBS Patients</h3>
                  <p className={styles.urduText}>دیکھیں: ہم نے آنتوں کی غیر معمولی حساسیت کے مرض کے مریضوں کا علاج کیسے کیا</p>
                  <p>"I got my life back after 4 years of IBS suffering" - M Qasim</p>
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
            <h2>Do You Have These <span className={styles.highlight}>IBS Symptoms</span>?</h2>
            <p className={styles.urduText}>کیا آپ کو یہ <span className={styles.highlight}>آنتوں کی غیر معمولی حساسیت کے مرض کی علامات</span> ہیں؟</p>
            <p>If you're experiencing any of these IBS symptoms, you're not alone. We can help!</p>
            <p className={styles.urduText}>اگر آپ کو ان میں سے کوئی آنتوں کی غیر معمولی حساسیت کے مرض کی علامات ہیں تو آپ اکیلے نہیں ہیں۔ ہم مدد کر سکتے ہیں!</p>
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
            <h3>Don't Let IBS Control Your Life! We Understand Your Pain</h3>
            <p className={styles.urduText}>آنتوں کی غیر معمولی حساسیت کے مرض کو آپ کی زندگی کنٹرول نہ کرنے دیں! ہم آپ کی تکلیف سمجھتے ہیں</p> <br/>
            <div className={styles.badge}>
               Call for Immediate IBS Help
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
            <h2>Does This IBS Struggle Sound Familiar? 😔</h2>
            <p className={styles.urduText}>کیا یہ آنتوں کی غیر معمولی حساسیت کے مرض کی پریشانیاں آپ کو جانی پہچانی لگتی ہیں؟ 😔</p>
            <p>You're not alone. Most of our IBS patients felt the same way before treatment</p>
            <p className={styles.urduText}>آپ اکیلے نہیں ہیں۔ <span className={styles.highlight}>ہمارے زیادہ تر آنتوں کی غیر معمولی حساسیت کے مرض میں مبتلا مریض علاج سے پہلے ایسا ہی محسوس کرتے تھے</span> </p>
          </motion.div>
          
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>💊</div>
              <h3>IBS Medications Stopped Working</h3>
              <p className={styles.urduText}>IBS کی دواؤں کا اثر ختم ہو گیا</p>
              <p>"The IBS pills only worked for a few weeks, then the pain came back worse"</p>
              <p className={styles.urduText}>"IBS کی گولیاں صرف چند ہفتوں تک کام کرتی تھیں، پھر درد اور بدتر ہو گیا"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🚽</div>
              <h3>IBS Bathroom Anxiety</h3>
              <p className={styles.urduText}>IBS کی وجہ سے بیت الخلا کی پریشانی</p>
              <p>"I plan my entire day around bathroom locations because of my IBS"</p>
              <p className={styles.urduText}>"میں اپنا پورا دن بیت الخلا کی جگہوں کے گرد IBS کی وجہ سے پلان کرتا ہوں"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🍕</div>
              <h3>IBS Food Fear</h3>
              <p className={styles.urduText}>IBS کی وجہ سے کھانے کا خوف</p>
              <p>"I'm afraid to eat anything because I don't know what will trigger my IBS pain"</p>
              <p className={styles.urduText}>"میں کچھ بھی کھانے سے ڈرتا ہوں کیونکہ مجھے نہیں پتہ کس سے میرے IBS کا درد ہوگا"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>😔</div>
              <h3>Social Isolation from IBS</h3>
              <p className={styles.urduText}>IBS کی وجہ سے سماجی علیحدگی</p>
              <p>"I've canceled so many plans due to IBS that friends stopped inviting me"</p>
              <p className={styles.urduText}>"میں نے IBS کی وجہ سے اتنی ملاقاتیں منسوخ کیں کہ دوستوں نے بلانا ہی چھوڑ دیا"</p>
            </div>
          </div>
          
          <div className={styles.problemCta}>
            <h3>We Understand Your IBS Pain. And We Have The Solution.</h3>
            <p className={styles.urduText}>ہم آپ کی آنتوں کی غیر معمولی حساسیت کے مرض کی تکلیف سمجھتے ہیں۔ اور ہمارے پاس حل بھی ہے۔</p>
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
            <h2>Why Our IBS Treatment <span className={styles.highlight}>Actually Works</span> When Others Failed</h2>
            <p className={styles.urduText}>ہمارا آنتوں کی غیر معمولی حساسیت کے مرض کا علاج <span className={styles.highlight}>کیوں کام کرتا ہے</span> جب دوسرے ناکام ہو جاتے ہیں</p>
          </motion.div>
          
          <div className={styles.differenceGrid}>
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>1</div>
              <h3>Address IBS Root Causes</h3>
              <p className={styles.urduText}>آنتوں کی غیر معمولی حساسیت کے مرض کے مسئلے کی بنیادی وجہ تک پہنچیں</p>
              <p>We don't just mask IBS symptoms. We identify and treat the underlying triggers—stress, gut sensitivity, nerve issues, and food sensitivities.</p>
              <p className={styles.urduText}>ہم صرف IBS علامات کو چھپاتے نہیں ہیں۔ ہم بنیادی وجوہات کو پہچان کر ان کا علاج کرتے ہیں۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>2</div>
              <h3>Personalized IBS Medicine</h3>
              <p className={styles.urduText}>ذاتی نوعیت کا آنتوں کی غیر معمولی حساسیت کے مرض کا علاج</p>
              <p>No two IBS patients get the same treatment. Your medicine is customized based on your specific IBS type and symptoms.</p>
              <p className={styles.urduText}>ہر IBS مریض کا علاج الگ ہوتا ہے۔ آپ کی دوا آپ کی IBS کی قسم کے مطابق بنائی جاتی ہے۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>3</div>
              <h3>Natural & Safe for IBS</h3>
              <p className={styles.urduText}>آنتوں کی غیر معمولی حساسیت کے مرض کے لیے قدرتی اور محفوظ</p>
              <p>Zero side effects. No chemical dependency. Just your body's natural healing ability activated by our specialized homeopathic remedies for IBS.</p>
              <p className={styles.urduText}>سائیڈ ایفیکٹس سے پاک۔ کیمیکل سے پاک۔آنتوں کی غیر معمولی حساسیت کے مرض کے لیے ہماری مخصوص ہومیوپیتھک ادویات جسم کی قدرتی شفا یابی کی صلاحیت کو بیدار کرتی ہے۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>4</div>
              <h3>Proven IBS Track Record</h3>
              <p className={styles.urduText}>آنتوں کی غیر معمولی حساسیت کے مرض میں ثابت شدہ کامیابی</p>
              <p>95% success rate across 1000+ IBS patients. Real results documented over 18+ years of specialized IBS practice.</p>
              <p className={styles.urduText}>1000+ IBS مریضوں میں 95% کامیابی۔ 18+ سال کے تجربے میں ثابت شدہ نتائج۔</p>
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
            <h2>IBS <span className={styles.highlight}>Success Stories</span></h2>
            <p className={styles.urduText}>آنتوں کی غیر معمولی حساسیت کے مرض کی <span className={styles.highlight}>کامیابی کی کہانیاں</span></p>
            <p>Real IBS patients who found relief through our natural treatment</p>
            <p className={styles.urduText}>حقیقی آنتوں کی غیر معمولی حساسیت کے مرض میں مبتلا مریض جنہیں ہمارے قدرتی علاج سے آرام ملا</p>
          </motion.div>
          
          <div className={styles.testimonialGrid}>
            
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Dr Asad Awan is a good doctor. He is very simple and gentle in his behavior. He gives sufficient time to each patient. He studies the patient and disease meticulously. We can freely interact with the doctor in person or on call. He prefers patient relief. I never found a commercial nature in him. My treatment included severe constipation and after consulting with a few well-known homeopathic doctors from Islamabad, I consulted with Dr Asad Awan. After just 15 days of treatment I feel much better. My treatment duration completed in 1 month. Now I can confidently recommend him for any stomach, liver or digestive system issues. Thanks once again Dr Asad Awan for your help and kind support during my treatment."</div>
              <div className={styles.patientInfo}>
                <strong>Tabish Ejaz</strong>
                <span>★★★★★</span>
                <span>Severe IBS Constipation Resolved in 1 Month</span>
                <span className={styles.urduText}>شدید IBS قبض 1 ماہ میں حل ہوئی</span>
                <a href="https://maps.app.goo.gl/5KrYMq2E8DMKrTnB8" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>
            
            
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"I was having nasty stomach pains for months and I tried every single doctor in my city Peshawar but none helped to relieve my pain. One of my friends told me to try this homeopathic clinic in Rawalpindi. I checked out their website and gave them a call. The doctor took the time to understand my symptoms even though it was just over the phone and figure out exactly what was going on. Didn't rush me at all like other doctors. The doctor prescribed some homeopathic medicines for me and had them delivered right to my door. They were super easy to take. The medicine they gave me was so gentle. I was worried it wouldn't work but sure enough, within a couple weeks the pain was way better. A few more weeks and it was completely gone! I'm totally healed up now thanks to this doctor. I'd highly recommend consulting with them virtually if you're looking for natural healing. Five stars for saving me from this stomach issue!"</div>
              <div className={styles.patientInfo}>
                <strong>M Danial Mohmand ~ Peshawar</strong>
                <span>★★★★★</span>
                <span>Chronic IBS Pain Completely Gone</span>
                <span className={styles.urduText}>پرانا IBS درد مکمل ختم</span>
                <a href="https://g.co/kgs/EywqFRm" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>
            
            
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best Homeopathic clinic for IBS diarrhea. Hi My Name is Mehmood Abbasi. I have IBS diarrhea issue from last two years. I used a lot of medicine but couldn't get good relief. Then I found Arshad Homeopathic clinic on Google and called Dr Asad and discussed my problem. He gave me the medicine. I used the medicine properly and now my issue is resolved. Dr Asad is highly professional and has a nice personality. He gave me good guidance to maintain my health. Thank you Dr Asad for your help and best treatment."</div>
              <div className={styles.patientInfo}>
                <strong>Mehmood Abbasi ~ Rawalpindi</strong>
                <span>★★★★★</span>
                <span>2-Year IBS Diarrhea Resolved</span>
                <span className={styles.urduText}>2 سالہ IBS دستوں کا مسئلہ حل ہوا</span>
                <a href="https://maps.app.goo.gl/2QHMUF4oHVRjKddv7" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>
            
            
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"A very super duper clinic for all kind of patients and a brilliant doctor available as well. I'm satisfied with the way of your treatment and I think the people of Rawalpindi are very lucky to have a doctor like you. I pray for you, Allah give you success in future."</div>
              <div className={styles.patientInfo}>
                <strong>Bashir Khan ~ Peshawar</strong>
                <span>★★★★★</span>
                <span>Complete IBS Relief</span>
                <span className={styles.urduText}> IBS سے مکمل بہتری</span>
                <a href="https://g.co/kgs/J1Wys8K" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"I had constipation when I get the medicine from her I feel relax. She is very kind and good speak lady"</div>
              <div className={styles.patientInfo}>
                <strong>Naveed Rehman ~ IBS Constipation</strong>
                <span>★★★★★</span>
                <span>Complete IBS Constipation Relief</span>
                <span className={styles.urduText}> IBS قبض سے مکمل بہتری</span>
                <a href="https://maps.app.goo.gl/npN895rfZRFeuJbU6" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>


          </div>
          
          <div className={styles.testimonialsCta}>
            <h3>Join Those Who Have Found IBS Relief</h3>
            <p className={styles.urduText}>اُن آنتوں کی غیر معمولی حساسیت کے مرض میں مبتلا مریضوں میں شامل ہوں جنہیں آرام ملا</p>
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
            <div className={styles.urgencyBadge}>🌟 <br/> Treatment For Irritable Bowel Syndrome Is Possible <br/> آنتوں کی غیر معمولی حساسیت کے مرض کا علاج ممکن ہے</div>
            
            <h2>Your Journey to Complete IBS Wellness Starts Now</h2>
            <p className={styles.urduText}>آپ کی آنتوں کی غیر معمولی حساسیت کے مرض سے مکمل صحت یابی کا سفر اب شروع ہوتا ہے</p>
            
            <p>Don't let IBS control your life any longer. Our natural IBS treatment has helped thousands regain their comfort and confidence.</p>
            <p className={styles.urduText}>IBS کو اپنی زندگی کنٹرول نہ کرنے دیں۔آنتوں کی غیر معمولی حساسیت کے مرض  ہمارے قدرتی علاج نے ہزاروں کو ان کا سکون اور اعتماد واپس دلایا ہے۔</p>
            
            <div className={styles.urgencyStats}>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <strong>1,000+</strong>
                </motion.div>
                <span>IBS Patients Helped</span>
                <span className={styles.urduText}>IBS مریضوں کی مدد</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <strong>18+</strong>
                </motion.div>
                <span>Years of IBS Experience</span>
                <span className={styles.urduText}>سالوں کا IBS تجربہ</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <strong>95%</strong>
                </motion.div>
                <span>Report IBS Improvement</span>
                <span className={styles.urduText}>IBS مریضوں نے بہتری رپورٹ کی</span>
              </div>
            </div>
            
            <div className={styles.patientPromise}>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Personalized IBS Treatment Plans</strong> - Tailored specifically for your IBS type</span>
                <span className={styles.urduText}><strong>ذاتی IBS علاج کے منصوبے</strong> - آپ کی IBS کی قسم کے مطابق دوا کا انتخاب کیا جاتا ہے</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Zero Side Effects</strong> - Completely natural and safe for IBS</span>
                <span className={styles.urduText}><strong>سائیڈ ایفیکٹس سے پاک</strong> - IBS کے لیے مکمل طور پر قدرتی اور محفوظ</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Lifetime IBS Dietary Guidance</strong> - Learn to manage your IBS naturally</span>
                <span className={styles.urduText}><strong>زندگی بھر کی IBS غذائی راہنمائی</strong> - اپنے IBS کو قدرتی طور پر قابو کریں</span>
              </div>
            </div>
                      
            <div className={styles.finalGuarantee}>
              <div className={styles.guaranteeBadge}>
                <RiStethoscopeFill />
                <span><strong>COMPLETE IBS PATIENT SATISFACTION FOCUS</strong></span>
                <span className={styles.urduText}><strong>مکمل IBS مریض کی تسلی پر توجہ</strong></span>
              </div>
              <p>We are committed to your complete IBS wellness and will work with you until you achieve the comfort you deserve.</p>
              <p className={styles.urduText}>ہم آپ کی مکمل IBS صحت یابی کے لیے پرعزم ہیں اور آپ کے ساتھ اس وقت تک کام کریں گے جب تک آپ وہ آرام حاصل نہیں کر لیتے جس کے آپ مستحق ہیں۔</p>
            </div>
            
            <div className={styles.immediateHelp}>
              <FiClock className={styles.helpIcon} />
              <span><strong>IMMEDIATE IBS ATTENTION AVAILABLE:</strong> Call now and get same-day IBS relief guidance</span>
              <span className={styles.urduText}><strong>IBS کے لیے فوری توجہ دستیاب:</strong> ابھی کال کریں اور اسی دن IBS سے ریلیف کی راہنمائی حاصل کریں</span>
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
            <p>18+ Years Specializing in IBS Treatment</p>
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
          <span>✓ 1000+ IBS Patients Treated</span>
          <span>✓ 95% IBS Success Rate</span>
          <span>✓ 18+ Years IBS Experience</span>
          <span>✓ Zero Side Effects Guaranteed</span>
        </div>
      </footer>
      
      <ClientProviders/>
    </div>
  );
};

export default IBSLanding;
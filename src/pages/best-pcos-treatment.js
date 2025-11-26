import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill, RiArrowRightLine } from 'react-icons/ri';
import { FiClock, FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const PcosLanding = () => {
  const [active, setActive] = useState(false);
  const [player, setPlayer] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoContainerRef = useRef(null);
  const [showEmergencyPopup, setShowEmergencyPopup] = useState(false);

  // Auto-show emergency popup after 50 seconds
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

  // PCOS specific symptoms list
  const symptomsList = [
    { en: "Irregular Periods", ur: "بے قاعدہ ماہواری", icon: "🔄" },
    { en: "Weight Gain & Difficulty Losing Weight", ur: "وزن میں اضافہ اور وزن کم کرنے میں دشواری", icon: "⚖️" },
    { en: "Excess Facial & Body Hair", ur: "چہرے اور جسم پر زیادہ بال", icon: "🧔" },
    { en: "Acne & Oily Skin", ur: "مہاسے اور چکنی جلد", icon: "🤕" },
    { en: "Hair Loss & Thinning", ur: "بالوں کا گرنا اور پتلا ہونا", icon: "💇" },
    { en: "Mood Swings & Depression", ur: "موڈ میں تبدیلی اور ڈپریشن", icon: "😔" },
    { en: "Fatigue & Low Energy", ur: "تھکاوٹ اور کم توانائی", icon: "😴" },
    { en: "Sleep Problems", ur: "نیند کے مسائل", icon: "🛌" },
    { en: "Headaches", ur: "سردرد", icon: "🤕" },
    { en: "Pelvic Pain", ur: "پیڑو کا درد", icon: "🩹" },
    { en: "Dark Skin Patches", ur: "جلد پر سیاہ دھبے", icon: "⚫" },
    { en: "Sugar Cravings", ur: "میٹھا کھانے کی شدید خواہش", icon: "🍬" }
  ];

  return (
    <div id="pcosadvert">
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
            <h3>🚨 PCOS Emergency Consultation</h3>
            <p>Are you struggling with severe PCOS symptoms? Speak directly with our specialist doctor for immediate guidance.</p>
            <p className={styles.urduText}>کیا آپ پی سی او ایس کی شدید علامات سے پریشان ہیں؟ فوری راہنمائی کے لیے ہماری ماہر ڈاکٹر سے براہ راست بات کریں۔</p>
            <div className={styles.popupButtons}>
              <a href="https://wa.me/923329622164" className={styles.popupWhatsapp}>
                <RiWhatsappFill /> WhatsApp Dr. Asma | ڈاکٹر عاصمہ
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
            </div>
          </div>
        </div>
      </header>

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
                ⚡ 95% SUCCESS RATE • 1000+ PCOS PATIENTS TREATED | پچانوے فیصد کامیابی
              </div>
              
              <h1>
                <span className={styles.mainHeadline}>Tired of <span className={styles.highlight}>PCOS Symptoms</span> Controlling Your Life?</span>
                <span className={styles.urduHeadline}>کیا <span className={styles.highlight}>پی سی او ایس کی علامات</span> آپ کی زندگی کنٹرول کر رہی ہیں؟</span>
                <span className={styles.subHeadline}>Finally Discover The Natural Solution That Actually <span className={styles.highlight}>Works Without Hormones</span></span>
                <span className={styles.urduSubHeadline}>پی سی او ایس کا قدرتی علاج جو واقعی <span className={styles.highlight}>بغیر ہارمونز کام کرتا ہے</span></span>
              </h1>
              
              <p className={styles.heroSubtitle}>
                <strong>Stop the endless cycle of irregular periods, weight gain, and hormonal imbalances.</strong> Our 18+ years proven homeopathic treatment addresses the <strong>root cause</strong> of your PCOS—without hormonal side effects, without surgery, without dependency on medications.
              </p>
              <p className={styles.urduText}>
                <strong>بے قاعدہ ماہواری، وزن میں اضافہ اور ہارمونل عدم توازن کے خاتمہ کریں۔</strong> ہمارا 18+ سال کا ثابت شدہ ہومیوپیتھک علاج آپ کے پی سی او ایس کی <strong>جڑ</strong> پر کام کرتا ہے—بغیر ہارمونز کے سائیڈ ایفیکٹس، بغیر آپریشن، ادویات پر انحصار کے بغیر۔
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
                  <h3>WATCH: How We Cured PCOS Patients</h3>
                  <p className={styles.urduText}>دیکھیں: ہم نے پی سی او ایس کے مریضوں کا علاج کیسے کیا</p>
                  <p>"My periods became regular and I lost 15kg weight naturally" - PCOS Patient Review</p>
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
            <h2>Do You Have These <span className={styles.highlight}>PCOS Symptoms</span>?</h2>
            <p className={styles.urduText}>کیا آپ کو یہ <span className={styles.highlight}>پی سی او ایس کی علامات</span> ہیں؟</p>
            <p>If you're experiencing any of these PCOS symptoms, you're not alone. We can help!</p>
            <p className={styles.urduText}>اگر آپ کو ان میں سے کوئی پی سی او ایس کی علامات ہیں تو آپ اکیلے نہیں ہیں۔ ہم مدد کر سکتے ہیں!</p>
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
            <h3>Don't Suffer in Silence! We Understand Your PCOS Struggle</h3>
            <p className={styles.urduText}>خاموشی سے تکلیف نہ اٹھائیں! ہم آپ کی پی سی او ایس کی جدوجہد سمجھتے ہیں</p> <br/>
            <div className={styles.badge}>
               Call for Immediate PCOS Relief
            </div><br/>
            <div className={styles.symptomPhoneCta}>
              <a href="tel:+923329622164" className={styles.symptomPhone}>
                <RiPhoneFill /> Dr. Asma: 0332 9622164
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
            <h2>Does This PCOS Struggle Sound Familiar? 😔</h2>
            <p className={styles.urduText}>کیا یہ پی سی او ایس کی جدوجہد آپ کو جانی پہچانی لگتی ہے؟ 😔</p>
            <p>You're not alone. Most of our PCOS patients felt the same way before treatment</p>
            <p className={styles.urduText}>آپ اکیلے نہیں ہیں۔ <span className={styles.highlight}>ہمارے زیادہ تر پی سی او ایس مریض علاج سے پہلے ایسا ہی محسوس کرتے تھے</span> </p>
          </motion.div>
          
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🔄</div>
              <h3>Irregular Periods for Months</h3>
              <p className={styles.urduText}>مہینوں بے قاعدہ ماہواری</p>
              <p>"I never know when my periods will come, it's so unpredictable and frustrating"</p>
              <p className={styles.urduText}>"مجھے کبھی پتہ نہیں ہوتا کہ میری ماہواری کب آئے گی، یہ بہت غیر متوقع اور پریشان کن ہے"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>⚖️</div>
              <h3>Weight Gain Despite Dieting</h3>
              <p className={styles.urduText}>ڈائٹنگ کے باوجود وزن میں اضافہ</p>
              <p>"No matter how much I diet or exercise, the weight just doesn't come off"</p>
              <p className={styles.urduText}>"چاہے میں کتنی ہی ڈائٹ یا ورزش کروں، وزن کم نہیں ہوتا"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🧔</div>
              <h3>Excess Hair Growth</h3>
              <p className={styles.urduText}>جسم پر زیادہ بال</p>
              <p>"I spend so much time and money on hair removal, it's emotionally draining"</p>
              <p className={styles.urduText}>"میں بالوں کو ہٹانے پر بہت زیادہ وقت اور پیسہ خرچ کرتی ہوں، یہ جذباتی طور پر تھکا دینے والا ہے"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>😔</div>
              <h3>Mood Swings & Low Confidence</h3>
              <p className={styles.urduText}>موڈ میں تبدیلی اور کم خود اعتمادی</p>
              <p>"My mood changes suddenly and I don't feel confident about my appearance"</p>
              <p className={styles.urduText}>"میرا موڈ اچانک بدل جاتا ہے اور مجھے اپنی ظاہری شکل پر اعتماد محسوس نہیں ہوتا"</p>
            </div>
          </div>
          
          <div className={styles.problemCta}>
            <h3>We Understand Your PCOS Struggle. And We Have The Solution.</h3>
            <p className={styles.urduText}>ہم آپ کی پی سی او ایس کی جدوجہد سمجھتے ہیں۔ اور ہمارے پاس حل ہے۔</p>
            <br/>
            <div className={styles.problemPhoneCta}>
              <a href="tel:+923329622164" className={styles.problemPhone}>
                <RiPhoneFill />  Call Dr. Asma Now
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
            <h2>Why Our PCOS Treatment <span className={styles.highlight}>Actually Works</span> When Others Failed</h2>
            <p className={styles.urduText}>ہمارا پی سی او ایس علاج <span className={styles.highlight}>کیوں کام کرتا ہے</span> جب دوسرے ناکام ہو جاتے ہیں</p>
          </motion.div>
          
          <div className={styles.differenceGrid}>
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>1</div>
              <h3>No Hormonal Side Effects</h3>
              <p className={styles.urduText}>ہارمونز کے سائیڈ ایفیکٹس نہیں</p>
              <p>Complete PCOS management without weight gain, mood swings, or other hormonal side effects. Natural hormone balancing.</p>
              <p className={styles.urduText}>وزن میں اضافہ، موڈ میں تبدیلی یا دیگر ہارمونل سائیڈ ایفیکٹس کے بغیر مکمل پی سی او ایس مینجمنٹ۔ قدرتی ہارمون بیلنسنگ۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>2</div>
              <h3>Address Root Causes</h3>
              <p className={styles.urduText}>بنیادی وجوہات کا علاج</p>
              <p>We don't just manage symptoms. We identify and treat underlying causes—insulin resistance, inflammation, hormonal imbalance.</p>
              <p className={styles.urduText}>ہم صرف علامات کا انتظام نہیں کرتے۔ ہم بنیادی وجوہات کو پہچان کر ان کا علاج کرتے ہیں۔</p>
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
              <p>95% success rate across 1000+ PCOS patients. Real results documented over 18+ years of specialized practice.</p>
              <p className={styles.urduText}>1000+ پی سی او ایس مریضوں میں 95% کامیابی۔ 18+ سال کے تجربے میں ثابت شدہ نتائج۔</p>
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
            <h2>PCOS <span className={styles.highlight}>Success Stories</span></h2>
            <p className={styles.urduText}>پی سی او ایس <span className={styles.highlight}>کامیابی کی کہانیاں</span></p>
            <p>Real PCOS patients who found relief through our natural treatment</p>
            <p className={styles.urduText}>حقیقی پی سی او ایس مریض جنہیں ہمارے قدرتی علاج سے آرام ملا</p>
          </motion.div>
          
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Dr Asma is very kind and corporate. she listen and quick response. I have PCOS last 2 years and facing many problems with other medicine but when i get Homeopathic medicine,  I have lose weight and even convinced with 2 months use of medicine. I am very satisfied and recommend for PCOS problems."</div>
              <div className={styles.patientInfo}>
                <strong>Madi Rehman ~ Islamabad</strong>
                <span>★★★★★</span>
                <span>PCOS - Regular Periods From Last 2 Years</span>
                <span className={styles.urduText}>پی سی او ایس - پچھلے 2 سال سے باقاعدہ ماہواری</span>
                <a href="https://g.co/kgs/2TYRyzV" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"I was suffering from Polycystic ovary syndrome (PCOS), and consulted many doctors in Rawalpindi and Islamabad, but no luck then friend of mine suggested about Dr.Asma at Arshid Homeopathic Clinic, She perfectly diagnosed and treated my problem and now I am absolutely healthy, also all other health issues casued by PCOS like Low HB, inflammation, joints pain etc. All are gone now Alhamdulillah. Thanks to Dr Asma."</div>
              <div className={styles.patientInfo}>
                <strong>Rabia Batool ~ Rawalpindi</strong>
                <span>★★★★★</span>
                <span>PCOS - Complete Recovery</span>
                <span className={styles.urduText}>پی سی او ایس - مکمل صحت یابی</span>
                <a href="https://g.co/kgs/Cn5c95U" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Female Doctor “Dr. Asma” is very experienced and professional, Recommend everyone to experience her professionalism"</div>
              <div className={styles.patientInfo}>
                <strong>Naveed Anjum ~ Rawalpindi</strong>
                <span>★★★★★</span>
                <span>His Wife Cured from PCOS</span>
                <span className={styles.urduText}>بیگم کا پی سی او ایس کا کامیاب علاج  </span>
                <a href="https://g.co/kgs/E8Rwn4u" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialsCta}>
            <h3>Join Those Who Have Found PCOS Relief Without Hormones</h3>
            <p className={styles.urduText}>اُن افراد میں شامل ہوں جنہیں بغیر ہارمونز پی سی او ایس سے آرام ملا</p>
            <div className={styles.testimonialPhoneCta}>
              <a href="tel:+923329622164" className={styles.testimonialPhone}>
                <RiPhoneFill /> Dr. Asma: 0332 9622164
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
            <div className={styles.urgencyBadge}> SPECIAL PCOS ATTENTION GUARANTEED <br/> خصوصی توجہ کی ضمانت</div>
            
            <h2>Your Journey to Hormonal Balance Starts Now</h2>
            <p className={styles.urduText}>آپ کے ہارمونل بیلنس کے سفر کا آغاز اب ہوتا ہے</p>
            
            <p>Don't let PCOS symptoms control your life any longer. Our natural treatment has helped thousands regulate periods, lose weight, and balance hormones naturally.</p>
            <p className={styles.urduText}>پی سی او ایس کی علامات کو اپنی زندگی پر حکومت نہ کرنے دیں۔ ہمارے قدرتی علاج نے ہزاروں کو ماہواری کو باقاعدہ کرنے، وزن کم کرنے اور ہارمونز کو قدرتی طور پر بیلنس کرنے میں مدد کی ہے۔</p>
            
            <div className={styles.urgencyStats}>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <strong>1,000+</strong>
                </motion.div>
                <span>PCOS Patients Helped</span>
                <span className={styles.urduText}>پی سی او ایس مریضوں کی مدد</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <strong>18+</strong>
                </motion.div>
                <span>Years of PCOS Experience</span>
                <span className={styles.urduText}>سالوں کا پی سی او ایس تجربہ</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <strong>95%</strong>
                </motion.div>
                <span>Success Rate</span>
                <span className={styles.urduText}>کامیابی کی شرح</span>
              </div>
            </div>
            
            <div className={styles.patientPromise}>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>No Hormonal Side Effects</strong> - Complete healing without synthetic hormones</span>
                <span className={styles.urduText}><strong>ہارمونز کے سائیڈ ایفیکٹس نہیں</strong> - مصنوعی ہارمونز کے بغیر مکمل شفا</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Zero Side Effects</strong> - Completely natural and safe</span>
                <span className={styles.urduText}><strong>سائیڈ ایفیکٹس سے پاک</strong> - مکمل طور پر قدرتی اور محفوظ</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Restore Regular Cycles</strong> - Regain your menstrual regularity</span>
                <span className={styles.urduText}><strong>باقاعدہ سائیکل بحال کریں</strong> - اپنی ماہواری کی باقاعدگی واپس پائیں</span>
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
                  <small>Get Personalized PCOS Relief Advice</small>
                  <small className={styles.ctaUrdu}>ذاتی پی سی او ایس آرام کی راہنمائی حاصل کریں</small>
                </div>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/923329622164"
                className={styles.finalSecondaryCta}
              >
                <RiWhatsappFill />
                <div>
                  <span>WHATSAPP DR. ASMA</span>
                  <span className={styles.ctaUrdu}>ڈاکٹر عاصمہ کو واٹس ایپ کریں</span>
                  <small>Send Your PCOS Symptoms & Get Expert Opinion</small>
                  <small className={styles.ctaUrdu}>اپنی پی سی او ایس کی علامات بھیجیں اور ماہرانہ رائے حاصل کریں</small>
                </div>
              </motion.a>
            </div>
            
            <div className={styles.finalGuarantee}>
              <div className={styles.guaranteeBadge}>
                <RiStethoscopeFill />
                <span><strong>COMPLETE PCOS PATIENT SATISFACTION FOCUS</strong></span>
                <span className={styles.urduText}><strong>مکمل پی سی او ایس مریض کی تسلی پر توجہ</strong></span>
              </div>
              <p>We are committed to your complete PCOS relief and will work with you until you achieve the hormonal balance and regular cycles you deserve.</p>
              <p className={styles.urduText}>ہم آپ کے پی سی او ایس کے مکمل خاتمے کے لیے پرعزم ہیں اور آپ کے ساتھ اس وقت تک کام کریں گے جب تک آپ وہ ہارمونل بیلنس اور باقاعدہ سائیکل حاصل نہیں کر لیتے جس کے آپ مستحق ہیں۔</p>
            </div>
            
            <div className={styles.immediateHelp}>
              <FiClock className={styles.helpIcon} />
              <span><strong>IMMEDIATE PCOS ATTENTION AVAILABLE:</strong> Call now and get same-day consultation</span>
              <span className={styles.urduText}><strong>فوری پی سی او ایس توجہ دستیاب:</strong> ابھی کال کریں اور اسی دن کنسلٹیشن حاصل کریں</span>
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
            <p>18+ Years Specializing in PCOS Treatment</p>
          </div>
          
          <div className={styles.footerCtas}>
            <a href="tel:+923329622164" className={styles.footerPhone}>
              <RiWhatsappFill /> Dr Asma: 0332 9622164 
            </a>
          </div>
        </div>
        
        <div className={styles.trustFooter}>
          <span>✓ 1000+ PCOS Patients Treated</span>
          <span>✓ 95% Success Rate</span>
          <span>✓ 18+ Years PCOS Experience</span>
          <span>✓ Hormone-Free Treatment Guaranteed</span>
        </div>
      </footer>
    </div>
  );
};

export default PcosLanding;
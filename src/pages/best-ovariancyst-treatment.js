import styles from '../styles/adLanding.module.css';
import { RiWhatsappFill, RiCheckboxCircleFill, RiStethoscopeFill, RiPhoneFill, RiArrowRightLine } from 'react-icons/ri';
import { FiClock, FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const OvarianCystLanding = () => {
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
        videoId: 'ZLsQ_p0HscU',
        playerVars: {
          'autoplay': 1,
          'mute': 1,
          'loop': 1,
          'playlist': 'ZLsQ_p0HscU',
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

  // Ovarian Cyst specific symptoms list
  const symptomsList = [
    { en: "Pelvic Pain & Discomfort", ur: "پیڑو کا درد اور بے چینی", icon: "🩹" },
    { en: "Lower Abdominal Pain", ur: "پیٹ کے نچلے حصے کا درد", icon: "🤰" },
    { en: "Bloating & Fullness", ur: "پیٹ پھولنا اور بھرا ہوا محسوس ہونا", icon: "🎈" },
    { en: "Pain During Intercourse", ur: "جماع کے دوران درد", icon: "💔" },
    { en: "Irregular Periods", ur: "بے قاعدہ ماہواری", icon: "🔄" },
    { en: "Frequent Urination", ur: "بار بار پیشاب آنا", icon: "🚽" },
    { en: "Difficulty Emptying Bladder", ur: "مثانے کو مکمل خالی کرنے میں دشواری", icon: "💧" },
    { en: "Pain During Bowel Movements", ur: "قضائے حاجت کے دوران درد", icon: "😫" },
    { en: "Nausea & Vomiting", ur: "متلی اور الٹی", icon: "🤢" },
    { en: "Breast Tenderness", ur: "چھاتیوں میں درد", icon: "👙" },
    { en: "Lower Back Pain", ur: "کمر کے نچلے حصے کا درد", icon: "🔙" },
    { en: "Fatigue & Weakness", ur: "تھکاوٹ اور کمزوری", icon: "😴" }
  ];

  return (
    <div id="ovariancystadvert">
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
            <h3>🚨 Ovarian Cyst Emergency Consultation</h3>
            <p>Are you suffering from severe ovarian cyst pain? Speak directly with our specialist doctor for immediate guidance.</p>
            <p className={styles.urduText}>کیا آپ بیضہ دانی کے سسٹ کے شدید درد سے پریشان ہیں؟ فوری راہنمائی کے لیے ہماری ماہر ڈاکٹر سے براہ راست بات کریں۔</p>
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
                ⚡ 95% SUCCESS RATE • 800+ OVARIAN CYST PATIENTS TREATED | پچانوے فیصد کامیابی
              </div>
              
              <h1>
                <span className={styles.mainHeadline}>Suffering from <span className={styles.highlight}>Ovarian Cyst Pain</span>?</span>
                <span className={styles.urduHeadline}>کیا آپ <span className={styles.highlight}>بیضہ دانی کے سسٹ کے درد</span> سے پریشان ہیں؟</span>
                <span className={styles.subHeadline}>Finally Discover The Natural Solution That Actually <span className={styles.highlight}>Works Without Surgery</span></span>
                <span className={styles.urduSubHeadline}>بیضہ دانی کے سسٹ کا قدرتی علاج جو واقعی <span className={styles.highlight}>بغیر آپریشن کام کرتا ہے</span></span>
              </h1>
              
              <p className={styles.heroSubtitle}>
                <strong>Stop the endless cycle of pelvic pain, discomfort, and fear of surgery.</strong> Our 18+ years proven homeopathic treatment resolves ovarian cysts <strong>naturally</strong>—without surgery, without hormonal side effects, without dependency on painkillers.
              </p>
              <p className={styles.urduText}>
                <strong>پیڑو کے درد، بے چینی اور آپریشن کے خوف کا خاتمہ کریں۔</strong> ہمارا 18+ سال کا ثابت شدہ ہومیوپیتھک علاج بیضہ دانی کے سسٹ کو <strong>قدرتی طور پر</strong> حل کرتا ہے—بغیر آپریشن، بغیر ہارمونز کے سائیڈ ایفیکٹس، درد کش ادویات پر انحصار کے بغیر۔
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
                  <h3>WATCH: How We Cured Ovarian Cyst Patients</h3>
                  <p className={styles.urduText}>دیکھیں: ہم نے بیضہ دانی کے سسٹ کے مریضوں کا علاج کیسے کیا</p>
                  <p>"My ovarian cyst disappeared completely without surgery" - Ovarian Cyst Patient Review</p>
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
            <h2>Do You Have These <span className={styles.highlight}>Ovarian Cyst Symptoms</span>?</h2>
            <p className={styles.urduText}>کیا آپ کو یہ <span className={styles.highlight}>بیضہ دانی کے سسٹ کی علامات</span> ہیں؟</p>
            <p>If you're experiencing any of these ovarian cyst symptoms, you're not alone. We can help!</p>
            <p className={styles.urduText}>اگر آپ کو ان میں سے کوئی بیضہ دانی کے سسٹ کی علامات ہیں تو آپ اکیلے نہیں ہیں۔ ہم مدد کر سکتے ہیں!</p>
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
            <h3>Don't Suffer in Silence! We Understand Your Ovarian Cyst Pain</h3>
            <p className={styles.urduText}>خاموشی سے تکلیف نہ اٹھائیں! ہم آپ کے بیضہ دانی کے سسٹ کے درد کو سمجھتے ہیں</p> <br/>
            <div className={styles.badge}>
               Call for Immediate Ovarian Cyst Relief
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
            <h2>Does This Ovarian Cyst Struggle Sound Familiar? 😔</h2>
            <p className={styles.urduText}>کیا یہ بیضہ دانی کے سسٹ کی جدوجہد آپ کو جانی پہچانی لگتی ہے؟ 😔</p>
            <p>You're not alone. Most of our ovarian cyst patients felt the same way before treatment</p>
            <p className={styles.urduText}>آپ اکیلے نہیں ہیں۔ <span className={styles.highlight}>ہمارے زیادہ تر بیضہ دانی کے سسٹ مریض علاج سے پہلے ایسا ہی محسوس کرتے تھے</span> </p>
          </motion.div>
          
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🩹</div>
              <h3>Constant Pelvic Pain</h3>
              <p className={styles.urduText}>مسلسل پیڑو کا درد</p>
              <p>"The pelvic pain never seems to go away, it's always there making me uncomfortable"</p>
              <p className={styles.urduText}>"پیڑو کا درد کبھی ختم نہیں ہوتا، یہ ہمیشہ موجود رہتا ہے اور مجھے بے چین رکھتا ہے"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>🎈</div>
              <h3>Bloating & Discomfort</h3>
              <p className={styles.urduText}>پیٹ پھولنا اور بے چینی</p>
              <p>"I look pregnant all the time due to bloating, it's embarrassing and painful"</p>
              <p className={styles.urduText}>"پیٹ پھولنے کی وجہ سے میں ہمیشہ حاملہ نظر آتی ہوں، یہ شرمناک اور دردناک ہے"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>💔</div>
              <h3>Pain During Intimacy</h3>
              <p className={styles.urduText}>جماع کے دوران درد</p>
              <p>"Intimacy has become painful and stressful instead of enjoyable"</p>
              <p className={styles.urduText}>"جماع لطف اندوز ہونے کے بجائے دردناک اور پریشان کن ہو گیا ہے"</p>
            </div>
            
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>😔</div>
              <h3>Fear of Surgery</h3>
              <p className={styles.urduText}>آپریشن کا خوف</p>
              <p>"I'm terrified of surgery and the potential impact on my health"</p>
              <p className={styles.urduText}>"میں آپریشن اور اس کے اپنی صحت پر ممکنہ اثرات سے خوفزدہ ہوں"</p>
            </div>
          </div>
          
          <div className={styles.problemCta}>
            <h3>We Understand Your Ovarian Cyst Pain. And We Have The Solution.</h3>
            <p className={styles.urduText}>ہم آپ کے بیضہ دانی کے سسٹ کے درد کو سمجھتے ہیں۔ اور ہمارے پاس حل ہے۔</p>
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
            <h2>Why Our Ovarian Cyst Treatment <span className={styles.highlight}>Actually Works</span> When Others Failed</h2>
            <p className={styles.urduText}>ہمارا بیضہ دانی کے سسٹ کا علاج <span className={styles.highlight}>کیوں کام کرتا ہے</span> جب دوسرے ناکام ہو جاتے ہیں</p>
          </motion.div>
          
          <div className={styles.differenceGrid}>
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>1</div>
              <h3>No Surgery Required</h3>
              <p className={styles.urduText}>آپریشن کی ضرورت نہیں</p>
              <p>Complete ovarian cyst resolution without risky operations, hospitalization, or long recovery periods. Natural cyst absorption.</p>
              <p className={styles.urduText}>خطرناک آپریشن، ہسپتال میں داخلے یا طویل آرام کے بغیر مکمل حل۔ قدرتی سسٹ جذب۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>2</div>
              <h3>Address Root Causes</h3>
              <p className={styles.urduText}>مسئلے کی جڑ تک پہنچیں</p>
              <p>We don't just manage cyst pain. We identify and treat underlying causes—hormonal imbalance, inflammation, lymphatic drainage.</p>
              <p className={styles.urduText}>ہم صرف سسٹ کے درد کا انتظام نہیں کرتے۔ ہم بنیادی وجوہات کو پہچان کر ان کا علاج کرتے ہیں۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>3</div>
              <h3>Natural & Safe</h3>
              <p className={styles.urduText}>قدرتی اور محفوظ</p>
              <p>Zero side effects. No hormonal dependency. Just your body's natural healing ability activated by our specialized remedies.</p>
              <p className={styles.urduText}>سائیڈ ایفیکٹس سے پاک۔ ہارمونز پر انحصار نہیں۔ جسم کی قدرتی شفا یابی کی صلاحیت کو بیدار کریں۔</p>
            </div>
            
            <div className={styles.differenceCard}>
              <div className={styles.differenceNumber}>4</div>
              <h3>Proven Track Record</h3>
              <p className={styles.urduText}>ثابت شدہ کامیابی</p>
              <p>95% success rate across 800+ ovarian cyst patients. Real results documented over 18+ years of specialized practice.</p>
              <p className={styles.urduText}>800+ بیضہ دانی کے سسٹ مریضوں میں 95% کامیابی۔ 18+ سال کے تجربے میں ثابت شدہ نتائج۔</p>
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
            <h2>Ovarian Cyst <span className={styles.highlight}>Success Stories</span></h2>
            <p className={styles.urduText}>بیضہ دانی کے سسٹ <span className={styles.highlight}>کامیابی کی کہانیاں</span></p>
            <p>Real ovarian cyst patients who found relief through our natural treatment</p>
            <p className={styles.urduText}>حقیقی بیضہ دانی کے سسٹ مریض جنہیں ہمارے قدرتی علاج سے آرام ملا</p>
          </motion.div>
          
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Highly recommended. Best medicine with no side effects.My go-to for all my medical problems."</div>
              <div className={styles.patientInfo}>
                <strong>Anusha Imtiaz Satti ~ Islamabad</strong>
                <span>★★★★★</span>
                <span>Ovarian Cysts - Complete Resolution</span>
                <span className={styles.urduText}>بیضہ دانی کے سسٹ - مکمل حل</span>
                <a href="https://maps.app.goo.gl/HhhkWQhFts5TPGza8" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Best homeopathic dr. I always visit their clinic when have any health issue and never return disappointed"</div>
              <div className={styles.patientInfo}>
                <strong>Samana Zaynab ~ Rawalpindi</strong>
                <span>★★★★★</span>
                <span>Multiple Health Issues - All Resolved</span>
                <span className={styles.urduText}>متعدد صحت سے متعلق مسائل - سب حل ہو گئے</span>
                <a href="https://maps.app.goo.gl/HQaE9S8yzTPMJRhM9" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>"Dr. Asma is a very professional doctor. I am completely satisfied with her medicine."</div>
              <div className={styles.patientInfo}>
                <strong>Wania Khan ~ Rawalpindi</strong>
                <span>★★★★★</span>
                <a href="https://maps.app.goo.gl/TwMR25JuU5FnfAuW6" className={styles.reviewLink} target='_blank' rel="noopener noreferrer">Google Review</a>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialsCta}>
            <h3>Join Those Who Have Found Ovarian Cyst Relief Without Surgery</h3>
            <p className={styles.urduText}>اُن افراد میں شامل ہوں جنہیں بغیر آپریشن بیضہ دانی کے سسٹ سے آرام ملا</p>
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
            <div className={styles.urgencyBadge}> SPECIAL OVARIAN CYST ATTENTION GUARANTEED <br/> خصوصی توجہ کی ضمانت</div>
            
            <h2>Your Journey to Cyst-Free Living Starts Now</h2>
            <p className={styles.urduText}>آپ کے سسٹ سے پاک زندگی کے سفر کا آغاز اب ہوتا ہے</p>
            
            <p>Don't let ovarian cyst pain control your life any longer. Our natural treatment has helped thousands avoid surgery and live pain-free lives.</p>
            <p className={styles.urduText}>بیضہ دانی کے سسٹ کے درد کو اپنی زندگی پر حکومت نہ کرنے دیں۔ ہمارے قدرتی علاج نے ہزاروں کو آپریشن سے بچایا ہے اور درد سے پاک زندگی گزارنے میں مدد کی ہے۔</p>
            
            <div className={styles.urgencyStats}>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <strong>800+</strong>
                </motion.div>
                <span>Ovarian Cyst Patients Helped</span>
                <span className={styles.urduText}>بیضہ دانی کے سسٹ مریضوں کی مدد</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <strong>18+</strong>
                </motion.div>
                <span>Years of Ovarian Cyst Experience</span>
                <span className={styles.urduText}>سالوں کا بیضہ دانی کے سسٹ تجربہ</span>
              </div>
              <div className={styles.urgencyStat}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <strong>95%</strong>
                </motion.div>
                <span>Surgery Avoided Successfully</span>
                <span className={styles.urduText}>آپریشن سے بچ گئے</span>
              </div>
            </div>
            
            <div className={styles.patientPromise}>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>No Surgery Required</strong> - Complete cyst resolution without operations</span>
                <span className={styles.urduText}><strong>آپریشن کی ضرورت نہیں</strong> - آپریشن کے بغیر مکمل حل</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Zero Side Effects</strong> - Completely natural and safe</span>
                <span className={styles.urduText}><strong>سائیڈ ایفیکٹس سے پاک</strong> - مکمل طور پر قدرتی اور محفوظ</span>
              </div>
              <div className={styles.promiseItem}>
                <RiCheckboxCircleFill className={styles.promiseIcon} />
                <span><strong>Pain Relief</strong> - Regain your comfort and peace</span>
                <span className={styles.urduText}><strong>درد سے نجات</strong> - اپنا آرام اور سکون واپس پائیں</span>
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
                  <small>Get Personalized Ovarian Cyst Relief Advice</small>
                  <small className={styles.ctaUrdu}>ذاتی بیضہ دانی کے سسٹ آرام کی راہنمائی حاصل کریں</small>
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
                  <small>Send Your Ultrasound Reports & Get Expert Opinion</small>
                  <small className={styles.ctaUrdu}>اپنی الٹراساؤنڈ رپورٹس بھیجیں اور ماہرانہ رائے حاصل کریں</small>
                </div>
              </motion.a>
            </div>
            
            <div className={styles.finalGuarantee}>
              <div className={styles.guaranteeBadge}>
                <RiStethoscopeFill />
                <span><strong>COMPLETE OVARIAN CYST PATIENT SATISFACTION FOCUS</strong></span>
                <span className={styles.urduText}><strong>مکمل بیضہ دانی کے سسٹ مریض کی تسلی پر توجہ</strong></span>
              </div>
              <p>We are committed to your complete ovarian cyst relief and will work with you until you achieve the pain-free life you deserve without surgery.</p>
              <p className={styles.urduText}>ہم آپ کے بیضہ دانی کے سسٹ کے مکمل خاتمے کے لیے پرعزم ہیں اور آپ کے ساتھ اس وقت تک کام کریں گے جب تک آپ بغیر آپریشن کے وہ درد سے پاک زندگی حاصل نہیں کر لیتے جس کے آپ مستحق ہیں۔</p>
            </div>
            
            <div className={styles.immediateHelp}>
              <FiClock className={styles.helpIcon} />
              <span><strong>IMMEDIATE OVARIAN CYST ATTENTION AVAILABLE:</strong> Call now and get same-day consultation</span>
              <span className={styles.urduText}><strong>فوری بیضہ دانی کے سسٹ توجہ دستیاب:</strong> ابھی کال کریں اور اسی دن کنسلٹیشن حاصل کریں</span>
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
            <p>18+ Years Specializing in Ovarian Cyst Treatment</p>
          </div>
          
          <div className={styles.footerCtas}>
            <a href="tel:+923329622164" className={styles.footerPhone}>
              <RiWhatsappFill /> Dr Asma: 0332 9622164 
            </a>
          </div>
        </div>
        
        <div className={styles.trustFooter}>
          <span>✓ 800+ Ovarian Cyst Patients Treated</span>
          <span>✓ 95% Success Rate</span>
          <span>✓ 18+ Years Ovarian Cyst Experience</span>
          <span>✓ Surgery-Free Treatment Guaranteed</span>
        </div>
      </footer>
    </div>
  );
};

export default OvarianCystLanding;
import Head from 'next/head';
import styles from '../styles/sciaticaArthritis.module.css';
import { 
  RiWhatsappFill, 
  RiCheckboxCircleFill, 
  RiStethoscopeFill, 
  RiPhoneFill,
  RiUserHeartFill 
} from 'react-icons/ri';
import { GiSpineArrow, GiJoint, GiMoneyStack } from "react-icons/gi";
import { SiKakaotalk } from "react-icons/si";
import { RiMedicineBottleLine } from "react-icons/ri";
import { PiBinocularsBold } from "react-icons/pi";
import { GiStrong } from "react-icons/gi";
import { FiClock, FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import { useState } from 'react';

const SciaticaArthritisLanding = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sciatica & Arthritis Treatment Without Surgery | Arshad Homeopathic Clinic</title>
        <meta name="description" content="Natural pain relief for sciatica, arthritis, joint pain & back problems. 90% success rate. Non-surgical treatment in Rawalpindi." />
        <meta name="keywords" content="sciatica treatment, arthritis cure, joint pain relief, back pain specialist, homeopathic pain treatment, rawalpindi" />
        <meta name="robots" content="noindex, nofollow"></meta>
      </Head>

      {/* Sticky CTA Header */}
      <header className={styles.stickyHeader}>
        <div>
          <span>Free Pain Assessment Consultation</span><br/>
          <span className={styles.stickyContent}>
            <a href="https://wa.me/923329622164" className={styles.whatsappCta} target="_blank" rel="noopener noreferrer">
              <RiWhatsappFill /> Chat With Dr Asma
            </a>
            <a href="https://wa.me/923125122488" className={styles.whatsappCta} target="_blank" rel="noopener noreferrer">
              <RiWhatsappFill /> Chat With Dr Asad
            </a>
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>End Sciatica & Arthritis Pain Naturally</h1>
          <p className={styles.heroSubtitle}>Walk Pain-Free Without Surgery | 90% Success Rate | 18+ Years Experience</p>
          <div className={styles.ctaGroup}>
            <a href="tel:+923329622164" className={styles.primaryCta} target="_blank" rel="noopener noreferrer">
              <RiUserHeartFill /> Get Pain Relief Now
            </a>
            <a href="tel:+923125122488" className={styles.primaryCta}>
              <RiStethoscopeFill /> Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className={styles.benefits}>
        <h2>We Specialize In Pain Relief For</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <GiSpineArrow className={styles.benefitIcon} />
            <h3>Sciatica Nerve Pain</h3>
            <p>Leg pain, numbness, tingling from compressed nerves</p>
          </div>
          <div className={styles.benefitCard}>
            <GiJoint className={styles.benefitIcon} />
            <h3>Osteoarthritis</h3>
            <p>Knee, hip, spine joint degeneration & stiffness</p>
          </div>
          <div className={styles.benefitCard}>
            <RiUserHeartFill className={styles.benefitIcon} />
            <h3>Rheumatoid Arthritis</h3>
            <p>Inflammatory joint pain, swelling, morning stiffness</p>
          </div>
          <div className={styles.benefitCard}>
            <RiCheckboxCircleFill className={styles.benefitIcon} />
            <h3>Chronic Back Pain</h3>
            <p>Lower back pain, slipped disc, spinal issues</p>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className={styles.complications}>
        <h2>Are You Experiencing These Symptoms?</h2>
        <div className={styles.complicationsGrid}>
          <div className={styles.complicationCard}>
            <h3>⚡ Shooting Leg Pain</h3>
            <p>Electric shock-like pain from lower back to feet</p>
          </div>
          <div className={styles.complicationCard}>
            <h3>🧊 Morning Stiffness</h3>
            <p>Joints feel stiff for over 30 minutes after waking</p>
          </div>
          <div className={styles.complicationCard}>
            <h3>📉 Limited Mobility</h3>
            <p>Difficulty walking, bending, or climbing stairs</p>
          </div>
          <div className={styles.complicationCard}>
            <h3>🔥 Burning Sensation</h3>
            <p>Constant burning or tingling in legs/feet</p>
          </div>
          <div className={styles.complicationCard}>
            <h3>🦵 Numbness & Weakness</h3>
            <p>Leg muscles feeling weak or "asleep"</p>
          </div>
          <div className={styles.complicationCard}>
            <h3>🎯 Joint Swelling</h3>
            <p>Red, warm, swollen joints especially knees & hands</p>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className={styles.benefits}>
        <h2>Our 4-Step Pain Relief Protocol</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <SiKakaotalk className={styles.benefitIcon} />
            <h3>Comprehensive Assessment</h3>
            <p>Detailed pain mapping & movement analysis</p>
          </div>
          <div className={styles.benefitCard}>
            <RiMedicineBottleLine className={styles.benefitIcon} />
            <h3>Personalized Medicines</h3>
            <p>Custom homeopathic formulas for your specific pain</p>
          </div>
          <div className={styles.benefitCard}>
            <PiBinocularsBold className={styles.benefitIcon} />
            <h3>Progress Monitoring</h3>
            <p>Regular follow-ups to track pain reduction</p>
          </div>
          <div className={styles.benefitCard}>
            <GiStrong className={styles.benefitIcon} />
            <h3>Lifestyle Guidance</h3>
            <p>Diet & exercise plans to prevent recurrence</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.benefits}>
        <h2>Why Our Treatment Works</h2>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <RiCheckboxCircleFill className={styles.benefitIcon} />
            <h3>No Painkillers Needed</h3>
            <p>Reduce dependency on NSAIDs & pain medications</p>
          </div>
          <div className={styles.benefitCard}>
            <RiStethoscopeFill className={styles.benefitIcon} />
            <h3>Address Root Cause</h3>
            <p>Treat inflammation & nerve compression naturally</p>
          </div>
          <div className={styles.benefitCard}>
            <GiMoneyStack className={styles.benefitIcon} />
            <h3>Cost Effective</h3>
            <p>70% cheaper than surgery or lifelong medications</p>
          </div>
          <div className={styles.benefitCard}>
            <RiUserHeartFill className={styles.benefitIcon} />
            <h3>Safe & Natural</h3>
            <p>Zero side effects, safe for long-term use</p>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className={styles.urgency}>
        <div className={styles.urgencyBanner}>
          <FiClock className={styles.urgencyIcon} /> 
          <h3>Don't Let Pain Control Your Life!</h3>
          <p><strong>First 10 patients this week get:</strong></p>
          <ul>
            <li>✓ Free personalized diet plan</li>
            <li>✓ Complimentary mobility assessment</li>
            <li>✓ 10% discount on 3-month treatment</li>
          </ul>
          <motion.button
            onClick={() => setActive(!active)} 
            initial={{opacity: 0.6}}
            animate={{opacity: 1}}
            transition={{duration: 1, repeat: Infinity, repeatType: 'reverse'}}
            className={styles.ctaButton}
          >
            <a href="tel:+923329622164">
              <strong>Claim Your Free Assessment Now</strong>
            </a>
          </motion.button>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2>Pain-Free Success Stories</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.quote}>"I suffered from severe sciatica for 5 years. After 4 months of Dr. Asma's treatment, I can now walk 2km without pain. No more painkillers!"</div>
            <div className={styles.patientInfo}>
              <strong>Mohammad Ali, 58</strong><br/>
              <span>Sciatica patient - 90% improved</span>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.quote}>"My knee arthritis was so bad I couldn't climb stairs. Homeopathic treatment reduced my pain by 80% in just 3 months. Life-changing!"</div>
            <div className={styles.patientInfo}>
              <strong>Fatima Begum, 65</strong><br/>
              <span>Osteoarthritis - Pain free now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <h2>Ready to Live Pain-Free?</h2>
        <p>Take the first step toward natural pain relief today</p>
        <div className={styles.ctaGroup}>
          <a href="tel:+923329622164" className={styles.primaryCta} target="_blank" rel="noopener noreferrer">
            <RiPhoneFill /> Call Dr Asma<br/>
            +92 332 9622164
          </a>
          <a href="tel:+923125122488" className={styles.primaryCta} target="_blank" rel="noopener noreferrer">
            <RiPhoneFill /> Call Dr Asad<br/>
            +92 312 5122488
          </a>
          <a href="mailto:ask2cure@gmail.com" className={styles.secondaryCta}>
            <FiArrowRight /> Email Your<br/>Medical Reports
          </a>
        </div>
      </section>

      {/* Trust Footer */}
      <footer className={styles.footer}>
        <div className={styles.trustBadges}>
          <span>✓ 800+ Pain Patients Treated</span>
          <span>✓ 18+ Years Experience</span>
          <span>✓ 90% Success Rate</span>
        </div>
        <p>Arshad Homeopathic Clinic, Muslim Town, Rawalpindi</p>
      </footer>
    </div>
  );
};

export default SciaticaArthritisLanding;
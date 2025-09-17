import styles from '../styles/pages.module.css';
import { useState } from 'react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Link from 'next/link';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Header from '../components/Header';
import TestimonialSlider from '../components/TestimonialSlider';
import VideoSlider from '../components/VideoSlider';
import DoctorsFooter from '../components/DoctorsFooter';
import ClientProviders from '../app/ClientProviders';



// Page-specific metadata overrides (merges with layout defaults)
export async function generateMetadata() {
  return {
    title: "Best PCOS Treatment in Rawalpindi | Polycystic Ovary Syndrome Cure | Hormonal Balance | Arshad Homeopathic Clinic",
    description: "Effective homeopathic treatment for PCOS in Rawalpindi. Regulate periods, reduce cysts, and restore fertility naturally. 15+ years experience treating hormonal imbalances. Book consultation today at +92-332-9622164.",
    keywords: "PCOS treatment, polycystic ovary syndrome, hormonal imbalance, irregular periods, ovarian cysts, insulin resistance, fertility issues, weight gain, hirsutism, acne, homeopathic treatment, natural remedies, metformin alternative, diet for PCOS, PCOS and pregnancy, hair loss, best doctor for PCOS, Rawalpindi clinic",
    author: "Dr. Asma Arshad - Arshad Homeopathic Clinic",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Natural PCOS Treatment in Rawalpindi | Hormonal Balance Specialist",
      description: "Proven homeopathic solutions for PCOS symptoms including irregular periods, ovarian cysts and infertility. 15+ years experience. Book your consultation today.",
      type: "website",
      url: "https://www.arshadhc.com/pcos-treatment",
      images: [
        {
          url: "https://www.arshadhc.com/images/pcos-treatment-clinic.jpg",
          width: 1200,
          height: 630,
          alt: "PCOS Treatment at Arshad Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
      locale: "en_PK",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/pcos-treatment",
    },
  };
}







const data = [
  { id: '#what-is-pcos', name: 'What is PCOS' },
  { id: '#pcos-symptoms', name: 'PCOS Symptoms' },
  { id: '#pcos-complications', name: 'PCOS Complications' },
  { id: '#pcos-treatment', name: 'PCOS Treatment' },
  { id: '#success-story', name: 'Success Story' },
  { id: '#consult-us', name: 'Consult Us' }
];


const PCOS = () => {
    
  // Move the image zoom state and handlers here
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  // Page-specific schema (conditionSchema from your old code)
const conditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Polycystic Ovary Syndrome (PCOS)",
  alternateName: ["PCOS", "Polycystic Ovaries", "Hormonal Imbalance"],
  description: "A hormonal disorder causing enlarged ovaries with small cysts, irregular periods, and excess male hormone levels",
  cause: "Insulin resistance, genetic factors, inflammation",
  possibleTreatment: {
    "@type": "MedicalTherapy",
    name: "Homeopathic PCOS Treatment",
    description: "Natural treatment for PCOS symptoms without side effects",
    url: "https://www.arshadhc.com/pcos-treatment",
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');


  return (
    <div className={styles.container} id="pcos">
      <BackgroundAnimation />
      <Header />
      {/* Inject page-specific JSON-LD schema here (after common elements from layout) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJson(conditionSchema) }}
        key="condition-schema"
      />
      <div id='Table_of_content' className={styles.column}>
        <div className={styles.tocbox}>
          <span><b>Table Of Content</b></span>
          <div className={styles.toc}>
            {data.map(({id, name}, index) => (
              <li key={index}>
                <Link href={id} legacyBehavior>
                  <a className={styles.b}>{name}</a>
                </Link>
              </li>
            ))}
          </div>
        </div>

        <div id='what-is-pcos'>
          <h1 className={styles.h1}>Understanding PCOS: More Than Just Ovarian Cysts</h1>
          <p><strong>PCOS (Polycystic Ovary Syndrome)</strong> is a hormonal disorder affecting 1 in 10 women of reproductive age. The name breaks down to:</p>
          
          <div className={styles.definitionBox}>
            <p><strong>"Poly"</strong> = Many | <strong>"Cystic"</strong> = Fluid-filled sacs | <strong>"Syndrome"</strong> = Group of symptoms</p>
          </div>

          <h3 className={styles.h3}>Key Characteristics</h3>
          <ul className={styles.li}>
            <li><strong>Multiple ovarian cysts:</strong> Small follicles (8mm or smaller) that fail to release eggs regularly</li>
            <li><strong>Hormonal imbalances:</strong> Elevated testosterone and insulin resistance</li>
            <li><strong>Ovulation problems:</strong> Leading to irregular or absent periods</li>
          </ul>

          <div className={styles.noteBox}>
            <p><strong>Important:</strong> Having polycystic ovaries ≠ PCOS diagnosis. Many women have ovarian cysts but maintain normal cycles. PCOS requires <strong>two of these three criteria</strong>: irregular periods, high androgen levels, or polycystic ovaries on ultrasound.</p>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/pcos-ovary-comparison.jpg' 
              alt="Comparison of normal ovary vs polycystic ovary" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='pcos-symptoms' className={styles.column}>
          <h2 className={styles.h2}>PCOS Symptoms: The Warning Signs</h2>
          
          <h3 className={styles.h3}>1. Hormonal Havoc (Androgen Excess)</h3>
          <ul className={styles.li}>
            <li><strong>Hirsutism:</strong> 70% develop unwanted hair (face, chest, back)</li>
            <li><strong>Stubborn acne:</strong> Jawline/chin breakouts resistant to treatment</li>
            <li><strong>Male-pattern baldness:</strong> Thinning at the crown</li>
          </ul>

          <h3 className={styles.h3}>2. Menstrual Irregularities</h3>
          <ul className={styles.li}>
            <li><strong>Infrequent periods:</strong> Fewer than 8 cycles/year</li>
            <li><strong>Heavy bleeding:</strong> When periods do occur</li>
            <li><strong>Painful cramps:</strong> Severe dysmenorrhea</li>
          </ul>

          <h3 className={styles.h3}>3. Metabolic Symptoms</h3>
          <ul className={styles.li}>
            <li><strong>Weight gain:</strong> 80% struggle with obesity (especially abdominal fat)</li>
            <li><strong>Dark skin patches:</strong> Acanthosis nigricans in neck/armpit creases</li>
            <li><strong>Fatigue & mood swings:</strong> From blood sugar fluctuations</li>
          </ul>

          <div className={styles.quizBox}>
            <h5 className={styles.h5}>PCOS Risk Assessment</h5>
            <p style={{ color: "#654321", fontWeight: "bold" }}>Check symptoms you experience:</p>
            <ul className={styles.li}>
              <li>Irregular periods (cycles longer than 35 days)</li>
              <li>Excessive facial/body hair</li>
              <li>Unexplained weight gain</li>
              <li>Acne that persists after adolescence</li>
            </ul>
            <div className={styles.resultsBox}>
              <h5 className={styles.h5}>Results:</h5>
              <p><strong>2+ symptoms?</strong> Recommended to get hormonal tests</p>
            </div>
          </div>
        </div>

        <div id='pcos-complications' className={styles.column}>
          <h2 className={styles.h2}>Hidden Dangers: Long-Term PCOS Risks</h2>
        <div className={styles.responsiveGridPCOS}>
          <div className={styles.complicationBox}>
            <h3 className={styles.complicationTitle}>Type 2 Diabetes</h3>
            <p className={styles.complicationReason}><strong>Why it happens:</strong> Insulin resistance affects 70% of PCOS women</p>
            <p className={styles.complicationTip}><strong>Prevention tips:</strong> Low-glycemic diet, regular exercise</p>
          </div>

          <div className={styles.complicationBox}>
            <h3 className={styles.complicationTitle}>Heart Disease</h3>
            <p className={styles.complicationReason}><strong>Why it happens:</strong> High cholesterol and blood pressure</p>
            <p className={styles.complicationTip}><strong>Prevention tips:</strong> Omega-3 supplements, cardio workouts</p>
          </div>

          <div className={styles.complicationBox}>
            <h3 className={styles.complicationTitle}>Endometrial Cancer</h3>
            <p className={styles.complicationReason}><strong>Why it happens:</strong> Built-up uterine lining from irregular periods</p>
            <p className={styles.complicationTip}><strong>Prevention tips:</strong> Progesterone therapy, regular scans</p>
          </div>

          <div className={styles.complicationBox}>
            <h3 className={styles.complicationTitle}>Depression/Anxiety</h3>
            <p className={styles.complicationReason}><strong>Why it happens:</strong> Hormonal imbalances affect neurotransmitters</p>
            <p className={styles.complicationTip}><strong>Prevention tips:</strong> Stress management, counseling</p>
          </div>
          </div>

          <div className={styles.warningBox}>
            <p><strong>Early intervention can prevent 50% of these complications</strong> – yet nearly 50% of PCOS cases go undiagnosed until women try to conceive.</p>
          </div>
      </div>

        <div id='pcos-treatment' className={styles.column}>
          <h2 className={styles.h2}>PCOS Treatment Options</h2>
          
          <h3 className={styles.h3}>Conventional Medical Approaches</h3>
          <ul className={styles.li}>
            <li><strong>Birth control pills:</strong> Regulate cycles but mask root causes</li>
            <li><strong>Metformin:</strong> Improves insulin sensitivity</li>
            <li><strong>Fertility drugs:</strong> Like Clomid for ovulation induction</li>
            <li><strong>Anti-androgens:</strong> Reduce hair growth and acne</li>
          </ul>

          <h3 className={styles.h3}>Homeopathic Alternative at Arshad Clinic</h3>
          <p>Our <strong>personalized homeopathic protocols</strong> in Rawalpindi address PCOS holistically by:</p>
          
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>For Hormonal Balance</h4>
              <ul className={styles.li}>
                <li><strong>Pulsatilla:</strong> Regulates menstrual cycles</li>
                <li><strong>Sepia:</strong> For irritability and hormonal headaches</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Metabolic Support</h4>
              <ul className={styles.li}>
                <li><strong>Natrum Mur:</strong> Helps with water retention and weight</li>
                <li><strong>Thyroidinum:</strong> Supports sluggish metabolism</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.h3}>5 Essential Lifestyle Changes</h3>
          <ol className={styles.li}>
            <li><strong>Low-Glycemic Diet:</strong> Swap white rice for quinoa, choose berries over bananas</li>
            <li><strong>Strength Training:</strong> Builds muscle to improve insulin sensitivity</li>
            <li><strong>Stress Management:</strong> Cortisol worsens PCOS (try yoga/mindfulness)</li>
            <li><strong>Sleep Hygiene:</strong> Aim for 7-8 hours to regulate leptin/ghrelin</li>
            <li><strong>Targeted Supplements:</strong> Inositol, vitamin D, and omega-3s show benefits</li>
          </ol>

          <div className={styles.successRateBox}>
            <p>🌿 <strong>82% of our PCOS patients</strong> report regular cycles within 6 months of combined homeopathic treatment and lifestyle changes</p>
          </div>
        </div>

        <div id='success-story' className={styles.column}>
        <h2 className={styles.h2}>Rabia's Success Story: From PCOS to Pregnancy</h2>
          <div className={styles.testimonialBox}>
            <div className={styles.testimonialContent}>
              <p>"At 32, I was diagnosed with PCOS after years of irregular periods and failed pregnancy attempts. I visited multiple doctors in Rawalpindi and Islamabad with no improvement. A friend recommended Dr. Asma Arshad at Arshad Homeopathic Clinic.</p>
              <p>After 5 months of personalized homeopathic treatment:</p>
              <ul className={styles.li}>
                <li>My cycles regulated from 60+ days to 32-35 days</li>
                <li>Ultrasound showed 60% reduction in ovarian cysts</li>
                <li>I conceived naturally within 8 months of treatment</li>
              </ul>
              <p>The holistic approach addressing my diet, stress and hormones made all the difference!"</p>
              <p className={styles.testimonialAuthor}><strong>- Rabia, Rawalpindi</strong> (PCOS patient since 2018)</p>
            </div>
          </div>
          {/* Image Gallery Section */}
        <div className={styles.col2}>
          <picture 
            className={styles.img_div} 
            onClick={() => handleImageClick('/images/PCOS-r1.jpg')}
          >
            <source srcSet="/images/PCOS-r1.jpg" type="image/webp" />
            <img src="/images/PCOS-r1.jpg" alt="PCOS-report1" className={styles.img} />
          </picture>

          <picture 
            className={styles.img_div} 
            onClick={() => handleImageClick('/images/PCOS-r2.jpg')}
          >
            <source srcSet="/images/PCOS-r2.jpg" type="image/webp" />
            <img src="/images/PCOS-r2.jpg" alt="PCOS-report2" className={styles.img} />
          </picture>

          <picture 
            className={styles.img_div} 
            onClick={() => handleImageClick('/images/PCOS-r3.jpg')}
          >
            <source srcSet="/images/PCOS-r3.jpg" type="image/webp" />
            <img src="/images/PCOS-r3.jpg" alt="PCOS-report3" className={styles.img} />
          </picture>
        </div>

        {/* Modal for zoomed image */}
        {selectedImage && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.closeButton} onClick={closeModal}>&times;</span>
              <img src={selectedImage} alt="Zoomed view" className={styles.zoomedImage} />
            </div>
          </div>
        )}
      
        </div>

        <div className={styles.warningBox}>
          <p>⚠️ <strong>Important Medical Disclaimer:</strong></p>
          <p>While homeopathic medicines offer remarkable healing potential, <strong>self-treatment can be dangerous</strong>. The remedies mentioned here are for informational purposes only.</p>
          <p><strong>Do not use any medication</strong> - homeopathic or otherwise - without consulting a qualified physician. Your healing journey should begin with professional guidance, as:</p>
          <ul className={styles.li}>
            <li>Every case is unique - what works for one may harm another</li>
            <li>Proper diagnosis is essential before treatment</li>
            <li>Dosage must be precisely tailored to your condition</li>
          </ul>
          <p>Book a consultation today to receive <strong>your personalized treatment plan</strong> from our experienced homeopathic specialists.</p>
        </div>
        
        <div id='consult-us' className={styles.column}>
          <div className={styles.ctaBox}>
            <h3 className={styles.h3}>Struggling with PCOS Symptoms?</h3>
            <p>Take the first step toward hormonal balance with our specialized PCOS program:</p>
            <ul className={styles.li}>
              <li><strong>Personalized homeopathic treatment</strong> tailored to your symptoms</li>
              <li><strong>Nutrition guidance</strong> to manage insulin resistance</li>
              <li><strong>Fertility support</strong> for those trying to conceive</li>
              <li><strong>18+ years</strong> of experience treating hormonal disorders</li>
            </ul>
            <Link href="mailto:ask2cure@gmail.com" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer"><button className={styles.ctaButton}>Book Your Consultation Now</button></a>
            </Link>
            <p><strong>Call us at</strong></p>
            <div className={styles.contactInfo}>  
              
              <span>Dr Mrs Asma Arshad <br/> <strong><a href="https://wa.me/923329622164" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}
              id="whatsApp-dr-asma"
              data-doctor="dr_asma"
              data-type="whatsapp"
              > WhatsApp </a></strong> /<strong> <a href="tel: +923329622164" target="_blank" rel="noopener noreferrer"
              id="phone-dr-asma" 
              data-doctor="dr_asma"
              data-type="phone"
              >+92-332-9622164</a> </strong> </span>
              
            </div>
          </div>
        </div>
      </div>
      <TestimonialSlider/>
      <div className={styles.contact}><VideoSlider/></div>
      <div className={styles.Arrows}>
        <Link href="/peptic-ulcer-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
        </Link>
        <Link href="/sciatica-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowRightCircleFill/></a>
        </Link>
      </div>
      <DoctorsFooter/> 
      <ClientProviders/>  
    </div>
  );
};

export default PCOS;
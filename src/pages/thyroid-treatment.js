import styles from '../styles/pages.module.css';
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
    title: "Best Thyroid Treatment in Rawalpindi | Hypothyroidism & Hyperthyroidism Cure | Homeopathic Clinic",
    description: "Effective homeopathic treatment for thyroid disorders in Rawalpindi. Balance TSH, T3, T4 levels naturally. 15+ years experience treating Hashimoto's, Graves' disease, and hormonal imbalances. Book consultation today.",
    keywords: "thyroid treatment, hypothyroidism cure, hyperthyroidism treatment, TSH levels, T3 T4 hormones, Hashimoto's disease, Graves' disease, natural thyroid treatment, homeopathic thyroid medicine, weight gain thyroid, fatigue thyroid, thyroid symptoms, best thyroid doctor, Rawalpindi thyroid clinic, hormonal imbalance, thyroid nodules",
    author: "Dr. Asma Arshad - Arshad Homeopathic Clinic",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Natural Thyroid Treatment in Rawalpindi | Hormone Balance Specialist",
      description: "Proven homeopathic solutions for thyroid disorders including hypothyroidism and hyperthyroidism. 15+ years experience. Book your consultation today.",
      type: "website",
      url: "https://www.arshadhc.com/thyroid-treatment",
      images: [
        {
          url: "https://www.arshadhc.com/images/thyroid-treatment.jpg",
          width: 1200,
          height: 630,
          alt: "Thyroid Treatment Image",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/thyroid-treatment",
    },
  };
}




const data = [
  { id: '#what-is-thyroid', name: 'What is Thyroid' },
  { id: '#types-of-thyroid', name: 'Types of Thyroid Disorders' },
  { id: '#thyroid-causes', name: 'Causes' },
  { id: '#thyroid-symptoms', name: 'Symptoms' },
  { id: '#thyroid-complications', name: 'Complications' },
  { id: '#thyroid-treatment', name: 'Homeopathic Treatment' },
  { id: '#consult-us', name: 'Consult Us' }
];

const Thyroid = () => {

  // Page-specific schema (conditionSchema from your old code)
const conditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Thyroid Disorder",
  alternateName: ["Hypothyroidism", "Hyperthyroidism", "Hashimoto's Thyroiditis"],
  description: "Hormonal imbalance caused by underactive or overactive thyroid gland affecting metabolism",
  cause: "Autoimmune conditions, iodine deficiency, genetic factors",
  possibleTreatment: {
    "@type": "MedicalTherapy",
    name: "Homeopathic Thyroid Treatment",
    description: "Natural treatment for thyroid disorders without side effects",
    url: "https://www.arshadhc.com/thyroid-treatment",
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (
    <div className={styles.container}>
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

        <div id='what-is-thyroid'>
          <h1 className={styles.h1}>Your Thyroid: The Body's Metabolic Master</h1>
          <p>The <strong>thyroid gland</strong> is a butterfly-shaped endocrine gland located at the base of your neck, wrapping around your windpipe. Often called the body's "thermostat," this small but mighty gland regulates crucial functions through two key hormones:</p>
          
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>Thyroxine (T4)</h4>
              <ul className={styles.li}>
                <li>Primary thyroid hormone</li>
                <li>Contains 4 iodine atoms</li>
                <li>Converted to active T3</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Triiodothyronine (T3)</h4>
              <ul className={styles.li}>
                <li>Active form of thyroid hormone</li>
                <li>Contains 3 iodine atoms</li>
                <li>Directly affects metabolism</li>
              </ul>
            </div>
          </div>

          <div className={styles.noteBox}>
            <p><strong>Did You Know?</strong> Women are 5-8 times more likely than men to develop thyroid problems, especially during hormonal transitions like pregnancy and menopause.</p>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/thyroid-gland-location.jpg' 
              alt="Diagram showing thyroid gland location in neck" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='types-of-thyroid' className={styles.column}>
          <h2 className={styles.h2}>Two Sides of Thyroid Dysfunction</h2>
          
          <div className={styles.comparisonBox}>
            <div className={styles.comparisonCol}>
              <h3 className={styles.h3}>Hyperthyroidism (Overactive)</h3>
              <ul className={styles.li}>
                <li>Thyroid produces <strong>too much hormone</strong></li>
                <li>Metabolism speeds up</li>
                <li>Affects 1% of population</li>
                <li>Common causes: Graves' disease, nodules</li>
              </ul>
            </div>
            <div className={styles.comparisonCol}>
              <h3 className={styles.h3}>Hypothyroidism (Underactive)</h3>
              <ul className={styles.li}>
                <li>Thyroid produces <strong>too little hormone</strong></li>
                <li>Metabolism slows down</li>
                <li>Affects 5% of population</li>
                <li>Common cause: Hashimoto's thyroiditis</li>
              </ul>
            </div>
          </div>

          <div className={styles.factBox}>
            <p>"Thyroid imbalance can make weight management feel impossible - you might gain weight despite dieting or lose weight while eating more," explains Dr. Asma Arshad, our thyroid specialist with 15+ years experience.</p>
          </div>
        </div>

        <div id='thyroid-causes' className={styles.column}>
          <h2 className={styles.h2}>Root Causes of Thyroid Disorders</h2>
          
          <h3 className={styles.h3}>Hyperthyroidism Triggers</h3>
          <ul className={styles.li}>
            <li><strong>Graves' disease:</strong> Autoimmune attack overstimulates thyroid (70% of cases)</li>
            <li><strong>Toxic nodules:</strong> Lumps that produce excess hormone</li>
            <li><strong>Thyroiditis:</strong> Inflammation causing hormone leakage</li>
            <li><strong>Excess iodine:</strong> From medications or contrast dyes</li>
          </ul>

          <h3 className={styles.h3}>Hypothyroidism Triggers</h3>
          <ul className={styles.li}>
            <li><strong>Hashimoto's disease:</strong> Immune system slowly destroys thyroid</li>
            <li><strong>Iodine deficiency:</strong> Essential for hormone production</li>
            <li><strong>Radiation treatment:</strong> For cancers near neck area</li>
            <li><strong>Certain medications:</strong> Lithium, amiodarone, etc.</li>
            <li><strong>Pregnancy:</strong> Postpartum thyroiditis affects 5-10% women</li>
          </ul>

          <div className={styles.img_div}>
            <img 
              src='/images/thyroid-causes.jpg' 
              alt="Common causes of thyroid disorders" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='thyroid-symptoms' className={styles.column}>
          <h2 className={styles.h2}>Thyroid Symptoms: Your Body's Warning Signs</h2>
          
          <div className={styles.comparisonBox}>
            <div className={styles.comparisonCol}>
              <h3 className={styles.h3}>Hyperthyroidism</h3>
              <ul className={styles.li}>
                <li><strong>Rapid heartbeat</strong> (palpitations)</li>
                <li><strong>Unexplained weight loss</strong> despite increased appetite</li>
                <li><strong>Anxiety/nervousness</strong></li>
                <li><strong>Heat intolerance</strong> and excessive sweating</li>
                <li><strong>Tremors</strong> in hands</li>
                <li><strong>Thinning skin</strong> and brittle hair</li>
                <li><strong>Bulging eyes</strong> (in Graves' disease)</li>
              </ul>
            </div>
            <div className={styles.comparisonCol}>
              <h3 className={styles.h3}>Hypothyroidism</h3>
              <ul className={styles.li}>
                <li><strong>Fatigue</strong> and sluggishness</li>
                <li><strong>Unexplained weight gain</strong></li>
                <li><strong>Depression</strong> and brain fog</li>
                <li><strong>Cold intolerance</strong></li>
                <li><strong>Dry skin</strong> and hair loss</li>
                <li><strong>Constipation</strong></li>
                <li><strong>Hoarse voice</strong></li>
              </ul>
            </div>
          </div>

          <div className={styles.quizBox}>
            <h5 className={styles.h5}>Thyroid Symptom Checker</h5>
            <p style={{ color: "#654321", fontWeight: "bold" }}>Check symptoms you experience:</p>
            <ul className={styles.li}>
              <li>Persistent fatigue despite adequate sleep</li>
              <li>Unexplained weight changes (±10 lbs)</li>
              <li>Hair thinning/loss, especially outer eyebrows</li>
              <li>Temperature sensitivity (always hot/cold)</li>
            </ul>
            <div className={styles.resultsBox}>
              <h5 className={styles.h5}>Results:</h5>
              <p><strong>2+ symptoms?</strong> Recommended to get TSH test</p>
            </div>
          </div>
        </div>

        <div id='thyroid-complications' className={styles.column}>
          <h2 className={styles.h2}>Long-Term Risks of Untreated Thyroid Disorders</h2>
          
          <div className={styles.complicationCards}>
            {/* Hyperthyroidism Card */}
            <div className={styles.complicationCard}>
              <h3 className={styles.complicationTitle}>Hyperthyroidism</h3>
              <div className={styles.complicationContent}>
                <p className={styles.complicationSubtitle}>Potential Complications:</p>
                <ul className={styles.li}>
                  <li>Osteoporosis</li>
                  <li>Heart rhythm disorders</li>
                  <li>Thyroid storm (life-threatening)</li>
                </ul>
                <p className={styles.preventionText}>
                  <strong>Prevention:</strong> Regular monitoring, calcium/vitamin D supplementation
                </p>
              </div>
            </div>

            {/* Hypothyroidism Card */}
            <div className={styles.complicationCard}>
              <h3 className={styles.complicationTitle}>Hypothyroidism</h3>
              <div className={styles.complicationContent}>
                <p className={styles.complicationSubtitle}>Potential Complications:</p>
                <ul className={styles.li}>
                  <li>Heart disease</li>
                  <li>Peripheral neuropathy</li>
                  <li>Infertility/miscarriage</li>
                </ul>
                <p className={styles.preventionText}>
                  <strong>Prevention:</strong> Timely hormone replacement therapy
                </p>
              </div>
            </div>
          </div>


          <div className={styles.warningBox}>
            <p><strong>Important:</strong> Pregnant women with untreated thyroid disorders have higher risks of premature birth, low IQ in babies, and developmental issues.</p>
          </div>
        </div>

        <div id='thyroid-treatment' className={styles.column}>
          <h2 className={styles.h2}>Homeopathic Thyroid Treatment: Natural Balance</h2>
          
          <h3 className={styles.h3}>Why Homeopathy Works for Thyroid</h3>
          <ul className={styles.li}>
            <li><strong>No synthetic hormones</strong> - stimulates natural production</li>
            <li><strong>Addresses root causes</strong> like autoimmune activity</li>
            <li><strong>Personalized approach</strong> based on your symptoms</li>
            <li><strong>Safe for long-term use</strong> without side effects</li>
          </ul>

          <h3 className={styles.h3}>Our Treatment Protocol</h3>
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>For Hyperthyroidism</h4>
              <ul className={styles.li}>
                <li><strong>Iodum:</strong> Rapid weight loss with heat intolerance</li>
                <li><strong>Natrum Mur:</strong> Emotional stress-related cases</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Hypothyroidism</h4>
              <ul className={styles.li}>
                <li><strong>Thyroidinum:</strong> Stimulates sluggish thyroid</li>
                <li><strong>Calcarea Carb:</strong> Weight gain with chilliness</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.h3}>Supportive Therapies</h3>
          <ul className={styles.li}>
            <li><strong>Dietary guidance:</strong> Iodine-rich foods, goitrogen awareness</li>
            <li><strong>Stress management:</strong> Cortisol affects thyroid function</li>
            <li><strong>Detox support:</strong> Heavy metals can disrupt thyroid</li>
          </ul>

          <div className={styles.successRateBox}>
            <p>🌿 <strong>80% of our patients</strong> show improved TSH levels within 3-6 months of homeopathic treatment combined with lifestyle changes</p>
          </div>
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
        
        <div className={styles.column}>
          <div className={styles.ctaBox}>
            <h3 className={styles.h3}>Ready to Balance Your Thyroid Naturally?</h3>
            <p>Our clinic specializes in:</p>
            <ul className={styles.li}>
              <li><strong>Personalized thyroid treatment plans</strong></li>
              <li><strong>Comprehensive hormone balancing</strong></li>
              <li><strong>Autoimmune thyroid management</strong></li>
              <li><strong>18+ years</strong> of experience with thyroid disorders</li>
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
              
              <span>Dr M Asad Awan <br/> <strong><a href="https://wa.me/923125122488" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}
              id="whatsApp-dr-asad"
              data-doctor="dr_asad"
              data-type="whatsapp"
              > WhatsApp </a></strong> /<strong> <a href="tel: +923125122488" target="_blank" rel="noopener noreferrer"
              id="phone-dr-asad" 
              data-doctor="dr_asad"
              data-type="phone"
              >+92-312-5122488</a> </strong> </span>
              
            </div>
          </div>
        </div>
      </div>
      <TestimonialSlider/>
      <div className={styles.contact}><VideoSlider/></div>
      <div className={styles.Arrows}>
        <Link href="/sciatica-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
        </Link>
        <Link href="/fatty-liver-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowRightCircleFill/></a>
        </Link>
      </div>
      <DoctorsFooter/>
      <ClientProviders/> 
          
    </div>
  );
};

export default Thyroid;
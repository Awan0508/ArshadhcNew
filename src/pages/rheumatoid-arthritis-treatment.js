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
    title: "Best Rheumatoid Arthritis Treatment in Rawalpindi | Natural Pain Relief | Homeopathic Clinic",
    description: "Effective homeopathic treatment for rheumatoid arthritis (RA) in Rawalpindi. Reduce inflammation, relieve joint pain, and prevent deformity naturally. 15+ years experience treating autoimmune disorders. Book consultation today.",
    keywords: "rheumatoid arthritis treatment, RA pain relief, autoimmune disorder treatment, swollen joints remedy, chronic joint pain, morning stiffness treatment, homeopathic medicine for arthritis, best RA doctor Rawalpindi, natural inflammation reduction, joint damage prevention, arthritis complications, RA causes, rheumatoid nodules, osteoporosis and RA",
    author: "Dr. Arshad - Arshad Homeopathic Clinic",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Natural Rheumatoid Arthritis Treatment in Rawalpindi | Pain Relief Without Side Effects",
      description: "Proven homeopathic solutions for rheumatoid arthritis. Reduce inflammation and prevent joint damage naturally. 15+ years experience. Book your consultation today.",
      type: "website",
      url: "https://www.arshadhc.com/rheumatoid-arthritis-treatment",
      images: [
        {
          url: "https://www.arshadhc.com/images/rheumatoid-arthritis-treatment.jpg",
          width: 1200,
          height: 630,
          alt: "Rheumatoid Arthritis Treatment Image",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/rheumatoid-arthritis-treatment",
    },
  };
}



const data = [
  { id: '#what-is-ra', name: 'What is Rheumatoid Arthritis' },
  { id: '#ra-causes', name: 'Causes' },
  { id: '#ra-symptoms', name: 'Symptoms' },
  { id: '#ra-complications', name: 'Complications' },
  { id: '#ra-treatment', name: 'Homeopathic Treatment' },
  { id: '#consult-us', name: 'Consult Us' }
];

const RheumatoidArthritis = () => {

    // Page-specific schema (conditionSchema from your old code)
const conditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Rheumatoid Arthritis",
  alternateName: ["RA", "Autoimmune Arthritis"],
  description: "Chronic autoimmune disorder causing joint inflammation, pain, and potential organ damage",
  cause: "Autoimmune dysfunction, genetic factors, environmental triggers",
  possibleTreatment: {
    "@type": "MedicalTherapy",
    name: "Homeopathic RA Treatment",
    description: "Natural inflammation reduction and immune modulation without side effects",
    url: "https://www.arshadhc.com/rheumatoid-arthritis-treatment",
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (
    <div className={styles.container} id="Rheumatoid-Arthritis">
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

        <div id='what-is-ra'>
          <h1 className={styles.h1}>Understanding Rheumatoid Arthritis: Causes, Symptoms & Treatment</h1>
          <p><strong>Rheumatoid arthritis (RA)</strong> is a <strong>chronic autoimmune disease</strong> where the <strong>immune system mistakenly attacks healthy tissues</strong>, leading to <strong>painful inflammation</strong> in the joints and other organs. Unlike <strong>osteoarthritis</strong> (caused by wear and tear), RA primarily affects the <strong>joint lining (synovium)</strong>, causing swelling, pain, and eventual <strong>joint damage</strong>.</p>
          
          <h3 className={styles.h3}>Key Areas Affected by RA:</h3>
          <ul className={styles.li}>
            <li><strong>Joints</strong> (hands, wrists, knees, feet)</li>
            <li><strong>Organs</strong> (lungs, heart, eyes)</li>
            <li><strong>Overall mobility & quality of life</strong></li>
          </ul>

          <div className={styles.noteBox}>
            <p><strong>Did You Know?</strong> RA is a <strong>progressive disease</strong>, meaning symptoms worsen over time if untreated. Early diagnosis and treatment can help <strong>manage pain, reduce inflammation, and prevent joint deformity</strong>.</p>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/rheumatoid-arthritis.jpg' 
              alt="Diagram showing rheumatoid arthritis joint damage" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='ra-causes' className={styles.column}>
          <h2 className={styles.h2}>Causes of Rheumatoid Arthritis</h2>
          
          <p>While the <strong>exact cause of RA is unknown</strong>, research suggests a combination of <strong>genetic, environmental, and lifestyle factors</strong> contribute to its development:</p>
          
          <h3 className={styles.h3}>Risk Factors for RA:</h3>
          <div className={styles.stoneGrid}>
            <div className={styles.stoneCard}>
              <h4 className={styles.h4}>Demographic Factors</h4>
              <ul className={styles.li}>
                <li><strong>Gender:</strong> Women are <strong>2-3 times more likely</strong> to develop RA</li>
                <li><strong>Age:</strong> Most common between <strong>30-60 years</strong></li>
                <li><strong>Genetics:</strong> Family history increases risk</li>
              </ul>
            </div>
            <div className={styles.stoneCard}>
              <h4 className={styles.h4}>Lifestyle Factors</h4>
              <ul className={styles.li}>
                <li><strong>Smoking:</strong> Strongly linked to RA development</li>
                <li><strong>Obesity:</strong> Worsens inflammation</li>
                <li><strong>Environmental Triggers:</strong> Infections may activate RA</li>
              </ul>
            </div>
          </div>

          <div className={styles.factBox}>
            <p>"RA affects about 1% of the global population, with women being three times more likely to develop it than men. Early treatment within 3-6 months of symptoms can significantly improve outcomes."</p>
          </div>
        </div>

        <div id='ra-symptoms' className={styles.column}>
          <h2 className={styles.h2}>Common Symptoms of Rheumatoid Arthritis</h2>
          
          <p>RA symptoms vary but often include:</p>
          
          <div className={styles.symptomGrid}>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Joint Symptoms</h4>
              <ul className={styles.li}>
                <li><strong>Pain & Swelling</strong> (usually <strong>symmetrical</strong>)</li>
                <li><strong>Morning Stiffness</strong> (lasting <strong>30+ minutes</strong>)</li>
                <li><strong>Reduced Mobility</strong></li>
              </ul>
            </div>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Systemic Symptoms</h4>
              <ul className={styles.li}>
                <li>Fatigue & Weakness</li>
                <li>Low-Grade Fever</li>
                <li>Weight Loss</li>
              </ul>
            </div>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Advanced Symptoms</h4>
              <ul className={styles.li}>
                <li>Joint Deformities</li>
                <li>Rheumatoid Nodules</li>
                <li>Organ Involvement</li>
              </ul>
            </div>
          </div>

          <div className={styles.warningBox}>
            <p>⚠️ <strong>Important:</strong> Unlike temporary joint pain, RA symptoms are <strong>persistent and worsen without treatment</strong>. Early diagnosis is crucial to prevent permanent joint damage.</p>
          </div>

          <div className={styles.quizBox}>
            <h5 className={styles.h5}>RA Symptom Checker</h5>
            <p style={{ color: "#654321", fontWeight: "bold" }}>Do you experience:</p>
            <ul className={styles.li}>
              <li>Joint pain lasting more than 6 weeks?</li>
              <li>Morning stiffness lasting over 30 minutes?</li>
              <li>Swelling in multiple joints?</li>
              <li>Fatigue even after adequate rest?</li>
            </ul>
            <div className={styles.resultsBox}>
              <h5 className={styles.h5}>Results:</h5>
              <p><strong>2+ symptoms?</strong> Could indicate RA - diagnostic evaluation recommended</p>
            </div>
          </div>
        </div>

        <div id='ra-complications' className={styles.column}>
          <h2 className={styles.h2}>Serious Complications of Rheumatoid Arthritis</h2>
          
          <p>If left untreated, RA can lead to <strong>long-term health issues</strong>, including:</p>
          
          <div className={styles.col3}>
            <div>
              <h4 className={styles.h4}>Joint Complications</h4>
              <ul className={styles.li}>
                <li><strong>Joint Damage & Disability</strong></li>
                <li><strong>Carpal Tunnel Syndrome</strong></li>
                <li><strong>Deformities</strong> (swan neck, boutonniere)</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Systemic Complications</h4>
              <ul className={styles.li}>
                <li><strong>Heart Disease & Stroke</strong></li>
                <li><strong>Lung Problems</strong> (fibrosis)</li>
                <li><strong>Osteoporosis</strong></li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Other Risks</h4>
              <ul className={styles.li}>
                <li><strong>Lymphoma</strong></li>
                <li><strong>Eye & Skin Disorders</strong></li>
                <li><strong>Depression & Anxiety</strong></li>
              </ul>
            </div>
          </div>

          <div className={styles.tipBox}>
            <p><strong>Pro Tip:</strong> Regular monitoring and early treatment can prevent <strong>80% of RA complications</strong>. Don't ignore persistent joint symptoms!</p>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/ra-complications.jpg' 
              alt="Potential complications of rheumatoid arthritis" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='ra-treatment' className={styles.column}>
          <h2 className={styles.h2}>Effective Rheumatoid Arthritis Treatment Options</h2>
          
          <h3 className={styles.h3}>Why Choose Homeopathy for RA?</h3>
          <p>While <strong>there's no cure for RA</strong>, early intervention can <strong>slow disease progression</strong> and improve quality of life. Homeopathy offers:</p>
          
          <ul className={styles.li}>
            <li><strong>Natural inflammation reduction</strong> without steroids</li>
            <li><strong>Pain relief</strong> during flare-ups</li>
            <li><strong>Immune system modulation</strong> to reduce attacks</li>
            <li><strong>No side effects</strong> like conventional treatments</li>
          </ul>

          <h3 className={styles.h3}>Our Homeopathic Approach</h3>
          <div className={styles.col3}>
            <div>
              <h4 className={styles.h4}>For Inflammation</h4>
              <ul className={styles.li}>
                <li><strong>Rhus Tox:</strong> Stiffness improved by movement</li>
                <li><strong>Bryonia:</strong> Worsening pain with movement</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Pain Relief</h4>
              <ul className={styles.li}>
                <li><strong>Arnica:</strong> Bruised, sore feeling</li>
                <li><strong>Ledum:</strong> Swollen, pale joints</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Systemic Support</h4>
              <ul className={styles.li}>
                <li><strong>Calcarea Fluorica:</strong> Joint deformities</li>
                <li><strong>Silicea:</strong> Rheumatoid nodules</li>
              </ul>
            </div>
          </div>

          <div className={styles.successRateBox}>
            <p>🌿 <strong>85% of our RA patients</strong> report significant improvement in pain and mobility within 3-6 months of homeopathic treatment</p>
          </div>

          <div className={styles.warningBox}>
            <p>⚠️ <strong>Important Medical Disclaimer:</strong> While homeopathic medicines offer remarkable healing potential, <strong>self-treatment can be dangerous</strong> for rheumatoid arthritis. The remedies mentioned here are for informational purposes only. Do not use any medication without consulting a qualified physician, as:</p>
            <ul className={styles.li}>
              <li>RA requires careful disease activity monitoring</li>
              <li>Joint damage may need conventional interventions</li>
              <li>Dosage must be precisely tailored</li>
            </ul>
            <p>Book a consultation today to receive <strong>your personalized RA treatment plan</strong>.</p>
          </div>
        </div>

        <div id='consult-us' className={styles.column}>
          <div className={styles.ctaBox}>
            <h3 className={styles.h3}>Ready to Regain Control of Your Joint Health?</h3>
            <p>Our clinic specializes in:</p>
            <ul className={styles.li}>
              <li><strong>Natural inflammation reduction</strong></li>
              <li><strong>Pain management</strong> during flare-ups</li>
              <li><strong>Disease progression prevention</strong></li>
              <li><strong>18+ years</strong> of autoimmune disorder experience</li>
            </ul>
             <Link href="mailto:ask2cure@gmail.com" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" ><button className={styles.ctaButton}>Book Your Consultation Now</button></a>
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
        <Link href="/kidney-stone-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
        </Link>
        <Link href="/Testimonials" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowRightCircleFill/></a>
        </Link>
      </div>
      <DoctorsFooter/> 
      <ClientProviders/>  

    </div>
  );
};

export default RheumatoidArthritis;
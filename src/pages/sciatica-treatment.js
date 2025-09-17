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
    title: "Best Sciatica Pain Treatment in Rawalpindi | Nerve Pain Relief | Homeopathic Clinic",
    description: "Effective homeopathic treatment for sciatica pain in Rawalpindi. Relieve nerve compression, reduce inflammation naturally. 15+ years experience treating lower back pain radiating to legs. Book consultation today.",
    keywords: "sciatica treatment, sciatic nerve pain relief, lower back pain, leg pain, pinched nerve, homeopathic sciatica cure, herniated disc treatment, natural pain relief, chronic sciatica, acute sciatica, best doctor for sciatica, Rawalpindi clinic, nerve inflammation, lumbar pain, radiating leg pain",
    author: "Dr. Arshad - Arshad Homeopathic Clinic",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Natural Sciatica Pain Treatment in Rawalpindi | Nerve Compression Relief",
      description: "Proven homeopathic solutions for sciatica pain from lower back to legs. 15+ years experience. Book your consultation today.",
      type: "website",
      url: "https://www.arshadhc.com/sciatica-treatment",
      images: [
        {
          url: "https://www.arshadhc.com/images/sciatica-treatment.jpg",
          width: 1200,
          height: 630,
          alt: "Sciatica Treatment Image",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/sciatica-treatment",
    },
  };
}



const data = [
  { id: '#what-is-sciatica', name: 'What is Sciatica' },
  { id: '#sciatica-facts', name: 'Key Facts' },
  { id: '#sciatica-causes', name: 'Causes' },
  { id: '#sciatica-symptoms', name: 'Symptoms' },
  { id: '#sciatica-diagnosis', name: 'Diagnosis' },
  { id: '#sciatica-treatment', name: 'Homeopathic Treatment' },
  { id: '#consult-us', name: 'Consult Us' }
];

const Sciatica = () => {

    // Page-specific schema (conditionSchema from your old code)
const conditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Sciatica",
  alternateName: ["Sciatic Nerve Pain", "Lumbar Radiculopathy"],
  description: "Pain radiating along the sciatic nerve from lower back through hips and down legs",
  cause: "Herniated disc, spinal stenosis, piriformis syndrome",
  possibleTreatment: {
    "@type": "MedicalTherapy",
    name: "Homeopathic Sciatica Treatment",
    description: "Natural treatment for sciatic nerve pain without side effects",
    url: "https://www.arshadhc.com/sciatica-treatment",
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (
    <div className={styles.container} id="sciatica">
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

        <div id='what-is-sciatica'>
          <h1 className={styles.h1}>Understanding Sciatica: When Nerve Pain Strikes</h1>
          <p><strong>Sciatica</strong> refers to pain that radiates along the path of the sciatic nerve - the longest and thickest nerve in your body that runs from your lower back through your hips and buttocks and down each leg. Typically, sciatica affects only one side of your body.</p>
          
          <div className={styles.img_div}>
            <img 
              src='/images/sciatic-nerve-path.jpg' 
              alt="Diagram showing sciatic nerve path from lower back to legs" 
              className={styles.img}
            />
          </div>

          <div className={styles.noteBox}>
            <p><strong>Did You Know?</strong> Sciatica isn't a medical diagnosis itself - it's a symptom of an underlying condition irritating the sciatic nerve, like a herniated disc or bone spur.</p>
          </div>
        </div>

        <div id='sciatica-facts' className={styles.column}>
          <h2 className={styles.h2}>Key Facts About Sciatica</h2>
          
          <ul className={styles.li}>
            <li><strong>The sciatic nerve is your body's largest nerve</strong> - about as thick as your thumb at its origin</li>
            <li><strong>90% of cases resolve without surgery</strong> with proper conservative treatment</li>
            <li><strong>Peak occurrence</strong> is between ages 30-50</li>
            <li><strong>Common triggers include:</strong> 
              <ul className={styles.li}>
                <li>Prolonged sitting (especially with poor posture)</li>
                <li>Sudden twisting movements</li>
                <li>Lifting heavy objects improperly</li>
              </ul>
            </li>
            <li><strong>Homeopathy offers effective relief</strong> for both acute flare-ups and chronic sciatic pain</li>
          </ul>
        </div>

        <div id='sciatica-causes' className={styles.column}>
          <h2 className={styles.h2}>What's Really Causing Your Sciatica?</h2>
          
          <h3 className={styles.h3}>Primary Causes</h3>
          <ul className={styles.li}>
            <li><strong>Herniated or bulging discs</strong> (most common cause - pressing on nerve roots)</li>
            <li><strong>Lumbar spinal stenosis</strong> (narrowing of spinal canal)</li>
            <li><strong>Degenerative disc disease</strong> (age-related wear and tear)</li>
            <li><strong>Spondylolisthesis</strong> (vertebra slipping out of place)</li>
            <li><strong>Piriformis syndrome</strong> (muscle spasms compressing nerve)</li>
          </ul>

          <h3 className={styles.h3}>Risk Factors</h3>
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>Lifestyle Factors</h4>
              <ul className={styles.li}>
                <li>Prolonged sitting (office workers, drivers)</li>
                <li>Obesity (extra weight stresses spine)</li>
                <li>Improper lifting techniques</li>
                <li>Poor mattress support</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Health Conditions</h4>
              <ul className={styles.li}>
                <li>Diabetes (increases nerve vulnerability)</li>
                <li>Arthritis</li>
                <li>Previous back injuries</li>
                <li>Sedentary lifestyle</li>
              </ul>
            </div>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/sciatica-causes.jpg' 
              alt="Common causes of sciatic nerve compression" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='sciatica-symptoms' className={styles.column}>
          <h2 className={styles.h2}>Sciatica Symptoms: More Than Just Back Pain</h2>
          
          <h3 className={styles.h3}>Most Common Signs</h3>
          <ul className={styles.li}>
            <li><strong>Radiating pain:</strong> From lower back through buttock down leg (often described as "electric shocks")</li>
            <li><strong>Worsening pain:</strong> When sitting, coughing, or sneezing</li>
            <li><strong>Numbness/tingling:</strong> "Pins and needles" sensation along nerve path</li>
            <li><strong>Muscle weakness:</strong> Difficulty moving leg/foot</li>
            <li><strong>One-sided symptoms:</strong> 90% of cases affect only one leg</li>
          </ul>
          
          <h3 className={styles.h3}>Emergency Symptoms (Seek Immediate Care)</h3>
          <div className={styles.warningBox}>
            <p><strong>⚠️ Red Flags:</strong> Sudden severe pain, loss of bladder/bowel control, or progressive leg weakness may indicate cauda equina syndrome - a medical emergency requiring immediate attention.</p>
          </div>

          <div className={styles.quizBox}>
            <h5 className={styles.h5}>Sciatica Severity Check</h5>
            <p style={{ color: "#654321", fontWeight: "bold" }}>Do you experience:</p>
            <ul className={styles.li}>
              <li>Pain radiating below the knee?</li>
              <li>Numbness/tingling in foot/toes?</li>
              <li>Difficulty standing from sitting position?</li>
              <li>Pain lasting more than 6 weeks?</li>
            </ul>
            <div className={styles.resultsBox}>
              <h5 className={styles.h5}>Results:</h5>
              <p><strong>2+ symptoms?</strong> Professional evaluation recommended</p>
            </div>
          </div>
        </div>

        <div id='sciatica-diagnosis' className={styles.column}>
          <h2 className={styles.h2}>Diagnosing Sciatica: Getting to the Root Cause</h2>
          
          <h3 className={styles.h3}>Physical Examination</h3>
          <p>During your clinic visit, we'll assess:</p>
          <ul className={styles.li}>
            <li><strong>Range of motion:</strong> How you walk on heels/toes</li>
            <li><strong>Reflex tests:</strong> Knee-jerk and ankle responses</li>
            <li><strong>Straight leg raise test:</strong> Checks nerve irritation</li>
            <li><strong>Muscle strength:</strong> Resistance testing</li>
          </ul>

          <h3 className={styles.h3}>Diagnostic Tests (If Needed)</h3>
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>Imaging Tests</h4>
              <ul className={styles.li}>
                <li><strong>X-ray:</strong> Rules out bone abnormalities</li>
                <li><strong>MRI:</strong> Detailed view of soft tissues (best for disc issues)</li>
                <li><strong>CT scan:</strong> 3D view of spinal structures</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Nerve Tests</h4>
              <ul className={styles.li}>
                <li><strong>Electromyography (EMG):</strong> Measures electrical activity in muscles</li>
                <li><strong>Nerve conduction studies:</strong> Checks impulse transmission</li>
              </ul>
            </div>
          </div>
        </div>

        <div id='sciatica-treatment' className={styles.column}>
          <h2 className={styles.h2}>Homeopathic Sciatica Treatment: Natural Relief</h2>
          
          <h3 className={styles.h3}>Why Choose Homeopathy?</h3>
          <ul className={styles.li}>
            <li><strong>No side effects</strong> unlike conventional painkillers</li>
            <li><strong>Addresses root causes</strong> not just symptoms</li>
            <li><strong>Personalized approach</strong> based on your unique pain pattern</li>
            <li><strong>Effective for both acute and chronic cases</strong></li>
          </ul>

          <h3 className={styles.h3}>Our Treatment Approach</h3>
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>For Acute Sciatica</h4>
              <ul className={styles.li}>
                <li><strong>Colocynthis:</strong> Shooting pains relieved by pressure</li>
                <li><strong>Magnesium Phos:</strong> For cramping nerve pain</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Chronic Cases</h4>
              <ul className={styles.li}>
                <li><strong>Rhus Tox:</strong> Stiffness better with movement</li>
                <li><strong>Gnaphalium:</strong> Numbness with radiating pain</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.h3}>Complementary Therapies</h3>
          <ul className={styles.li}>
            <li><strong>Posture correction:</strong> Ergonomic adjustments</li>
            <li><strong>Targeted exercises:</strong> Nerve flossing techniques</li>
            <li><strong>Nutritional support:</strong> Anti-inflammatory diet</li>
          </ul>

          <div className={styles.successRateBox}>
            <p>🌿 <strong>78% of our patients</strong> experience significant pain reduction within 4-6 weeks of homeopathic treatment</p>
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
        
        <div id='consult-us' className={styles.column}>
          <div className={styles.ctaBox}>
            <h3 className={styles.h3}>Tired of Sciatica Pain Controlling Your Life?</h3>
            <p>Our clinic specializes in:</p>
            <ul className={styles.li}>
              <li><strong>Personalized homeopathic treatment plans</strong></li>
              <li><strong>Non-invasive pain relief</strong></li>
              <li><strong>Prevention of recurrent flare-ups</strong></li>
              <li><strong>18+ years</strong> of experience treating nerve pain</li>
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
        <Link href="/pcos-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
        </Link>
        <Link href="/thyroid-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowRightCircleFill/></a>
        </Link>
      </div>
      <DoctorsFooter/> 
     <ClientProviders/> 
    </div>
  );
};

export default Sciatica;
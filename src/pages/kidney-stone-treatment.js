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
    title: "Best Kidney Stone Treatment in Rawalpindi | Natural Stone Removal Without Surgery | Homeopathic Clinic",
    description: "Effective homeopathic treatment for kidney stones in Rawalpindi. Dissolve stones naturally, relieve pain, and prevent recurrence. 15+ years experience treating calcium oxalate, uric acid, and struvite stones. Book consultation today.",
    keywords: "kidney stone treatment, natural stone removal, kidney stone pain relief, homeopathic stone dissolver, calcium oxalate stones, uric acid stones, renal calculi treatment, best stone doctor Rawalpindi, non-surgical stone treatment, kidney colic relief, stone prevention diet, frequent urination treatment, blood in urine, flank pain relief",
    author: "Dr. Arshad - Arshad Homeopathic Clinic",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Natural Kidney Stone Treatment in Rawalpindi | Pain Relief Without Surgery",
      description: "Proven homeopathic solutions for kidney stones. Dissolve stones naturally and prevent recurrence. 15+ years experience. Book your consultation today.",
      type: "website",
      url: "https://www.arshadhc.com/kidney-stone-treatment",
      images: [
        {
          url: "https://www.arshadhc.com/images/kidney-stone-treatment.jpg",
          width: 1200,
          height: 630,
          alt: "Kidney Stone Treatment Image",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/kidney-stone-treatment",
    },
  };
}


const data = [
  { id: '#kidney-function', name: 'Kidney Function' },
  { id: '#what-are-kidney-stones', name: 'What Are Kidney Stones' },
  { id: '#kidney-stone-causes', name: 'Causes' },
  { id: '#kidney-stone-symptoms', name: 'Symptoms' },
  { id: '#kidney-stone-prevention', name: 'Prevention' },
  { id: '#kidney-stone-treatment', name: 'Homeopathic Treatment' },
  { id: '#consult-us', name: 'Consult Us' }
];

const KidneyStone = () => {

      // Page-specific schema (conditionSchema from your old code)
    const conditionSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalCondition",
      name: "Kidney Stones",
      alternateName: ["Renal Calculi", "Nephrolithiasis", "Urolithiasis"],
      description: "Hard mineral deposits in kidneys causing severe pain, urinary issues, and potential blockages",
      cause: "Dehydration, dietary factors, metabolic disorders",
      possibleTreatment: {
        "@type": "MedicalTherapy",
        name: "Homeopathic Stone Treatment",
        description: "Natural dissolution and prevention of kidney stones without surgery",
        url: "https://www.arshadhc.com/kidney-stone-treatment",
      },
    };

    // Sanitize JSON to prevent XSS (same as layout)
    const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

    
  return (
    <div className={styles.container} id="kidney-stone">
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

        <div id='kidney-function'>
          <h1 className={styles.h1}>Your Kidneys: The Body's Master Filters</h1>
          <p>Your two bean-shaped kidneys work tirelessly as your body's <strong>natural filtration system</strong>, performing these life-sustaining functions:</p>
          
          <ul className={styles.li}>
            <li><strong>Blood purification:</strong> Filtering 200 liters of blood daily</li>
            <li><strong>Waste removal:</strong> Eliminating toxins through urine</li>
            <li><strong>Mineral balance:</strong> Regulating calcium, potassium, and sodium</li>
            <li><strong>Blood pressure control:</strong> Releasing essential hormones</li>
          </ul>

          <div className={styles.noteBox}>
            <p><strong>Did You Know?</strong> Your kidneys process all your blood 40 times a day - that's every 30 minutes!</p>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/kidney-anatomy.jpg' 
              alt="Diagram showing kidney structure and function" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='what-are-kidney-stones' className={styles.column}>
          <h2 className={styles.h2}>Kidney Stones: Nature's Painful Pebbles</h2>
          
          <p><strong>Kidney stones</strong> are like tiny, jagged crystals that form when minerals in your urine become too concentrated. These hardened deposits can be as small as a grain of sand or as large as a golf ball, causing:</p>
          
          <div className={styles.stoneGrid}>
            <div className={styles.stoneCard}>
              <h4 className={styles.h4}>Common Types</h4>
              <ul className={styles.li}>
                <li><strong>Calcium oxalate</strong> (80% of cases)</li>
                <li><strong>Uric acid</strong> (related to gout)</li>
                <li><strong>Struvite</strong> (infection-related)</li>
                <li><strong>Cystine</strong> (rare, genetic)</li>
              </ul>
            </div>
            <div className={styles.stoneCard}>
              <h4 className={styles.h4}>Stone Journey</h4>
              <ul className={styles.li}>
                <li>Form in kidney</li>
                <li>Travel down ureter</li>
                <li>Cause intense pain</li>
                <li>Pass through bladder</li>
              </ul>
            </div>
          </div>

          <div className={styles.factBox}>
            <p>"Kidney stones affect 1 in 10 people, with men being twice as likely to develop them. The prevalence has increased 70% in the last 30 years due to dietary changes."</p>
          </div>
        </div>

        <div id='kidney-stone-causes' className={styles.column}>
          <h2 className={styles.h2}>Why Stones Form: The Perfect Storm</h2>
          
          <h3 className={styles.h3}>Primary Causes</h3>
          <ul className={styles.li}>
            <li><strong>Chronic dehydration:</strong> Dark, concentrated urine</li>
            <li><strong>High-oxalate diet:</strong> Spinach, nuts, chocolate</li>
            <li><strong>Excess sodium:</strong> Increases calcium in urine</li>
            <li><strong>Animal protein overload:</strong> Raises uric acid levels</li>
          </ul>

          <h3 className={styles.h3}>Other Risk Factors</h3>
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>Lifestyle Factors</h4>
              <ul className={styles.li}>
                <li>Obesity (BMI &gt;30)</li>
                <li>Sedentary habits</li>
                <li>Rapid weight loss</li>
                <li>Vitamin C megadoses</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Medical Conditions</h4>
              <ul className={styles.li}>
                <li>Recurrent UTIs</li>
                <li>Gout/hyperuricemia</li>
                <li>Digestive diseases</li>
                <li>Family history</li>
              </ul>
            </div>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/kidney-stone-formation.jpg' 
              alt="Process of kidney stone formation" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='kidney-stone-symptoms' className={styles.column}>
          <h2 className={styles.h2}>Kidney Stone Symptoms: Your Body's Alarm</h2>
          
          <div className={styles.symptomGrid}>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Pain Patterns</h4>
              <ul className={styles.li}>
                <li><strong>Colicky pain:</strong> Waves of severe flank pain</li>
                <li><strong>Radiating pain:</strong> To groin/lower abdomen</li>
                <li><strong>Movement-triggered:</strong> Changes with stone position</li>
              </ul>
            </div>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Urinary Changes</h4>
              <ul className={styles.li}>
                <li>Blood in urine (pink/red)</li>
                <li>Burning during urination</li>
                <li>Frequent/urgent need to go</li>
              </ul>
            </div>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Systemic Symptoms</h4>
              <ul className={styles.li}>
                <li>Nausea/vomiting</li>
                <li>Fever/chills (if infected)</li>
                <li>Restlessness</li>
              </ul>
            </div>
          </div>

          <div className={styles.warningBox}>
            <p>⚠️ <strong>Emergency Signs:</strong> Fever with pain, inability to urinate, or persistent vomiting indicate possible obstruction/infection requiring immediate care.</p>
          </div>

          <div className={styles.quizBox}>
            <h5 className={styles.h5}>Stone Risk Assessment</h5>
            <p style={{ color: "#654321", fontWeight: "bold" }}>Do you experience:</p>
            <ul className={styles.li}>
              <li>Severe flank pain that comes in waves?</li>
              <li>Pink, red, or brown urine?</li>
              <li>Pain when urinating?</li>
              <li>Persistent need to urinate?</li>
            </ul>
            <div className={styles.resultsBox}>
              <h5 className={styles.h5}>Results:</h5>
              <p><strong>2+ symptoms?</strong> Likely kidney stones - diagnostic tests recommended</p>
            </div>
          </div>
        </div>

        <div id='kidney-stone-prevention' className={styles.column}>
          <h2 className={styles.h2}>Stone Prevention: Your Daily Defense</h2>
          
          <h3 className={styles.h3}>Hydration is Key</h3>
          <ul className={styles.li}>
            <li><strong>3L water daily:</strong> Pale yellow urine = good hydration</li>
            <li><strong>Citrus benefits:</strong> Lemon water helps prevent stones</li>
            <li><strong>Limit dehydrators:</strong> Coffee, alcohol, soda</li>
          </ul>

          <h3 className={styles.h3}>Dietary Modifications</h3>
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>Foods to Enjoy</h4>
              <ul className={styles.li}>
                <li>Calcium-rich foods (dairy, greens)</li>
                <li>High-fiber fruits/vegetables</li>
                <li>Whole grains</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Foods to Limit</h4>
              <ul className={styles.li}>
                <li>Processed meats</li>
                <li>High-oxalate foods (spinach, nuts)</li>
                <li>Excess salt/sugar</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.h3}>Lifestyle Adjustments</h3>
          <ul className={styles.li}>
            <li><strong>Regular exercise:</strong> Helps prevent stone formation</li>
            <li><strong>Stress management:</strong> Cortisol affects mineral balance</li>
            <li><strong>Weight control:</strong> Obesity increases stone risk</li>
          </ul>

          <div className={styles.tipBox}>
            <p><strong>Pro Tip:</strong> For calcium oxalate stones (most common type), consume calcium WITH oxalate-rich foods - they bind in gut, not kidneys!</p>
          </div>
        </div>

        <div id='kidney-stone-treatment' className={styles.column}>
          <h2 className={styles.h2}>Homeopathic Stone Solutions</h2>
          
          <h3 className={styles.h3}>Why Choose Homeopathy?</h3>
          <ul className={styles.li}>
            <li><strong>Dissolves stones naturally</strong> without surgery</li>
            <li><strong>Relieves pain</strong> during stone passage</li>
            <li><strong>Prevents recurrence</strong> by addressing causes</li>
            <li><strong>No side effects</strong> like conventional treatments</li>
          </ul>

          <h3 className={styles.h3}>Our Treatment Approach</h3>
          <div className={styles.col3}>
            <div>
              <h4 className={styles.h4}>For Calcium Stones</h4>
              <ul className={styles.li}>
                <li><strong>Berberis Vulgaris:</strong> Radiating pain, bloody urine</li>
                <li><strong>Lycopodium:</strong> Right-sided stones with bloating</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Uric Acid Stones</h4>
              <ul className={styles.li}>
                <li><strong>Benzoic Acid:</strong> Strong-smelling urine</li>
                <li><strong>Urtica Urens:</strong> Burning urination</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Stone Pain</h4>
              <ul className={styles.li}>
                <li><strong>Cantharis:</strong> Intense burning during urination</li>
                <li><strong>Sarsaparilla:</strong> Pain at end of urination</li>
              </ul>
            </div>
          </div>

          <div className={styles.successRateBox}>
            <p>🌿 <strong>99% of our patients</strong> pass stones successfully with homeopathic treatment, avoiding surgical intervention</p>
          </div>

          <div className={styles.warningBox}>
            <p>⚠️ <strong>Important Medical Disclaimer:</strong> While homeopathic medicines offer remarkable healing potential, <strong>self-treatment can be dangerous</strong> for kidney stones. The remedies mentioned here are for informational purposes only. Do not use any medication without consulting a qualified physician, as:</p>
            <ul className={styles.li}>
              <li>Stone size/location determines treatment approach</li>
              <li>Obstructions may require emergency care</li>
              <li>Dosage must be precisely tailored</li>
            </ul>
            <p>Book a consultation today to receive <strong>your personalized stone treatment plan</strong>.</p>
          </div>
        </div>

        <div id='consult-us' className={styles.column}>
          <div className={styles.ctaBox}>
            <h3 className={styles.h3}>Ready to Break Free From Kidney Stones?</h3>
            <p>Our clinic specializes in:</p>
            <ul className={styles.li}>
              <li><strong>Natural stone dissolution</strong> without surgery</li>
              <li><strong>Pain management</strong> during stone passage</li>
              <li><strong>Recurrence prevention</strong> strategies</li>
              <li><strong>18+ years</strong> of urological experience</li>
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
        <Link href="/ovarian-cyst-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
        </Link>
        <Link href="/rheumatoid-arthritis-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowRightCircleFill/></a>
        </Link>
      </div>
      <DoctorsFooter/>
     <ClientProviders/> 
    </div>
  );
};

export default KidneyStone;
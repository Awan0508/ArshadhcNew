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
    title: "Best Ovarian Cyst Treatment in Rawalpindi | Natural Cure Without Surgery | Homeopathic Clinic",
    description: "Effective homeopathic treatment for ovarian cysts in Rawalpindi. Shrink cysts naturally, relieve pelvic pain, and restore hormonal balance. 15+ years experience treating functional and pathological cysts. Book consultation today.",
    keywords: "ovarian cyst treatment, PCOS cyst relief, natural cyst shrinking, homeopathic ovary treatment, pelvic pain relief, endometriosis treatment, follicular cyst cure, dermoid cyst treatment, cystadenomas remedy, irregular periods treatment, fertility with ovarian cysts, best cyst doctor Rawalpindi, non-surgical cyst treatment",
    author: "Dr. Asma Arshad - Arshad Homeopathic Clinic",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Natural Ovarian Cyst Treatment in Rawalpindi | Non-Surgical Healing",
      description: "Proven homeopathic solutions for ovarian cysts including PCOS and endometriosis. 15+ years experience avoiding surgical complications. Book your consultation today.",
      type: "website",
      url: "https://www.arshadhc.com/ovarian-cyst-treatment",
      images: [
        {
          url: "https://www.arshadhc.com/images/ovarian-cyst-treatment.jpg",
          width: 1200,
          height: 630,
          alt: "Ovarian Cyst Treatment Image",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/ovarian-cyst-treatment",
    },
  };
}




const data = [
  { id: '#what-is-ovarian-cyst', name: 'What is Ovarian Cyst' },
  { id: '#ovarian-cyst-causes', name: 'Causes' },
  { id: '#ovarian-cyst-symptoms', name: 'Symptoms' },
  { id: '#ovarian-cyst-types', name: 'Types' },
  { id: '#endometriosis', name: 'Endometriosis' },
  { id: '#ovarian-cyst-treatment', name: 'Homeopathic Treatment' },
  { id: '#consult-us', name: 'Consult Us' }
];

const OvarianCyst = () => {

    // Page-specific schema (conditionSchema from your old code)
const conditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Ovarian Cyst",
  alternateName: ["Follicular Cyst", "Dermoid Cyst", "Cystadenoma"],
  description: "Fluid-filled sacs on ovaries causing pelvic pain, irregular periods, and fertility issues",
  cause: "Hormonal imbalances, endometriosis, abnormal cell growth",
  possibleTreatment: {
    "@type": "MedicalTherapy",
    name: "Homeopathic Cyst Treatment",
    description: "Natural treatment for ovarian cysts without surgery",
    url: "https://www.arshadhc.com/ovarian-cyst-treatment",
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');


  return (
    <div className={styles.container} id="ovarian-cyst">
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

        <div id='what-is-ovarian-cyst'>
          <h1 className={styles.h1}>Ovarian Cysts: The Silent Bubble Trouble</h1>
          <p>An <strong>ovarian cyst</strong> is like a tiny water balloon that forms on or inside your ovary - a fluid-filled sac that can range from pea-sized to as large as an orange. While most women develop at least one cyst during their lifetime, these often disappear unnoticed. But when they grow or multiply, they can cause significant discomfort and health concerns.</p>
          
          <div className={styles.noteBox}>
            <p><strong>Did You Know?</strong> About 8% of premenopausal women develop large cysts requiring treatment, while nearly all women experience at least one small, symptom-free cyst during their reproductive years.</p>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/ovary-with-cyst.jpg' 
              alt="Diagram showing normal ovary vs ovary with cyst" 
              className={styles.img}
            />
          </div>

          <h3 className={styles.h3}>Your Ovaries' Vital Roles</h3>
          <p>These almond-sized organs on either side of your uterus perform two crucial functions:</p>
          <ul className={styles.li}>
            <li><strong>Egg production:</strong> Releasing one egg each menstrual cycle</li>
            <li><strong>Hormone secretion:</strong> Producing estrogen and progesterone</li>
          </ul>
        </div>

        <div id='ovarian-cyst-causes' className={styles.column}>
          <h2 className={styles.h2}>Why Do Cysts Form? The Hidden Triggers</h2>
          
          <p>Cysts develop when the normal ovulation process goes slightly awry. Each month, your ovaries prepare tiny sacs (follicles) to nurture developing eggs. Normally, the follicle bursts to release the egg, but sometimes:</p>
          
          <div className={styles.causeCards}>
            <div className={styles.causeCard}>
              <h4 className={styles.h4}>Follicle Doesn't Release Egg</h4>
              <p>The sac continues growing, forming a <strong>follicular cyst</strong> (most common type)</p>
            </div>
            <div className={styles.causeCard}>
              <h4 className={styles.h4}>Follicle Reseals After Releasing Egg</h4>
              <p>Fluid accumulates inside, creating a <strong>corpus luteum cyst</strong></p>
            </div>
            <div className={styles.causeCard}>
              <h4 className={styles.h4}>Abnormal Cell Growth</h4>
              <p>Leads to <strong>dermoid cysts</strong> or <strong>cystadenomas</strong> (non-functional cysts)</p>
            </div>
          </div>

          <h3 className={styles.h3}>Risk Factors That Increase Cyst Formation</h3>
          <ul className={styles.li}>
            <li><strong>Hormonal imbalances:</strong> Common in PCOS (Polycystic Ovary Syndrome)</li>
            <li><strong>Endometriosis:</strong> Uterine tissue growing on ovaries</li>
            <li><strong>Pelvic infections:</strong> Severe infections can spread to ovaries</li>
            <li><strong>Pregnancy:</strong> Cysts form to support early pregnancy sometimes</li>
            <li><strong>Fertility drugs:</strong> Can cause multiple follicle development</li>
          </ul>
        </div>

        <div id='ovarian-cyst-symptoms' className={styles.column}>
          <h2 className={styles.h2}>Is That Pain a Cyst? Warning Signs</h2>
          
          <p>Many ovarian cysts are silent, but when symptoms appear, they often include:</p>
          
          <div className={styles.symptomGrid}>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Pelvic Discomfort</h4>
              <ul className={styles.li}>
                <li>Dull ache on one side</li>
                <li>Sudden sharp pain if cyst ruptures</li>
                <li>Pain during intercourse</li>
              </ul>
            </div>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Menstrual Changes</h4>
              <ul className={styles.li}>
                <li>Irregular periods</li>
                <li>Unusually light/heavy bleeding</li>
                <li>Spotting between cycles</li>
              </ul>
            </div>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Pressure Symptoms</h4>
              <ul className={styles.li}>
                <li>Frequent urination</li>
                <li>Difficulty emptying bowels</li>
                <li>Bloated, full feeling</li>
              </ul>
            </div>
          </div>

          <div className={styles.warningBox}>
            <p>⚠️ <strong>Emergency Signs:</strong> Sudden severe pelvic pain with fever/vomiting may indicate cyst rupture or ovarian torsion - seek immediate medical care.</p>
          </div>

          <div className={styles.quizBox}>
            <h5 className={styles.h5}>Cyst Risk Assessment</h5>
            <p style={{ color: "#654321", fontWeight: "bold" }}>Do you experience:</p>
            <ul className={styles.li}>
              <li>Persistent one-sided pelvic pain?</li>
              <li>Pain during intercourse?</li>
              <li>Menstrual irregularities?</li>
              <li>Unexplained bloating?</li>
            </ul>
            <div className={styles.resultsBox}>
              <h5 className={styles.h5}>Results:</h5>
              <p><strong>2+ symptoms?</strong> Pelvic ultrasound recommended</p>
            </div>
          </div>
        </div>

        <div id='ovarian-cyst-types' className={styles.column}>
          <h2 className={styles.h2}>Not All Cysts Are Created Equal</h2>
          
          <div className={styles.comparisonBox}>
            <div className={styles.comparisonCol}>
              <h3 className={styles.h3}>Functional Cysts</h3>
              <p><em>Related to menstrual cycle - usually harmless</em></p>
              <ul className={styles.li}>
                <li><strong>Follicular cysts:</strong> When follicle doesn't release egg (2-5cm)</li>
                <li><strong>Corpus luteum cysts:</strong> Form after egg release (3-10cm)</li>
                <li><strong>Resolution:</strong> Typically disappear in 1-3 cycles</li>
              </ul>
            </div>
            <div className={styles.comparisonCol}>
              <h3 className={styles.h3}>Pathological Cysts</h3>
              <p><em>Abnormal growths - may require treatment</em></p>
              <ul className={styles.li}>
                <li><strong>Dermoid cysts:</strong> Contain hair, skin, even teeth (common under 30)</li>
                <li><strong>Cystadenomas:</strong> Filled with watery/mucous fluid (common over 40)</li>
                <li><strong>Resolution:</strong> Rarely disappear without treatment</li>
              </ul>
            </div>
          </div>

          <div className={styles.noteBox}>
            <p><strong>Key Difference:</strong> Functional cysts come and go with your cycle, while pathological cysts persist and grow regardless of menstruation.</p>
          </div>
        </div>

        <div id='endometriosis' className={styles.column}>
          <h2 className={styles.h2}>Endometriosis: When Tissue Goes Rogue</h2>
          <p>Endometriosis occurs when tissue similar to your uterine lining grows outside the uterus - often on ovaries, forming <strong>endometriomas</strong> ("chocolate cysts"). These blood-filled cysts can:</p>
          
          <ul className={styles.li}>
            <li>Cause severe menstrual pain</li>
            <li>Lead to fertility challenges</li>
            <li>Result in painful intercourse</li>
            <li>Trigger chronic pelvic pain</li>
          </ul>

          <div className={styles.img_div}>
            <img 
              src='/images/endometriosis-cyst.jpg' 
              alt="Endometrioma cyst on ovary" 
              className={styles.img}
            />
          </div>

          <h3 className={styles.h3}>Endometriosis vs Ovarian Cysts</h3>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Endometrioma</th>
                <th>Functional Cyst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Content</td>
                <td>Old blood ("chocolate")</td>
                <td>Clear fluid</td>
              </tr>
              <tr>
                <td>Pain Pattern</td>
                <td>Worsens during periods</td>
                <td>Constant or intermittent</td>
              </tr>
              <tr>
                <td>Fertility Impact</td>
                <td>Often reduces fertility</td>
                <td>Usually doesn't affect</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div id='ovarian-cyst-treatment' className={styles.column}>
          <h2 className={styles.h2}>Homeopathic Healing Without Surgery</h2>
          
          <h3 className={styles.h3}>Why Choose Homeopathy?</h3>
          <ul className={styles.li}>
            <li><strong>Non-invasive approach</strong> to shrink cysts naturally</li>
            <li><strong>Addresses hormonal imbalances</strong> preventing new cysts</li>
            <li><strong>Relieves pain</strong> without side effects</li>
            <li><strong>Preserves ovarian function</strong> crucial for fertility</li>
          </ul>

          <h3 className={styles.h3}>Our Treatment Protocol</h3>
          <div className={styles.col3}>
            <div>
              <h4 className={styles.h4}>For Functional Cysts</h4>
              <ul className={styles.li}>
                <li><strong>Apis Mellifica:</strong> Burning, stinging pains</li>
                <li><strong>Lycopodium:</strong> Right-sided cysts with bloating</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Endometriomas</h4>
              <ul className={styles.li}>
                <li><strong>Sepia:</strong> Bearing-down sensation</li>
                <li><strong>Belladonna:</strong> Sudden intense pains</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Dermoid Cysts</h4>
              <ul className={styles.li}>
                <li><strong>Thuja:</strong> Left-sided growths</li>
                <li><strong>Silicea:</strong> Promotes natural absorption</li>
              </ul>
            </div>
          </div>

          <div className={styles.successRateBox}>
            <p>🌿 <strong>78% of our patients</strong> show significant cyst reduction within 3-6 months of homeopathic treatment</p>
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
        </div>

        <div id='consult-us' className={styles.column}>
          <div className={styles.ctaBox}>
            <h3 className={styles.h3}>Tired of Living With Ovarian Cyst Pain?</h3>
            <p>Our clinic specializes in:</p>
            <ul className={styles.li}>
              <li><strong>Non-surgical cyst shrinking</strong></li>
              <li><strong>Hormonal balance restoration</strong></li>
              <li><strong>Pain relief without side effects</strong></li>
              <li><strong>18+ years</strong> of women's health experience</li>
            </ul>
             <Link href="mailto:ask2cure@gmail.com" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer"><button className={styles.ctaButton}>Book Your Consultation Now</button></a>
            </Link>
            <p><strong>Call us at</strong></p>
            <div>  
              
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
        <Link href="/anal-fistula-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
        </Link>
        <Link href="/kidney-stone-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowRightCircleFill/></a>
        </Link>
      </div>
      <DoctorsFooter/>
      <ClientProviders/> 
    </div>
  );
};

export default OvarianCyst;
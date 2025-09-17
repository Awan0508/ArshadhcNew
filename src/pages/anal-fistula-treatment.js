"use client";

import styles from '../styles/pages.module.css';
import Link from 'next/link';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Header from '../components/Header';
import TestimonialSlider from '../components/TestimonialSlider';
import VideoSlider from '../components/VideoSlider';
import DoctorsFooter from '../components/DoctorsFooter';
import BackgroundAnimation from '../components/BackgroundAnimation';
import ClientProviders from '../app/ClientProviders';



// Page-specific metadata overrides (merges with layout defaults)
export async function generateMetadata() {
  return {
    title: "Best Anal Fistula Treatment in Rawalpindi | Fistula-in-Ano Pain Relief | Homeopathic Clinic",
    description: "Effective homeopathic treatment for anal fistula in Rawalpindi. Heal fistula tunnels naturally without surgery. 15+ years experience treating abscesses, fissures and hemorrhoids. Book consultation today.",
    keywords: "anal fistula treatment, fistula-in-ano, perianal abscess, anal fissure cure, hemorrhoids treatment, anorectal fistula, best fistula doctor, non-surgical fistula treatment, homeopathic fistula cure, rectal pain relief, anal discharge, pus drainage, Crohn's related fistula, surgical alternative, best piles treatment Rawalpindi",
    author: "Dr. Mrs Asma Arshad - Arshad Homeopathic Clinic",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Natural Anal Fistula Treatment in Rawalpindi | Non-Surgical Healing",
      description: "Proven homeopathic solutions for anal fistulas, abscesses and fissures. 15+ years experience avoiding surgical complications. Book your consultation today.",
      type: "website",
      url: "https://www.arshadhc.com/anal-fistula-treatment",
      images: [
        {
          url: "https://www.arshadhc.com/images/fistula-treatment.jpg",
          width: 1200,
          height: 630,
          alt: "Anal Fistula Treatment Image",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/anal-fistula-treatment",
    },
  };
}



const data = [
  { id: '#what-is-anal-fistula', name: 'What is Anal Fistula' },
  { id: '#causes-anal-fistula', name: 'Causes' },
  { id: '#symptoms-anal-fistula', name: 'Symptoms' },
  { id: '#complications-anal-fistula', name: 'Complications' },
  { id: '#anal-fissure', name: 'Anal Fissure' },
  { id: '#hemorrhoids', name: 'Hemorrhoids' },
  { id: '#anal-fistula-treatment', name: 'Homeopathic Treatment' },
  { id: '#consult-us', name: 'Consult Us' }
];

const AnalFistula = () => {
  // Page-specific schema (conditionSchema from your old code)
const conditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Anal Fistula",
  alternateName: ["Fistula-in-Ano", "Anorectal Fistula"],
  description: "Abnormal tunnel between anal canal and skin causing pain, discharge and recurrent infections",
  cause: "Anal abscess, Crohn's disease, trauma, infections",
  possibleTreatment: {
    "@type": "MedicalTherapy",
    name: "Homeopathic Fistula Treatment",
    description: "Natural treatment for anal fistulas without surgery",
    url: "https://www.arshadhc.com/anal-fistula-treatment",
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (
    <div className={styles.container}>
      <Header />
      <BackgroundAnimation />
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

        <div id='what-is-anal-fistula'>
          <h1 className={styles.h1}>Anal Fistula: The Hidden Tunnel of Pain</h1>
          <p>An <strong>anal fistula</strong> is like an unwanted underground passage - a small abnormal tunnel connecting your anal canal to the skin near your anus. This painful condition typically develops when an <strong>anal abscess</strong> (a pocket of infection) fails to heal properly, leaving behind this troublesome channel.</p>
          
          <div className={styles.noteBox}>
            <p><strong>Did You Know?</strong> About 50% of anal abscesses progress to fistulas if not treated effectively. The anus contains tiny glands that can become blocked, leading to infection and abscess formation.</p>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/anal-fistula-diagram.jpg' 
              alt="Diagram showing anal fistula tunnel formation" 
              className={styles.img}
            />
          </div>

          <h3 className={styles.h3}>Related Anal Conditions</h3>
          <p>Anal problems are more common than people realize. Along with fistulas, many suffer from:</p>
          <ul className={styles.li}>
            <li><strong>Hemorrhoids</strong> (swollen veins)</li>
            <li><strong>Anal fissures</strong> (tears in anal lining)</li>
            <li><strong>Abscesses</strong> (infected pus collections)</li>
          </ul>
        </div>

        <div id='causes-anal-fistula' className={styles.column}>
          <h2 className={styles.h2}>What Causes This Painful Condition?</h2>
          
          <h3 className={styles.h3}>Primary Causes</h3>
          <ul className={styles.li}>
            <li><strong>Untreated anal abscess:</strong> The most common origin (50% of cases)</li>
            <li><strong>Crohn's disease:</strong> This inflammatory bowel disease increases risk by 25%</li>
            <li><strong>Trauma or injury:</strong> From childbirth, anal intercourse, or surgery</li>
          </ul>

          <h3 className={styles.h3}>Other Risk Factors</h3>
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>Medical Conditions</h4>
              <ul className={styles.li}>
                <li>Diverticulitis</li>
                <li>Tuberculosis</li>
                <li>HIV/AIDS</li>
                <li>Cancer</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Lifestyle Factors</h4>
              <ul className={styles.li}>
                <li>Chronic constipation/diarrhea</li>
                <li>Poor anal hygiene</li>
                <li>Weakened immune system</li>
              </ul>
            </div>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/fistula-risk-factors.jpg' 
              alt="Factors increasing risk of anal fistula" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='symptoms-anal-fistula' className={styles.column}>
          <h2 className={styles.h2}>Recognizing Anal Fistula Symptoms</h2>
          
          <div className={styles.symptomGrid}>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Physical Signs</h4>
              <ul className={styles.li}>
                <li><strong>Persistent anal pain</strong> (worsens with sitting/movement)</li>
                <li><strong>Skin irritation</strong> around anus</li>
                <li><strong>Visible opening</strong> near anus</li>
                <li><strong>Swelling/redness</strong></li>
              </ul>
            </div>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Systemic Symptoms</h4>
              <ul className={styles.li}>
                <li><strong>Fever/chills</strong> (if infection present)</li>
                <li><strong>Fatigue</strong></li>
                <li><strong>Pus/discharge</strong> (may stain underwear)</li>
                <li><strong>Blood in stool</strong></li>
              </ul>
            </div>
          </div>

          <div className={styles.warningBox}>
            <p><strong>Emergency Signs:</strong> High fever, severe pain, or inability to control bowel movements may indicate a serious infection requiring immediate care.</p>
          </div>

      <section id='complications-anal-fistula' className={styles.complications}>
      <h2>Complications of Untreated Anal Fistula</h2>
      <div className={styles.complicationsGrid}>
        {/* 1. Recurrent Abscesses */}
        <div className={styles.complicationCard}>
          <h3>Recurrent Abscesses</h3>
          <p>Repeated infections causing pain, swelling, and pus drainage.</p>
        </div>

        {/* 2. Chronic Pain */}
        <div className={styles.complicationCard}>
          <h3>Chronic Pain & Discomfort</h3>
          <p>Persistent pain during bowel movements or sitting.</p>
        </div>

        {/* 3. Bacterial Infection */}
        <div className={styles.complicationCard}>
          <h3>Bacterial Infection (Cellulitis)</h3>
          <p>Spread of infection to surrounding tissues.</p>
        </div>

        {/* 4. Complex Fistula */}
        <div className={styles.complicationCard}>
          <h3>Complex Fistula</h3>
          <p>Branching tracts making treatment harder.</p>
        </div>

        {/* 5. Sepsis */}
        <div className={styles.complicationCard}>
          <h3>Sepsis (Life-Threatening)</h3>
          <p>Systemic infection requiring emergency care.</p>
        </div>

        {/* 6. Fecal Incontinence */}
        <div className={styles.complicationCard}>
          <h3>Fecal Incontinence</h3>
          <p>Sphincter muscle damage leading to bowel control loss.</p>
        </div>

        {/* 7. Anal Stenosis */}
        <div className={styles.complicationCard}>
          <h3>Anal Stenosis</h3>
          <p>Narrowing of the anus due to scarring.</p>
        </div>

        {/* 8. Rare Cancer Risk */}
        <div className={styles.complicationCard}>
          <h3>Cancer Risk (Rare)</h3>
          <p>Long-standing fistulas may develop squamous cell carcinoma.</p>
        </div>

        {/* 9. Quality of Life Impact */}
        <div className={styles.complicationCard}>
          <h3>Impaired Quality of Life</h3>
          <p>Social embarrassment, odor, and mental health decline.</p>
        </div>
      </div>
    </section>



          <div className={styles.quizBox}>
            <h5 className={styles.h5}>Fistula Risk Assessment</h5>
            <p style={{ color: "#654321", fontWeight: "bold" }}>Do you experience:</p>
            <ul className={styles.li}>
              <li>Recurrent anal abscesses?</li>
              <li>Persistent anal discharge?</li>
              <li>Pain that temporarily improves after pus drainage?</li>
              <li>History of Crohn's disease?</li>
            </ul>
            <div className={styles.resultsBox}>
              <h5 className={styles.h5}>Results:</h5>
              <p><strong>2+ symptoms?</strong> Professional evaluation recommended</p>
            </div>
          </div>
        </div>

        <div id='anal-fissure' className={styles.column}>
          <h2 className={styles.h2}>Anal Fissure: The Tear That Won't Heal</h2>
          <p>An <strong>anal fissure</strong> is like a paper cut in the sensitive lining of your anus - small but incredibly painful. These tears affect people of all ages but are especially common in infants and middle-aged adults.</p>
          
          <h3 className={styles.h3}>Key Differences from Fistula</h3>
          <div className={styles.comparisonBox}>
            <div className={styles.comparisonCol}>
              <h4 className={styles.h4}>Anal Fissure</h4>
              <ul className={styles.li}>
                <li>Superficial tear in anal lining</li>
                <li>Sharp pain during bowel movements</li>
                <li>Bright red blood on toilet paper</li>
                <li>Often heals within weeks</li>
              </ul>
            </div>
            <div className={styles.comparisonCol}>
              <h4 className={styles.h4}>Anal Fistula</h4>
              <ul className={styles.li}>
                <li>Tunnel connecting to skin</li>
                <li>Constant dull/throbbing pain</li>
                <li>Pus/discharge between bowel movements</li>
                <li>Requires treatment to heal</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.h3}>Common Causes</h3>
          <ul className={styles.li}>
            <li><strong>Hard/large stools:</strong> The #1 cause</li>
            <li><strong>Chronic diarrhea:</strong> Frequent irritation</li>
            <li><strong>Childbirth trauma:</strong> Especially with tearing</li>
            <li><strong>Anal intercourse:</strong> Without proper preparation</li>
          </ul>
        </div>

        <div id='hemorrhoids' className={styles.column}>
          <h2 className={styles.h2}>Hemorrhoids: More Than Just a Pain in the Rear</h2>
          <p><strong>Hemorrhoids</strong> (piles) are swollen veins in your rectum and anus - like varicose veins but in your bottom. Nearly 3 out of 4 adults will experience them at some point.</p>
          
          <h3 className={styles.h3}>The 4 Stages of Hemorrhoids</h3>
          <div className={styles.stageTimeline}>
            <div className={styles.stage}>
              <h4 className={styles.h4}>Grade 1</h4>
              <p><strong>Internal swelling</strong> with slight bleeding but no prolapse</p>
            </div>
            <div className={styles.stage}>
              <h4 className={styles.h4}>Grade 2</h4>
              <p><strong>Prolapse during bowel movements</strong> but retract spontaneously</p>
            </div>
            <div className={styles.stage}>
              <h4 className={styles.h4}>Grade 3</h4>
              <p><strong>Prolapse requiring manual pushing</strong> back in</p>
            </div>
            <div className={styles.stage}>
              <h4 className={styles.h4}>Grade 4</h4>
              <p><strong>Permanently prolapsed</strong> and cannot be reduced</p>
            </div>
          </div>

          <h3 className={styles.h3}>Main Causes</h3>
          <ul className={styles.li}>
            <li><strong>Straining during bowel movements</strong></li>
            <li><strong>Chronic constipation/diarrhea</strong></li>
            <li><strong>Pregnancy</strong> (increased pelvic pressure)</li>
            <li><strong>Heavy lifting</strong></li>
            <li><strong>Prolonged sitting</strong> (especially on toilet)</li>
          </ul>
        </div>

        <div id='anal-fistula-treatment' className={styles.column}>
          <h2 className={styles.h2}>Homeopathic Healing Without Surgery</h2>
          
          <h3 className={styles.h3}>Why Choose Homeopathy?</h3>
          <ul className={styles.li}>
            <li><strong>Non-invasive approach</strong> to avoid surgical risks</li>
            <li><strong>Addresses root causes</strong> not just symptoms</li>
            <li><strong>Prevents recurrence</strong> by strengthening tissues</li>
            <li><strong>No painful dressings</strong> or wound care needed</li>
          </ul>

          <h3 className={styles.h3}>Our Treatment Protocol</h3>
          <div className={styles.col3}>
            <div>
              <h4 className={styles.h4}>For Anal Fistula</h4>
              <ul className={styles.li}>
                <li><strong>Silicea:</strong> Promotes pus drainage and healing</li>
                <li><strong>Myristica:</strong> "Homeopathic knife" for abscesses</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Fissures</h4>
              <ul className={styles.li}>
                <li><strong>Nitric Acid:</strong> Sharp, splinter-like pains</li>
                <li><strong>Ratanhia:</strong> Burning pain after stools</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Hemorrhoids</h4>
              <ul className={styles.li}>
                <li><strong>Aesculus:</strong> Dry, burning piles with backache</li>
                <li><strong>Hamamelis:</strong> Bleeding piles with soreness</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.h3}>Supportive Care</h3>
          <ul className={styles.li}>
            <li><strong>Sitz baths:</strong> Warm water soaks for pain relief</li>
            <li><strong>Fiber-rich diet:</strong> Prevents constipation strain</li>
            <li><strong>Proper hygiene:</strong> Gentle cleansing after bowel movements</li>
            <li><strong>Hydration:</strong> 8-10 glasses of water daily</li>
          </ul>

          <div className={styles.successRateBox}>
            <p>🌿 <strong>82% of our patients</strong> with early-stage fistulas avoid surgery with proper homeopathic treatment and lifestyle changes</p>
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
            <h3 className={styles.h3}>Tired of Anal Pain Controlling Your Life?</h3>
            <p>Our clinic specializes in:</p>
            <ul className={styles.li}>
              <li><strong>Non-surgical fistula treatment</strong></li>
              <li><strong>Pain relief without side effects</strong></li>
              <li><strong>Personalized healing plans</strong></li>
              <li><strong>18+ years</strong> of anorectal care experience</li>
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
        <Link href="/fatty-liver-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
        </Link>
        <Link href="/ovarian-cyst-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowRightCircleFill/></a>
        </Link>
      </div>
      <DoctorsFooter/>  
     <ClientProviders/> 
    </div>
  );
};

export default AnalFistula;
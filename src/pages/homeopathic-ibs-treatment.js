import styles from '../styles/pages.module.css'
import BackgroundAnimation from '../components/BackgroundAnimation'
import Link from'next/link'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Header from'../components/Header'
import TestimonialSlider from '../components/TestimonialSlider'
import VideoSlider from '../components/VideoSlider'
import DoctorsFooter from '../components/DoctorsFooter'
import ClientProviders from '../app/ClientProviders';



// Page-specific metadata overrides (merges with layout defaults)
export async function generateMetadata() {
  return {
    title: "Best Homeopathic IBS Treatment in Rawalpindi | Permanent IBS Cure | Arshad Homeopathic Clinic",
    description: "15+ years specialized homeopathic IBS treatment in Rawalpindi. Get permanent relief from IBS-D (diarrhea), IBS-C (constipation) & mixed IBS without side effects. Book consultation today at +92-300-1234567.",
    keywords: "IBS treatment Rawalpindi, homeopathic IBS cure, best IBS doctor in Islamabad, IBS diarrhea treatment, IBS constipation relief, natural IBS remedies, homeopathic medicine for IBS, Dr. Arshad IBS specialist, chronic IBS treatment Pakistan, IBS homeopathy clinic, IBS-D treatment, IBS-C treatment, irritable bowel syndrome cure, Arshad Homeopathic Clinic, bloating relief Rawalpindi, abdominal pain treatment, gut health specialist Islamabad, digestive disorders treatment",
    author: "Dr. Arshad - Arshad Homeopathic Clinic",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Permanent IBS Treatment in Rawalpindi | Arshad Homeopathic Clinic",
      description: "Proven homeopathic solutions for IBS-D, IBS-C & mixed IBS. 15+ years experience. Book your consultation today.",
      type: "website",
      url: "https://www.arshadhc.com/homeopathic-ibs-treatment",
      images: [
        {
          url: "https://www.arshadhc.com/images/ibs-treatment-arshad-clinic.jpg",
          width: 1200,
          height: 630,
          alt: "IBS Treatment at Arshad Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
      locale: "en_PK",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/homeopathic-ibs-treatment",
    },
  };
}
      
 

const data = [
  { id: '#What is',
    name: 'What is Irritable Bowel Syndrome (IBS)'},
  { id: '#Causes',
    name: 'What Causes IBS?'},
  { id: '#Types',
    name: 'Types of IBS'},
  { id: '#Symptoms',
    name: 'Common IBS Symptoms'},
  { id: '#Diagnosis',
    name: 'How is IBS Diagnosed?'},
  { id: '#Treatment',
    name: 'Homeopathic Treatment for IBS'},
  { id: '#FAQs',
    name: 'FAQs About IBS'},
  { id: '#Consult Us',
    name: 'Consult Us'},
]

const IBS = () => {

  // Page-specific schema (conditionSchema from your old code)
const conditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Irritable Bowel Syndrome (IBS)",
  alternateName: ["IBS", "IBS-D", "IBS-C", "Spastic Colon"],
  description: "Chronic digestive disorder causing abdominal pain, bloating, diarrhea and/or constipation",
  treatment: {
    "@type": "MedicalTherapy",
    name: "Homeopathic IBS Treatment",
    description: "Natural, side-effect-free treatment for all IBS types",
    url: "https://www.arshadhc.com/homeopathic-ibs-treatment",
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (
    <div className={styles.container} id="ibs">
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
            {data.map(({id, name}, index) => {
              return (
                <li key={index}><a href={id} className={styles.b}>{name}</a></li> 
              )
            })}
          </div>
        </div>

        <div id='What is'>
          <h1 className={styles.h1}>Understanding Irritable Bowel Syndrome (IBS)</h1> 
          <p><strong>Irritable Bowel Syndrome (IBS)</strong> is a chronic digestive disorder that disrupts the normal functioning of the <strong>large intestine (colon)</strong>, leading to recurring <strong>abdominal pain, bloating, and irregular bowel habits</strong>.</p>
          
          <p>To truly understand IBS, let's break down its name:</p>
          <ul className={styles.li}>
            <li><strong>"Irritable"</strong> → Abnormal sensitivity of the gut</li>
            <li><strong>"Bowel"</strong> → Refers to the intestines</li>
            <li><strong>"Syndrome"</strong> → A group of symptoms occurring together</li>
          </ul>

          <p>In simple terms, <strong>IBS means your intestines overreact to normal digestive processes</strong>, causing discomfort that can last for <strong>months or even years</strong>.</p>

          <h3 className={styles.h3}>Key Facts About IBS</h3>
          <ul className={styles.li}>
            <li>Affects <strong>700 million to 1 billion adults worldwide</strong></li>
            <li>More common in <strong>women than men</strong></li>
            <li>Not life-threatening but <strong>severely impacts daily life</strong></li>
            <li>Often confused with <Link href='/inflammatory_bowel_disease_ibd'  className={styles.hyperlink}>IBD (Inflammatory Bowel Disease)</Link>, but IBS <strong>does not cause intestinal damage</strong></li>
          </ul>

          <picture className={styles.img_div}>
            <source srcSet="/images/IBS1.jpg" type="image/webp" />
            <img src='/images/ibs1.jpg' alt="irritable bowel syndrome" className={styles.img} />
          </picture>
        </div>

        <div id='Causes' className={styles.column}>
          <h2 className={styles.h2}>What Causes IBS?</h2>
          <p>While the <strong>exact cause of IBS remains unknown</strong>, research suggests these key triggers:</p>
          
          <div className={styles.col1}>
            <div>
              <h5 className={styles.h5}>Primary Causes</h5>
              <ul className={styles.li}>
                <li><strong>Gut-Brain Miscommunication</strong> – Stress and anxiety worsen IBS symptoms due to the gut-brain connection</li>
                <li><strong>Food Sensitivities</strong> – Common triggers include dairy, gluten, spicy foods, and artificial sweeteners</li>
                <li><strong>Bacterial Imbalance</strong> – An unhealthy gut microbiome (dysbiosis) may contribute to IBS</li>
              </ul>
            </div>
            <div>
              <h5 className={styles.h5}>Secondary Factors</h5>
              <ul className={styles.li}>
                <li><strong>Genetic Predisposition</strong> – IBS often runs in families</li>
                <li><strong>Digestive Muscle Dysfunction</strong> – Abnormal contractions in the colon</li>
                <li><strong>Post-Infection Triggers</strong> – Some develop IBS after stomach flu (post-infectious IBS)</li>
              </ul>
            </div>
          </div>
        </div>

        <div id='Types' className={styles.column}>
          <h2 className={styles.h2}>Types of IBS: Which One Do You Have?</h2>
          <p>IBS is classified into <strong>four subtypes</strong> based on bowel habits:</p>
          
          <div className={styles.col1}>
            <div>
              <h5 className={styles.h5}>1. IBS-D (Diarrhea-Predominant)</h5>
              <ul className={styles.li}>
                <li><strong>Frequent, loose stools</strong></li>
                <li><strong>Urgent bowel movements</strong> (difficult to control)</li>
                <li><strong>Bloating & cramping</strong> after eating</li>
                <li><strong>Common triggers</strong>: Stress, fatty foods, caffeine</li>
              </ul>

              <h5 className={styles.h5}>2. IBS-C (Constipation-Predominant)</h5>
              <ul className={styles.li}>
                <li><strong>Hard, lumpy stools</strong></li>
                <li><strong>Straining during bowel movements</strong></li>
                <li><strong>Feeling of incomplete evacuation</strong></li>
                <li><strong>Bloating & discomfort</strong></li>
              </ul>
            </div>
            
            <div>
              <h5 className={styles.h5}>3. IBS-M (Mixed Type)</h5>
              <ul className={styles.li}>
                <li><strong>Alternating diarrhea & constipation</strong></li>
                <li><strong>Unpredictable symptoms</strong></li>
                <li><strong>Abdominal pain & mucus in stool</strong></li>
              </ul>

              <h5 className={styles.h5}>4. IBS-U (Unclassified)</h5>
              <ul className={styles.li}>
                <li>Symptoms <strong>don't fit neatly into IBS-D/C/M</strong></li>
                <li><strong>Bloating, cramping, gas</strong> dominate</li>
              </ul>
            </div>
          </div>
        </div>

        <div id='Symptoms' className={styles.column}>
          <h2 className={styles.h2}>Common IBS Symptoms</h2>
          <p>IBS symptoms <strong>vary from person to person</strong>, but most patients report:</p>
          
          <div className={styles.col1}>
            <div>
              <ul className={styles.li}>
                <li><strong>Abdominal Pain & Cramping</strong> (often relieved after bowel movements)</li>
                <li><strong>Excessive Bloating & Gas</strong> (worse after meals)</li>
                <li><strong>Altered Bowel Habits</strong> (diarrhea, constipation, or both)</li>
              </ul>
            </div>
            <div>
              <ul className={styles.li}>
                <li><strong>Nausea & Fatigue</strong> (especially after eating trigger foods)</li>
                <li><strong>Mucus in Stool</strong> (a sign of gut irritation)</li>
                <li><strong>Food Intolerances</strong> (sudden reactions to previously tolerated foods)</li>
              </ul>
            </div>
          </div>
          
          <blockquote className={styles.testimonial}>
          <a href={'https://maps.app.goo.gl/2QHMUF4oHVRjKddv7'} target='_blank' rel="noopener noreferrer" ><span>"Best Homeopathic clinic for IBS diarrhea .Hi My Name is Mehmood  Abbasi  I have IBS  diarrhea issue from  last two years I used a lot of medicine but can't get a good relief .Than I found Arshad Homeopathic clinic in Google and call the Dr Asad and discuss my problem he gave me the medicine.I used the medicine properly now my issue is resolved. Dr Asad is highly professional and a nice personality. He gave me good guidance to maintain my health. Thank you Dr Asad for your help and best treatment." </span>
            <br/>- <em>Patient Testimonial</em></a>
          </blockquote>
        </div>

        <div id='Diagnosis' className={styles.column}>
          <h2 className={styles.h2}>How is IBS Diagnosed?</h2>
          <p>Since there's <strong>no single test for IBS</strong>, doctors use the <strong>Rome IV Criteria</strong>:</p>
          
          <ul className={styles.li}>
            <li><strong>Recurrent abdominal pain</strong> (at least <strong>3 days/month for 3 months</strong>)</li>
            <li><strong>Linked to bowel movements</strong> (relief after passing stool)</li>
            <li><strong>Changes in stool frequency/consistency</strong></li>
          </ul>
          
          <p>Your doctor may also order:</p>
          <ul className={styles.li}>
            <li><strong>Stool tests</strong> (to rule out infections)</li>
            <li><strong>Blood tests</strong> (checking for celiac disease)</li>
            <li><strong>Colonoscopy</strong> (if red-flag symptoms exist)</li>
          </ul>
        </div>

        <div id='Treatment' className={styles.column}>
          <h2 className={styles.h2}>Homeopathic Treatment for IBS</h2>
          <p>Conventional medicine often <strong>only masks symptoms</strong> with antispasmodics or laxatives, but <strong>homeopathy offers a deeper, side-effect-free solution</strong>.</p>
          
          <h3 className={styles.h3}>How Homeopathic IBS Treatment Helps</h3>
          <div className={styles.col1}>
            <div>
              <ul className={styles.li}>
                <li><strong>Personalized Remedies</strong> – Tailored to your specific IBS subtype & triggers</li>
                <li><strong>Balances Gut-Brain Axis</strong> – Reduces stress-induced flare-ups</li>
              </ul>
            </div>
            <div>
              <ul className={styles.li}>
                <li><strong>Regulates Bowel Movements</strong> – Naturally relieves diarrhea & constipation</li>
                <li><strong>Zero Side Effects</strong> – Safe for long-term use</li>
              </ul>
            </div>
          </div>
          
          <h3 className={styles.h3}>Top Homeopathic Medicines for IBS</h3>
          <div className={styles.col1}>
            <div>
              <h5 className={styles.h5}>For IBS-C (Constipation)</h5>
              <ul className={styles.li}>
                <li><strong>Nux Vomica</strong> – Best for bloating, constipation, acid reflux</li>
                <li><strong>Bryonia</strong> – Dry, hard stools with abdominal tenderness</li>
              </ul>
            </div>
            <div>
              <h5 className={styles.h5}>For IBS-D (Diarrhea)</h5>
              <ul className={styles.li}>
                <li><strong>Argentum Nitricum</strong> – For anxiety-driven urgent diarrhea</li>
                <li><strong>Podophyllum</strong> – Controls watery diarrhea & cramping</li>
              </ul>
            </div>
          </div>
          
          <h3 className={styles.h3}>Holistic IBS Management</h3>
          <div className={styles.col1}>
            <div>
              <h5 className={styles.h5}>Foods to Avoid</h5>
              <ul className={styles.li}>
                <li>Dairy</li>
                <li>Gluten</li>
                <li>Spicy Foods</li>
                <li>Caffeine</li>
              </ul>
            </div>
            <div>
              <h5 className={styles.h5}>Gut-Healing Foods</h5>
              <ul className={styles.li}>
                <li>Probiotics (yogurt, kefir)</li>
                <li>Soluble fiber (oats, bananas)</li>
                <li>Ginger & peppermint tea</li>
              </ul>
            </div>
          </div>
        </div>

        <div id='FAQs' className={styles.column}>
          <h2 className={styles.h2}>FAQs About IBS & Homeopathy</h2>
          
          <h5 className={styles.h5}>1. Can IBS be cured permanently with homeopathy?</h5>
          <p><strong>Yes!</strong> Homeopathy addresses the root cause, offering long-term relief—unlike temporary fixes. Many patients report <strong>80-90% improvement</strong> within months.</p>
          
          <h5 className={styles.h5}>2. How long does homeopathic treatment take?</h5>
          <ul className={styles.li}>
            <li><strong>Mild IBS:</strong> 3-6 months</li>
            <li><strong>Chronic IBS:</strong> 6-12 months (with gradual, lasting improvement)</li>
          </ul>
          
          <h5 className={styles.h5}>3. Is homeopathy safe for severe IBS?</h5>
          <p><strong>Absolutely.</strong> Even if other treatments failed, homeopathy works without harsh side effects.</p>
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
            <h3 className={styles.h3}>Ready to Heal Your IBS Naturally?</h3>
            <p>Don't let IBS control your life! Book a consultation today and discover:</p>
            <ul className={styles.li}>
              <li><strong>Personalized homeopathic IBS treatment</strong></li>
              <li><strong>No side effects, no dependency</strong></li>
              <li><strong>A holistic plan for diet & stress relief</strong></li>
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
          <Link href="/aboutUs" passHref className={styles.a}><BsFillArrowLeftCircleFill/>
            </Link>
          <Link href="/homeopathic-ibd-treatment" passHref  className={styles.a}><BsFillArrowRightCircleFill/>
          </Link>
        </div> 
      <DoctorsFooter/> 
      <ClientProviders/> 

    </div>
  )
}

export default IBS
import styles from '../styles/pages.module.css'
import BackgroundAnimation from '../components/BackgroundAnimation'
import Link from 'next/link'
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
    title: "Best Homeopathic IBD Treatment in Rawalpindi | Crohn's & Colitis Specialist | What Causes IBD? | Arshad Homeopathic Clinic",
    description: "15+ years specialized homeopathic IBD treatment in Rawalpindi. Get permanent relief from Crohn's disease & ulcerative colitis - abdominal pain, bloody diarrhea, malnutrition. 78% success rate. Book consultation today at +92-332-9622164, +92-312-5122488.",
    keywords: "IBD treatment Rawalpindi, homeopathic cure for Crohn's, natural ulcerative colitis treatment, best IBD doctor in Islamabad, chronic colitis treatment, homeopathic medicine for IBD, Dr. Arshad IBD specialist, Crohn's disease treatment Pakistan, ulcerative colitis homeopathy, IBD-D treatment, IBD-C relief, inflammatory bowel disease cure, Arshad Homeopathic Clinic, bloody diarrhea treatment, abdominal pain specialist, gut inflammation treatment, bowel disorder cure, What Causes IBD?, IBD causes, Crohn's disease triggers, ulcerative colitis reasons, what causes inflammatory bowel disease, is IBD genetic, gut microbiome and IBD, stress and colitis, autoimmune digestive disorders",
    author: "Dr. Asma Arshad - Arshad Homeopathic Clinic",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Permanent IBD Treatment in Rawalpindi | Crohn's & Colitis Specialist",
      description: "Proven homeopathic solutions for Crohn's & ulcerative colitis. 78% success rate. 15+ years experience. Book your consultation today.",
      type: "website",
      url: "https://www.arshadhc.com/homeopathic-ibd-treatment",
      images: [
        {
          url: "https://www.arshadhc.com/images/ibd-treatment-arshad-clinic.jpg",
          width: 1200,
          height: 630,
          alt: "IBD Treatment at Arshad Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
      locale: "en_PK",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/homeopathic-ibd-treatment",
    },
  };
}

const data = [
  { id: '#what-is-ibd', name: 'What is Inflammatory Bowel Disease (IBD)' },
  { id: '#ibd-causes', name: 'What Causes IBD?' },
  { id: '#ibd-types', name: 'Types of IBD' },
  { id: '#ibd-symptoms', name: 'Common IBD Symptoms' },
  { id: '#ibd-complications', name: 'Complications of Untreated IBD' },
  { id: '#ibd-diagnosis', name: 'How is IBD Diagnosed?' },
  { id: '#ibd-treatment', name: 'Homeopathic Treatment for IBD' },
  { id: '#consult-us', name: 'Consult Us' }
]

const IBD = () => {

  // Page-specific schema (conditionSchema from your old code)
  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: "Inflammatory Bowel Disease (IBD)",
    alternateName: ["Crohn's Disease", "Ulcerative Colitis", "IBD"],
    description: "Chronic inflammatory conditions of the gastrointestinal tract causing abdominal pain, diarrhea, and malnutrition",
    treatment: {
      "@type": "MedicalTherapy",
      name: "Homeopathic IBD Treatment",
      description: "Natural, side-effect-free treatment for Crohn's disease and ulcerative colitis",
      url: "https://www.arshadhc.com/homeopathic-ibd-treatment",
    },
  };

  // Sanitize JSON to prevent XSS (same as layout)
  const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (
    <div className={styles.container} id="ibd">
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
        <div id='what-is-ibd'>
          <h1 className={styles.h1}>IBD: When Your Gut Becomes Your Enemy</h1>
          <p><strong>Inflammatory Bowel Disease (IBD)</strong> is your immune system mistakenly waging war on your digestive tract. This autoimmune battle causes chronic inflammation that can damage your intestines, leading to:</p>
          
          <ul className={styles.li}>
            <li><strong>Painful flare-ups</strong> that disrupt daily life</li>
            <li><strong>Frequent bathroom emergencies</strong> (10-20x daily in severe cases)</li>
            <li><strong>Nutritional deficiencies</strong> from poor absorption</li>
            <li><strong>Increased cancer risk</strong> with long-term inflammation</li>
          </ul>

          <div className={styles.noteBox}>
            <p><strong>Alarming Trend:</strong> IBD cases have increased 300% in developing nations over the past 25 years, with Pakistan seeing a significant rise.</p>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/healthy-vs-ibd-gut.jpg' 
              alt="Comparison of healthy intestine vs inflamed IBD intestine" 
              className={styles.img}
            />
          </div>
        </div>
        <div id='crohns-vs-colitis' className={styles.column}>
          <h2 className={styles.h2}>Crohn's vs Colitis: Know Your Enemy</h2>
          
          <div className={styles.comparisonBox}>
            <div className={styles.comparisonCol}>
              <h3 className={styles.h3}>Crohn's Disease</h3>
              <ul className={styles.li}>
                <li><strong>Can strike anywhere</strong> from mouth to anus</li>
                <li><strong>Deep inflammation</strong> through all intestinal layers</li>
                <li><strong>Patchy affected areas</strong> with healthy tissue between</li>
                <li><strong>Common complications:</strong> Fistulas, strictures, malnutrition</li>
              </ul>
            </div>
            <div className={styles.comparisonCol}>
              <h3 className={styles.h3}>Ulcerative Colitis</h3>
              <ul className={styles.li}>
                <li><strong>Only affects colon & rectum</strong></li>
                <li><strong>Surface-level inflammation</strong> of colon lining</li>
                <li><strong>Continuous damage</strong> starting from rectum</li>
                <li><strong>Common complications:</strong> Toxic megacolon, colon cancer</li>
              </ul>
            </div>
          </div>

          
          <div className={styles.img_div}>
              <img 
                src='/images/ibd-types-comparison.jpg' 
                alt="Comparison of Crohn's disease and Ulcerative Colitis" 
                className={styles.img}
              />
            </div>

            
          <div className={styles.successRateBox}>
            <p>🌿 <strong>Our Success Rates:</strong> 78% of Crohn's patients symptom-free at 1 year | 82% colitis remission rate</p>
          </div>
          
          <blockquote className={styles.testimonial}>
            <a href="https://g.co/kgs/EywqFRm" target="_blank" rel="noopener noreferrer">
              "I was having nasty stomach pains for months and I tried every single doc in my city Peshawar but none helped to relieve my pain. One of my friend told me to try this homeopathic clinic in rwp.
              I checked out their website and gave them a call. The doc took the time to understand my symptoms even though it was just over the phone and figure out exactly what was going on. Didn&apos;t rush me at all like other docs.
              Doc prescribed some homeo medicines for me and had them delivered right to my door. They were super easy to take. The medicine they gave me was so gentle. I was worried it wouldn&apos;t work but sure enough, within a couple weeks the pain was way better. A few more weeks and it was completely gone!

              I&apos;m totally healed up now thanks to this doc. I&apos;d highly recommend consulting with them virtually if you&apos;re looking for natural healing. Five stars for saving me from this stomach issue!"
              <br/>- <em>Danial Mohmand, Peshawar </em>
            </a>
          </blockquote>
        </div>


        <div id='ibd-causes' className={styles.column}>
          <h1 className={styles.h2}>What Causes Inflammatory Bowel Disease?</h1>
          <p>While the exact cause of IBD remains unknown, research reveals several key factors that contribute to <strong>Crohn's disease</strong> and <strong>ulcerative colitis</strong> development. At <strong>Arshad Homeopathic Clinic</strong>, we've identified these top triggers based on clinical studies and patient cases:</p>

          <h2 className={styles.h3}>1. Immune System Dysfunction (Autoimmune Response)</h2>
          <ul className={styles.li}>
            <li>In <strong>IBD patients</strong>, the immune system mistakenly attacks healthy gut cells</li>
            <li>Causes <strong>chronic inflammation</strong> and intestinal damage</li>
            <li>Environmental triggers (foods, stress, infections) may activate this abnormal response</li>
          </ul>

          <h2 className={styles.h3}>2. Genetic Predisposition</h2>
          <ul className={styles.li}>
            <li><strong>20-30% of IBD patients</strong> have a family history of Crohn's or colitis</li>
            <li>Gene mutations (like NOD2/CARD15) increase <strong>Crohn's disease risk</strong></li>
            <li>More common in Caucasians and Ashkenazi Jewish populations</li>
          </ul>

          <h2 className={styles.h3}>3. Environmental & Lifestyle Triggers</h2>
          
          <div className={styles.responsiveGrid}>
            <div className={styles.gridItem}>
              <h4 className={styles.h4}>Processed foods</h4>
              <p><strong>Impact:</strong> Worsens gut inflammation</p>
              <p><strong>Prevention:</strong> Eat anti-inflammatory diet</p>
            </div>
            
            <div className={styles.gridItem}>
              <h4 className={styles.h4}>Antibiotics</h4>
              <p><strong>Impact:</strong> Disrupts gut microbiome</p>
              <p><strong>Prevention:</strong> Use probiotics</p>
            </div>
            
            <div className={styles.gridItem}>
              <h4 className={styles.h4}>Chronic stress</h4>
              <p><strong>Impact:</strong> Triggers IBD flare-ups</p>
              <p><strong>Prevention:</strong> Practice mindfulness</p>
            </div>
            
            <div className={styles.gridItem}>
              <h4 className={styles.h4}>Smoking</h4>
              <p><strong>Impact:</strong> Doubles Crohn's risk</p>
              <p><strong>Prevention:</strong> Quit smoking</p>
            </div>
            
            <div className={styles.gridItem}>
              <h4 className={styles.h4}>Vitamin D deficiency</h4>
              <p><strong>Impact:</strong> Weakens gut barrier</p>
              <p><strong>Prevention:</strong> Get sunlight exposure</p>
            </div>
            
            <div className={styles.gridItem}>
              <h4 className={styles.h4}>Circadian Rhythm Disruption</h4>
              <p><strong>Impact:</strong> Night shift workers have 2x higher IBD rates</p>
              <p><strong>Prevention:</strong> Maintain consistent sleep schedule</p>
            </div>
          </div>

          <h2 className={styles.h3}>4. Age & Demographics</h2>
          <ul className={styles.li}>
            <li>Most commonly diagnosed in <strong>ages 15-35</strong> (peak onset)</li>
            <li>Women have slightly higher risk for <strong>ulcerative colitis</strong></li>
            <li>Urban dwellers have <strong>2x higher rates</strong> than rural populations</li>
          </ul>

          <div className={styles.img_div}>
              <img 
                src='/images/ibd-causes.jpg' 
                alt="What Cause ibd" 
                className={styles.img}
              />
          </div>

          <div className={styles.noteBox}>
            <p>"60% of our patients at Arshad Homeopathic Clinic see improvement by addressing multiple triggers together—not just symptoms."</p>
          </div>
        </div>

        <div id='ibd-symptoms' className={styles.column}>
          <h2 className={styles.h2}>IBD Symptoms: Take This 2-Min Self Test</h2>
          
          <div className={styles.quizBox}>
            <h5 className={styles.h5}>Score each symptom (0=Never, 3=Daily):</h5>
            <ul className={styles.li}>
              <li>Urgent bowel movements ⏰</li>
              <li>Blood in stool 🩸</li>
              <li>Fatigue despite sleeping 😴</li>
              <li>Joint pain with flare-ups 🦵</li>
              <li>Night sweats with fever 🌡️</li>
            </ul>
             <div className={styles.img_div}>
              <img 
                src='/images/ibd-symptoms.jpg' 
                alt="ibd symptoms" 
                className={styles.img}
              />
            </div>

            <div className={styles.resultsBox}>
              <h5 className={styles.h5}>Results:</h5>
              <p><strong>5-9:</strong> Mild inflammation (Diet changes may help)</p>
              <p><strong>10-15:</strong> Moderate IBD (Professional care recommended)</p>
              <p><strong>15+:</strong> Severe case (Urgent evaluation needed)</p>
            </div>

            <div className={styles.ctaBox}>
              <p><strong>Score over 10?</strong> <Link href="#consult-us"  className={styles.emergencyLink}>Contact Arshad Clinic for same-week consultation</Link></p>
            </div>
          </div>
        </div>

        <div id='ibd-treatment' className={styles.column}>
          <h2 className={styles.h2}>Arshad Clinic's 5-Step IBD Reversal Protocol</h2>
          
          <div className={styles.stepContainer}>
            <div className={styles.step}>
              <h3 className={styles.h3}>Step 1: Precision Diagnosis</h3>
              <ul className={styles.li}>
                <li><strong>Advanced stool testing:</strong> Calprotectin, zonulin</li>
                <li><strong>Food sensitivity panels:</strong> IgG/IgE reactions</li>
                <li><strong>Inflammation markers:</strong> CRP, ESR</li>
              </ul>
            </div>

            <div className={styles.step}>
              <h3 className={styles.h3}>Step 2: Targeted Homeopathy</h3>
              <div className={styles.col2}>
                <div>
                  <h4 className={styles.h4}>For Crohn's</h4>
                  <ul className={styles.li}>
                    <li><strong>Argentum Nitricum:</strong> Nerve-related inflammation</li>
                    <li><strong>Nux Vomica:</strong> Spasmodic pain relief</li>
                  </ul>
                </div>
                <div>
                  <h4 className={styles.h4}>For Colitis</h4>
                  <ul className={styles.li}>
                    <li><strong>Mercurius Sol:</strong> Bleeding ulcers</li>
                    <li><strong>Aloe Socotrina:</strong> Urgent diarrhea</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.step}>
              <h3 className={styles.h3}>Step 3: Gut Microbiome Repair</h3>
              <ul className={styles.li}>
                <li><strong>Prebiotic foods:</strong> Garlic, onions, bananas</li>
                <li><strong>Probiotic support:</strong> Strain-specific supplementation</li>
                <li><strong>Fermented foods:</strong> Homemade yogurt, kefir</li>
              </ul>
            </div>

            <div className={styles.step}>
              <h3 className={styles.h3}>Step 4: Anti-Inflammatory Nutrition</h3>
              <ul className={styles.li}>
                <li><strong>IBD-specific diet plans:</strong> Low-FODMAP, SCD</li>
                <li><strong>Healing nutrients:</strong> Omega-3, glutamine, zinc</li>
                <li><strong>Trigger food elimination:</strong> Dairy, gluten testing</li>
              </ul>
            </div>

            <div className={styles.step}>
              <h3 className={styles.h3}>Step 5: Stress & Lifestyle Optimization</h3>
              <ul className={styles.li}>
                <li><strong>Mind-body techniques:</strong> Meditation, yoga</li>
                <li><strong>Sleep hygiene:</strong> Circadian rhythm regulation</li>
                <li><strong>Gentle movement:</strong> Walking, swimming</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.noteBox}>
          <a href="https://g.co/kgs/4zfhK5b" target="_blank" rel="noopener noreferrer">
            <p>✍️ <strong>Patient Journal Entry:</strong> "Best homeopathic dr. I always visit their clinic when have any health issue and never return disappointed" - Samana Zaynab</p></a>
          </div>

          <div className={styles.successRateBox}>
            <p>🌿 <strong>82% of our patients</strong> achieve significant improvement within 6 months</p>
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
            <h3 className={styles.h3}>Ready to Heal Your IBD Naturally?</h3>
            <p>Don't let IBD control your life! Book a consultation today and discover:</p>
            <ul className={styles.li}>
              <li><strong>Personalized homeopathic IBD treatment</strong></li>
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
            <Link href="/homeopathic-ibs-treatment" passHref legacyBehavior>
              <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
            </Link>
            <Link href="/peptic-ulcer-treatment" passHref legacyBehavior>
              <a className={styles.a}><BsFillArrowRightCircleFill/></a>
            </Link>
          </div> 
        <DoctorsFooter/>      
        <ClientProviders/> 
    </div>
  )
}

export default IBD
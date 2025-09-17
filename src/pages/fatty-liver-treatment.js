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
    title: "Best Fatty Liver Treatment in Rawalpindi | NAFLD & Alcoholic Liver Disease Cure | Homeopathic Clinic",
    description: "Effective homeopathic treatment for fatty liver disease in Rawalpindi. Reverse liver damage naturally, reduce inflammation, and improve liver function. 15+ years experience treating NAFLD. Book consultation today.",
    keywords: "fatty liver treatment, NAFLD cure, alcoholic fatty liver, liver detox, liver function improvement, reverse fatty liver, best diet for fatty liver, liver inflammation, elevated liver enzymes, liver cleanse, natural liver treatment, homeopathic liver medicine, liver pain relief, liver cirrhosis prevention, best doctor for fatty liver, Rawalpindi liver clinic",
    author: "Dr. Arshad - Arshad Homeopathic Clinic",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Natural Fatty Liver Treatment in Rawalpindi | NAFLD Specialist",
      description: "Proven homeopathic solutions for fatty liver disease including NAFLD and alcoholic liver disease. 15+ years experience. Book your consultation today.",
      type: "website",
      url: "https://www.arshadhc.com/fatty-liver-treatment",
      images: [
        {
          url: "https://www.arshadhc.com/images/fatty-liver-treatment.jpg",
          width: 1200,
          height: 630,
          alt: "Fatty Liver Treatment Image",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/fatty-liver-treatment",
    },
  };
}





const data = [
  { id: '#what-is-fatty-liver', name: 'What is Fatty Liver' },
  { id: '#types-fatty-liver', name: 'Types' },
  { id: '#causes-fatty-liver', name: 'Causes' },
  { id: '#symptoms-fatty-liver', name: 'Symptoms' },
  { id: '#stages-fatty-liver', name: 'Disease Progression' },
  { id: '#fatty-liver-diet', name: 'Diet Plan' },
  { id: '#fatty-liver-treatment', name: 'Homeopathic Treatment' },
  { id: '#consult-us', name: 'Consult Us' }
];

const FattyLiver = () => {
// Page-specific schema (conditionSchema from your old code)
  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: "Fatty Liver Disease",
    alternateName: ["NAFLD", "Alcoholic Fatty Liver", "Liver Steatosis"],
    description: "Excess fat accumulation in liver cells causing inflammation and potential scarring",
    cause: "Obesity, insulin resistance, alcohol abuse, metabolic syndrome",
    possibleTreatment: {
      "@type": "MedicalTherapy",
      name: "Homeopathic Liver Treatment",
      description: "Natural treatment for fatty liver without side effects",
      url: "https://www.arshadhc.com/fatty-liver-treatment",
    },
  };

  // Sanitize JSON to prevent XSS (same as layout)
  const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');





  return (
    <div className={styles.container} id="fatty-liver">

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

        <div id='what-is-fatty-liver'>
          <h1 className={styles.h1}>Fatty Liver: Your Silent Liver Alarm</h1>
          <p>Your <strong>liver</strong> - the body's second largest organ and hardest-working detoxifier - can develop fatty deposits when overloaded. <strong>Fatty liver disease</strong> occurs when fat constitutes more than 5-10% of your liver's weight, impairing its 500+ vital functions including:</p>
          
          <ul className={styles.li}>
            <li><strong>Nutrient processing</strong> from food and drinks</li>
            <li><strong>Blood filtration</strong> of toxins and waste</li>
            <li><strong>Bile production</strong> for digestion</li>
            <li><strong>Medication metabolism</strong></li>
          </ul>

          <div className={styles.noteBox}>
            <p><strong>Shocking Fact:</strong> 1 in 4 adults worldwide has fatty liver disease, often without symptoms until significant damage occurs.</p>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/healthy-vs-fatty-liver.jpg' 
              alt="Comparison of healthy liver and fatty liver" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='types-fatty-liver' className={styles.column}>
          <h2 className={styles.h2}>Two Faces of Fatty Liver Disease</h2>
          
          <div className={styles.comparisonBox}>
            <div className={styles.comparisonCol}>
              <h3 className={styles.h3}>Non-Alcoholic (NAFLD)</h3>
              <ul className={styles.li}>
                <li><strong>Most common type</strong> (90% of cases)</li>
                <li><strong>Not related to alcohol</strong></li>
                <li>Linked to metabolic syndrome</li>
                <li>Affects 25% global population</li>
              </ul>
            </div>
            <div className={styles.comparisonCol}>
              <h3 className={styles.h3}>Alcoholic Fatty Liver</h3>
              <ul className={styles.li}>
                <li>Caused by <strong>excessive alcohol</strong></li>
                <li>Can develop within weeks</li>
                <li>First stage of alcohol-related liver disease</li>
                <li>Reversible with abstinence</li>
              </ul>
            </div>
          </div>

          <div className={styles.factBox}>
            <p>"NAFLD is becoming the leading cause of liver transplants, surpassing hepatitis. The good news? Early-stage fatty liver is completely reversible with proper care." - Dr. Asma Arshad, Liver Specialist</p>
          </div>
        </div>

        <div id='causes-fatty-liver' className={styles.column}>
          <h2 className={styles.h2}>Root Causes of Fat Accumulation</h2>
          
          <h3 className={styles.h3}>Primary Triggers</h3>
          <ul className={styles.li}>
            <li><strong>Insulin resistance:</strong> 70% of type 2 diabetics develop NAFLD</li>
            <li><strong>Obesity:</strong> Especially abdominal fat</li>
            <li><strong>High triglycerides:</strong> Elevated blood fats</li>
            <li><strong>Metabolic syndrome:</strong> Cluster of risk factors</li>
          </ul>

          <h3 className={styles.h3}>Other Contributing Factors</h3>
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>Lifestyle Factors</h4>
              <ul className={styles.li}>
                <li>Excessive alcohol consumption</li>
                <li>Sedentary behavior</li>
                <li>High-fructose diets</li>
                <li>Rapid weight loss (yo-yo dieting)</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Health Conditions</h4>
              <ul className={styles.li}>
                <li>PCOS (Polycystic Ovary Syndrome)</li>
                <li>Hypothyroidism</li>
                <li>Sleep apnea</li>
                <li>Genetic predisposition</li>
              </ul>
            </div>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/fatty-liver-causes.jpg' 
              alt="Common causes of fatty liver disease" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='symptoms-fatty-liver' className={styles.column}>
          <h2 className={styles.h2}>Silent Symptoms You Might Miss</h2>
          
          <p>Early-stage fatty liver often has <strong>no noticeable symptoms</strong>, but as it progresses, watch for:</p>
          
          <div className={styles.symptomGrid}>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Physical Signs</h4>
              <ul className={styles.li}>
                <li>Right upper abdominal discomfort</li>
                <li>Unexplained fatigue</li>
                <li>Jaundice (yellow skin/eyes)</li>
                <li>Itchy skin</li>
              </ul>
            </div>
            <div className={styles.symptomCard}>
              <h4 className={styles.h4}>Digestive Issues</h4>
              <ul className={styles.li}>
                <li>Loss of appetite</li>
                <li>Nausea</li>
                <li>Unexplained weight changes</li>
                <li>Abdominal swelling</li>
              </ul>
            </div>
          </div>

          <div className={styles.quizBox}>
            <h5 className={styles.h5}>Fatty Liver Risk Assessment</h5>
            <p style={{ color: "#654321", fontWeight: "bold" }}>Do you have:</p>
            <ul className={styles.li}>
              <li>Waist circumference &gt;35" (women) or &gt;40" (men)?</li>
              <li>Fasting blood sugar &gt;100 mg/dL?</li>
              <li>Elevated ALT/AST on blood tests?</li>
              <li>Family history of liver disease?</li>
            </ul>
            <div className={styles.resultsBox}>
              <h5 className={styles.h5}>Results:</h5>
              <p><strong>2+ factors?</strong> Consider liver function evaluation</p>
            </div>
          </div>
        </div>

        <div id='stages-fatty-liver' className={styles.column}>
          <h2 className={styles.h2}>The Dangerous Progression</h2>
          
          <div className={styles.stageTimeline}>
            <div className={styles.stage}>
              <h4 className={styles.h4}>Stage 1: Simple Steatosis</h4>
              <p>Fat accumulates but no inflammation or damage yet. <strong>Completely reversible</strong> with lifestyle changes.</p>
            </div>
            <div className={styles.stage}>
              <h4 className={styles.h4}>Stage 2: Steatohepatitis</h4>
              <p>Fat buildup plus inflammation. Liver enzymes (ALT/AST) become elevated. <strong>Still reversible</strong> with treatment.</p>
            </div>
            <div className={styles.stage}>
              <h4 className={styles.h4}>Stage 3: Fibrosis</h4>
              <p>Persistent inflammation causes scarring. Liver function declines. <strong>Partial reversal possible</strong> with aggressive treatment.</p>
            </div>
            <div className={styles.stage}>
              <h4 className={styles.h4}>Stage 4: Cirrhosis</h4>
              <p>Widespread scarring replaces healthy tissue. <strong>Irreversible damage</strong> that may require transplant.</p>
            </div>
          </div>

          <div className={styles.warningBox}>
            <p><strong>Critical Window:</strong> The first two stages (simple fatty liver and steatohepatitis) are completely reversible if caught early.</p>
          </div>
        </div>

        <div id='fatty-liver-diet' className={styles.column}>
          <h2 className={styles.h2}>Liver-Healing Nutrition Plan</h2>
          
          <h3 className={styles.h3}>Foods to Embrace</h3>
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>Liver Superfoods</h4>
              <ul className={styles.li}>
                <li><strong>Coffee:</strong> Lowers liver enzymes</li>
                <li><strong>Green tea:</strong> Rich in antioxidants</li>
                <li><strong>Fatty fish:</strong> Omega-3 reduces inflammation</li>
                <li><strong>Walnuts:</strong> High in glutathione</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>Other Beneficials</h4>
              <ul className={styles.li}>
                <li><strong>Olive oil:</strong> Healthy monounsaturated fats</li>
                <li><strong>Garlic:</strong> Activates liver enzymes</li>
                <li><strong>Leafy greens:</strong> Help detoxification</li>
                <li><strong>Turmeric:</strong> Powerful anti-inflammatory</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.h3}>Foods to Avoid</h3>
          <ul className={styles.li}>
            <li><strong>Added sugars:</strong> Especially high-fructose corn syrup</li>
            <li><strong>Refined carbs:</strong> White bread, pasta, rice</li>
            <li><strong>Fried foods:</strong> High in unhealthy fats</li>
            <li><strong>Alcohol:</strong> Major liver stressor</li>
            <li><strong>Processed meats:</strong> High in sodium and preservatives</li>
          </ul>

          <div className={styles.tipBox}>
            <p><strong>Pro Tip:</strong> A Mediterranean diet pattern - rich in vegetables, fish, and olive oil - shows the best results for reversing fatty liver.</p>
          </div>
        </div>

        <div id='fatty-liver-treatment' className={styles.column}>
          <h2 className={styles.h2}>Homeopathic Liver Revival</h2>
          
          <h3 className={styles.h3}>Why Homeopathy Works</h3>
          <ul className={styles.li}>
            <li><strong>Stimulates natural detox</strong> without harsh cleanses</li>
            <li><strong>Reduces inflammation</strong> at cellular level</li>
            <li><strong>Improves fat metabolism</strong></li>
            <li><strong>No side effects</strong> unlike conventional medications</li>
          </ul>

          <h3 className={styles.h3}>Our Treatment Approach</h3>
          <div className={styles.col2}>
            <div>
              <h4 className={styles.h4}>For NAFLD</h4>
              <ul className={styles.li}>
                <li><strong>Lycopodium:</strong> Bloating with right-sided pain</li>
                <li><strong>Nux Vomica:</strong> For metabolic syndrome cases</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Alcoholic Fatty Liver</h4>
              <ul className={styles.li}>
                <li><strong>Phosphorus:</strong> Liver tenderness with nausea</li>
                <li><strong>Carduus Marianus:</strong> Liver congestion</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.h3}>Lifestyle Support</h3>
          <ul className={styles.li}>
            <li><strong>Gradual weight loss:</strong> 5-10% reduction improves liver fat</li>
            <li><strong>Exercise protocol:</strong> 150 mins moderate activity weekly</li>
            <li><strong>Stress management:</strong> Cortisol worsens fat accumulation</li>
            <li><strong>Sleep optimization:</strong> Poor sleep disrupts metabolism</li>
          </ul>

          <div className={styles.successRateBox}>
            <p>🌿 <strong>85% of our patients</strong> show improved liver enzyme levels and reduced fatty infiltration within 3-6 months of treatment</p>
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
            <h3 className={styles.h3}>Ready to Revitalize Your Liver?</h3>
            <p>Our clinic specializes in:</p>
            <ul className={styles.li}>
              <li><strong>Personalized fatty liver treatment plans</strong></li>
              <li><strong>Natural detoxification support</strong></li>
              <li><strong>Metabolic syndrome reversal</strong></li>
              <li><strong>18+ years</strong> of liver health experience</li>
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
        <Link href="/thyroid-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
        </Link>
        <Link href="/anal-fistula-treatment" passHref legacyBehavior>
          <a className={styles.a}><BsFillArrowRightCircleFill/></a>
        </Link>
      </div>
      <DoctorsFooter/>
      <ClientProviders/> 
    </div>
  );
};

export default FattyLiver;
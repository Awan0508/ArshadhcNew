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
    title: "Best Peptic Ulcer Treatment in Rawalpindi | Gastric & Duodenal Ulcer Cure | H. pylori Specialist | Arshad Homeopathic Clinic",
    description: "15+ years specialized homeopathic treatment for peptic ulcers in Rawalpindi. Permanent relief from gastric ulcers, duodenal ulcers, and H. pylori infection without side effects. Stop ulcer pain, bleeding, and heartburn. Book consultation today at +92-332-9622164.",
    keywords: "peptic ulcer treatment, gastric ulcer cure, duodenal ulcer remedies, best ulcer doctor in Rawalpindi, H. pylori treatment, stomach ulcer pain relief, bleeding ulcer treatment, ulcer homeopathic medicine, natural ulcer healing, chronic ulcer treatment, Dr. Arshad ulcer specialist, ulcer diet plan, what causes stomach ulcers, ulcer symptoms, ulcer complications, perforated ulcer treatment, ulcer home remedies, ulcer medication, ulcer surgery alternative, how to heal ulcers fast",
    author: "Dr. Arshad - Arshad Homeopathic Clinic",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Permanent Peptic Ulcer Treatment in Rawalpindi | H. pylori Specialist",
      description: "Proven homeopathic solutions for gastric ulcers, duodenal ulcers and H. pylori infection. 15+ years experience. Book your consultation today.",
      type: "website",
      url: "https://www.arshadhc.com/peptic-ulcer-treatment",
      images: [
        {
          url: "https://www.arshadhc.com/images/ulcer-treatment-clinic.jpg",
          width: 1200,
          height: 630,
          alt: "Peptic Ulcer Treatment at Arshad Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
      locale: "en_PK",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/peptic-ulcer-treatment",
    },
  };
}


const data = [
  { id: '#what-is-peptic-ulcer', name: 'What is Peptic Ulcer' },
  { id: '#peptic-ulcer-causes', name: 'Peptic Ulcer Causes' },
  { id: '#peptic-ulcer-symptoms', name: 'Peptic Ulcer Symptoms' },
  { id: '#peptic-ulcer-complications', name: 'Peptic Ulcer Complications' },
  { id: '#peptic-ulcer-diet', name: 'Peptic Ulcer Diet' },
  { id: '#peptic-ulcer-treatment', name: 'Peptic Ulcer Treatment' },
  { id: '#consult-us', name: 'Consult Us' }
];

const PepticUlcer = () => {
    // Page-specific schema (conditionSchema from your old code)
const conditionSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  name: "Peptic Ulcer",
  alternateName: ["Gastric Ulcer", "Duodenal Ulcer", "Stomach Ulcer", "H. pylori Infection"],
  description: "Painful sores in the stomach lining or small intestine causing burning pain, nausea, and digestive discomfort",
  cause: "H. pylori infection, NSAID overuse, excess stomach acid",
  possibleTreatment: {
    "@type": "MedicalTherapy",
    name: "Homeopathic Ulcer Treatment",
    description: "Natural treatment for peptic ulcers without side effects",
    url: "https://www.arshadhc.com/peptic-ulcer-treatment",
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (
    <div className={styles.container} id="peptic-ulcer">
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

        <div id='what-is-peptic-ulcer'>
          <h1 className={styles.h1}>Understanding Peptic Ulcers</h1>
          <p>A <strong>peptic ulcer</strong> is an open sore that develops on the inside lining of the stomach and the upper portion of the small intestine. The digestive tract is coated with a mucous layer that normally protects against acid. But if the amount of acid is increased or the amount of mucus is decreased, then an ulcer can develop.</p>
          
          <h3 className={styles.h3}>Types of Peptic Ulcers</h3>
          <ul className={styles.li}>
            <li><strong>Gastric Ulcer (Stomach Ulcer):</strong> Painful sores located in the stomach lining that often cause discomfort when eating.</li>
            <li><strong>Duodenal Ulcer:</strong> Occurs at the end point of stomach and upper portion of the small intestine (duodenum), with pain that improves after eating but returns later.</li>
            <li><strong>Esophageal Ulcer:</strong> Develops in the mucus layer of esophagus, typically caused by chronic acid reflux (GERD).</li>
          </ul>

          <div className={styles.noteBox}>
            <p><strong>Key Facts:</strong> Approximately 10% of people worldwide experience peptic ulcers at some point. Contrary to popular belief, while stress and spicy foods can aggravate ulcers, they rarely cause them directly.</p>
          </div>

          <div className={styles.img_div}>
            <img 
              src='/images/peptic-ulcer-types.jpg' 
              alt="Types of peptic ulcers - gastric, duodenal and esophageal" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='peptic-ulcer-causes' className={styles.column}>
          <h2 className={styles.h2}>What Causes Peptic Ulcers?</h2>
          
          <h3 className={styles.h3}>Primary Causes</h3>
          <ul className={styles.li}>
            <li><strong>H. pylori Infection:</strong> This spiral-shaped bacterium (Helicobacter pylori) burrows into the stomach lining, weakening its mucus protection. It affects people of all ages and often shows no symptoms until severe.</li>
            <li><strong>NSAID Overuse:</strong> Frequent use of painkillers like Aspirin and Ibuprofen reduces protective mucus. Risk increases with long-term use, high doses, or combining with alcohol.</li>
            <li><strong>Zollinger-Ellison Syndrome:</strong> A rare condition causing excessive stomach acid production.</li>
          </ul>

          <h3 className={styles.h3}>Contributing Factors</h3>
          <ul className={styles.li}>
            <li><strong>Smoking:</strong> Delays ulcer healing by reducing blood flow to stomach lining</li>
            <li><strong>Alcohol:</strong> Irritates and erodes the stomach lining</li>
            <li><strong>Chronic Stress:</strong> May worsen symptoms and delay healing</li>
            <li><strong>Spicy Foods:</strong> Can aggravate existing ulcers</li>
          </ul>

          <div className={styles.img_div}>
            <img 
              src='/images/ulcer-causes.jpg' 
              alt="Causes of peptic ulcers including H. pylori and NSAIDs" 
              className={styles.img}
            />
          </div>
        </div>

        <div id='peptic-ulcer-symptoms' className={styles.column}>
          <h2 className={styles.h2}>Peptic Ulcer Symptoms</h2>
          
          <h3 className={styles.h3}>Common Symptoms</h3>
          <ul className={styles.li}>
            <li><strong>Burning stomach pain</strong> (worse when stomach is empty)</li>
            <li><strong>Discomfort between meals or at night</strong> (duodenal ulcer)</li>
            <li><strong>Pain when eating or drinking</strong> (gastric ulcer)</li>
            <li><strong>Nausea or vomiting</strong></li>
            <li><strong>Unexpected weight loss</strong></li>
            <li><strong>Heartburn and acid reflux</strong></li>
            <li><strong>Dark or tarry stools</strong> (indicating bleeding)</li>
            <li><strong>Fatty food intolerance</strong></li>
          </ul>
          
          <h3 className={styles.h3}>Emergency Symptoms (Require Immediate Care)</h3>
          <ul className={styles.li}>
            <li><strong>Vomiting blood</strong> (resembling coffee grounds)</li>
            <li><strong>Sudden, severe abdominal pain</strong> (may signal perforation)</li>
            <li><strong>Dizziness or fainting</strong> (signs of severe blood loss)</li>
          </ul>

          <div className={styles.quizBox}>
            <h5 className={styles.h5}>Ulcer Risk Self-Assessment</h5>
            <p style={{ color: "#654321" , fontWeight: "bold" }}>Score each symptom (0=Never, 3=Daily):</p>
            <ul className={styles.li}>
              <li>Burning stomach pain</li>
              <li>Nighttime abdominal discomfort</li>
              <li>Nausea after meals</li>
              <li>Dark or bloody stools</li>
            </ul>
            <div className={styles.resultsBox}>
              <h5 className={styles.h5}>Results:</h5>
              <p><strong>5+ points?</strong> Consult a specialist for evaluation</p>
            </div>
          </div>
        </div>

        <div id='peptic-ulcer-complications' className={styles.column}>
          <h2 className={styles.h2}>Serious Complications of Untreated Ulcers</h2>
          
          <h3 className={styles.h3}>Internal Bleeding</h3>
          <p>Slow bleeding can lead to <strong>anemia</strong> (fatigue, weakness), while severe bleeding may cause <strong>black or bloody vomit/stool</strong>.</p>
          
          <h3 className={styles.h3}>Perforated Ulcer (Medical Emergency)</h3>
          <p>A hole develops in the stomach or intestinal wall, allowing digestive juices to leak into the abdominal cavity. This causes:</p>
          <ul className={styles.li}>
            <li><strong>Peritonitis</strong> (serious abdominal infection)</li>
            <li><strong>Sepsis</strong> (bloodstream infection)</li>
            <li><strong>Potential death</strong> if untreated</li>
          </ul>
          
          <h3 className={styles.h3}>Gastric Outlet Obstruction</h3>
          <p>Scar tissue can block food passage, causing:</p>
          <ul className={styles.li}>
            <li>Persistent vomiting</li>
            <li>Severe weight loss</li>
            <li>Nutritional deficiencies</li>
          </ul>
          
          <h3 className={styles.h3}>Increased Cancer Risk</h3>
          <p>Chronic <strong>H. pylori infection</strong> raises the risk of <strong>gastric cancer</strong> by 2-6 times.</p>

          <div className={styles.warningBox}>
            <p><strong>⚠️ Warning:</strong> If you experience sudden, severe abdominal pain, fever, or vomiting blood, seek emergency care immediately as these may indicate a perforated ulcer.</p>
          </div>
        </div>

        <div id='peptic-ulcer-diet' className={styles.column}>
          <h2 className={styles.h2}>Peptic Ulcer Diet Plan</h2>
          
          <h3 className={styles.h3}>Foods to Eat</h3>
          <ul className={styles.li}>
            <li><strong>High-fiber foods:</strong> Oatmeal, apples, pears, carrots</li>
            <li><strong>Probiotic-rich foods:</strong> Yogurt, kefir, kimchi (help fight H. pylori)</li>
            <li><strong>Lean proteins:</strong> Fish, chicken, tofu</li>
            <li><strong>Healthy fats:</strong> Avocados, olive oil, nuts</li>
            <li><strong>Vegetables:</strong> Cooked greens, squash, sweet potatoes</li>
          </ul>
          
          <h3 className={styles.h3}>Foods to Avoid</h3>
          <ul className={styles.li}>
            <li><strong>Spicy foods:</strong> Chili peppers, hot sauces</li>
            <li><strong>Acidic foods:</strong> Citrus fruits, tomatoes</li>
            <li><strong>Caffeine:</strong> Coffee, black tea, chocolate</li>
            <li><strong>Alcohol:</strong> Especially hard liquor</li>
            <li><strong>Fried/fatty foods:</strong> Heavy meats, fast food</li>
          </ul>
          
          <h3 className={styles.h3}>Eating Habits</h3>
          <ul className={styles.li}>
            <li>Eat <strong>smaller, frequent meals</strong> (5-6 per day)</li>
            <li>Chew food <strong>thoroughly</strong></li>
            <li>Avoid eating <strong>2-3 hours before bedtime</strong></li>
            <li>Stay <strong>upright</strong> after meals</li>
          </ul>

          <div className={styles.tipBox}>
            <p><strong>Tip:</strong> Try drinking cabbage juice (rich in vitamin U) or aloe vera juice to help soothe and heal ulcers naturally.</p>
          </div>
        </div>

        <div id='peptic-ulcer-treatment' className={styles.column}>
          <h2 className={styles.h2}>Homeopathic Treatment for Peptic Ulcer</h2>
          <div className={styles.col1}>
            <div>
              <h4 className={styles.h4}>For Burning Pain</h4>
              <ul className={styles.li}>
                <li><strong>Argentum Nitricum:</strong> Eases burning pain and nausea</li>
                <li><strong>Nux Vomica:</strong> For stress/spicy food-induced ulcers</li>
              </ul>
            </div>
            <div>
              <h4 className={styles.h4}>For Digestive Support</h4>
              <ul className={styles.li}>
                <li><strong>Carbo Veg:</strong> Reduces bloating and indigestion</li>
                <li><strong>Lycopodium:</strong> Helps with gas and fullness</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.h3}>Lifestyle Changes</h3>
          <ul className={styles.li}>
            <li><strong>Quit smoking</strong> to promote healing</li>
            <li><strong>Limit alcohol</strong> consumption</li>
            <li><strong>Manage stress</strong> through meditation/yoga</li>
            <li><strong>Avoid NSAIDs</strong> unless absolutely necessary</li>
          </ul>

          <div className={styles.successRateBox}>
            <p>🌿 <strong>85% of our patients</strong> report significant improvement within 4-8 weeks of homeopathic treatment</p>
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
            <h3 className={styles.h3}>Ready to Heal Your Ulcer Naturally?</h3>
            <p>Our clinic specializes in:</p>
            <ul className={styles.li}>
              <li><strong>Personalized ulcer treatment plans</strong></li>
              <li><strong>H. pylori eradication programs</strong></li>
              <li><strong>Diet and lifestyle guidance</strong></li>
              <li><strong>Prevention of ulcer recurrence</strong></li>
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
            <Link href="/homeopathic-ibd-treatment" passHref legacyBehavior>
              <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
            </Link>
            <Link href="/pcos-treatment" passHref legacyBehavior>
              <a className={styles.a}><BsFillArrowRightCircleFill/></a>
            </Link>
          </div>
        <DoctorsFooter/>
        <ClientProviders/> 
    </div>
  );
};

export default PepticUlcer;
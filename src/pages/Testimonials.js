
import styles from '../styles/testimonials.module.css';
import React from "react";
import Header from'../components/Header';
import VideoSlider from '../components/VideoSlider';
import BookAppointment from '../components/BookAppointment';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Link from'next/link';
import DoctorsFooter from '../components/DoctorsFooter'
import BackgroundAnimation from '../components/BackgroundAnimation';
import ClientProviders from '../app/ClientProviders';



// Page-specific metadata overrides (merges with layout defaults)
export async function generateMetadata() {
  return {
    title: "Patient Success Stories | Best Homeopathic Clinic in Rawalpindi & Islamabad",
    description: "Real patient reviews cured from IBS, IBD, Fistula, Fissure, PCOS, Ovary Cyst, Kidney Stones, Fibroids, Anal Fistula, Arthritis, and Autism at Arshad Homeopathic Clinic - The best homeopathic treatment center in Pakistan.",
    keywords: "best homeopathic clinic in Rawalpindi, top homeopathic doctor in Islamabad, best homeopathic treatment in Pakistan, IBS treatment success stories, IBD cure homeopathy, fistula healing without surgery, fissure treatment testimonials, PCOS success stories homeopathy, ovary cyst natural treatment, kidney stones dissolved homeopathy, fibroids treatment reviews, anal fistula cured naturally, arthritis pain relief homeopathy, autism improvement homeopathic treatment, best homeopath for IBS in Pakistan, top homeo doctor for fistula in Rawalpindi, successful PCOS treatment Islamabad, kidney stone removal without surgery, homeopathic medicine for fibroids, anal fissure healed naturally, rheumatoid arthritis homeopathic cure, autism spectrum treatment results, best homeopathic clinic for chronic diseases, Dr. Asma Arshad patient reviews, Dr. Asad Awan success cases, certified homeopathic practitioners Pakistan",
    alternates: {
      canonical: "https://www.arshadhc.com/testimonials",
    },
    openGraph: {
      title: "Proven Homeopathic Success Stories | Best in Rawalpindi & Islamabad",
      description: "Patient reviews cured from IBS, PCOS, Fistula, Arthritis & more at Pakistan's leading homeopathic clinic - See real recovery stories",
      type: "website",
      url: "https://www.arshadhc.com/testimonials",
      images: [
        {
          url: "https://www.arshadhc.com/images/testimonials-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Testimonials at Arshad Homeopathic Clinic",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Proven Homeopathic Success Stories | Best in Rawalpindi & Islamabad",
      description: "Patient reviews cured from IBS, PCOS, Fistula, Arthritis & more at Pakistan's leading homeopathic clinic",
      image: "https://www.arshadhc.com/images/testimonials-og-image.jpg",
    },
  };
}






const data = [

  {
    id: 39,
    title: 'Muhammad Ali',
    problem: 'Anal Fistula',
    quote: 'I reached out to Dr. Asad after visiting his website, having suffered from an anal fistula for the past 10–12 years. I had previously tried homeopathy several times without success and was seriously considering surgery. However, I decided to give homeopathy one last try and contacted Dr. Asad. After just one month of his treatment, the discharge and pus had reduced by almost 60%. By the second month, it had completely stopped. With his suggested diet changes and medication, I believe I am now on the road to recovery. I\'m sincerely grateful to Dr. Asad—may God bless him.',
    star: '★★★★★',
    link: 'https://maps.app.goo.gl/1MVGEgjdA6RpVDyz5',
  },

  
  {
    id: 38,
    title: 'M Danial Mohmand',
    problem: 'Stomach Illness',
    quote: 'I was having nasty stomach pains for months and I tried every single doc in my city Peshawar but none helped to relieve my pain. One of my friend told me to try this homeopathic clinic in rwp.I checked out their website and gave them a call. The doc took the time to understand my symptoms even though it was just over the phone and figure out exactly what was going on. Didn\'t rush me at all like other docs.Doc prescribed some homeo medicines for me and had them delivered right to my door. They were super easy to take. The medicine tbey gave me was so gentle. I was worried it wouldn\'t work but sure enough, within a couple weeks the pain was way better. A few more weeks and it was completely gone! I\'m totally healed up now thanks to this doc. I\'d highly recommend consulting with them virtually if you\'re looking for natural healing. Five stars for saving me from this stomach issue!',
    star: '★★★★★',
    link: 'https://g.co/kgs/EywqFRm',
  },

  {
    id: 37,
    title: 'Saima Suleman',
    problem: 'Autism',
    quote: 'If you are looking for a homeopathic clinic that can help improve your child\'s autism condition, we highly recommend \'Arshad Homeopathic Clinic\' to which we took our 4-year-old son Musa. After taking treatment from this clinic, Alhamdulillah we saw significant improvement in his ability to socialize. Musa started interacting with kids around him, which was previously challenging for him. We are pleased with the results and think the clinic\'s approach towards treatment is excellent. The staff is friendly and knowledgeable, and they take a holistic approach to the treatment, which includes natural remedies. We trust this clinic, and we would highly recommend it to others who are seeking a non-invasive treatment option for autism.',
    star: '★★★★★',
    link: 'https://g.co/kgs/PGfT8gg',
  },

    {
    id: 36,
    title: 'Shakil Ahmed',
    problem: 'Backache',
    quote: 'ASLAMUALIAKUM I M SHAKIL AHMED FROM AZAD KASHMIR DOSTOO MAIN LAST 2 YEAR SE KAMER KI TAKLEEF MAIN THA BOHAT DOCTORS SE MEDICINE LI BUT KAHIN SE B KOI KHAS FARQ NAI PARA PHIR MERAY AIK DOST NE MUJAY ARSHAD HOMEOPATHIC CLINIC KA BATAYA TO MAIN NE CALL PE UN SE APNA MASLA BIYAAN KIYA JAHAN MERI BAAT DOCTOR ASAD SHAB SE HOI UNHOON NE MUJAY TASALI DI OR APNAY CLINIC PE BULAYA OR JAHAN DOCTOR ASAD SHAB NE MERA POORA CASE DISCUSS KIYA OR MUJAY MEDICINE DI JO MAIN NE BAQAUDGI SE USE KI AB ALHUMDOLILLHA MUJAY TWO MONTH HO GAYE HAIN MAIN BOHAT SAKOON MAIN HUN DOCTOR ASAD SHAB BOHAT NAFEES INSAAN HAIN MAIN TEH DIL SE DOCTOR ASAD SHAB KA MASHKOOR HUN THANK YOU DOCTOR ASAD SHAB',
    star: '★★★★★',
    link: 'https://maps.app.goo.gl/qJ2wGadq5CvnrwAi9'
  },
  
  {
    id: 35,
    title: 'Madi Rehman',
    problem: 'PCOS',
    quote: 'Dr Asma is very kind and corporate. she listen and quick response. I have PCOS last 2 years and facing many problems with other medicine but when i get Homeopathic medicine,  I have lose weight and even convinced with 2 months use of medicine. I am very satisfied and recommend for PCOS problems.',
    star: '★★★★★',
    link: 'https://g.co/kgs/2TYRyzV'
  },
  
 {
  id: 34,
  title: 'Sabahat Tariq',
  problem: 'Anal Fistula',
  quote: 'best homeopathic clinic for fastula. i am very satisfied with the service.i visited many doctors but at the last i get results for this clinic.doctor Asma is very nice and humble.',
  star: '★★★★★',
  link: 'https://maps.app.goo.gl/tzCnwDU6ynd78KS26',
  },

  {
    id: 33,
    title: 'Yasir Mahmood',
    problem: 'Anal Fistula',
    quote: 'Best Homeopathic clinic for Anal Fistula .Hi My Name is Yasir Mehmood I have Fistula issue last eight years I used a lot of medicine but cant relief properly.Than I found Arshad Homeopathic clinic in Google and call the Dr Asad and asked my problem he gave me the medicine.I used the medicine properly now my Fistula issue is resolved thank you Dr Asad for your best treatment for my Fistula issue',
    star: '★★★★★',
    link: 'https://maps.app.goo.gl/fbzRUk6SFXvENefF8',
  },
 
  {
    id: 32,
    title: 'Malik Awan',
    problem: 'Stroke',
    quote: 'My mother had a stroke, after which she underwent a lot of treatment at the allopathic hospitals, but she did not recover. Then I contact Arshad Homeopathic & Dr. Sahiba started homeopathic treatment of my mother. From the last 7 months homeopathic treatment is under process, by which, Alhamdulillah, the whole body of the mother became fully active and now she is much better. hope fully She will get 100% fit soon. Highly Recommended Arshad Homeopathic Clinic.May Allah reward you well and grant you the best treatment to continue. Ameen',
    star: '★★★★★',
    link: 'https://g.co/kgs/Bc6jAPq',
  },

   {
    id: 31,
    title: 'Naveed Rehman',
    problem: 'IBS Constipation',
    quote: 'I had constipation when I get the medicine from her I feel relax, She is very kind and good speak lady',
    star: '★★★★★',
    link: 'https://maps.app.goo.gl/wnW3WcBJDjYQhojy9',
  },
  
  {
    id: 30,
    title: 'Fahad Saad',
    problem: 'General',
    quote: 'Best Homeopathic clinic.Highly recommended Dr Asma is very cooperative and kind i was having health issues from almost 2,3 years took many medicines but nothing worked but their medicine is really effective.Highly Recommended.',
    star: '★★★★★',
    link: 'https://g.co/kgs/f7B6oUx',
  },

   {
    id: 29,
    title: 'Abeera Touqeer',
    problem: 'Fistula',
    quote: 'Best Homeopathic clinic for Fistula Treatment. Dr Asma is very humble and down to earth person .My husband has Fistula problem and he took alot of allopathic & homeopathic medicines but didnot get healed.After taking treatment from her he is getting better day by day.Alhmdulilah.. 💯% recommended 😊😊',
    star: '★★★★★',
    link: 'https://maps.app.goo.gl/9NqJkNhob5LrvbF68',
  },
 
  {
    id: 28,
    title: 'Rabia Batool',
    problem: 'PCOS',
    quote: 'I was suffering from Polycystic ovary syndrome (PCOS), and consulted many doctors in Rawalpindi and Islamabad, but no luck then friend of mine suggested about Dr.Asma at Arshid Homeopathic Clinic, She perfectly diagnosed and treated my problem and now I am absolutely healthy, also all other health issues casued by PCOS like Low HB, inflammation, joints pain etc. All are gone now Alhamdulillah. Thanks to Dr Asma.',
    star: '★★★★★',
    link: 'https://g.co/kgs/Cn5c95U',
  },

  {
    id: 27,
    title: 'Ahmed Shakil',
    problem: 'Skin Infection',
    quote: 'Assalam alaikum i am Abrish.Mujhe 2 years se skin infection tha. Mein is baare mein bohot pareshan thi.Mene bohot ache doctors ko check karwaya. Lekin mien thik nahi hui. Phir mujhe kisi ne(Arshad Homeopathic Clinic)ke barre mein bataya. Phir mein Dr.Asma se appointment li. Mein ne un se apna masla discuss kia. Unhon ne mujhe medicines dien .Alhamdulillah ab mujhe medicines use karte hue 1 and half month ho gaya hai or mein bohot better feel kar rahi hoon ⭐👍 fully recommended 💯 (From Rawalpindi)😇😊',
    star: '★★★★★',
    link: 'https://maps.app.goo.gl/29LRRr8Xgk5JfZM38',
  },
  
  
  {
    id: 26,
    title: 'Ahtazaz Qureshi',
    problem: 'Anal Fistula',
    quote: 'Best Homeopathic clinic for Fistula Treatment. Dr Asma is very kind and cooperative person I ever found in Homeopathic field. I got Fistula issue since 2008 and took alot of allopathic, homeopathic meds. But didn\'t get healing. After taking treatment from her I got recovery Alhmdulilah.. 💯% recommended 😊😊',
    star: '★★★★★',
    link: 'https://g.co/kgs/Jc34awd'
  },

  {
    id: 25,
    title: 'Luqman Ahmad',
    problem: 'Fistula',
    quote: 'Asslamo Allaikum I am using MDCN for fistula and for allergies, my doctor has told me about the operation of this fistula. But I am thankful to Allah for the treatment of fistula and I am using MDCN for allergies. better hon.',
    star: '★★★★★',
    link: 'https://maps.app.goo.gl/XGwDf11z63vgLkei8',
  },
  
  {
    id: 24,
    title: 'Naveed Anjum',
    problem: 'PCOS',
    quote: 'Female Doctor “Dr. Asma” is very experienced and professional, Recommend everyone to experience her professionalism.',
    star: '★★★★★',
    link: 'https://g.co/kgs/E8Rwn4u',
  },

   {
    id: 23,
    title: 'Mehmood Abbasi',
    problem: 'IBS Diarrhea',
    quote: 'Best Homeopathic clinic for IBS diarrhea .Hi My Name is Mehmood  Abbasi  I have IBS  diarrhea issue from  last two years I used a lot of medicine but cant get a good relief .Than I found Arshad Homeopathic clinic in Google and call the Dr Asad and discuss my problem he gave me the medicine.I used the medicine properly now my issue is resolved. Dr Asad is highly professional and a nice personality. He gave me good guidance to maintain my health.Thank you Dr Asad for your help and best treatment.',
    star: '★★★★★',
    link: 'https://maps.app.goo.gl/2QHMUF4oHVRjKddv7',
  },
  
  {
    id: 22,
    title: 'Shumaila Saeed',
    problem: 'Pemphigus Vulgaris',
    quote: 'Dr Asma Arshad is a very kind and experienced doctor. I have pemphigus vulgaris and now I\'m taking homeopathic treatment from her from 3 months, it\'s very effective and I feel that I\'m fine.',
    star: '★★★★★',
    link: 'https://g.co/kgs/XdvnbTk'
  },

  {
    id: 21,
    title: 'Anusha Imtiaz Satti',
    problem: 'Pimples and Acne',
    quote: 'Highly recommended. Best medicine with no side effects. My go-to for all my medical problems.',
    star: '★★★★★',
    link: 'https://g.co/kgs/vMm4y7d',
  },

  {
    id: 20,
    title: 'Muhammad Jibran Sohail',
    problem: 'Fissure',
    quote: 'Their service is overall Excellent.I am totally satisfied with the way they attend their patients. Doctor Asma diagnosed my problem accurately. I was prescribed a 6 months course and found it totally effective. I got relieved in the very first week infact. I will confidently refer my contacts to their clinic.',
    star: '★★★★★',
    link: 'https://maps.app.goo.gl/5QP7qLrNPCAv282P6',
  },
  
  {
    id: 19,
    title: 'Ehsan Ul Huq',
    problem: 'Arthritis',
    quote: 'Dr asma is a very kind and professional. She deals patients very professionally and kind heartedly.',
    star: '★★★★★',
    link: 'https://g.co/kgs/VQyVmYS'
  },
  {
    id: 18,
    title: 'Bashir Khan',
    problem: 'General',
    quote: 'A very super duper clinic for all kind of patients and a brilliant dr available as well I m satisfied the way of ur treatment and i think the people of rwp are very lucky to have a dr like u i pray for u Allah give u success in future',
    star: '★★★★★',
    link: 'https://g.co/kgs/J1Wys8K',
  },
  {
    id: 17,
    title: 'Samana Zaynab',
    problem: 'General',
    quote: 'Best homeopathic dr. I always visit their clinic when have any health issue and never return disappointed.',
    star: '★★★★★',
    link: 'https://g.co/kgs/4zfhK5b',
  },
  {
    id: 16,
    title: 'Saima Hussain',
    problem: 'Anxiety and Depression',
    quote: 'I was suffering from anxiety and depression,had great experience over there. Satisfied.',
    star: '★★★★★',
    link: 'https://g.co/kgs/JNomDar',
  },
  
  {
    id: 15,
    title: 'Zaheer Ahmed',
    problem: 'General',
    quote: 'Best experience original product cooperative staff team and Dr are professional highly trained team 5 star rating',
    star: '★★★★★',
    link: 'https://maps.app.goo.gl/eRZ5CmtWjdKVD9neA'
  },

   {
    id: 14,
    title: 'Saeeda Pervaiz                      ',
    problem: 'Cervical Problem',
    quote: 'AHC is a life saver for us.Dr asma save my mothers life when we have no hope from anywhere.my mother was suffering in cervical problem from 6 months and now my mother is Masha Allah can easily move anywhere.and absolutely fit and fine.Allah blessed them who save our mothers life.',
    star: '★★★★★',
    link: 'https://g.co/kgs/PJ1hDae'
  },
  
  {
    id: 13,
    title: 'Arshid Awan',
    problem: 'Kidney Problems',
    quote: 'AHC is playing a vital role in highlighting major health issues their causes and remedies.Such an effective campaign would really cotribute in general public health awareness.KEEP IT UP…',
    star: '★★★★★',
    link: 'https://g.co/kgs/Vf6VuNz',
  },
  {
    id: 12,
    title: 'M Tayyab Hussain',
    problem: 'General',
    quote: 'Homoeopathic Dr. Asma is very experienced and professional, Recommend everyone to experience her professionalism.',
    star: '★★★★★',
    link: 'https://g.co/kgs/gZ1JrPx',
  },
  {
    id: 11,
    title: 'Tauseef Khan',
    problem: 'General',
    quote: 'Nice, friendly and Professional Doc. Gives proper time and care to the patients.',
    star: '★★★★★',
    link: 'https://g.co/kgs/Fn79fk8',
  },
  
  {
    id: 10,
    title: 'Qasim Khan',
    problem: 'General',
    quote: 'Very good doctor really satisficed',
    star: '★★★★★',
    link: 'https://g.co/kgs/TqsALup',
  },
  {
    id: 9,
    title: 'Musaab Khan',
    problem: 'Tonsillitis',
    quote: 'We are satisfied with homeopathic medicine. Homeopathic remedies are  useful for all diseases. Arshad homeopathic clinic is one of the best clinic in Rawalpindi.',
    star: '★★★★★',
    link: 'https://g.co/kgs/FkuRgVV',
  },
  {
    id: 8,
    title: 'Arshid Malik',
    problem: 'Knee Pain',
    quote: 'Best homeopathic clinic no doubt.....went for my knee pain 2 years ago, took 2 courses of 6 months of medicine and Alhumdulillah my suffering are gone.... highly recommended 👍',
    star: '★★★★★',
    link: 'https://g.co/kgs/bmzaEzk',
  },
  {
    id: 7,
    title: 'Wania Khan',
    problem: 'Skin Problems',
    quote: 'Dr. Asma is a very professional doctor. I am completely satisfied with her medicine.',
    star: '★★★★★',
    link: 'https://g.co/kgs/gxEp5uX',
  },
 
  {
    id: 6,
    title: 'Mateen Tareen',
    problem: 'General',
    quote: 'Professional approach and proper diagnose.',
    star: '★★★★★',
    link: 'https://g.co/kgs/9sLJdiV',
  },
  {
    id: 5,
    title: 'Nazia Siyab',
    problem: 'General',
    quote: 'very good service.',
    star: '★★★★★',
    link: 'https://g.co/kgs/LNaeGYn',
  },
  {
    id: 4,
    title: 'Muhammad Salman',
    problem: 'General',
    quote: '💚 💚 💚',
    star: '★★★★★',
    link: 'https://g.co/kgs/xwrdtFF',
  },
  {
    id: 3,
    title: 'Muskan Saima',
    problem: 'General',
    quote: 'A good doctor.',
    star: '★★★★★',
    link: 'https://g.co/kgs/7G1ubdt',
  },
  {
    id: 2,
    title: 'Zain ul Abbdin',
    problem: 'General',
    quote: 'Satisfied.',
    star: '★★★★★',
    link: 'https://g.co/kgs/Ni2UgQr',
  },
  {
    id: 1,
    title: 'Asmara Khan',
    problem: 'General',
    quote: 'Satisfied.',
    star: '★★★★★',
    link: 'https://g.co/kgs/M5xBdF3',
  },
  
  ]
  ;












const Testimonials = () => {

  // Page-specific schemas (webPageSchema and reviewSchema from your old code)
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Patient Testimonials - Arshad Homeopathic Clinic",
  description: "Success stories of patients treated for IBS, IBD, Fistula, PCOS and chronic diseases at Pakistan's leading homeopathic clinic",
  url: "https://www.arshadhc.com/testimonials",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.arshadhc.com/images/testimonials-banner.jpg",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    xPath: [
      "/html/head/title",
      "/html/head/meta[@name='description']/@content",
    ],
  },
  keywords: [
    "best homeopathic clinic Rawalpindi",
    "top homeopath Islamabad",
    "IBS treatment Pakistan",
    "fistula cure without operation",
    "PCOS success stories",
    "kidney stones homeopathic medicine",
    "arthritis pain relief",
    "autism treatment results",
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Review",
          itemReviewed: {
            "@type": "MedicalClinic",
            name: "Arshad Homeopathic Clinic",
            medicalSpecialty: ["Homeopathy", "IBS Treatment", "Fistula Cure"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Rawalpindi",
              addressRegion: "Punjab",
              addressCountry: "PK",
            },
          },
          author: {
            "@type": "Person",
            name: "M Danial Mohmand",
          },
          reviewBody: "I was having nasty stomach pains for months... completely gone now thanks to this doc.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          keywords: "IBS treatment, stomach pain cure",
          datePublished: "2023-05-15",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Review",
          itemReviewed: {
            "@type": "MedicalClinic",
            name: "Arshad Homeopathic Clinic",
            medicalSpecialty: ["Homeopathy", "Autism Treatment"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Rawalpindi",
              addressRegion: "Punjab",
              addressCountry: "PK",
            },
          },
          author: {
            "@type": "Person",
            name: "Saima Suleman",
          },
          reviewBody: "Significant improvement in his ability to socialize... highly recommend it for autism treatment.",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          keywords: "autism treatment, child autism improvement",
          datePublished: "2023-04-20",
        },
      },
    ],
  },
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

  return (

    <div >
      <BackgroundAnimation />
        <Header />

        {/* Inject page-specific JSON-LD schemas here (after common elements from layout) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeJson(webPageSchema) }}
          key="webpage-schema"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizeJson(reviewSchema) }}
          key="review-schema"
        />

        <div id='testimonials' className={styles.main}><br/>
        <div className={styles.col1}>
          <h3 className={styles.h03}>Verified Patient Reviews</h3>
          <h2 className={styles.h02}>Life-Changing Results at Arshad Homeopathic Clinic</h2>
        </div>
        
        <div className={styles.columns}>
          {data.map(({title, quote, problem, star, link,}, index )  => {
            
            return (
              <div className={styles.review}>
                <article key={index} className={styles.col}>
                  <div className={styles.successRateBox}>
                    <p>🤢 ――― 😊 ――― 🤗</p><br/>
                    <p  className={styles.problem}><strong>{problem}</strong> </p>
                    <p className={styles.stars}>{star}</p>
                  </div>
                  <div className={styles.noteBox}>
                    <Link href={link} className={styles.comment} target="_blank" rel="noopener noreferrer">
                      <p><strong>{title}</strong> <br/>
                      ✍️ <br/>
                      {quote}</p></Link>
                  </div>
                </article> <br/>
              </div> 
            )
          })
          }
        </div>
        <VideoSlider/>        
      < BookAppointment/>
      </div><br/><br/>
      
        <div className={styles.Arrows}>
          <Link href="/rheumatoid-arthritis-treatment" passHref legacyBehavior>
            <a className={styles.a}><BsFillArrowLeftCircleFill/></a>
            </Link>
          <Link href="/VideoContent" passHref legacyBehavior>
              <a className={styles.a}><BsFillArrowRightCircleFill/></a>
          </Link>
        </div> 
      <DoctorsFooter/>
      <ClientProviders/> 
    </div>

  )
}

export default Testimonials

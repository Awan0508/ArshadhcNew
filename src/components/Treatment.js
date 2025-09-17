
import styles from '../styles/treatment.module.css'
import Link from 'next/link'

const data = [

{
  id: 1,
  image: '/images/ibs.jpg',
  title: 'IBS',
  description: 'Irritable bowel syndrome is a common condition that affects the digestive system. It causes symptoms like stomach cramps, bloating, diarrhoea and constipation.',
  youtube: 'https://www.youtube.com/watch?v=VguvMntPhgU',
  about: '/homeopathic-ibs-treatment',
},
{
  id: 2,
  image: '/images/ibd.jpg',
  title: 'IBD',
  description: 'Inflammatory bowel disease (IBD) is a term for condition of chronic inflammation of the gastrointestinal (GI) tract caused by Crohn\'s disease and Ulcerative Colitis.',
  youtube: 'https://www.youtube.com/watch?v=xUlmFZSxsLw',
  about: '/homeopathic-ibd-treatment',
},
{
  id: 3,
  image: '/images/Fistula.jpg',
  title: 'Anal Fistula',
  description: 'Most fistulas are the consequence of an anal abscess. Trauma,tuberculosis, cancer, sexually transmitted infections may cause a tiny amount of fistulas too.',
  youtube: 'https://www.youtube.com/watch?v=hGVUI6-RnoU',
  about: '/anal-fistula-treatment',
},
{
  id: 4,
  image: '/images/ovary-cyst.jpg',
  title: 'PCOS',
  description: 'Polycystic ovaries contain a large number of harmless follicles. These sacs are often unable to release an egg, which means ovulation does not take place.',
  youtube: 'https://www.youtube.com/watch?v=foPbMCG8HQE',
  about: '/Polycystic_ovary_syndrome_PCOS',
},
{sid: 5,
image: '/images/OC4.jpg',
title: 'Ovarian Cyst',
description: 'Ovarian Cyst is common in women who are pregnant or who haven’t gone through menopause (ceasing of menstruation) yet.',
youtube: 'https://www.youtube.com/watch?v=ZLsQ_p0HscU',
about: '/ovarian-cyst-treatment',
},
{
  id: 6,
  image: '/images/thyroids.jpg',
  title: 'Thyroids',
  description: 'Thyroid gland’s disorder can be resulted of hyper/hypo-thyroidism. Ratio of Thyroid disorder is quite higher in women than in men.',
  youtube: 'https://www.youtube.com/channel/UCDl4Dk38VGZoSS3htAk-_KQ',
  about: '/thyroid-treatment',
},
{
  id: 7,
  image: '/images/liver.jpeg',
  title: 'Fatty Liver',
  description: 'Fatty Liver occurs when the body produces too much fat or doesn’t metabolize it efficiently and the excess fat is stored in liver cells.',
  youtube: 'https://www.youtube.com/watch?v=QS8cwzuTxxE',
  about: '/fatty-liver-treatment',
},
{
  id: 8,
  image: '/images/Ulcer.jpg',
  title: 'Ulcer',
  description: 'Untreated Peptic Ulcer may result internal bleeding that leads to anaemia. While severe bleeding may cause bloody vomit or stool.',
  youtube: 'https://www.youtube.com/watch?v=woEtfMW9EOE',
  about: '/peptic-ulcer-treatment',
},
{
  id: 9,
  image: '/images/KidneyStone.jpg',
  title: 'Kidney Stone',
  description: 'Immune system attacks the body connective tissue.That leads to joint inflammation, pain, degeneration of the joint tissue.',
  youtube: 'https://www.youtube.com/watch?v=01tKoQGZzXM',
  about: '/kidney-stone-treatment',
},
{
  id: 10,
  image: '/images/sciatica.jpg',
  title: 'Sciatica',
  description: 'Sciatica is a term used to describe pain that radiates down each leg along the path of the sciatic nerve. Sciatica only impacts one side of the body.',
  youtube: 'https://www.youtube.com/watch?v=bFOWZa0Lg1s',
  about: '/sciatica-treatment',
},
{
  id: 11,
  image: '/images/arthritis.jpg',
  title: 'R. Arthritis',
  description: 'Immune system attacks the body connective tissue.That leads to joint inflammation, pain, degeneration of the joint tissue.',
  youtube: 'https://www.youtube.com/watch?v=T2ea0fYPlO0',
  about: '/rheumatoid-arthritis-treatment',
},
]
;







const Treatment = () => {
  return (
    <section className={styles.section}>
      <div id='treatment' className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.subtitle}>Since 2006</h3>
          <h2 className={styles.title}>We Treat</h2>
        </div>
        
        <div className={styles.columns}>
          {data.map(({image, title, description, youtube, about}, index )  => {
            
            return (
              
              <article key={index} className={styles.col}>
                <picture className={styles.col_img}>
                  <source srcSet={image} type="image/webp" />
                  <img src={image} alt="treatment" className={styles.img} />
                </picture>
                <div className={styles.text}>
                  <h3 className={styles.h3}>{title}</h3>
                  <p className={styles.des}>{description}</p> 
                </div>
                <div className={styles.cta}>
                  <a href= {youtube} className='btn btn--youtube' target='_blank' rel="noopener noreferrer">Video</a>
                  <Link href= {about} className='btn btn--primary'>About</Link>
                </div>    
              </article>
              
            )
          })
          }
        </div>
      </div>
    </section>
  )
}

export default Treatment

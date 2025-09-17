import React from 'react'
import styles from '../styles/videos.module.css'



const data = [
  
  
  {id: 1,
   title: 'Reviews' ,
   videoId : 'hGVUI6-RnoU',
  },

  {id: 2,
    title: 'Kidney Stones' ,
    videoId : '01tKoQGZzXM',
   },

  {id: 3,
    title: 'Breast Tumor' ,
    videoId : 'FJbfov8Hu40',
  },

  {id: 4,
    title: 'PCOS' ,
    videoId : 'ylrZ01vUxwI',
  },

  {id: 5,
    title: 'Ovary Cyst' ,
    videoId : 'ZLsQ_p0HscU',
  },

  {id: 6,
    title: 'Gastric Ulcer' ,
    videoId : 'WC3rmaBQOus',
  },

  {id: 7,
    title: 'Spinal Stenosis' ,
    videoId : 'cn5lqx7fiS4',
  },

  {id: 8,
    title: 'Sciatica' ,
    videoId : 'bFOWZa0Lg1s',
  },

  {id: 8,
    title: 'IBS' ,
    videoId : 'GImzXsoLB-g',
  },

]






const Videos = () => {
  return (
    <section>
      <div id='vdo' className={styles.container}>
        <div className={styles.columns}>
          {data.map(({title,videoId}, index )  => {
            return (
            <div className={styles.col}>
              <h3 className={styles.h3}>{title}</h3>
              <iframe width="400" height="300" src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&disablekb=0&fs=0&loop=0&modestbranding=0&playsinline=1&rel=0&showinfo=0`} frameborder="0" allowfullscreen></iframe>
            </div>
            )
          })
          }
          </div>
        </div>
    </section>
   
  )
}

export default Videos
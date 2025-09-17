import TestimonialSlider from './TestimonialSlider'
import VideoSlider from './VideoSlider'
import styles from '../styles/sliders.module.css';


const Sliders = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <TestimonialSlider />
                <VideoSlider/>
            </div>
        </section>
        
      
      
      
    )
  }
  
  export default Sliders
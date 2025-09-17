
import styles from '../styles/aboutUs.module.css';

const BookAppointment = () => {
  return (

    <section>
        <div>
        <main className={styles.main}>
            <div className={styles.cta}>
              <h2 className={styles.ctaTitle}>Ready for Natural Healing?</h2>
              <p className={styles.ctaText}>Book your consultation today and begin your journey to lasting wellness.</p>
              <div className={styles.ctaButtons}>
                  <span className={styles.primaryButton}><strong className={styles.nameBg}>Dr. Asma</strong> <br/>
                  <a href="tel: +923329622164" id="phone-dr-asma" className={styles.call}>Call : +92-332-9622164</a><br/>
                  <a  href="https://wa.me/923329622164" id="whatsApp-dr-asma" target= "_blank" rel="noopener noreferrer" className={styles.whatsapp}> WhatsApp : +92-332-9622164 </a>
                  </span>
                  <span className={styles.primaryButton}><strong className={styles.nameBg}>Dr. Asad</strong> <br/>
                  <a href="tel: +923125122488" id="phone-dr-asad" className={styles.call}>Call: +92-312-5122488</a><br/>
                  <a  href="https://wa.me/923125122488" id="whatsApp-dr-asad" target= "_blank" rel="noopener noreferrer" className={styles.whatsapp}> WhatsApp : +92-312-5122488 </a>
                  </span>
              </div>
              <div className={styles.clinicInfo}>
                  <p><strong>Address:</strong> Building: B-II 306, Street # 9, Opposite Meezan Bank, Adjacent to Faisal Schools (Boys Campus), Haji Chowk, Muslim Town, Rawalpindi</p>
                  <p><strong>Contact Timings:</strong> 9:00 A.M - 9:00 P.M</p>
              </div>
            </div>
        </main>
        </div>
    </section>
  );
};

export default BookAppointment;
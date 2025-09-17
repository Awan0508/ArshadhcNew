import styles from '../styles/contactUs.module.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { RiWhatsappFill, RiMapPinLine, RiMailLine, RiTimeLine, RiPhoneFill } from 'react-icons/ri';
import { SlUserFollow } from "react-icons/sl";
import {FaFacebookSquare} from 'react-icons/fa'
import {ImYoutube} from 'react-icons/im'
import {GrInstagram} from 'react-icons/gr'
import { FaTiktok } from "react-icons/fa";
import Header from'../components/Header'
import DoctorsFooter from '../components/DoctorsFooter'
import BackgroundAnimation from '../components/BackgroundAnimation'
import Link from'next/link'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import ClientProviders from '../app/ClientProviders';




// Page-specific metadata overrides (merges with layout defaults)
export async function generateMetadata() {
  return {
    title: "Contact Arshad Homeopathic Clinic | Best Homeopathic Doctors in Rawalpindi",
    description: "Contact Dr. Asma Arshad (0332-9622164) and Dr. Asad Awan (0312-5122488) for homeopathic treatment of PCOS, arthritis, kidney stones and chronic diseases. Clinic address in Muslim Town, Rawalpindi.",
    keywords: "best homeopathic clinic in Rawalpindi, best homeopathic clinic in Islamabad, best homeopathic clinic in Pakistan, free consultation, homeopathic clinic contact, Rawalpindi homeopath, book appointment, arthritis treatment, PCOS specialist, kidney stone treatment, Dr. Asma Arshad, Dr. Asad Awan, homeopathy consultation",
    openGraph: {
      type: "website",
      url: "https://www.arshadhc.com/contactUs",
      title: "Contact Arshad Homeopathic Clinic | Rawalpindi",
      description: "Get homeopathic treatment for chronic diseases from specialists Dr. Asma Arshad and Dr. Asad Awan in Rawalpindi.",
      images: [
        {
          url: "https://www.arshadhc.com/images/contact-og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Contact Arshad Homeopathic Clinic",
        },
      ],
      siteName: "Arshad Homeopathic Clinic",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Arshad Homeopathic Clinic | Rawalpindi",
      description: "Get homeopathic treatment for chronic diseases from specialists Dr. Asma Arshad and Dr. Asad Awan in Rawalpindi.",
      image: "https://www.arshadhc.com/images/contact-og-image.jpg",
    },
    alternates: {
      canonical: "https://www.arshadhc.com/contactUs",
    },
  };
}



const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yygywko', 'template_5tgy9jr', form.current, 'xuSwhz7uEOzc-vbDU')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
    e.target.reset();
  };



  // Page-specific schema (contactSchema from your old code)
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Arshad Homeopathic Clinic",
  description: "Contact information for homeopathic treatment consultations",
  url: "https://www.arshadhc.com/contactUs",
  mainEntity: [
    {
      "@type": "MedicalBusiness",
      name: "Dr. Asma Arshad",
      telephone: "+923329622164",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://wa.me/923329622164",
        servicePhone: "+923329622164",
      },
    },
    {
      "@type": "MedicalBusiness",
      name: "Dr. Asad Awan",
      telephone: "+923125122488",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://wa.me/923125122488",
        servicePhone: "+923125122488",
      },
    },
  ],
};

// Sanitize JSON to prevent XSS (same as layout)
const sanitizeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');


  return (
    <section>
      <BackgroundAnimation />
      <Header />
      {/* Inject page-specific JSON-LD schema here (after common elements from layout) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJson(contactSchema) }}
        key="contact-schema"
      />
      <div className={styles.container} id="Contact-us">
        <main className={styles.main}>
          <div className={styles.hero}>
            <h4>Connect With Healing Experts</h4>
            <h1>Your Path to Wellness Starts Here</h1>
          </div>

          {/* Consultation Process div */}
          <div className={styles.processdiv}>
            <h2>Free Consultation Process</h2>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <RiMailLine className={styles.processIcon} />
                <h3>Reach Out</h3>
                <p>Email us or use WhatsApp to contact our specialists</p>
              </div>
              <div className={styles.step}>
                <RiWhatsappFill className={styles.processIcon} />
                <h3>Share Reports</h3>
                <p>Send your medical reports via WhatsApp for analysis</p>
              </div>
              <div className={styles.step}>
                <RiTimeLine className={styles.processIcon} />
                <h3>Get Treatment Plan</h3>
                <p>We'll create a personalized homeopathic treatment plan</p>
              </div>
            </div>
            <div className={styles.paymentInfo}>
              <h3>Convenient Payment & Delivery</h3>
              <ul>
                <li>Secure payments via EasyPaisa, JazzCash, or bank transfer</li>
                <li>Medicines carefully packaged and sent via reliable courier</li>
                <li>Nationwide delivery - treatment anywhere in Pakistan</li>
              </ul>
            </div>
          </div>

          <div className={styles.contentWrapper}>
            {/* Contact Information div */}
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h2><RiTimeLine className={styles.icon} /> Clinic Hours</h2>
                
                <div className={styles.doctorTiming}>
                  <h3>Dr. Mrs Asma Arshad</h3>
                  <a href="tel:+923329622164" id="phone-dr-asma" className={styles.phoneLink}>
                    <RiPhoneFill className={styles.Icon} /> +92-332-9622164
                  </a>
                  <a href="https://wa.me/923329622164" id="whatsApp-dr-asma" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                    <RiWhatsappFill className={styles.Icon} /> WhatsApp: +92-332-9622164
                  </a>
                  <div className={styles.timings}>
                    <p><strong>Morning:</strong> 11:00am - 02:00pm</p>
                    <p><strong>Evening:</strong> 05:00pm - 09:00pm</p>
                  </div>
                </div>

                <div className={styles.doctorTiming}>
                  <h3>Dr. M Asad Awan</h3>
                  <a href="tel:+923125122488" id="phone-dr-asad" className={styles.phoneLink}>
                    <RiPhoneFill className={styles.Icon} /> +92-312-5122488
                  </a>
                  <a href="https://wa.me/923125122488" id="whatsApp-dr-asad" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                    <RiWhatsappFill className={styles.Icon} /> WhatsApp: +92-312-5122488
                  </a>
                  <div className={styles.timings}>
                    <p><strong>Evening:</strong> 06:00pm - 09:00pm</p>
                  </div>
                </div>

                <div className={styles.closedNotice}>
                  <p><strong>CLOSED:</strong></p>
                  <p>Friday Morning and Sunday</p>
                </div>
              </div>
            </div>

            {/* Contact Form div */}
            <div className={styles.contactForm}>
              <h2>Send Us a Message</h2>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Your Full Name *</label>
                  <input type="text" id="name" name="name" pattern="[a-zA-Z][a-zA-Z ]{2,}" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Your Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required pattern="[0-9]{11,15}" title="Please enter digits only (11-15 numbers)" onKeyDown={(e) => {
                    if (!/[0-9]|Backspace|Delete|Arrow/.test(e.key)) {
                      e.preventDefault();
                    }
                  }} />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Your Email Address</label>
                  <input type="email" id="email" name="email" />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Your Message *</label>
                  <textarea id="message" name="message" rows="5" placeholder="Please describe your health concerns..." required></textarea>
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className={styles.inforCard}>
            <div>
              <h2><RiMapPinLine className={styles.icon} /> Clinic Address</h2>
              <address className={styles.address}>
                Building # B-II 306, Street # 09,<br />
                Near Faisal School (Boys Campus),<br />
                Haaji Chowk, Muslim Town,<br />
                Rawalpindi, Pakistan
              </address>
            </div>
            <div className={styles.socials}>            
              <h2><SlUserFollow className={styles.icon} />Follow Us</h2>
              <p>Stay updated with health tips and clinic news</p>
              <div>
                <a href="https://www.youtube.com/c/ArshadHomeopathicClinicOfficial" className={styles.youtube} target='_blank' rel="noopener noreferrer"> <ImYoutube/></a>
                <a href="https://www.facebook.com/Arshad.H.Clinic" target="_blank" rel="noopener noreferrer" className={styles.fb}> <FaFacebookSquare/> </a>
                <a href="https://www.instagram.com/arshadhc.official/" target="_blank" rel="noopener noreferrer" className={styles.insta}> <GrInstagram/> </a>
                <a href="https://www.tiktok.com/@arshadhomeoclinic" className={styles.tiktok} target='_blank' rel="noopener noreferrer"><FaTiktok /></a>
              </div>               
            </div>
          </div>
          
          <div className={styles.mapdiv}>
            <h2>Find Our Clinic</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3330.1071560786186!2d73.09019506780078!3d33.6285976234164!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x38dfeb328e26925b%3A0xda3edb8bce8c15cd!2sArshad%20Homeopathic%20Clinic%2C%20Building%3A%20B-II%20306%20Street%209%20Haji%20Chowk%2C%20opposite%20Saieen%20Jee%20Murgh%20Pulao%2C%20Muslim%20Town%2C%20Rawalpindi%2C%20Punjab%2046300%2C%20Pakistan!3m2!1d33.6287733!2d73.0899167!5e0!3m2!1sen!2sus!4v1659523831487!5m2!1sen!2sus" 
              className={styles.iframe}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Arshad Homeopathic Clinic Location"
            ></iframe>
          </div>
        </main>
      </div>
      
      <div className={styles.Arrows}>
        <Link href="/VideoContent" passHref legacyBehavior>
          <a className={styles.a} aria-label="Previous page"><BsFillArrowLeftCircleFill/></a>
        </Link>
        <Link href="/" passHref legacyBehavior>
          <a className={styles.a} aria-label="Next page"><BsFillArrowRightCircleFill/></a>
        </Link>
      </div> 
      
      <DoctorsFooter/> 
      <ClientProviders/> 
    </section>
  );
};

export default ContactUs;
// components/SocialFooter.js
import React from 'react';
import styles from '../styles/socialfooter.module.css';

const SocialFooter = () => {
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: '/icons/whatsapp.svg',
      url: 'https://api.whatsapp.com/send?phone=923329622164'
    },
    {
        name: 'WhatsApp',
        icon: '/icons/whatsapp.svg',
        url: 'https://api.whatsapp.com/send?phone=923125122488'
      },
    {
      name: 'Facebook',
      icon: '/icons/facebook.svg',
      url: 'https://www.facebook.com/Arshad.H.Clinic'
    },
    {
      name: 'YouTube',
      icon: '/icons/youtube.svg',
      url: 'https://www.youtube.com/c/ArshadHomeopathicClinicOfficial'
    },
    {
      name: 'TikTok',
      icon: '/icons/tiktok.svg',
      url: 'https://www.tiktok.com/@arshadhomeoclinic'
    },
    {
      name: 'Instagram',
      icon: '/icons/instagram.svg',
      url: 'https://www.instagram.com/arshad.homeo.clinic.official/'
    },
    {
        name: 'Telegram',
        icon: '/icons/telegram.svg',
        url: 'https://t.me/Arshad_Homeopathic_Clinic'
      }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.socialContainer}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={social.name}
          >
            <img 
              src={social.icon} 
              alt={social.name} 
              className={styles.socialIcon}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default SocialFooter;
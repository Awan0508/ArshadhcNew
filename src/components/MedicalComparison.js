import styles from '../styles/medicalComparison.module.css';

const MedicalComparison = () => {
  const medicalSystems = [
    {
      id: 1,
      title: "Homeopathy",
      image: "/images/homeopathy.png",
      description: "Utilizes highly diluted natural substances that would produce similar symptoms in healthy individuals, stimulating the body's self-healing response.",
      features: ["Like cures like principle", "Minimal side effects", "Individualized treatment", "Holistic approach"]
    },
    {
      id: 2,
      title: "Allopathy",
      image: "/images/allopathy.png",
      description: "Conventional medicine that uses drugs and surgeries to treat symptoms, often employing substances that produce opposite effects to the symptoms.",
      features: ["Symptom-focused treatment", "Evidence-based protocols", "Immediate relief oriented", "Standardized medications"]
    },
    {
      id: 3,
      title: "Naturopathy",
      image: "/images/naturopathy.png",
      description: "Emphasizes natural healing processes through diet control, exercise, massage, and lifestyle modifications without pharmaceutical drugs.",
      features: ["Natural healing focus", "Preventive care emphasis", "Lifestyle modification", "Non-invasive techniques"]
    },
    {
      id: 4,
      title: "Acupuncture",
      image: "/images/acupuncture.png",
      description: "Ancient Chinese technique that inserts fine needles at specific energy points to restore balance and promote natural healing.",
      features: ["Energy flow balance", "Meridian-based treatment", "Pain management focus", "Complementary therapy"]
    }
  ];

  const homeopathyFacts = [
    "Homeopathy is practiced by over 200 million individuals worldwide for both acute and chronic conditions",
    "Remedies are derived from natural plant, mineral, and animal sources, making them environmentally sustainable",
    "The potentization process creates highly diluted yet energetically active formulations",
    "Treatment addresses root causes rather than suppressing symptoms, preventing disease progression",
    "Homeopathy follows the principle that symptom suppression drives illness to deeper levels",
    "Personalized treatment plans consider the whole person - physical, emotional, and mental aspects"
  ];

  return (
    <section id="medical-comparison" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.subtitle}>Understanding Medical Approaches</h3>
          <h2 className={styles.title}>Comparative Healing Modalities</h2>
          <p className={styles.intro}>
            Homeopathic remedies undergo rigorous testing on human volunteers to ensure safety and efficacy, 
            distinguishing them from other medical systems in both approach and application.
          </p>
        </div>

        <div className={styles.comparisonGrid}>
          {medicalSystems.map((system) => (
            <div key={system.id} className={styles.systemCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={system.image} 
                  alt={system.title}
                  className={styles.systemImage}
                  loading="lazy"
                />
              </div>
              <h3 className={styles.systemTitle}>{system.title}</h3>
              <p className={styles.systemDescription}>{system.description}</p>
              <ul className={styles.featuresList}>
                {system.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.homeopathyFocus}>
          <div className={styles.focusHeader}>
            <h3 className={styles.focusTitle}>Why Homeopathy Stands Apart</h3>
            <p className={styles.focusSubtitle}>Key differentiators that make homeopathy unique</p>
          </div>
          <div className={styles.factsGrid}>
            {homeopathyFacts.map((fact, index) => (
              <div key={index} className={styles.factCard}>
                <div className={styles.factNumber}>{index + 1}</div>
                <p className={styles.factText}>{fact}</p>
              </div>
            ))}
          </div>  
        </div>
      </div>
    </section>
  );
};

export default MedicalComparison;
// pages/404.js
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Custom404() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f8f9fa'
    }}>
      <Head>
        <title>Page Not Found | Arshad Homeopathic Clinic</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Head>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ 
          fontSize: '6rem', 
          fontWeight: 'bold', 
          color: '#1e7f6d',
          marginBottom: '20px'
        }}>
          404
        </h1>
        
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '20px',
          color: '#2c3e50'
        }}>
          Page Not Found
        </h2>
        
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '30px',
          color: '#5a6b7c',
          maxWidth: '500px'
        }}>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link href="/" passHref>
          <motion.a
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              backgroundColor: '#1e7f6d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Return to Homepage
          </motion.a>
        </Link>
      </motion.div>
    </div>
  );
}
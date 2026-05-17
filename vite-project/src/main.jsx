import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './component/Header';
import Hero from './component/Hero';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <ContactForm />
    <Footer />
  </StrictMode>
)

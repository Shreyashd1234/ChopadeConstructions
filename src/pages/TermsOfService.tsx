import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <main className="flex-1 container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-20 text-gold-gradient mt-28 text-center">Terms of Service</h1>
      <div className="prose max-w-3xl mx-auto text-muted-foreground space-y-6 mt-16">
        <p>Welcome to Chopade Constructions. By accessing or using our website and services, you agree to the following terms and conditions. Please read them carefully.</p>
        <h2>Acceptance of Terms</h2>
        <ul>
          <li>By using our site, you accept these terms in full.</li>
          <li>If you disagree with any part, please do not use our website.</li>
        </ul>
        <h2>Use of Our Services</h2>
        <ul>
          <li>All content is for informational purposes only and may be updated without notice.</li>
          <li>You agree not to misuse the website or attempt to disrupt its functionality.</li>
        </ul>
        <h2>Limitations of Liability</h2>
        <ul>
          <li>We strive for accuracy but do not guarantee completeness or reliability of information.</li>
          <li>Chopade Constructions is not liable for any damages arising from use of the site.</li>
        </ul>
        <p>For questions about these terms, please contact us at info@chopade-constructions.com.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsOfService; 
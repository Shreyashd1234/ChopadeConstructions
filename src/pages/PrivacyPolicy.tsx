import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <main className="flex-1 container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-20 text-gold-gradient mt-28 text-center">Privacy Policy</h1>
      <div className="prose max-w-3xl mx-auto text-muted-foreground space-y-6 mt-16">
        <p>At Chopade Constructions, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website and services.</p>
        <h2>Information We Collect</h2>
        <ul>
          <li>Personal details you provide via contact forms (name, phone, email, etc.)</li>
          <li>Usage data such as pages visited, browser type, and device information</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your inquiries and provide customer support</li>
          <li>To improve our website and services</li>
          <li>To send important updates or promotional materials (with your consent)</li>
        </ul>
        <h2>Your Rights</h2>
        <ul>
          <li>You may request access to, correction, or deletion of your personal data</li>
          <li>You can opt out of marketing communications at any time</li>
        </ul>
        <p>For any questions regarding this policy, please contact us at info@chopade-constructions.com.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy; 
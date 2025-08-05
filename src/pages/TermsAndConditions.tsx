import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
              GroupDealz Terms of Service
            </h1>
            
            <div className="prose max-w-none bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg mb-6">
                Welcome to GroupDealz. These Terms of Service ("Terms") govern your access to and use of our website, platform, and services (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, please do not use our services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Eligibility</h2>
              <p className="mb-4">To use GroupDealz, you must:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Be at least 18 years old.</li>
                <li>Be legally capable of entering into a binding contract.</li>
                <li>Complete our registration and KYC verification process.</li>
              </ul>
              <p className="mb-6">We reserve the right to approve or reject any account application at our sole discretion.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Investment Model</h2>
              <p className="mb-4">GroupDealz enables users to pool funds and co-invest in premium real estate projects that are fully vetted and registered under RERA and other applicable laws.</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Minimum investment amount starts at ₹10,00,000.</li>
                <li>Properties are offered on a shared ownership model with pre-defined terms.</li>
                <li>Investors are entitled to receive income distributions (e.g., rental income) and benefit from asset appreciation based on their contribution.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. User Responsibilities</h2>
              <p className="mb-4">As an investor, you agree to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide accurate and complete information during account setup.</li>
                <li>Keep your login credentials confidential.</li>
                <li>Use the platform only for lawful purposes.</li>
                <li>Comply with all applicable laws, including those related to investment and taxation.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Distributions & Returns</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Rental income is distributed on a monthly or quarterly basis, depending on the property and tenant agreement.</li>
                <li>Property appreciation is realised upon asset sale or exit as defined in the investment agreement.</li>
                <li>Returns are proportionate to your invested amount and subject to property performance.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Exit & Liquidity</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Each investment opportunity comes with a defined minimum holding period.</li>
                <li>Early exits may be facilitated through our secondary resale window, depending on buyer availability.</li>
                <li>GroupDealz offers a guaranteed exit at the end of the stipulated term as outlined in the investment agreement.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Platform Usage & Restrictions</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Copy, reproduce, or redistribute any content from the Platform.</li>
                <li>Attempt to hack, modify, or reverse-engineer any part of the system.</li>
                <li>Use the Platform to defraud, scam, or mislead other users or GroupDealz.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Amendments</h2>
              <p className="mb-6">We reserve the right to modify or update these Terms at any time. Continued use of the platform after changes are posted constitutes your acceptance of the new Terms.</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law</h2>
              <p className="mb-6">These Terms shall be governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts in Gurugram.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
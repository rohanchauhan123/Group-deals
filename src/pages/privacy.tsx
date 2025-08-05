// src/pages/privacy.tsx
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center">
              Privacy Policy
            </h1>
            <div className="prose max-w-none bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg mb-6">
                At GroupDealz, we value your privacy and are committed to protecting your personal information.
                This Privacy Policy outlines how we collect, use, and safeguard the data you provide while using our platform.
              </p>
              <p className="text-lg mb-6">
                When you sign up or invest with us, we may collect information such as your name, contact details, PAN,
                bank information, and KYC documents. This data is used solely for identity verification, regulatory compliance,
                communication, and to facilitate your investment journey.
              </p>
              <p className="text-lg mb-6">
                We do not sell or rent your personal information to any third parties. Your data is stored securely,
                and access is limited to authorized personnel only. We use advanced encryption and industry-standard
                safeguards to protect your information from unauthorized access or misuse.
              </p>
              <p className="text-lg mb-6">
                GroupDealz may share information with regulatory bodies or partners only when required by law or for
                fulfilling investment-related obligations. By using our platform, you consent to our data practices.
              </p>
              <p className="text-lg">
                We may occasionally update this policy. Continued use of our services implies acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="w-[97%] mx-auto bg-white text-gray-800 py-16 px-6 md:px-12 rounded-3xl shadow-md">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-[#5C0632]"
      >
        Privacy Policy
      </motion.h1>

      <div className="space-y-8 text-base md:text-lg leading-relaxed">
        <p>
          <strong>Effective Date:</strong> November 1, 2025
        </p>

        <p>
          At <span className="font-semibold text-[#5C0632]">Falcon Web Solution</span> (“we,” “our,” or “us”), we respect
          your privacy and are committed to protecting your personal information. This Privacy Policy explains how we
          collect, use, and safeguard data when you visit our website, interact with our services, or contact us.
        </p>

        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">1. Information We Collect</h2>
          <p className="mb-2">
            We collect the following types of information to deliver and improve our services:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Personal Information:</strong> Name, Email Address, Phone Number, Company Name, and Project Details
              you provide when you contact us or fill out forms.
            </li>
            <li>
              <strong>Technical & Usage Data:</strong> IP address, browser type, device info, and website activity to
              enhance user experience and security.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To respond to your inquiries and deliver requested services.</li>
            <li>To improve our website performance and user experience.</li>
            <li>To send marketing updates (only if you opt in).</li>
            <li>To comply with legal or regulatory requirements.</li>
          </ul>
          <p className="mt-2 font-medium text-gray-700">We do not sell or rent your data to anyone.</p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">3. Cookies & Tracking</h2>
          <p>
            We use cookies and similar technologies to analyze traffic, personalize content, and improve your experience.
            You can disable cookies through your browser settings at any time.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">4. Data Security</h2>
          <p>
            We use secure servers, SSL encryption, and restricted access to protect your personal information from
            unauthorized use, alteration, or disclosure.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">5. Data Retention</h2>
          <p>
            We retain your information only as long as necessary to fulfill our services and comply with legal
            obligations. When no longer required, your data is securely deleted.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">6. Your Rights</h2>
          <p>You may have rights to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access or request a copy of your data.</li>
            <li>Request corrections or deletion (“Right to be Forgotten”).</li>
            <li>Withdraw consent at any time.</li>
          </ul>
          <p className="mt-2">
            To exercise your rights, email us at{" "}
            <a
              href="mailto:falconsolutions492@gmail.com"
              className="text-[#5C0632] underline hover:text-[#450526]"
            >
              falconsolutions492@gmail.com
            </a>
            .
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">7. Third-Party Services</h2>
          <p>
            We may use trusted third-party tools (e.g., Google Analytics, EmailJS, or Meta Ads) for analytics and
            marketing. These services comply with international data protection standards. We are not responsible for
            third-party privacy practices.
          </p>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">8. Children’s Privacy</h2>
          <p>
            Our services are intended for users aged 13 and above. We do not knowingly collect information from children
            under 13.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">9. Legal Disclosure</h2>
          <p>
            We may disclose data if required by law, government authorities, or to protect our legal rights, property, or
            users’ safety.
          </p>
        </section>

        {/* Section 10 */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">10. Policy Updates</h2>
          <p>
            We may update this policy occasionally. Updates will be posted on this page with a revised effective date.
          </p>
        </section>

        {/* Section 11 */}
        <section>
          <h2 className="text-2xl font-bold text-[#5C0632] mb-3">11. Contact Us</h2>
          <p>If you have any questions or concerns, contact us at:</p>
          <ul className="list-none pl-0 space-y-1">
            <li>
              📧{" "}
              <a
                href="mailto:falconsolutions492@gmail.com"
                className="text-[#5C0632] underline hover:text-[#450526]"
              >
                falconsolutions492@gmail.com
              </a>
            </li>
            <li>📞 +91 62396 25959</li>
            <li>🏢 Highland Park, Zirakpur, Punjab, India</li>
          </ul>
        </section>

        <div className="pt-6 border-t border-gray-300">
          <p className="text-sm text-gray-600 text-center">
            This Privacy Policy complies with the{" "}
            <strong>IT Act (India), GDPR (EU),</strong> and{" "}
            <strong>CCPA (USA)</strong> regulations.
          </p>
        </div>
      </div>
    </div>
  );
}

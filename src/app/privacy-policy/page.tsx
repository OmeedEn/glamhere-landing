import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | GlamHere",
  description: "GlamHere Privacy Policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          {/* Page header */}
          <div className="border-b border-[#f3d7e3] pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a30b45]">
              Legal
            </p>
            <h1 className="mt-3 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.03em] text-[#24141c] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-[#6f5a64]">
              Last updated: August 3, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose-glamhere mt-10 space-y-10 text-[15px] leading-7 text-[#5f4a53]">
            <p>
              At GLAMHERE (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), your privacy is of paramount importance. This Privacy Policy (&ldquo;Policy&rdquo;) describes how we collect, use, disclose, transfer, and protect your personal information when you access or use our mobile application (the &ldquo;App&rdquo;). The App is a social media platform designed for influencers and creators to share tutorials, link products, offer services, interact with users, and manage bookings.
            </p>
            <p>
              By downloading, installing, or using the App, you consent to the practices described in this Policy. If you do not agree with this Policy, please do not use the App. We encourage you to review this Policy periodically, as it may be updated. This Policy applies only to information collected through the App and does not apply to information collected offline or through third-party websites or services linked from the App.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                1. Information We Collect
              </h2>
              <p className="mt-4">
                We collect various types of information to provide and improve the App&apos;s features. This includes information you provide directly, information generated automatically from your use of the App, and information from third parties.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-[#24141c]">
                a. Personal Information You Provide
              </h3>
              <ul className="mt-3 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Account registration details, such as your name, date of birth, region, city, bio/description, and optional links to your Facebook or Instagram profiles.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Profile content, including photos, videos, or other media you upload.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Creator-specific details, such as service offerings, availability, prices, durations, and related descriptions.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Content you create or interact with, including tutorials, linked products, bookings and appointments, messages exchanged with other users, and interaction data like likes, comments, shares, saves, and reports.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Emergency contact information (optional but recommended for in-home services) to facilitate safety and communication.
                </li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-[#24141c]">
                b. Automatically Collected Information
              </h3>
              <ul className="mt-3 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Device and usage data, including device type, model, operating system, IP address, unique device identifiers, app usage behavior, and crash reports or diagnostics.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Location data (if enabled), derived from your device or IP address, to provide region-specific features.
                </li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-[#24141c]">
                c. Information from Third Parties
              </h3>
              <ul className="mt-3 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  If you link your social media accounts (e.g., Facebook or Instagram), we may collect profile information or authentication data from those services.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Analytics data from third-party providers to understand app performance and user trends.
                </li>
              </ul>

              <p className="mt-4">
                We do not collect sensitive personal information (e.g., racial or ethnic origin, political opinions, religious beliefs, health data, or genetic/biometric data) unless voluntarily provided in your bio or content, in which case it is treated with heightened care.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                2. How We Use Your Information
              </h2>
              <p className="mt-4">We use your information for legitimate business purposes, including:</p>
              <ul className="mt-3 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  To create, maintain, and personalize your user profile and account.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  To enable core App features, such as uploading and discovering tutorials, linking products, facilitating bookings and appointments, messaging, likes, comments, shares, and interactions between users.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  To allow influencers and creators to showcase services and connect with users.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  To provide customer support, respond to inquiries, and process reports of violating content.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  To monitor, analyze, and improve App performance, user experience, and features.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  To ensure community safety, detect and prevent abuse, fraud, or violations of our policies.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  To comply with legal obligations, respond to lawful requests from authorities, or protect our rights, property, or safety.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  To send notifications, updates, or marketing communications (with your consent where required by law).
                </li>
              </ul>
              <p className="mt-4">
                We process your data based on your consent, the performance of our contract with you, our legitimate interests (e.g., security and improvements), or legal compliance.
              </p>
            </div>

            {/* Section 2A */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                2A. Professional Services Disclaimer
              </h2>
              <p className="mt-4">
                GLAMHERE facilitates connections between users and independent service providers but does not verify professional licenses, certifications, or qualifications. We do not conduct background checks or verify the accuracy of service provider credentials.
              </p>
              <p className="mt-3">
                Users should independently verify service provider qualifications and ensure all providers maintain appropriate licensing and insurance as required by local regulations.
              </p>
              <p className="mt-3">
                Any information provided by service providers regarding their qualifications, experience, or credentials is provided by the service providers themselves and has not been verified by GLAMHERE.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                3. Sharing and Disclosure of Your Information
              </h2>
              <p className="mt-4">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes. However, we may share your information in the following limited circumstances:
              </p>

              <h3 className="mt-6 text-lg font-semibold text-[#24141c]">With Service Providers</h3>
              <p className="mt-2">
                We engage trusted third-party vendors (e.g., cloud hosting, analytics tools, payment processors, or moderation services) to assist with App operations. These providers are contractually obligated to use your data only for our purposes and to maintain its confidentiality.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-[#24141c]">With Other Users</h3>
              <p className="mt-2">
                Your public profile and interactions are visible to other App users as part of the social features. Private messages are shared only with intended recipients. When reporting content, the reporter&apos;s identity remains anonymous to other users.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-[#24141c]">For Legal Reasons</h3>
              <p className="mt-2">
                We may disclose information if required by law, subpoena, or court order; to respond to government requests; or to protect against harm to our rights, property, safety, or that of our users or the public.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-[#24141c]">Business Transfers</h3>
              <p className="mt-2">
                In the event of a merger, acquisition, reorganization, bankruptcy, or sale of assets, your information may be transferred as part of the transaction, subject to equivalent privacy protections.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-[#24141c]">With Your Consent</h3>
              <p className="mt-2">For any other purpose with your explicit permission.</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                4. Your Rights and Choices
              </h2>
              <p className="mt-4">You have control over your information. Through the App settings, you can:</p>
              <ul className="mt-3 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Edit, update, or delete your profile information, content, tutorials, linked products, services, and bookings.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Manage your availability, change your password, and control notification preferences.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Report content or users violating our policies.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Opt out of data sharing for non-essential purposes or marketing communications.
                </li>
              </ul>
              <p className="mt-4">Additionally, depending on your location:</p>

              <div className="mt-4 rounded-2xl border border-[#f3d7e3] bg-[#fff9fc] p-5">
                <h3 className="text-sm font-semibold text-[#a30b45]">Under GDPR (EU/EEA Residents)</h3>
                <p className="mt-2 text-sm">
                  You have rights to access, rectify, erase, restrict processing, data portability, and object to processing. You may also withdraw consent or lodge a complaint with a supervisory authority.
                </p>
              </div>
              <div className="mt-3 rounded-2xl border border-[#f3d7e3] bg-[#fff9fc] p-5">
                <h3 className="text-sm font-semibold text-[#a30b45]">Under CCPA/CPRA (California Residents)</h3>
                <p className="mt-2 text-sm">
                  You have rights to know what data we collect, request deletion, opt out of &ldquo;sales&rdquo; (though we do not sell data), and non-discrimination. We respond to verifiable requests within required timelines.
                </p>
              </div>
              <div className="mt-3 rounded-2xl border border-[#f3d7e3] bg-[#fff9fc] p-5">
                <h3 className="text-sm font-semibold text-[#a30b45]">Other Jurisdictions</h3>
                <p className="mt-2 text-sm">
                  Similar rights may apply under laws like Canada&apos;s PIPEDA or Brazil&apos;s LGPD.
                </p>
              </div>

              <p className="mt-4">
                To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@glamhere.com" className="font-semibold text-[#a30b45] underline decoration-[#a30b45]/30 transition hover:decoration-[#a30b45]">
                  privacy@glamhere.com
                </a>
                . We may verify your identity for security. Requests are free, but excessive or unfounded requests may incur fees.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                5. Data Retention
              </h2>
              <p className="mt-4">We retain your personal information only as long as necessary for the purposes outlined in this Policy, including:</p>
              <ul className="mt-3 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  While your account is active.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  To provide services, resolve disputes, or enforce agreements.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  To comply with legal obligations (e.g., tax or audit requirements).
                </li>
              </ul>
              <p className="mt-4">When no longer needed, we securely delete or anonymize data. Deleted content may persist in backups for up to 90 days.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                6. Security of Your Data
              </h2>
              <p className="mt-4">
                We implement industry-standard security measures, including encryption, access controls, firewalls, and regular audits, to protect your information from unauthorized access, loss, or breach. However, no system is infallible, and we cannot guarantee absolute security. You are responsible for safeguarding your account credentials and reporting suspected unauthorized activity promptly at{" "}
                <a href="mailto:support@glamhere.com" className="font-semibold text-[#a30b45] underline decoration-[#a30b45]/30 transition hover:decoration-[#a30b45]">
                  support@glamhere.com
                </a>
                .
              </p>
              <p className="mt-3">In the event of a data breach, we will notify affected users and authorities as required by law.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                7. Children&apos;s Privacy
              </h2>
              <p className="mt-4">
                The App is not directed to children under the age of 13 (or 16 in some jurisdictions). We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will promptly delete the data and terminate the account. Parents or guardians who believe their child has provided information should contact us immediately.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                8. International Data Transfers
              </h2>
              <p className="mt-4">
                Your information may be processed and stored in countries outside your own, including the United States, where data protection laws may differ. We ensure appropriate safeguards, such as Standard Contractual Clauses or adequacy decisions, to protect your data.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                9. Third-Party Links and Services
              </h2>
              <p className="mt-4">
                The App may contain links to third-party websites, products, or services. We are not responsible for their privacy practices. Review their policies before interacting.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                10. Changes to This Policy
              </h2>
              <p className="mt-4">
                We may update this Policy to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes via in-App notifications, email, or prominent posting in the App. Your continued use after the effective date constitutes acceptance of the updated Policy.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                11. Contact Us
              </h2>
              <p className="mt-4">
                For questions, requests, or complaints about this Policy, contact our Data Protection Officer at:
              </p>
              <div className="mt-4 rounded-2xl border border-[#f3d7e3] bg-[#fff9fc] p-5">
                <p className="text-sm font-semibold text-[#24141c]">Email</p>
                <a href="mailto:privacy@glamhere.com" className="text-sm font-semibold text-[#a30b45] underline decoration-[#a30b45]/30 transition hover:decoration-[#a30b45]">
                  privacy@glamhere.com
                </a>
              </div>
              <p className="mt-4 text-sm text-[#9a8690]">We aim to respond within 30 days.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

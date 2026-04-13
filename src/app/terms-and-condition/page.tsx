import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | GlamHere",
  description: "GlamHere Terms and Conditions — the rules governing your use of the GlamHere platform.",
};

export default function TermsAndConditionPage() {
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
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-sm text-[#6f5a64]">
              Last updated: August 3, 2025
            </p>
          </div>

          {/* Intro */}
          <div className="mt-10 space-y-10 text-[15px] leading-7 text-[#5f4a53]">
            <p>
              Welcome to GLAMHERE (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our mobile application (the &ldquo;App&rdquo;), a social platform for influencers and creators to upload tutorials, link products, offer services, manage bookings, and interact with users.
            </p>
            <p>
              By accessing or using the App, you agree to be bound by these Terms, our{" "}
              <a href="/privacy-policy" className="font-semibold text-[#a30b45] underline decoration-[#a30b45]/30 transition hover:decoration-[#a30b45]">
                Privacy Policy
              </a>
              , and any additional guidelines or rules posted in the App. If you do not agree, you must stop using the App immediately.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                1. Eligibility and Registration
              </h2>
              <p className="mt-4">
                You must be at least 16 years old (18+ for certain services) to use the App. If under 18, you must have parental/guardian consent. Service Providers may require users to be 18+ for certain services (chemical treatments, permanent procedures, etc.) and must verify age before providing such services.
              </p>
              <p className="mt-3">
                You represent and warrant that all information you provide during registration or use is accurate, complete, and truthful. You may not impersonate others or use false information. Accounts are personal and non-transferable.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                2. Account Responsibility and Security
              </h2>
              <p className="mt-4">
                You are solely responsible for all activities under your account, including content uploaded, interactions, and bookings. Maintain the confidentiality of your password and notify us immediately at{" "}
                <a href="mailto:support@glamhere.com" className="font-semibold text-[#a30b45] underline decoration-[#a30b45]/30 transition hover:decoration-[#a30b45]">
                  support@glamhere.com
                </a>{" "}
                of any unauthorized use or security breach.
              </p>
              <p className="mt-3">We reserve the right to suspend or terminate accounts for suspicious activity or violations.</p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                3. User Content and Conduct
              </h2>

              <h3 className="mt-6 text-lg font-semibold text-[#24141c]">Permitted Use</h3>
              <p className="mt-2">
                You may upload tutorials (images, videos, thumbnails), link products, offer services, post bios, interact via likes, comments, shares, saves, messages, and manage bookings.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-[#24141c]">Guidelines</h3>
              <p className="mt-2">You agree not to upload, share, or engage in:</p>
              <ul className="mt-3 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Illegal, obscene, defamatory, discriminatory, harassing, threatening, or otherwise offensive content.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Content that infringes intellectual property rights of others.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Spam, scams, misleading promotions, viruses, or harmful code.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Impersonation, doxxing, or invasion of privacy.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Any activity that disrupts the App or harms other users.
                </li>
              </ul>
              <p className="mt-4">
                We may, but are not obligated to, monitor content. We reserve the right to remove violating content, suspend/terminate accounts, or report to authorities without notice or liability.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-[#24141c]">Reporting</h3>
              <p className="mt-2">
                You may report violating content or behavior. Reports are anonymous to other users, but admins may access details for review.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                4. Ownership and License to Your Content
              </h2>
              <p className="mt-4">
                You retain ownership of all content you upload (&ldquo;User Content&rdquo;), including tutorials, photos, videos, and product links.
              </p>
              <p className="mt-3">
                By uploading User Content, you grant us a non-exclusive, royalty-free, worldwide, perpetual, irrevocable license to host, store, display, distribute, modify (for technical purposes), and use your User Content within the App to provide and promote its features.
              </p>
              <p className="mt-3">
                You represent that you have all necessary rights to your User Content and that it does not violate third-party rights. We own all rights to the App, its design, code, and non-user content.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                5. Bookings and Services
              </h2>
              <p className="mt-4">
                Influencers/creators may offer services with clear listings of prices, durations, availability, and terms. Users may book services directly through the App.
              </p>
              <p className="mt-3">
                GLAMHERE facilitates bookings but is not a party to them. We do not guarantee service quality, availability, or outcomes and are not responsible for disputes, cancellations, refunds, payments, or liabilities arising from bookings.
              </p>
            </div>

            {/* Section 5A */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                5A. Service Provider Status and Requirements
              </h2>
              <p className="mt-4">
                All beauty professionals, stylists, makeup artists, and service providers using GLAMHERE (&ldquo;Service Providers&rdquo;) are independent contractors, not employees, agents, or partners of GLAMHERE.
              </p>
              <p className="mt-3">Service Providers are solely responsible for:</p>
              <ul className="mt-3 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Obtaining and maintaining all required professional licenses and certifications.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Carrying appropriate professional liability insurance as required by law.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Complying with all local health department and safety regulations.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Setting their own rates, availability, and service terms.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  All tax obligations and reporting requirements.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  The quality and safety of services provided.
                </li>
              </ul>
            </div>

            {/* Section 5B */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                5B. Payment Processing and Fees
              </h2>
              <p className="mt-4">
                All payments are processed through third-party payment processors integrated with the App. GLAMHERE collects a service fee from each transaction as displayed at the time of booking.
              </p>
              <ul className="mt-3 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Payment is due at time of booking unless otherwise specified.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Service fees are non-refundable.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Refunds for services are subject to individual Service Provider policies.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  GLAMHERE is not responsible for payment processing failures, unauthorized charges, or refund disputes.
                </li>
              </ul>
              <p className="mt-4">Users agree to pay all applicable taxes on services received.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                6. User Interactions and Community
              </h2>
              <p className="mt-4">
                You may follow users, send messages, comment, like, share, and engage in other social features. No harassment, hate speech, threats, or abusive behavior. Violations may result in content removal, account suspension, or bans.
              </p>
              <p className="mt-3">We foster a positive community but are not liable for user interactions.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                7. Privacy and Data
              </h2>
              <p className="mt-4">
                Your use of the App is also governed by our{" "}
                <a href="/privacy-policy" className="font-semibold text-[#a30b45] underline decoration-[#a30b45]/30 transition hover:decoration-[#a30b45]">
                  Privacy Policy
                </a>
                , which is incorporated herein. We collect data to provide and improve services, as detailed therein.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                8. Prohibitions
              </h2>
              <p className="mt-4">In addition to content guidelines, you may not:</p>
              <ul className="mt-3 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Use automated tools (e.g., bots) to scrape data or interact with the App.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Interfere with the App&apos;s functionality or security.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Use the App for commercial purposes outside its intended features without our approval.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Violate applicable laws or export controls.
                </li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                9. Termination and Suspension
              </h2>
              <p className="mt-4">
                You may delete your account at any time via App settings. We may suspend or terminate your access for violations, legal reasons, or at our discretion, without notice or refund. Upon termination, your license to use the App ends, but our rights to your User Content survive as needed.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                10. Disclaimers and Limitation of Liability
              </h2>
              <div className="mt-4 rounded-2xl border border-[#f3d7e3] bg-[#fff9fc] p-5">
                <p className="text-sm font-semibold text-[#a30b45]">Important</p>
                <p className="mt-2 text-sm">
                  GLAMHERE is a technology platform that connects users with independent service providers. We do not provide beauty, styling, or wellness services directly.
                </p>
              </div>
              <p className="mt-4">
                The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied.
              </p>
              <p className="mt-3 font-semibold text-[#24141c]">GLAMHERE specifically disclaims all liability for:</p>
              <ul className="mt-3 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Quality, safety, or outcomes of services provided by Service Providers.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Professional qualifications, licensing status, or credentials of Service Providers.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Health complications, allergic reactions, or injuries resulting from services.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  Property damage occurring during service provision.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  No-shows, cancellations, scheduling disputes, or service-related conflicts.
                </li>
              </ul>
              <p className="mt-4">
                To the fullest extent permitted by law, our total liability shall not exceed $100 or the amount you paid us in the past 12 months, whichever is greater. Some jurisdictions do not allow certain limitations, so these may not apply to you.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                11. Indemnification
              </h2>
              <p className="mt-4">
                You agree to indemnify and hold us harmless from any claims, losses, or damages (including attorneys&apos; fees) arising from your use of the App, your content, bookings, or violations of these Terms.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                12. Governing Law and Dispute Resolution
              </h2>
              <p className="mt-4">
                These Terms are governed by the laws of the State of Texas, without regard to conflict of laws principles. Any disputes shall be resolved exclusively in the state and federal courts of Uvalde County, Texas, and you consent to their jurisdiction.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                13. Miscellaneous
              </h2>
              <ul className="mt-4 list-none space-y-2.5">
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  If any provision is unenforceable, the rest remain in effect.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  These Terms constitute the entire agreement.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  No waiver of any breach is a waiver of future breaches.
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a30b45]" />
                  We may assign these Terms; you may not without our consent.
                </li>
              </ul>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[#24141c]">
                14. Contact Us
              </h2>
              <p className="mt-4">For questions or notices regarding these Terms, contact us at:</p>
              <div className="mt-4 rounded-2xl border border-[#f3d7e3] bg-[#fff9fc] p-5">
                <p className="text-sm font-semibold text-[#24141c]">Email</p>
                <a href="mailto:support@glamhere.com" className="text-sm font-semibold text-[#a30b45] underline decoration-[#a30b45]/30 transition hover:decoration-[#a30b45]">
                  support@glamhere.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

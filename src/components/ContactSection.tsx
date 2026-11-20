import { useState, type FormEvent } from 'react';
import { ArrowUp, ArrowUpRight, CheckCircle2, FileText, Globe, Mail, Phone } from 'lucide-react';
import { ODPL_PROFILE_PDF_URL } from '../data/odplData';

export function ContactSection() {
  const [formState, setFormState] = useState({
    fullName: '',
    companyName: '',
    email: '',
    segment: 'Corporate Fit-Outs',
    message: '',
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formState.fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formState.email.trim())) {
      setFormError('Please enter a valid work or personal email address.');
      return;
    }
    if (formState.message.trim().length < 12) {
      setFormError('Please share brief project scope or BOQ details (at least 12 characters).');
      return;
    }

    const refCode = `ODPL-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
    setFormState({
      fullName: '',
      companyName: '',
      email: '',
      segment: 'Corporate Fit-Outs',
      message: '',
    });
  };

  return (
    <>
      <section id="contact" className="bg-white py-20 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#C24E0E]">
                  Partner With Precision
                </p>
                <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-[#0B1528] leading-tight">
                  Omendra Developers Pvt Ltd (ODPL)
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  Engage our engineering and execution teams for civil infrastructure packages, turnkey corporate office fit-outs, multi-city retail/QSR rollouts, or institutional expansions.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#EA6A20] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#0B1528]">Direct Phone &amp; Landline</p>
                    <p className="font-[var(--font-mono)] tabular-nums text-slate-600">
                      +91 98716 58334 · 011-49097295
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#EA6A20] shrink-0" />
                  <a
                    href="mailto:info@odpl.net.in"
                    className="text-slate-700 hover:text-[#C24E0E] transition-colors font-medium"
                  >
                    info@odpl.net.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#EA6A20] shrink-0" />
                  <span className="text-slate-700 font-medium">www.odpl.net.in</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={ODPL_PROFILE_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B1528] hover:text-[#C24E0E] underline underline-offset-4 decoration-slate-300"
                >
                  <FileText className="w-4 h-4 text-[#EA6A20]" />
                  Download / View ODPL Updated Profile 2026 (PDF)
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F8F7F4] border border-slate-200 rounded-lg p-6 sm:p-8">
              {submittedRef ? (
                <div className="py-10 text-center space-y-4 bg-white border border-slate-200 rounded-md p-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                  <h3 className="font-[var(--font-display)] text-2xl font-semibold text-[#0B1528]">
                    RFP / Project Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your tender or contracting inquiry has been recorded under reference{' '}
                    <span className="font-[var(--font-mono)] font-semibold text-[#0B1528]">
                      {submittedRef}
                    </span>
                    . Our estimation &amp; BOQ engineering desk will connect within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedRef(null)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#0B1528] hover:bg-[#162744] rounded-md cursor-pointer"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} noValidate className="space-y-5">
                  <h3 className="text-lg font-semibold text-[#0B1528]">
                    Request BOQ Estimation or Execution Partnership
                  </h3>

                  {formError && (
                    <div
                      role="alert"
                      className="p-3 text-xs font-medium text-red-800 bg-red-50 border border-red-200 rounded-md"
                    >
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="odpl-name" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="odpl-name"
                        type="text"
                        value={formState.fullName}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, fullName: e.target.value }))
                        }
                        placeholder="Rajesh Verma"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:border-[#0B1528]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="odpl-company" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Organization / Principal Contractor
                      </label>
                      <input
                        id="odpl-company"
                        type="text"
                        value={formState.companyName}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, companyName: e.target.value }))
                        }
                        placeholder="Company or EPC Name"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:border-[#0B1528]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="odpl-email" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="odpl-email"
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, email: e.target.value }))
                        }
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:border-[#0B1528]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="odpl-segment" className="block text-xs font-medium text-slate-700 mb-1.5">
                        Execution Segment
                      </label>
                      <select
                        id="odpl-segment"
                        value={formState.segment}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, segment: e.target.value }))
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:border-[#0B1528]"
                      >
                        <option value="Civil & Infra — Transportation Hubs">Civil &amp; Infra — Transportation Hubs</option>
                        <option value="Corporate Fit-Outs">Corporate Fit-Outs (MNCs &amp; GCCs)</option>
                        <option value="Retail & QSR Rollouts">Retail &amp; QSR Store Rollouts</option>
                        <option value="Institutions — Schools & Colleges">Institutions — Schools &amp; Colleges</option>
                        <option value="Hospitality & Establishments">Hospitality &amp; Bespoke Establishments</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="odpl-message" className="block text-xs font-medium text-slate-700 mb-1.5">
                      Project Scope, City &amp; Timeline
                    </label>
                    <textarea
                      id="odpl-message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      placeholder="Share approximate area (sq.ft.), location, BOQ readiness, and target handover timeline..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:border-[#0B1528]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 text-sm font-semibold text-white bg-[#EA6A20] hover:bg-[#F47B34] rounded-md transition-colors cursor-pointer"
                  >
                    Submit Project Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Corporate Footer */}
      <footer className="bg-[#070F1E] text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tier 1: Executive Partner Callout */}
          <div className="py-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#F47B34]">
                Plan · Build · Deliver
              </p>
              <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-semibold text-white leading-tight">
                Partner With Precision.
              </h2>
              <p className="text-sm text-slate-400">
                Tech-enabled civil contracting &amp; turnkey interior execution backed by self-governing crews, transparent BOQs, and ODVIX AI governance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={ODPL_PROFILE_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#EA6A20] hover:bg-[#F47B34] rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4" />
                Company Profile 2026 (PDF)
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-200 bg-[#0B1528] hover:bg-[#13223E] border border-white/15 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Back to Top
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tier 2: 4-Column Architectural Directory */}
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <rect x="2" y="2" width="28" height="28" rx="4" fill="#0B1528" stroke="#EA6A20" strokeWidth="1.5" />
                  <path
                    d="M8.5 22.5V12.5L16 7.5L23.5 12.5V22.5"
                    stroke="#EA6A20"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 22.5V16H19.5V22.5"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-[var(--font-display)] text-lg font-semibold text-white">
                  Omendra Developers Pvt Ltd
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                <span className="text-white font-medium">We Build Better.</span> Trusted civil and interior execution partner for infrastructure authorities, multinational corporations, and national retail networks.
              </p>

              <p className="text-xs text-slate-400 pt-1">
                Tier-1 EHS Adherence · Biometric Attendance · Zero-Rework Handover
              </p>
            </div>

            <div className="lg:col-span-3 space-y-3 text-xs">
              <p className="font-semibold text-white uppercase tracking-wider">
                Operating Segments
              </p>
              <ul className="space-y-2.5 text-slate-400">
                <li>
                  <a href="#businesses" className="hover:text-[#F47B34] transition-colors">
                    Civil &amp; Infra — Transportation Hubs
                  </a>
                </li>
                <li>
                  <a href="#businesses" className="hover:text-[#F47B34] transition-colors">
                    Corporate Office Fit-Outs (MNCs &amp; GCCs)
                  </a>
                </li>
                <li>
                  <a href="#businesses" className="hover:text-[#F47B34] transition-colors">
                    Retail &amp; QSR Multi-City Rollouts
                  </a>
                </li>
                <li>
                  <a href="#businesses" className="hover:text-[#F47B34] transition-colors">
                    Institutions — Schools &amp; Colleges
                  </a>
                </li>
                <li>
                  <a href="#businesses" className="hover:text-[#F47B34] transition-colors">
                    Hospitality &amp; Bespoke Establishments
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-3 text-xs">
              <p className="font-semibold text-white uppercase tracking-wider">
                Governance &amp; Proof
              </p>
              <ul className="space-y-2.5 text-slate-400">
                <li>
                  <a href="#about" className="hover:text-[#F47B34] transition-colors">
                    Why Partner With ODPL
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#F47B34] transition-colors">
                    Execution Methodology
                  </a>
                </li>
                <li>
                  <a href="#technology" className="hover:text-[#F47B34] transition-colors">
                    Proprietary PMS Portal
                  </a>
                </li>
                <li>
                  <a href="#technology" className="hover:text-[#F47B34] transition-colors">
                    ODVIX AI Site Intelligence
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#F47B34] transition-colors">
                    Delivered Projects &amp; Clients
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3 text-xs">
              <p className="font-semibold text-white uppercase tracking-wider">
                Corporate Desk
              </p>
              <div className="space-y-2.5 text-slate-400">
                <a
                  href="mailto:info@odpl.net.in"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#F47B34] shrink-0" />
                  <span>info@odpl.net.in</span>
                </a>
                <a
                  href="tel:+919871658334"
                  className="flex items-center gap-2 font-[var(--font-mono)] tabular-nums hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F47B34] shrink-0" />
                  <span>+91 98716 58334 · 011-49097295</span>
                </a>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#F47B34] shrink-0" />
                  <span>www.odpl.net.in</span>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#F47B34] hover:text-white transition-colors"
                >
                  Request BOQ Estimation
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Tier 3: Copyright & Statutory Bar */}
          <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Omendra Developers Pvt Ltd (ODPL). All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-5">
              <span>Statutory ESI / PF Compliant</span>
              <span aria-hidden="true">·</span>
              <a
                href={ODPL_PROFILE_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Profile PDF
              </a>
              <span aria-hidden="true">·</span>
              <a href="#projects" className="hover:text-white transition-colors">
                Portfolio
              </a>
              <span aria-hidden="true">·</span>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import { useState } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import {
  HERO_BANNER_IMAGE,
  ODPL_PROFILE_PDF_URL,
  SNAPSHOT_TABS,
} from '../data/odplData';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  const [snapshotTab, setSnapshotTab] = useState<'scale' | 'mantra'>('scale');

  const activeMetrics =
    snapshotTab === 'scale' ? SNAPSHOT_TABS.scale : SNAPSHOT_TABS.mantra;

  return (
    <section id="top" className="relative bg-[#070F1E] text-white">
      {/* Main Full-Width Architectural Hero */}
      <div className="relative min-h-[540px] lg:min-h-[610px] flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <ResilientImage
            src={HERO_BANNER_IMAGE}
            alt="Omendra Developers Pvt Ltd corporate infrastructure and civil engineering execution"
            className="w-full h-full object-cover object-center"
            fallbackLabel="Omendra Developers Pvt Ltd (ODPL)"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-[#070F1E]/75 to-[#070F1E]/35"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 lg:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#F47B34] mb-4">
              Omendra Developers Pvt Ltd (ODPL) · We Build Better · Pan-India Execution
            </p>
            <h1 className="font-[var(--font-display)] text-[clamp(2.25rem,4.3vw,3.8rem)] font-semibold leading-[1.08] tracking-tight text-white mb-5">
              Execution Partners. Tech-Enabled Civil &amp; Interior Contracting.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8">
              From high-speed rail infrastructure hubs and 50+ retail store rollouts to turnkey MNC office fit-outs, ODPL replaces site uncertainty with self-governing crews, transparent BOQs, and real-time PMS + ODVIX AI governance.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#EA6A20] hover:bg-[#F47B34] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Delivered Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={ODPL_PROFILE_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white hover:text-[#F47B34] underline underline-offset-4 decoration-white/40 hover:decoration-[#F47B34] transition-colors whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4" />
                View 2026 Company Profile (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Execution & Mantra Strip Below Hero */}
      <div className="border-t border-white/10 bg-[#0B1528]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
            <div className="text-xs font-medium text-slate-300">
              ODPL Enterprise Execution Snapshot &amp; Operating Mantra
            </div>
            <div
              className="inline-flex items-center p-1 bg-[#070F1E] rounded-md border border-white/10 self-start sm:self-auto"
              role="tablist"
              aria-label="ODPL snapshot view"
            >
              <button
                type="button"
                role="tab"
                aria-selected={snapshotTab === 'scale'}
                onClick={() => setSnapshotTab('scale')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  snapshotTab === 'scale'
                    ? 'bg-white text-[#0B1528]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Execution Proof
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={snapshotTab === 'mantra'}
                onClick={() => setSnapshotTab('mantra')}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  snapshotTab === 'mantra'
                    ? 'bg-white text-[#0B1528]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                ODPL Mantra: Plan · Build · Deliver
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {activeMetrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <p className="text-xs font-medium text-slate-300">{metric.label}</p>
                <p className="font-[var(--font-mono)] tabular-nums text-2xl font-semibold text-white tracking-tight">
                  {metric.value}
                </p>
                <p className="text-xs text-[#F47B34]">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

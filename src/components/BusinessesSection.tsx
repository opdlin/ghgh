import { useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import {
  EXECUTION_SEGMENTS,
  type ExecutionSegment,
} from '../data/odplData';
import { ResilientImage } from './ResilientImage';

export function BusinessesSection() {
  const [selectedSegment, setSelectedSegment] = useState<ExecutionSegment | null>(null);

  return (
    <section id="businesses" className="bg-white py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#C24E0E] mb-2">
            Segments In Which We Operate
          </p>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-[#0B1528] leading-tight mb-4">
            Civil infrastructure, turnkey corporate interiors, retail rollouts, and institutional builds.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Select any operating segment below to inspect technical scope, MEP &amp; EHS execution standards, and flagship enterprise deployments.
          </p>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXECUTION_SEGMENTS.map((segment) => {
            const isWide = segment.featuredSpan === 'wide';
            return (
              <article
                key={segment.id}
                className={`group bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between transition-colors hover:border-[#EA6A20] ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div className={isWide ? 'grid grid-cols-1 lg:grid-cols-12 h-full' : 'flex flex-col h-full'}>
                  <div
                    className={`relative overflow-hidden bg-slate-100 ${
                      isWide ? 'lg:col-span-6 min-h-[240px] lg:h-full' : 'aspect-[4/3]'
                    }`}
                  >
                    <ResilientImage
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      fallbackLabel={segment.title}
                    />
                  </div>

                  <div
                    className={`p-6 sm:p-7 flex flex-col justify-between ${
                      isWide ? 'lg:col-span-6' : 'flex-1'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3">
                        <span className="font-[var(--font-mono)] tabular-nums font-medium text-[#C24E0E]">
                          {segment.index}. {segment.title.split('—')[0].trim()}
                        </span>
                      </div>

                      <h3 className="font-[var(--font-display)] text-xl sm:text-2xl font-semibold text-[#0B1528] mb-2">
                        {segment.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {segment.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-4">
                      <div>
                        <p className="font-[var(--font-mono)] tabular-nums text-xl font-semibold text-[#0B1528]">
                          {segment.leadMetric}
                        </p>
                        <p className="text-xs text-slate-500">{segment.leadMetricLabel}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedSegment(segment)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B1528] hover:text-[#C24E0E] transition-colors cursor-pointer"
                      >
                        Explore segment capabilities
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Segment Deep-Dive Modal */}
      {selectedSegment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070F1E]/75 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="segment-modal-title"
          onClick={() => setSelectedSegment(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 relative">
              <ResilientImage
                src={selectedSegment.image}
                alt={selectedSegment.title}
                className="w-full h-full object-cover"
                fallbackLabel={selectedSegment.title}
              />
              <button
                type="button"
                onClick={() => setSelectedSegment(null)}
                aria-label="Close segment details"
                className="absolute top-4 right-4 w-10 h-10 rounded-md bg-white/95 text-[#0B1528] hover:bg-white flex items-center justify-center shadow-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-xs font-medium text-[#C24E0E] mb-1">
                  {selectedSegment.index}. ODPL Execution Segment
                </p>
                <h3
                  id="segment-modal-title"
                  className="font-[var(--font-display)] text-2xl sm:text-3xl font-semibold text-[#0B1528]"
                >
                  {selectedSegment.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1">{selectedSegment.subtitle}</p>
              </div>

              <div className="bg-[#F8F7F4] border border-slate-200 rounded-md p-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500">Execution Proof</p>
                  <p className="font-[var(--font-mono)] tabular-nums text-2xl font-semibold text-[#0B1528]">
                    {selectedSegment.leadMetric}
                  </p>
                </div>
                <p className="text-xs font-medium text-slate-700">
                  {selectedSegment.leadMetricLabel}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedSegment.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Scope &amp; Technical Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {selectedSegment.capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#EA6A20] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs font-medium text-slate-500 mb-2">
                  Clientele &amp; Environments Served
                </p>
                <p className="text-xs sm:text-sm text-[#0B1528] font-medium">
                  {selectedSegment.typicalClients.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

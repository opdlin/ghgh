import { useState } from 'react';
import { Check, X } from 'lucide-react';
import {
  CONTRACTOR_COMPARISON,
  CRITICAL_CAPABILITIES,
  END_TO_END_SERVICES,
  EXECUTION_METHODOLOGY,
} from '../data/odplData';

export function AboutSection() {
  const [comparisonTab, setComparisonTab] = useState<'standard' | 'capabilities'>('standard');
  const [activeStageStep, setActiveStageStep] = useState(EXECUTION_METHODOLOGY[0].step);

  const currentStage =
    EXECUTION_METHODOLOGY.find((s) => s.step === activeStageStep) ||
    EXECUTION_METHODOLOGY[0];

  return (
    <section id="about" className="bg-[#F8F7F4] py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top Row: Why ODPL? Comparison & 4-Stage Methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#C24E0E]">
              Why Partner With ODPL
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-[#0B1528] leading-tight">
              The ODPL Enterprise Standard vs. Traditional Contractors.
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Principal contractors and enterprise clients partner with Omendra Developers Pvt Ltd to eliminate site follow-up friction, billing ambiguity, labor compliance risk, and post-handover snags.
            </p>

            {/* Interactive 4-Stage Methodology Box */}
            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-5">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200">
                <h3 className="text-sm font-semibold text-[#0B1528]">
                  Execution Methodology
                </h3>
                <span className="text-xs text-slate-500">4-Stage Lifecycle</span>
              </div>

              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Execution methodology stages">
                {EXECUTION_METHODOLOGY.map((stage) => {
                  const isActive = stage.step === activeStageStep;
                  return (
                    <button
                      key={stage.step}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveStageStep(stage.step)}
                      className={`px-3 py-1.5 text-xs font-[var(--font-mono)] tabular-nums font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#0B1528] text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {stage.step}. {stage.title.split(' ')[0]}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2.5">
                <h4 className="font-[var(--font-display)] text-xl font-semibold text-[#0B1528]">
                  {currentStage.step}. {currentStage.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentStage.summary}
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Stage Output</span>
                  <span className="font-medium text-[#C24E0E]">
                    {currentStage.deliverable}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Comparison Matrix */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-[#0B1528]">
                  Contractor Benchmark Comparison
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Verified operational governance across civil and interior sites
                </p>
              </div>

              <div className="inline-flex items-center p-1 bg-[#F8F7F4] border border-slate-200 rounded-md self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setComparisonTab('standard')}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    comparisonTab === 'standard'
                      ? 'bg-[#0B1528] text-white'
                      : 'text-slate-600 hover:text-[#0B1528]'
                  }`}
                >
                  Operational Standard
                </button>
                <button
                  type="button"
                  onClick={() => setComparisonTab('capabilities')}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    comparisonTab === 'capabilities'
                      ? 'bg-[#0B1528] text-white'
                      : 'text-slate-600 hover:text-[#0B1528]'
                  }`}
                >
                  Compliance Checklist
                </button>
              </div>
            </div>

            {comparisonTab === 'standard' ? (
              <div className="divide-y divide-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 bg-slate-50 text-xs font-semibold text-slate-600">
                  <div className="py-3 px-6">The Traditional Subcontractor</div>
                  <div className="py-3 px-6 text-[#C24E0E] sm:border-l sm:border-slate-200">
                    The ODPL Enterprise Standard
                  </div>
                </div>
                {CONTRACTOR_COMPARISON.map((row) => (
                  <div
                    key={row.dimension}
                    className="grid grid-cols-1 sm:grid-cols-2 text-sm"
                  >
                    <div className="p-5 sm:px-6 text-slate-500 leading-relaxed">
                      <p className="text-xs font-medium text-slate-400 mb-1">
                        {row.dimension}
                      </p>
                      {row.traditional}
                    </div>
                    <div className="p-5 sm:px-6 text-[#0B1528] font-medium leading-relaxed bg-[#EA6A20]/[0.03] sm:border-l sm:border-slate-200">
                      <p className="text-xs font-medium text-[#C24E0E] mb-1">
                        ODPL Standard
                      </p>
                      {row.odplStandard}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                      <th className="py-3.5 px-6">Critical Project Execution Capability</th>
                      <th className="py-3.5 px-5 text-center">Standard Subcontractor</th>
                      <th className="py-3.5 px-5 text-center text-[#C24E0E]">ODPL Standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {CRITICAL_CAPABILITIES.map((item) => (
                      <tr key={item.capability} className="hover:bg-slate-50/70">
                        <td className="py-4 px-6 font-medium text-[#0B1528]">
                          {item.capability}
                        </td>
                        <td className="py-4 px-5 text-center">
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-red-700">
                            <X className="w-4 h-4" />
                            Missing
                          </span>
                        </td>
                        <td className="py-4 px-5 text-center">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
                            <Check className="w-4 h-4" />
                            Verified
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* End-to-End Project Services */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#C24E0E] mb-2">
                Full Lifecycle Accountability
              </p>
              <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl font-semibold text-[#0B1528]">
                End-to-End Project Services
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              From tender documentation and approvals to defect rectification and post-contract warranty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {END_TO_END_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-slate-200 rounded-lg p-6 sm:p-7 space-y-5"
              >
                <div className="pb-4 border-b border-slate-100">
                  <p className="font-[var(--font-mono)] text-xs font-medium text-[#C24E0E] mb-1">
                    {service.phase}
                  </p>
                  <h4 className="font-[var(--font-display)] text-xl font-semibold text-[#0B1528]">
                    {service.title}
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#EA6A20] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

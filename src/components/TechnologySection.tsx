import { useState } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { TECHNOLOGY_MODULES } from '../data/odplData';

const SAMPLE_GOVERNANCE_RECORDS = [
  {
    moduleId: 'pms-platform',
    title: 'Evening Digital Progress Report (DPR) — Live Sample Workflow',
    rows: [
      { item: 'Master Schedule & Milestone Sync', status: 'Synced to Itemized BOQ', timestamp: 'Daily 18:00 IST' },
      { item: 'Cement & Steel Material Test Certificates', status: 'Batch Lab Reports Uploaded', timestamp: 'Pre-Pour Verified' },
      { item: 'Inventory Stage-Tracking', status: 'MEP & Finishing Lots Reconciled', timestamp: 'Real-Time Cloud' },
      { item: 'Pre-Agreed Rate Analysis Billing', status: 'Digital Engineer Sign-Off', timestamp: 'Zero Variation Disputes' },
    ],
  },
  {
    moduleId: 'odvix-ai',
    title: 'ODVIX AI Site Intelligence — Audit & Compliance Trail',
    rows: [
      { item: 'Geo-Tagged Site Photography', status: 'Lat/Long & Time-Stamped', timestamp: 'Every Shift' },
      { item: 'PPE & Tier-1 EHS Protocol Check', status: 'AI Safety Infraction Flagging', timestamp: 'Continuous Check' },
      { item: 'Biometric & Geo-Verified Attendance', status: 'Mapped to Statutory ESI / PF', timestamp: '100% Compliant' },
      { item: 'Pre-Delivery Snag Audit', status: 'Zero-Rework Handover Clearance', timestamp: 'Stage-Gate Lock' },
    ],
  },
];

export function TechnologySection() {
  const [activeTechId, setActiveTechId] = useState(TECHNOLOGY_MODULES[0].id);

  const activeTech =
    TECHNOLOGY_MODULES.find((t) => t.id === activeTechId) || TECHNOLOGY_MODULES[0];
  const activeSample =
    SAMPLE_GOVERNANCE_RECORDS.find((s) => s.moduleId === activeTechId) ||
    SAMPLE_GOVERNANCE_RECORDS[0];

  return (
    <section id="technology" className="bg-[#0B1528] text-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-10">
          <div className="lg:col-span-7 space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#F47B34]">
              Powered by Technology
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Structured digital governance replacing chaotic site communication.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every ODPL project operates on our custom cloud PMS portal paired with ODVIX AI Site Intelligence—giving principal contractors and client engineers a 24/7 single source of truth.
            </p>
          </div>
        </div>

        {/* Interactive Dual-Engine Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-4">
            {TECHNOLOGY_MODULES.map((mod, idx) => {
              const isSelected = mod.id === activeTechId;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveTechId(mod.id)}
                  className={`text-left p-6 rounded-lg border transition-colors cursor-pointer flex-1 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#070F1E] border-[#EA6A20]'
                      : 'bg-[#070F1E]/50 border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-[var(--font-mono)] text-[#F47B34] font-medium">
                        0{idx + 1}. {mod.tagline}
                      </span>
                    </div>
                    <h3 className="font-[var(--font-display)] text-2xl font-semibold text-white">
                      {mod.name}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Governance Standard</span>
                    <span className="font-[var(--font-mono)] font-semibold text-[#F47B34]">
                      {mod.headlineMetric}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Selected Engine Capabilities & Audit Trail Structure */}
          <div className="lg:col-span-7 bg-[#070F1E] border border-white/10 rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-medium text-[#F47B34]">
                <ShieldCheck className="w-4 h-4" />
                <span>{activeTech.name} · Core Capabilities</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeTech.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-sm text-slate-200 bg-[#0B1528] border border-white/10 rounded-md p-3.5"
                  >
                    <Check className="w-4 h-4 text-[#F47B34] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {activeSample.title}
              </p>
              <div className="overflow-x-auto border border-white/10 rounded-md">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#0B1528] border-b border-white/10 text-slate-400">
                      <th className="py-2.5 px-4 font-medium">Control Point</th>
                      <th className="py-2.5 px-4 font-medium">Verification</th>
                      <th className="py-2.5 px-4 font-medium">Cadence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {activeSample.rows.map((row) => (
                      <tr key={row.item} className="text-slate-200">
                        <td className="py-3 px-4 font-medium text-white">{row.item}</td>
                        <td className="py-3 px-4 text-slate-300">{row.status}</td>
                        <td className="py-3 px-4 font-[var(--font-mono)] text-xs text-[#F47B34]">
                          {row.timestamp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

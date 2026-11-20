import { useMemo, useState } from 'react';
import { ArrowRight, Check, FileText, Search, X } from 'lucide-react';
import {
  CLIENT_ROSTER,
  FEATURED_PROJECTS,
  ODPL_PROFILE_PDF_URL,
  type FeaturedProject,
} from '../data/odplData';
import { ResilientImage } from './ResilientImage';

const PROJECT_CATEGORIES = [
  'All',
  'Transportation & Infra',
  'Corporate Fit-Outs',
  'Retail & QSR',
  'Establishments',
] as const;

export function ProjectsSection() {
  const [categoryFilter, setCategoryFilter] =
    useState<(typeof PROJECT_CATEGORIES)[number]>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<FeaturedProject | null>(null);

  const filteredProjects = useMemo(() => {
    return FEATURED_PROJECTS.filter((project) => {
      const matchesCat =
        categoryFilter === 'All' || project.category === categoryFilter;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [categoryFilter, searchQuery]);

  return (
    <section id="projects" className="bg-[#F8F7F4] py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#C24E0E]">
              Delivered Projects &amp; Establishments
            </p>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-[#0B1528] leading-tight">
              Proven execution across high-speed rail, corporate workspaces, and national retail.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Filter completed civil builds, corporate office fit-outs, retail hubs, and bespoke establishments from our 2026 corporate portfolio.
            </p>
          </div>

          <a
            href={ODPL_PROFILE_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0B1528] hover:bg-[#162744] rounded-md transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <FileText className="w-4 h-4 text-[#F47B34]" />
            Open Full 2026 Profile PDF
          </a>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 border border-slate-200 rounded-md">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-[#0B1528] text-white'
                    : 'text-slate-600 hover:text-[#0B1528]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search client, city, or project..."
              aria-label="Search ODPL projects"
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0B1528]"
            />
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-lg p-10 text-center space-y-2">
            <p className="text-sm font-medium text-[#0B1528]">
              No matching projects found
            </p>
            <p className="text-xs text-slate-500">
              Adjust your search keyword or reset the segment filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setCategoryFilter('All');
                setSearchQuery('');
              }}
              className="mt-2 inline-flex px-4 py-2 text-xs font-medium text-white bg-[#0B1528] rounded-md cursor-pointer"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between hover:border-[#EA6A20] transition-colors"
              >
                <div>
                  <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                    <ResilientImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      fallbackLabel={project.title}
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-medium text-[#C24E0E]">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-[var(--font-display)] text-xl font-semibold text-[#0B1528] leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <span className="font-[var(--font-mono)] tabular-nums text-xs font-semibold text-[#0B1528]">
                    {project.metric}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1528] hover:text-[#C24E0E] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Case study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Enterprise Client Roster Table */}
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-[#0B1528]">
                Our Enterprise Clients
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Trusted execution partner for national infrastructure, retail, and industrial leaders
              </p>
            </div>
            <span className="text-xs font-medium text-[#C24E0E]">
              7+ Marquee Enterprise Accounts
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                  <th className="py-3.5 px-6">Client Organization</th>
                  <th className="py-3.5 px-6">Industry Sector</th>
                  <th className="py-3.5 px-6">Delivered Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {CLIENT_ROSTER.map((client) => (
                  <tr key={client.name} className="hover:bg-slate-50/70">
                    <td className="py-4 px-6 font-semibold text-[#0B1528]">
                      {client.name}
                    </td>
                    <td className="py-4 px-6 text-slate-600">{client.sector}</td>
                    <td className="py-4 px-6 text-slate-700 font-medium">
                      {client.engagement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Project Case Study Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070F1E]/75 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100 relative">
              <ResilientImage
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
                fallbackLabel={activeProject.title}
              />
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project case study"
                className="absolute top-4 right-4 w-10 h-10 rounded-md bg-white/95 text-[#0B1528] hover:bg-white flex items-center justify-center shadow-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <p className="text-xs font-medium text-[#C24E0E]">
                  {activeProject.category} · {activeProject.client} · {activeProject.location}
                </p>
                <h3
                  id="project-modal-title"
                  className="font-[var(--font-display)] text-2xl font-semibold text-[#0B1528] mt-1"
                >
                  {activeProject.title}
                </h3>
              </div>

              <div className="bg-[#F8F7F4] border border-slate-200 rounded-md px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-slate-500">Project Scale / Contract</span>
                <span className="font-[var(--font-mono)] tabular-nums text-base font-semibold text-[#0B1528]">
                  {activeProject.metric}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {activeProject.summary}
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Execution &amp; Delivery Highlights
                </p>
                <ul className="space-y-2">
                  {activeProject.scopeDetails.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-[#EA6A20] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

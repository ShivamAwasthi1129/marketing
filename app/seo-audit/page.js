"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SEOAuditPage;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var navbar_main_1 = require("@/components/navbar-main");
var floating_social_bar_1 = require("@/components/floating-social-bar");
var protected_route_1 = require("@/components/protected-route");
var pagespeed_analyzer_1 = require("@/components/pagespeed-analyzer");
var card_1 = require("@/components/ui/card");
var badge_1 = require("@/components/ui/badge");
var button_1 = require("@/components/ui/button");
var pagespeed_api_1 = require("@/lib/pagespeed-api");
var lucide_react_1 = require("lucide-react");
function SEOAuditPage() {
    var _a = (0, react_1.useState)([]), audits = _a[0], setAudits = _a[1];
    var _b = (0, react_1.useState)(null), selectedAudit = _b[0], setSelectedAudit = _b[1];
    (0, react_1.useEffect)(function () {
        setAudits(pagespeed_api_1.pageSpeedStorage.getAudits());
    }, []);
    var handleAnalysisComplete = function (result) {
        setAudits(pagespeed_api_1.pageSpeedStorage.getAudits());
        setSelectedAudit(result);
    };
    var handleDeleteAudit = function (id) {
        pagespeed_api_1.pageSpeedStorage.deleteAudit(id);
        setAudits(pagespeed_api_1.pageSpeedStorage.getAudits());
        if ((selectedAudit === null || selectedAudit === void 0 ? void 0 : selectedAudit.id) === id) {
            setSelectedAudit(null);
        }
    };
    var getScoreColor = function (score) {
        if (score >= 90)
            return "bg-green-100 text-green-800";
        if (score >= 50)
            return "bg-yellow-100 text-yellow-800";
        return "bg-red-100 text-red-800";
    };
    return (<protected_route_1.ProtectedRoute>
      <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-100">
        <navbar_main_1.NavbarMain />
        <floating_social_bar_1.FloatingSocialBar />

        <main className="pt-16 pb-20 px-4">
          <div className="mx-auto max-w-7xl">
            <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10">
              <div className="overflow-hidden rounded-[2rem] border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/80 p-10 shadow-md dark:shadow-none shadow-black/30">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">SEO Audit</p>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">LeadAdsMedia Website Audit Center</h1>
                    <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                      Diagnose page speed, accessibility, SEO, and performance issues with the same audit workflow
                      used by growth teams.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 dark:bg-black/70 border border-yellow-500/10 p-6 text-center shadow-sm dark:shadow-none shadow-yellow-400/10">
                    <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">Insights</p>
                    <p className="text-4xl font-black text-slate-900 dark:text-white">Data-driven</p>
                    <p className="text-slate-400 mt-2">Turn audits into faster pages, better rankings, and more leads.</p>
                  </div>
                </div>
              </div>
            </framer_motion_1.motion.div>

            <div className="grid gap-8 lg:grid-cols-3">
              <framer_motion_1.motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="lg:col-span-2">
                <pagespeed_analyzer_1.PageSpeedAnalyzer onAnalysisComplete={handleAnalysisComplete}/>
              </framer_motion_1.motion.div>

              <framer_motion_1.motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <card_1.Card className="rounded-[2rem] border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/95 shadow-md dark:shadow-none shadow-slate-100">
                  <card_1.CardHeader>
                    <card_1.CardTitle className="text-slate-900 dark:text-white">Recent Audits</card_1.CardTitle>
                    <card_1.CardDescription className="text-slate-400">
                      {audits.length} audit{audits.length !== 1 ? "s" : ""} performed
                    </card_1.CardDescription>
                  </card_1.CardHeader>
                  <card_1.CardContent>
                    {audits.length > 0 ? (<div className="space-y-3">
                        {audits
                .slice(-10)
                .reverse()
                .map(function (audit) { return (<div key={audit.id} className="rounded-3xl border border-yellow-500/10 bg-slate-50 dark:bg-black/70 p-3 shadow-sm transition hover:shadow-md cursor-pointer" onClick={function () { return setSelectedAudit(audit); }}>
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-sm truncate text-slate-900 dark:text-white">{audit.domain}</h4>
                                <badge_1.Badge className={getScoreColor(audit.overallScore)}>{audit.overallScore}</badge_1.Badge>
                              </div>
                              <div className="flex items-center justify-between text-xs text-slate-400">
                                <span className="flex items-center gap-1">
                                  <lucide_react_1.Clock className="w-3 h-3"/>
                                  {new Date(audit.timestamp).toLocaleDateString()}
                                </span>
                                <div className="flex gap-2">
                                  <button_1.Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-slate-600 dark:text-slate-300" onClick={function (e) {
                    e.stopPropagation();
                    setSelectedAudit(audit);
                }}>
                                    <lucide_react_1.Eye className="w-3 h-3"/>
                                  </button_1.Button>
                                  <button_1.Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-red-500 hover:text-red-400" onClick={function (e) {
                    e.stopPropagation();
                    handleDeleteAudit(audit.id);
                }}>
                                    <lucide_react_1.Trash2 className="w-3 h-3"/>
                                  </button_1.Button>
                                </div>
                              </div>
                            </div>); })}
                      </div>) : (<div className="text-center py-8">
                        <lucide_react_1.Search className="w-12 h-12 text-slate-400 mx-auto mb-4"/>
                        <p className="text-slate-600 dark:text-slate-300">No audits yet</p>
                        <p className="text-sm text-slate-400">Run your first audit to get started</p>
                      </div>)}
                  </card_1.CardContent>
                </card_1.Card>
              </framer_motion_1.motion.div>
            </div>

            {selectedAudit && (<framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-8">
                <card_1.Card className="rounded-[2rem] border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/95 shadow-md dark:shadow-none shadow-slate-100">
                  <card_1.CardHeader>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <card_1.CardTitle className="text-slate-900 dark:text-white">Detailed Analysis: {selectedAudit.domain}</card_1.CardTitle>
                        <card_1.CardDescription className="text-slate-400">
                          Analyzed on {new Date(selectedAudit.timestamp).toLocaleString()}
                        </card_1.CardDescription>
                      </div>
                      <button_1.Button variant="outline" className="flex items-center gap-2 bg-transparent text-slate-100 border-slate-700 hover:border-yellow-500/20">
                        <lucide_react_1.Download className="w-4 h-4"/>
                        Export Report
                      </button_1.Button>
                    </div>
                  </card_1.CardHeader>
                  <card_1.CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                      {[
                { label: "Performance", value: selectedAudit.metrics.performance },
                { label: "Accessibility", value: selectedAudit.metrics.accessibility },
                { label: "Best Practices", value: selectedAudit.metrics.bestPractices },
                { label: "SEO", value: selectedAudit.metrics.seo },
                { label: "PWA", value: selectedAudit.metrics.pwa },
            ].map(function (metric) {
                var value = metric.value;
                var statusClass = value >= 90 ? "bg-green-500" : value >= 50 ? "bg-yellow-500" : "bg-red-500";
                return (<div key={metric.label} className="text-center p-4 border rounded-lg bg-slate-50 dark:bg-black/70">
                            <div className={"w-16 h-16 mx-auto rounded-full flex items-center justify-center text-slate-900 dark:text-white font-bold ".concat(statusClass)}>
                              {value}
                            </div>
                            <p className="text-sm font-medium mt-2 text-slate-700 dark:text-slate-200">{metric.label}</p>
                          </div>);
            })}
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Core Web Vitals</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-3xl border border-yellow-500/10 bg-slate-50 dark:bg-black/70 p-4">
                          <p className="text-sm text-slate-400 mb-1">Largest Contentful Paint</p>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">{(selectedAudit.coreWebVitals.lcp / 1000).toFixed(2)}s</p>
                          <p className="text-xs text-slate-400">Good: ≤ 2.5s</p>
                        </div>
                        <div className="rounded-3xl border border-yellow-500/10 bg-slate-50 dark:bg-black/70 p-4">
                          <p className="text-sm text-slate-400 mb-1">First Input Delay</p>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">{selectedAudit.coreWebVitals.fid.toFixed(0)}ms</p>
                          <p className="text-xs text-slate-400">Good: ≤ 100ms</p>
                        </div>
                        <div className="rounded-3xl border border-yellow-500/10 bg-slate-50 dark:bg-black/70 p-4">
                          <p className="text-sm text-slate-400 mb-1">Cumulative Layout Shift</p>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">{selectedAudit.coreWebVitals.cls.toFixed(3)}</p>
                          <p className="text-xs text-slate-400">Good: ≤ 0.1</p>
                        </div>
                      </div>
                    </div>

                    {selectedAudit.screenshot && (<div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Website Screenshot</h3>
                        <div className="rounded-3xl border border-yellow-500/10 bg-slate-50 dark:bg-black/70 p-4">
                          <img src={selectedAudit.screenshot || "/placeholder.svg"} alt={"Screenshot of ".concat(selectedAudit.domain)} className="w-full max-w-md mx-auto rounded-3xl border border-slate-800 shadow-sm"/>
                        </div>
                      </div>)}
                  </card_1.CardContent>
                </card_1.Card>
              </framer_motion_1.motion.div>)}
          </div>
        </main>
      </div>
    </protected_route_1.ProtectedRoute>);
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { NavbarMain } from "@/components/navbar-main"
import { FloatingSocialBar } from "@/components/floating-social-bar"
import { ProtectedRoute } from "@/components/protected-route"
import { PageSpeedAnalyzer } from "@/components/pagespeed-analyzer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { type PageSpeedResult, pageSpeedStorage } from "@/lib/pagespeed-api"
import { Search, Clock, Trash2, Eye, Download } from "lucide-react"

export default function SEOAuditPage() {
  const [audits, setAudits] = useState<PageSpeedResult[]>([])
  const [selectedAudit, setSelectedAudit] = useState<PageSpeedResult | null>(null)

  useEffect(() => {
    setAudits(pageSpeedStorage.getAudits())
  }, [])

  const handleAnalysisComplete = (result: PageSpeedResult) => {
    setAudits(pageSpeedStorage.getAudits())
    setSelectedAudit(result)
  }

  const handleDeleteAudit = (id: string) => {
    pageSpeedStorage.deleteAudit(id)
    setAudits(pageSpeedStorage.getAudits())
    if (selectedAudit?.id === id) {
      setSelectedAudit(null)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-100 text-green-800"
    if (score >= 50) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-100">
        <NavbarMain />
        {/* <FloatingSocialBar /> */}

        <main className="pt-16 pb-20 px-4">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <div className="overflow-hidden rounded-[2rem] border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/80 p-10 shadow-md dark:shadow-none shadow-black/30">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">SEO Audit</p>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">Clixnova Media Website Audit Center</h1>
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
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <PageSpeedAnalyzer onAnalysisComplete={handleAnalysisComplete} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="rounded-[2rem] border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/95 shadow-md dark:shadow-none shadow-slate-100">
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-white">Recent Audits</CardTitle>
                    <CardDescription className="text-slate-400">
                      {audits.length} audit{audits.length !== 1 ? "s" : ""} performed
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {audits.length > 0 ? (
                      <div className="space-y-3">
                        {audits
                          .slice(-10)
                          .reverse()
                          .map((audit) => (
                            <div
                              key={audit.id}
                              className="rounded-3xl border border-yellow-500/10 bg-slate-50 dark:bg-black/70 p-3 shadow-sm transition hover:shadow-md cursor-pointer"
                              onClick={() => setSelectedAudit(audit)}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-sm truncate text-slate-900 dark:text-white">{audit.domain}</h4>
                                <Badge className={getScoreColor(audit.overallScore)}>{audit.overallScore}</Badge>
                              </div>
                              <div className="flex items-center justify-between text-xs text-slate-400">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {new Date(audit.timestamp).toLocaleDateString()}
                                </span>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="h-6 w-6 p-0 text-slate-600 dark:text-slate-300"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      setSelectedAudit(audit)
                                    }}
                                  >
                                    <Eye className="w-3 h-3" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="h-6 w-6 p-0 text-red-500 hover:text-red-400"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      handleDeleteAudit(audit.id)
                                    }}
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-slate-600 dark:text-slate-300">No audits yet</p>
                        <p className="text-sm text-slate-400">Run your first audit to get started</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {selectedAudit && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <Card className="rounded-[2rem] border border-yellow-500/10 bg-white dark:bg-[#0a0a0a]/95 shadow-md dark:shadow-none shadow-slate-100">
                  <CardHeader>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-slate-900 dark:text-white">Detailed Analysis: {selectedAudit.domain}</CardTitle>
                        <CardDescription className="text-slate-400">
                          Analyzed on {new Date(selectedAudit.timestamp).toLocaleString()}
                        </CardDescription>
                      </div>
                      <Button variant="outline" className="flex items-center gap-2 bg-transparent text-slate-100 border-slate-700 hover:border-yellow-500/20">
                        <Download className="w-4 h-4" />
                        Export Report
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                      {[
                        { label: "Performance", value: selectedAudit.metrics.performance },
                        { label: "Accessibility", value: selectedAudit.metrics.accessibility },
                        { label: "Best Practices", value: selectedAudit.metrics.bestPractices },
                        { label: "SEO", value: selectedAudit.metrics.seo },
                        { label: "PWA", value: selectedAudit.metrics.pwa },
                      ].map((metric) => {
                        const value = metric.value
                        const statusClass =
                          value >= 90 ? "bg-green-500" : value >= 50 ? "bg-yellow-500" : "bg-red-500"
                        return (
                          <div key={metric.label} className="text-center p-4 border rounded-lg bg-slate-50 dark:bg-black/70">
                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-slate-900 dark:text-white font-bold ${statusClass}`}>
                              {value}
                            </div>
                            <p className="text-sm font-medium mt-2 text-slate-700 dark:text-slate-200">{metric.label}</p>
                          </div>
                        )
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

                    {selectedAudit.screenshot && (
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Website Screenshot</h3>
                        <div className="rounded-3xl border border-yellow-500/10 bg-slate-50 dark:bg-black/70 p-4">
                          <img
                            src={selectedAudit.screenshot || "/placeholder.svg"}
                            alt={`Screenshot of ${selectedAudit.domain}`}
                            className="w-full max-w-md mx-auto rounded-3xl border border-slate-800 shadow-sm"
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}

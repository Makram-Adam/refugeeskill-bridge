import { createFileRoute } from "@tanstack/react-router";
import { AnalyzerPage } from "@/components/bridge/workspace-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/analyzer")({ head: () => metadata("AI Skills Analyzer", "Explore an illustrative professional skills analysis."), component: AnalyzerPage });

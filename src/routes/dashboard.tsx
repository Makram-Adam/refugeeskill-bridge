import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/bridge/workspace-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/dashboard")({ head: () => metadata("Dashboard", "Your professional journey, skills and learning opportunities."), component: DashboardPage });

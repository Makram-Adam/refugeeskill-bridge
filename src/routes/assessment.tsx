import { createFileRoute } from "@tanstack/react-router";
import { AssessmentPage } from "@/components/bridge/workspace-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/assessment")({ head: () => metadata("Skills Assessment", "Reflect on your professional strengths. Not an accredited assessment."), component: AssessmentPage });

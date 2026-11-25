import { createFileRoute } from "@tanstack/react-router";
import { LearningPage } from "@/components/bridge/workspace-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/learning")({ head: () => metadata("Learning Pathways", "Discover illustrative opportunities to build on your skills."), component: LearningPage });

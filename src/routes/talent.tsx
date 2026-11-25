import { createFileRoute } from "@tanstack/react-router";
import { TalentPage } from "@/components/bridge/workspace-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/talent")({ head: () => metadata("Talent Directory", "Explore illustrative professional talent profiles."), component: TalentPage });

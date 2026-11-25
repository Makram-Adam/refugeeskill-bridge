import { createFileRoute } from "@tanstack/react-router";
import { HowPage } from "@/components/bridge/public-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/how-it-works")({ head: () => metadata("How It Works", "Four steps from professional experience to new opportunity."), component: HowPage });

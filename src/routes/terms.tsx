import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/bridge/public-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/terms")({ head: () => metadata("Terms of Use", "Terms and limitations for the RefugeeSkill Bridge foundation."), component: () => <InfoPage kind="terms"/> });

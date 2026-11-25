import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/bridge/public-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/privacy")({ head: () => metadata("Privacy Policy", "Privacy and responsible handling of professional information."), component: () => <InfoPage kind="privacy"/> });

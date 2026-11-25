import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/bridge/public-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/about")({ head: () => metadata("About Us", "A mission to recognize displaced talent and connect professionals with opportunity."), component: () => <InfoPage kind="about"/> });

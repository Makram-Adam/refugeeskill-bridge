import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/bridge/public-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/contact")({ head: () => metadata("Contact", "Connect with the RefugeeSkill Bridge mission."), component: () => <InfoPage kind="contact"/> });

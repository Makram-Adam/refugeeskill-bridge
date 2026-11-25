import { createFileRoute } from "@tanstack/react-router";
import { PassportPage } from "@/components/bridge/workspace-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/passport")({ head: () => metadata("Digital Skills Passport", "Bring your self-reported experience and skills together."), component: PassportPage });

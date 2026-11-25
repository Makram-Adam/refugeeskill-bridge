import { createFileRoute } from "@tanstack/react-router";
import { ProfilePage } from "@/components/bridge/workspace-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/profile")({ head: () => metadata("My Profile", "Document your professional experience and strengths."), component: ProfilePage });

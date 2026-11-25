import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/bridge/workspace-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/admin")({ head: () => metadata("Admin Preview", "Public demonstration of platform activity, without private user data."), component: AdminPage });

import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/components/bridge/public-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/login")({ head: () => metadata("Log in", "Return to your professional journey with RefugeeSkill Bridge."), component: LoginPage });

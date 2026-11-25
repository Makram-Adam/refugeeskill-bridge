import { createFileRoute } from "@tanstack/react-router";
import { RegisterPage } from "@/components/bridge/public-pages";
import { metadata } from "@/components/bridge/data";
export const Route = createFileRoute("/register")({ head: () => metadata("Get Started", "Join a community of professionals, employers and mentors."), component: RegisterPage });

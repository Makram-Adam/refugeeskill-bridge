import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/bridge/home";
import { metadata } from "@/components/bridge/data";

// The home route ships no og:image, so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => metadata("Home", "Turning Displaced Talent into Recognized Opportunity. Make your experience visible, grow your skills and connect with opportunities."),
  component: HomePage,
});

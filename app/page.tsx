// Redirect to landing page - the new landing page is now at /landing
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/landing");
}

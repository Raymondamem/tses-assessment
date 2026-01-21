"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to courses page as the default dashboard view
    router.push("/dashboard/courses");
  }, [router]);

  return null;
}

import React from "react";
import { useRouter } from "next/navigation";

const router = useRouter();

export default function Home() {
  router.push("/login");
  return <div>Redirecting...</div>;
}

"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return user ? children : null;
}

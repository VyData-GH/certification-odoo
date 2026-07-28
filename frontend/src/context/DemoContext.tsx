"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import {
  enterDemoMode,
  exitDemoMode,
  isDemoMode,
} from "@/lib/demo";
import { useAuth } from "@/context/AuthContext";

interface DemoContextValue {
  isDemo: boolean;
  ready: boolean;
  enterDemo: () => void;
  exitDemo: () => void;
}

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const { user, emailVerified } = useAuth();
  const router = useRouter();
  const [isDemo, setIsDemo] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const demo = isDemoMode();
    // Real signed-in users leave demo automatically
    if (user && emailVerified && demo) {
      exitDemoMode();
      setIsDemo(false);
    } else {
      setIsDemo(demo);
    }
    setReady(true);
  }, [user, emailVerified]);

  const enterDemo = useCallback(() => {
    enterDemoMode();
    setIsDemo(true);
    router.replace("/");
  }, [router]);

  const exitDemo = useCallback(() => {
    exitDemoMode();
    setIsDemo(false);
    router.replace("/auth");
  }, [router]);

  return (
    <DemoContext.Provider value={{ isDemo, ready, enterDemo, exitDemo }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo(): DemoContextValue {
  const ctx = useContext(DemoContext);
  if (!ctx) {
    throw new Error("useDemo must be used within DemoProvider");
  }
  return ctx;
}

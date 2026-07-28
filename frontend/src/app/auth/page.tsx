"use client";

import { FormEvent, useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { useAuth } from "@/context/AuthContext";
import { useDemo } from "@/context/DemoContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  formatAuthError,
  isEmailNotVerifiedError,
} from "@/lib/auth";

function AuthForm() {
  const { tr } = useLanguage();
  const {
    signIn,
    signUp,
    resendVerificationEmail,
    signOut,
    configured,
    user,
    emailVerified,
    isApproved,
    accessStatus,
    accessLoading,
    refreshAccess,
  } = useAuth();
  const { enterDemo, isDemo } = useDemo();
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/";

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [pendingVerificationEmail, setPendingVerificationEmail] = useState<
    string | null
  >(null);
  const [resendLoading, setResendLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (user && emailVerified && isApproved) {
      router.replace(nextPath);
    } else if (isDemo) {
      router.replace("/");
    }
  }, [user, emailVerified, isApproved, router, nextPath, isDemo]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setInfo("");
    setLoading(true);
    try {
      if (mode === "signin") {
        await signIn(email, password);
      } else {
        const { needsEmailVerification } = await signUp(email, password);
        if (needsEmailVerification) {
          setPendingVerificationEmail(email);
          setInfo(tr.auth.verifyEmailSent.replace("{email}", email));
          setMode("signin");
          setPassword("");
        } else {
          setInfo(tr.auth.signupPendingInfo);
        }
      }
    } catch (err) {
      if (isEmailNotVerifiedError(err)) {
        setPendingVerificationEmail(email);
      }
      setError(formatAuthError(err, tr.auth));
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    const target = pendingVerificationEmail || email;
    if (!target) return;
    setResendLoading(true);
    setError("");
    try {
      await resendVerificationEmail(target);
      setInfo(tr.auth.verifyEmailResentInfo.replace("{email}", target));
    } catch (err) {
      setError(formatAuthError(err, tr.auth));
    } finally {
      setResendLoading(false);
    }
  };

  const handleRefreshAccess = async () => {
    setRefreshing(true);
    await refreshAccess();
    setRefreshing(false);
  };

  if (pendingVerificationEmail) {
    return (
      <div className="min-h-screen bg-odoo-bg flex flex-col">
        <header className="odoo-navbar">
          <div className="max-w-6xl mx-auto px-4 h-11 flex items-center justify-center">
            <a
              href="https://virtuocode.ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Virtuocode"
            >
              <Image
                src="/brand/logo.webp"
                alt="Virtuocode"
                width={140}
                height={36}
                className="h-7 w-auto brand-logo-light"
                priority
              />
            </a>
          </div>
        </header>

        <main className="flex-1 max-w-md mx-auto w-full px-4 py-10">
          <div className="odoo-card p-6 space-y-4 text-center">
            <div className="text-4xl" aria-hidden>
              ✉️
            </div>
            <h1 className="text-xl font-normal text-odoo-text">
              {tr.auth.verifyEmailTitle}
            </h1>
            <p className="text-sm text-odoo-text-muted">
              {tr.auth.verifyEmailBody.replace(
                "{email}",
                pendingVerificationEmail
              )}
            </p>
            <p className="text-sm text-odoo-text-muted">
              {tr.auth.signupPendingInfo}
            </p>
            {info && (
              <p className="text-sm text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-sm">
                {info}
              </p>
            )}
            {error && <p className="text-sm text-odoo-danger">{error}</p>}
            <button
              type="button"
              onClick={handleResend}
              disabled={resendLoading}
              className="odoo-btn-secondary w-full disabled:opacity-50"
            >
              {tr.auth.verifyEmailResent}
            </button>
            <button
              type="button"
              onClick={() => {
                setPendingVerificationEmail(null);
                setMode("signin");
              }}
              className="text-sm text-odoo-brand underline"
            >
              {tr.auth.verifyEmailBackToSignIn}
            </button>
          </div>
        </main>

        <SiteFooter />
      </div>
    );
  }

  if (user && emailVerified && !accessLoading && !isApproved) {
    const rejected = accessStatus === "rejected";
    return (
      <div className="min-h-screen bg-odoo-bg flex flex-col">
        <header className="odoo-navbar">
          <div className="max-w-6xl mx-auto px-4 h-11 flex items-center justify-center">
            <a
              href="https://virtuocode.ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Virtuocode"
            >
              <Image
                src="/brand/logo.webp"
                alt="Virtuocode"
                width={140}
                height={36}
                className="h-7 w-auto brand-logo-light"
                priority
              />
            </a>
          </div>
        </header>

        <main className="flex-1 max-w-md mx-auto w-full px-4 py-10 space-y-4">
          <div className="odoo-card p-6 space-y-4 text-center">
            <h1 className="text-xl font-normal text-odoo-text">
              {rejected ? tr.auth.rejectedTitle : tr.auth.pendingTitle}
            </h1>
            <p className="text-sm text-odoo-text-muted">
              {rejected ? tr.auth.rejectedBody : tr.auth.pendingBody}
            </p>
            {!rejected && (
              <button
                type="button"
                onClick={() => void handleRefreshAccess()}
                disabled={refreshing}
                className="odoo-btn-secondary w-full disabled:opacity-50"
              >
                {tr.auth.pendingRefresh}
              </button>
            )}
            <button
              type="button"
              onClick={() => void signOut()}
              className="text-sm text-odoo-brand underline"
            >
              {tr.nav.logout}
            </button>
          </div>
          <div className="odoo-card p-5 space-y-3">
            <h2 className="text-base font-medium text-odoo-text">
              {tr.demo.loginTitle}
            </h2>
            <p className="text-sm text-odoo-text-muted">{tr.demo.loginBody}</p>
            <button
              type="button"
              onClick={enterDemo}
              className="odoo-btn-secondary w-full"
            >
              {tr.demo.enter}
            </button>
          </div>
        </main>

        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-odoo-bg flex flex-col">
      <header className="odoo-navbar">
        <div className="max-w-6xl mx-auto px-4 h-11 flex items-center justify-center">
          <a
            href="https://virtuocode.ai/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Virtuocode"
          >
            <Image
              src="/brand/logo.webp"
              alt="Virtuocode"
              width={140}
              height={36}
              className="h-7 w-auto brand-logo-light"
              priority
            />
          </a>
        </div>
      </header>

      <main className="flex-1 max-w-md mx-auto w-full px-4 py-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-normal text-odoo-text">{tr.auth.title}</h1>
          <p className="text-sm text-odoo-text-muted mt-2">{tr.auth.loginRequired}</p>
        </div>

        {!configured ? (
          <div className="odoo-card p-6 text-sm text-odoo-text-muted">
            {tr.auth.notConfigured}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="odoo-card p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-odoo-text mb-1">
                {tr.auth.email}
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-odoo-text mb-1">
                {tr.auth.password}
              </label>
              <input
                type="password"
                required
                minLength={6}
                autoComplete={
                  mode === "signin" ? "current-password" : "new-password"
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm"
              />
            </div>
            {info && (
              <p className="text-sm text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-sm">
                {info}
              </p>
            )}
            {error && <p className="text-sm text-odoo-danger">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="odoo-btn-primary w-full disabled:opacity-50"
            >
              {mode === "signin" ? tr.auth.signIn : tr.auth.signUp}
            </button>
            <p className="text-sm text-center text-odoo-text-muted">
              {mode === "signin" ? tr.auth.noAccount : tr.auth.hasAccount}{" "}
              <button
                type="button"
                onClick={() => {
                  setMode(mode === "signin" ? "signup" : "signin");
                  setError("");
                  setInfo("");
                }}
                className="text-odoo-brand underline"
              >
                {mode === "signin" ? tr.auth.signUp : tr.auth.signIn}
              </button>
            </p>
          </form>
        )}

        <div className="mt-6 odoo-card p-5 space-y-3">
          <h2 className="text-base font-medium text-odoo-text">
            {tr.demo.loginTitle}
          </h2>
          <p className="text-sm text-odoo-text-muted">{tr.demo.loginBody}</p>
          <button
            type="button"
            onClick={enterDemo}
            className="odoo-btn-secondary w-full"
          >
            {tr.demo.enter}
          </button>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-odoo-bg text-sm text-odoo-text-muted">
          …
        </div>
      }
    >
      <AuthForm />
    </Suspense>
  );
}

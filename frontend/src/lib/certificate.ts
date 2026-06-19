import { jsPDF } from "jspdf";
import { CertificationTrack } from "@/lib/history-utils";

const ODOO_PURPLE = "#714b67";
const NAME_COLOR = "#282f33";
const FONT_PATH = "/fonts/AlexBrush-Regular.ttf";
const FONT_VFS = "AlexBrush-Regular.ttf";
const FONT_FAMILY = "AlexBrush";

export interface CertificateData {
  recipientName: string;
  track: CertificationTrack;
  passDate: Date;
  certificationNumber: string;
  locale: "en" | "fr";
}

let fontBase64: string | null = null;
let fontLoadPromise: Promise<void> | null = null;

/** Odoo survey certs use Alex Brush (certification-cursive) for the recipient name. */
export function preloadCertificateFont(): Promise<void> {
  if (fontBase64) return Promise.resolve();
  if (fontLoadPromise) return fontLoadPromise;

  fontLoadPromise = (async () => {
    const res = await fetch(FONT_PATH);
    if (!res.ok) throw new Error("Certificate font failed to load");
    const bytes = new Uint8Array(await res.arrayBuffer());
    let binary = "";
    const chunk = 0x8000;
    for (let i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
    }
    fontBase64 = btoa(binary);
  })();

  return fontLoadPromise;
}

function registerCursiveFont(doc: jsPDF): void {
  if (!fontBase64) {
    throw new Error("Certificate font not loaded");
  }
  doc.addFileToVFS(FONT_VFS, fontBase64);
  doc.addFont(FONT_VFS, FONT_FAMILY, "normal");
}

function trackTitle(track: CertificationTrack, locale: "en" | "fr"): string {
  if (track === "sample-test") {
    return locale === "fr"
      ? "ODOO FUNCTIONAL CERTIFICATION - SAMPLE"
      : "ODOO FUNCTIONAL CERTIFICATION - SAMPLE";
  }
  return locale === "fr"
    ? "ODOO FUNCTIONAL CERTIFICATION - MOCK EXAM"
    : "ODOO FUNCTIONAL CERTIFICATION - MOCK EXAM";
}

function formatCertDate(date: Date, locale: "en" | "fr"): string {
  return date.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function drawRecipientName(doc: jsPDF, name: string, centerX: number, y: number) {
  registerCursiveFont(doc);
  doc.setFont(FONT_FAMILY, "normal");
  doc.setFontSize(42);
  doc.setTextColor(NAME_COLOR);

  const textWidth = doc.getTextWidth(name);
  doc.text(name, centerX, y, { align: "center" });

  const lineY = y + 2.5;
  doc.setDrawColor(40, 47, 51);
  doc.setLineWidth(0.35);
  doc.line(centerX - textWidth / 2, lineY, centerX + textWidth / 2, lineY);
}

export async function downloadCertificatePdf(
  data: CertificateData
): Promise<void> {
  await preloadCertificateFont();

  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();
  const isFr = data.locale === "fr";

  doc.setFillColor(ODOO_PURPLE);
  doc.rect(0, 0, w, 28, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("CERTIFICAT", 20, 18);
  doc.setFontSize(16);
  doc.text(
    isFr ? "CERTIFICAT DE RÉUSSITE" : "CERTIFICATE OF ACHIEVEMENT",
    w / 2 + 10,
    18
  );

  doc.setTextColor(107, 109, 112);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.text(
    isFr
      ? "Ce certificat est présenté à"
      : "This certificate is presented to",
    w / 2,
    50,
    { align: "center" }
  );

  drawRecipientName(doc, data.recipientName, w / 2, 72);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(33, 37, 41);
  doc.text(
    isFr
      ? "pour avoir réussi le simulateur d'entraînement"
      : "for successfully completing the training simulator",
    w / 2,
    88,
    { align: "center" }
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(trackTitle(data.track, data.locale), w / 2, 102, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(108, 117, 125);
  doc.text(
    isFr
      ? "(simulateur — non émis par Odoo S.A.)"
      : "(training simulator — not issued by Odoo S.A.)",
    w / 2,
    112,
    { align: "center" }
  );

  doc.setTextColor(33, 37, 41);
  doc.setFontSize(10);
  doc.text(isFr ? "DATE" : "DATE", w / 2, 124, { align: "center" });
  doc.setFontSize(12);
  doc.text(formatCertDate(data.passDate, data.locale), w / 2, 130, {
    align: "center",
  });

  doc.setFontSize(11);
  doc.text(
    `${isFr ? "Certification n°" : "Certification #"}${data.certificationNumber}`,
    w / 2,
    148,
    { align: "center" }
  );

  doc.setDrawColor(204, 204, 204);
  doc.rect(12, 32, w - 24, h - 44);

  const filename =
    data.track === "sample-test"
      ? `odoo-sample-cert-${data.certificationNumber}.pdf`
      : `odoo-mock-exam-cert-${data.certificationNumber}.pdf`;

  doc.save(filename);
}

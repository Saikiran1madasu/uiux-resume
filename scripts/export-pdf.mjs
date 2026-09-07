import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "index.html");

async function exportPdfs() {
  const browser = await chromium.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  const page = await browser.newPage({
    viewport: { width: 794, height: 1123 }, // Exact A4 96dpi pixel ratio
    deviceScaleFactor: 2,
  });

  await page.goto(`file://${indexPath}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);

  // Set print media emulation so @media print takes effect
  await page.emulateMedia({ media: "print" });

  // 1. Designed Resume (Default view)
  await page.evaluate(() => window.switchView('designed'));
  await page.waitForTimeout(400);
  
  const designedPdfPath = path.join(root, "Madasu_Sai_Kiran_Designed_Resume.pdf");
  const uiuxResumePdfPath = path.join(root, "uiux_resume.pdf");

  await page.pdf({
    path: designedPdfPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" },
  });

  fs.copyFileSync(designedPdfPath, uiuxResumePdfPath);
  console.log("Exported Designed Resume PDF to:", designedPdfPath, "and", uiuxResumePdfPath);

  // 2. ATS Resume
  await page.evaluate(() => window.switchView('ats'));
  await page.waitForTimeout(400);
  const atsPdfPath = path.join(root, "Madasu_Sai_Kiran_ATS_Resume.pdf");
  await page.pdf({
    path: atsPdfPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" },
  });
  console.log("Exported ATS Resume PDF to:", atsPdfPath);

  // 3. Cover Letter (Concise)
  await page.evaluate(() => {
    window.switchView('cover-letter');
    window.switchCoverLetterVariant('concise');
  });
  await page.waitForTimeout(400);
  const coverPdfPath = path.join(root, "Madasu_Sai_Kiran_Cover_Letter.pdf");
  await page.pdf({
    path: coverPdfPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" },
  });
  console.log("Exported Cover Letter PDF to:", coverPdfPath);

  await browser.close();
}

exportPdfs().catch((err) => {
  console.error(err);
  process.exit(1);
});

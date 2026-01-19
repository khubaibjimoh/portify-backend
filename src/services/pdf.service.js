import puppeteer from "puppeteer";
import fs from "fs";
import Handlebars from "handlebars";

export const generatePDF = async (content) => {
  const templateHtml = fs.readFileSync("templates/cvTemplate.html", "utf8");
  const template = Handlebars.compile(templateHtml);
  const html = template(content);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html);
  const buffer = await page.pdf({ format: "A4" });

  await browser.close();
  return buffer;
};

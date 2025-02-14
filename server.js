const express = require("express");
const fs = require("fs");
const PDFDocument = require("pdfkit");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/download-pdf", (req, res) => {
    const doc = new PDFDocument();
    const filename = "sample.pdf";

    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", "application/pdf");

    doc.pipe(res);
    doc.fontSize(25).text("Hello, this is a sample PDF!", 100, 100);
    doc.end();
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

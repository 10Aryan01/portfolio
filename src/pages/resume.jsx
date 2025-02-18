import React from 'react';
import pdf from "../images/Sudarshan.pdf";

function Resume() {
  return (
    <object data={pdf} type="application/pdf" width="100%" height="1000px">
      <p>Your browser does not support PDFs. <a href={pdf}>Download PDF</a></p>
    </object>
  );
}

export default Resume;

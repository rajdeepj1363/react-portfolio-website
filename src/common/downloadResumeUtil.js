export const downloadResumeUtil = () => {
  const URL = "/docs/resume.pdf";
  const aTag = document.createElement("a");
  aTag.href = URL;
  aTag.download = "Rajdeep Jadhav Resume.pdf";
  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
};

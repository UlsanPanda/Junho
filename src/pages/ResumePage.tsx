const RESUME_PDF = "/resume.pdf";

export function ResumePage() {
  return (
    <article className="page resume-page">
      <header className="page__header">
        <h1 className="page__title">Resume</h1>
      </header>
      <div className="resume-page__content">
        <iframe
          title="Resume"
          src={RESUME_PDF}
          className="resume-page__embed"
        />
        <p className="resume-page__fallback">
          <a href={RESUME_PDF} target="_blank" rel="noopener noreferrer">
            Open resume in a new tab
          </a>
          {" "}if it doesn’t display above.
        </p>
      </div>
    </article>
  );
}

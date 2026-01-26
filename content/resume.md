---
title: Resume
---

<style>
  .resume-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 100%;
  }
  .resume-frame {
    border: 1px solid var(--lightgray);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    background: white;
  }
  .resume-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 0;
  }
  .resume-actions a {
    text-decoration: none;
  }
</style>

<div class="resume-container">
  <div class="resume-frame">
    <iframe src="/static/resume.pdf" width="100%" height="900px" style="border: none; display: block;"></iframe>
  </div>
  
  <div class="resume-actions">
    <a class="btn primary" href="/static/resume.pdf" download>⬇ Download PDF</a>
  </div>
</div>

const header = document.querySelector(".site-header");
const quoteForm = document.querySelector("#quoteForm");

function updateHeader() {
  if (!header) return;
  header.dataset.elevated = window.scrollY > 24 ? "true" : "false";
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const name = (data.get("name") || "").trim();
  const contact = (data.get("contact") || "").trim();
  const service = (data.get("service") || "General quote request").trim();
  const details = (data.get("details") || "").trim();

  const subject = encodeURIComponent(`Quote request: ${service}`);
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Best contact: ${contact}`,
      `Service needed: ${service}`,
      "",
      "Job details:",
      details,
      "",
      "Photos can be attached to this email or sent by text to 385-338-1322."
    ].join("\n")
  );

  window.location.href = `mailto:helpinghandsolutions2026@gmail.com?subject=${subject}&body=${body}`;
});

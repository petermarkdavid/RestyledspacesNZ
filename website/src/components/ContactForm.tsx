import { useState } from "react";

const serviceOptions = [
  { value: "", label: "Select a service" },
  { value: "staging-sell", label: "Home staging / styling to sell" },
  { value: "restyling-stay", label: "Restyling to stay" },
  { value: "declutter", label: "Decluttering guidance" },
  { value: "renovator", label: "Interiors advice for renovators" },
  { value: "online", label: "Online consultation" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      clientType: fd.get("clientType") === "agent" ? "agent" : "homeowner",
      location: fd.get("location") === "online" ? "online" : "wellington",
      serviceType: String(fd.get("serviceType") ?? ""),
      scope: String(fd.get("scope") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="card-tonal rounded-2xl p-8" role="status">
        <p className="font-heading text-lg font-semibold text-brand">Thanks — your message is on its way.</p>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll get back to you shortly. If you need to add photos, reply to our email and attach them
          there.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <fieldset
        aria-labelledby="contact-section-contact"
        className="card-tonal min-w-0 space-y-4 rounded-2xl border-0 p-6"
      >
        <h3 id="contact-section-contact" className="font-heading text-sm font-semibold text-brand">
          01 — Contact details
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-ink">
            Full name
            <input
              name="name"
              required
              autoComplete="name"
              className="input-ghost mt-1 w-full rounded-lg px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="input-ghost mt-1 w-full rounded-lg px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
            />
          </label>
          <label className="block text-sm font-medium text-ink sm:col-span-2">
            Phone (optional)
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              className="input-ghost mt-1 w-full rounded-lg px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
            />
          </label>
        </div>
      </fieldset>

      <fieldset
        aria-labelledby="contact-section-project"
        className="card-tonal min-w-0 space-y-4 rounded-2xl border-0 p-6"
      >
        <h3 id="contact-section-project" className="font-heading text-sm font-semibold text-brand">
          02 — Project details
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-ink">Client type</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <label className="inline-flex items-center gap-2 rounded-full bg-chip px-3 py-1 text-sm text-ink">
                <input type="radio" name="clientType" value="homeowner" defaultChecked className="text-brand" />
                Homeowner
              </label>
              <label className="inline-flex items-center gap-2 rounded-full bg-chip px-3 py-1 text-sm text-ink">
                <input type="radio" name="clientType" value="agent" className="text-brand" />
                Real estate agent
              </label>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-ink">Location</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <label className="inline-flex items-center gap-2 rounded-full bg-chip px-3 py-1 text-sm text-ink">
                <input type="radio" name="location" value="wellington" defaultChecked className="text-brand" />
                Wellington (in person)
              </label>
              <label className="inline-flex items-center gap-2 rounded-full bg-chip px-3 py-1 text-sm text-ink">
                <input type="radio" name="location" value="online" className="text-brand" />
                Online
              </label>
            </div>
          </div>
        </div>
        <label className="block text-sm font-medium text-ink">
          Service type
          <select
            name="serviceType"
            required
            defaultValue=""
            className="input-ghost mt-1 w-full rounded-lg px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
          >
            {serviceOptions.map((o) => (
              <option key={o.value || "placeholder"} value={o.value} disabled={o.value === ""}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-ink">
          Scope (rooms, property type, timeline)
          <textarea
            name="scope"
            required
            rows={3}
            placeholder="e.g. 3-bedroom home, main living + master, listing in 3 weeks"
            className="input-ghost mt-1 w-full rounded-lg px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
          />
        </label>
      </fieldset>

      <fieldset
        aria-labelledby="contact-section-context"
        className="card-tonal min-w-0 space-y-4 rounded-2xl border-0 p-6"
      >
        <h3 id="contact-section-context" className="font-heading text-sm font-semibold text-brand">
          03 — More context (optional)
        </h3>
        <label className="block text-sm font-medium text-ink">
          Notes
          <textarea
            name="message"
            rows={5}
            placeholder="Anything else we should know—goals, constraints, access?"
            className="input-ghost mt-1 w-full rounded-lg px-3 py-2 text-ink outline-none ring-brand/30 focus:ring-2"
          />
        </label>
      </fieldset>

      {status === "error" && (
        <p className="text-sm font-medium text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="primary-btn inline-flex items-center justify-center px-8 py-3 text-sm font-semibold shadow-sm transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Request a consultation"}
      </button>
    </form>
  );
}

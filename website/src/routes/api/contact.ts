import { createFileRoute } from "@tanstack/react-router";

const MAX_MESSAGE = 8000;

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
        }

        if (!body || typeof body !== "object") {
          return Response.json({ ok: false, error: "Invalid payload" }, { status: 400 });
        }

        const data = body as Record<string, unknown>;

        const name = typeof data.name === "string" ? data.name.trim() : "";
        const email = typeof data.email === "string" ? data.email.trim() : "";
        const phone = typeof data.phone === "string" ? data.phone.trim() : "";
        const clientType = data.clientType === "agent" ? "agent" : "homeowner";
        const location = data.location === "online" ? "online" : "wellington";
        const serviceType = typeof data.serviceType === "string" ? data.serviceType : "";
        const scope = typeof data.scope === "string" ? data.scope.trim() : "";
        const message = typeof data.message === "string" ? data.message.trim() : "";

        if (!name || !email || !serviceType || !scope) {
          return Response.json(
            { ok: false, error: "Please fill in name, email, service, and scope." },
            { status: 400 },
          );
        }

        if (message.length > MAX_MESSAGE) {
          return Response.json({ ok: false, error: "Message is too long." }, { status: 400 });
        }

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) {
          return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
        }

        const payload = {
          name,
          email,
          phone,
          clientType,
          location,
          serviceType,
          scope,
          message,
          receivedAt: new Date().toISOString(),
        };

        console.info("[contact]", payload);

        return Response.json({ ok: true });
      },
    },
  },
});

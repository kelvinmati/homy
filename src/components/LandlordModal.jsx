import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { X, CheckCircle2 } from "lucide-react";

const PROPERTY_TYPES = ["Residential", "Commercial", "Mixed-use", "Short-term rental"];

const PROPERTY_COUNTS = ["1", "2-5", "6-10", "11-25", "25+"];

const INITIAL_FORM = {
  name: "",
  email: "",
  phone_number: "",
  company: "",
  property_type: "",
  units: "",
  location: "",
  message: "",
};

export default function LandlordModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) {
      setForm(INITIAL_FORM);
      setStatus("idle");
      setMessage("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const updateField = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_5c3xe0g";
    const templateId = "template_8d1zocp";
    const publicKey ="V7leDGimhSBrLZeIp";

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setMessage("Email notifications are not configured yet.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          // from_name:"Homy",
          subject: "New landlord registration — Homy",
          name: form.name,
          email: form.email,
          phone_number: form.phone_number,
          company: form.company,
          property_type: form.property_type,
          units: form.units,
          location: form.location,
          message: form.message,
          submitted_at: new Date().toLocaleString(),
        },
        { publicKey }
      );
      setStatus("success");
      setMessage(
        "Thank you! Our team will reach out to you once the development is complete."
      );
    } catch (err) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      console.error("EmailJS error:", err);
    }
  };

  const fieldClass =
    "w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-stone-500 outline-none focus:border-lime-400/60 focus:ring-1 focus:ring-lime-400/60 disabled:opacity-50";

  const labelClass = "mb-1.5 block text-xs font-medium text-stone-300";

  const selectClass =
    fieldClass +
    " appearance-none [&>option]:text-stone-800 [&>option]:bg-white";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="landlord-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#0A5C3A] p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-stone-400 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <h2
          id="landlord-modal-title"
          className="text-xl font-semibold text-white"
        >
          Register interest with Homy
        </h2>
        <p className="mt-1 text-xs text-stone-400">
          Tell us about your property and our team will be in touch to help you
          list and manage it.
        </p>

        {status === "success" ? (
          <div className="mt-8 flex flex-col items-center gap-3 pb-4 text-center">
            <CheckCircle2 className="h-12 w-12 text-lime-300" />
            <p className="text-sm text-lime-200">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 rounded-lg bg-lime-300 px-5 py-2.5 text-sm font-semibold text-[#0A6A43] transition hover:bg-lime-200"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="landlord-name" className={labelClass}>
                  Full name *
                </label>
                <input
                  id="landlord-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={updateField}
                  required
                  placeholder="Jane Doe"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="landlord-phone" className={labelClass}>
                  Phone number *
                </label>
                <input
                  id="landlord-phone"
                  name="phone_number"
                  type="tel"
                  value={form.phone_number}
                  onChange={updateField}
                  required
                  placeholder="+254 7XX XXX XXX"
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="landlord-email" className={labelClass}>
                Email address *
              </label>
              <input
                id="landlord-email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                required
                placeholder="jane@example.com"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="landlord-company" className={labelClass}>
                Company / property firm{" "}
                <span className="text-stone-500">(optional)</span>
              </label>
              <input
                id="landlord-company"
                name="company"
                type="text"
                value={form.company}
                onChange={updateField}
                placeholder="e.g. Jane Properties Ltd"
                className={fieldClass}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="landlord-type" className={labelClass}>
                  Property type *
                </label>
                <select
                  id="landlord-type"
                  name="propertyType"
                  value={form.propertyType}
                  onChange={updateField}
                  required
                  className={selectClass}
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  {PROPERTY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="landlord-count" className={labelClass}>
                  Number of units/properties *
                </label>
                <select
                  id="landlord-count"
                  name="units"
                  value={form.units}
                  onChange={updateField}
                  required
                  className={selectClass}
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  {PROPERTY_COUNTS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="landlord-area" className={labelClass}>
                Location of property / area *
              </label>
              <input
                id="landlord-area"
                name="location"
                type="text"
                value={form.location}
                onChange={updateField}
                required
                placeholder="e.g. Kahawa West, Nairobi"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="landlord-message" className={labelClass}>
                Message{" "}
                <span className="text-stone-500">(optional)</span>
              </label>
              <textarea
                id="landlord-message"
                name="message"
                value={form.message}
                onChange={updateField}
                rows={3}
                placeholder="Anything else you'd like us to know?"
                className={fieldClass + " resize-none"}
              />
            </div>

            {message && (
              <p className="text-xs text-red-300">{message}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-lime-300 px-5 py-3 text-sm font-semibold text-[#0A6A43] transition hover:bg-lime-200 disabled:cursor-not-allowed disabled:opacity-50"
              style={{ boxShadow: "0 4px 14px rgba(190,242,100,0.25)" }}
            >
              {status === "sending" ? "Submitting..." : "Submit interest"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

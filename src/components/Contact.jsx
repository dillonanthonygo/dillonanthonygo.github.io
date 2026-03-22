import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactLinks = [
  { label: "Email", value: "dillonanthonygo@gmail.com", href: "mailto:dillonanthonygo@gmail.com" },
  { label: "GitHub", value: "github.com/dillon", href: "https://github.com/" },
  { label: "LinkedIn", value: "linkedin.com/in/dillon", href: "https://www.linkedin.com/" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured yet. Add your EmailJS environment variables.",
      });
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setStatus({ type: "success", message: "Message sent successfully. Thank you!" });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Message could not be sent right now. Please try again shortly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 flex items-center scroll-mt-20 pb-32">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent text-center">
          Contact
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          Interested in collaborating or discussing an opportunity? Send a message and I will get
          back to you soon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200/90 bg-white/80 p-6 shadow-lg shadow-slate-200/60 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-slate-800">Get In Touch</h3>
            <ul className="space-y-3">
              {contactLinks.map((item) => (
                <li key={item.label} className="text-slate-600">
                  <span className="mr-2 font-medium text-slate-700">{item.label}:</span>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-blue-600 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-700"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="rounded-2xl border border-slate-200/90 bg-white/80 p-6 shadow-lg shadow-slate-200/60 backdrop-blur-sm" onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold mb-4 text-slate-800">Send a Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-lg bg-blue-600 py-3 px-6 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {status.message ? (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

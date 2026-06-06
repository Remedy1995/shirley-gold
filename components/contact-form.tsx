import { site } from "@/content/site";

const enquiryTypes = [
  "Gold trading and procurement",
  "Automotive import orders",
  "Electronics distribution",
  "Investment and partnership proposals"
];

export function ContactForm() {
  const isConfigured = Boolean(site.formspreeEndpoint);

  return (
    <div className="theme-panel shine-surface rounded-[2rem] p-8">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Partnership Form</p>
        <h2 className="mt-4 text-3xl font-semibold text-theme-primary">
          Send a structured enquiry directly from the website.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-theme-secondary">
          Share your sourcing requirement, product scope, preferred market, and expected timeline so the team can review your request and respond with the right commercial next step.
        </p>
      </div>
      {!isConfigured ? (
        <div className="theme-panel-soft mb-6 rounded-2xl p-4 text-sm leading-7 text-theme-secondary">
          Structured online submissions are being finalized. For immediate enquiries, please use the direct company contact details on this page.
        </div>
      ) : null}
      <form action={site.formspreeEndpoint || undefined} method="POST" className="grid gap-5 lg:grid-cols-2">
        <input type="hidden" name="_subject" value="New Shirley's Gold Trading Enterprise enquiry" />
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-theme-primary">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={!isConfigured}
            className="form-input-theme"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-theme-primary">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={!isConfigured}
            className="form-input-theme"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-theme-primary">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            disabled={!isConfigured}
            className="form-input-theme"
            placeholder="Company or organization"
          />
        </div>
        <div>
          <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium text-theme-primary">
            Enquiry type
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            disabled={!isConfigured}
            className="form-input-theme"
            defaultValue=""
          >
            <option value="" disabled>
              Select enquiry type
            </option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-theme-primary">
            Requirement details
          </label>
          <textarea
            id="message"
            name="message"
            required
            disabled={!isConfigured}
            className="form-input-theme min-h-40 resize-y"
            placeholder="Outline the products or services required, your target market, quantity or volume, and any timeline or compliance considerations."
          />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-7 text-theme-secondary">
            Preferred direct contact remains
            {" "}
            <a href={`mailto:${site.email}`} className="text-gold hover:text-amber">
              {site.email}
            </a>
            {" "}
            and
            {" "}
            <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="text-gold hover:text-amber">
              {site.phone}
            </a>
            .
          </p>
          <button
            type="submit"
            disabled={!isConfigured}
            className="button-primary-theme rounded-full px-6 py-3 text-sm font-semibold transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send enquiry
          </button>
        </div>
      </form>
    </div>
  );
}

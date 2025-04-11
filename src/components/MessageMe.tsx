import { useState } from "react";
import emailjs from "@emailjs/browser";

function MessageMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const templateParams = {
        name: formData.name,
        time: new Date().toLocaleString(),
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EmailJS_SERVICE_ID,
        import.meta.env.VITE_EmailJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EmailJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-grey-700 flex flex-col gap-8 w-full md:w-1/2">
      <h1 className="text-lg font-bold text-left">Shoot me a message</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            required
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="bg-white border-1 border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white border-1 border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            required
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-white border-1 border-gray-300 rounded-md p-2"
            rows={5}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex flex-row items-center w-fit justify-center gap-2 bg-gray-700 text-white rounded-md p-2 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <i className="fa-solid fa-paper-plane"></i>
          </button>
          {submitStatus === "success" && (
            <p className="text-green-500">Message sent successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-500">
              Failed to send message. Please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default MessageMe;

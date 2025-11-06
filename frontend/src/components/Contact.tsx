import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                "service_psbrnkd",
                "template_eja73jm",
                formData,
                "BQQpU03rdInSkPk3k"
            );

            toast.success("Email sent!");
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 3000);
        } catch (error) {
            toast.error("Failed to send email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleView = () => {
        Navigate("/login");
    };

    return (
        <section
            id="contact"
            className="min-h-screen bg-gray-50 dark:bg-gray-800 flex items-center justify-center py-12"
        >
            <div className="w-full max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Get In Touch
                </h2>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg h-fit">
                        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                            Contact Information
                        </h3>

                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                        Email
                                    </h4>
                                    <a
                                        href="mailto:arbinniroula21@gmail.com"
                                        className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
                                    >
                                        arbinniroula21@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                        Location
                                    </h4>
                                    <p
                                        className="text-gray-600 dark:text-gray-300 cursor-pointer text-sm"
                                        onClick={handleView}
                                    >
                                        Sanagau, Lalitpur
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                        Phone
                                    </h4>
                                    <a
                                        href="tel:+9840254508"
                                        className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
                                    >
                                        9840254508
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent dark:bg-gray-800 dark:text-white"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-2 px-4 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center gap-2 transition-colors ${
                                    isSubmitting
                                        ? "opacity-75 cursor-not-allowed"
                                        : ""
                                }`}
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

"use client";

import { useState, useEffect } from "react";

export default function HelpSupportPage() {
  const [theme, setTheme] = useState("light");
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
      return;
    }
  };

  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address and we'll send you a reset link. Follow the instructions in the email to create a new password.",
    },
    {
      question: "Where can I find my billing information?",
      answer:
        "You can find your billing information in your account settings under the 'Billing' section. Here you'll see your current plan, payment history, and can update your payment method.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team by emailing support@example.com, using the contact form below, or calling our support hotline at 1-800-SUPPORT during business hours (9 AM - 6 PM EST).",
    },
    {
      question: "How do I change my account settings?",
      answer:
        "Navigate to the Settings page from your dashboard. There you can update your profile information, change your password, and modify your notification preferences.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise accounts, we also offer invoice-based billing.",
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1
              className={`text-3xl font-bold transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Help & Support
            </h1>
          </div>
          <p
            className={`text-lg leading-relaxed transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Welcome to our Help & Support center. Find answers to common
            questions, get assistance, and connect with our support team.
          </p>
        </div>

        {/* Quick Actions Card */}
        <div
          className={`mb-8 p-6 rounded-lg shadow-sm transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h2
            className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              className={`p-4 rounded-lg text-left transition-all duration-200 ${
                theme === "dark"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200"
              }`}
            >
              <div className="text-2xl mb-2">📧</div>
              <div className="font-medium">Email Support</div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-blue-200" : "text-blue-600"
                }`}
              >
                Get help via email
              </div>
            </button>

            <button
              className={`p-4 rounded-lg text-left transition-all duration-200 ${
                theme === "dark"
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-green-50 hover:bg-green-100 text-green-700 border border-green-200"
              }`}
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="font-medium">Live Chat</div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-green-200" : "text-green-600"
                }`}
              >
                Chat with our team
              </div>
            </button>

            <button
              className={`p-4 rounded-lg text-left transition-all duration-200 ${
                theme === "dark"
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200"
              }`}
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="font-medium">Phone Support</div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-purple-200" : "text-purple-600"
                }`}
              >
                Call our hotline
              </div>
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          className={`mb-8 p-6 rounded-lg shadow-sm transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg transition-colors duration-300 ${
                  theme === "dark" ? "border-gray-600" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors duration-200 ${
                    theme === "dark"
                      ? "hover:bg-gray-700 text-white"
                      : "hover:bg-gray-50 text-gray-900"
                  }`}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span
                    className={`transform transition-transform duration-200 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {expandedFaq === index && (
                  <div
                    className={`px-6 pb-4 transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`p-6 rounded-lg shadow-sm transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Contact Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3
                className={`text-lg font-medium mb-4 transition-colors duration-300 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Get in Touch
              </h3>
              <div className="space-y-3">
                <div
                  className={`flex items-center transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span className="mr-3">📧</span>
                  <span>support@example.com</span>
                </div>
                <div
                  className={`flex items-center transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span className="mr-3">📞</span>
                  <span>1-800-SUPPORT</span>
                </div>
                <div
                  className={`flex items-center transition-colors duration-300 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span className="mr-3">🕒</span>
                  <span>9 AM - 6 PM EST (Mon-Fri)</span>
                </div>
              </div>
            </div>

            <div>
              <h3
                className={`text-lg font-medium mb-4 transition-colors duration-300 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Send us a Message
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-3 py-2 rounded-md border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full px-3 py-2 rounded-md border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className={`w-full px-3 py-2 rounded-md border transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    theme === "dark"
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                ></textarea>
                <button
                  className={`w-full px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

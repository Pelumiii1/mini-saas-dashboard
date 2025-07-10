export default function HelpSupportPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Help & Support</h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">Welcome to the Help & Support page. Here you can find answers to common questions and get assistance.</p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li className="mb-2">How do I reset my password?</li>
          <li className="mb-2">Where can I find my billing information?</li>
          <li className="mb-2">How do I contact customer support?</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
        <p className="text-gray-700 dark:text-gray-300">If you need further assistance, please email us at support@example.com.</p>
      </div>
    </div>
  );
}
import React from 'react';

export default function ContactPage() {
  return (
    <main className="bg-gray-900 text-white h-full">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            We welcome your questions, feedback, and ideas. Reach out to us for collaborations, volunteering, or general inquiries.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <section className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-teal-400">Contact Details</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <span>Dera Town, Oromia Region, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">📞</span>
                <span>+251 9XX XXX XXX</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <span>contact@derayouth.org</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">⏰</span>
                <span>Office Hours: Mon–Sat, 9:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </section>

          <section className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-teal-400">Social Media</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <a href="#" className="hover:text-teal-400 transition duration-300 flex items-center">
                  <span className="text-2xl mr-4">📘</span>
                  <span>Facebook: @DeraYouthJemea</span>
                </a>
              </li>
              <li className="flex items-center">
                <a href="#" className="hover:text-teal-400 transition duration-300 flex items-center">
                  <span className="text-2xl mr-4">✈️</span>
                  <span>Telegram: t.me/derayouth</span>
                </a>
              </li>
              <li className="flex items-center">
                <a href="#" className="hover:text-teal-400 transition duration-300 flex items-center">
                  <span className="text-2xl mr-4">📸</span>
                  <span>Instagram: @derayouth_jemea</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

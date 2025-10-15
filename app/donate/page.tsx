import React from 'react';

export default function DonatePage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Our Mission — Donate</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            Your contribution empowers us to continue serving the community — teaching, guiding, and uplifting the youth of Dera. Every birr you give strengthens a project that builds the Ummah.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <section className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">How to Donate</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-teal-400">Bank Transfer (Ethiopian Banks)</h3>
              <ul className="space-y-4 text-lg">
                <li><strong>Bank Name:</strong> Cooperative Bank of Oromia</li>
                <li><strong>Account Name:</strong> Dera Muslim Youth Jemea</li>
                <li className="text-yellow-400"><strong>Account Number:</strong> 1000XXXXXX</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500"><em>Please verify account details before transfer.</em></p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-teal-400">Alternative Support</h3>
              <p className="text-lg">You may also donate in person at our office or during community events.</p>
            </div>
          </section>

          <section className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Send Donation Confirmation</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label htmlFor="amount" className="block text-lg font-medium mb-2">Amount Donated</label>
                <input type="number" id="amount" name="amount" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label htmlFor="reference" className="block text-lg font-medium mb-2">Reference Number</label>
                <input type="text" id="reference" name="reference" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label htmlFor="contact" className="block text-lg font-medium mb-2">Your Contact (Optional)</label>
                <input type="text" id="contact" name="contact" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300">
                Send Confirmation
              </button>
            </form>
          </section>
        </div>

        <section className="mt-12 text-center bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Transparency Promise</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            We maintain strict financial accountability. All donations are used solely for charitable and developmental purposes and reported to our community annually.
          </p>
        </section>
      </div>
    </main>
  );
}

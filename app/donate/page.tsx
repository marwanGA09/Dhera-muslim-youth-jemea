import React from 'react';

export default function DonatePage() {
  return (
    <main>
      <section>
        <h1>Support Our Mission — Donate</h1>
        <p>
          Your contribution empowers us to continue serving the community — teaching, guiding, and uplifting the youth of Dera. Every birr you give strengthens a project that builds the Ummah.
        </p>
      </section>

      <section>
        <h2>How to Donate</h2>
        <h3>Bank Transfer (Ethiopian Banks)</h3>
        <ul>
          <li><strong>Bank Name:</strong> Cooperative Bank of Oromia</li>
          <li><strong>Account Name:</strong> Dera Muslim Youth Jemea</li>
          <li><strong>Account Number:</strong> 1000XXXXXX</li>
        </ul>
        <p><em>Please verify account details before transfer.</em></p>

        <h3>Alternative Support</h3>
        <p>You may also donate in person at our office or during community events.</p>
      </section>

      <section>
        <h2>Transparency Promise</h2>
        <p>
          We maintain strict financial accountability. All donations are used solely for charitable and developmental purposes and reported to our community annually.
        </p>
      </section>

      <section>
        <h2>Send Donation Confirmation</h2>
        <form>
          {/* Form for name, amount, reference number, contact */}
        </form>
      </section>
    </main>
  );
}

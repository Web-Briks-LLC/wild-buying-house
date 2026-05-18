import React from "react";

export const metadata = {
  title: "Terms & Conditions | WiLD",
  description: "Terms and Conditions of Service for WiLD - Agile Denim Manufacturing",
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white text-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Terms & Conditions</h1>
          <p className="text-gray-500 text-lg">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p>
              By engaging with WiLD, requesting a quote, or initiating a production order, you agree to be bound 
              by these Terms & Conditions. WiLD acts as your global manufacturing partner, offering services 
              ranging from concept and sampling to high-volume production and delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Production, MOQs, and Timelines</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>14-Day Delivery:</strong> Our "concept to warehouse in 14 days" framework applies to specific fast-track production lines. Exact timelines will be confirmed upon final tech-pack approval and fabric availability.</li>
              <li><strong>Flexible Quantities:</strong> We accept minimum order quantities (MOQs) ranging from 100 to 10,000 pieces per style, combining boutique agility with wholesale scale.</li>
              <li><strong>Sampling & QC:</strong> All production follows a strict process: Concept → Sampling → Production → QC → Delivery. Final production will not commence without written approval of the physical or digital sample.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Manufacturing Facilities</h2>
            <p className="mb-4">Depending on the technical requirements of your collection, production will be routed through our verified ecosystem:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bangladesh Hub:</strong> High-volume precision via WiLD DENIM / ALEYA APPARELS LIMITED (Hemayetpur, Savar).</li>
              <li><strong>China Hub:</strong> Technical specialization and intricate detailing via Debin Garment Factory (Guigang City).</li>
              <li><strong>Washing Plant:</strong> Specialized advanced washing utilizing low-impact, sustainable processes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sustainability & Compliance</h2>
            <p>
              WiLD is committed to ethical manufacturing. We integrate eco-friendly practices requiring client adherence to sustainable 
              standards where applicable. Our production ecosystem aligns with GOTS, BCI, USDA Organic, ZDHC, Bluesign, GRS, 
              PCW, Higg Index, OEKO-TEX, and FSC certifications. Clients requesting specific certifications must specify these 
              requirements during the quoting phase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property & Brand Building</h2>
            <p>
              The designs, tech packs, and brand assets provided by you remain your intellectual property. WiLD's Design Studio 
              may provide creative input, SEO-optimized content, digital catalogs, and short-form video assets as part of our 
              full-service branding. Assets created jointly will be governed by individual project agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
            <p>
              Specific payment terms, pricing, and FOB/CIF details will be outlined in your official commercial invoice and 
              manufacturing agreement. Full execution of orders requires compliance with the payment milestones set by our 
              financial departments in the USA, UAE, or Hong Kong.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
            <p>
              Disputes arising from manufacturing agreements will be governed by the laws of the jurisdiction from which the 
              primary commercial invoice is issued (USA, UAE, Hong Kong, or Bangladesh), unless otherwise stated in writing.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
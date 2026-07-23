import ProductCard from '../components/ProductCard.jsx';
import CTASection from '../components/CTASection.jsx';
import { products } from '../data/products.js';

export default function Products() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell">
          <p className="eyebrow">Products</p>
          <h1 className="heading-xl mt-4">Digital products built to help you work and grow</h1>
          <p className="body-lg mt-5 max-w-3xl">
            Explore practical AI tools and career resources, then contact NtShellcreations directly on
            WhatsApp to purchase or ask questions.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 pb-16 sm:pb-20">
        <div className="section-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CTASection
        title="Need a custom product bundle?"
        description="Ask for a custom AI project kit, documentation pack, website template, or learning resource built around your exact requirement."
      />
    </>
  );
}

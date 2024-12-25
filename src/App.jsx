import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

import Nav from "./components/Nav";

function App() {
        return (
          <main className="relative">
           < Nav />
            <section className="xl:padding-l wide:padding-r padding-b">
                 <Hero />
            </section>

            <section className="padding">
              <PopularProducts />
            </section>
            <section className="padding">
              <SuperQuality />
            </section>
            <section className="padding-x py-10">
              <Services />
            </section>
            <section className="padding">
              <SpecialOffer />
            </section>
            <section className="bg-pale-blue padding">
              <CustomerReviews />
            </section>
            <section className="padding-x w-full sm:py-32 py-16 ">
              <Subscribe />
            </section>
            <section className="padding bg-black">
            <Footer />
            </section>

          </main>
        )
      }
      export default App
import Layout from "hocs/layouts/Layout";
import { Helmet } from "react-helmet-async";

function AboutUs() {
  return (
    <Layout>
      <Helmet>
        <title>About | doTERRA</title>
        <meta
          name="description"
          content="Explore doTERRA's pure, potent essential oils. Experience nature's transformative power for wellness. Join us on your journey to health and vitality."
        />
        <meta
          name="keywords"
          content="doTERRA Oils, Natural Wellness, Health Products, Essential Oils, Aromatherapy, Pure Extracts, Sustainably Sourced"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="Lotito" />
        <meta name="publisher" content="Lotito" />
        {/* <link rel="canonical" href="https://oilslotito.com.ae"/> */}

        <meta name="twitter:title" content="Home | doTERRA" />
        <meta
          name="twitter:description"
          content="Explore doTERRA's pure, potent essential oils. Experience nature's transformative power for wellness. Join us on your journey to health and vitality."
        />
        {/* <meta name="twitter:image" content={headerImg} /> */}
      </Helmet>

      <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4">About doTERRA Oils</h1>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            est eget nunc semper consectetur.
          </p>
          <p class="text-lg mt-4">
            Suspendisse potenti. Sed ac augue magna. Ut congue quam ut sapien
            tincidunt, nec condimentum ligula congue.
          </p>
        </div>
      </section>
      <section class="py-16">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
          <p class="text-lg">
            At doTERRA Oils, our mission is to provide the highest quality
            essential oils to enhance the health and well-being of our
            customers.
          </p>
          <p class="text-lg mt-4">
            We are committed to sourcing our oils responsibly and ethically,
            ensuring that each bottle contains pure and natural ingredients.
          </p>
        </div>
      </section>

      <section class="py-16 bg-gray-200">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold mb-4">Our Values</h2>
          <ul class="list-disc list-inside">
            <li class="mb-2">
              Quality: We are committed to sourcing and producing the purest
              essential oils.
            </li>
            <li class="mb-2">
              Integrity: We uphold the highest standards of integrity in all
              aspects of our business.
            </li>
            <li class="mb-2">
              Community: We strive to build strong and supportive communities
              around the world.
            </li>
            <li class="mb-2">
              Sustainability: We are dedicated to environmentally sustainable
              practices throughout our supply chain.
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
export default AboutUs;

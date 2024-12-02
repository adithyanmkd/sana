import Banner from "../molecules/Banner";
import Footer from "../organisms/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-4 text-gray-700">Last Updated: 13-11-2024</p>

        <p className="mb-4 text-gray-700">
          At Sana Pure Drinking Water Company, we are committed to safeguarding
          the privacy of our customers, visitors, and users of our website. This
          Privacy Policy outlines the types of information we collect, how it is
          used, shared, and protected, as well as the choices you have
          concerning your information. By using our website, you agree to the
          terms of this Privacy Policy.
        </p>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          1. Information We Collect
        </h2>
        <p className="mb-2 text-gray-700">
          We collect both personal and non-personal information to provide and
          improve our services. The types of information we may collect include:
        </p>
        <ul className="mb-4 list-inside list-disc text-gray-700">
          <li>
            <strong>Personal Information:</strong> Information you provide
            directly to us, such as your name, email address, phone number, and
            delivery address when you sign up, make a purchase, or contact us
            for customer support.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Technical and usage data,
            including IP address, browser type, device information, and pages
            visited. This data is collected automatically through cookies and
            similar tracking technologies to improve website functionality and
            user experience.
          </li>
        </ul>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          2. How We Use Your Information
        </h2>
        <ul className="mb-4 list-inside list-disc text-gray-700">
          <li>To process orders and deliver our products</li>
          <li>
            To respond to your customer service requests and provide support
          </li>
          <li>To improve our website, products, and customer experience</li>
          <li>
            To send periodic emails about promotions, updates, and other
            marketing information (only if you have opted in)
          </li>
          <li>
            To analyze trends and gather demographic information for internal
            use and business development
          </li>
        </ul>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          3. Sharing of Your Information
        </h2>
        <p className="mb-4 text-gray-700">
          We value your privacy and will not sell, trade, or rent your personal
          information to third parties. However, we may share your information
          in the following situations:
        </p>
        <ul className="mb-4 list-inside list-disc text-gray-700">
          <li>
            <strong>With Service Providers:</strong> We may share information
            with trusted third-party service providers who assist us in
            operating our website, fulfilling orders, or conducting business
            activities, provided they agree to keep your information
            confidential and comply with privacy regulations.
          </li>
          <li>
            <strong>For Legal Requirements:</strong> We may disclose information
            if required by law, to protect the safety of our users, or in
            response to a valid legal request.
          </li>
        </ul>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          4. Cookies and Tracking Technologies
        </h2>
        <p className="mb-4 text-gray-700">
          We use cookies and similar tracking technologies to collect
          non-personal information to help enhance your experience on our
          website. Cookies allow us to remember your preferences, optimize site
          performance, and provide a more personalized experience.
        </p>
        <p className="mb-4 text-gray-700">
          You can choose to disable cookies in your browser settings, but please
          note that some features of our website may not function properly
          without them.
        </p>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">5. Data Security</h2>
        <p className="mb-4 text-gray-700">
          We implement reasonable security measures to protect your personal
          information from unauthorized access, loss, misuse, or alteration.
          While we strive to protect your information, no online data
          transmission or storage is guaranteed to be 100% secure.
        </p>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          6. Your Rights and Choices
        </h2>
        <p className="mb-4 text-gray-700">
          Depending on your location, you may have certain rights regarding your
          personal information, including the right to access, update, or delete
          it. You may also choose to opt-out of receiving marketing
          communications by following the unsubscribe link in our emails.
        </p>
        <p className="mb-4 text-gray-700">
          To exercise these rights or if you have any questions about your data,
          please contact us at{" "}
          <a
            href="mailto:sanapurewater@yahoo.com"
            className="text-blue-600 underline"
          >
            sanapurewater@yahoo.com
          </a>
          .
        </p>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          7. Links to Third-Party Sites
        </h2>
        <p className="mb-4 text-gray-700">
          Our website may contain links to other websites. We are not
          responsible for the privacy practices or content of those external
          sites. We recommend reviewing their privacy policies before providing
          any personal information.
        </p>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          8. Changes to Our Privacy Policy
        </h2>
        <p className="mb-4 text-gray-700">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or relevant laws. Any updates will be posted on this
          page, and we encourage you to review it periodically.
        </p>

        <h2 className="mb-2 mt-6 text-2xl font-semibold">9. Contact Us</h2>
        <p className="mb-4 text-gray-700">
          If you have any questions or concerns about this Privacy Policy or our
          privacy practices, please contact us at:
        </p>
        <p className="mb-2 text-gray-700">
          Sana Pure Drinking Water Company
          <br />
          Email:
          <a
            href="mailto:sanapurewater@yahoo.com"
            className="text-blue-600 underline"
          >
            sanapurewater@yahoo.com
          </a>
          <br />
          Phone: +971507474835
        </p>

        <p className="mt-8 text-gray-700">
          Thank you for trusting Sana Pure Drinking Water Company with your
          personal information. We are committed to protecting your privacy and
          ensuring a safe experience on our website.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

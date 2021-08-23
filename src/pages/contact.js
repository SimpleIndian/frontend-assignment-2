import Hero from "components/contact/Hero";
import Address from "components/contact/Address";
import Form from "components/contact/Form";
import Layout from "components/Layout";

const address = [
  { title: " London, UK" },
  { title: "Tokyo, Japan" },
  { title: "New York, USA" },
];

const Contact = () => {
  return (
    <Layout>
      <div className="px-5 pt-10 pb-20 bg-opGray">
        <div className="max-w-6xl m-auto">
          <Hero></Hero>
          <div className="space-y-10 md:flex md:items-center md:justify-between md:space-y-0">
            {address.map((each, index) => (
              <Address key={index} title={each.title} />
            ))}
          </div>
          <Form></Form>
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              loading="lazy"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

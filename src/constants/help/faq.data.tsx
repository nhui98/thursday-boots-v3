import { BannerItem, ILink } from "@constants/about/about.data";
import { Link } from "react-router-dom";

export interface IFAQ {
  id: number;
  tagId?: string;
  title: string;
  questions: IQuestion[];
}

export interface IQuestion {
  id: number;
  question: string;
  answer: JSX.Element;
}

export const BANNER_DATA: BannerItem = {
  id: 0,
  img: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781729/thursday/help/BannerImg_ourfji.webp",
  img2: "https://res.cloudinary.com/dxjw6bbeg/image/upload/v1666781729/thursday/help/BannerImgSm_qyv3aw.webp",
  alt: "faq",
  title: "Frequently Asked Questions",
};

export const BANNER_LINKS: ILink[] = [
  {
    id: 0,
    text: "ABOUT",
    href: "#about",
  },
  {
    id: 1,
    text: "SIZING",
    href: "#sizing",
  },
  {
    id: 2,
    text: "PRODUCT",
    href: "#product",
  },
  {
    id: 3,
    text: "SHIPPING",
    href: "#shipping",
  },
  {
    id: 4,
    text: "EXCHANGES",
    href: "#exchanges",
  },
  {
    id: 5,
    text: "SHOE CARE",
    href: "#shoecare",
  },
];

export const FAQ_DATA: IFAQ[] = [
  {
    id: 0,
    title: "Top Questions",
    questions: [
      {
        id: 0,
        question: "What size men's footwear should I order?",
        answer: (
          <>
            <p>
              For help finding the perfect fit for each style, please reference
              the sizing information on each product page. That said, here are
              some general guidelines for finding your size:
            </p>
            <ul>
              <li>
                <strong>For boots and dress shoes</strong>, we typically
                recommend ordering the same size you wear in other high quality
                leather boots or dress shoes, or ½ size smaller than you
                normally wear in sneakers. If you are between sizes, we
                recommend you order the smaller size. (We recommend sizing down
                because the leather will naturally stretch to form to your feet
                over time. An initially snug fit is the best way to start off a
                long-term relationship with your boots.)
              </li>
              <li>
                <strong>For sneakers</strong>, we typically recommend ordering
                the same size you normally wear in athletic sneakers. If you are
                between sizes, we recommend you order the larger size.
              </li>
            </ul>
            <p>
              Still unsure? <Link to={`/contact-us`}>Send us an email.</Link>{" "}
              We&apos;d love to help you find the right size!
            </p>
          </>
        ),
      },
      {
        id: 1,
        question: "What size women’s footwear should I order?",
        answer: (
          <>
            <p>
              For help finding the perfect fit for each style, please reference
              the sizing information on each product page. That said, here are
              some general guidelines for finding your size:
            </p>
            <ul>
              <li>
                <strong>For boots</strong>, we typically recommend ordering
                either the same size or ½ size larger than you normally wear to
                ensure the most comfortable fit. If you are between sizes, we
                recommend you order the larger size.
              </li>
              <li>
                <strong>For sneakers</strong>, we typically recommend ordering
                the same size you normally wear in athletic sneakers. If you are
                between sizes, we recommend you order the larger size.
              </li>
            </ul>
            <p>
              Still unsure? <Link to={`/contact-us`}>Send us an email.</Link>{" "}
              We&apos;d love to help you find the right size!
            </p>
          </>
        ),
      },
      {
        id: 2,
        question: "Why 'Thursday'?",
        answer: (
          <>
            <p>
              On Thursday we work hard, but it’s also the unofficial start of
              the weekend, and we design our products with that versatility in
              mind. With a focus on comfort, durability, and the highest quality
              materials, we deliver direct-to-consumer footwear at the lowest
              markup in the industry. Your life isn&apos;t one-dimensional. Your
              footwear shouldn&apos;t be either.
            </p>
            <p>
              For more info about us, please check out the{" "}
              <Link to={`/about/our-story`}>Our Story.</Link> page!
            </p>
          </>
        ),
      },
      {
        id: 3,
        question: "Where are you located? Do you have any stores?",
        answer: (
          <>
            <p>
              We&apos;re proud to be based in New York City. If you&apos;re
              nearby or visiting, we&apos;d love to have you come visit our
              store location! More info can be found{" "}
              <Link to={`/location`}>here.</Link> We look forward to meeting
              you!
            </p>
          </>
        ),
      },
      {
        id: 4,
        question: "Where are your products made?",
        answer: (
          <>
            <p>
              All of our products are handcrafted by skilled artisans at
              world-class manufacturing facilities. We currently manufacture
              products in León (Mexico), Porto (Portugal), Alicante (Spain), and
              Arkansas (USA). We have full-time team members in every country we
              manufacture in, and feel confident to proudly say that all of our
              suppliers and manufacturing partners offer the best quality
              craftsmanship and adhere to the highest fair labor and
              environmental stewardship standards.
            </p>
            <p>
              We are proud of our manufacturing processes and are fully
              committed to building products and a brand with integrity. If you
              have any questions about our process, commitment to quality, or
              want to know where a specific product was made, feel free to{" "}
              <Link to={`/contact-us`}>send us an email.</Link> We would be
              happy to answer your questions!
            </p>
          </>
        ),
      },
      {
        id: 5,
        question: "How do I care for my Thursdays?",
        answer: (
          <>
            <p>
              A little maintenance goes a long way! Check out our{" "}
              <Link to={`/boot-care`}>boot care guide</Link> for some tips on
              how to keep your Thursdays in the best possible shape.
            </p>
            <p>
              All of our products are designed for the long haul and may need
              additional care from time to time. If you need professional care
              help for things like resoling your boots, please refer to our{" "}
              <Link to={`/recommended-cobblers`}>
                recommended cobblers page.
              </Link>{" "}
              Whether you need a quick shine before the weekend or a full resole
              of your boots, each partner was selected for their excellent
              reputation with local customers and for their experience with our
              products, and will help ensure your Thursdays last for years to
              come!
            </p>
          </>
        ),
      },
      {
        id: 6,
        question: "Is your footwear waterproof/water resistant?",
        answer: (
          <>
            <p>
              Our boots and shoes are water resistant and will keep your feet
              dry on typical rainy days, but we wouldn&apos;t recommend standing
              around in puddles in them. Products with welt construction feature
              a leather welt between the upper and the sole. This helps create a
              barrier against water entering the shoe (and makes them easily
              resoleable).
            </p>
            <p>
              Note: Our suede products use the same top-tier construction
              methods and feature some added preventative protection; however,
              these leather types don&apos;t play as well with water, so we
              recommend trying to keep them dry.
            </p>
          </>
        ),
      },
      {
        id: 7,
        question:
          "How much does domestic (US) shipping cost? How long will it take to get my order?",
        answer: (
          <>
            <p>
              Standard shipping is free anywhere within the contiguous United
              States. Orders typically have a 1-3 business day processing time
              at our warehouse before they ship, but may take longer during the
              holidays due to high order volumes. As soon as your order ships,
              you will receive a tracking number and within 24 hours you will be
              able to see the estimated delivery date. Orders placed within the
              US typically take 1-5 business days to be delivered once shipped.
            </p>
            <p>
              Expedited shipping is available if you need your order in a hurry.
              You can upgrade your shipping method at checkout for an additional
              fee. Currently, this option is only available to customers in the
              contiguous United States. (Note: Expedited orders placed after 2pm
              ET will process the next business day. Orders do not ship on
              Saturday, Sunday, or United States holidays.)
            </p>
            <p>
              If you need your order even faster or have any special
              circumstances, please send us an email and we&apos;ll see what we
              can do.
            </p>
          </>
        ),
      },
      {
        id: 8,
        question: "How do I exchange or return my boots/shoes?",
        answer: (
          <>
            <p>
              We want you to love your Thursdays. Pretty simple, right? If
              you&apos;ve ordered the wrong size or have any other issue, you
              can always exchange or return your order for free within the
              contiguous United States so long as:
            </p>
            <ul>
              <li>
                Your items are{" "}
                <strong>unworn, undamaged, in re-sellable condition,</strong>{" "}
                (i.e. no creases or wear on soles), and in their original
                packaging.
              </li>
              <li>
                Your return request is submitted <strong>within 30 days</strong>{" "}
                of receiving your original order.
              </li>
            </ul>
            <p>
              Please view our full return policy{" "}
              <Link to={`/return-policy`}>here.</Link>
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 1,
    tagId: "about",
    title: "About Thursday",
    questions: [
      {
        id: 0,
        question: "Why 'Thursday'?",
        answer: (
          <>
            <p>
              On Thursday we work hard, but it&apos;s also the unofficial start
              of the weekend, and we design our products with that versatility
              in mind. With a focus on comfort, durability, and the highest
              quality materials, we deliver direct-to-consumer footwear at the
              lowest markup in the industry. Your life isn&apos;t
              one-dimensional. Your footwear shouldn&apos;t be either.
            </p>
            <p>
              For more info about us, please check out the{" "}
              <Link to={`/about/our-story`}>Our Story.</Link> page!
            </p>
          </>
        ),
      },
      {
        id: 1,
        question: "Where are you located? Do you have any stores?",
        answer: (
          <>
            <p>
              We&apos;re proud to be based in New York City. If you&apos;re
              nearby or visiting, we&apos;d love to have you come visit our
              store location! More info can be found{" "}
              <Link to={`/location`}>here.</Link> We look forward to meeting
              you!
            </p>
          </>
        ),
      },
      {
        id: 2,
        question: "Where are your products made?",
        answer: (
          <>
            <p>
              All of our products are handcrafted by skilled artisans at
              world-class manufacturing facilities. We currently manufacture
              products in León (Mexico), Porto (Portugal), Alicante (Spain), and
              Arkansas (USA). We have full-time team members in every country we
              manufacture in, and feel confident to proudly say that all of our
              suppliers and manufacturing partners offer the best quality
              craftsmanship and adhere to the highest fair labor and
              environmental stewardship standards.
            </p>
            <p>
              We are proud of our manufacturing processes and are fully
              committed to building products and a brand with integrity. If you
              have any questions about our process, commitment to quality, or
              want to know where a specific product was made, feel free to{" "}
              <Link to={`/contact-us`}>send us an email.</Link> We would be
              happy to answer your questions!
            </p>
          </>
        ),
      },
      {
        id: 3,
        question:
          "Who should I contact if I have a really great collaboration idea?",
        answer: (
          <>
            <p>
              We love working on exciting things with new people. If you have a
              great idea, <Link to={`/contact-us`}>send us an email</Link> and
              we&apos;ll get in touch if it&apos;s something we can work on
              together.
            </p>
          </>
        ),
      },
      {
        id: 4,
        question: "Do you offer any discounts or sales?",
        answer: (
          <>
            <p>
              We&apos;ve built our reputation on honest pricing, which is why we
              don&apos;t have any sales or discounts. We take pride in selling
              our products to our friends, family, and new customers at a great
              value year round. With that being said, if you&apos;re on a tight
              budget we often have lightly used pairs or factory seconds on hand
              that we can offer at a discount. If interested,{" "}
              <Link to={`/contact-us`}>send us an email</Link> with the style
              and size you&apos;re interested in. We will do our best to
              accommodate your request!
            </p>
          </>
        ),
      },
      {
        id: 5,
        question: "Do you sell gift cards?",
        answer: (
          <>
            <p>
              Yes! You can pick up an electronic gift card{" "}
              <Link to={`/gift-cards`}>here.</Link>
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 2,
    tagId: "sizing",
    title: "Sizing & Fit",
    questions: [
      {
        id: 0,
        question: "What size men's footwear should I order?",
        answer: (
          <>
            <p>
              For help finding the perfect fit for each style, please reference
              the sizing information on each product page. That said, here are
              some general guidelines for finding your size:
            </p>
            <ul>
              <li>
                <strong>For boots and dress shoes</strong>, we typically
                recommend ordering the same size you wear in other high quality
                leather boots or dress shoes, or ½ size smaller than you
                normally wear in sneakers. If you are between sizes, we
                recommend you order the smaller size. (We recommend sizing down
                because the leather will naturally stretch to form to your feet
                over time. An initially snug fit is the best way to start off a
                long-term relationship with your boots.)
              </li>
              <li>
                <strong>For sneakers</strong>, we typically recommend ordering
                the same size you normally wear in athletic sneakers. If you are
                between sizes, we recommend you order the larger size.
              </li>
            </ul>
            <p>
              Still unsure? <Link to={`/contact-us`}>Send us an email.</Link>{" "}
              We&apos;d love to help you find the right size!
            </p>
          </>
        ),
      },
      {
        id: 1,
        question: "What size women’s footwear should I order?",
        answer: (
          <>
            <p>
              For help finding the perfect fit for each style, please reference
              the sizing information on each product page. That said, here are
              some general guidelines for finding your size:
            </p>
            <ul>
              <li>
                <strong>For boots</strong>, we typically recommend ordering
                either the same size or ½ size larger than you normally wear to
                ensure the most comfortable fit. If you are between sizes, we
                recommend you order the larger size.
              </li>
              <li>
                <strong>For sneakers</strong>, we typically recommend ordering
                the same size you normally wear in athletic sneakers. If you are
                between sizes, we recommend you order the larger size.
              </li>
            </ul>
            <p>
              Still unsure? <Link to={`/contact-us`}>Send us an email.</Link>{" "}
              We&apos;d love to help you find the right size!
            </p>
          </>
        ),
      },
      {
        id: 2,
        question:
          "What width are your men's boots/shoes? Do you offer wider/narrower widths?",
        answer: (
          <>
            <p>
              Unless otherwise noted, all men’s footwear is listed in our custom
              ‘Standard’ width. The Standard width most closely conforms to a
              traditional D width, which fits about 80% of the United States
              population. It’s also slightly wider in a few areas to make the
              fit more comfortable. We also recommend the Standard width for
              customers who commonly purchase E widths.
            </p>
            <p>
              In select models, we also offer a ‘Wide’ width option, which is
              best for customers who wear EE or EEE widths.
            </p>
            <p>
              Many customers who wear EE widths have had success ordering ½ size
              larger than their normal size in our Standard width. Similarly,
              many customers who purchase C widths have had success ordering ½
              size smaller in our Standard width.
            </p>
          </>
        ),
      },
      {
        id: 3,
        question:
          "What width are your women's boots/shoes? Do you offer wider/narrower widths?",
        answer: (
          <>
            <p>
              All of our women&apos;s boots are currently available in a
              traditional B width, which fits about 80% of the United States
              population. If you are slightly wider (C width), we suggest trying
              a ½ size up. If you are slightly narrower (A width), we suggest
              trying a ½ size down. We don&apos;t currently offer wider or
              narrower widths for women&apos;s boots.
            </p>
          </>
        ),
      },
      {
        id: 4,
        question: "How should my boots fit?",
        answer: (
          <>
            <p>
              Our boots are meant to be snug at first since natural leather will
              stretch to form your feet over time. Keep in mind they should be
              snug, but not uncomfortable. Durable leathers can occasionally
              take more than a few wears to break in. The upshot is that once
              the leather flexes and your foot adapts, you&apos;ve got something
              durable enough to last for years!
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 3,
    tagId: "product",
    title: "Product & Quality",
    questions: [
      {
        id: 0,
        question: "Why do Thursdays cost so much less than other brands?",
        answer: (
          <>
            <p>
              Our footwear is handcrafted alongside similar products from other
              brands that charge you $300-800 per pair. Through responsive
              production, a lean business model, and long-term thinking, we’re
              able to make zero compromises in terms of quality materials,
              manufacturing, or business ethics and provide you a best-in-class
              product at a good price. We believe that offering you a great
              value is the foundation to long-term business success and is the
              right thing to do.
            </p>
          </>
        ),
      },
      {
        id: 1,
        question: "What makes Thursdays so comfortable?",
        answer: (
          <>
            <p>
              We build our footwear with your comfort in mind. Depending on the
              style, we use a variety of methods to ensure all-day comfort,
              including glove leather lining for a soft touch, cork bed midsoles
              that form to your feet over time, EVA foam comfort strips (used in
              athletic shoes) to provide shock absorption, and anti-fatigue
              steel shanks to provide arch support and additional stability. The
              end result is a comfortable footbed and a very smooth ride.
            </p>
          </>
        ),
      },
      {
        id: 2,
        question: "What type of leather do you use?",
        answer: (
          <>
            <p>
              All of our leather starts with hides from the USA, Italy,
              Portugal, or Spain. These premium selection hides are then tanned
              in North America or Italy at some of the most renowned tanneries
              in the world. Our two largest partners include the gold certified
              Le Farc tannery in Mexico and the world famous Horween tannery in
              Chicago. Le Farc was a finalist in the Americas region for the
              Tannery of the Year award in 2013 and is gold-certified for
              environmental sustainability by the Leather Working Group. Horween
              has been in operation since 1905 and is one of the best known
              tanneries in America. Aside from making the revered Chromexcel
              leather that we use, they are also the official leather provider
              to the NFL.
            </p>
          </>
        ),
      },
      {
        id: 3,
        question: "Is your footwear waterproof/water resistant?",
        answer: (
          <>
            <p>
              Our boots and shoes are water resistant and will keep your feet
              dry on typical rainy days, but we wouldn&apos;t recommend standing
              around in puddles in them. Products with welt construction feature
              a leather welt between the upper and the sole. This helps create a
              barrier against water entering the shoe (and makes them easily
              resoleable).
            </p>
            <p>
              Note: Our suede products use the same top-tier construction
              methods and feature some added preventative protection; however,
              these leather types don&apos;t play as well with water, so we
              recommend trying to keep them dry.
            </p>
          </>
        ),
      },
      {
        id: 4,
        question: "What is Goodyear welt construction?",
        answer: (
          <>
            <p>
              Goodyear welting is the gold standard method for footwear
              construction, and used in only the top 1% of men’s shoes. It
              creates a virtually waterproof seal at the insole and makes your
              shoes completely resoleable. In a Goodyear welt, the thread is
              sewn through the welt, the upper, and the insole rib. Through a
              separate stitch, the welt is attached to the outsole. For both of
              these stitching points, a lockstitch is used. While it is time
              intensive and requires specific machinery, it prevents the stitch
              from unraveling if it breaks down at any particular point in the
              shoe. This means that with proper care, the Thursdays you buy
              today will last you for years to come.
            </p>
            <p>
              While most of our men’s line features Goodyear welt construction,
              we also use Stitchout, Storm Welt, Veldtschoen, and Blake Stitch
              constructions. These construction methods are also resoleable and
              highly water-resistant.
            </p>
          </>
        ),
      },
      {
        id: 5,
        question: "What is WeatherSafe™ Suede?",
        answer: (
          <>
            <p>
              Soft and supple with surprising strength and longevity, it’s suede
              with an upgrade. Starting with natural suede from Tier 1 USA
              Cattle, the WeatherSafe™ collection features a blended solution of
              waterproof and hydrophobic compounds introduced to the leather at
              the start of the tanning process. This slower and more methodical
              approach allows the proprietary blend, rich in oils and waxes, to
              penetrate deep within the leather.
            </p>
            <p>
              When introduced to water, a clathrate-like structure is created
              between the molecules of liquid water to reduce the surface area
              tension between the liquid and leather. In simpler terms, our
              WeatherSafe™ solution helps prevent water from penetrating into
              the leather.
            </p>
            <p>
              While the effects are long-lasting, this is still natural suede we
              are talking about. We don’t want people to think there will not be
              some water absorption after standing in a puddle, trudging through
              snow, or the passing of time. The top-layers of the solution will
              be broken down after repetitive wear and exposure to liquids,
              especially alcohol.
            </p>
            <p>
              One of the features we are most proud of is the maintenance of
              every characteristic of premium suede. We always hated being
              afraid to wear suede to a crowded venue or whenever we saw a rain
              cloud. We&apos;ve been enjoying our WeatherSafe™ suede for a while
              now, and are excited to give people a chance to lace up their
              suede footwear with a little more confidence.
            </p>
          </>
        ),
      },
      {
        id: 6,
        question:
          "The product I want is sold out. What should I do and how often do you restock?",
        answer: (
          <>
            <p>
              While our products can sell out fast, we regularly restock our
              products on a rolling basis. Though we aren&apos;t able to provide
              exact restock dates for individual styles, the best way to be
              notified of a restock is to join our waitlist for the size and
              style you want. This way, you will receive an email as soon as we
              receive them in stock! To do this, click the “Join Waitlist”
              button on the product page, sign up with your email, and we will
              automatically notify you when your pair is back in stock.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 4,
    tagId: "shipping",
    title: "Shipping & Order Details",
    questions: [
      {
        id: 0,
        question:
          "How much does domestic (US) shipping cost? How long will it take to get my order?",
        answer: (
          <>
            <p>
              Standard shipping is free anywhere within the contiguous United
              States. Orders typically have a 1-3 business day processing time
              at our warehouse before they ship, but may take longer during the
              holidays due to high order volumes. As soon as your order ships,
              you will receive a tracking number and within 24 hours you will be
              able to see the estimated delivery date. Orders placed within the
              US typically take 1-5 business days to be delivered once shipped.
            </p>
            <p>
              Expedited shipping is available if you need your order in a hurry.
              You can upgrade your shipping method at checkout for an additional
              fee. Currently, this option is only available to customers in the
              contiguous United States. (Note: Expedited orders placed after 2pm
              ET will process the next business day. Orders do not ship on
              Saturday, Sunday, or United States holidays.)
            </p>
            <p>
              If you need your order even faster or have any special
              circumstances, please{" "}
              <Link to={`/contact-us`}>send us an email</Link> and we&apos;ll
              see what we can do.
            </p>
          </>
        ),
      },
      {
        id: 1,
        question: "Do you ship to Armed Forces (APO/FPO/DPO) addresses?",
        answer: (
          <>
            <p>
              Yes! Orders sent to these addresses will be sent via USPS Priority
              shipping. While it is more expensive to ship to these addresses
              than to a residential address, we are proud to support our friends
              in the Armed Forces and are happy to cover the cost of shipping
              for these orders. We would only kindly request the customer cover
              the cost of return shipping if a return or exchange is needed.
            </p>
          </>
        ),
      },
      {
        id: 2,
        question:
          "Do you ship internationally (i.e. outside of the U.S.)? How does it work?",
        answer: (
          <>
            <p>
              Yes, we ship internationally! Although it’s more expensive and
              logistically complex, we work hard to ensure our products are
              available in as many locations as possible and are constantly
              evaluating ways we can improve the experience for customers around
              the world.
            </p>
            <p>
              For more details on shipping to your location, please visit our
              International Shipping & Returns page{" "}
              <Link to={`/international-shipping-returns`}>here!</Link>
            </p>
          </>
        ),
      },
      {
        id: 3,
        question: "How do I track my order?",
        answer: (
          <>
            <p>
              Once your order ships, you&apos;ll receive a shipping confirmation
              email and tracking number. If it has been more than 5 business
              days since you placed your order and you still have not received a
              tracking number, <Link to={`/contact-us`}>send us an email</Link>{" "}
              and we will gladly assist you!
            </p>
          </>
        ),
      },
      {
        id: 4,
        question: "My tracking number isn't working. What should I do?",
        answer: (
          <>
            <p>
              New tracking numbers can take up to 24 hours to activate from the
              time you receive your shipping confirmation. If it&apos;s been
              more than 24 hours and your tracking number still isn&apos;t
              working, <Link to={`/contact-us`}>send us an email</Link> and
              we&apos;ll help get you a status update!
            </p>
          </>
        ),
      },
      {
        id: 5,
        question: "I am missing something from my order. What should I do?",
        answer: (
          <>
            <p>
              Accessories may ship separately, so it&apos;s perfectly normal for
              items to arrive at different times. If it&apos;s been a few days
              and you&apos;re concerned about the rest of your order, just{" "}
              <Link to={`/contact-us`}>send us an email</Link> and we&apos;ll be
              happy to check the status for you!
            </p>
          </>
        ),
      },
      {
        id: 6,
        question:
          "How do I change or cancel my order after it has been placed?",
        answer: (
          <>
            <p>
              Our orders are packaged and shipped out quickly after they are
              placed to ensure that your boots arrive as soon as possible.
              Because of this, any changes to your order (including address
              changes, product changes, or cancellations) must be requested as
              soon as possible after your order has been placed. We&apos;ll do
              our best to accommodate your request, but cannot guarantee any
              changes will be able to be made after your order has been placed.
              Depending on the amount of time after the order has been placed,
              order changes may be subject to a fee of $17.60.
            </p>
            <p>
              Please note that we cannot currently accommodate order changes or
              cancellations for Kato or Yellow108 products, or for international
              orders.
            </p>
            <p>
              Need to make a change to your order?{" "}
              <Link to={`/contact-us`}>send us an email</Link>.
            </p>
          </>
        ),
      },
      {
        id: 7,
        question: "Can I pay for my order in installments? How does it work?",
        answer: (
          <>
            <p>
              Yes! We accept payment through Sezzle, which allows customers to
              pay for their order in 4 equal installments that are automatically
              charged every two weeks. They don&apos;t charge interest, and your
              order will ship immediately!
            </p>
            <p>
              Sezzle is currently available for orders shipping within the
              United States and Canada. To use it, just select
              &apos;Sezzle&apos; at the Payment step in the checkout process.
              All you need is a debit or credit card, and you&apos;ll receive an
              instant approval decision.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 5,
    tagId: "exchanges",
    title: "Exchanges & Returns",
    questions: [
      {
        id: 0,
        question: "How do I exchange or return my boots/shoes?",
        answer: (
          <>
            <p>
              We want you to love your Thursdays. Pretty simple, right? If
              you’ve ordered the wrong size or have any other issue, you can
              always exchange or return your order for free within the
              contiguous United States so long as:
            </p>
            <ul>
              <li>
                Your items are{" "}
                <strong>unworn, undamaged, in re-sellable condition</strong>,
                (i.e. no creases or wear on soles), and in their original
                packaging.
              </li>
              <li>
                Your return request is submitted <strong>within 30 days</strong>{" "}
                of receiving your original order.
              </li>
            </ul>
            <p>
              Please view our full return policy{" "}
              <Link to={`/return-policy`}>here.</Link>
            </p>
          </>
        ),
      },
      {
        id: 1,
        question: "How do international (non-U.S.) returns work?",
        answer: (
          <>
            <p>
              We want you to love your boots. Pretty simple, right? For details
              on how exchanges & returns work for your location, please visit
              our International Shipping & Returns page{" "}
              <Link to={`/international-shipping-returns`}>here!</Link>
            </p>
          </>
        ),
      },
      {
        id: 2,
        question: "Where is my return?",
        answer: (
          <>
            <p>
              If you placed a return or exchange through our online portal and
              it&apos;s been longer than 14 business days since our warehouse
              received your return, drop us a line so that we can expedite the
              process. Contact us <Link to={`/contact-us`}>here</Link>.
            </p>
          </>
        ),
      },
      {
        id: 3,
        question: "When should I expect my refund?",
        answer: (
          <>
            <p>
              Once our warehouse has received your return, please allow up to 2
              weeks for a refund or store credit to be issued. If it has been
              longer than two weeks, please contact us{" "}
              <Link to={`/contact-us`}>here</Link>.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: 6,
    tagId: "shoecare",
    title: "Shoe Care",
    questions: [
      {
        id: 0,
        question: "How do I care for my Thursdays?",
        answer: (
          <>
            <p>
              A little maintenance goes a long way! Check out our{" "}
              <Link to={`/boot-care`}>boot care guide</Link> for some tips on
              how to keep your Thursdays in the best possible shape.
            </p>
            <p>
              All of our products are designed for the long haul and may need
              additional care from time to time. If you need professional care
              help for things like resoling your boots, please refer to our{" "}
              <Link to={`/recommended-cobblers`}>
                recommended cobblers page.
              </Link>{" "}
              Whether you need a quick shine before the weekend or a full resole
              of your boots, each partner was selected for their excellent
              reputation with local customers and for their experience with our
              products, and will help ensure your Thursdays last for years to
              come!
            </p>
          </>
        ),
      },
      {
        id: 1,
        question: "Are your men's boots/shoes resoleable?",
        answer: (
          <>
            <p>
              All of our footwear is constructed with durability, comfort, and
              versatility in mind. Every pair of our men&apos;s boots and dress
              shoes are resoleable, though our sneakers are not easily
              resoleable.
            </p>
            <p>
              Need to resole your boots or shoes? Check out a list of our{" "}
              <Link to={`/recommended-cobblers`}>
                recommended cobblers page.
              </Link>
            </p>
          </>
        ),
      },
      {
        id: 2,
        question: "Are your women's boots resoleable?",
        answer: (
          <>
            <p>
              All of our footwear is constructed with comfort, versatility, and
              longevity in mind. Some models, like the Goodyear Welt Captain,
              are easily resoleable. Other models, like the Duchess, are not
              easily resoleable, but if you wear through the outsole you can
              easily replace the outsole or add additional rubber to the heel.
              In any case, we want you to love your boots and are happy to
              answer any questions you have at any point, so please don&apos;t
              hesitate to send us an email if you need any help or advice!
            </p>
            <p>
              Need to resole your boots or shoes? Check out a list of our{" "}
              <Link to={`/recommended-cobblers`}>
                recommended cobblers page.
              </Link>
            </p>
          </>
        ),
      },
      {
        id: 3,
        question: "Should I waterproof my Thursdays before wearing them?",
        answer: (
          <>
            <p>
              The natural oils and waxes found in many of our leathers do a
              great job of fending off the snow and rain. Our WeatherSafe™ Suede
              collection was even developed specifically with bad weather in
              mind.
            </p>
          </>
        ),
      },
    ],
  },
];

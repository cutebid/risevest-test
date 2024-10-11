import Link from "next/link";
import Image from "next/image";

const exploreLinks = [
  { id: 1, textLink: "Investmet Club", link: "#" },
  { id: 2, textLink: "Blog", link: "#" },
];

const productLinks = [
  { id: 1, textLink: "Rise App", link: "/" },
  { id: 2, textLink: "Wallets", link: "#" },
  { id: 3, textLink: "Asset Classes", link: "#" },
];

const contactLinks = [
  { id: 1, textLink: "0818 714 7405", link: "tel:08187147405" },
  { id: 2, textLink: "hello@rise.capital", link: "mailto:hello@rise.capital" },
  { id: 3, textLink: "Newsletter", link: "/" },
  { id: 4, textLink: "Instagram", link: "/" },
  { id: 5, textLink: "Twitter", link: "/" },
];

const otherLinks = [
  { id: 1, textLink: "About Us", link: "#" },
  { id: 2, textLink: "Careers", link: "#" },
  { id: 3, textLink: "FAQs", link: "#" },
  { id: 4, textLink: "Contact Info", link: "#" },
  { id: 5, textLink: "Press", link: "#" },
  { id: 5, textLink: "Rise Impact", link: "#" },
];

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { id: number; textLink: string; link: string }[];
}) => (
  <div>
    <h4 className="font-semibold text-base mb-2">{title}</h4>
    <div>
      {links.map(({ id, textLink, link }) => (
        <p
          className="text-dark_gray my-4 link cursor-pointer text-base hover:text-primary"
          key={id}
        >
          <Link href={link}>{textLink}</Link>
        </p>
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <div className="px-4  xl:pl-20 xl:pr-28 pt-20 pb-5">
      <div>
        <div className="grid grid-cols-2  md:flex md:justify-between text-base text-gray gap-y-5 md:gap-y-0">
          <div className="mb-2">
            <Link href="/" className="flex items-center gap-x-1">
              <Image src="/logo-black.png" alt="logo" width={56} height={16} />
            </Link>
            <div>
              {otherLinks.map(({ id, textLink, link }) => (
                <p
                  className=" my-4 link cursor-pointer text-base hover:text-primary"
                  key={id}
                >
                  <Link href={link}>{textLink}</Link>
                </p>
              ))}
            </div>
          </div>
          <FooterSection title="Explore" links={exploreLinks} />
          <FooterSection title="Products" links={productLinks} />
          <FooterSection title="Contact Us" links={contactLinks} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

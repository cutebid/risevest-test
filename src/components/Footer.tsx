import Link from "next/link";
import Image from "next/image";
import { down_arrow_slant } from "@/utils/svg";
import { exploreLinks, productLinks,contactLinks,otherLinks } from "@/static/data";



const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { id: number; textLink: string; link: string , arrow:boolean}[];
}) => (
  <div>
    <h4 className="font-semibold text-base mb-2">{title}</h4>
    <div>
      {links.map(({ id, textLink, link, arrow }) => (
        <p
          className="my-4 link cursor-pointer text-base"
          key={id}
        >
          <Link className="flex items-center gap-x-2" href={link}>{textLink} <span> {arrow && down_arrow_slant}</span></Link>
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
                  <Link href={link}>{textLink} </Link>
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

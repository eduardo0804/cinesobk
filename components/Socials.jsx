import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
const socials = [
  {
    icon: <FaGithub />,
    url: "https://github.com/eduardo0804",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/jesuslazaro08/",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/eduardo_0804/",
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/profile.php?id=100009695164564",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.url} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

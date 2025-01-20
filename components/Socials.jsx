import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaMailBulk } from "react-icons/fa";

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
    icon: <FaWhatsapp />,
    url: "https://wa.me/51953761813",
  },
  {
    icon: <FaMailBulk />,
    url: "mailto:jesuslazaro0207@gmail.com", // Cambié esto para hacerlo un mailto
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        // Si la URL es un correo, lo tratamos con <a> directamente
        return item.url.startsWith("mailto:") ? (
          <a
            key={index}
            href={item.url}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ) : (
          // Aquí, Link ahora maneja el <a> implícitamente
          <Link
            key={index}
            href={item.url}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const socialData = {
  facebook: "https://www.facebook.com/profile.php?id=100052241268987",
  instagram: "https://www.instagram.com/viviendo_migransueno/",
  youtube: "https://www.youtube.com/@viviendomigransueno1307",
  whatsapp: "https://wa.me/524611169054",
};

export const SocialLinks = ({ className = "" }) => {
  const { facebook, instagram, youtube, whatsapp } = socialData;

  return (
    <ul className={`flex gap-2 items-center ${className}`}>
      {facebook && (
        <li>
          <a
            aria-label="facebook"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary border-2 border-primary inline-flex items-center justify-center p-1 transition-colors duration-200 rounded-full"
          >
            <FaFacebook size={24} />
          </a>
        </li>
      )}
      {instagram && (
        <li>
          <a
            aria-label="instagram"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary border-2 border-primary inline-flex items-center justify-center p-1 transition-colors duration-200 rounded-full"
          >
            <FaInstagram size={24} />
          </a>
        </li>
      )}
      {youtube && (
        <li>
          <a
            aria-label="youtube"
            href={youtube}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary border-2 border-primary inline-flex items-center justify-center p-1 transition-colors duration-200 rounded-full"
          >
            <FaYoutube size={24} />
          </a>
        </li>
      )}
      {whatsapp && (
        <li>
          <a
            aria-label="whatsapp"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary border-2 border-primary inline-flex items-center justify-center p-1 transition-colors duration-200 rounded-full"
          >
            <FaWhatsapp size={24} />
          </a>
        </li>
      )}
    </ul>
  );
};

import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { siteConfig } from "@/config";

export const SocialLinks = ({ className = "" }) => {
  const { facebook, instagram, youtube, whatsapp } = siteConfig.social;
  const facebookUrl = facebook.url;
  const instagramUrl = instagram.url;
  const youtubeUrl = youtube.url;
  const whatsappUrl = whatsapp.url;

  return (
    <ul className={`flex gap-2 items-center ${className}`}>
      {facebookUrl && (
        <li>
          <a
            aria-label="facebook"
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary border-2 border-primary inline-flex items-center justify-center p-1 transition-colors duration-200 rounded-full"
          >
            <FaFacebook size={24} />
          </a>
        </li>
      )}
      {instagramUrl && (
        <li>
          <a
            aria-label="instagram"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary border-2 border-primary inline-flex items-center justify-center p-1 transition-colors duration-200 rounded-full"
          >
            <FaInstagram size={24} />
          </a>
        </li>
      )}
      {youtubeUrl && (
        <li>
          <a
            aria-label="youtube"
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary border-2 border-primary inline-flex items-center justify-center p-1 transition-colors duration-200 rounded-full"
          >
            <FaYoutube size={24} />
          </a>
        </li>
      )}
      {whatsappUrl && (
        <li>
          <a
            aria-label="whatsapp"
            href={whatsappUrl}
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMoon, faEnvelope, faMapMarkerAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYoutube, faTelegram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-white noto-serif-khmer">
      <div className="m-auto flex flex-col md:flex-row justify-between bg-[#07559D] py-24 px-8 md:px-14">
        {/* Logo and Social Media */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshR37XmWDFaE_JZh2-FxVS5nh8lwXM2y5Iw&s" alt="Digital Government Committee" className="mb-4 rounded-full h-20 w-20 m-auto" />
          <p>គណៈកម្មាធិការរដ្ឋាភិបាលឌីជីថល</p>
          <p className="text-xs">DIGITAL GOVERNMENT COMMITTEE</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} className="h-8 w-8" />
            </a>
            <a href="#" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} className="h-8 w-8" />
            </a>
            <a href="#" aria-label="Telegram">
              <FontAwesomeIcon icon={faTelegram} className="h-8 w-8" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} className="h-8 w-8" />
            </a>
            <a href="#" aria-label="TikTok">
              <FontAwesomeIcon icon={faTiktok} className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="mb-4 text-xl">តំណរហ័ស</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMoon} className="text-xs h-3 w-3 mr-2" />
              <a href="/">ទំព័រដើម</a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMoon} className="text-xs h-3 w-3 mr-2" />
              <a href="#">អំពីយើង</a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMoon} className="text-xs h-3 w-3 mr-2" />
              <a href="#">បញ្ចាក់សារណា</a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMoon} className="text-xs h-3 w-3 mr-2" />
              <a href="#">ក្តីនិមន្ដ និងច្បាប់</a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMoon} className="text-xs h-3 w-3 mr-2" />
              <a href="#">គម្រោង</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="mb-4 text-xl">ទំនាក់ទំនង</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="h-4 w-4 mr-2" />
              <a href="tel:+855967777515">លេខទូរស័ព្ទ: +855 96 7777 515</a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faTelegram} className="h-4 w-4 mr-2" />
              <a href="https://t.me/dgcgovkh">https://t.me/dgcgovkh</a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-2" />
              <a href="mailto:support@dgc.gov.kh">អ៊ីម៉ែល: support@dgc.gov.kh</a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 mr-2" />
              <a href="#">អាសយដ្ឋាន: អាគារលេខ 013 មហាវិថីព្រះមុន្នីវង្ស</a>
            </li>
          </ul>
        </div>

        {/* External Links */}
        <div>
          <h3 className="mb-4 text-xl">តំណភ្ជាប់ផ្សេងៗ</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="h-4 w-4 mr-2" />
              <a href="#">ក្រសួងសាធារណការ និងដឹកជញ្ជូន</a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="h-4 w-4 mr-2" />
              <a href="#">កំណត់គោលការណ៍បញ្ញត្តិ និងអាជ្ញាធរ</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-start text-sm py-6 px-12 border-t border-blue-950 bg-blue-950">
        <p>&copy; 2024 ~ ស្ថាប័នធារទីការគ្រប់គ្រងរដ្ឋាភិបាលឌីជីថល</p>
      </div>
    </footer>
  );
};

export default Footer;

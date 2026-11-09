
import "./Footer.css";

const socialLinks = [
  // {
  //   name: "LinkedIn",
  //   url: "https://www.linkedin.com/company/alkemy-edtech/",
  //   icon: "https://cdn.simpleicons.org/linkedin/FFFFFF",
  // },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@alkemyedtech",
    icon: "https://cdn.simpleicons.org/youtube/FFFFFF",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/alkemyedtech",
    icon: "https://cdn.simpleicons.org/instagram/FFFFFF",
  },
  {
    name: "X",
    url: "https://x.com/AlkemyEdtech_",
    icon: "https://cdn.simpleicons.org/x/FFFFFF",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/AlkemyEdTech/",
    icon: "https://cdn.simpleicons.org/facebook/FFFFFF",
  },
  {
    name: "Snapchat",
    url: "https://snapchat.com/t/ZhS8Lc9z",
    icon: "https://cdn.simpleicons.org/snapchat/FFFFFF",
  },
];

export default function Footer() {
  return (
    <footer className="toi-footer">
      <div className="toi-footer__inner">

        {/* LEFT SIDE: LOGO AND COPYRIGHT */}
        <div className="toi-footer__brand">
          {/* <a
            href="https://www.alkemyedtech.com"
            className="toi-footer__logo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alkemy EdTech"
          >
            <img
              src="/logo.png"
              alt="Alkemy EdTech Logo"
              className="toi-footer__logo-image"
            />
           
              <span className="toi-footer__logo-text">
                ALKEMY EDTECH
              </span>
              
          </a> */}
           {/* <span clas="flex-col"> </span> */}
          {/* <span>
                  DPIIT-recognized startup
               </span> 
          */}
          <a
            href="https://www.alkemyedtech.com"
            className="toi-footer__logo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Alkemy EdTech"
          >
            <img
              src="/logo.png"
              alt="Alkemy EdTech Logo"
              className="toi-footer__logo-image"
            />

            <span className="toi-footer__logo-content">
              <span className="toi-footer__logo-text">
                ALKEMY EDTECH
              </span>

              <span className="toi-footer__startup-text">
                DPIIT-RECOGNIZED STARTUP
              </span>
            </span>
          </a>

          <p className="toi-footer__copyright">
            © 2026 Alkemy EdTech is a brand of AquityX (OPC) Private Limited. All rights reserved.
          </p>

          {/* SOCIAL MEDIA ICONS */}
          <div className="toi-footer__social-media">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="toi-footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Alkemy EdTech on ${social.name}`}
                title={social.name}
              >
                <img
                  src={social.icon}
                  alt=""
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: CONTACT DETAILS */}
        <div className="toi-footer__contact">

          <a
            href="mailto:support@alkemyedtech.com"
            className="toi-footer__contact-item"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="m4 6 8 7 8-7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>support@alkemyedtech.com</span>
          </a>

          <a
            href="tel:+919100530909"
            className="toi-footer__contact-item"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-5-2-2 3a15 15 0 0 1-7-7l3-2-2-5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>+91 9100530909</span>
          </a>

          <a
            href="https://wa.me/919100530909"
            className="toi-footer__contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 8.2c.3-.5.6-.5 1-.5h.4c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.7.9c-.2.2-.2.4 0 .6.7 1.2 1.7 2.1 2.9 2.7.2.1.4.1.6-.1l1-1.2c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .5-.2 1.4-.8 1.9-.5.5-1.3.8-2.1.7-1.2-.1-2.8-.8-4.4-2.2-1.4-1.3-2.5-3-2.8-4.2-.3-1.1.1-2 .8-2.6Z"
                fill="currentColor"
              />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>

        </div>
      </div>
    </footer>
  );
}

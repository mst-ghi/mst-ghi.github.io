import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconMail,
} from '@tabler/icons-react';
import { AppData } from '@/data';

const SocialLinks = () => {
  const items = [
    { icon: IconBrandGithub, href: AppData.socials.github, label: 'GitHub' },
    { icon: IconBrandLinkedin, href: AppData.socials.linkedin, label: 'LinkedIn' },
    { icon: IconBrandTelegram, href: AppData.socials.telegram, label: 'Telegram' },
    { icon: IconMail, href: `mailto:${AppData.email}`, label: 'Email' },
  ];

  return (
    <>
      {items.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target='_blank'
          rel='noreferrer'
          className='icon-btn'
          aria-label={label}
        >
          <Icon size={20} stroke={1.7} />
        </a>
      ))}
    </>
  );
};

export default SocialLinks;

import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandInstagram,
} from "@tabler/icons-react";

interface SocialLinksProps {
    id?: string;
    className?: string;
    iconSize?: number;
}

export default function SocialLinks({
    id,
    className = "",
    iconSize = 22,
}: SocialLinksProps) {
    const SOCIAL_LINKS = [
        {
            name: "GitHub",
            url: "https://github.com/nasgunawann",
            Icon: IconBrandGithub,
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/nasgunawann",
            Icon: IconBrandLinkedin,
        },
        {
            name: "Instagram",
            url: "https://instagram.com/nasgunawann",
            Icon: IconBrandInstagram,
        },
    ];

    return (
        <div id={id} className={`flex items-center ${className}`}>
            {SOCIAL_LINKS.map(({ url, Icon, name }) => (
                <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-text/40 hover:text-brand-accent transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={name}
                >
                    <Icon size={iconSize} stroke={1.5} />
                </a>
            ))}
        </div>
    );
}

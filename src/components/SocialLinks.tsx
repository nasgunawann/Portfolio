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
                    className="p-3.5 border border-brand-text/20 bg-brand-bg/80 backdrop-blur-sm rounded-full text-brand-text/80 shadow-lg hover:bg-brand-text hover:text-brand-bg hover:scale-110 transition-all duration-300 flex items-center justify-center"
                    aria-label={name}
                >
                    <Icon size={iconSize} stroke={1.5} />
                </a>
            ))}
        </div>
    );
}

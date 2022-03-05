type SocialItemProps = {
  href: string;
  src: string;
  alt: string;
}

function SocialItem({ href, src, alt }: SocialItemProps): JSX.Element {
  return (
    <li>
      <a href={href}>
        <img src={src} alt={alt} />
      </a>
    </li>
  )
}

export default SocialItem


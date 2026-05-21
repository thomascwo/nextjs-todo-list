import { Link, LinkProps } from "@heroui/react";
import clsx from "clsx";

interface Props extends LinkProps {
  text: string;
  href?: string;
  showIcon?: boolean;
}

export default function MyLink(props: Props) {
  const { text, href, showIcon = false, className, ...rest } = props;
  return (
    <Link
      className={clsx(
        "text-white decoration-white hover:decoration-white/60 hover:opacity-60",
        className,
      )}
      href={href}
      {...rest}
    >
      {text}
      {showIcon && <Link.Icon color="white" className="opacity-100" />}
    </Link>
  );
}

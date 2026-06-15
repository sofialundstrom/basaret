import Image from "next/image";

type AlkoholfriIconProps = {
  size?: number;
  className?: string;
};

export function AlkoholfriIcon({ size = 24, className = "" }: AlkoholfriIconProps) {
  return (
    <Image
      src="/images/misc/alcohol.png"
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}

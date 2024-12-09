import Image from 'next/image';

const LazyImage = ({ src, alt }) => (
  <Image src={src} alt={alt} width={600} height={400} loading="lazy" />
);

export default LazyImage;
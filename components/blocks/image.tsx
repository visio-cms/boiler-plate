import Image from 'next/image';
import { ImageT } from 'visio-cms';

export default function ImageBox({ image }: { image: ImageT }) {
  return (
    <Image
      src={image?.url || ''}
      width={image?.width || 0}
      height={image?.height || 0}
      sizes=""
      alt={image?.alt || ''}
    />
  );
}

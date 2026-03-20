type BlogImageProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function BlogImage({
  src,
  alt,
  caption,
}: BlogImageProps) {
  return (
    <figure className="my-12 lg:my-16">
      <div className="glass-card border-white/10 overflow-hidden">
        <div className="relative">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </div>
      </div>

      {caption && (
        <figcaption className="text-center text-sm text-bp-support/60 mt-4 leading-relaxed max-w-3xl mx-auto">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
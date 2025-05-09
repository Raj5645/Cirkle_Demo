function BackgroundContainer() {
  const images = Array.from({ length: 24 }, (_, i) => `/pics/${i + 1}.png`);

  return (
    <div className="background-container">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`background ${i + 1}`}
          className="background-image"
          style={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${0.5 + Math.random()})`,
            filter: 'blur(3px) brightness(0.7)', // blur effect and dim
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundContainer;

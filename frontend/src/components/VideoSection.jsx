export default function VideoSection() {
  return (
    <section className="py-4 md:py-14 bg-[#f5f5f5]">
      <div className="max-w-10/12 mx-auto px-0 sm:px-6">

        <h2 className="heading text-[#005ca9] uppercase mb-10 sm:mb-12">
          LEARN MORE ABOUT US
        </h2>

        <iframe
          className="w-full h-[400px] md:h-[600px]"
          src="https://www.youtube.com/embed/WjjvHceiip0?start=8"
          title="youtube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

      </div>
    </section>
  );
}
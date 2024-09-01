export default function LandingPage() {
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center bg-custom-gradient bg-[length:200%_200%] animate-gradient-move text-white">
      <div className="flex flex-col items-center justify-center text-center align-middle">
        <h1
          className="font-bold shadow-md md:text-8xl max-sm:text-6xl shadow-inherit"
          data-aos="zoom-in"
        >
          Bonstom Carvalho
        </h1>
        <p
          className="mt-4 font-light md:text-lg max-sm:text-xs max-sm:w-8/12"
          data-aos="zoom-in"
        >
          - Passionate about changing the world with technology. -
        </p>
      </div>
    </section>
  );
}

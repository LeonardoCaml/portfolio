function Footer() {
  return (
    <>
      <div className="h-44 py-4 w-full flex flex-col items-center justify-center bg-linear-to-r from-purple-500 via-purple-800 to-purple-500 space-y-4">
        <img src="./Leo.png" alt="logo" width={100} />
        <p>
          Desenvolvido e projetado por{" "}
          <span className="font-bold">Leo.Dev</span>
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/LeonardoCaml" target="_blank">
            <img
              src="./github.png"
              alt="github"
              className="w-9 h-9 hover:scale-110 transition"
            />
          </a>
          <a
            href="https://www.instagram.com/leonardo_cml/?hl=pt-br"
            target="_blank"
          >
            <img
              src="./instagram.png"
              alt="instagram"
              className="w-9 h-9 hover:scale-110 transition"
            />
          </a>
          <a href="https://x.com/leozin_camelo" target="_blank">
            <img
              src="./twitter.png"
              alt="twitter"
              className="w-9 h-9 hover:scale-110 transition"
            />
          </a>
          <a href="https://www.linkedin.com/in/leonardo-dev/" target="_blank">
            <img
              src="linkedIn.png"
              alt="linkedIn"
              className="w-9 h-9 hover:scale-110 transition"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;

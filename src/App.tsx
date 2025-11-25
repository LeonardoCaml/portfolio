import "./App.css";
import Button from "./components/button";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const projetos = [
  {
    titulo: "Code Learner",
    link: "https://blog-7qlly6hnp-leonardocamelos-projects.vercel.app/",
    img: "./codelearner.png",
  },
  {
    titulo: "Fintrack",
    link: "https://fintrack-personal-dashboard.vercel.app/",
    img: "./fintrack.png",
  },
  {
    titulo: "Oficina Suprema",
    link: "https://v0-landing-page-recreation-rgw6i1vxn-leonardocamelos-projects.vercel.app/",
    img: "./suprema.png",
  },
  {
    titulo: "Codicar",
    link: "https://v0-landing-page-recreation-z4.vercel.app/",
    img: "./codicar.png",
  },
  {
    titulo: "Expro BR",
    link: "https://v0-landing-page-recreation-s5.vercel.app/",
    img: "./expro-br.png",
  },
  {
    titulo: "Olhos da Cara",
    link: "https://v0-landing-page-recreation-cs.vercel.app/",
    img: "./olhos.png",
  },
  {
    titulo: "Cerrado Auto Center",
    link: "https://v0-landing-page-recreation-ox.vercel.app/",
    img: "./cerrado.png",
  },
  {
    titulo: "Xbox Series X",
    link: "https://landing-page-xbox.vercel.app/",
    img: "./xbox.png",
  },
];

const testimonial = [
  {
    avatar: "GP",
    nome: "Gustavo Pereira",
    comentario:
      "O site ficou incrível, só tenho a agreder. Inclusive recomendarei seu serviço para meus colegas de profissão",
  },
  {
    avatar: "IM",
    nome: "Igor Martins",
    comentario:
      "No começo eu achei que não seria necessário investir em uma landing page, mas decidi dar uma chance. Logo na primeira semana, já tive mais de 1000 acessos, realmente não esperava isso!",
  },
  {
    avatar: "GM",
    nome: "Gabriela Melo",
    comentario:
      "O novo site ficou lindo! Ainda pretendo adicionar outras seções no site, mas no geral, ele está visualmente agradável. Sinto que o número de acessos aumentou nesses últimos dias",
  },
];

function App() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5591981888897?text=Olá%2C%20adorei%20o%20seu%20portifolio%2C%20gostaria%20de%20conversar!",
      "_blank"
    );
  };
  return (
    <>
      <div
        id="home"
        className="max-w-screen bg-linear-65 from-purple-500 to-pink-600"
      >
        <Navbar />
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 px-4 py-10">
          {/* Texto */}
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <p className="text-lg lg:text-xl">Olá, me chamo Leonardo</p>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Eu sou um <br />
              desenvolvedor <br />
              <span className="italic font-semibold text-5xl lg:text-6xl">
                Front-end
              </span>
            </h1>

            <p className="text-base lg:text-lg">Venha conhecer meu trabalho</p>

            <div className="flex justify-center lg:justify-start gap-4 mt-4">
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

              <a
                href="https://www.linkedin.com/in/leonardo-dev/"
                target="_blank"
              >
                <img
                  src="./linkedIn.png"
                  alt="linkedIn"
                  className="w-9 h-9 hover:scale-110 transition"
                />
              </a>
            </div>
          </div>

          {/* Imagem HERO */}
          <div className="flex justify-center">
            <img
              src="hero.png"
              alt="hero"
              className="w-64 sm:w-80 md:w-[28rem] lg:w-[30rem] object-contain"
            />
          </div>
        </div>

        <div className="bg-zinc-800">
          <div className="flex flex-col lg:flex-row justify-between items-center p-10 mx-auto max-w-6xl space-y-4 text-center lg:text-left">
            {/* Bloco de Experiência */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
              <h1 className="text-5xl font-bold text-white">3</h1>
              <p className="text-lg text-gray-400 leading-none">
                Anos de experiência <br /> na área
              </p>
            </div>

            {/* Bloco de Projetos */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
              <h1 className="text-5xl font-bold text-white">+15</h1>
              <p className="text-lg text-gray-400 leading-none">
                Projetos desenvolvidos para <br /> empresas de pequeno e médio
                porte
              </p>
            </div>

            {/* Ícones */}
            <div className="flex gap-4 items-center justify-center flex-wrap">
              <img
                src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                className="w-10"
                alt="javascript"
              />
              <img
                src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
                className="w-10"
                alt="reactJS"
              />
              <img
                src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
                className="w-10"
                alt="nextJS"
              />
              <img
                src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
                className="w-10"
                alt="tailwind"
              />
              <img
                src="https://img.icons8.com/?size=100&id=b6vIINYN0kfW&format=png&color=000000"
                className="w-10"
                alt="bootstrap"
              />
              <img
                src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
                className="w-10"
                alt="postgresql"
              />
              <img
                src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
                className="w-10"
                alt="nodejs"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="sobre" className="bg-orange-500">
        <div className="flex flex-col lg:flex-row items-center justify-evenly lg:space-y-12 max-w-5xl mx-auto">
          <div>
            <img src="./rocket.png" alt="about image" width={500} />
          </div>
          <div className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-start">
            <h1 className="text-white font-bold text-2xl border-b-2 w-fit">
              Sobre mim
            </h1>
            <p className="max-w-sm lg:max-w-md text-gray-300">
              Iniciei minha jornada na programação com foco em desenvolvimento
              web e interfaçes interativas. Em 2023, ingressei no curso de
              Análise e Desenvolvimento de Sistemas <br /> <br />
              Desde então, atuo com o desenvolvimento projetos de alto nível
              para inúmeras empresas e ajudando a alavancar seus negócios.
            </p>
            <div className="space-x-4">
              <Button action={handleWhatsAppClick} style="text-white">
                Fale Comigo
              </Button>
              <Button action="" style="text-orange-500 border-white bg-white">
                Curriculo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projeto"
        className="flex flex-col items-center justify-center space-y-12 py-6 max-w-screen bg-linear-to-b from-orange-500 to-orange-700"
      >
        <div className="flex flex-col items-center text-center space-y-2">
          <img
            src="https://img.icons8.com/?size=100&id=hzicIoRXkkh2&format=png&color=000000"
            alt="seta dupla"
            className="animate-bounce"
            width={60}
          />
          <p className="text-gray-300">meus trabalhos</p>
          <h1 className="text-white font-bold text-2xl">
            Veja os projetos em destaque
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-6 lg:pb-12">
          {projetos.map((item) => (
            <a
              href={item.link}
              target="_blank"
              className="lg:w-3xs hover:bg-white/10 border shadow-xl p-3 rounded-lg space-y-4 hover:scale-105 transition"
            >
              <div className="aspect-1/1 rounded-md overflow-hidden flex items-center">
                <img src={item.img} className="w-full" />
              </div>
              <h1 className="text-xl font-bold text-center">{item.titulo}</h1>
            </a>
          ))}
        </div>
      </div>

      <div
        id="testimonial"
        className="bg-linear-to-b from-orange-700 to-rose-700 py-12 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mt-4">
              Depoimentos de clientes com quem trabalhei.
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Confira alguns dos feedbacks que mais me ajudaram a evoluir
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonial.map((item) => (
              <div className="h-fit bg-white p-6 shadow-lg rounded-2xl">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mb-2 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-xl">
                      {item.avatar}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-800 text-xl">
                    {item.nome}
                  </h4>
                  <p className="text-gray-600 mb-2">{item.comentario}</p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen py-12 bg-zinc-900">
        <div className="flex flex-col lg:flex-row space-y-4 items-center justify-between mx-auto max-w-5xl lg:p-6">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Entre em contato <br />
              agora mesmo
            </h1>
          </div>
          <div className="flex gap-4">
            <Button action={handleWhatsAppClick} style="">
              Fale Comigo
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//Componentes
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Estadisticas from "@/components/Estadisticas";
const Inicio = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-between items-center xl:flex-row xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Ingeniería de Computación y Sistemas
            </span>
            <h1 className="h1 mb-6">
              Hola Yo Soy
              <br />
              <span className="text-secondary">Jesús Lázaro</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Estudiante apasionado por el
              <span className="font-bold"> análisis de datos</span> 📊 y la
              <span className="font-bold"> innovación tecnológica</span>🚀, con
              enfoque en la resolución de problemas, el aprendizaje continuo🌱 y
              el trabajo en equipo🤝.
            </p>
            <div className="flex flex-col gap-8 xl:flex-row items-center">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="/assets/CV/CV_Jesus_Lazaro.pdf">Descargar CV</a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-secondary rounded-full flex justify-center items-center text-secondary text-base hover:bg-secondary hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Estadisticas />
    </section>
  );
};

export default Inicio;

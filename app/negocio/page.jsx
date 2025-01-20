import Variables from "@/components/Variables";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Negocio = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-between items-center xl:flex-row xl:pt-8 xl:pb-24 gap-8">
          {/* Sección Izquierda */}
          <div className="text-center xl:text-left flex-1">
            <span className="text-xl">Practicante Pre Profesional Pricing</span>
            <h1 className="h1 mb-6">
              Caso de Negocio
              <br />
              <span className="text-secondary">Cines OBK</span>
            </h1>
            <p className="max-w-[800px] mb-5 text-white/80">
              La cadena de cines OBK enfrenta una rentabilidad negativa del -10%
              y debe revertirla o liquidar. Para ello, se busca aplicar el
              modelo Revenue Management para maximizar ingresos, segmentando
              clientes y usando precios dinámicos que capturen tanto a quienes
              tienen menor y mayor disposición de pago.
            </p>
            <div className="flex flex-col gap-8 xl:flex-row items-center">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="/assets/CasoNegocio/Caso Cines OBK.pdf">
                  Descargar Caso
                </a>
                <FiDownload className="text-xl" />
              </Button>
            </div>
          </div>

          {/* Sección Derecha (Copia) */}
          <div className="text-center xl:text-left flex-1">
            <span className="text-xl">Propuesta de Solución</span>
            <h1 className="h1 mb-6">
              Modelo Revenue
              <br />
              <span className="text-secondary"> Management</span>
            </h1>
            <p className="max-w-[800px] mb-5 text-white/80">
              Adoptar el modelo de Revenue Management para reducir pérdidas y
              posicionar a Cines OBK hacia la rentabilidad a mediano plazo, bajo
              un enfoque el cual combina precios dinámicos, promociones y
              fidelización para captar mayor demanda y diversificar ingresos,
              asegurando sostenibilidad y evitando la liquidación de la
              compañía.
            </p>
            <div className="flex flex-col gap-8 xl:flex-row items-center">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="/assets/Recursos/Material.zip" download={true}>
                  Descargar Material
                </a>
                <FiDownload className="text-xl" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Variables />
    </section>
  );
};

export default Negocio;

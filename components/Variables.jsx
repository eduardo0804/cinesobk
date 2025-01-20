"use client";
import CountUp from "react-countup";

const numeros = [
  {
    count: 8000000,
    text: "Total Ventas",
  },
  {
    count: 2250,
    text: "Capacidad Diaria",
  },
  {
    count: 400000,
    text: "Total Clientes",
  },
  {
    count: -800000,
    text: "Margen Operativo",
  },
  {
    count: 821250,
    text: "Capacidad Anual",
  },
  {
    count: 48.71,
    text: "Porcentaje Ocupación",
    isPercentage: true, // Identifica que este debe incluir decimales
  },
];

const Variables = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-8 xl:grid-cols-3 xl:gap-8 max-w-[80vw] mx-auto">
          {numeros.map((item, index) => (
            <div
              className="flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={item.count}
                duration={10}
                delay={3}
                decimals={item.isPercentage ? 2 : 0} // Decimales para porcentajes
                className="text-4xl xl:text-6xl font-extrabold"
              />
              {item.isPercentage && (
                <span className="text-4xl xl:text-6xl font-extrabold">%</span>
              )}
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[140px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Variables;

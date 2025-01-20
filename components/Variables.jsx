"use client";
import CountUp from "react-countup";

const numeros = [
  {
    count: 8000000,
    text: "Total Ventas",
  },
  {
    count: 821250,
    text: "Capacidad Anual",
  },
  {
    count: 400000,
    text: "Total Clientes",
  },
  {
    count: 2250,
    text: "Capacidad Diaria",
  },
];

const Variables = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {numeros.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.count}
                  duration={10}
                  delay={3}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      ;
    </section>
  );
};

export default Variables;

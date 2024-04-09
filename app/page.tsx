"use client";
import React, { useState } from "react";
import HomepageCards from "./components/HomepageCards";
import { Tabs, Box, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

function page() {
  const [name, setName] = useState("");
  return (
    <div className="">
      <div className="relative w-full">
        <Image
          src="/areas/new_horizons2.jpeg"
          alt="Descripción"
          className="w-full h-[85vh] object-cover"
          width={2000}
          height={2000}
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 flex items-center justify-center lg:justify-start lg:pl-16 text-center lg:text-start">
          <div className="w-[73vh]">
            <p className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
              Sumérgete en la educación del futuro
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl tracking-wide font-light text-white mt-3">
              Aprende de manera interactiva y con la tecnología más nueva
            </p>
            <Link href="/chatbot">
              <div className="bg-[#726FF5] h-[50px] w-[300px] justify-center content-center rounded-full mt-4 transition ease-in-out delay-100 hover:bg-[#5654BE] hover:text-slate-300">
                <h1 className="flex justify-center text-2xl font-bold">
                  {" "}
                  Reserva Ahora{" "}
                </h1>
              </div>
            </Link>

            <Link href="#areas">
              <div className="h-[50px] w-[300px] justify-center content-center transition ease-in-out delay-100 hover:text-slate-300">
                <h1 className="flex justify-center text-xl underline underline-offset-4 ">
                  {" "}
                  Reserva Manual{" "}
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div id="areas" className="flex justify-center p-12 text-5xl font-bold">
        Espacios Disponibles
      </div>
      <div className="flex justify-center ">
        <input //cambiar a input de radix
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Busca un area"
          className="flex justify-center  w-4/5 lg:w-2/5 p-2.5 rounded-lg text-sm bg-[#293038]  "
        />
      </div>
      <div className="">
        <Tabs.Root defaultValue="todos">
          <div className="flex justify-center text-xl ">
            <Tabs.List className="w-full lg:w-[65.4%] flex justify-center">
              <Tabs.Trigger value="todos">
                {" "}
                <Text size={{ initial: "1", lg: "3" }}>Todos</Text>{" "}
              </Tabs.Trigger>
              <Tabs.Trigger value="espacio_abierto">
                {" "}
                <Text size={{ initial: "1", lg: "3" }}>
                  Espacios Abiertos
                </Text>{" "}
              </Tabs.Trigger>
              <Tabs.Trigger value="garage_valley">
                {" "}
                <Text size={{ initial: "1", lg: "3" }}>Garage Valley</Text>{" "}
              </Tabs.Trigger>
              <Tabs.Trigger value="zona_xploracion">
                {" "}
                <Text size={{ initial: "1", lg: "3" }}>
                  Zona de Xploracion
                </Text>{" "}
              </Tabs.Trigger>
            </Tabs.List>
          </div>
          <Box pt="3">
            <Tabs.Content value="todos">
              <HomepageCards keyword={name} specificArea="" />
            </Tabs.Content>

            <Tabs.Content value="espacio_abierto">
              <HomepageCards keyword={name} specificArea="Espacios Abiertos" />
            </Tabs.Content>

            <Tabs.Content value="garage_valley">
              <Text size="2">
                <HomepageCards keyword={name} specificArea="Garage Valley" />
              </Text>
            </Tabs.Content>

            <Tabs.Content value="zona_xploracion">
              <HomepageCards
                keyword={name}
                specificArea="Zona de X-Ploración"
              />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </div>
  );
}

export default page;

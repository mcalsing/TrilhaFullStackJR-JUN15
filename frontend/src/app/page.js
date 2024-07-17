import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="h-[500px] lg:mx-16 xl:mx-28 2xl:mx-48 grid grid-cols-2">
        <div className="bg-[#ef4444] pt-10 2xl:pl-36 pl-10 text-white">
          <p className="text-black md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-sans">Código Certo</p>
          <p className="md:text-xl lg:text-2xl xl:text-1xl 2xl:text-3xl text-sm font-sans">Construindo o amanhã, hoje.</p>
          <p className="pt-12 md:text-xl lg:text-2xl xl:text-1xl 2xl:text-3xl text-sm">
            Compartilhar conhecimento pode ser uma aventura
          </p>
        </div>
        <div className="bg-[#ef4444] pl-10">
          <Image className="relative invert" src="/black_ink_circle.png" alt="logo" width={500} height={24}></Image>
          <Image className="absolute top-32 ml-32" src="/menina_fundo.png" alt="log" width={230} height={24}></Image>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <h1 className="text-3xl pt-6 mr-3 ml-3 text-white">Projetos</h1>
      </div>
      <div>footer</div>
    </main>
  );
}
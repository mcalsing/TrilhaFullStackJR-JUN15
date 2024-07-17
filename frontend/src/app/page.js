import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="bg-slate-500 h-[600px] w-full grid grid-cols-2">
        <div className="bg-[#ef4444] pt-20 pl-36 text-white">
          <p className="text-black text-3xl font-sans">Código Certo</p>
          <p className="text-4xl font-sans">Construindo o amanhã, hoje.</p>
          <p className="pt-12 text-3xl text-black">
            Compartilhar conhecimento pode ser uma aventura
          </p>
        </div>
        <div className="bg-[#ef4444] pt-16 pl-10">
          <Image className="relative invert" src="/black_ink_circle.png" alt="logo" width={500} height={24}></Image>
          <Image className="absolute top-44 ml-32" src="/menina_fundo.png" alt="log" width={230} height={24}></Image>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <h1 className="text-3xl pt-6 mr-3 ml-3 text-white">Projetos</h1>
      </div>
      <div>footer</div>
    </main>
  );
}
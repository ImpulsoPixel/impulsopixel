import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute top-0 left-0 w-full h-screen z-[-1]">
        <Image
          src="/pruebas/nuevatrabajando.png"
          alt="Estamos trabajando"
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
      </div>

    

    </main>
  );
}

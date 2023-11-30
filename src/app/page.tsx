import Image from "next/image"

export default function Home() {
  return (
    <main className="p-8 flex flex-col items-center  min-h-screen">
      <h1 className="font-bold text-4xl text-purple-500">crochog.</h1>
      <p></p>
      <Image className="rounded border-8 border-orange-400 m-8" src='https://missdolkapots.files.wordpress.com/2013/09/batmancrochet.jpg' alt='A crochet meme' height={400} width={387}></Image>
      <p className="text-center">So you want to crochet, eh? Well, this blog site might just be your number one internet destination. Explore the sections above, buy that wool, live your best crochet life.</p>
    </main>
  )
}

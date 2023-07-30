import Hero from '@/components/hero';
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Hero />
      <section className="container mx-auto px-2">
        <div class="mockup-window bg-base-300">
          <Image
            className=""
            width={1920}
            height={1080}
            src="/claricity.consulting.png"
            alt="Me, Jay Shaver"
          />
        </div>
        <div class="mockup-phone">
          <div class="camera"></div>
          <div class="display">
            <Image
              className="artboard artboard-demo phone-4"
              width={390}
              height={844}
              src="/claricity.consulting_(iPhone 12 Pro).png"
              alt="Me, Jay Shaver"
            />
          </div>
        </div>
      </section>
    </>
  );
}

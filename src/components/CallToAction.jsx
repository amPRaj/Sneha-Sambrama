import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { BlurBG } from './BlurBG';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export function CallToAction() {
  return (
    <section id="about-us" className="relative overflow-hidden w-full py-32">
      <BlurBG />
      <Container className="relative w-4/5 mx-auto">
        {/* Blurred Card Background */}
        {/* <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/10"> */}
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-white-400/50 via-green-900/50 to-teal-900/50 animate-gradient-x">
            <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-white-400/50 via-green-900/50 to-teal-900/50 animate-gradient-x blur-xl" />
          </div>
          
          {/* Content Container */}
          <div className="relative p-8 md:p-12">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Logo */}
                <div className="relative">
                  <div className="relative w-full aspect-square flex items-center justify-center">
                    <Image
                      src="/assets/img/logos/logopng.png"
                      alt="Sneha Sambrama Logo"
                      width={600}
                      height={600}
                      className="w-96 h-96 object-contain"
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="text-white">
                  <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-8">
                    About Us
                  </h2>
                  
                  <div className="space-y-6 text-lg tracking-tight text-white/90">
                    <p className="leading-relaxed">
                      Sneha Sambrama Charity Foundation (R.), Bhanuvalli is built on the values of selfless service and community care. Established in 20XX, our foundation has been actively involved in empowering underprivileged children with education, healthcare support, food distribution, and various social welfare activities.
                    </p>
                    <p className="leading-relaxed">
                      Our mission is driven by a spirit of compassion and dedication to uplift society.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button href="/donate" color="white" className="transform hover:scale-105 transition-transform">
                      Donate Now
                    </Button>
                    <Button href="/volunteer" variant="outline" className="transform hover:scale-105 transition-transform">
                      Join as Volunteer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </Container>
    </section>
  );
}

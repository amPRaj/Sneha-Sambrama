import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { motion } from 'framer-motion';

import faqsBackgroundImage from '@/images/background-faqs.jpg';

const members = [
  {
    name: 'Sri Tejasvi Kattimni T. R.',
    role: 'President',
    image: '/assets/img/placeholder-president.jpg',
    description: 'Dedicated leader guiding the foundation\'s operations with efficiency and care.',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Sri Shivakumar H. M.',
    role: 'Vice President',
    image: '/assets/img/placeholder-vice-president.jpg',
    description: 'Bringing valuable experience and support to the leadership team.',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Sri Ramanagouda D. B.',
    role: 'Secretary',
    image: '/assets/img/placeholder-secretary.jpg',
    description: 'Managing the foundation\'s operations with efficiency and care.',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Sri Pakkirappa Rangappa Basapura',
    role: 'Joint Secretary',
    image: '/assets/img/placeholder-joint-secretary.jpg',
    description: 'Assisting in administrative duties and supporting the team.',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Sri E. Vishwanathaih',
    role: 'Treasurer',
    image: '/assets/img/placeholder-treasurer.jpg',
    description: 'Ensuring financial transparency and stability for the foundation.',
    social: {
      linkedin: '#',
      twitter: '#',
    }
  },
];

function MemberCard({ member, index, className = '' }) {
  const [isHovered, setIsHovered] = useState(false);

  const isLastThree = member.role === 'Secretary' || member.role === 'Joint Secretary' || member.role === 'Treasurer';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group mx-auto mb-8 w-full md:max-w-sm ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative  overflow-hidden rounded-2xl bg-black/5 backdrop-blur-1xl">
        <div className="aspect-[3/2] relative">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
          <p className="font-serif text-lg font-medium text-amber-600 mb-2">{member.role}</p>
          <p className="font-sans text-slate-700 text-sm mb-4">{member.description}</p>
          
          {!isLastThree && (
            <div className="flex gap-4">
              <a href={member.social.linkedin} className="text-slate-700 hover:text-amber-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href={member.social.twitter} className="text-slate-700 hover:text-amber-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function CommitteeMembers() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const president = members[0];
  const vicePresident = members[1];
  const secretary = members[2];
  const jointSecretary = members[3];
  const treasurer = members[4];

  return (
    <section className="relative py-32 overflow-hidden bg-slate-50">
      <Image
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
        src={faqsBackgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      
      <Container className="relative flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">
          EXCLUSIVE COMMITTEE MEMBERS 
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Meet the dedicated individuals leading our foundation with passion and purpose
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-4xl mb-8">
          {president && <MemberCard member={president} index={0} className="w-full md:w-1/2" />}
          {vicePresident && <MemberCard member={vicePresident} index={1} className="w-full md:w-1/2" />}
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-6xl">
          {secretary && <MemberCard member={secretary} index={2} className="w-full md:w-1/3" />}
          {jointSecretary && <MemberCard member={jointSecretary} index={3} className="w-full md:w-1/3" />}
          {treasurer && <MemberCard member={treasurer} index={4} className="w-full md:w-1/3" />}
        </div>
      </Container>
    </section>
  );
}
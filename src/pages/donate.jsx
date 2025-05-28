import React from 'react';
import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import Image from 'next/image';
// Removed unused icons import
// import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid'

// Array of motivational quotes for the donate page
const motivationalQuotes = [
  "The simplest acts of kindness are by far the most powerful than a thousand heads bowing in prayer.",
  "No one is useless in this world who lightens the burdens of another.",
  "Generosity consists not the sum of our possessions, but the use we make of them.",
  "The smallest act of kindness is worth more than the grandest intention.",
  "Giving is not just about making a donation. It is about making a difference.",
];

export default function Donate() {
  // You might want to randomize the quote displayed in a future enhancement
  // const [currentQuote, setCurrentQuote] = useState(motivationalQuotes[0]);
  // useEffect(() => { /* randomization logic */ }, []);

  return (
    <>
      <Head>
        <title>Donate - Sneha Sambrama Charity Foundation</title>
        <meta name="description" content="Support Sneha Sambrama Charity Foundation by making a donation." />
      </Head>
      <Header />
      <main className="relative min-h-screen w-full flex items-center justify-center">
        {/* Gradient Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 px-4 py-20 sm:py-32 w-full max-w-7xl mx-auto">
         
         
          {/* Section 1: UPI Donation */}
          <div className="mb-20 w-full py-16 bg-white/5 backdrop-blur-2xl rounded-lg overflow-hidden">
            <h2 className="mb-8 text-center text-3xl font-semibold text-slate-900">Help Provide Food and Medicine</h2>
            <div className="flex flex-col items-center justify-center gap-12 px-6">
              <div className="w-full flex justify-center items-center">
                <a href="upi://pay?pa=9113013283@ybl&pn=Sneha%20Sambrama&cu=INR" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-105">
                  <Image
                    src="/assets/img/QRCODE.jpeg"
                    alt="UPI QR Code for Donation"
                    width={400}
                    height={400}
                    objectFit="contain"
                    className="rounded-md"
                  />
                </a>
              </div>
              <div className="w-full text-slate-700 space-y-6 text-lg text-center">
                <p className="leading-relaxed">
                  Scan the QR code below to make a quick and secure UPI payment. It's a simple way to make a big impact today!
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Bank Transfer */}
          <div className="w-full py-16 bg-white/5 backdrop-blur-2xl rounded-lg overflow-hidden">
            <h2 className="mb-8 text-center text-3xl font-semibold text-slate-900">For Larger Contributions (Bank Transfer)</h2>
            <div className="text-slate-700 space-y-6 text-lg px-6">
              <p className="leading-relaxed text-center">
                Please use the bank details below for your transfer:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto">
                <div>
                  <p><span className="font-semibold text-slate-900">Account Name:</span> Sneha Sambrama Charity Foundation</p>
                  <p><span className="font-semibold text-slate-900">Account Number:</span> XXXXXXXXXXXXXX</p>
                  <p><span className="font-semibold text-slate-900">IFSC Code:</span> YYYYYYYYYYY</p>
                </div>
                <div>
                  <p><span className="font-semibold text-slate-900">Bank Name:</span> Your Bank Name</p>
                  <p><span className="font-semibold text-slate-900">Branch Name:</span> Your Branch Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 
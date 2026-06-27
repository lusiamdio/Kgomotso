import React, { useState, useEffect } from 'react';
import { TabType } from '../types';
import { ArrowRight, Sparkles, HeartHandshake, TrendingUp, Gift, Quote, Calendar, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, WHATSAPP_GROUP_LINK } from '../data';

interface HomeTabProps {
  onTabChange: (tab: TabType) => void;
}

export default function HomeTab({ onTabChange }: HomeTabProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-play interval for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  // Use professional real photos from the internet!
  const userKgomotsoImage = "https://media.licdn.com/dms/image/v2/D4D22AQF0tafWIXAMGQ/feedshare-shrink_800/feedshare-shrink_800/0/1730105366292?e=2147483647&v=beta&t=7gl54U0M0JBrnMVQsO_p8Q9dM3Mr5M3pQpmiZs4QqSA";
  const kgomotsoImage = (userKgomotsoImage && !userKgomotsoImage.startsWith('file://')) 
    ? userKgomotsoImage 
    : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
  const picnicImage = "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=1200";
  const conferenceImage = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200";
  const heroImage = "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/730320852_122111341119312295_911726429544685_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NUjeXBzOHbkQ7kNvwEzJV7e&_nc_oc=Adoz-mbzkZqFcisHn4P19cYTgiOUgYo3HNUcrp1PLPD-RD9p5GSOfl52DrX5Q83Q1jg&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=H0_TDNt7gVCTbG2bBPCutQ&_nc_ss=7b2a8&oh=00_Af9ayZLlbrS_QIBAqA028maGpxPeDF_wSAamJwSLfd4DcA&oe=6A45CEFD";

  return (
    <div className="space-y-16 md:space-y-24 animate-fade-in" id="home-tab-view">
      
      {/* 1. Hero Section (Transformation Focus) */}
      <section 
        className="relative overflow-hidden rounded-3xl bg-brand-deep text-white py-16 md:py-24 px-6 md:px-12 shadow-md bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Background Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/95 via-brand-plum/90 to-purple-950/85" />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-lilac/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-amber-100">
            Empowering Women to <br className="hidden md:inline" />
            <span className="text-white relative inline-block">
              Grow, Lead & Thrive
            </span>
          </h1>

          <p className="text-purple-100 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Helping women create lives of purpose, confidence, and fulfilment through meaningful conversations, personal development, and transformative experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-brand-deep hover:bg-amber-100 px-6 py-3.5 rounded-xl font-semibold shadow-md transition-all flex items-center justify-center gap-2 text-sm md:text-base border border-amber-300/30"
            >
              Join the Community
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => onTabChange('events')}
              className="bg-white/10 text-white hover:bg-white/20 px-6 py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-sm md:text-base border border-white/20"
            >
              <Calendar className="w-4.5 h-4.5 text-amber-200" />
              Attend an Event
            </button>
            <button
              onClick={() => onTabChange('about')}
              className="text-amber-200 hover:text-white font-medium px-4 py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 text-sm md:text-base"
            >
              Meet Kgomotso
            </button>
          </div>
        </div>
      </section>

      {/* 2. Meet Kgomotso Quote Section */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="md:col-span-5 relative group">
          <div className="absolute inset-0 bg-brand-gold/20 rounded-2xl transform translate-x-2.5 translate-y-2.5 -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform" />
          <div className="aspect-square rounded-2xl overflow-hidden border border-purple-100 shadow-sm bg-white">
            <img
              src={kgomotsoImage}
              alt="Kgomotso Khalo - Founder of Girls Talk"
              className="w-full h-full object-cover grayscale-xs hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="md:col-span-7 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold bg-brand-deep/5 px-3 py-1 rounded-md">
            The Visionary Behind the Movement
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-brand-deep">
            Meet Kgomotso
          </h2>

          <div className="relative">
            <Quote className="w-10 h-10 text-brand-gold/20 absolute -top-4 -left-3 -z-10" />
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-brand-deep/90 italic leading-relaxed font-light pl-6">
              "I created Girls Talk because I believe every woman deserves a space to grow, be heard, and discover her true potential."
            </p>
          </div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light pl-6">
            Girls Talk with Kgomotso is a movement dedicated to empowering women to live purposeful, balanced, and impactful lives, born from a personal journey of healing, faith, and transformation.
          </p>

          <div className="pt-2 pl-6">
            <button
              onClick={() => onTabChange('about')}
              className="text-brand-plum hover:text-brand-deep font-semibold text-sm flex items-center gap-1.5 group transition-colors"
            >
              Read Her Full Story
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. The Pillars Overview Section */}
      <section className="bg-white rounded-3xl border border-purple-100/50 p-8 md:p-12 shadow-2xs space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-brand-plum uppercase tracking-wider">Our Core Pillars</span>
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-brand-deep">Four Pillars of Alignment</h3>
          <p className="text-gray-500 text-xs md:text-sm font-light">
            We structure our community experiences and content around four foundational paths of development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: Heal */}
          <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 hover:bg-purple-50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-purple-100 w-10 h-10 rounded-xl flex items-center justify-center text-purple-700">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-semibold text-brand-deep text-lg">Heal</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Healing is the foundation of growth. We create safe spaces for honest conversations, support, and restoration.
              </p>
            </div>
            <button onClick={() => onTabChange('events')} className="text-purple-700 hover:text-purple-900 font-semibold text-xs mt-6 flex items-center gap-1">
              Heart-to-Heart Conference <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Pillar 2: Grow */}
          <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-100 hover:bg-amber-50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-amber-100 w-10 h-10 rounded-xl flex items-center justify-center text-amber-700">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-semibold text-brand-deep text-lg">Grow</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Growth is intentional. We encourage continuous development spiritually, personally, financially, and emotionally.
              </p>
            </div>
            <button onClick={() => onTabChange('community')} className="text-amber-700 hover:text-amber-900 font-semibold text-xs mt-6 flex items-center gap-1">
              Measure Your Life Wheel <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Pillar 3: Thrive */}
          <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100 hover:bg-rose-50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-rose-100 w-10 h-10 rounded-xl flex items-center justify-center text-rose-700">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-semibold text-brand-deep text-lg">Thrive</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                Living confidently and purposefully. Stepping boldly into your identity without seeking permission to exist.
              </p>
            </div>
            <button onClick={() => onTabChange('events')} className="text-rose-700 hover:text-rose-900 font-semibold text-xs mt-6 flex items-center gap-1">
              A Woman in Full Alignment <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Pillar 4: Give */}
          <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:bg-emerald-50 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="bg-emerald-100 w-10 h-10 rounded-xl flex items-center justify-center text-emerald-700">
                <Gift className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-semibold text-brand-deep text-lg">Give</h4>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                True growth extends beyond ourselves. We serve communities through outreach, meals, donation drives, and literacy.
              </p>
            </div>
            <button onClick={() => onTabChange('events')} className="text-emerald-700 hover:text-emerald-900 font-semibold text-xs mt-6 flex items-center gap-1">
              Girls Talk Gives Back <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </section>

      {/* 3.5. Sisterhood Gallery Section */}
      <section className="space-y-8" id="sisterhood-gallery-section">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-brand-plum uppercase tracking-wider block">Sisterhood in Action</span>
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-brand-deep">Moments of Connection</h3>
          <p className="text-gray-500 text-xs md:text-sm font-light">
            A glimpse into our picnics, brunches, and conferences—where healing, laughter, and transformation come alive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1: Picnic */}
          <div className="group overflow-hidden rounded-2xl border border-purple-100/50 shadow-3xs bg-white relative aspect-[3/2] hover:shadow-md hover:border-purple-200 transition-all duration-300">
            <img 
              src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/731843551_122111341929312295_1577432662448604878_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x854&ctp=s1280x854&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=M1AqgRKkQqoQ7kNvwHDR_Nv&_nc_oc=AdrLAnMnU97tAQTIMCWOrCRnoAfPmUwFVLukIeZNoXBxieR1aqe3_l7xakKpfjfyQeI&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=hTa6_1Yug-fSyi71RVLFzg&_nc_ss=7b2a8&oh=00_Af9w-cmKGBK5JxXMniqoIAbn1E3s2EJiSj7DmBlf0suxFw&oe=6A46005B" 
              alt="Outdoor Sisterhood Picnic" 
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10" />
            <div className="absolute bottom-4 left-4 right-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-200">Picnic Series</span>
              <p className="font-serif text-sm font-medium mt-0.5">Outdoor Sisterhood Picnic</p>
            </div>
          </div>

          {/* Image 2: Hiking Table Setting */}
          <div className="group overflow-hidden rounded-2xl border border-purple-100/50 shadow-3xs bg-white relative aspect-[3/2] hover:shadow-md hover:border-purple-200 transition-all duration-300">
            <img 
              src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/733271402_122111341287312295_4781985763319351875_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x943&ctp=s1280x943&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zd-U1-xisYwQ7kNvwG_OFPj&_nc_oc=AdrG6zf1cxcEzV_6JbJ05Vl0Xsu9WNhnW8Msy-LmQ_WLqmYakKix_Tpiy_E9V5xM4YA&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=abjHh29IiZ4xmoMu7M6M1w&_nc_ss=7b2a8&oh=00_Af8c2NGHd_ISf6qntHzieGJP6is9LCOZEPsKfYuDEzsBvA&oe=6A45DEA3" 
              alt="Beautiful Table Setup in Nature" 
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10" />
            <div className="absolute bottom-4 left-4 right-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-200">Table Settings</span>
              <p className="font-serif text-sm font-medium mt-0.5">Serene Outdoor Picnic Table</p>
            </div>
          </div>

          {/* Image 3: Community Brunch */}
          <div className="group overflow-hidden rounded-2xl border border-purple-100/50 shadow-3xs bg-white relative aspect-[3/2] hover:shadow-md hover:border-purple-200 transition-all duration-300">
            <img 
              src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/730320852_122111341119312295_911726429544685_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NUjeXBzOHbkQ7kNvwEzJV7e&_nc_oc=Adoz-mbzkZqFcisHn4P19cYTgiOUgYo3HNUcrp1PLPD-RD9p5GSOfl52DrX5Q83Q1jg&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=H0_TDNt7gVCTbG2bBPCutQ&_nc_ss=7b2a8&oh=00_Af9ayZLlbrS_QIBAqA028maGpxPeDF_wSAamJwSLfd4DcA&oe=6A45CEFD" 
              alt="Our Sisterhood Community Brunch" 
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10" />
            <div className="absolute bottom-4 left-4 right-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-200">Brunch Series</span>
              <p className="font-serif text-sm font-medium mt-0.5">Our Sisterhood Community Brunch</p>
            </div>
          </div>

          {/* Image 4: Journaling Workshop */}
          <div className="group overflow-hidden rounded-2xl border border-purple-100/50 shadow-3xs bg-white relative aspect-[3/2] hover:shadow-md hover:border-purple-200 transition-all duration-300">
            <img 
              src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/729451821_122111340837312295_7336809305250604228_n.jpg?stp=dst-jpg_tt6&cstp=mx720x1280&ctp=s720x1280&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=atnoi6ggZSQQ7kNvwFG9K9Z&_nc_oc=Adol3s3T6PF17QSsa-b_za7Ly6stv_aykuPLK2KWL9P3IJY36A2cC7qEM94wJqJcsOQ&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=70ScJUqEtP_6dR6z-k5aWw&_nc_ss=7b2a8&oh=00_Af-V-yszDD97GFmC9tL62Sf4vcoscWPevMysn9npQ8d9rQ&oe=6A45D05D" 
              alt="Moments of Speech & Inspiration" 
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10" />
            <div className="absolute bottom-4 left-4 right-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-200">Workshops</span>
              <p className="font-serif text-sm font-medium mt-0.5">Award & Handover Ceremony</p>
            </div>
          </div>

          {/* Image 5: Sisterhood Support */}
          <div className="group overflow-hidden rounded-2xl border border-purple-100/50 shadow-3xs bg-white relative aspect-[3/2] hover:shadow-md hover:border-purple-200 transition-all duration-300">
            <img 
              src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/732286067_122111340339312295_4576027979784422624_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gLb6DSt_bXUQ7kNvwFADKBI&_nc_oc=Adp9VLj_J5-vVOAJMH_Po842hZKRIO7NraWPFlewsJ3H-DY5iYCd_yt9d-YgZfRBfjc&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=wSgtST7tpIdyv-ZjrEHZdw&_nc_ss=7b2a8&oh=00_Af-WzZJgsIC8n3t4mOgeHS8DJ9c-egURP_VvrS5VfKShJA&oe=6A45F8AE" 
              alt="Circle of Joy & Support" 
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10" />
            <div className="absolute bottom-4 left-4 right-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-200">Sisterhood</span>
              <p className="font-serif text-sm font-medium mt-0.5">Walking Hand-in-Hand</p>
            </div>
          </div>

          {/* Image 6: Kgomotso Khalo Portrait */}
          <div className="group overflow-hidden rounded-2xl border border-purple-100/50 shadow-3xs bg-white relative aspect-[3/2] hover:shadow-md hover:border-purple-200 transition-all duration-300">
            <img 
              src={kgomotsoImage} 
              alt="Kgomotso Khalo Portrait" 
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10" />
            <div className="absolute bottom-4 left-4 right-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-200">The Founder</span>
              <p className="font-serif text-sm font-medium mt-0.5">Kgomotso Khalo</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Call to Action Panel */}
      <section className="bg-gradient-to-br from-brand-bg to-purple-50 rounded-3xl p-8 md:p-12 border border-purple-100 shadow-2xs grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-brand-deep">
            How Balanced Is Your Wheel of Life?
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
            Take a moment to evaluate your current satisfaction across spiritual, health, career, financial, personal growth, and relationship realms. Get instant, tailored guidance written in Kgomotso\'s voice to support you in your current season.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onTabChange('community')}
              className="bg-brand-deep text-white hover:bg-brand-plum px-5 py-3 rounded-xl font-medium text-xs md:text-sm shadow-xs transition-all flex items-center gap-2"
            >
              Begin Free Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden border border-purple-100 shadow-xs bg-white flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-deep/30 z-10" />
          <img
            src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/731787732_122111340369312295_354768519045760712_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x853&ctp=s1280x853&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1iPOyrtw-cQQ7kNvwGOyZSJ&_nc_oc=AdrMkXs2moLUmqDcOhJRbm8cithDBKCTBMTT7yZMBU_nrOhVnrVaWyaGO0_Wtr9LEqU&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=wSgtST7tpIdyv-ZjrEHZdw&_nc_ss=7b2a8&oh=00_Af_mGgnfTz7Ckuz5hGw2zYQxneSJHIHwjptVZq6k9pmluw&oe=6A45EE44"
            alt="Girls Talk Picnic Gatherings"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute z-20 bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-purple-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-plum">Next Gathering</span>
              <p className="font-serif font-medium text-brand-deep text-xs md:text-sm">Girls Talk Picnic Series</p>
            </div>
            <button
              onClick={() => onTabChange('events')}
              className="text-[10px] bg-brand-deep text-white px-2.5 py-1.5 rounded-md hover:bg-brand-plum font-semibold transition-colors"
            >
              View Info
            </button>
          </div>
        </div>
      </section>

      {/* 5. Testimonial Showcase Carousel */}
      <section className="space-y-8 max-w-4xl mx-auto" id="testimonials-carousel-section">
        <div className="text-center space-y-3">
          <span className="text-xs font-semibold text-brand-plum uppercase tracking-wider block">Voices from our Sisterhood</span>
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-brand-deep">What Our Sisters Say</h3>
        </div>

        {/* Carousel Viewport Container */}
        <div className="relative bg-white rounded-3xl border border-purple-100 p-8 md:p-14 shadow-3xs overflow-hidden flex flex-col md:flex-row items-center gap-6 min-h-[220px]">
          {/* Large decorative quotation mark background */}
          <Quote className="absolute -top-6 -left-6 w-32 h-32 text-purple-50/40 select-none pointer-events-none" />

          {/* Nav Arrows - Hidden on mobile, shown on desktop */}
          <div className="absolute inset-y-0 left-4 md:flex items-center hidden">
            <button
              onClick={handlePrevTestimonial}
              className="p-2.5 rounded-full bg-purple-50 hover:bg-purple-100 text-brand-deep hover:text-brand-gold transition-all border border-purple-100/50 cursor-pointer shadow-3xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 md:flex items-center hidden">
            <button
              onClick={handleNextTestimonial}
              className="p-2.5 rounded-full bg-purple-50 hover:bg-purple-100 text-brand-deep hover:text-brand-gold transition-all border border-purple-100/50 cursor-pointer shadow-3xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Testimonial Content Container */}
          <div key={activeTestimonial} className="relative w-full text-center md:text-left space-y-6 px-4 md:px-12 animate-fade-in flex flex-col justify-between h-full">
            <p className="font-serif text-lg md:text-xl lg:text-2xl text-brand-deep font-light leading-relaxed italic">
              &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-purple-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-deep text-white border border-purple-100 flex items-center justify-center font-bold font-serif text-sm shadow-3xs">
                  {TESTIMONIALS[activeTestimonial].author.split(' ')[0][0]}
                  {TESTIMONIALS[activeTestimonial].author.split(' ')[1]?.[0] || ''}
                </div>
                <div className="text-left">
                  <h5 className="font-serif font-bold text-sm text-brand-deep">{TESTIMONIALS[activeTestimonial].author}</h5>
                  <span className="text-[11px] text-brand-gold font-light uppercase tracking-wider">{TESTIMONIALS[activeTestimonial].role}</span>
                </div>
              </div>

              {/* Mobile Arrows inside Card */}
              <div className="flex items-center gap-2 md:hidden">
                <button
                  onClick={handlePrevTestimonial}
                  className="p-2 rounded-full bg-purple-50 hover:bg-purple-100 text-brand-deep transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="p-2 rounded-full bg-purple-50 hover:bg-purple-100 text-brand-deep transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Dots Indicators */}
        <div className="flex justify-center gap-2 pt-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                index === activeTestimonial ? 'w-8 bg-brand-deep' : 'w-2.5 bg-purple-100 hover:bg-purple-200'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

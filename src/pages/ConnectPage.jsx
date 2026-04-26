import { motion } from 'framer-motion';
import { MessageCircle, Phone, Globe, Terminal } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ConnectPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  const GithubIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.3.1-.3.4-1.5-.1-3.3 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C6.1 1.3 4.9 1.7 4.9 1.7c-.5 1.8-.2 3-.1 3.3-1 .8-1.5 1.9-1.5 3.3 0 5 2.9 6.2 6 6.5-1 .9-1.3 2.6-1.3 3.2V22" />
      <path d="M9 20c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );

  const links = [
    {
      id: 'whatsapp',
      title: 'Chat on WhatsApp',
      url: 'https://wa.me/256775224728',
      icon: <MessageCircle className="w-6 h-6" />,
      primary: true,
    },
    {
      id: 'call',
      title: 'Call Me',
      url: 'tel:0775224728',
      icon: <Phone className="w-6 h-6" />,
      primary: false,
    },
    {
      id: 'website',
      title: 'View My Website',
      url: 'https://solomantalgo.online',
      icon: <Globe className="w-6 h-6" />,
      primary: false,
    },
    {
      id: 'github',
      title: 'View My Projects',
      url: 'https://github.com/solomantalgo',
      icon: <GithubIcon className="w-6 h-6" />,
      primary: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Connect | Solomantalgo</title>
        <meta name="description" content="Connect with Solomantalgo - Developer, Problem Solver, Builder" />
      </Helmet>

      <div className="min-h-screen bg-[#07090F] text-[#EEF0F8] flex flex-col items-center justify-center p-6 relative overflow-hidden font-['Epilogue',sans-serif]">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-[#00FF88]/10 blur-[100px] md:blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-[#3B6FFF]/10 blur-[100px] md:blur-[150px] pointer-events-none" />

        <motion.div
          className="w-full max-w-md z-10 flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#111620] border border-[#00FF88]/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,255,136,0.15)] relative group">
              <div className="absolute inset-0 rounded-2xl bg-[#00FF88]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Terminal className="w-8 h-8 text-[#00FF88]" />
            </div>
            
            <h1 className="font-['Unbounded',sans-serif] text-3xl md:text-4xl font-bold tracking-tight mb-3 text-white">
              SOLOMANTALGO
            </h1>
            <p className="text-[#5A6380] text-sm md:text-base font-medium tracking-wide flex items-center justify-center gap-2">
              Developer <span className="w-1 h-1 rounded-full bg-[#00FF88]" /> Problem Solver <span className="w-1 h-1 rounded-full bg-[#00FF88]" /> Builder
            </p>
          </motion.div>

          {/* Links Section */}
          <motion.div variants={itemVariants} className="w-full space-y-4 mb-12">
            {links.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  link.primary
                    ? 'bg-[#00FF88]/10 border-[#00FF88]/40 shadow-[0_0_20px_rgba(0,255,136,0.15)] hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:bg-[#00FF88]/20 hover:border-[#00FF88]'
                    : 'bg-[#111620] border-white/5 hover:border-[#00FF88]/30 hover:bg-[#161C28]'
                }`}
              >
                {/* Subtle hover gradient inside button */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl mr-4 ${link.primary ? 'bg-[#00FF88] text-[#07090F]' : 'bg-[#161C28] text-[#00FF88] border border-white/5'}`}>
                  {link.icon}
                </div>
                
                <span className={`font-semibold text-lg ${link.primary ? 'text-[#EEF0F8]' : 'text-[#EEF0F8]'}`}>
                  {link.title}
                </span>
                
                {link.primary && (
                  <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[#00FF88] m-4 animate-pulse shadow-[0_0_10px_#00FF88]" />
                )}
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Section */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-[#EEF0F8] font-medium text-sm mb-2 opacity-80">
              Clean code. Real solutions. Impact.
            </p>
            <p className="text-[#5A6380] text-xs font-medium tracking-wider uppercase">
              Kampala, Uganda
            </p>
          </motion.div>
        </motion.div>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}} />
      </div>
    </>
  );
};

export default ConnectPage;

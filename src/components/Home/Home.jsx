import { useRef } from 'react';
import 'animate.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="mt-12 flex flex-col-reverse lg:flex-row items-center justify-between text-white px-4 lg:px-16">
        <div className="animate__animated animate__fadeInLeft content w-full lg:w-1/2 mt-10 lg:mt-0">
          <motion.h1
            className="header text-3xl lg:text-5xl font-bold text-center lg:text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI-Powered Cough Analysis for Early Disease Detection
          </motion.h1>
          <motion.p
            className="text mt-4 text-base lg:text-lg leading-relaxed text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Upload or record your cough sound and let our AI analyze it for potential respiratory diseases. Get fast,
            reliable insights powered by deep learning—because early detection matters.
          </motion.p>
          <div className="btn mt-10 lg:mt-28 flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/predict">
              <motion.button
                className="px-6 py-3 text-white font-bold bg-red-500 rounded-lg hover:bg-red-600 transition-all shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSection}
              className="px-6 py-3 bg-gray-800 text-red-500 font-bold rounded-lg hover:border-2 hover:border-red-500 hover:bg-transparent transition-all shadow-lg"
            >
              Learn More
            </motion.button>
          </div>
        </div>
        <motion.video
          autoPlay
          loop
          src="src/assets/Animation - 1743756217018.webm"
          className="w-full lg:w-1/2 rounded-lg shadow-lg mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.video>
      </div>

      {/* How It Works Section */}
      <section
        className="bg-gray-900/50 py-16 px-4 lg:px-8 rounded-lg mt-24 lg:mt-96 pt-20 backdrop-blur-md"
        ref={sectionRef}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-2xl lg:text-3xl font-bold text-red-500 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How Does It Work?
          </motion.h2>
          <motion.p
            className="text-white text-base lg:text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our AI-powered system analyzes cough sounds using advanced deep learning techniques. By extracting key audio
            features like MFCC and Mel spectrograms, we classify respiratory conditions with high accuracy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: '🎤 Easy Audio Upload', desc: 'Upload or record your cough sound effortlessly.' },
            { title: '📊 Advanced AI Analysis', desc: 'Uses deep learning (CNN) to detect patterns.' },
            { title: '🎯 High Accuracy', desc: 'Trained on diverse datasets for reliable predictions.' },
            { title: '🔍 Interactive Visuals', desc: 'View real-time spectrograms and analysis.' },
            { title: '🔒 Privacy First', desc: 'Your data is never stored or shared.' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-black/50 text-white p-6 lg:p-8 rounded-lg shadow-lg backdrop-blur-md overflow-hidden group hover:bg-gray-950 transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-red-500 transition-all"></div>

              {/* Card Content */}
              <h3 className="text-lg lg:text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300 mt-2 text-sm lg:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="started mt-24 lg:mt-56 text-center text-white px-4">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Start Your Health Journey Today
        </motion.h1>
        <motion.p
          className="mt-4 text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover potential respiratory issues with our RespireNet.
        </motion.p>
        <Link to="/predict">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 text-lg lg:text-2xl px-6 lg:px-8 py-3 lg:py-4 text-white bg-red-500 rounded-lg hover:border-2 hover:border-red-500 hover:bg-gray-900 transition-all shadow-lg"
          >
            Predict Now
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

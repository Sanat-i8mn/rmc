import { motion } from "framer-motion";

const IndustryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom py-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industry Solutions
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive research management solutions tailored for different industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-secondary p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">Publishers & Societies</h3>
            <p className="text-muted-foreground">
              Supporting academic publishers and professional societies with research management and publication services.
            </p>
          </motion.div>

          <motion.div
            className="bg-secondary p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">Universities</h3>
            <p className="text-muted-foreground">
              Empowering universities with comprehensive research support and academic excellence programs.
            </p>
          </motion.div>

          <motion.div
            className="bg-secondary p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">Government & Funding Organisations</h3>
            <p className="text-muted-foreground">
              Providing strategic research consulting for government agencies and funding organizations.
            </p>
          </motion.div>

          <motion.div
            className="bg-secondary p-8 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">Corporate & Business</h3>
            <p className="text-muted-foreground">
              Delivering research-driven insights and solutions for corporate innovation and business growth.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;
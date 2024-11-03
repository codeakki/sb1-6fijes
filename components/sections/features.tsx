"use client";

import { motion } from "framer-motion";
import { Wallet, CreditCard, QrCode, DollarSign, Shield, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Wallet,
    title: "Cross-Device Access",
    description: "Login with Google to create a wallet accessible from any device. Your funds remain secure and private.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: CreditCard,
    title: "Easy On-Ramp",
    description: "Deposit money from other wallets or credit cards. Multiple payment modes available including bank transfer.",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: QrCode,
    title: "Instant Payments",
    description: "Use your unique Nexus-ID or QR code to accept or send payments instantly.",
    color: "bg-green-500/10 text-green-500"
  },
  {
    icon: DollarSign,
    title: "Stable Payments",
    description: "Pay in $USD without worrying about volatility. We handle the conversion automatically.",
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "End-to-end encryption ensures your transactions are always private and secure.",
    color: "bg-red-500/10 text-red-500"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Send money to anyone, anywhere in the world, instantly and with minimal fees.",
    color: "bg-indigo-500/10 text-indigo-500"
  }
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-plus-jakarta">
            Everything you need for modern payments
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features to help you accept payments and grow your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description, color, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="p-6 rounded-xl bg-card shadow-lg border hover:shadow-xl transition-all duration-200"
    >
      <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center", color)}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-semibold font-plus-jakarta">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </motion.div>
  );
}
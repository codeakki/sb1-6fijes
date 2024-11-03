"use client";

import { motion } from "framer-motion";
import { Code2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const installCode = `# Using npm
npm install nexus-frontend-sdk

# Using yarn
yarn add nexus-frontend-sdk`;

const importCode = `import NexusPay from "nexus-frontend-sdk";`;

const usageCode = `const PaymentPage = () => {
  const [handleOpen, setHandleOpen] = useState(false);
  
  return (
    <NexusPay
      name="Nexus Pay"
      details="Payment for your order"
      amount="1000"
      open={handleOpen}
      onClick={() => setHandleOpen(true)}
      onClose={() => setHandleOpen(false)}
    />
  );
};

export default PaymentPage;`;

const bestPractices = [
  "Always handle errors and edge cases in your integration",
  "Implement proper error handling and logging for debugging purposes",
  "Consider implementing retry logic for failed requests",
  "Keep your SDK version up to date for the latest features and security updates"
];

export function SDKGuide() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-plus-jakarta">
            NexusPay SDK Integration Guide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Quick start guide to integrate NexusPay in your application
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="install" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="install">Install</TabsTrigger>
                <TabsTrigger value="import">Import</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
              </TabsList>
              <TabsContent value="install">
                <div className="relative">
                  <pre className="language-bash rounded-lg bg-card p-4 overflow-x-auto text-sm">
                    <code>{installCode}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => navigator.clipboard.writeText(installCode)}
                  >
                    <Code2 className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="import">
                <div className="relative">
                  <pre className="language-javascript rounded-lg bg-card p-4 overflow-x-auto text-sm">
                    <code>{importCode}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => navigator.clipboard.writeText(importCode)}
                  >
                    <Code2 className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="usage">
                <div className="relative">
                  <pre className="language-javascript rounded-lg bg-card p-4 overflow-x-auto text-sm">
                    <code>{usageCode}</code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => navigator.clipboard.writeText(usageCode)}
                  >
                    <Code2 className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold font-plus-jakarta">Best Practices</h3>
            <div className="space-y-4">
              {bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5" />
                  <p className="text-muted-foreground">{practice}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button size="lg" className="w-full sm:w-auto">
                View Full Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
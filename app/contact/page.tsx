"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to send message");
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:your@email.com", color: "hover:text-red-400" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-gray-400" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-blue-300" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 md:pt-40 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-12 md:mb-16 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Get In Touch
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a question or want to discuss a project? I&apos;d love to hear from you.
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full mt-4 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="Jan Christian"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm"
                    >
                      {error}
                    </motion.p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : submitted ? "Message Sent! ✓" : "Send Message"}
                  </motion.button>

                  {submitted && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-accent text-sm"
                    >
                      Thanks for reaching out! I&apos;ll get back to you soon.
                    </motion.p>
                  )}
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
                <div className="card p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Other Ways to Reach Me</h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">Email</p>
                      <a
                        href="mailto:your@email.com"
                        className="text-accent hover:text-accent/80 transition-colors font-semibold break-all text-sm md:text-base"
                      >
                        your@email.com
                      </a>
                    </div>

                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">Location</p>
                      <p className="text-foreground font-semibold text-sm md:text-base">Your City, Country</p>
                    </div>

                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground mb-4">Connect on Social Media</p>
                      <div className="flex gap-4">
                        {socialLinks.map((social) => {
                          const Icon = social.icon;
                          return (
                            <motion.a
                              key={social.label}
                              href={social.href}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                              className={`text-muted-foreground transition-colors ${social.color}`}
                              aria-label={social.label}
                            >
                              <Icon size={24} />
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent/20 to-accent/5 backdrop-blur border border-accent/30 rounded-lg p-6 md:p-8 text-center">
                  <p className="text-foreground font-semibold mb-2 text-sm md:text-base">Available for Collaborations</p>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

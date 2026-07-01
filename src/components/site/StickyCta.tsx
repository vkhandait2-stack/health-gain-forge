import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL, externalLink } from "@/lib/site";

export function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
        >
          <Button asChild variant="hero" className="w-full shadow-float">
            <a href={CALENDLY_URL} {...externalLink}>Book Free Consultation</a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
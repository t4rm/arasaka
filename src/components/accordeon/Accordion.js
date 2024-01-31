import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  return (
    <Accordion itemClasses={{ heading: "accordion-custom", base: "accordion-hr-none" }}>
      <AccordionItem key="1" aria-label="Security" title="Security">
        Arasaka's Security Division stands as an impenetrable fortress in the realm of corporate protection. With a relentless commitment to safeguarding our clients and their assets, we employ a comprehensive array of security measures. Our elite team of highly trained professionals secures physical locations, personnel, and valuable data through advanced surveillance, biometric access controls, and state-of-the-art threat detection systems. Arasaka Security is the shield that ensures the confidentiality, integrity, and availability of your most critical assets in an ever-changing world where security is paramount. Trust us to secure your future.
      </AccordionItem>
      <AccordionItem key="2" aria-label="Cybernetics" title="Cybernetics">
        Arasaka's Cybernetics Division is at the forefront of enhancing human capabilities through cutting-edge cybernetic implants. From neural enhancements to advanced limb replacements, we strive to redefine the limits of human potential. Our commitment to innovation and safety has made us a trusted leader in the augmentation industry.
      </AccordionItem>
      <AccordionItem key="3" aria-label="Information Warfare Solutions" title="Information Warfare Solutions">
        In the ever-evolving landscape of digital conflict, Arasaka excels in providing state-of-the-art Information Warfare Solutions. Our expert teams specialize in cybersecurity, counter-hacking, and data protection. As a key player in the battle for digital dominance, Arasaka safeguards your data and ensures the integrity of your digital assets.
      </AccordionItem>
    </Accordion>
  );
}

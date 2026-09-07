"use client";

import { useState } from "react";

export default function CopyBiodataLink({ biodataCode }: { biodataCode: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = `${window.location.origin}/biodata/${biodataCode}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-full py-2.5 rounded-xl bg-white/15 text-white font-bold text-xs hover:bg-white/25 transition"
    >
      {copied ? "✅ লিংক কপি হয়েছে!" : "📋 Copy Biodata Link"}
    </button>
  );
}

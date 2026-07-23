import { useState, useEffect } from "react";

export type Segment = { text: string; className?: string };

export function useTypewriter(
  phrases: Segment[][],
  typingSpeed = 80,
  pauseTime = 1500,
) {
  const [length, setLength] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText = phrases[phraseIndex].map((s) => s.text).join("");

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setLength((prev) => prev + 1);
          if (length + 1 === fullText.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setLength((prev) => prev - 1);
          if (length - 1 === 0) {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    length,
    isDeleting,
    phraseIndex,
    fullText,
    phrases,
    typingSpeed,
    pauseTime,
  ]);

  // slice segments to match current typed length
  const rendered: Segment[] = [];
  let remaining = length;
  for (const seg of phrases[phraseIndex]) {
    if (remaining <= 0) break;
    const take = Math.min(seg.text.length, remaining);
    rendered.push({ text: seg.text.slice(0, take), className: seg.className });
    remaining -= take;
  }

  return rendered;
}

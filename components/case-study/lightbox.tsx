"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

/* ──────────────────────────────────────────────────────────
   Lightbox — a single shared image-viewer modal for the whole
   case study. Any ImageFrame can open it via useLightbox(); we
   keep just one modal in the tree (not one per image) so there's
   no duplicated markup and only one Escape/scroll-lock handler.
   ────────────────────────────────────────────────────────── */

type LightboxImage = { src: string; alt: string };
type LightboxCtx = { open: (img: LightboxImage) => void };

const Ctx = createContext<LightboxCtx | null>(null);

/** Open the full-image viewer. Returns a no-op if used outside the
 *  provider so ImageFrame stays safe to render anywhere. */
export function useLightbox(): LightboxCtx {
  return useContext(Ctx) ?? { open: () => {} };
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null);

  const open = useCallback((img: LightboxImage) => setImage(img), []);
  const close = useCallback(() => setImage(null), []);

  // Escape to close + lock body scroll while the modal is open.
  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [image, close]);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {image && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={image.alt || "Image preview"}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close image preview"
            onClick={close}
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lightbox-img"
            src={image.src}
            alt={image.alt}
            decoding="async"
            // clicking the image itself shouldn't close the modal
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Ctx.Provider>
  );
}

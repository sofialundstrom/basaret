"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  findViewIndexForPage,
  getReaderViews,
  nollebokPageSrc,
} from "../data/nollebok";

const SWIPE_THRESHOLD = 56;
const TAP_THRESHOLD = 10;

function preloadPage(index: number) {
  const img = new Image();
  img.src = nollebokPageSrc(index);
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

function NollebokPageImage({
  pageIndex,
  onLoad,
}: {
  pageIndex: number;
  onLoad: () => void;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      onLoad();
    }
  }, [pageIndex, onLoad]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={nollebokPageSrc(pageIndex)}
      alt={pageIndex === 0 ? "Nollebokens omslag" : `Nolleboken sida ${pageIndex}`}
      className="pointer-events-none h-full w-full object-contain"
      draggable={false}
      onLoad={onLoad}
      onError={onLoad}
    />
  );
}

function BookPages({
  pages,
  isLoading,
  onPageLoad,
}: {
  pages: number[];
  isLoading: boolean;
  onPageLoad: () => void;
}) {
  if (pages.length === 1) {
    return (
      <div className="overflow-hidden">
        <div className="relative aspect-[1748/2480] overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-nollebok-cream text-sm text-nollebok-ink/50">
              Laddar…
            </div>
          )}
          <NollebokPageImage
            key={pages[0]}
            pageIndex={pages[0]}
            onLoad={onPageLoad}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-nollebok-cream/80 text-sm text-nollebok-ink/50">
          Laddar…
        </div>
      )}
      <div className="relative aspect-[1748/2480] flex-1">
        <NollebokPageImage
          key={pages[0]}
          pageIndex={pages[0]}
          onLoad={onPageLoad}
        />
      </div>
      <div className="w-px shrink-0 bg-nollebok-ink/10" aria-hidden />
      <div className="relative aspect-[1748/2480] flex-1">
        <NollebokPageImage
          key={pages[1]}
          pageIndex={pages[1]}
          onLoad={onPageLoad}
        />
      </div>
    </div>
  );
}

export function NollebokReader() {
  const isDesktop = useIsDesktop();
  const views = getReaderViews(isDesktop);
  const [viewIndex, setViewIndex] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number; tracking: boolean } | null>(
    null,
  );

  const currentView = views[viewIndex] ?? views[0];
  const pages = currentView.pages;
  const isLoading = loadedCount < pages.length;
  const isCover = pages.length === 1 && pages[0] === 0;

  const goToView = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(index, views.length - 1));
      setDragOffset(0);
      if (next === viewIndex) return;
      setLoadedCount(0);
      setViewIndex(next);
    },
    [viewIndex, views.length],
  );

  const flipNext = useCallback(() => {
    goToView(viewIndex + 1);
  }, [goToView, viewIndex]);

  const flipPrev = useCallback(() => {
    goToView(viewIndex - 1);
  }, [goToView, viewIndex]);

  useEffect(() => {
    setViewIndex((index) => {
      const nextViews = getReaderViews(isDesktop);
      const page = nextViews[index]?.pages[0] ?? nextViews[0]?.pages[0] ?? 0;
      return findViewIndexForPage(nextViews, page);
    });
  }, [isDesktop]);

  useEffect(() => {
    for (const page of views[viewIndex - 1]?.pages ?? []) preloadPage(page);
    for (const page of views[viewIndex + 1]?.pages ?? []) preloadPage(page);
  }, [viewIndex, views]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") flipNext();
      if (event.key === "ArrowLeft") flipPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [flipNext, flipPrev]);

  const handlePageLoad = useCallback(() => {
    setLoadedCount((count) => count + 1);
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      tracking: false,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return;

    const deltaX = event.clientX - dragStart.current.x;
    const deltaY = event.clientY - dragStart.current.y;

    if (!dragStart.current.tracking) {
      if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return;
      dragStart.current.tracking = Math.abs(deltaX) > Math.abs(deltaY);
    }

    if (!dragStart.current.tracking) return;

    event.preventDefault();

    let nextOffset = deltaX;
    if (viewIndex <= 0 && deltaX > 0) {
      nextOffset = deltaX * 0.15;
    } else if (viewIndex >= views.length - 1 && deltaX < 0) {
      nextOffset = deltaX * 0.15;
    }

    setDragOffset(nextOffset);
  };

  const onPointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return;

    const deltaX = event.clientX - dragStart.current.x;
    const deltaY = event.clientY - dragStart.current.y;
    const totalMove = Math.hypot(deltaX, deltaY);
    const wasTap = !dragStart.current.tracking && totalMove < TAP_THRESHOLD;

    if (wasTap && isCover && viewIndex === 0) {
      flipNext();
    } else if (dragStart.current.tracking) {
      if (deltaX <= -SWIPE_THRESHOLD && viewIndex < views.length - 1) {
        flipNext();
      } else if (deltaX >= SWIPE_THRESHOLD && viewIndex > 0) {
        flipPrev();
      }
    }

    dragStart.current = null;
    setDragOffset(0);
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const dragProgress = Math.max(-1, Math.min(1, dragOffset / 180));
  const bookTransform = isDragging
    ? `perspective(1400px) rotateY(${dragProgress * 8}deg) translateX(${dragOffset * 0.35}px)`
    : isCover
      ? "rotate(-1deg)"
      : "none";

  const widthClass =
    pages.length === 1
      ? isDesktop
        ? "max-w-[11rem] md:max-w-sm lg:max-w-md"
        : "w-[min(70vw,15.5rem)]"
      : "max-w-lg md:max-w-3xl lg:max-w-4xl";

  const shadowClass =
    pages.length === 1 && isCover
      ? "shadow-[0_12px_32px_rgba(18,18,13,0.15)]"
      : "shadow-[0_12px_40px_rgba(18,18,13,0.18)]";

  const isSinglePage = pages.length === 1;
  const navWidthClass = isSinglePage ? widthClass : "max-w-xl";
  const navButtonClassName = isSinglePage
    ? "rounded-full border-2 border-nollebok-ink bg-nollebok-gron px-2.5 py-1.5 text-xs font-medium transition hover:bg-nollebok-lila disabled:cursor-not-allowed disabled:bg-nollebok-beige/60 disabled:opacity-60"
    : "rounded-full border-2 border-nollebok-ink bg-nollebok-gron px-3 py-2 text-sm font-medium transition hover:bg-nollebok-lila disabled:cursor-not-allowed disabled:bg-nollebok-beige/60 disabled:opacity-60 md:px-4 md:text-base";

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className={`w-full ${widthClass}`}>
        <div
          className={`relative select-none ${shadowClass} ${
            isDragging
              ? "cursor-grabbing"
              : isCover
                ? "cursor-pointer"
                : "cursor-grab"
          } touch-pan-y`}
          style={{
            transform: bookTransform,
            transition: isDragging
              ? "none"
              : "transform 220ms ease-out",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          role="group"
          aria-label="Bläddra i nolleboken genom att dra åt sidan"
        >
          <BookPages
            pages={pages}
            isLoading={isLoading}
            onPageLoad={handlePageLoad}
          />
        </div>
      </div>

      <div className="flex w-full max-w-sm flex-col items-center gap-1 text-center md:hidden">
        <p className="text-sm font-medium">{currentView.label}</p>
        <p className="text-sm text-nollebok-ink/60">
          Svep åt sidan för att bläddra
        </p>
      </div>

      <div
        className={`hidden w-full grid-cols-3 items-center gap-1 md:grid ${navWidthClass}`}
      >
        <button
          type="button"
          onClick={flipPrev}
          disabled={viewIndex <= 0}
          className={`justify-self-start ${navButtonClassName}`}
        >
          ← Föregående
        </button>
        <p className="justify-self-center px-1 text-center text-sm font-medium md:text-base">
          {currentView.label}
        </p>
        <button
          type="button"
          onClick={flipNext}
          disabled={viewIndex >= views.length - 1}
          className={`justify-self-end ${navButtonClassName}`}
        >
          Nästa →
        </button>
      </div>
    </div>
  );
}

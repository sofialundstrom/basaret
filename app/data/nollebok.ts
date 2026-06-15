export const NOLLEBOK_PAGE_COUNT = 28;

export const NOLLEBOK_PDF_URL = "/nollebok/Nolleboken_webb.pdf";
export const NOLLEBOK_PDF_FILENAME = "Nolleboken.pdf";

export const NOLLEBOK_COVER_SRC = "/nollebok/pages/0.jpg";

export function nollebokPageSrc(index: number) {
  return `/nollebok/pages/${index}.jpg`;
}

export const nollebokPages = Array.from({ length: NOLLEBOK_PAGE_COUNT }, (_, i) =>
  nollebokPageSrc(i),
);

export function getSpreadCount() {
  return 1 + Math.ceil((NOLLEBOK_PAGE_COUNT - 1) / 2);
}

export function getSpreadPages(spreadIndex: number) {
  if (spreadIndex <= 0) return [0];

  const leftPage = 1 + (spreadIndex - 1) * 2;
  if (leftPage >= NOLLEBOK_PAGE_COUNT) {
    return [NOLLEBOK_PAGE_COUNT - 1];
  }

  const rightPage = leftPage + 1;
  if (rightPage >= NOLLEBOK_PAGE_COUNT) return [leftPage];
  return [leftPage, rightPage];
}

export function getSpreadLabel(spreadIndex: number) {
  const pages = getSpreadPages(spreadIndex);
  if (pages.length === 1 && pages[0] === 0) return "Omslag";
  if (pages.length === 1) return `Sida ${pages[0]}`;
  return `Sida ${pages[0]}–${pages[1]}`;
}

export type NollebokView = {
  pages: number[];
  label: string;
};

export function getPageLabel(pageIndex: number) {
  return pageIndex === 0 ? "Omslag" : `Sida ${pageIndex}`;
}

export function getReaderViews(isDesktop: boolean): NollebokView[] {
  if (!isDesktop) {
    return Array.from({ length: NOLLEBOK_PAGE_COUNT }, (_, pageIndex) => ({
      pages: [pageIndex],
      label: getPageLabel(pageIndex),
    }));
  }

  return Array.from({ length: getSpreadCount() }, (_, spreadIndex) => ({
    pages: getSpreadPages(spreadIndex),
    label: getSpreadLabel(spreadIndex),
  }));
}

export function findViewIndexForPage(
  views: NollebokView[],
  pageIndex: number,
) {
  const index = views.findIndex((view) => view.pages.includes(pageIndex));
  return index >= 0 ? index : 0;
}

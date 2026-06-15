export function scrollToId(id: string, behavior: ScrollBehavior = "smooth") {
  const element = document.getElementById(id);
  if (!element) return;

  const header = document.querySelector("header");
  const headerPosition = header ? getComputedStyle(header).position : "static";
  const headerIsPinned =
    headerPosition === "fixed" || headerPosition === "sticky";

  const offset = headerIsPinned
    ? (header?.getBoundingClientRect().height ?? 72) + 8
    : 8;

  const top =
    element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior });
}

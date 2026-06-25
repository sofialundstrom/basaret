const RIGHT_EDGE_ASSET = "/assets/nollebok/grafiska-element-kant.svg";
const LEFT_EDGE_ASSET = "/assets/nollebok/grafiska-element-kant-vanster.svg";

const edgeWidthClass = "w-36 lg:w-44 xl:w-52";

function NollebokEdgeStripRight() {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 right-0 z-[2] hidden bg-nollebok-cream opacity-65 md:block ${edgeWidthClass}`}
      style={{
        backgroundImage: `url('${RIGHT_EDGE_ASSET}')`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
        backgroundPosition: "right top",
      }}
    />
  );
}

function NollebokEdgeStripLeft() {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-0 bottom-8 left-0 z-[2] hidden bg-nollebok-cream opacity-65 md:block ${edgeWidthClass}`}
      style={{
        backgroundImage: `url('${LEFT_EDGE_ASSET}')`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
        backgroundPosition: "left top",
      }}
    />
  );
}

export function NollebokEdgeDecor() {
  return (
    <>
      <NollebokEdgeStripLeft />
      <NollebokEdgeStripRight />
    </>
  );
}

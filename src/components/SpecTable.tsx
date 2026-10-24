import type { ProductSpecs } from "@/lib/specs";

// Cells holding two sizes (e.g. "43 × 105 (2T) / 43 × 142 (3T)") stack like the catalog
const isStacked = (cell: string) => cell.includes(" / ") && cell.includes("×");

/** Responsive spec table: scrolls sideways on small screens with the model column pinned. */
export default function SpecTable({ table }: { table: NonNullable<ProductSpecs["table"]> }) {
  return (
    <>
      <p className="mb-3 text-xs font-medium text-ink/45 sm:hidden">Swipe to see all columns →</p>
      <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-max border-collapse text-center text-sm sm:text-base">
            <thead>
              <tr className="bg-paper">
                {table.columns.map((c, i) => (
                  <th
                    key={c}
                    scope="col"
                    className={`border-b border-r border-ink/10 px-5 py-4 align-top font-semibold leading-snug text-ink last:border-r-0 ${
                      i === 0 ? "sticky left-0 z-10 bg-paper text-left" : "max-w-[9rem]"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row[0]} className="group">
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th
                        key={i}
                        scope="row"
                        className="sticky left-0 z-10 whitespace-nowrap border-b border-r border-ink/10 bg-white px-5 py-3.5 text-left font-medium transition-colors group-last:border-b-0 group-hover:bg-paper"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={i}
                        className={`border-b border-r border-ink/10 px-5 py-3.5 tabular-nums transition-colors last:border-r-0 group-last:border-b-0 group-hover:bg-paper ${
                          cell === "–" ? "text-ink/30" : "text-ink/75"
                        } ${isStacked(cell) ? "text-xs leading-tight" : "whitespace-nowrap"}`}
                      >
                        {isStacked(cell)
                          ? cell.split(" / ").map((part, j) => (
                              <span key={j} className="block">
                                {part}
                              </span>
                            ))
                          : cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

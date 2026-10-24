// Technical specifications transcribed from the company catalog (all sizes in mm).
// Keyed by product slug — series without an entry show a "request specifications" card instead.

export type ProductSpecs = {
  table?: { columns: string[]; rows: string[][] };
  /** Abbreviations used in the table's model names */
  legend?: string;
  details: { label: string; value: string }[];
};

const STANDARD_FINISH = "Powder | Wood | Anodizing";
const COATED_FINISH = "Powder Coat | Wood Effect | Anodizing";
const CORNER = "45° / 90° Cut with Corner Connector";
const EURO = "P.E. = Premium Euro · E.E. = Exclusive Euro";

export const productSpecs: Record<string, ProductSpecs> = {
  "sliding-series": {
    table: {
      columns: ["Model", "Shutter Size", "Glass Size", "2 Track", "3 Track", "4 Track", "Window Height (Max.)", "Grill"],
      rows: [
        ["25 P.E. Series", "25 × 64", "5 to 18", "43 × 64", "43 × 101", "–", "2130", "43 × 99 (2T)"],
        ["25 E.E. Series", "25 × 64", "5 to 18", "43 × 64", "43 × 101", "43 × 137", "2130", "43 × 105 (2T) / 43 × 142 (3T)"],
        ["30 E.E. Series", "30 × 65", "5 to 22", "43 × 71", "43 × 113", "–", "2440", "–"],
        ["32 P.E. Series", "32 × 66", "5 to 26", "51 × 73", "51 × 114", "–", "3050", "–"],
        ["34 E.E. Series", "34 × 65", "5 to 26", "–", "41 × 95", "–", "3250", "–"],
        ["35 E.E. Series", "35 × 75", "5 to 28", "45 × 78", "45 × 124", "–", "3650", "–"],
      ],
    },
    legend: EURO,
    details: [
      { label: "Locking Type", value: "Single & Multipoint Lock with Handle" },
      { label: "Joinery", value: "45° Cut with Corner Connector" },
      { label: "Finish", value: STANDARD_FINISH },
    ],
  },
  "slim-series": {
    table: {
      columns: ["Model", "Shutter Size", "Interlock", "Glass Size", "2 Track", "3 Track", "4 Track", "Window Height (Max.)", "Grill"],
      rows: [
        ["20 P.E. Slim", "25 × 64", "20", "5 to 18", "43 × 64", "43 × 101", "–", "2130", "43 × 99 (2T)"],
        ["27 E.E. Slim", "25 × 64", "27", "5 to 18", "43 × 64", "43 × 101", "43 × 137", "2130", "43 × 105 (2T) / 43 × 142 (3T)"],
        ["30 E.E. Slim", "30 × 65", "30", "5 to 22", "43 × 71", "43 × 113", "–", "2440", "–"],
        ["30 P.E. Slim", "32 × 66", "30", "5 to 26", "51 × 73", "51 × 114", "–", "3050", "–"],
        ["32 E.E. Slim", "35 × 75", "32", "5 to 28", "45 × 78", "45 × 124", "–", "3650", "–"],
      ],
    },
    legend: EURO,
    details: [
      { label: "Locking Type", value: "Single & Multipoint Lock with Handle" },
      { label: "Joinery", value: CORNER },
      { label: "Finish", value: STANDARD_FINISH },
    ],
  },
  "hybrid-slim-series": {
    table: {
      columns: ["Model", "Shutter Size", "Interlock", "Glass Size", "2 Track", "3 Track", "4 Track", "Window Height (Max.)", "Frame Vertical"],
      rows: [
        ["26 E.H. Slim", "28 × 58", "25", "5 to 13.5", "–", "35 × 80", "–", "2430", "14 / 29"],
        ["27 E.H. Slim", "25 × 64", "27", "5 to 18", "40 × 78", "40 × 114", "40 × 151", "2430", "15"],
        ["30 E.H. Slim", "30 × 65", "30", "5 to 22", "40 × 87", "40 × 128", "–", "2640", "15"],
        ["32 E.H. Slim", "35 × 75", "32", "5 to 28", "40 × 95", "40 × 142", "–", "3650", "15"],
      ],
    },
    legend: "E.H. = Exclusive Hybrid",
    details: [
      { label: "Locking Type", value: "Single & Multipoint Lock with Handle" },
      { label: "Joinery", value: CORNER },
      { label: "Finish", value: STANDARD_FINISH },
    ],
  },
  "casement-series": {
    table: {
      columns: ["Model", "Shutter Size", "Glass Size", "Single Frame", "2 in 1 Frame", "3 in 1 Frame", "Window Height (Max.)"],
      rows: [
        ["30 Casement", "30 × 61", "5 to 8", "30 × 42", "–", "–", "2130"],
        ["32 Casement", "32 × 65", "5 to 13.5", "–", "89 × 41", "–", "2130"],
        ["40 Casement", "40 × 58 / 40 × 61", "5 to 8", "40 × 41", "78 × 48", "114 × 50", "2130"],
        ["45 Casement", "45 × 72", "5 to 26", "45 × 45", "–", "106 × 58", "2430"],
        ["50 Casement", "50 × 78", "5 to 28", "50 × 46", "101 × 50", "–", "2430"],
      ],
    },
    details: [
      { label: "Locking Type", value: "Single & Multipoint Lock with Handle" },
      { label: "Joinery", value: "45° Cut with Corner Connector" },
      { label: "Finish", value: STANDARD_FINISH },
    ],
  },
  "door-series": {
    table: {
      columns: ["Model", "Shutter Size", "Frame Size", "Glass Size", "Door Height (Max.)"],
      rows: [
        ["40 Door", "40 × 100", "40 × 40", "5 to 24", "2250"],
        ["50 Door", "58 × 96", "50 × 73", "5 to 28", "3000"],
        ["115 Door", "45 × 115", "45 × 45", "5 to 24", "3000"],
        ["French Door", "58 × 96", "50 × 73", "5 to 28", "3000"],
      ],
    },
    details: [
      { label: "Locking Type", value: "Single & Multipoint Lock with Handle" },
      { label: "Joinery", value: CORNER },
      { label: "Finish", value: STANDARD_FINISH },
    ],
  },
  "lift-and-slide-series": {
    table: {
      columns: ["Model", "Shutter Size", "Frame Size", "Glass Size", "Height (Max.)"],
      rows: [
        ["96 mm", "96 × 50", "102 × 50", "8 to 32", "3660"],
        ["28 mm", "28 × 50", "106 × 40", "8 to 38", "3660"],
      ],
    },
    details: [
      { label: "Locking Type", value: "Multipoint Lock with Shoot Bolt" },
      { label: "Joinery", value: CORNER },
      { label: "Finish", value: STANDARD_FINISH },
    ],
  },
  "minimal-and-slim-series": {
    table: {
      columns: ["Model", "Shutter Size", "Frame Size", "Glass Size", "Height (Max.)", "Track Option", "Integrated Mesh", "Concealed"],
      rows: [
        ["10 mm", "19 × 32", "43 × 89", "8 to 14.5", "2450", "2T / 3T", "–", "–"],
        ["15 mm", "36 × 18", "42 × 108", "12 to 14.5", "3000", "2T / 2T4S", "Yes", "Yes"],
        ["32 mm", "42 × 81", "42 × 108", "28 to 32", "3000", "2T / 2T4S", "Yes", "Yes"],
      ],
    },
    details: [
      { label: "Locking Type", value: "Multipoint Lock with Handle" },
      { label: "Joinery", value: CORNER },
      { label: "Finish", value: STANDARD_FINISH },
    ],
  },
  "bi-fold-sliding-series": {
    table: {
      columns: ["Model", "Shutter Size", "Frame Size", "Glass Size", "Height (Max.)", "Concealed", "Lock & Key"],
      rows: [
        ["29 mm", "29 × 85", "90 × 70", "6 to 38", "3660", "Yes", "–"],
        ["66 mm", "66 × 66", "35 × 23", "8 to 40", "3660", "–", "Yes"],
      ],
    },
    details: [
      { label: "Locking Type", value: "Multipoint Lock with Handle" },
      { label: "Joinery", value: CORNER },
      { label: "Finish", value: STANDARD_FINISH },
    ],
  },
  "ventino-sliding-series": {
    table: {
      columns: ["Model", "Shutter Size", "Glass Size", "2 Track", "3 Track", "Window Height (Max.)"],
      rows: [
        ["25 mm", "25 × 63", "5 to 8", "63 × 43", "100 × 43", "1800"],
        ["27 mm", "27 × 65", "5 to 8", "45 × 42", "80 × 42", "2200"],
        ["29 mm", "29 × 65", "5 to 20", "65 × 50", "100 × 50", "2400"],
        ["35 mm", "35 × 75", "5 to 20", "72 × 42", "113 × 42", "3200"],
      ],
    },
    details: [
      { label: "Locking Type", value: "Single & Multipoint Lock with Handle" },
      { label: "Joinery", value: CORNER },
      { label: "Finish", value: STANDARD_FINISH },
    ],
  },
  "alu-wood-sliding-series": {
    details: [
      { label: "Shutter Depth", value: "34 mm" },
      { label: "Locking Type", value: "Single & Multipoint Lock" },
      { label: "Corner Details", value: "45° Cut with Corner Connector" },
      { label: "Glass Size", value: "18 to 24 mm" },
      { label: "Glass Option", value: "DGU, Laminated Glass" },
      { label: "Window Height (Max.)", value: "1800 mm" },
      { label: "Finish", value: "Real Wood" },
    ],
  },
  "alu-wood-casement-series": {
    details: [
      { label: "Shutter Depth", value: "55 mm" },
      { label: "Locking Type", value: "Single & Multipoint Lock" },
      { label: "Corner Details", value: "45° Cut with Corner Connector" },
      { label: "Glass Size", value: "18 to 24 mm" },
      { label: "Glass Option", value: "DGU, Laminated Glass" },
      { label: "Window Height (Max.)", value: "1800 mm" },
      { label: "Finish", value: "Real Wood" },
    ],
  },
  "mono-rail-series": {
    details: [
      { label: "Shutter Depth", value: "34 mm" },
      { label: "Locking Type", value: "Multipoint Lock" },
      { label: "Corner Details", value: CORNER },
      { label: "Glass Size", value: "5 to 14 mm" },
      { label: "Window Height (Max.)", value: "3000 mm" },
      { label: "Window Width (Max.)", value: "1200 mm" },
      { label: "Finish", value: COATED_FINISH },
    ],
  },
  "tilt-and-turn-series": {
    details: [
      { label: "Shutter Depth", value: "50 mm" },
      { label: "Locking Type", value: "Multipoint Lock" },
      { label: "Corner Details", value: "45° Cut with Corner Connector" },
      { label: "Glass Size", value: "5 to 32 mm" },
      { label: "Window Height (Max.)", value: "2440 mm" },
      { label: "Finish", value: COATED_FINISH },
    ],
  },
  "vertical-series": {
    details: [
      { label: "Locking Type", value: "Single Lock" },
      { label: "Corner Details", value: "90° Cut with Corner Connector" },
      { label: "Glass Size", value: "5 to 8 mm" },
      { label: "Window Height (Max.)", value: "1200 mm" },
      { label: "Finish", value: COATED_FINISH },
    ],
  },
};

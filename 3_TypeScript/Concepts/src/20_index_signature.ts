type NumberDict = { [k: string]: number };

const counters: NumberDict = {};

counters["Likes"] = 1;
counters["Comments"] = 2;
counters["shares"] = 100;

type Metrices = Record<"likes" | "views" | "shares", number>; // tight and safer
const mm: Metrices = { likes: 1, views: 100, shares: 23 };

const priceMap = new Map<string, number>();
priceMap.set("likes", 1);

type LooseMap = Record<string, number | undefined>;
const lm: LooseMap = {};
lm["x"] = undefined;
lm["y"] = 100;

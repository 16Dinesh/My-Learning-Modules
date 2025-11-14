//Exclude<T, U> -> Removes types from a union

type StatusN10 = "pending" | "success" | "error";
type NonErrorStatus = Exclude<StatusN10, "error">;

//Extract<T, U> -> keeps only matching types from a union

type Events = "click" | "scroll" | "keydown";
type MouseEvents = Extract<Events, "click" | "scroll">;

// NonNullable<T> -> Removes null and undefined from a type

type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;

type EventType1 = "click" | "submit" | "hover" | "keydown" | "keyup";
type EventType2 = Exclude<EventType1, "keydown">;

function handleEvent1(e: EventType2) {
  console.log(e);
}

// handleEvent1('keydown')

type ActionsN1 = "create" | "update" | "delete" | "read";
type ActionsN2 = Extract<ActionsN1, "create" | "update" | "delete">;

function handleEvent2(e: ActionsN2) {
  console.log(e);
}

// handleEvent2('read')

type MayBeNumber = number | null | undefined;
type CleanNumber = NonNullable<MayBeNumber>; // number

function square(num: CleanNumber) {
  return num * 2;
}

square(10);
// square(null)

// identity() --> to prevent the type Exactly

// makeArray() --> Wrap Anything into Array

// pluck() --> Extract a field from each Object

// getProp()

// serProp()

//-------------

//ADV

// pipe() --> functions composition helpers

// memoize() --> cache function helpers

// once() --> Execute a function only one time

import type { ScheduleDay } from "../types/schedule";

export const aktivitetsschema: ScheduleDay[] = [
  {
    date: "28/8",
    weekday: "Fredag",
    color: "bla",
    activities: [
      {
        header: "Första lunchen",
        time: "12:15-13:00",
        location: "A-K21, B-K22, C-K24",
        alcohol: false,
        description:
          "Nollan bjuds på lunch, det finns också chans att pynta sitt Nolleband.",
      },
      {
        header: "Campus-rundvandring",
        time: "15:00-17:00",
        location: "Campus",
        alcohol: false,
        description:
          "Nollan visas runt på campus av faddrar för att Nollan ska kunna hitta bättre samt få ansikte på studentfiket och Trappan.",
      },
    ],
  },
  {
    date: "29/8",
    weekday: "Lördag",
    color: "ljusrosa",
    activities: [
      {
        header: "Insparken i folkparken",
        time: "12:00-14:00",
        location: "Folkparken (Samling mellan husen)",
        alcohol: false,
        description:
          "Nollan får göra en massa roliga aktiviteter tillsammans och lära känna varandra.",
      },
    ],
  },
  {
    date: "30/8",
    weekday: "Söndag",
    color: "bla",
    activities: [
      {
        header: "Stadsrundvandring",
        time: "11:00",
        location: "Mellan Husen",
        alcohol: false,
        description:
          "Nollan får träffa några av LinTeks föreningar och göra roliga aktiviteter med dem.",
      },
    ],
  },
  {
    date: "31/8",
    weekday: "Måndag",
    color: "ljusrosa",
    activities: [
      {
        header: "Pluggstuga / Häng",
        time: "15:15-18:00",
        location: "A-TP44, B-TP54, C-TP41",
        alcohol: false,
        description:
          "Nollan kan få hjälp med sina studier och ställa frågor till erfarna faddrar. Även ett tillfälle för Nollan att ladda upp inför Korvgrillningen!",
      },
      {
        header: "Korvgrillning",
        time: "18:00-22:00",
        location: "Folkparken (Samling mellan husen)",
        alcohol: true,
        description:
          "Korvgrillning med trevligt sällskap, härlig musik och roliga lekar! Om Nollan vill får Nollan svänga sina lurviga. (Det betyder att dansa, Nollan).",
      },
    ],
  },
  {
    date: "1/9",
    weekday: "Tisdag",
    color: "bla",
    activities: [
      {
        header: "Lunch och sittningsinformation",
        time: "12:15-13:00",
        location: "TP1",
        alcohol: false,
        description:
          "Vi har en kort presentation om hur man går på sittning och säljer fler biljetter till sittningen.",
      },
      {
        header: "Pluggstuga / Häng",
        time: "15:15-17:45",
        location: "TP41",
        alcohol: false,
        description:
          "Nollan kan få hjälp med sina studier och ställa frågor till erfarna faddrar.",
      },
      {
        header: "Sektionspub",
        time: "18:00-22:00",
        location: "Trappan",
        alcohol: true,
        description:
          "Sektionerna kommer och berättar om sina olika program eftersom det är viktigt för Nollan att veta vilka möjligheter de har efter basåret!",
      },
    ],
  },
  {
    date: "2/9",
    weekday: "Onsdag",
    color: "ljusrosa",
    activities: [
      {
        header: "Pluggstuga",
        time: "10:15-12:00",
        location: "TP41",
        alcohol: false,
        description: "Nollan kan få hjälp med sina studier.",
      },
      {
        header: "Matlådans dag",
        time: "12:15-13:00",
        location: "Folkparken (Samling mellan husen)",
        alcohol: false,
        description:
          "Nollan tar med sig en egen matlåda och äter den tillsammans med sin grupp i folkparken!",
      },
    ],
  },
  {
    date: "3/9",
    weekday: "Torsdag",
    color: "bla",
    activities: [
      {
        header: "Pluggstuga",
        time: "15:15-18:00",
        location: "TP43",
        alcohol: false,
        description: "Nollan kan få hjälp med sina studier.",
      },
      {
        header: "Torsdagspub",
        time: "18:00-00:00",
        location: "Trappan",
        alcohol: true,
        description:
          "Nollan får gå på sin första Torsdagspub och träffa studenter från alla program och år!",
      },
    ],
  },
  {
    date: "4/9",
    weekday: "Fredag",
    color: "ljusrosa",
    activities: [
      {
        header: "Basårskampen",
        time: "19:00-21:00",
        location: "Himpan (Samling mellan husen)",
        alcohol: true,
        description: "Vi delar upp Nollan i flera grupper tävlar!",
      },
    ],
  },
  {
    date: "5/9",
    weekday: "Lördag",
    color: "bla",
    activities: [
      {
        header: "Fördrink",
        time: "16:30-18:00",
        location: "Ankarstocken Takterass",
        alcohol: true,
        description: "Vi taggar till inför finsittningen tillsammans!",
      },
      {
        header: "Finsittning",
        time: "18:00-22:00",
        location: "Trappan",
        alcohol: true,
        description:
          "En klassisk sittning med underhållning i form av gyckel och lekar!",
      },
      {
        header: "Efterfest",
        time: "23:00-02:00",
        location: "Kopparhusen Lokalen",
        alcohol: true,
        description:
          "Nollan får chans att gå på en dunder efterfest med faddararna!",
      },
    ],
  },
  {
    date: "6/9",
    weekday: "Söndag",
    color: "ljusrosa",
    activities: [
      {
        header: "Ettans dag",
        time: "13:00-15:00",
        location: "Folkparken (Samling mellan husen)",
        alcohol: false,
        description:
          "Nollan blir Ettan! Detta ska firas med lekar och lite häng!",
      },
    ],
  },
];

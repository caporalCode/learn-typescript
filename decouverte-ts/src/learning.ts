import { Nourriture } from "./nourriture";
import { Orc } from "./orc";
import { Arme, afficherPuissance, AvecPuissance } from "./arme";

let elfe: any = {
  nom: "Frieren",
};

elfe = "bonjour";

export function afficherText(test: unknown): void {
  if (typeof test == "string") console.log(test.toLowerCase());
  else if (typeof test == "number") console.log(test.toFixed(2));
}

afficherText("test");
afficherText(1);

const arme = new Arme();

const arc: AvecPuissance = {
  puissance: 10,
};

afficherPuissance(arme);
afficherPuissance(arc);
afficherPuissance({ puissance: 56 });

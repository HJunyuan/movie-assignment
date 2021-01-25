import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

jest.mock("../contexts/MovieContext", () => ({
	__esModule: true,
	MovieContext: React.createContext(),
}));

const movies = [
	{
		name: "Deadpool",
		productionYear: 2016,
		genre: "Action",
		synopsisShort:
			"A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
		synopsis:
			"Wade Wilson is a dishonorably discharged special forces operative working as a mercenary when he meets Vanessa, a prostitute. They become romantically involved, and a year later she accepts his marriage proposal. Wilson is diagnosed with terminal cancer, and leaves Vanessa without warning so she will not have to watch him die.<br /><br />A mysterious recruiter approaches Wilson, offering an experimental cure for his cancer. He is taken to Ajax and Angel Dust, who inject him with a serum designed to awaken latent mutant genes. They subject Wilson to days of torture to induce stress and trigger any mutation he may have, without success. When Wilson discovers Ajax's real name is Francis and mocks him for it, Ajax leaves Wilson in a hyperbaric chamber that periodically takes him to the verge of asphyxiation over a weekend. This finally activates a superhuman healing ability that cures the cancer but leaves Wilson severely disfigured with burn-like scars over his entire body. He escapes from the chamber and attacks Ajax but relents when told that his disfigurement can be cured. Ajax subdues Wilson and leaves him for dead in the now-burning laboratory.<br /><br />Wilson survives and seeks out Vanessa. He does not reveal to her he is alive fearing her reaction to his new appearance. After consulting with his best friend Weasel, Wilson decides to hunt down Ajax for the cure. He becomes a masked vigilante, adopting the name 'Deadpool' (from Weasel picking him in a dead pool), and moves into the home of an elderly blind woman named Al. He questions and murders many of Ajax's men until one, the recruiter, reveals his whereabouts. Deadpool intercepts Ajax and a convoy of armed men on an expressway. He kills everyone but Ajax, and demands the cure from him but the X-Man Colossus and his trainee Negasonic Teenage Warhead interrupt him. Colossus wants Deadpool to mend his ways and join the X-Men. Taking advantage of this distraction, Ajax escapes. He goes to Weasel's bar where he learns of Vanessa.<br /><br />Ajax kidnaps Vanessa and takes her to a decommissioned helicarrier in a scrapyard. Deadpool convinces Colossus and Negasonic to help him. They battle Angel Dust and several soldiers while Deadpool fights his way to Ajax. During the battle, Negasonic accidentally destroys the equipment stabilizing the helicarrier. Deadpool protects Vanessa from the collapsing ship, while Colossus carries Negasonic and Angel Dust to safety. Ajax attacks Deadpool again but is overpowered. He reveals there is no cure after all and, despite Colossus's pleading, Deadpool kills him. He promises to try to be more heroic moving forward. Though Vanessa is angry with Wilson for leaving her, she reconciles with him.",
		image: "movie1.jpg",
	},
	{
		name: "Barnyard",
		productionYear: 2006,
		genre: "Animation",
		synopsisShort:
			"When the farmer's away, all the animals play, and sing, and dance. Eventually, though, someone has to step in and run things, a responsibility that ends up going to Otis, a carefree cow.",
		synopsis:
			"Otis (Kevin James) is a carefree young cow who prefers playing with his friends rather than accept responsibility. His strict father Ben (Sam Elliott) is the leader of the barnyard. After Otis interrupts a barnyard meeting with his wild antics, Ben has a talk with his son, warning him that he will never be happy if he spends his life partying without acting more maturely. Otis ignores his advice and leaves to have fun with his friends Pip the Mouse (Jeff Garcia), Freddy the Ferret (Cam Clarke), Peck the Rooster (Rob Paulsen) and Pig the Pig (Tino Insana). That same day, Otis meets a pregnant cow named Daisy (Courtney Cox), who is accompanied by her friend, Bessy (Wanda Sykes).<br /><br />That night, the animals throw a party in the barn. All the animals at the barnyard are there except Ben, who guards the fence line. Otis is assigned a shift along with Ben, but Otis talks himself out of work. Before Otis leaves, Ben tells him that the night he found him as a baby calf stumbling alone in the meadow, he swore he saw the stars dance, thus giving him reason to know his place was at the farm. Later, Ben takes on a pack of coyotes led by Dag (David Koechner), plundering the chicken coop. He manages to fight off the pack until he is bitten on the leg by the red coyote, making him fall. The Coyotes pile on Ben, but he manages to grab Dag and escapes the pile. He threatens to punch Dag but lets him go, scaring away him and the coyotes. Ben falls on the ground, exhausted. Otis is alerted and he runs outside to his father, who dies in his arms. The next morning, Ben is buried on a hill by the farmer (Fred Tatasciore), and the other animals mourn Ben after the farmer leaves.<br /><br />After Ben's death, all the animals elect Otis as the new leader of the barnyard. Otis shirks his duties by leaving Freddy and Peck in charge of the coop, then helps the trouble-making 'Jersey Cows'; Eddy, Igg, and Bud (S. Scott Bullock, John DiMaggio, and Maurice LaMarche) teach a lesson to a mean, fat youngster called Snotty Boy (Steve Oedekerk) for cow-tipping, eluding the police along the way. Later that night, when Otis is holding Daisy's hoof under the starlight, he overhears the coyotes chasing a rabbit and leaves Daisy to pursue the coyotes and avenge his father. Otis tries to attack Dag and his pack but is outnumbered. Since Otis is weaker, Dag proposes a deal: he and his pack will take various barnyard animals at random times and that, if Otis tries to stand up to them, they will slaughter everyone at the barnyard. Otis decides to leave the barnyard, realizing that his chances of victory are slim.<br /><br />The next morning, before leaving, Otis is informed that the Coyotes took some hens including Maddy (Madeline Lovejoy), a little chick who is one of Otis' friends. Otis realizes that he has been fooled by Dag, as he was not expecting him and the coyotes until tonight, and sets off to rescue the chickens. Otis confronts the pack but is easily defeated after Dag bites him in the leg; however, Pip, Pig, Freddy, Peck, Miles (Danny Glover), Ben's old friend, and the Jersey Cows arrive to help Otis. Dag tries to attack Otis from behind, but Otis is alerted when Peck successfully manages to crow a warning. Otis catches Dag and warns him to never return to the barnyard. Otis then swings Dag out of the junkyard with a golf club, finally avenging his father's death.<br /><br />After hijacking a biker gang's motorcycles from the diner, Otis and the rest make it back to the barn to witness Daisy giving birth to a calf that she names Li'l Ben. Otis then takes full responsibility and becomes the new leader of the barnyard as he watches the stars of himself, Daisy and Lil' Ben dance just like Ben said. Mrs. Beady gets ready for bed, but she noticed that Wild Mike is on top of her head.",
		image: "movie2.jpg",
	},
];

describe("ensure title filter works", () => {
	test("title filter deadpool", async () => {
		const uniqueYears = new Set(movies.map((movie) => movie.productionYear));
		const sortedYears = Array.from(uniqueYears).sort();

		const uniqueGenres = new Set(movies.map((movie) => movie.genre));
		const sortedGenres = Array.from(uniqueGenres).sort();

		const { findByText } = render(
			<MovieContext.Provider
				value={{
					isReady: true,
					movies,
					years: sortedYears,
					genres: sortedGenres,
				}}
			>
				<App />
			</MovieContext.Provider>
		);

		expect(findByText("Deadpool")).toBeInTheDocument();
	});
});

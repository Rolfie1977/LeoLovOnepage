// src/sections/Home.jsx
import React from "react";
import styles from "./Home.module.scss";

function Home({ title, description }) {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<a href="#hjem">Hjem</a>
						</li>{" "}
						|
						<li>
							<a href="#advokaterne">Advokaterne</a>
						</li>
						|
						<li>
							<a href="#om">Om LeoLov</a>
						</li>
						|
						<li>
							<a href="#kontakt">Kontakt</a>
						</li>
					</ul>
				</nav>
				<div class="logo jura">
					<span class="leo">Leo</span>
					<span class="lov">-Lov</span>
				</div>
			</header>
			<main id="hjem">
				<div class="mainlogo logo jura">
					<span class="leo">Leo</span>
					<span class="lov">-Lov</span>
					<span class="subText">
						Lov og ret kan være et plaster! Hvis du ellers har knaster!
					</span>
				</div>

				<div class="card-holder">
					<div class="card">
						<h1 class="jura">Familieret</h1>
						<span class="inter">
							Familieret er en ret alle har. Har du en familie har du sikkert
							ret til familieret. Medmindre du altid er den der tror du har ret.
							Så kan vi desværre ikke hjælpe dig.
						</span>
					</div>
					<div class="card">
						<h1 class="jura">Ejendomsret</h1>
						<span class="inter">
							Har du købt et hus og fortrudt eller er du blevet svindlet?
							Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller
							eventuelt sagsøge vedkommende der solgte dig det.
						</span>
					</div>
					<div class="card">
						<h1 class="jura">Konkurs</h1>
						<span class="inter">
							Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi
							desværre ikke. Vi er alle advokater med fede biler her så har du
							ingen penge får du ingen hjælp
						</span>
					</div>
					<div class="card">
						<h1 class="jura">Selvskabsret</h1>
						<span class="inter">
							Selskabsret. Ved du heller aldrig hvilken ret du skal servere til
							et stort selskab? Heller ikke os. Heldigvis har vi en mand i
							udlandet der ved en masse om dette så henvend dig i dag.
						</span>
					</div>
				</div>
			</main>
			<div class="bokse">
				<img
					src="https://images.unsplash.com/photo-1616645004064-aebe96923cbb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="ur"
				/>
				<div class="infobox">
					<h2> INTET PROBLEM </h2>
					<span>
						{" "}
						Leo-lov har altid været det bedste advokatfirma i verden. Der er
						simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer
						så længe du har penge. Hvis du mod alt forventning skulle oplevel at
						støde på et retsligt problem som leo-lov ikke kan løse får du
						halvdelen af beløbet igen. Det er sådan vi har skabt en forretning
						der ikke kan andet end at vokse!{" "}
					</span>
				</div>
			</div>

			<div class="bokse">
				<div class="infobox">
					<h2> EVIG GARANTI </h2>
					<span>
						Leo-lov har altid været det bedste advokatfirma i verden. Der er
						simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer
						så længe du har penge. Hvis du mod alt forventning skulle oplevel at
						støde på et retsligt problem som leo-lov ikke kan løse får du
						halvdelen af beløbet igen. Det er sådan vi har skabt en forretning
						der ikke kan andet end at vokse
					</span>
				</div>
				<img
					src="https://images.unsplash.com/photo-1500731250117-4b0cbb8b276a?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="house"
				/>
			</div>

			<h2 class="jura headerteam">MØD HOLDET</h2>

			<div class="meetTheTeam" id="advokaterne">
				<div class="worker">
					<img class="workerImage" src="https://picsum.photos/200" alt="" />
					<h1 class="inter">John Harbinger</h1>
					<span class="inter">
						”Jeg er den mest successfulde advokat i firmaet. I hvert fald mere
						end Peter.”
					</span>
				</div>

				<div class="worker">
					<img class="workerImage" src="https://picsum.photos/200" alt="" />
					<h1 class="inter">Peter Parker</h1>
					<span class="inter">
						“Jeg holder af kaffe og så er jeg helt enormt succesfuld. Meget mere
						end John”
					</span>
				</div>

				<div class="worker">
					<img class="workerImage" src="https://picsum.photos/200" alt="" />
					<h1 class="inter">Elise Li</h1>
					<span class="inter">
						“Uden ret og lov, kunne vi ligeså godt bo i en skov. Sådan har jeg
						altid sagt.”
					</span>
				</div>

				<div class="worker">
					<img class="workerImage" src="https://picsum.photos/200" alt="" />
					<h1 class="inter">Morten Nate</h1>
					<span class="inter">
						“Jeg er født på landet. På landet er der ingen ret og lov. Det er
						det vilde vest derude.”
					</span>
				</div>
			</div>

			<div class="bokse" id="om">
				<div id="maps"></div>

				<div class="infobox">
					<h2> INTET PROBLEM </h2>
					<span>
						{" "}
						Leo-lov har altid været det bedste advokatfirma i verden. Der er
						simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer
						så længe du har penge. Hvis du mod alt forventning skulle oplevel at
						støde på et retsligt problem som leo-lov ikke kan løse får du
						halvdelen af beløbet igen. Det er sådan vi har skabt en forretning
						der ikke kan andet end at vokse!{" "}
					</span>
				</div>
			</div>
		</>
	);
}

export default Home;

'use strict';

document.body.style.backgroundColor = "#AA0054";


{
	const gameTitles = [
		'stardew_valley',
		'overwatch',
		'lineage',
		'counter_strike',
		'wow',
		'house_of_the_dead'
	];

	let objGames = {
		'stardew_valley': {
			properties: {
				year: '2016',
				company: 'ConcernedApe',
				type: 'role play',
				image: 'stardewvalley.jpg'
			},
		},
		'overwatch': {
			properties: {
				year: '2016',
				company: 'blizzard',
				type: 'shooter',
				image: 'overwatch.png'
			},
		},
		'lineage': {
			properties: {
				year: '2003',
				company: 'NCSOFT',
				type: 'MMORPG',
				image: 'lineage.png'
			},
		},
		'counter_strike': {
			properties: {
				year: '2000',
				company: 'namco',
				type: 'shooter',
				image: 'counterstrike.jpg'
			},
		},
		'wow': {
			properties: {
				year: '2004',
				company: "blizzard",
				type: 'role play',
				image: 'wow.jpg'
			},
		},
		'house_of_the_dead': {
			properties: {
				year: '1996',
				company: 'sega',
				type: 'light gun shooter',
				image: 'hotd.jpg'
			}
		}
	}



	function listGamesOld() {


		let ul = document.createElement('ul')
		for (let i = 0; i < gameTitles.length; i++) {
			let li = document.createElement('li');
			li.textContent = gameTitles[i];
			console.log()
			ul.appendChild(li);

		}

		document.body.appendChild(ul);

	}
	document.body.onload = listGames;




	function listGames() {

		let i = 0;
		let ul = document.createElement('ul')
		let gameTitles = Object.keys(objGames);
		let numberOfGames = gameTitles.length;
		for (i = 0; i < numberOfGames; i++) {
			console.log(gameTitles[i]);
			console.log(objGames[gameTitles[i]]);
			let li = document.createElement('li');
			li.innerHTML = `<h2>${gameTitles[i]}</h2>`
			li.innerHTML += `<li> Year: ${objGames[gameTitles[i]].properties.year} </li>`
			li.innerHTML += `<li> Type: ${objGames[gameTitles[i]].properties.type} </li>`
			li.innerHTML += `<li> Company: ${objGames[gameTitles[i]].properties.company} </li>`
			let cover = document.createElement("img");
			cover.src = objGames[gameTitles[i]].image;
			li.innerHTML += `<img> ${document.getElementById("albumCovers").appendChild(cover)}`;


			ul.appendChild(li);

		}

		document.body.appendChild(ul);

	}

}

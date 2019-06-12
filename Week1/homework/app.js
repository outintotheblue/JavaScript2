'use strict';

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
		"stardew_valley":
		{
			year: '2016',
			company: 'ConcernedApe',
			type: 'role play'
		},
		"overwatch":
		{
			year: '2016',
			company: 'blizzard',
			type: 'shooter'
		},
		'lineage':
		{
			year: '2003',
			company: 'NCSOFT',
			type: 'MMORPG'
		},
		'counter_strike':
		{
			year: '2000',
			company: 'namco',
			type: 'shooter'
		},
		'wow': {
			year: '2004',
			company: "blizzard",
			type: 'role play'
		},
		'house_of_the_dead': {
			year: '1996',
			company: 'sega',
			type: 'light gun shooter'
		}
	}



	function listGames() {

		let i = 0;
		let ul = document.createElement('ul')
		for (i = 0; i < gameTitles.length; i++) {
			let li = document.createElement('li');
			li.textContent = gameTitles[i];
			ul.appendChild(li);

		}

		document.body.appendChild(ul);

	}
	document.body.onload = listGames;
}

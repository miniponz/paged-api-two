import './html-equal.js';
import './hash-query.tests.js';

const test = QUnit.test;

import makeSetlistTemplate from '../src/make-header-template.js';

QUnit.module('template test: is BROKEN');
test('template recreates hard coded HTML header for each set when passed setlist result from API', assert => {
    //arrange
    const data = {
        'type': 'setlists',
        'itemsPerPage': 20,
        'page': 1,
        'total': 9,
        'setlist': [
            {
                'eventDate': '18-10-2014',
                'artist': {
                    'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                    'tmid': 748766,
                    'name': 'Phish',
                    'sortName': 'Phish',
                    'disambiguation': '',
                    'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
                },
                'venue': {
                    'id': '7bd6d6f0',
                    'name': 'KeyArena',
                    'url': 'https://www.setlist.fm/venue/keyarena-seattle-wa-usa-7bd6d6f0.html'
                },
                'tour': {
                    'name': 'Fall Tour 2014'
                },
                'sets': {
                    'set': [
                        {
                            'name': 'Set 1:',
                            'song': [
                                {
                                    'name': 'Cavern'
                                },
                                {
                                    'name': 'Wilson'
                                },
                                {
                                    'name': 'Rift'
                                },
                                {
                                    'name': 'The Moma Dance'
                                },
                                {
                                    'name': 'The Line'
                                },
                                {
                                    'name': 'Sugar Shack'
                                },
                                {
                                    'name': 'Lawn Boy'
                                },
                                {
                                    'name': 'Kill Devil Falls'
                                },
                                {
                                    'name': 'Wolfman\'s Brother'
                                },
                                {
                                    'name': 'Sparkle'
                                },
                                {
                                    'name': 'Bathtub Gin'
                                }
                            ]
                        },
                        {
                            'name': 'Set 2:',
                            'song': [
                                {
                                    'name': 'Down With Disease'
                                },
                                {
                                    'name': 'Golden Age',
                                    'cover': {
                                        'mbid': 'eb872766-98f6-453d-883f-2ae908a18315',
                                        'tmid': 904793,
                                        'name': 'TV on the Radio',
                                        'sortName': 'TV on the Radio',
                                        'disambiguation': '',
                                        'url': 'https://www.setlist.fm/setlists/tv-on-the-radio-4bd6ab1e.html'
                                    }
                                },
                                {
                                    'name': 'Fuego'
                                },
                                {
                                    'name': 'Light'
                                },
                                {
                                    'name': 'Cities',
                                    'cover': {
                                        'mbid': 'a94a7155-c79d-4409-9fcf-220cb0e4dc3a',
                                        'tmid': 859981,
                                        'name': 'Talking Heads',
                                        'sortName': 'Talking Heads',
                                        'disambiguation': '',
                                        'url': 'https://www.setlist.fm/setlists/talking-heads-3bd6b808.html'
                                    }
                                },
                                {
                                    'name': '46 Days'
                                },
                                {
                                    'name': 'Sand'
                                },
                                {
                                    'name': 'Backwards Down the Number Line'
                                },
                                {
                                    'name': 'Bold as Love',
                                    'cover': {
                                        'mbid': '33b3c323-77c2-417c-a5b4-af7e6a111cc9',
                                        'tmid': 769346,
                                        'name': 'The Jimi Hendrix Experience',
                                        'sortName': 'Hendrix, Jimi, The, Experience',
                                        'disambiguation': '',
                                        'url': 'https://www.setlist.fm/setlists/the-jimi-hendrix-experience-3d6ad57.html'
                                    }
                                }
                            ]
                        },
                        {
                            'encore': 1,
                            'name': 'Set 2:',
                            'song': [
                                {
                                    'name': 'Meatstick'
                                },
                                {
                                    'name': 'Character Zero'
                                }
                            ]
                        }
                    ]
                },
                'url': 'https://www.setlist.fm/setlist/phish/2014/keyarena-seattle-wa-7bcceecc.html'
            }
        ]
    };


    //act
    const result = makeSetlistTemplate(data);

    //assert
    assert.htmlEqual(result, /*html*/ `         
    <li id="31-12-2018" class="show">
    <section class="show-info">
        <h3>Madison Square Garden</h3>
        <p>Date: <span>31-12-2018</span></p>
        <p>Tour: <span>New Year's Run 2018</span></p>
        <p> <a href="https://www.setlist.fm/setlist/phish/2018/madison-square-garden-new-york-ny-4b943b7a.html">Setlist.fm</a></p>
    </section>
    <section class="sets">
    
            <ul class="set-detail">
                <p class="set-number">Set 1:</p>
                
                        <li>The Moma Dance</li>
                    
                        <li>Stray Dog</li>
                    
                        <li>555</li>
                    
                        <li>Sand</li>
                    
                        <li>Lawn Boy</li>
                    
                        <li>Steam</li>
                    
                        <li>Chalk Dust Torture</li>
                    
                        <li>What's the Use?</li>
                    
                        <li>Play by Play</li>
                    
                        <li>Waste</li>
                    
                        <li>Ass Handed</li>
                    
                        <li>Run Like an Antelope</li>
                    
            </ul>
        
            <ul class="set-detail">
                <p class="set-number">Set 2:</p>
                
                        <li>Down With Disease</li>
                    
                        <li>Farmhouse</li>
                    
                        <li>Seven Below</li>
                    
                        <li>Twist</li>
                    
                        <li>Harry Hood</li>
                    
                        <li>Passing Through</li>
                    
            </ul>
        
            <ul class="set-detail">
                <p class="set-number">Set 3:</p>
                
                        <li>Mercury</li>
                    
                        <li>Auld lang syne</li>
                    
                        <li>Say It to Me S.A.N.T.O.S.</li>
                    
                        <li>Simple</li>
                    
                        <li>Saw It Again</li>
                    
                        <li>Limb by Limb</li>
                    
                        <li>Rock &amp; Roll</li>
                    
                        <li>Suzy Greenberg</li>
                    
            </ul>
        
            <ul class="set-detail">
                <p class="set-number">Set 3:</p>
                
                        <li>The Lizards</li>
                    
                        <li>Character Zero</li>
                    
            </ul>
        
    </section>
</li>
`);
});

// function makeSetlistTemplateList(setlists, date) {
//     const show = document.getElementById(date);
//     const sets = setlists.setlist[0].sets;
//     console.log(sets);
//     const songlist = sets.set[0].song;
//     console.log(songlist);
//     sets.forEach(set => {
 
//         show.appendChild(p);
//         const p = document.createElement('p');
//         p.textContent = set.name;
        
//         show.appendChild(ul);
//         const ul = document.createElement('ul');
//         songlist.forEach(song => {
//             const li = document.createElement('li');
//             ul.appendChild(li);
//             li.textContent = song.name;
//         });
//     });
// }


// test('function returns HTML for each set in setlist', assert => {
//     //arrange
//     const setlists = {
//         'type': 'setlists',
//         'itemsPerPage': 20,
//         'page': 1,
//         'total': 9,
//         'setlist': [
//             {
//                 'eventDate': '18-10-2014',
//                 'artist': {
//                     'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
//                     'tmid': 748766,
//                     'name': 'Phish',
//                     'sortName': 'Phish',
//                     'disambiguation': '',
//                     'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
//                 },
//                 'venue': {
//                     'id': '7bd6d6f0',
//                     'name': 'KeyArena',
//                     'url': 'https://www.setlist.fm/venue/keyarena-seattle-wa-usa-7bd6d6f0.html'
//                 },
//                 'tour': {
//                     'name': 'Fall Tour 2014'
//                 },
//                 'sets': {
//                     'set': [
//                         {
//                             'name': 'Set 1:',
//                             'song': [
//                                 {
//                                     'name': 'Cavern'
//                                 },
//                                 {
//                                     'name': 'Wilson'
//                                 },
//                                 {
//                                     'name': 'Rift'
//                                 },
//                                 {
//                                     'name': 'The Moma Dance'
//                                 },
//                                 {
//                                     'name': 'The Line'
//                                 },
//                                 {
//                                     'name': 'Sugar Shack'
//                                 },
//                                 {
//                                     'name': 'Lawn Boy'
//                                 },
//                                 {
//                                     'name': 'Kill Devil Falls'
//                                 },
//                                 {
//                                     'name': 'Wolfman\'s Brother'
//                                 },
//                                 {
//                                     'name': 'Sparkle'
//                                 },
//                                 {
//                                     'name': 'Bathtub Gin'
//                                 }
//                             ]
//                         },
//                         {
//                             'name': 'Set 2:',
//                             'song': [
//                                 {
//                                     'name': 'Down With Disease'
//                                 },
//                                 {
//                                     'name': 'Golden Age',
//                                     'cover': {
//                                         'mbid': 'eb872766-98f6-453d-883f-2ae908a18315',
//                                         'tmid': 904793,
//                                         'name': 'TV on the Radio',
//                                         'sortName': 'TV on the Radio',
//                                         'disambiguation': '',
//                                         'url': 'https://www.setlist.fm/setlists/tv-on-the-radio-4bd6ab1e.html'
//                                     }
//                                 },
//                                 {
//                                     'name': 'Fuego'
//                                 },
//                                 {
//                                     'name': 'Light'
//                                 },
//                                 {
//                                     'name': 'Cities',
//                                     'cover': {
//                                         'mbid': 'a94a7155-c79d-4409-9fcf-220cb0e4dc3a',
//                                         'tmid': 859981,
//                                         'name': 'Talking Heads',
//                                         'sortName': 'Talking Heads',
//                                         'disambiguation': '',
//                                         'url': 'https://www.setlist.fm/setlists/talking-heads-3bd6b808.html'
//                                     }
//                                 },
//                                 {
//                                     'name': '46 Days'
//                                 },
//                                 {
//                                     'name': 'Sand'
//                                 },
//                                 {
//                                     'name': 'Backwards Down the Number Line'
//                                 },
//                                 {
//                                     'name': 'Bold as Love',
//                                     'cover': {
//                                         'mbid': '33b3c323-77c2-417c-a5b4-af7e6a111cc9',
//                                         'tmid': 769346,
//                                         'name': 'The Jimi Hendrix Experience',
//                                         'sortName': 'Hendrix, Jimi, The, Experience',
//                                         'disambiguation': '',
//                                         'url': 'https://www.setlist.fm/setlists/the-jimi-hendrix-experience-3d6ad57.html'
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             'encore': 1,
//                             'name': 'Set 2:',
//                             'song': [
//                                 {
//                                     'name': 'Meatstick'
//                                 },
//                                 {
//                                     'name': 'Character Zero'
//                                 }
//                             ]
//                         }
//                     ]
//                 },
//                 'url': 'https://www.setlist.fm/setlist/phish/2014/keyarena-seattle-wa-7bcceecc.html'
//             }
//         ]
//     };
    
//     const date = setlists.setlist[0].date;
//     //act
//     const result = makeSetlistTemplateList(setlists, date);
//     //assert
//     assert.htmlEqual(result, /*html*/`
//     <p class="set-heading">Set 1:</p>
//     <ul>
//       <li>Cavern</li>
//       <li>Wilson</li>
//       <li>Rift</li>
//       <li>The Moma Dance</li>
//       <li>The Line</li>
//       <li>Sugar Shack</li>
//       <li>Lawn Boy</li>
//       <li>Kill Devil Falls</li>
//       <li>Wolfman's Brother</li>
//       <li>Sparkle</li>
//       <li>Bathtub Gin</li>
//     </ul>
//     <p class="set-heading">Set 2:</p>
//     <ul>
//       <li>Down With Disease</li>
//       <li>Golden Age</li>
//       <li>Fuego</li>
//       <li>Light</li>
//       <li>Cities</li>
//       <li>46 Days</li>
//       <li>Sand</li>
//       <li>Backwards Down the Number Line</li>
//       <li>Bold as Love</li>
//     </ul>
//     <p class="set-heading">Set 2:</p>
//     <ul>
//         <li>Meatstick</li>
//         <li>Character Zero</li>
//     </ul>`);

// });

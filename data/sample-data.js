// https://api.setlist.fm/rest/1.0/search/setlists?artistName=phish&cityName=seattle&p=1

const data = { 'type': 'setlists',
    'itemsPerPage': 20,
    'page': 1,
    'total': 60,
    'setlist': [
        {
            'id': '4b943b7a',
            'versionId': '7b692640',
            'eventDate': '31-12-2018',
            'lastUpdated': '2019-01-28T03:52:45.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'New Year\'s Run 2018'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'The Moma Dance'
                            },
                            {
                                'name': 'Stray Dog'
                            },
                            {
                                'name': '555'
                            },
                            {
                                'name': 'Sand'
                            },
                            {
                                'name': 'Lawn Boy'
                            },
                            {
                                'name': 'Steam',
                                'info': '>'
                            },
                            {
                                'name': 'Chalk Dust Torture',
                                'info': '>'
                            },
                            {
                                'name': 'What\'s the Use?',
                                'info': '>'
                            },
                            {
                                'name': 'Play by Play'
                            },
                            {
                                'name': 'Waste'
                            },
                            {
                                'name': 'Ass Handed'
                            },
                            {
                                'name': 'Run Like an Antelope'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Down With Disease',
                                'info': 'unfinished) (>'
                            },
                            {
                                'name': 'Farmhouse',
                                'info': '>'
                            },
                            {
                                'name': 'Seven Below',
                                'info': '>'
                            },
                            {
                                'name': 'Twist',
                                'info': '>'
                            },
                            {
                                'name': 'Harry Hood',
                                'info': '>'
                            },
                            {
                                'name': 'Passing Through',
                                'info': 'followed by \'Harry Hood\' reprise'
                            }
                        ]
                    },
                    {
                        'name': 'Set 3:',
                        'song': [
                            {
                                'name': 'Mercury',
                                'info': 'unfinished) (>'
                            },
                            {
                                'name': 'Auld lang syne',
                                'cover': {
                                    'mbid': '56e7d9b7-174b-4e29-a50d-f164030d197f',
                                    'name': 'Robert Burns',
                                    'sortName': 'Burns, Robert',
                                    'disambiguation': '18th century Scots poet/lyricist',
                                    'url': 'https://www.setlist.fm/setlists/robert-burns-4bd23756.html'
                                }
                            },
                            {
                                'name': 'Say It to Me S.A.N.T.O.S.'
                            },
                            {
                                'name': 'Simple'
                            },
                            {
                                'name': 'Saw It Again',
                                'info': '>'
                            },
                            {
                                'name': 'Limb by Limb',
                                'info': '>'
                            },
                            {
                                'name': 'Rock & Roll',
                                'cover': {
                                    'mbid': '94b0fb9d-a066-4823-b2ec-af1d324bcfcf',
                                    'tmid': 735957,
                                    'name': 'The Velvet Underground',
                                    'sortName': 'Velvet Underground, The',
                                    'disambiguation': 'Lou Reed’s seminal rock band',
                                    'url': 'https://www.setlist.fm/setlists/the-velvet-underground-3bd6a894.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Suzy Greenberg'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 3:',
                        'song': [
                            {
                                'name': 'The Lizards'
                            },
                            {
                                'name': 'Character Zero'
                            }
                        ]
                    }
                ]
            },
            'url': 'https://www.setlist.fm/setlist/phish/2018/madison-square-garden-new-york-ny-4b943b7a.html'
        },
        {
            'id': '1b943db8',
            'versionId': '3b6b507c',
            'eventDate': '30-12-2018',
            'lastUpdated': '2019-01-05T05:18:11.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'New Year\'s Run 2018'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Alumni Blues',
                                'info': '>'
                            },
                            {
                                'name': 'Letter to Jimmy Page',
                                'info': '> \'Alumni Blues\' reprise'
                            },
                            {
                                'name': 'Mike\'s Song',
                                'info': '>'
                            },
                            {
                                'name': 'Glide II',
                                'info': 'first since 1995'
                            },
                            {
                                'name': 'Weekapaug Groove',
                                'info': '>'
                            },
                            {
                                'name': 'Crosseyed and Painless',
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
                                'name': 'Bliss',
                                'info': 'Trey on acoustic guitar; live debut) (>'
                            },
                            {
                                'name': 'Billy Breathes'
                            },
                            {
                                'name': 'No Men in No Man\'s Land',
                                'info': 'with \'Crosseyed and Painless\' teases) (>'
                            },
                            {
                                'name': 'Tube',
                                'info': '> \'Weekapaug Groove\' reprise >’Once In A Lifetime’ quote by Trey> \'Tube\' reprise >'
                            },
                            {
                                'name': 'More'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Cool Amber and Mercury',
                                'info': 'with \'The Final Hurrah\' quotes'
                            },
                            {
                                'name': 'Everything\'s Right',
                                'cover': {
                                    'mbid': '822b1e81-d1a0-47fb-b7f9-ef614b913603',
                                    'tmid': 767185,
                                    'name': 'Trey Anastasio Band',
                                    'sortName': 'Trey Anastasio Band',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/trey-anastasio-band-53d6d729.html'
                                },
                                'info': 'with \'Crosseyed and Painless\' reprise'
                            },
                            {
                                'name': 'Plasma',
                                'cover': {
                                    'mbid': 'd942f71b-09d3-406c-8f7d-c52eba3135c1',
                                    'tmid': 767185,
                                    'name': 'Trey Anastasio',
                                    'sortName': 'Anastasio, Trey',
                                    'disambiguation': 'US jam band Phish lead singer',
                                    'url': 'https://www.setlist.fm/setlists/trey-anastasio-bd6adfa.html'
                                }
                            },
                            {
                                'name': 'Light'
                            },
                            {
                                'name': 'Wading in the Velvet Sea'
                            },
                            {
                                'name': 'Split Open and Melt'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Funky Bitch',
                                'cover': {
                                    'mbid': 'd2728d68-26f6-42b6-a490-ddae85b65d6d',
                                    'name': 'Son Seals',
                                    'sortName': 'Seals, Son',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/son-seals-3bd61020.html'
                                }
                            },
                            {
                                'name': 'Wilson'
                            },
                            {
                                'name': 'Rocky Top',
                                'cover': {
                                    'mbid': 'bc8f68a3-9f43-491f-93a0-b8c19d801a27',
                                    'name': 'The Osborne Brothers',
                                    'sortName': 'Osborne Brothers, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-osborne-brothers-63d6aa0f.html'
                                }
                            },
                            {
                                'name': 'Cavern',
                                'info': 'with \'The Final Hurrah\' quotes'
                            }
                        ]
                    }
                ]
            },
            'url': 'https://www.setlist.fm/setlist/phish/2018/madison-square-garden-new-york-ny-1b943db8.html'
        },
        {
            'id': '2b94c402',
            'versionId': '1b6b354c',
            'eventDate': '29-12-2018',
            'lastUpdated': '2018-12-30T15:58:10.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'New Year\'s Run 2018'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Buried Alive'
                            },
                            {
                                'name': 'Blaze On'
                            },
                            {
                                'name': 'Turtle in the Clouds'
                            },
                            {
                                'name': 'The Sloth'
                            },
                            {
                                'name': '46 Days',
                                'info': '>'
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
                                'name': 'Corinna',
                                'cover': {
                                    'mbid': '4f48167c-29b8-4bde-a749-6803ce0a3922',
                                    'tmid': 731850,
                                    'name': 'Taj Mahal',
                                    'sortName': 'Mahal, Taj',
                                    'disambiguation': 'US blues musician',
                                    'url': 'https://www.setlist.fm/setlists/taj-mahal-3d6959b.html'
                                }
                            },
                            {
                                'name': 'Ya Mar',
                                'cover': {
                                    'mbid': '11ebdf8f-b3ec-47a7-8e9f-c340b64ba762',
                                    'name': 'Cyril Ferguson',
                                    'sortName': 'Ferguson, Cyril',
                                    'url': 'https://www.setlist.fm/setlists/cyril-ferguson-6bd61eba.html'
                                }
                            },
                            {
                                'name': 'Wolfman\'s Brother',
                                'info': 'with \'Party Time\' quotes'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Carini',
                                'info': '>'
                            },
                            {
                                'name': 'Tweezer',
                                'info': '>'
                            },
                            {
                                'name': 'Death Don\'t Hurt Very Long',
                                'info': '> \'Tweezer\' reprise (jam) >'
                            },
                            {
                                'name': 'No Quarter',
                                'cover': {
                                    'mbid': '678d88b2-87b0-403b-b63d-5da7465aecc3',
                                    'tmid': 915807,
                                    'name': 'Led Zeppelin',
                                    'sortName': 'Led Zeppelin',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/led-zeppelin-13d6b509.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Also sprach Zarathustra, Op. 30',
                                'cover': {
                                    'mbid': '4cb43d82-824e-4034-b03d-1a98f36f6e16',
                                    'name': 'Richard Strauss',
                                    'sortName': 'Strauss, Richard',
                                    'disambiguation': 'German composer',
                                    'url': 'https://www.setlist.fm/setlists/richard-strauss-3d4ddcb.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'First Tube'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Shine a Light',
                                'cover': {
                                    'mbid': 'b071f9fa-14b0-4217-8e97-eb41da73f598',
                                    'tmid': 806216,
                                    'name': 'The Rolling Stones',
                                    'sortName': 'Rolling Stones, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-rolling-stones-bd6ad22.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Tweezer Reprise',
                                'info': 'with \'Death Don\'t Hurt Very Long\' quote'
                            }
                        ]
                    }
                ]
            },
            'url': 'https://www.setlist.fm/setlist/phish/2018/madison-square-garden-new-york-ny-2b94c402.html'
        },
        {
            'id': '4394cf37',
            'versionId': '136bc9e9',
            'eventDate': '28-12-2018',
            'lastUpdated': '2018-12-29T20:34:32.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'New Year\'s Run 2018'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'We Are Come to Outlive Our Brains'
                            },
                            {
                                'name': 'Martian Monster'
                            },
                            {
                                'name': 'Axilla',
                                'info': '>'
                            },
                            {
                                'name': 'Free'
                            },
                            {
                                'name': 'The Wedge'
                            },
                            {
                                'name': 'Meat'
                            },
                            {
                                'name': 'Ghost',
                                'info': '>'
                            },
                            {
                                'name': 'Sparkle'
                            },
                            {
                                'name': 'If I Could'
                            },
                            {
                                'name': 'Maze'
                            },
                            {
                                'name': 'Walls of the Cave'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Set Your Soul Free',
                                'cover': {
                                    'mbid': 'd942f71b-09d3-406c-8f7d-c52eba3135c1',
                                    'tmid': 767185,
                                    'name': 'Trey Anastasio',
                                    'sortName': 'Anastasio, Trey',
                                    'disambiguation': 'US jam band Phish lead singer',
                                    'url': 'https://www.setlist.fm/setlists/trey-anastasio-bd6adfa.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Swept Away',
                                'info': '>'
                            },
                            {
                                'name': 'Steep'
                            },
                            {
                                'name': 'The Final Hurrah'
                            },
                            {
                                'name': 'Fuego',
                                'info': '>'
                            },
                            {
                                'name': 'Shade',
                                'info': '>'
                            },
                            {
                                'name': 'Bathtub Gin',
                                'info': 'with \'The Little Drummer Boy\' tease by Trey) (>'
                            },
                            {
                                'name': 'Possum'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Bouncing Around the Room'
                            },
                            {
                                'name': 'Slave to the Traffic Light'
                            }
                        ]
                    }
                ]
            },
            'url': 'https://www.setlist.fm/setlist/phish/2018/madison-square-garden-new-york-ny-4394cf37.html'
        },
        {
            'id': '4be1d316',
            'versionId': '436deb03',
            'eventDate': '31-12-2017',
            'lastUpdated': '2018-12-03T12:44:30.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'New Year\'s Run 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Carini',
                                'info': '>'
                            },
                            {
                                'name': 'Suzy Greenberg'
                            },
                            {
                                'name': 'My Friend, My Friend'
                            },
                            {
                                'name': 'Fluffhead'
                            },
                            {
                                'name': 'Reba',
                                'info': '>'
                            },
                            {
                                'name': 'Poor Heart',
                                'info': '>'
                            },
                            {
                                'name': '46 Days',
                                'info': '>'
                            },
                            {
                                'name': 'Maze',
                                'info': '>'
                            },
                            {
                                'name': 'Character Zero'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Possum',
                                'info': '>'
                            },
                            {
                                'name': 'Fuego',
                                'info': '>'
                            },
                            {
                                'name': 'Gotta Jibboo'
                            },
                            {
                                'name': 'Golgi Apparatus',
                                'info': '>'
                            },
                            {
                                'name': 'What\'s the Use?',
                                'info': '>'
                            },
                            {
                                'name': 'You Enjoy Myself'
                            }
                        ]
                    },
                    {
                        'name': 'Set 3:',
                        'song': [
                            {
                                'name': 'Soul Planet',
                                'cover': {
                                    'mbid': 'd942f71b-09d3-406c-8f7d-c52eba3135c1',
                                    'tmid': 767185,
                                    'name': 'Trey Anastasio',
                                    'sortName': 'Anastasio, Trey',
                                    'disambiguation': 'US jam band Phish lead singer',
                                    'url': 'https://www.setlist.fm/setlists/trey-anastasio-bd6adfa.html'
                                },
                                'info': 'live debut by Phish) (>'
                            },
                            {
                                'name': 'Auld lang syne',
                                'cover': {
                                    'mbid': '56e7d9b7-174b-4e29-a50d-f164030d197f',
                                    'name': 'Robert Burns',
                                    'sortName': 'Burns, Robert',
                                    'disambiguation': '18th century Scots poet/lyricist',
                                    'url': 'https://www.setlist.fm/setlists/robert-burns-4bd23756.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Free'
                            },
                            {
                                'name': 'A Song I Heard the Ocean Sing',
                                'info': '>'
                            },
                            {
                                'name': 'The Moma Dance',
                                'info': '>'
                            },
                            {
                                'name': 'Prince Caspian',
                                'info': '>'
                            },
                            {
                                'name': 'Wading in the Velvet Sea'
                            },
                            {
                                'name': 'First Tube'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 3:',
                        'song': [
                            {
                                'name': 'Loving Cup',
                                'cover': {
                                    'mbid': 'b071f9fa-14b0-4217-8e97-eb41da73f598',
                                    'tmid': 806216,
                                    'name': 'The Rolling Stones',
                                    'sortName': 'Rolling Stones, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-rolling-stones-bd6ad22.html'
                                }
                            }
                        ]
                    }
                ]
            },
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-4be1d316.html'
        },
        {
            'id': '6be1da76',
            'versionId': '334bf0f1',
            'eventDate': '30-12-2017',
            'lastUpdated': '2017-12-31T05:02:23.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'New Year\'s Run 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Mike\'s Song',
                                'info': '>'
                            },
                            {
                                'name': 'I Am Hydrogen',
                                'info': '>'
                            },
                            {
                                'name': 'Weekapaug Groove'
                            },
                            {
                                'name': 'Tweezer',
                                'info': '>'
                            },
                            {
                                'name': 'Ass Handed'
                            },
                            {
                                'name': 'Kill Devil Falls',
                                'info': '>'
                            },
                            {
                                'name': 'Bathtub Gin'
                            },
                            {
                                'name': 'Brother',
                                'info': 'first since 17 June 2012'
                            },
                            {
                                'name': 'More'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Down With Disease',
                                'info': 'unfinished) (>'
                            },
                            {
                                'name': 'Steam',
                                'info': '> Marimba Lumina jam >'
                            },
                            {
                                'name': 'Light',
                                'info': '>'
                            },
                            {
                                'name': 'Farmhouse',
                                'info': 'with \'No Woman, No Cry\' tease'
                            },
                            {
                                'name': 'Run Like an Antelope'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Sleeping Monkey'
                            },
                            {
                                'name': 'Tweezer Reprise'
                            }
                        ]
                    }
                ]
            },
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-6be1da76.html'
        },
        {
            'id': '43e1df1b',
            'versionId': '34b816b',
            'eventDate': '29-12-2017',
            'lastUpdated': '2017-12-30T04:34:34.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'New Year\'s Run 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Cavern',
                                'info': '>'
                            },
                            {
                                'name': 'Blaze On'
                            },
                            {
                                'name': '555'
                            },
                            {
                                'name': 'I Always Wanted It This Way',
                                'info': '>'
                            },
                            {
                                'name': 'Martian Monster'
                            },
                            {
                                'name': 'Heavy Things'
                            },
                            {
                                'name': 'Destiny Unbound'
                            },
                            {
                                'name': 'Ocelot'
                            },
                            {
                                'name': 'Walls of the Cave'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Sand',
                                'info': '>'
                            },
                            {
                                'name': 'Chalk Dust Torture',
                                'info': 'unfinished) (>'
                            },
                            {
                                'name': 'Ghost',
                                'info': '>'
                            },
                            {
                                'name': 'Backwards Down the Number Line',
                                'info': '>'
                            },
                            {
                                'name': 'Simple',
                                'info': '>'
                            },
                            {
                                'name': 'Split Open and Melt'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Julius'
                            }
                        ]
                    }
                ]
            },
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-43e1df1b.html'
        },
        {
            'id': '43e1e353',
            'versionId': '5b4b93e4',
            'eventDate': '28-12-2017',
            'lastUpdated': '2017-12-29T06:11:36.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'New Year\'s Run 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'AC/DC Bag',
                                'info': '>'
                            },
                            {
                                'name': 'Wolfman\'s Brother'
                            },
                            {
                                'name': 'Roggae'
                            },
                            {
                                'name': 'Tube',
                                'info': '>'
                            },
                            {
                                'name': 'Bouncing Around the Room'
                            },
                            {
                                'name': 'Back on the Train'
                            },
                            {
                                'name': 'Your Pet Cat'
                            },
                            {
                                'name': 'Waking Up Dead',
                                'info': '>'
                            },
                            {
                                'name': 'Theme From the Bottom'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Wilson',
                                'info': '>'
                            },
                            {
                                'name': 'No Men in No Man\'s Land',
                                'info': '>'
                            },
                            {
                                'name': 'Twist',
                                'info': '>'
                            },
                            {
                                'name': 'Everything\'s Right',
                                'cover': {
                                    'mbid': '822b1e81-d1a0-47fb-b7f9-ef614b913603',
                                    'tmid': 767185,
                                    'name': 'Trey Anastasio Band',
                                    'sortName': 'Trey Anastasio Band',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/trey-anastasio-band-53d6d729.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Also sprach Zarathustra, Op. 30',
                                'cover': {
                                    'mbid': '4cb43d82-824e-4034-b03d-1a98f36f6e16',
                                    'name': 'Richard Strauss',
                                    'sortName': 'Strauss, Richard',
                                    'disambiguation': 'German composer',
                                    'url': 'https://www.setlist.fm/setlists/richard-strauss-3d4ddcb.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Harry Hood'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'The Wedge'
                            },
                            {
                                'name': 'Slave to the Traffic Light'
                            }
                        ]
                    }
                ]
            },
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-43e1e353.html'
        },
        {
            'id': '1be535a8',
            'versionId': '63767abb',
            'eventDate': '06-08-2017',
            'lastUpdated': '2018-02-15T18:14:57.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Dogs Stole Things'
                            },
                            {
                                'name': 'Rift'
                            },
                            {
                                'name': 'Ha Ha Ha',
                                'info': '>'
                            },
                            {
                                'name': 'Camel Walk'
                            },
                            {
                                'name': 'Crazy Sometimes',
                                'cover': {
                                    'mbid': 'c172276a-fcbf-4477-894a-f37d1582557e',
                                    'tmid': 885511,
                                    'name': 'Mike Gordon',
                                    'sortName': 'Gordon, Mike',
                                    'disambiguation': 'member of Phish',
                                    'url': 'https://www.setlist.fm/setlists/mike-gordon-1bd6adf8.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Saw It Again',
                                'info': '>'
                            },
                            {
                                'name': 'Sanity',
                                'info': '>'
                            },
                            {
                                'name': 'Bouncing Around the Room'
                            },
                            {
                                'name': 'Most Events Aren\'t Planned',
                                'cover': {
                                    'mbid': '5c659d69-43f8-4f74-9505-4fb6076d4d3a',
                                    'name': 'Vida Blue',
                                    'sortName': 'Vida Blue',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/vida-blue-23d660ef.html'
                                },
                                'info': 'live debut by Phish'
                            },
                            {
                                'name': 'Bug'
                            },
                            {
                                'name': 'I Been Around'
                            },
                            {
                                'name': 'Izabella',
                                'cover': {
                                    'mbid': '06fb1c8b-566e-4cb2-985b-b467c90781d4',
                                    'tmid': 769346,
                                    'name': 'Jimi Hendrix',
                                    'sortName': 'Hendrix, Jimi',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/jimi-hendrix-bd6ad56.html'
                                },
                                'info': 'first since 31 Jul 1998'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Simple',
                                'info': '>'
                            },
                            {
                                'name': 'Rise/Come Together',
                                'cover': {
                                    'mbid': '822b1e81-d1a0-47fb-b7f9-ef614b913603',
                                    'tmid': 767185,
                                    'name': 'Trey Anastasio Band',
                                    'sortName': 'Trey Anastasio Band',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/trey-anastasio-band-53d6d729.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Starman',
                                'cover': {
                                    'mbid': '5441c29d-3602-4898-b1a1-b77fa23b8e50',
                                    'tmid': 734626,
                                    'name': 'David Bowie',
                                    'sortName': 'Bowie, David',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/david-bowie-6bd6ee66.html'
                                }
                            },
                            {
                                'name': 'You Enjoy Myself',
                                'info': 'with vocal jam'
                            },
                            {
                                'name': 'Loving Cup',
                                'cover': {
                                    'mbid': 'b071f9fa-14b0-4217-8e97-eb41da73f598',
                                    'tmid': 806216,
                                    'name': 'The Rolling Stones',
                                    'sortName': 'Rolling Stones, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-rolling-stones-bd6ad22.html'
                                }
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'On the Road Again',
                                'cover': {
                                    'mbid': '668fd73c-bf54-4310-a139-305517f05311',
                                    'tmid': 732878,
                                    'name': 'Willie Nelson',
                                    'sortName': 'Nelson, Willie',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/willie-nelson-33d6dcc5.html'
                                },
                                'info': 'followed by \'Lawn Boy\' reprise'
                            },
                            {
                                'name': 'Tweezer Reprise',
                                'info': 'preceded by \'Weekapaug Groove\' bass intro by Mike'
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was the thirteenth and final night of Phish\'s Baker\'s Dozen run at Madison Square Garden and had a glazed donut theme; Donuts with a pink glaze and rainbow sprinkles were given to fans arriving at the venue.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-1be535a8.html'
        },
        {
            'id': '1be53d88',
            'versionId': '2344982f',
            'eventDate': '05-08-2017',
            'lastUpdated': '2017-08-07T21:36:45.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Soul Shakedown Party',
                                'cover': {
                                    'mbid': 'c296e10c-110a-4103-9e77-47bfebb7fb2e',
                                    'tmid': 733905,
                                    'name': 'Bob Marley & The Wailers',
                                    'sortName': 'Marley, Bob & The Wailers',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/bob-marley-and-the-wailers-13d6d9f9.html'
                                }
                            },
                            {
                                'name': 'Uncle Pen',
                                'cover': {
                                    'mbid': '624db6ea-1afb-4a3c-8092-5acfd2cb4a33',
                                    'name': 'Bill Monroe and the Bluegrass Boys',
                                    'sortName': 'Monroe, Bill and the Bluegrass Boys',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/bill-monroe-and-the-bluegrass-boys-5bd657b0.html'
                                }
                            },
                            {
                                'name': 'The Sloth'
                            },
                            {
                                'name': 'Gotta Jibboo'
                            },
                            {
                                'name': 'Fuck Your Face'
                            },
                            {
                                'name': 'Sunshine of Your Feeling',
                                'info': 'Sunshine of Your Love/More Than a Feeling/Tales of Brave Ulysses/Sunshine of Your Love/Long Time'
                            },
                            {
                                'name': 'Frost',
                                'cover': {
                                    'mbid': 'd942f71b-09d3-406c-8f7d-c52eba3135c1',
                                    'tmid': 767185,
                                    'name': 'Trey Anastasio',
                                    'sortName': 'Anastasio, Trey',
                                    'disambiguation': 'US jam band Phish lead singer',
                                    'url': 'https://www.setlist.fm/setlists/trey-anastasio-bd6adfa.html'
                                }
                            },
                            {
                                'name': 'Scent of a Mule'
                            },
                            {
                                'name': 'Fire',
                                'cover': {
                                    'mbid': '33b3c323-77c2-417c-a5b4-af7e6a111cc9',
                                    'tmid': 769346,
                                    'name': 'The Jimi Hendrix Experience',
                                    'sortName': 'Hendrix, Jimi, The, Experience',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-jimi-hendrix-experience-3d6ad57.html'
                                }
                            },
                            {
                                'name': 'Alaska',
                                'info': '>'
                            },
                            {
                                'name': 'Plasma',
                                'cover': {
                                    'mbid': 'd942f71b-09d3-406c-8f7d-c52eba3135c1',
                                    'tmid': 767185,
                                    'name': 'Trey Anastasio',
                                    'sortName': 'Anastasio, Trey',
                                    'disambiguation': 'US jam band Phish lead singer',
                                    'url': 'https://www.setlist.fm/setlists/trey-anastasio-bd6adfa.html'
                                },
                                'info': 'with \'Sunshine of Your Love\' tease at end'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Ghost'
                            },
                            {
                                'name': 'Petrichor',
                                'info': '>'
                            },
                            {
                                'name': 'Light',
                                'info': '>'
                            },
                            {
                                'name': 'The Lizards'
                            },
                            {
                                'name': 'The Horse',
                                'info': '>'
                            },
                            {
                                'name': 'Silent in the Morning'
                            },
                            {
                                'name': 'Quinn the Eskimo (The Mighty Quinn)',
                                'cover': {
                                    'mbid': '72c536dc-7137-4477-a521-567eeb840fa8',
                                    'tmid': 734972,
                                    'name': 'Bob Dylan',
                                    'sortName': 'Dylan, Bob',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/bob-dylan-1bd6adb8.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Rocky Top',
                                'cover': {
                                    'mbid': 'bc8f68a3-9f43-491f-93a0-b8c19d801a27',
                                    'name': 'The Osborne Brothers',
                                    'sortName': 'Osborne Brothers, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-osborne-brothers-63d6aa0f.html'
                                }
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Joy'
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was night twelve of Phish\'s Baker\'s Dozen run at Madison Square Garden and had a Boston Cream donut theme; Donuts with a dark chocolate glaze and vanilla cream icing were given to fans arriving at the venue.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-1be53d88.html'
        },
        {
            'id': '53e5c7e5',
            'versionId': '4b474b96',
            'eventDate': '04-08-2017',
            'lastUpdated': '2017-08-05T22:05:26.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'See That My Grave Is Kept Clean',
                                'cover': {
                                    'mbid': '9481010a-db23-469d-87df-b04118850efb',
                                    'name': 'Blind Lemon Jefferson',
                                    'sortName': 'Jefferson, Blind Lemon',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/blind-lemon-jefferson-73d6269d.html'
                                },
                                'info': 'live debut by Phish'
                            },
                            {
                                'name': 'Punch You in the Eye',
                                'info': '>'
                            },
                            {
                                'name': 'Party Time'
                            },
                            {
                                'name': 'Big Black Furry Creature From Mars'
                            },
                            {
                                'name': 'Dinner and a Movie'
                            },
                            {
                                'name': 'Ocelot'
                            },
                            {
                                'name': 'Poor Heart'
                            },
                            {
                                'name': 'Winterqueen'
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
                                },
                                'info': '>'
                            },
                            {
                                'name': 'First Tube'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Dem Bones',
                                'cover': {
                                    'mbid': '01dcd57c-89de-4dda-b567-699d804fb501',
                                    'name': 'James Weldon Johnson',
                                    'sortName': 'Johnson, James Weldon',
                                    'disambiguation': 'US songwriter, author',
                                    'url': 'https://www.setlist.fm/setlists/james-weldon-johnson-bdc850e.html'
                                },
                                'info': 'a cappella'
                            },
                            {
                                'name': 'No Men in No Man\'s Land',
                                'info': '>'
                            },
                            {
                                'name': 'Everything in Its Right Place',
                                'cover': {
                                    'mbid': 'a74b1b7f-71a5-4011-9441-d0b5e4122711',
                                    'tmid': 763468,
                                    'name': 'Radiohead',
                                    'sortName': 'Radiohead',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/radiohead-bd6bd12.html'
                                },
                                'info': 'live debut by Phish'
                            },
                            {
                                'name': 'What\'s the Use?',
                                'info': '>'
                            },
                            {
                                'name': 'Scents and Subtle Sounds',
                                'info': 'no intro; with \'No Men in No Man\'s Land\' reprise & "Sucking on a Lemon" tease from Fishman) (>'
                            },
                            {
                                'name': 'Prince Caspian',
                                'info': 'with \'Everything in Its Right Place\' quote at end) (>'
                            },
                            {
                                'name': 'Fluffhead',
                                'info': 'with \'Everything in Its Right Place\' quote at end'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Frankenstein',
                                'cover': {
                                    'mbid': 'd1c7bef2-12cb-4fe8-b9bc-3b58e3ac0c5c',
                                    'tmid': 768589,
                                    'name': 'The Edgar Winter Group',
                                    'sortName': 'Winter, Edgar, Group, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-edgar-winter-group-53d6bb7d.html'
                                },
                                'info': 'Page on keytar) (preceded by \'Everything in Its Right Place\' quote'
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was night eleven of Phish\'s Baker\'s Dozen run at Madison Square Garden and had a lemon donut theme; Donuts with a lemon poppy seed glaze were given to fans arriving at the venue.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-53e5c7e5.html'
        },
        {
            'id': '73e5d209',
            'versionId': '634772b3',
            'eventDate': '02-08-2017',
            'lastUpdated': '2017-08-03T16:32:49.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Way Down in the Hole',
                                'cover': {
                                    'mbid': 'c3aeb863-7b26-4388-94e8-5a240f2be21b',
                                    'tmid': 736410,
                                    'name': 'Tom Waits',
                                    'sortName': 'Waits, Tom',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/tom-waits-3bd6c0ac.html'
                                },
                                'info': 'live debut by Phish'
                            },
                            {
                                'name': 'Buried Alive'
                            },
                            {
                                'name': 'Kill Devil Falls'
                            },
                            {
                                'name': 'Guyute'
                            },
                            {
                                'name': 'I Didn\'t Know',
                                'cover': {
                                    'mbid': '6f7e36da-79d8-4219-990d-8e9224d04ebc',
                                    'name': 'Richard Wright',
                                    'sortName': 'Wright, Richard',
                                    'disambiguation': 'Pink Floyd keyboardist',
                                    'url': 'https://www.setlist.fm/setlists/richard-wright-bd6dd0a.html'
                                }
                            },
                            {
                                'name': 'NICU'
                            },
                            {
                                'name': 'Meat'
                            },
                            {
                                'name': 'Maze'
                            },
                            {
                                'name': 'Ginseng Sullivan',
                                'cover': {
                                    'mbid': 'c9605929-6b48-4991-bb96-0bf460df8ee1',
                                    'name': 'Norman Blake',
                                    'sortName': 'Blake, Norman',
                                    'disambiguation': 'bluegrass guitarist',
                                    'url': 'https://www.setlist.fm/setlists/norman-blake-3d6b127.html'
                                }
                            },
                            {
                                'name': 'Waiting All Night'
                            },
                            {
                                'name': 'Heavy Things'
                            },
                            {
                                'name': 'Run Like an Antelope'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Mike\'s Song',
                                'info': '>'
                            },
                            {
                                'name': 'O Holy Night',
                                'cover': {
                                    'mbid': 'ece590a3-ae0e-4311-bcf3-ee07cfb7b4f0',
                                    'name': 'Adolphe Adam',
                                    'sortName': 'Adam, Adolphe',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/adolphe-adam-4bd7dfb2.html'
                                },
                                'info': 'live debut by Phish) (>'
                            },
                            {
                                'name': 'Taste',
                                'info': '>'
                            },
                            {
                                'name': 'Wingsuit',
                                'info': '>'
                            },
                            {
                                'name': 'Sneakin\' Sally Through the Alley',
                                'cover': {
                                    'mbid': '23388f69-9c11-44a6-b832-b9071db3423e',
                                    'name': 'Lee Dorsey',
                                    'sortName': 'Dorsey, Lee',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/lee-dorsey-73d6ce65.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Weekapaug Groove'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'A Day in the Life',
                                'cover': {
                                    'mbid': 'b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d',
                                    'tmid': 735610,
                                    'name': 'The Beatles',
                                    'sortName': 'Beatles, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-beatles-23d6a88b.html'
                                }
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was night ten of Phish\'s Baker\'s Dozen run at Madison Square Garden and had a donut hole theme; Donut holes with a peanut butter chocolate dust were given to fans arriving at the venue.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-73e5d209.html'
        },
        {
            'id': 'be5d516',
            'versionId': '7b475e10',
            'eventDate': '01-08-2017',
            'lastUpdated': '2017-08-04T23:47:55.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'O Canada',
                                'cover': {
                                    'mbid': '7622b8cb-1409-4735-a251-253d269b2fc7',
                                    'name': 'Calixa Lavallée',
                                    'sortName': 'Lavallée, Calixa',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/calixa-lavallee-bd26da6.html'
                                },
                                'info': 'instrumental; live debut by Phish) (>'
                            },
                            {
                                'name': 'Crowd Control'
                            },
                            {
                                'name': 'Sugar Shack'
                            },
                            {
                                'name': 'When the Circus Comes',
                                'cover': {
                                    'mbid': '2b9967c7-3246-4658-a561-ded5408dd9af',
                                    'tmid': 770208,
                                    'name': 'Los Lobos',
                                    'sortName': 'Lobos, Los',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/los-lobos-4bd6b3c6.html'
                                }
                            },
                            {
                                'name': 'Daniel Saw the Stone',
                                'cover': {
                                    'mbid': '9be7f096-97ec-4615-8957-8d40b5dcbc41',
                                    'name': '[traditional]',
                                    'sortName': '[traditional]',
                                    'disambiguation': 'Special Purpose Artist',
                                    'url': 'https://www.setlist.fm/setlists/traditional-5bd2f7e4.html'
                                }
                            },
                            {
                                'name': 'Army of One'
                            },
                            {
                                'name': 'The Wedge'
                            },
                            {
                                'name': 'Guelah Papyrus'
                            },
                            {
                                'name': 'Maple Leaf Rag',
                                'cover': {
                                    'mbid': 'aec8a328-d2e8-4780-b2ea-318c7f8d6f75',
                                    'name': 'Scott Joplin',
                                    'sortName': 'Joplin, Scott',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/scott-joplin-43d7f317.html'
                                },
                                'info': 'performed solo by Page; live debut by Phish) (followed by \'Guelah Papyrus\' reprise'
                            },
                            {
                                'name': 'McGrupp and the Watchful Hosemasters',
                                'info': '>'
                            },
                            {
                                'name': 'Limb by Limb',
                                'info': '>'
                            },
                            {
                                'name': 'Walk Away',
                                'cover': {
                                    'mbid': '4167b497-1ae5-4502-a8e6-e1546ffbe514',
                                    'tmid': 1027232,
                                    'name': 'James Gang',
                                    'sortName': 'James Gang',
                                    'disambiguation': 'US rock group',
                                    'url': 'https://www.setlist.fm/setlists/james-gang-13d61999.html'
                                }
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
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
                                'name': 'Leaves'
                            },
                            {
                                'name': 'Swept Away',
                                'info': 'first since 8 July 2012'
                            },
                            {
                                'name': 'Steep',
                                'info': 'first since 8 July 2012) (>'
                            },
                            {
                                'name': '46 Days',
                                'info': 'Trey on marimba lumina and Mike and Page on percussion) (>'
                            },
                            {
                                'name': 'Piper',
                                'info': 'with \'46 Days\' quote at end by Trey) (>'
                            },
                            {
                                'name': 'Possum'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Rock \'n\' Roll Suicide',
                                'cover': {
                                    'mbid': '5441c29d-3602-4898-b1a1-b77fa23b8e50',
                                    'tmid': 734626,
                                    'name': 'David Bowie',
                                    'sortName': 'Bowie, David',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/david-bowie-6bd6ee66.html'
                                }
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was night nine of Phish\'s Baker\'s Dozen run at Madison Square Garden and had a maple donut theme; Donuts with a maple cinnamon glaze were given to fans arriving at the venue.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-be5d516.html'
        },
        {
            'id': '73e5e669',
            'versionId': '2b43c8da',
            'eventDate': '30-07-2017',
            'lastUpdated': '2017-09-26T16:37:42.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'The Curtain With',
                                'info': '>'
                            },
                            {
                                'name': 'Runaway Jim'
                            },
                            {
                                'name': 'Waking Up Dead'
                            },
                            {
                                'name': 'Esther'
                            },
                            {
                                'name': 'Home'
                            },
                            {
                                'name': 'Brian and Robert',
                                'info': '>'
                            },
                            {
                                'name': 'Nellie Kane',
                                'cover': {
                                    'mbid': 'ce76c736-07db-4503-b771-0ee2c981a144',
                                    'tmid': 1470264,
                                    'name': 'Hot Rize',
                                    'sortName': 'Hot Rize',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/hot-rize-3d6b12b.html'
                                }
                            },
                            {
                                'name': 'Colonel Forbin\'s Ascent',
                                'info': '>'
                            },
                            {
                                'name': 'Fly Famous Mockingbird',
                                'info': 'with \'The Squirming Coil\' quote by Trey) (>'
                            },
                            {
                                'name': 'David Bowie'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Drowned',
                                'cover': {
                                    'mbid': '9fdaa16b-a6c4-4831-b87c-bc9ca8ce7eaa',
                                    'tmid': 807319,
                                    'name': 'The Who',
                                    'sortName': 'Who, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-who-bd6bd2a.html'
                                },
                                'info': '> jam >'
                            },
                            {
                                'name': 'A Song I Heard the Ocean Sing'
                            },
                            {
                                'name': 'Harpua',
                                'info': '>'
                            },
                            {
                                'name': 'Also sprach Zarathustra, Op. 30',
                                'cover': {
                                    'mbid': '4cb43d82-824e-4034-b03d-1a98f36f6e16',
                                    'name': 'Richard Strauss',
                                    'sortName': 'Strauss, Richard',
                                    'disambiguation': 'German composer',
                                    'url': 'https://www.setlist.fm/setlists/richard-strauss-3d4ddcb.html'
                                },
                                'info': 'with \'Harpua\' tease by Trey) (>'
                            },
                            {
                                'name': 'Golgi Apparatus'
                            },
                            {
                                'name': 'In the Good Old Summertime',
                                'cover': {
                                    'mbid': 'c77e62ff-f2f8-418e-8ce3-bbdeaa5dacad',
                                    'name': 'George Evans',
                                    'sortName': 'Evans, George',
                                    'disambiguation': 'Cambar Productions Ltd',
                                    'url': 'https://www.setlist.fm/setlists/george-evans-1bd401ac.html'
                                },
                                'info': 'a cappella'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'The Wind Cries Mary',
                                'cover': {
                                    'mbid': '33b3c323-77c2-417c-a5b4-af7e6a111cc9',
                                    'tmid': 769346,
                                    'name': 'The Jimi Hendrix Experience',
                                    'sortName': 'Hendrix, Jimi, The, Experience',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-jimi-hendrix-experience-3d6ad57.html'
                                },
                                'info': 'live debut by Phish'
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was night eight of Phish\'s Baker\'s Dozen run at Madison Square Garden and consisted of a jimmies donut theme; Donuts with rainbow jimmies were given to fans arriving at the venue; During Harpua, Trey and Mike sat on chairs at the front of the stage, the entire band discussed cosmology, and eventually decided that the universe was in the shape of a donut.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-73e5e669.html'
        },
        {
            'id': '5be5ef90',
            'versionId': '2b47249a',
            'eventDate': '29-07-2017',
            'lastUpdated': '2017-07-31T04:49:15.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'song': [
                            {
                                'name': '\'Woodstock brown acid\' PA announcement',
                                'tape': true,
                                'info': 'played before the band took the stage, with the word acid being changed to donuts'
                            }
                        ]
                    },
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Llama'
                            },
                            {
                                'name': 'Wilson',
                                'info': '>'
                            },
                            {
                                'name': 'Stealing Time From the Faulty Plan',
                                'info': '>'
                            },
                            {
                                'name': 'Ya Mar',
                                'cover': {
                                    'mbid': '11ebdf8f-b3ec-47a7-8e9f-c340b64ba762',
                                    'name': 'Cyril Ferguson',
                                    'sortName': 'Ferguson, Cyril',
                                    'url': 'https://www.setlist.fm/setlists/cyril-ferguson-6bd61eba.html'
                                }
                            },
                            {
                                'name': 'Tela'
                            },
                            {
                                'name': 'The Birds',
                                'info': '>'
                            },
                            {
                                'name': 'The Line'
                            },
                            {
                                'name': 'Water in the Sky'
                            },
                            {
                                'name': 'Vultures',
                                'info': '>'
                            },
                            {
                                'name': 'Train Song'
                            },
                            {
                                'name': 'Horn'
                            },
                            {
                                'name': 'I Am the Walrus',
                                'cover': {
                                    'mbid': 'b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d',
                                    'tmid': 735610,
                                    'name': 'The Beatles',
                                    'sortName': 'Beatles, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-beatles-23d6a88b.html'
                                }
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Blaze On',
                                'info': '>'
                            },
                            {
                                'name': 'Twenty Years Later',
                                'info': '>'
                            },
                            {
                                'name': 'Alumni Blues',
                                'info': '>'
                            },
                            {
                                'name': 'Letter to Jimmy Page',
                                'info': '> \'Alumni Blues\' reprise'
                            },
                            {
                                'name': 'Meatstick',
                                'info': '>'
                            },
                            {
                                'name': 'Dirt',
                                'info': '>'
                            },
                            {
                                'name': 'Harry Hood',
                                'info': 'with \'Dirt\' & \'Mountain Jam\' teases'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Cinnamon Girl',
                                'cover': {
                                    'mbid': '0f3515b0-75c9-46c9-b26c-4cd05d26eae7',
                                    'tmid': 736511,
                                    'name': 'Neil Young & Crazy Horse',
                                    'sortName': 'Young, Neil & Crazy Horse',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/neil-young-and-crazy-horse-73d6b661.html'
                                },
                                'info': 'first since 31 July 1997'
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was night seven of Phish\'s Baker\'s Dozen run at Madison Square Garden and consisted of a cinnamon donut theme; Donuts with a cinnamon glaze were given to fans arriving at the venue; \'I Am the Walrus\' included \'Shipwreck\', \'The Birds\', \'Your Pet Cat\' and \'Martian Monster\' quotes.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-5be5ef90.html'
        },
        {
            'id': '13e5f125',
            'versionId': '2b4724ae',
            'eventDate': '28-07-2017',
            'lastUpdated': '2017-07-31T04:44:31.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Chocolate Rain',
                                'cover': {
                                    'mbid': 'e7c3693a-485f-4c3d-b561-8d9090629fe9',
                                    'name': 'Tay Zonday',
                                    'sortName': 'Zonday, Tay',
                                    'url': 'https://www.setlist.fm/setlists/tay-zonday-6bde6e6a.html'
                                },
                                'info': 'Page on midi controller keyboard; live debut by Phish'
                            },
                            {
                                'name': 'Ass Handed'
                            },
                            {
                                'name': 'Free'
                            },
                            {
                                'name': 'Weigh',
                                'info': '>'
                            },
                            {
                                'name': 'Undermind',
                                'info': '>'
                            },
                            {
                                'name': 'The Oh Kee Pa Ceremony'
                            },
                            {
                                'name': 'The Dogs'
                            },
                            {
                                'name': 'Destiny Unbound'
                            },
                            {
                                'name': 'The Divided Sky'
                            },
                            {
                                'name': 'Things People Do'
                            },
                            {
                                'name': 'Sand'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Have Mercy',
                                'cover': {
                                    'mbid': 'e0885194-a186-4c9b-9643-f6d54aeb6bfd',
                                    'name': 'The Mighty Diamonds',
                                    'sortName': 'Mighty Diamonds, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-mighty-diamonds-6bd6ce86.html'
                                }
                            },
                            {
                                'name': 'Chalk Dust Torture',
                                'info': 'unfinished'
                            },
                            {
                                'name': 'You Sexy Thing',
                                'cover': {
                                    'mbid': 'a749130e-c2d8-4a7c-b740-908ea4574961',
                                    'tmid': 745699,
                                    'name': 'Hot Chocolate',
                                    'sortName': 'Hot Chocolate',
                                    'disambiguation': '70s and 80s British soul band',
                                    'url': 'https://www.setlist.fm/setlists/hot-chocolate-3d6bd47.html'
                                },
                                'info': 'live debut by Phish) (> jam >'
                            },
                            {
                                'name': 'Mercury',
                                'info': '> \'You Sexy Thing\' reprise'
                            },
                            {
                                'name': 'Backwards Down the Number Line',
                                'info': '>'
                            },
                            {
                                'name': 'Rock & Roll',
                                'cover': {
                                    'mbid': '94b0fb9d-a066-4823-b2ec-af1d324bcfcf',
                                    'tmid': 735957,
                                    'name': 'The Velvet Underground',
                                    'sortName': 'Velvet Underground, The',
                                    'disambiguation': 'Lou Reed’s seminal rock band',
                                    'url': 'https://www.setlist.fm/setlists/the-velvet-underground-3bd6a894.html'
                                }
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Fee',
                                'info': 'lyrics changed to "have a chocolate donut and catch your breath"'
                            },
                            {
                                'name': 'Space Oddity',
                                'cover': {
                                    'mbid': '5441c29d-3602-4898-b1a1-b77fa23b8e50',
                                    'tmid': 734626,
                                    'name': 'David Bowie',
                                    'sortName': 'Bowie, David',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/david-bowie-6bd6ee66.html'
                                },
                                'info': 'a cappella'
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was night six of Phish\'s Baker\'s Dozen run at Madison Square Garden and consisted of a chocolate donut theme; Donuts with a dark chocolate glaze with chocolate cookie crumb were given to fans arriving at the venue.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-13e5f125.html'
        },
        {
            'id': 'be581e6',
            'versionId': '5b6a2ff8',
            'eventDate': '26-07-2017',
            'lastUpdated': '2018-12-16T20:11:19.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'White Winter Hymnal',
                                'cover': {
                                    'mbid': 'fa97dd36-1b82-43d7-a6e4-2adeafd59cef',
                                    'tmid': 1219660,
                                    'name': 'Fleet Foxes',
                                    'sortName': 'Fleet Foxes',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/fleet-foxes-7bd64ec0.html'
                                },
                                'info': 'a cappella; live debut by Phish'
                            },
                            {
                                'name': 'Cars Trucks Buses',
                                'info': 'preceded by \'My Soul\' tease'
                            },
                            {
                                'name': 'My Soul',
                                'cover': {
                                    'mbid': 'db1a3066-1586-495d-a09c-1312cabab5be',
                                    'name': 'Clifton Chenier',
                                    'sortName': 'Chenier, Clifton',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/clifton-chenier-73d6329d.html'
                                }
                            },
                            {
                                'name': 'Roses Are Free',
                                'cover': {
                                    'mbid': 'c0eee88b-47f2-4cd2-ac48-a045e902a432',
                                    'tmid': 742371,
                                    'name': 'Ween',
                                    'sortName': 'Ween',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/ween-63d68e53.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'The Very Long Fuse'
                            },
                            {
                                'name': 'Gumbo'
                            },
                            {
                                'name': 'Yarmouth Road',
                                'cover': {
                                    'mbid': 'c172276a-fcbf-4477-894a-f37d1582557e',
                                    'tmid': 885511,
                                    'name': 'Mike Gordon',
                                    'sortName': 'Gordon, Mike',
                                    'disambiguation': 'member of Phish',
                                    'url': 'https://www.setlist.fm/setlists/mike-gordon-1bd6adf8.html'
                                }
                            },
                            {
                                'name': 'Pebbles and Marbles'
                            },
                            {
                                'name': 'Farmhouse'
                            },
                            {
                                'name': 'Tube'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Carini',
                                'info': '>'
                            },
                            {
                                'name': 'Mr. Completely',
                                'cover': {
                                    'mbid': 'd942f71b-09d3-406c-8f7d-c52eba3135c1',
                                    'tmid': 767185,
                                    'name': 'Trey Anastasio',
                                    'sortName': 'Anastasio, Trey',
                                    'disambiguation': 'US jam band Phish lead singer',
                                    'url': 'https://www.setlist.fm/setlists/trey-anastasio-bd6adfa.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': '1999',
                                'cover': {
                                    'mbid': '070d193a-845c-479f-980e-bef15710653e',
                                    'tmid': 735895,
                                    'name': 'Prince',
                                    'sortName': 'Prince',
                                    'disambiguation': '“The Artist Formerly Known as…”',
                                    'url': 'https://www.setlist.fm/setlists/prince-13d6b9ed.html'
                                },
                                'info': 'with \'Mr. Completely\' tease by Fish; first since 31 Dec 1998) (> jam >'
                            },
                            {
                                'name': 'Steam',
                                'info': '>'
                            },
                            {
                                'name': 'No Quarter',
                                'cover': {
                                    'mbid': '678d88b2-87b0-403b-b63d-5da7465aecc3',
                                    'tmid': 915807,
                                    'name': 'Led Zeppelin',
                                    'sortName': 'Led Zeppelin',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/led-zeppelin-13d6b509.html'
                                }
                            },
                            {
                                'name': 'Character Zero'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Powderfinger',
                                'cover': {
                                    'mbid': '0f3515b0-75c9-46c9-b26c-4cd05d26eae7',
                                    'tmid': 736511,
                                    'name': 'Neil Young & Crazy Horse',
                                    'sortName': 'Young, Neil & Crazy Horse',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/neil-young-and-crazy-horse-73d6b661.html'
                                },
                                'info': 'live debut by Phish'
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was night five of Phish\'s Baker\'s Dozen run at Madison Square Garden and consisted of a powdered donut theme; Powdered sugar donuts were given to fans arriving at the venue.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-be581e6.html'
        },
        {
            'id': '4be58fa6',
            'versionId': '3b4724bc',
            'eventDate': '25-07-2017',
            'lastUpdated': '2017-07-31T04:39:15.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Sample in a Jar'
                            },
                            {
                                'name': 'Lawn Boy',
                                'info': 'Page on keytar) (> jam >'
                            },
                            {
                                'name': 'My Friend, My Friend',
                                'info': 'no \'myfe\' ending) (>'
                            },
                            {
                                'name': 'Stash'
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
                                'name': 'Fuego',
                                'info': '>'
                            },
                            {
                                'name': 'Thread',
                                'info': '>'
                            },
                            {
                                'name': 'Crosseyed and Painless',
                                'cover': {
                                    'mbid': 'a94a7155-c79d-4409-9fcf-220cb0e4dc3a',
                                    'tmid': 859981,
                                    'name': 'Talking Heads',
                                    'sortName': 'Talking Heads',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/talking-heads-3bd6b808.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Makisupa Policeman',
                                'info': 'with \'Jamming\' quote) (>'
                            },
                            {
                                'name': 'End of Session',
                                'info': 'live debut) (>'
                            },
                            {
                                'name': 'Tuesday',
                                'cover': {
                                    'mbid': 'd942f71b-09d3-406c-8f7d-c52eba3135c1',
                                    'tmid': 767185,
                                    'name': 'Trey Anastasio',
                                    'sortName': 'Anastasio, Trey',
                                    'disambiguation': 'US jam band Phish lead singer',
                                    'url': 'https://www.setlist.fm/setlists/trey-anastasio-bd6adfa.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'Cavern'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Julius',
                                'info': '> \'Lawn Boy\' reprise'
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was night four of Phish\'s Baker\'s Dozen run at Madison Square Garden and consisted of a jam-filled donut theme; Raspberry jam-filled donuts dipped in honey were given out to fans arriving at the venue and songs such as \'Sample in a Jar\' and \'Lawn Boy\' were jammed out longer than usual.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-4be58fa6.html'
        },
        {
            'id': '7be59e8c',
            'versionId': '3b4724cc',
            'eventDate': '23-07-2017',
            'lastUpdated': '2017-07-31T04:33:13.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Sunday Morning',
                                'cover': {
                                    'mbid': '94b0fb9d-a066-4823-b2ec-af1d324bcfcf',
                                    'tmid': 735957,
                                    'name': 'The Velvet Underground',
                                    'sortName': 'Velvet Underground, The',
                                    'disambiguation': 'Lou Reed’s seminal rock band',
                                    'url': 'https://www.setlist.fm/setlists/the-velvet-underground-3bd6a894.html'
                                },
                                'info': 'Fish on lead vocals & Trey on drums; live debut by Phish'
                            },
                            {
                                'name': 'Axilla'
                            },
                            {
                                'name': 'Your Pet Cat',
                                'info': '>'
                            },
                            {
                                'name': 'Back on the Train',
                                'info': 'with \'Streets of Cairo\' tease by Trey'
                            },
                            {
                                'name': 'How Many People Are You',
                                'cover': {
                                    'mbid': 'c172276a-fcbf-4477-894a-f37d1582557e',
                                    'tmid': 885511,
                                    'name': 'Mike Gordon',
                                    'sortName': 'Gordon, Mike',
                                    'disambiguation': 'member of Phish',
                                    'url': 'https://www.setlist.fm/setlists/mike-gordon-1bd6adf8.html'
                                }
                            },
                            {
                                'name': 'Glide'
                            },
                            {
                                'name': 'Theme From the Bottom',
                                'info': '>'
                            },
                            {
                                'name': 'It\'s Ice',
                                'info': 'with \'Super Bad\' tease by Trey) (>'
                            },
                            {
                                'name': 'More'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'AC/DC Bag',
                                'info': '>'
                            },
                            {
                                'name': 'Wolfman\'s Brother',
                                'info': 'unfinished) (>'
                            },
                            {
                                'name': 'Twist',
                                'info': '>'
                            },
                            {
                                'name': 'Waves',
                                'info': '>'
                            },
                            {
                                'name': 'Miss You'
                            },
                            {
                                'name': 'Boogie On Reggae Woman',
                                'cover': {
                                    'mbid': '1ee18fb3-18a6-4c7f-8ba0-bc41cdd0462e',
                                    'tmid': 772848,
                                    'name': 'Stevie Wonder',
                                    'sortName': 'Wonder, Stevie',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/stevie-wonder-13d6b955.html'
                                }
                            },
                            {
                                'name': 'Wading in the Velvet Sea'
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Sweet Jane',
                                'cover': {
                                    'mbid': '94b0fb9d-a066-4823-b2ec-af1d324bcfcf',
                                    'tmid': 735957,
                                    'name': 'The Velvet Underground',
                                    'sortName': 'Velvet Underground, The',
                                    'disambiguation': 'Lou Reed’s seminal rock band',
                                    'url': 'https://www.setlist.fm/setlists/the-velvet-underground-3bd6a894.html'
                                },
                                'info': 'first since 29 June 2012'
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was night three of Phish\'s Baker\'s Dozen run at Madison Square Garden and consisted of a red velvet donut theme; Red velvet donuts with cream cheese frosting were given to fans arriving at the venue; Fish came out on stage for \'Sunday Morning\' wearing a stole and mitre. He also lifted a censer with burning incense at one point, and even sprinkled "holy water" on the crowd. The venue was draped in red lights for the "velvet" themed songs: \'Sunday Morning\' and \'Sweet Jane\' (both Velvet Underground covers) and Wading in the Velvet Sea.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-7be59e8c.html'
        },
        {
            'id': '6be5a696',
            'versionId': '234724cb',
            'eventDate': '22-07-2017',
            'lastUpdated': '2017-07-31T04:29:10.000+0000',
            'artist': {
                'mbid': 'e01646f2-2a04-450d-8bf2-0d993082e058',
                'tmid': 748766,
                'name': 'Phish',
                'sortName': 'Phish',
                'disambiguation': '',
                'url': 'https://www.setlist.fm/setlists/phish-13d6ad51.html'
            },
            'venue': {
                'id': '23d63cc7',
                'name': 'Madison Square Garden',
                'city': {
                    'id': '5128581',
                    'name': 'New York',
                    'state': 'New York',
                    'stateCode': 'NY',
                    'coords': {
                        'lat': 40.7142691,
                        'long': -74.0059729
                    },
                    'country': {
                        'code': 'US',
                        'name': 'United States'
                    }
                },
                'url': 'https://www.setlist.fm/venue/madison-square-garden-new-york-ny-usa-23d63cc7.html'
            },
            'tour': {
                'name': 'Summer Tour 2017'
            },
            'sets': {
                'set': [
                    {
                        'name': 'Set 1:',
                        'song': [
                            {
                                'name': 'Strawberry Fields Forever',
                                'cover': {
                                    'mbid': 'b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d',
                                    'tmid': 735610,
                                    'name': 'The Beatles',
                                    'sortName': 'Beatles, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-beatles-23d6a88b.html'
                                },
                                'info': 'a cappella; live debut by Phish'
                            },
                            {
                                'name': 'Halley\'s Comet',
                                'cover': {
                                    'mbid': '6f7e36da-79d8-4219-990d-8e9224d04ebc',
                                    'name': 'Richard Wright',
                                    'sortName': 'Wright, Richard',
                                    'disambiguation': 'Pink Floyd keyboardist',
                                    'url': 'https://www.setlist.fm/setlists/richard-wright-bd6dd0a.html'
                                },
                                'info': '>'
                            },
                            {
                                'name': 'The Moma Dance',
                                'info': 'unfinished) (>'
                            },
                            {
                                'name': 'Breath and Burning',
                                'info': '>'
                            },
                            {
                                'name': 'Funky Bitch',
                                'cover': {
                                    'mbid': 'd2728d68-26f6-42b6-a490-ddae85b65d6d',
                                    'name': 'Son Seals',
                                    'sortName': 'Seals, Son',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/son-seals-3bd61020.html'
                                }
                            },
                            {
                                'name': 'Mound'
                            },
                            {
                                'name': 'Foam'
                            },
                            {
                                'name': 'Roggae'
                            },
                            {
                                'name': 'The Squirming Coil'
                            }
                        ]
                    },
                    {
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Down With Disease',
                                'info': 'with \'Pictures of Matchstick Men\' tease by Trey) (>'
                            },
                            {
                                'name': 'Strawberry Letter 23',
                                'cover': {
                                    'mbid': 'ff9542ca-7859-4db2-8796-c1e3c39b9c0a',
                                    'tmid': 740177,
                                    'name': 'Shuggie Otis',
                                    'sortName': 'Otis, Shuggie',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/shuggie-otis-3d651cf.html'
                                },
                                'info': 'live debut by Phish'
                            },
                            {
                                'name': 'Birds of a Feather'
                            },
                            {
                                'name': 'I Always Wanted It This Way',
                                'info': 'Trey on marimba lumina) (>'
                            },
                            {
                                'name': 'All of These Dreams',
                                'info': 'first since 26 Oct. 2010'
                            },
                            {
                                'name': 'Split Open and Melt',
                                'info': '> \'Down With Disease\' reprise'
                            },
                            {
                                'name': 'Shine a Light',
                                'cover': {
                                    'mbid': 'b071f9fa-14b0-4217-8e97-eb41da73f598',
                                    'tmid': 806216,
                                    'name': 'The Rolling Stones',
                                    'sortName': 'Rolling Stones, The',
                                    'disambiguation': '',
                                    'url': 'https://www.setlist.fm/setlists/the-rolling-stones-bd6ad22.html'
                                }
                            }
                        ]
                    },
                    {
                        'encore': 1,
                        'name': 'Set 2:',
                        'song': [
                            {
                                'name': 'Peaches en Regalia',
                                'cover': {
                                    'mbid': 'e20747e7-55a4-452e-8766-7b985585082d',
                                    'tmid': 736516,
                                    'name': 'Frank Zappa',
                                    'sortName': 'Zappa, Frank',
                                    'disambiguation': 'US musician, composer, activist & filmmaker',
                                    'url': 'https://www.setlist.fm/setlists/frank-zappa-3d6b52b.html'
                                },
                                'info': '>'
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
                                'name': 'My Sweet One'
                            }
                        ]
                    }
                ]
            },
            'info': 'This show was night two of Phish\'s Baker\'s Dozen run at Madison Square Garden and consisted of a Strawberry donut theme; Strawberry donuts were given to fans arriving at the venue; Mike teased \'Dave\'s Energy Guide\' in Split Open and Melt.',
            'url': 'https://www.setlist.fm/setlist/phish/2017/madison-square-garden-new-york-ny-6be5a696.html'
        }
    ]
};

export default data;
export default function makeSetlistTemplate(setlists) {
    const setlist = setlists.setlist;
    console.log(setlist);
    setlist.forEach(setlist => {
        console.log(setlist);
        const date = setlist.eventDate;
        const venue = setlist.venue.name;
        const tour = setlist.tour.name;
        const url = setlist.url;
        const sets = setlist.sets.set;
    
        const html = /*html*/ `         
            <li id="${date}" class="show">
                <section class="show-info">
                    <h3>${venue}</h3>
                    <p>Date: <span>${date}</span></p>
                    <p>Tour: <span>${tour}</span></p>
                    <p> <a href=${url}>Setlist.fm</a></p>
                </section>
                <section class="sets">
                ${sets.map(set => {
                    return /*html*/ `
                        <ul class="set-detail">
                            <p class="set-number">${set.name}</p>
                            ${set.song.map(song => {
                                return /*html*/ `
                                    <li>${song.name}</li>
                                `;
                            }).join('')}
                        </ul>
                    `; 
                }).join('')}
                </section>
            </li>
        `;
        const ul = document.getElementById('setlist-display');
        const template = document.createElement('template');
        template.innerHTML = html;
        const dom = template.content;
        ul.appendChild(dom);
    });
}
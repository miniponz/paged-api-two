export default function makeSetlistTemplateHeader(setlists) {
    const setlist = setlists.setlist;

    setlist.forEach(setlist => {
        const date = setlist.eventDate;
        const venue = setlist.venue.name;
        const tour = setlist.tour.name;
        const url = setlist.url;
        const sets = setlist.sets.set;
    
        const html = /*html*/ `         
            <li id="${date}" class="show-info">
                <p>Date: <span>${date}</span></p>
                <p>Venue: <span>${venue}</span></p>
                <p>Tour: <span>${tour}</span></p>
                <p> <a href=${url}>Setlist:</a></p>
                ${sets.map(set => {
                    return /*html*/ `
                        <ul>
                            <p class="set-number">${set.name}</p>
                            ${set.song.map(song => {
                                return /*html*/ `
                                    <li>${song.name}</li>
                                `;
                            }).join('')}
                        </ul>
                    `;
                }).join('')}
            </li>
        `;
        const ul = document.getElementById('setlist-display');
        const template = document.createElement('template');
        template.innerHTML = html;
        const dom = template.content;
        ul.appendChild(dom);
    });
}
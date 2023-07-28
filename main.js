
(function(){

    window.addEventListener("load", () => {
        let party = make_party(units, 5)
        
        let content_dom = document.querySelector("#content")
        let title_dom = document.createElement("div")
        title_dom.classList = "title"
        title_dom.innerText = "Party and Restrictions"
        content_dom.append(title_dom)
        party.map(unit => {
            let unit_dom = document.createElement("div")
            unit_dom.classList = "unit"
            let unit_name_dom = document.createElement("div")
            unit_name_dom.classList = "unit_name"
            unit_name_dom.innerText = unit.name
            unit_dom.append(unit_name_dom)
            let unit_build_dom = document.createElement("div")
            unit_build_dom.classList = "unit_build"
            unit_build_dom.innerText = `${unit.job} / ${unit.action}`
            unit_dom.append(unit_build_dom)
            let unit_restriction_dom = document.createElement("div")
            unit_restriction_dom.classList = "unit_restriction"
            unit_restriction_dom.innerText = unit.restriction
            unit_dom.append(unit_restriction_dom)
            content_dom.append(unit_dom)
        })
    })

})()


function make_party(units, num) {
    let party = [ units[0] ].concat( shuffle(units.slice(1, units.length)).slice(0, num-1) )
    return party.map(unit => {
        let job_id = shuffle(unit.jobs)[0]
        let job = jobs[job_id].name
        let action_id = shuffle(unit.jobs.filter(x => x != job_id))[0]
        let action = jobs[action_id].action
        let restriction = shuffle(restrictions)[0]
        return { name: unit.name, job: job, action: action, restriction: restriction }
    })
}

function shuffle(xs) {
    const ys = xs.slice();
    for (let i=ys.length-1; i>=0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [ys[i], ys[j]] = [ys[j], ys[i]];
    }
    return ys;
}
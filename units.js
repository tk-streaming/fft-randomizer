const ramza_all_jobs = [ "squire-ramza", "chemist", "knight", "archer", "monk", "oriest", "wizard", "time-mage", "summoner", "thief", "oracle", "mediator", "geomancer", "lancer", "samurai", "ninja", "calculator", "bard", "mime" ]
const male_all_jobs = [ "squire", "chemist", "knight", "archer", "monk", "oriest", "wizard", "time-mage", "summoner", "thief", "oracle", "mediator", "geomancer", "lancer", "samurai", "ninja", "calculator", "bard", "mime" ]
const female_all_jobs = [ "squire", "chemist", "knight", "archer", "monk", "oriest", "wizard", "time-mage", "summoner", "thief", "oracle", "mediator", "geomancer", "lancer", "samurai", "ninja", "calculator", "dancer", "mime" ]

const without_unused_jobs = (xs) => xs.filter(x => x !== "calculator")

const units = [
    {
        /* Do not change!! */
        name: "ラムザ",
        jobs: without_unused_jobs(ramza_all_jobs),
    },
    {
        name: "しげる",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "kyo-ken",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "sphie",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "tomoyo",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "kumasan",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "甚平",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "kazuyasi",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "イキソくん",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "櫻木琳",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "ざくろにうむ",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "moonykn",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "shacoba",
        jobs: without_unused_jobs(female_all_jobs),
    },
    {
        name: "ごーすと。",
        jobs: without_unused_jobs(female_all_jobs),
    },
]






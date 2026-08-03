import type { Chapter } from "./types";
import { CREDIT } from "./types";

export const chapters3: Chapter[] = [
  {
    slug: "civil-war",
    num: "14",
    era: "Civil war",
    dateline: "1918 – 1922",
    title: "Reds, Whites and Greens",
    subtitle: "Four years, a dozen armies, fourteen foreign contingents and a continent of ruin",
    dek: "The Russian Civil War was not one war but many, fought over a landmass spanning eleven time zones, with fronts that moved hundreds of miles in weeks and rear areas ruled by whoever happened to be armed that month.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Russian_civil_war_map_on_December_1919.jpg",
      alt: "Map of the Russian Civil War fronts in December 1919",
      caption: "December 1919: the Red core holding the centre against fronts in every direction.",
      credit: CREDIT,
    },
    facts: [
      { label: "Total deaths", value: "7–12 million" },
      { label: "Red Army peak", value: "≈5 million" },
      { label: "Foreign contingents", value: "14 nations" },
      { label: "Combat deaths share", value: "Under 20% — disease led" },
    ],
    sections: [
      {
        heading: "How the fronts formed",
        body: [
          "The war began in earnest in May 1918 when the Czechoslovak Legion — some forty thousand former prisoners of war strung out along the Trans-Siberian Railway en route to France — clashed with local Soviets and seized the line. Within weeks the entire Volga, Urals and Siberia had passed out of Bolshevik control.",
          "Anti-Bolshevik forces coalesced into three main theatres: Kolchak in Siberia, proclaimed Supreme Ruler at Omsk; Denikin's Armed Forces of South Russia, growing out of the Volunteer Army founded by Kornilov and Alekseev; and Yudenich in the Baltic, who reached the suburbs of Petrograd in October 1919.",
        ],
      },
      {
        heading: "Trotsky's army",
        body: [
          "The Red Army was built from nothing by conscription, by the recruitment of some fifty thousand former imperial officers — the voenspetsy, whose families were held as surety — and by political commissars attached to every unit. Trotsky ran the war from an armoured train that covered over one hundred thousand kilometres, carrying a printing press, a telegraph office, a garage and a tribunal.",
          "The Reds held the centre: Moscow, Petrograd, the arms factories, the population core and the interior railway network. They could shift reserves along interior lines while the Whites, dispersed on the periphery and never once coordinating a simultaneous offensive, could not.",
        ],
        pull: "The Whites held the map's edges. The Reds held the railway junctions — which in Russia is the same as holding the country.",
      },
      {
        heading: "Why the Whites lost",
        body: [
          "Militarily the White armies were often superior formation for formation, with better officers and, for a time, Allied supply. Politically they were incoherent. Denikin's slogan of \"Russia One and Indivisible\" guaranteed war with the Poles, Ukrainians, Finns and Caucasians who might have been allies. Their land policy returned estates to owners, which turned peasants against them the moment they arrived.",
          "Their rear areas were plundered by their own troops and disfigured by pogroms — tens of thousands of Jews were murdered in Ukraine, overwhelmingly by White and allied Ukrainian forces. Where the peasant faced a choice between requisition and restoration, he chose the requisitioners with reluctance and rifles.",
        ],
      },
      {
        heading: "The Greens and the Blacks",
        body: [
          "Between the two main colours were the Greens — peasant bands resisting conscription and requisition from every side — and the anarchist Black Army of Nestor Makhno in southern Ukraine, which fielded tens of thousands, invented the machine-gun-carrying tachanka as a mobile arm, allied with the Reds twice and was destroyed by them once its usefulness ended.",
          "The Tambov rebellion of 1920–21 mobilised perhaps fifty thousand peasants and was suppressed by Tukhachevsky with hostage-taking, concentration camps and, by written order, poison gas.",
        ],
      },
      {
        heading: "The cost",
        body: [
          "Estimates of total deaths range from seven to twelve million, the overwhelming majority civilian and the largest share from typhus, typhoid, cholera and starvation rather than combat. Industrial output in 1921 stood at roughly a fifth of the 1913 level; Petrograd lost around two-thirds of its population as workers walked back to the villages to eat.",
          "Some two million people emigrated — the officer corps, much of the professional class, and a generation of writers, scientists and musicians who rebuilt their lives in Paris, Berlin, Harbin and New York.",
        ],
        pull: "The Bolsheviks won a country that had, in the process of being won, largely stopped working.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/The_defense_of_Petrograd_1919.jpg",
        alt: "The defence of Petrograd against Yudenich's advance in 1919",
        caption: "The defence of Petrograd, October 1919 — Yudenich reached the Pulkovo Heights.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Russian_Civil_War_posters.jpg/1920px-Russian_Civil_War_posters.jpg",
        alt: "A wall of Russian Civil War propaganda posters",
        caption: "Agitprop at industrial scale: the Reds out-published every rival.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Alexander Kolchak", role: "Supreme Ruler, Omsk", note: "Polar explorer and admiral; shot at Irkutsk, February 1920." },
      { name: "Anton Denikin", role: "Commander, South Russia", note: "Came within 400 km of Moscow in October 1919." },
      { name: "Nestor Makhno", role: "Anarchist commander", note: "Died of tuberculosis in Paris, 1934." },
    ],
    legacy:
      "The party that emerged in 1922 was shaped by the war it had just fought: militarised, centralised, suspicious, and convinced that force worked because for four years it had.",
  },
  {
    slug: "red-terror",
    num: "15",
    era: "Civil war",
    dateline: "1918 – 1922",
    title: "The Cheka and the Terror",
    subtitle: "An emergency commission with no code of law, no appeal and unlimited jurisdiction",
    dek: "Founded six weeks after October as a temporary body, the Cheka became the permanent institution of the new state — and the model for every Soviet security service that followed it.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/%D0%A4%D0%B5%D0%BB%D0%B8%D0%BA%D1%81_%D0%94%D0%B7%D0%B5%D1%80%D0%B6%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D1%80%D0%B5%D0%B4%D0%B8_%D1%81%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2_%D0%92%D0%A7%D0%9A_%281918%29.jpg",
      alt: "Felix Dzerzhinsky photographed among Cheka staff in 1918",
      caption: "Dzerzhinsky among Cheka officers, 1918.",
      credit: CREDIT,
    },
    facts: [
      { label: "Founded", value: "20 Dec 1917" },
      { label: "Staff, 1917", value: "≈40" },
      { label: "Staff, 1921", value: "≈280,000" },
      { label: "Executions, 1918–22", value: "100,000 – 200,000 (est.)" },
    ],
    sections: [
      {
        heading: "An emergency that never ended",
        body: [
          "The All-Russian Extraordinary Commission for Combating Counter-Revolution and Sabotage — VChK, the Cheka — was created on 20 December 1917 under Felix Dzerzhinsky, a Polish revolutionary who had spent eleven years in tsarist prisons and exile. Its founding remit was investigation; within months it had powers of summary execution.",
          "It was extra-judicial by design. There was no procedural code, no defence, no appeal and, after September 1918, an explicit doctrine of class-based guilt: the question asked of a prisoner was not what he had done but what he was.",
        ],
        pull: "\"We stand for organised terror — this should be frankly stated.\" — Felix Dzerzhinsky, 1918",
      },
      {
        heading: "September 1918",
        body: [
          "On 30 August 1918 the Petrograd Cheka chief Moisei Uritsky was assassinated and Fanny Kaplan shot Lenin twice as he left a Moscow factory. He survived; the response was the formal decree of Red Terror on 5 September.",
          "Hostage-taking became policy. Executions were published in Izvestia and Pravda as lists — former officers, priests, landowners, industrialists, Kadets — often shot in reprisal for events they had no connection with. In Petrograd over five hundred hostages were killed in a matter of days.",
        ],
      },
      {
        heading: "Method and scale",
        body: [
          "Local Chekas operated with wide autonomy and considerable variation in brutality; the Kiev, Odessa and Kharkov commissions acquired particular reputations. The first camps of the concentration system opened in 1918, and by 1921 the network held tens of thousands.",
          "Historians' estimates of executions between 1918 and 1922 generally run from roughly one hundred thousand to two hundred thousand, with far larger numbers dying in camps, prisons and suppressed rural risings. A White Terror also existed and killed on a large scale, particularly in Ukraine and Siberia, but it was decentralised and improvised rather than institutionalised.",
        ],
      },
      {
        heading: "The institution outlives the emergency",
        body: [
          "In 1922 the Cheka was reorganised as the GPU and then the OGPU, then absorbed into the NKVD in 1934. The lineage runs unbroken through the MGB and the KGB. The men trained in 1918 to shoot class enemies without trial staffed the apparatus that carried out the purges twenty years later — and, in many cases, were killed by it.",
          "The deeper legacy is conceptual: the idea that a category of person can be guilty by belonging, and that a state may suspend law indefinitely in defence of a revolution. That idea, once institutionalised, proved impossible to retire.",
        ],
        pull: "The Cheka was created for weeks. Its descendants outlived the state that made it.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/19180902-red_terror-banner.jpg",
        alt: "Banner announcing the Red Terror, September 1918",
        caption: "The terror announced in public: a banner of September 1918.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Felix_Edmundovich_Dzerzhinsky_1919.jpg",
        alt: "Portrait of Felix Dzerzhinsky in 1919",
        caption: "\"Iron Felix\", 1919 — ascetic, incorruptible, implacable.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Felix Dzerzhinsky", role: "Chairman of the Cheka", note: "Lived in his office; died of a heart attack mid-speech, 1926." },
      { name: "Fanny Kaplan", role: "SR assassin", note: "Shot Lenin on 30 August 1918; executed four days later." },
    ],
    legacy:
      "Every subsequent Soviet security organ traced its founding to December 1917. So did the assumption that opposition is a crime rather than a position.",
  },
  {
    slug: "romanovs",
    num: "16",
    era: "Civil war",
    dateline: "Mar 1917 – Jul 1918",
    title: "The Fate of the Romanovs",
    subtitle: "Sixteen months from palace to cellar: Tsarskoye Selo, Tobolsk, Ekaterinburg",
    dek: "The former imperial family were moved steadily eastward, away from rescue and toward the advancing civil war, until on a July night in a merchant's basement the dynasty was ended by eleven men with revolvers.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Ipat%27jev_Haus.jpg",
      alt: "The Ipatiev House in Ekaterinburg where the Romanov family was held",
      caption: "The Ipatiev House, Ekaterinburg — the \"House of Special Purpose\".",
      credit: CREDIT,
    },
    facts: [
      { label: "Arrested", value: "8 March 1917" },
      { label: "Moved to Tobolsk", value: "Aug 1917" },
      { label: "Killed", value: "Night of 16–17 Jul 1918" },
      { label: "Victims", value: "7 family, 4 retainers" },
    ],
    sections: [
      {
        heading: "House arrest at Tsarskoye Selo",
        body: [
          "The family spent the spring and summer of 1917 confined to the Alexander Palace, gardening, sawing wood and giving lessons to the children. Kerensky visited and came away describing Nicholas as a man of considerable charm and no political sense whatever.",
          "Plans to send them to Britain foundered. George V, Nicholas's first cousin and near double, withdrew the offer of asylum on the advice of his private secretary, fearing that hosting the autocrat would inflame British opinion during a war and a domestic labour crisis.",
        ],
      },
      {
        heading: "Tobolsk",
        body: [
          "In August the Provisional Government moved the family to Tobolsk in western Siberia, partly for their safety from the radicalising capital. They lived in the former governor's house for eight months in reduced but bearable conditions, still with servants, still writing diaries about the weather.",
          "After October the guards grew harsher and the rations poorer. Loyalist rescue schemes circulated in monarchist circles; none of them ever amounted to more than correspondence and a few hopeful officers.",
        ],
      },
      {
        heading: "The House of Special Purpose",
        body: [
          "In April 1918 the family was transferred to Ekaterinburg in the Urals, to a requisitioned merchant's house whose windows were whitewashed and fenced. The Ural Regional Soviet, notably harder-line than Moscow, held custody.",
          "By July the Czechoslovak Legion and White forces were closing on the city. A rescued Tsar would have been a banner for the White cause. The decision to execute was taken locally, with Moscow's knowledge — the precise chain of authorisation remains debated, though Lenin's approval is generally accepted by historians.",
        ],
        pull: "Alive, the family was a prisoner. Rescued, they were a cause. The war made the decision before the men in the cellar did.",
      },
      {
        heading: "The cellar",
        body: [
          "Shortly after midnight on 17 July the family, their doctor, cook, valet and maid were woken and taken to a basement room on the pretext of a photograph. Yakov Yurovsky read a short sentence and the shooting began. It went badly: jewels sewn into the daughters' corsets deflected bullets, the room filled with smoke, and bayonets were used to finish it.",
          "The bodies were taken to the Koptyaki forest, mutilated, burned in part and buried in two separate places. The site of the main grave was located in 1979 but kept secret until 1991; the remains of Alexei and one sister were found nearby in 2007. The family was canonised by the Russian Orthodox Church in 2000.",
        ],
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Russian_imperial_family_%28Romanov%2C_Nicholas_II%2C_OT%2C_Alexandrovna%29_-_bathing_-_Livadia-Livadiya%2C_1913_%282_of_6%29.jpg/1920px-Russian_imperial_family_%28Romanov%2C_Nicholas_II%2C_OT%2C_Alexandrovna%29_-_bathing_-_Livadia-Livadiya%2C_1913_%282_of_6%29.jpg",
        alt: "The Romanov family at the seaside in Livadia, 1913",
        caption: "Livadia, 1913. Five years later none of them were alive.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/47/%D0%9E%D1%82%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%8F_II.jpg",
        alt: "Illustration of the abdication of Nicholas II",
        caption: "The abdication that began the family's captivity.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Yakov Yurovsky", role: "Commandant, Ipatiev House", note: "Wrote a detailed account of the killings in 1922." },
      { name: "Grand Duchess Anastasia", role: "Youngest daughter", note: "Subject of impostors for eighty years; DNA closed the question." },
    ],
    legacy:
      "The killing of the children was the point at which the revolution announced that it recognised no category of innocence — and it gave the emigration its enduring martyrdom.",
  },
  {
    slug: "famine",
    num: "17",
    era: "The reckoning",
    dateline: "1921 – 1922",
    title: "War Communism and the Great Famine",
    subtitle: "Grain requisitioning, a drought, and five million dead on the Volga",
    dek: "The policy that won the civil war destroyed the countryside that fed the cities. When drought arrived in 1921 there were no reserves, no incentive to plant and no transport — and the largest famine Europe had seen in a century followed.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Famine_in_Russia_1921.jpg",
      alt: "Victims of the Russian famine of 1921",
      caption: "The Volga famine, 1921 — an estimated five million dead.",
      credit: CREDIT,
    },
    facts: [
      { label: "Deaths", value: "≈5 million" },
      { label: "People affected", value: "≈30 million" },
      { label: "Sown area, 1921", value: "≈62% of 1913" },
      { label: "ARA peak feeding", value: "10.5 million/day" },
    ],
    sections: [
      {
        heading: "War Communism",
        body: [
          "From mid-1918 the regime nationalised industry, abolished private trade, militarised labour and — the core of the system — took grain from the peasantry by force through prodrazvyorstka, the requisition quota. Armed detachments seized what they judged to be surplus, and frequently more.",
          "It worked as a mechanism for feeding the Red Army and the cities during the war. It also destroyed the incentive to grow anything beyond subsistence. Peasants planted less, hid what they had, and by 1920 the sown area had contracted sharply across the grain regions.",
        ],
        pull: "A system designed to extract grain taught the countryside to stop producing it.",
      },
      {
        heading: "The drought",
        body: [
          "The 1921 harvest failed across the Volga, the southern Urals and parts of Ukraine and Kazakhstan. In a normal decade the shortfall would have been buffered by carry-over stocks, private trade and rail distribution. All three had been eliminated.",
          "What followed was catastrophe on a scale that the state could neither conceal nor manage: some thirty million people affected, whole villages emptying, refugee columns on the roads to the cities, and documented cases of cannibalism reported by Soviet officials themselves.",
        ],
      },
      {
        heading: "Foreign relief",
        body: [
          "In July 1921 Maxim Gorky appealed publicly to the world. Herbert Hoover's American Relief Administration responded and, at its peak in mid-1922, was feeding around ten and a half million people a day. The Nansen mission and Quaker organisations added to the effort.",
          "The regime accepted the help and distrusted it thoroughly, watching ARA staff closely and, controversially, exporting some grain even while relief operated. It also used the crisis: a 1922 campaign to confiscate church valuables for famine relief doubled as an assault on the Orthodox Church's institutional independence.",
        ],
      },
      {
        heading: "The retreat: the New Economic Policy",
        body: [
          "In March 1921, before the famine peaked, Lenin announced the New Economic Policy: requisition replaced by a fixed tax in kind, private trade legalised, small enterprise returned to private hands, with the state retaining the \"commanding heights\" of heavy industry, banking and foreign trade.",
          "Recovery was fast. By 1926 agricultural and industrial output had roughly regained pre-war levels. Within the party the NEP was always contested as a betrayal — Lenin himself called it a retreat — and its abolition in 1928 in favour of forced collectivisation set the stage for a second, deliberate famine six years later.",
        ],
        pull: "The NEP proved the economy could recover quickly. That was precisely the argument the party would not accept in 1928.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Children_during_famine_in_Russia.png",
        alt: "Starving children during the Russian famine of 1921",
        caption: "Children of the Volga, 1921. Orphan bands roamed the cities for a decade after.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/1921-Famine-map.jpg/1920px-1921-Famine-map.jpg",
        alt: "Map of the areas affected by the Russian famine of 1921",
        caption: "The affected zone: the Volga basin, southern Urals and parts of Ukraine.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Herbert Hoover", role: "Director, ARA", note: "Fed millions of Soviet citizens eight years before the White House." },
      { name: "Fridtjof Nansen", role: "Relief commissioner", note: "Awarded the Nobel Peace Prize in 1922 for this work." },
    ],
    legacy:
      "The famine settled the argument between ideology and supply for exactly seven years. Then the argument was reopened, and answered the other way.",
  },
  {
    slug: "kronstadt",
    num: "18",
    era: "The reckoning",
    dateline: "1 – 18 March 1921",
    title: "Kronstadt",
    subtitle: "The sailors who made the revolution demanded it back, and were shot across the ice",
    dek: "In March 1921 the garrison of the Kronstadt naval fortress — the \"pride and glory of the revolution\" in Trotsky's own phrase — rose against the government it had installed, demanding free soviets, free speech and an end to requisitioning.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Kronstadt_attack.JPG",
      alt: "Red Army troops attacking Kronstadt across the frozen Gulf of Finland, March 1921",
      caption: "The assault across the ice, March 1921.",
      credit: CREDIT,
    },
    facts: [
      { label: "Petropavlovsk resolution", value: "28 Feb 1921" },
      { label: "Rebels", value: "≈15,000" },
      { label: "Assault force", value: "≈50,000" },
      { label: "Executions after", value: "Over 2,000" },
    ],
    sections: [
      {
        heading: "The winter of the strikes",
        body: [
          "By early 1921 Petrograd was starving and cold. Factories closed for lack of fuel, rations were cut again, and workers struck across the Vyborg and Vasilievsky districts. Martial law was declared and troops deployed against the very districts that had made February.",
          "Delegations of Kronstadt sailors crossed to the city to see for themselves. They came back with an account of workers being dispersed at gunpoint by a government that spoke in their name.",
        ],
      },
      {
        heading: "The Petropavlovsk resolution",
        body: [
          "On 28 February the crews of the battleships Petropavlovsk and Sevastopol adopted a fifteen-point resolution: new soviet elections by secret ballot; freedom of speech and press for workers, peasants, anarchists and left socialist parties; the release of socialist political prisoners; abolition of the political departments and of Communist combat detachments in the armed forces; an end to requisition detachments; and the right of peasants to work their own land.",
          "It was not a counter-revolutionary programme. It was the programme of 1917, quoted back at the party that had campaigned on it.",
        ],
        pull: "\"All power to the soviets, and not to parties.\" The slogan of 1917, aimed in 1921 at the party that had used it.",
      },
      {
        heading: "The assault",
        body: [
          "The government declared the rising a White plot orchestrated from abroad. Trotsky issued an ultimatum; Tukhachevsky was given command. The first assault across the ice on 8 March failed with heavy losses, some units refusing to advance.",
          "The second, on 16–17 March, went in with fifty thousand men, many of them delegates diverted from the Tenth Party Congress meeting in Moscow, wearing white camouflage and crossing under artillery fire on ice that was beginning to break. Kronstadt fell after a day and night of street fighting. Around eight thousand rebels escaped across the ice to Finland; over two thousand of those captured were executed and thousands more sent to camps.",
        ],
      },
      {
        heading: "The Tenth Congress",
        body: [
          "The Congress that dispatched the troops did two other things in the same week. It adopted the New Economic Policy, granting the economic substance of the Kronstadt demands. And it passed the ban on factions, forbidding organised groupings inside the party — surrendering the political substance of them permanently.",
          "That combination defined the Soviet Union that followed: economic flexibility when necessity demanded it, political monopoly under all circumstances.",
        ],
        pull: "The rebels' economic demands were granted within the week. Their political demands were answered with artillery.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/42/Red_Army_evacuation_of_wounded_during_Kronstadt_rebellion.png",
        alt: "Red Army troops evacuating wounded during the Kronstadt rebellion",
        caption: "Evacuating wounded from the ice.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/19170300-funeral_victims_february_revolution_naval_cathedral_kronstadt.jpg",
        alt: "Funeral for victims of the February Revolution at the naval cathedral in Kronstadt, 1917",
        caption: "Kronstadt in 1917, burying the dead of February — four years before its own suppression.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Stepan Petrichenko", role: "Rebel spokesman", note: "Escaped to Finland; died in Soviet custody in 1947." },
      { name: "Mikhail Tukhachevsky", role: "Commander of the assault", note: "Shot in Stalin's purge of the army, 1937." },
    ],
    legacy:
      "For many socialists abroad, Kronstadt was the moment the Russian Revolution stopped being theirs. Emma Goldman and Alexander Berkman left the country because of it.",
  },
  {
    slug: "ussr",
    num: "19",
    era: "The reckoning",
    dateline: "1922 – 1924",
    title: "The Union and the Succession",
    subtitle: "A federation on paper, a party in fact, and a dying man's warning nobody published",
    dek: "In December 1922 the Union of Soviet Socialist Republics was declared. Within a year its founder was incapacitated, his testament suppressed, and the general secretary he had asked the party to remove was assembling the machinery that would rule for three decades.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/31/Vladimir_Lenin_at_the_First_Congress_of_the_Comintern%2C_Moscow%2C_Kremlin.jpg",
      alt: "Lenin at the First Congress of the Communist International in the Kremlin",
      caption: "Lenin at the First Comintern Congress — world revolution as state policy.",
      credit: CREDIT,
    },
    facts: [
      { label: "USSR declared", value: "30 Dec 1922" },
      { label: "Founding republics", value: "4" },
      { label: "Lenin's first stroke", value: "May 1922" },
      { label: "Lenin died", value: "21 Jan 1924" },
    ],
    sections: [
      {
        heading: "Building the Union",
        body: [
          "The treaty of 30 December 1922 joined the Russian, Ukrainian, Belorussian and Transcaucasian republics into a federal union with the formal right of secession. Stalin, as Commissar for Nationalities, had proposed instead that the republics simply be absorbed into Russia as autonomous regions — \"autonomisation\".",
          "Lenin, from his sickbed, fought him on it, insisting on formal equality and denouncing what he called Great Russian chauvinism after Stalin's ally Ordzhonikidze struck a Georgian communist during the dispute. Lenin won the constitutional form and lost the substance: the union republics were sovereign on paper and the party that governed all of them was not federal at all.",
        ],
        pull: "The federation was real in the constitution and irrelevant in the party rulebook. The party was the state.",
      },
      {
        heading: "The strokes",
        body: [
          "Lenin suffered his first stroke in May 1922, a second in December and a third in March 1923 that took away his speech. He was fifty-two. The bullet lodged near his neck since 1918 and the sheer workload of the civil war years are commonly cited; arteriosclerosis was the finding at autopsy.",
          "Between the strokes he dictated a series of notes, later called the Testament, assessing his colleagues. Trotsky was the ablest man in the Central Committee but excessively self-assured. Bukharin was the party's favourite but not fully a Marxist theorist. And Stalin, having concentrated unlimited power as general secretary, was too rude for the post: Lenin proposed the comrades find a way of removing him.",
        ],
      },
      {
        heading: "The Testament suppressed",
        body: [
          "The document was read to a restricted group at the Thirteenth Party Congress in May 1924 and not published. Zinoviev and Kamenev, allied with Stalin at the time against Trotsky, argued that the criticism had been overtaken by events. It was not printed in the Soviet Union until 1956.",
          "Trotsky, the obvious successor by reputation, was outmanoeuvred by procedure rather than argument. Stalin controlled appointments; the triumvirate controlled the agenda; and the ban on factions passed at Kronstadt's congress made organised opposition inside the party a disciplinary offence.",
        ],
      },
      {
        heading: "The funeral and the cult",
        body: [
          "Lenin died on 21 January 1924. Against the wishes of his widow, Krupskaya, his body was embalmed and placed on display in a mausoleum on Red Square. Petrograd — already renamed from St Petersburg in 1914 — became Leningrad.",
          "Stalin delivered a liturgical oath at the funeral and inaugurated the Lenin Levy, enrolling hundreds of thousands of new members who owed their positions to the apparatus. By 1929 Trotsky was in exile, the NEP was being dismantled, and collectivisation and the Five-Year Plans were about to remake the country a second time.",
        ],
        pull: "The revolution had promised the withering away of the state. It produced one of the most powerful states in history.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Chervonetz_1922.jpg",
        alt: "A Soviet chervonets banknote of 1922",
        caption: "The 1922 chervonets — a gold-backed currency that ended hyperinflation under the NEP.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/NEP_Soviet_Postcard_1920s.JPG",
        alt: "Soviet postcard from the New Economic Policy period in the 1920s",
        caption: "NEP-era commercial life: private trade, briefly legal again.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/7/71/Delegates_at_the_First_Congress_of_the_Communist_International%2C_1919.jpg",
        alt: "Delegates at the First Congress of the Communist International in 1919",
        caption: "Comintern delegates, 1919: the revolution was supposed to be the first of many.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Joseph Stalin", role: "General Secretary from 1922", note: "Won by controlling the card index, not the platform." },
      { name: "Nadezhda Krupskaya", role: "Lenin's widow", note: "Fought to have the Testament published; failed." },
    ],
    legacy:
      "Seven years separate the bread queues of February 1917 from the mausoleum on Red Square. Almost everything the twentieth century became in the East was decided in that interval.",
  },
];

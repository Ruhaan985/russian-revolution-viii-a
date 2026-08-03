import type { Chapter } from "./types";
import { CREDIT } from "./types";

export const chapters2: Chapter[] = [
  {
    slug: "july-days",
    num: "08",
    era: "The long spring",
    dateline: "3 – 7 July 1917",
    title: "The July Days",
    subtitle: "A premature rising, a hail of accusations, and Lenin in a haystack",
    dek: "For four days in July armed sailors, soldiers and workers filled Petrograd demanding that the Soviet take power. The Soviet refused, the government struck back, and the Bolsheviks came closer to destruction than at any other moment of 1917.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Iyul%27skaya_1917_demonstraciya_v_Petrograde.jpg/1920px-Iyul%27skaya_1917_demonstraciya_v_Petrograde.jpg",
      alt: "Mass demonstration in Petrograd during the July Days of 1917",
      caption: "Petrograd, July 1917: half a million people in the streets with no agreed destination.",
      credit: CREDIT,
    },
    facts: [
      { label: "Trigger", value: "Collapse of the June offensive" },
      { label: "Demonstrators", value: "≈500,000" },
      { label: "Deaths", value: "≈400" },
      { label: "Outcome", value: "Bolshevik leaders arrested or in hiding" },
    ],
    sections: [
      {
        heading: "The machine-gunners decide",
        body: [
          "The spark was the First Machine Gun Regiment, which learned it was to be broken up and sent to the front. On 3 July it voted to demonstrate under arms. The Kronstadt sailors joined the next morning, twenty thousand of them crossing to the capital in barges and steamers.",
          "The Bolshevik Central Committee was split and behind events. Lenin, resting in Finland, hurried back and delivered a deliberately non-committal speech from the balcony of the Kshesinskaya Mansion. The crowd wanted an order to seize power. He would not give one.",
        ],
        pull: "The crowd came to the Soviet's door and shouted: take power, you son of a bitch, when it is handed to you.",
      },
      {
        heading: "Take the power",
        body: [
          "At the Tauride Palace the demonstrators surrounded the Soviet leaders. Victor Chernov, the Socialist Revolutionary agriculture minister, went out to reason with them and was nearly lynched; Trotsky pulled him from a car and talked the sailors down.",
          "The moderate socialists still would not take power. Their reasoning was doctrinally consistent — Russia was not ready for socialism, and a soviet government would mean civil war — and politically suicidal. They summoned loyal troops from the front instead.",
        ],
      },
      {
        heading: "German gold",
        body: [
          "On 4 July the government released documents alleging that Lenin was a paid German agent. The evidence was thin and partly fabricated, but the sealed train made it plausible, and the mood turned instantly. Pravda's offices were wrecked, the Kshesinskaya Mansion was retaken, and hundreds of Bolsheviks were arrested — Trotsky and Kamenev among them.",
          "Lenin shaved his beard, wore a wig, and escaped first to the Petrograd suburbs and then across the Finnish border, hiding for a period in a haystack near Razliv. He spent the crucial months of August and September writing, out of the country, sending increasingly furious letters to a Central Committee he could not attend.",
        ],
      },
      {
        heading: "Kerensky ascendant",
        body: [
          "Prince Lvov resigned. Kerensky became prime minister on 8 July, reinstated the death penalty at the front, and appeared for a few weeks to be the strong man Russia had been waiting for.",
          "The July Days had shown the Bolsheviks that they could not act ahead of the majority, and shown the moderate socialists that they would not act at all. Both lessons were applied in October, with opposite results.",
        ],
        pull: "In July the Bolsheviks moved too early and nearly died. Lenin never made the timing error again.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f7/19170704_Riot_on_Nevsky_prosp_Petrograd.jpg",
        alt: "Crowds scattering under fire on Nevsky Prospekt on 4 July 1917",
        caption: "4 July: firing on Nevsky Prospekt scatters the demonstration.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/8/87/Doloy_ministrov-kapitalistov_18_July_1917.jpg",
        alt: "Banner reading 'Down with the capitalist ministers' carried in Petrograd, 1917",
        caption: "\"Down with the ten capitalist ministers\" — the slogan of the summer.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Victor Chernov", role: "SR leader, Minister of Agriculture", note: "Nearly lynched by the crowd he theorised about." },
      { name: "Leon Trotsky", role: "Newly joined Bolshevik", note: "Arrested in July, chaired the Petrograd Soviet by September." },
    ],
    legacy:
      "July was the revolution's false start — and the reason October was planned as a technical operation rather than a mass demonstration.",
  },
  {
    slug: "kornilov",
    num: "09",
    era: "Autumn",
    dateline: "25 – 30 August 1917",
    title: "The Kornilov Affair",
    subtitle: "The general who marched on Petrograd and armed the Bolsheviks by accident",
    dek: "In late August the commander-in-chief moved troops on the capital to restore order. Whether he intended a coup or believed he was acting with the premier's blessing is still argued. The consequence is not: the Provisional Government was left defenceless and the Bolsheviks were rearmed.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/KornilovEnLaConferenciaEstatal19170825.png",
      alt: "General Kornilov carried by supporters at the Moscow State Conference, August 1917",
      caption: "Kornilov at the Moscow State Conference, carried shoulder-high by officers.",
      credit: CREDIT,
    },
    facts: [
      { label: "Commander-in-chief from", value: "19 July 1917" },
      { label: "Force sent", value: "3rd Cavalry Corps" },
      { label: "Shots fired", value: "Effectively none" },
      { label: "Red Guards armed", value: "≈40,000 rifles" },
    ],
    sections: [
      {
        heading: "A Cossack from Siberia",
        body: [
          "Lavr Kornilov was the son of a Siberian Cossack, an intelligence officer, an orientalist who spoke several Central Asian languages, and a man of famous personal courage — he had escaped Austrian captivity in 1916. Kerensky made him commander-in-chief in July precisely because he was popular with the officer corps.",
          "Kornilov's programme was restoration of discipline: the death penalty extended to the rear, militarisation of the railways and war industries, and the disbanding of soldiers' committees. It was a coherent answer to the collapse and it was incompatible with the revolution the government claimed to represent.",
        ],
      },
      {
        heading: "The Lvov muddle",
        body: [
          "The break came through Vladimir Lvov — no relation to the former premier — an unofficial intermediary who told each man what he thought the other wanted to hear. Kerensky came away convinced Kornilov had issued an ultimatum demanding dictatorial powers; Kornilov believed Kerensky had invited him to take them.",
          "On 27 August Kerensky dismissed him. Kornilov refused to stand down, denounced the government as being under German influence, and ordered General Krymov's 3rd Cavalry Corps, including the Caucasian \"Savage Division\", to advance on Petrograd.",
        ],
        pull: "Two men who agreed the revolution was dying destroyed each other over what a third man had said.",
      },
      {
        heading: "Defeated by conversation",
        body: [
          "The advance never arrived. Railway workers tore up track and misrouted trains. Telegraphists refused to relay orders. Delegations of Petrograd Soviet agitators — including Muslim Bolsheviks sent to speak to the Caucasians in their own languages — met the troop trains at the halts and explained what they were being used for. The corps dissolved without a battle.",
          "Krymov shot himself after an interview with Kerensky. Kornilov and his officers, including Denikin, were arrested and held at Bykhov. In November they walked out and rode south to found the Volunteer Army.",
        ],
      },
      {
        heading: "The bill",
        body: [
          "To defend the capital Kerensky had released the imprisoned Bolsheviks and issued weapons to the Red Guards — roughly forty thousand rifles that were never returned. He had also proved to the garrison and the workers that the officer corps would move against them, and that only the Soviet had stopped it.",
          "The political effect was immediate. On 31 August the Petrograd Soviet passed a Bolshevik resolution; on 25 September Trotsky became its chairman. Kerensky's own base evaporated: the right regarded him as a traitor to Kornilov, the left as the man who had nearly delivered them to a general.",
        ],
        pull: "Kornilov failed in five days and handed the Bolsheviks the arms, the argument and the majority.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Kornilov_1917.jpg",
        alt: "Portrait of General Lavr Kornilov in 1917",
        caption: "Lavr Kornilov: \"a lion's heart, the brains of a sheep\", said General Alekseev.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Kornilow_29.08.1917.jpg",
        alt: "Newspaper coverage of General Kornilov, 29 August 1917",
        caption: "The affair as it broke in the press, 29 August 1917.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Lavr Kornilov", role: "Commander-in-chief", note: "Killed by a shell at Ekaterinodar, April 1918." },
      { name: "Alexander Krymov", role: "General, 3rd Cavalry Corps", note: "Shot himself on 31 August 1917." },
    ],
    legacy:
      "The last serious attempt to stop the revolution from the right guaranteed its victory from the left within nine weeks.",
  },
  {
    slug: "october",
    num: "10",
    era: "October",
    dateline: "24 – 26 October 1917",
    title: "The October Insurrection",
    subtitle: "Not a storming but a takeover: bridges, telegraph, stations, and a cabinet arrested at 2 a.m.",
    dek: "The Bolshevik seizure of power was carried out by a committee with a timetable. Trams ran. Restaurants served dinner. By the time most of Petrograd knew what had happened, the Provisional Government was in a cell in the Peter and Paul Fortress.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/First_Red_Guards_in_Petrograd%2C_fall_1917_cropped.jpg/1920px-First_Red_Guards_in_Petrograd%2C_fall_1917_cropped.jpg",
      alt: "Red Guards in Petrograd in the autumn of 1917",
      caption: "Red Guards, autumn 1917 — factory militias armed during the Kornilov panic.",
      credit: CREDIT,
    },
    facts: [
      { label: "Decided", value: "10 Oct, CC vote 10–2" },
      { label: "Operational body", value: "Military Revolutionary Committee" },
      { label: "Casualties in Petrograd", value: "Fewer than 20" },
      { label: "Government arrested", value: "26 Oct, 02:10" },
    ],
    sections: [
      {
        heading: "The vote of 10 October",
        body: [
          "Lenin returned secretly to Petrograd and, at a night meeting in the flat of Galina Flakserman, forced the question. The Central Committee voted ten to two for armed insurrection. The two against — Zinoviev and Kamenev — then published their objection in Maxim Gorky's newspaper, informing the entire country that a rising was planned.",
          "The disclosure changed little, because Kerensky's government had no force capable of preventing it. What it did was give the insurrection cover: the Bolsheviks framed everything that followed as the defence of the Soviet and of the Second Congress of Soviets due to convene on 25 October.",
        ],
        pull: "The insurrection was carried out in the name of the Soviet, on the eve of a congress, by a committee created to defend the city. Legality was the disguise and the weapon.",
      },
      {
        heading: "The Military Revolutionary Committee",
        body: [
          "Formed by the Petrograd Soviet on 9 October, ostensibly to defend the capital against a German advance and a second Kornilov, the MRC under Trotsky's direction sent commissars to every garrison unit and arms depot. Orders from headquarters were now valid only if countersigned.",
          "On 21 October the garrison recognised the MRC as its sole authority. Power had shifted before a shot was fired; what remained was the physical occupation of buildings.",
        ],
      },
      {
        heading: "The night of 24 October",
        body: [
          "Kerensky moved first, closing Bolshevik newspapers on the morning of 24 October and ordering the bridges raised. The MRC reopened the presses under guard and lowered the bridges again. Through the night detachments of Red Guards, Kronstadt sailors and garrison soldiers occupied the telegraph office, the telephone exchange, the state bank, the power stations and the railway terminals.",
          "There was almost no resistance because there was almost nobody to resist. Lenin, still in hiding in the Vyborg district, could bear it no longer, wrapped a bandage round his head as a disguise and made his way by tram to the Smolny Institute.",
        ],
      },
      {
        heading: "26 October: the decrees",
        body: [
          "Kerensky left the city by car in search of loyal troops. The Second Congress of Soviets opened on the evening of the 25th with a Bolshevik and Left SR majority; the Mensheviks and Right SRs walked out in protest, which Trotsky answered with the most quoted sentence of the revolution — that they should go where they belonged, into the dustbin of history.",
          "In the early hours the Congress heard that the Winter Palace had fallen. It then passed the Decree on Peace, calling for an immediate armistice without annexations, and the Decree on Land, abolishing private landownership without compensation — which was, word for word, the Socialist Revolutionary programme, adopted by the Bolsheviks because it was what the villages had already done.",
        ],
        pull: "Peace and land, passed in a single night. The Bolsheviks legalised what the country had taken and claimed the credit.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d3/At_the_gates_of_Smolny_Institute_1.jpg",
        alt: "Armed guards at the gates of the Smolny Institute in Petrograd, 1917",
        caption: "The Smolny Institute — a girls' school turned headquarters of the insurrection.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Yakov_Guminer_-_1917_%281927_poster%29.jpg",
        alt: "Soviet poster commemorating 1917, designed by Yakov Guminer",
        caption: "The event as later mythologised in state poster art.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b4/After_the_capture_of_the_Winter_Palace_26_October_1917.jpg",
        alt: "Scene after the capture of the Winter Palace on 26 October 1917",
        caption: "The morning after: crowds outside the captured Winter Palace.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Leon Trotsky", role: "Chairman, Petrograd Soviet", note: "Ran the insurrection as an administrative timetable." },
      { name: "Vladimir Antonov-Ovseenko", role: "MRC commander", note: "Arrested the cabinet in the Malachite Room." },
    ],
    legacy:
      "October took a capital in a night. Holding a country of 170 million took the next four years and cost several million lives.",
  },
  {
    slug: "winter-palace",
    num: "11",
    era: "October",
    dateline: "25 – 26 October 1917",
    title: "The Winter Palace",
    subtitle: "The most famous storming in history was mostly a slow leak",
    dek: "Eisenstein's massed charge under searchlights is cinema. The reality was a blank round from the cruiser Aurora, a night of defenders quietly going home, and small groups filtering in through unlocked service entrances.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/83/After_the_capture_of_the_Winter_Palace._Petrograd._Morning_on_26_October_1917.jpg",
      alt: "The Winter Palace in Petrograd on the morning of 26 October 1917",
      caption: "Palace Square, morning of 26 October 1917.",
      credit: CREDIT,
    },
    facts: [
      { label: "Defenders at dusk", value: "≈3,000" },
      { label: "Defenders by 2 a.m.", value: "A few hundred" },
      { label: "Aurora's shot", value: "One blank, 21:40" },
      { label: "Attackers killed", value: "6" },
    ],
    sections: [
      {
        heading: "Who was inside",
        body: [
          "The garrison consisted of cadets from the officer schools, a detachment of Cossacks, a bicycle unit and the 1st Petrograd Women's Battalion — the shock unit raised earlier in 1917 as a shaming device to embarrass male soldiers into fighting.",
          "They had no clear command, no rations organised and no prospect of relief. The Cossacks left when they discovered the defence rested largely on women and boys. The bicycle troops left after negotiation. The perimeter shrank hour by hour.",
        ],
      },
      {
        heading: "The Aurora",
        body: [
          "At 21:40 the cruiser Aurora, moored on the Neva, fired a single blank round as the signal for the assault. It broke windows in the palace by concussion and broke the nerve of a good part of the remaining garrison. Live shells later came from the Peter and Paul Fortress, which managed two or three hits on the cornice out of some thirty rounds.",
          "The Fortress had struggled to open fire at all: its guns were found to be unserviceable and its garrison spent much of the evening looking for functioning artillery.",
        ],
        pull: "One blank round, thirty-odd live shells, three hits on a cornice, and a palace of a thousand rooms with unlocked doors.",
      },
      {
        heading: "Entry",
        body: [
          "Attackers found their way in through the Hermitage service entrances and from the Neva embankment side. Many were disarmed and taken prisoner by defenders, then released; others simply mingled. By the small hours the interior held both sides in confused proximity.",
          "At about 2:10 a.m. on 26 October, Antonov-Ovseenko entered the Malachite Room and announced the arrest of the Provisional Government. The ministers, who had spent the night drafting appeals nobody would deliver, were escorted across the frozen square to the Peter and Paul Fortress.",
        ],
      },
      {
        heading: "The myth and the making of it",
        body: [
          "In 1920 the third anniversary was marked by a mass re-enactment in Palace Square with ten thousand participants, searchlights and an orchestra — an event more spectacular than the original. Eisenstein's October (1927) drew on that pageant, and its footage has been used as documentary ever since.",
          "The real significance is not the drama but the ease. The Provisional Government fell because by 25 October nobody in Petrograd was prepared to die for it, and everybody with a rifle knew it.",
        ],
        pull: "More people were injured filming the storming in 1927 than taking the palace in 1917.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Guardias_Rojos_junto_al_palacio_de_invierno%2C_oto%C3%B1o_de_1917.jpg/1920px-Guardias_Rojos_junto_al_palacio_de_invierno%2C_oto%C3%B1o_de_1917.jpg",
        alt: "Red Guards outside the Winter Palace in autumn 1917",
        caption: "Red Guards outside the palace in the days after the takeover.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Cruiser_Aurora_in_Reval_1908.jpg/1920px-Cruiser_Aurora_in_Reval_1908.jpg",
        alt: "The Russian cruiser Aurora photographed at Reval in 1908",
        caption: "The cruiser Aurora, whose single blank round became a national symbol.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Maria Bochkareva", role: "Founder, Women's Battalion", note: "Executed by the Cheka in 1920." },
      { name: "Nikolai Kishkin", role: "Minister, palace defence", note: "Given plenary powers over a defence that no longer existed." },
    ],
    legacy:
      "The storming of the Winter Palace is the founding image of the twentieth century's largest state — and the most heavily edited event in its history.",
  },
  {
    slug: "constituent-assembly",
    num: "12",
    era: "Consolidation",
    dateline: "Nov 1917 – Jan 1918",
    title: "The Assembly That Met Once",
    subtitle: "Russia's first free national election, and the thirteen hours its parliament was allowed to sit",
    dek: "In November 1917 forty-four million Russians voted in the freest election the country would see for seventy-four years. The Bolsheviks came second. The Assembly convened on 5 January 1918 and was dispersed before the following dawn.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Red_Guards_checking_documents.jpg",
      alt: "Red Guards checking documents on a Petrograd street",
      caption: "Red Guards checking papers — the new order's routine instrument.",
      credit: CREDIT,
    },
    facts: [
      { label: "Votes cast", value: "≈44 million" },
      { label: "SR seats", value: "≈380" },
      { label: "Bolshevik seats", value: "≈180 (24%)" },
      { label: "Session length", value: "≈13 hours" },
    ],
    sections: [
      {
        heading: "The election the Bolsheviks allowed",
        body: [
          "The Constituent Assembly had been promised by every party since February, and the Bolsheviks had attacked the Provisional Government relentlessly for delaying it. Cancelling the election after October was therefore impossible; it went ahead on 12 November under universal suffrage including women, which made it one of the most democratic franchises then existing anywhere.",
          "The Socialist Revolutionaries took around forty per cent, the Bolsheviks around twenty-four, with the rest split among Kadets, nationalities parties and Mensheviks. The Bolsheviks dominated the cities, the garrisons and the northern and western fronts. The SRs dominated the villages — that is, the country.",
        ],
        pull: "The Bolsheviks won Petrograd, Moscow and the army nearest the capital. The SRs won Russia.",
      },
      {
        heading: "A theory for losing",
        body: [
          "Lenin's answer was published within weeks: the Assembly represented a stage the revolution had passed. Its party lists had been drawn up before the Left SRs split from the Right SRs, so the ballot misrepresented peasant opinion. A republic of soviets was, he argued, a higher form of democracy than a bourgeois parliament.",
          "Behind the theory was arithmetic. A parliament in which the Bolsheviks held a quarter of the seats would have replaced Sovnarkom with a coalition government. Nothing in Lenin's conception of the period allowed for that.",
        ],
      },
      {
        heading: "5 January 1918",
        body: [
          "Demonstrators marching in support of the Assembly were fired on in Petrograd; several were killed. Inside the Tauride Palace, sailors of the Baltic Fleet lined the galleries, some drunk, playing with the bolts of their rifles.",
          "The Assembly elected the SR leader Victor Chernov as chairman over the Bolshevik candidate, then refused to endorse Soviet decrees as its first order of business. The Bolsheviks walked out, followed by the Left SRs. At around four in the morning the commander of the guard, the anarchist sailor Anatoly Zheleznyakov, approached Chernov and said the guard was tired and it was time to leave.",
        ],
      },
      {
        heading: "After the doors were locked",
        body: [
          "Deputies returning the next day found the palace closed and guarded. The Central Executive Committee formally dissolved the Assembly. Some SR deputies later reassembled at Samara under the protection of the Czechoslovak Legion as the Komuch, which became one of the first anti-Bolshevik governments of the civil war.",
          "The dispersal removed the last shared institution capable of arbitrating between the parties of the revolution. From January 1918 the only remaining arbiter was force.",
        ],
        pull: "\"The guard is tired.\" — Anatoly Zheleznyakov, 5 a.m., 6 January 1918",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/31/Advert_in_Zvezda_24_Nov_1917_issue_for_List_2_%28Bolsheviks%29_in_Estonia_constituency_for_Russian_Constituent_Assembly_election.png",
        alt: "Newspaper advertisement for the Bolshevik list in the Constituent Assembly election, November 1917",
        caption: "Campaign advertising for List 2 — the Bolsheviks — November 1917.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/da/Leon_Trotsky_1918.jpg",
        alt: "Leon Trotsky photographed in 1918",
        caption: "Trotsky in 1918, moving from foreign affairs to the Red Army.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Victor Chernov", role: "Chairman for one night", note: "Led the largest party in Russia into irrelevance." },
      { name: "Anatoly Zheleznyakov", role: "Sailor, guard commander", note: "Killed fighting for the Reds in 1919, aged 24." },
    ],
    legacy:
      "Thirteen hours of parliamentary government stand between the autocracy of 1917 and the single-party state that followed it.",
  },
  {
    slug: "brest-litovsk",
    num: "13",
    era: "Consolidation",
    dateline: "Dec 1917 – Mar 1918",
    title: "Brest-Litovsk",
    subtitle: "The peace that cost a third of the empire — and bought the regime a year",
    dek: "The Bolsheviks had promised immediate peace. Germany named the price: Poland, the Baltics, Finland, Ukraine, the Caucasus borderlands. The party nearly tore itself apart before paying it.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Brest-litovsk-feb-9-1918a.jpg/1920px-Brest-litovsk-feb-9-1918a.jpg",
      alt: "Delegates at the Brest-Litovsk peace negotiations, February 1918",
      caption: "The negotiating table at Brest-Litovsk, February 1918.",
      credit: CREDIT,
    },
    facts: [
      { label: "Signed", value: "3 March 1918" },
      { label: "Territory lost", value: "≈1.3M km²" },
      { label: "Population lost", value: "≈50 million (34%)" },
      { label: "Annulled", value: "13 Nov 1918" },
    ],
    sections: [
      {
        heading: "Neither war nor peace",
        body: [
          "Trotsky led the delegation and used the talks as a platform, publishing the transcripts and the Allies' secret treaties in an attempt to appeal past the German negotiators to the workers of Europe. When the terms proved non-negotiable he produced a formula of his own invention: Russia would declare the war over, demobilise the army, and simply refuse to sign.",
          "General Hoffmann's reply was to resume the advance on 18 February. German troops covered enormous distances in days against no resistance at all — Hoffmann called it \"the most comical war I have ever known\" — taking Minsk, Kiev and Narva and threatening Petrograd itself.",
        ],
        pull: "\"No war, no peace, and no army.\" The Germans tested the formula and it collapsed in five days.",
      },
      {
        heading: "The party at war with itself",
        body: [
          "Lenin argued for signing anything: the revolution needed a breathing space, and a peasant army that had voted for peace with its legs could not be recalled. Bukharin and the Left Communists demanded a revolutionary war, arguing that a socialist state which bargained with imperial Germany forfeited its reason to exist. Trotsky occupied the middle until the middle disappeared.",
          "Lenin threatened resignation to carry the Central Committee. He won by seven votes to four, with four abstentions including Trotsky's — one of the narrowest and most consequential margins in modern history.",
        ],
      },
      {
        heading: "The terms",
        body: [
          "Signed on 3 March 1918, the treaty cost Soviet Russia Poland, Lithuania, Latvia, Estonia, Finland and Ukraine, with the Kars region ceded to the Ottomans. Roughly a third of the empire's population, half of its industrial plant, three-quarters of its coal and iron and a comparable share of its best farmland went with them.",
          "The Left SRs left the government in protest and in July assassinated the German ambassador Mirbach in an attempt to reignite the war, then launched a rising in Moscow. The last coalition partner of the revolution became an enemy of it over a treaty.",
        ],
      },
      {
        heading: "Undone by the armistice",
        body: [
          "Eight months later Germany surrendered in the west and the treaty was annulled. Lenin's gamble had been correct in its own terms: the regime survived the winter, moved the capital to Moscow in March 1918 for safety, and built an army in the time the treaty bought.",
          "But the price was paid twice. Brest-Litovsk gave the anti-Bolshevik movements a patriotic cause — the party that sold Russia to the Germans — and it drew Allied intervention, since the Eastern Front had to be reconstituted somehow. The civil war's shape was set at Brest.",
        ],
        pull: "The treaty lasted 255 days. Its consequences ran through the civil war and into the map of eastern Europe.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Brest-litovsk_treaty.jpg",
        alt: "The signed text of the Treaty of Brest-Litovsk",
        caption: "The signed instrument, 3 March 1918.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/df/Map_Treaty_of_Brest-Litovsk-en.jpg",
        alt: "Map showing the territory ceded by Soviet Russia under the Treaty of Brest-Litovsk",
        caption: "What was signed away: the western third of the former empire.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Nikolai Bukharin", role: "Left Communist", note: "Wanted revolutionary war; lost, and never fully forgave it." },
      { name: "Max Hoffmann", role: "German chief of staff, East", note: "Banged the table with a map and ended the debating." },
    ],
    legacy:
      "Brest-Litovsk was the first demonstration of the regime's governing principle: any concession of territory, principle or ally is acceptable if it keeps the party in power.",
  },
];

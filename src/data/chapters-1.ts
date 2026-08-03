import type { Chapter } from "./types";
import { CREDIT } from "./types";

export const chapters1: Chapter[] = [
  {
    slug: "empire",
    num: "01",
    era: "Before the storm",
    dateline: "1894 – 1914",
    title: "An Empire of Contradictions",
    subtitle: "The Russia that Nicholas II inherited, and the one he refused to see",
    dek: "One-sixth of the world's land surface, one hundred and seventy million subjects, a hundred nationalities, and a political system designed for the seventeenth century. The Russian Empire in 1914 was simultaneously the fastest-industrialising economy in Europe and the last true autocracy on the continent.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Russian_imperial_family_%28Romanov%2C_Nicholas_II%2C_OT%2C_Alexandrovna%29_-_bathing_-_Livadia-Livadiya%2C_1913_%281_of_6%29.jpg/1920px-Russian_imperial_family_%28Romanov%2C_Nicholas_II%2C_OT%2C_Alexandrovna%29_-_bathing_-_Livadia-Livadiya%2C_1913_%281_of_6%29.jpg",
      alt: "The Russian imperial family photographed at Livadia in Crimea in 1913",
      caption: "The imperial family at Livadia, 1913 — the tercentenary year of Romanov rule.",
      credit: CREDIT,
    },
    facts: [
      { label: "Territory", value: "22.4M km²" },
      { label: "Population, 1914", value: "≈170 million" },
      { label: "Literacy rate", value: "≈40%" },
      { label: "Peasant share", value: "80% of subjects" },
    ],
    sections: [
      {
        heading: "The autocrat who did not want the job",
        body: [
          "Nicholas II came to the throne in 1894 at the age of twenty-six, telling a relative that he was not prepared to be Tsar and had never wanted to become one. He never revised the opinion of his office that his tutor Konstantin Pobedonostsev had drilled into him: autocracy was a sacred trust, held from God and owed to no parliament, no press and no people. In 1895 he told a delegation of provincial representatives that hopes of participation in government were \"senseless dreams\".",
          "The machinery beneath him told a different story. Russia's industrial output grew at roughly eight per cent a year in the 1890s. Foreign capital built the mills of Petersburg, the mines of the Donbass and the Trans-Siberian Railway. Cities swelled with first-generation workers who had left the village but not escaped it — men and women who returned home for the harvest and carried urban grievance back to the countryside with them.",
        ],
        pull: "A modern economy was being bolted onto a medieval constitution, and nobody had planned for the join.",
      },
      {
        heading: "The land question that never went away",
        body: [
          "Serfdom had been abolished in 1861, but emancipation came with redemption payments that mortgaged a generation of peasants to the state. Communal land was periodically redistributed by the village mir, which discouraged improvement and kept holdings small. By 1900 the rural population had grown faster than the arable land available to it, and famine years — 1891, 1897, 1901 — recurred with the regularity of weather.",
          "Pyotr Stolypin, prime minister from 1906, understood the danger precisely. His wager was to break the commune and create a class of independent, property-owning farmers with something to lose: \"Give the state twenty years of peace, internal and external, and you will not recognise Russia.\" He was assassinated in a Kiev theatre in 1911, in the presence of the Tsar, and the state got eight years instead of twenty.",
        ],
      },
      {
        heading: "1905: the dress rehearsal",
        body: [
          "On 9 January 1905, a priest named Georgy Gapon led tens of thousands of workers toward the Winter Palace carrying icons, portraits of the Tsar and a petition. Troops fired on them. Bloody Sunday killed perhaps two hundred people and something less tangible but more important: the belief that the Tsar was a benevolent father misled by wicked officials.",
          "What followed was a year of strikes, mutinies — including the battleship Potemkin — and peasant risings. In October the first Petersburg Soviet of Workers' Deputies appeared, an improvised council of factory delegates chaired for a time by a young Leon Trotsky. The regime survived by conceding a parliament, the Duma, in the October Manifesto, then spent the next decade narrowing the franchise until the Duma represented landowners more than anyone else.",
        ],
        pull: "1905 gave the revolution its vocabulary: the strike committee, the soviet, the general strike. 1917 simply reused it.",
      },
      {
        heading: "A society without a middle",
        body: [
          "Russia had a brilliant intelligentsia and almost no liberal centre with real power. The Kadets argued for constitutional monarchy in a chamber the crown could dissolve at will. The Socialist Revolutionaries, heirs to the peasant-populist tradition, were the largest party by potential votes but the loosest in organisation. The Marxists had split in 1903 into Mensheviks, who believed Russia must pass through a bourgeois stage, and Bolsheviks, who under Lenin believed a disciplined party could compress history.",
          "Below all of them sat the crucial arithmetic: eighty per cent of the population lived in villages, and their programme could be written on a fence in three words — the land, all of it. No government that failed to answer that demand could survive a serious shock.",
        ],
      },
      {
        heading: "The tercentenary and the reckoning",
        body: [
          "In 1913 the dynasty celebrated three hundred years of Romanov rule with processions, medals and a cross-country imperial tour. Crowds turned out; officials reported devotion. Nicholas concluded that the bond between Tsar and people was intact and that his critics were a thin urban crust.",
          "Eighteen months later Russia entered a European war with fourteen million men to mobilise, an officer corps drawn from a narrow caste, a rail network sized for peace and a treasury that had already borrowed heavily in Paris. The shock arrived exactly where the structure was weakest.",
        ],
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Nikolaus_II._%28Russland%29.jpg",
        alt: "Portrait photograph of Tsar Nicholas II in military uniform",
        caption: "Nicholas II: autocrat by conviction, administrator by reluctance.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/The_Russian_Revolution%2C_1905_Q81553.jpg",
        alt: "Scene from the Russian Revolution of 1905",
        caption: "1905: the year the empire learned that its streets could be lost.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Nicholas II", role: "Emperor of All the Russias", note: "Believed concession was the first step to collapse." },
      { name: "Pyotr Stolypin", role: "Prime Minister, 1906–1911", note: "Land reform and the gallows — the 'Stolypin necktie'." },
      { name: "Sergei Witte", role: "Architect of industrialisation", note: "Built the railways that carried the revolution." },
    ],
    legacy:
      "Everything that broke in 1917 was already cracked in 1913. The war did not create Russia's crisis; it removed the last reasons to postpone it.",
  },
  {
    slug: "great-war",
    num: "02",
    era: "Before the storm",
    dateline: "Aug 1914 – Feb 1917",
    title: "The War That Ate the State",
    subtitle: "Fifteen million men, two and a half million dead, and a government that stopped functioning",
    dek: "Russia entered the First World War on a wave of patriotic unity and left it a wreck. The front consumed the army's professional core in the first eighteen months; the rear consumed the state's legitimacy over the next two.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/db/EasternFront1917.jpg",
      alt: "Map of the Eastern Front of the First World War in 1917",
      caption: "The Eastern Front, 1917 — a thousand miles of line held by an army in dissolution.",
      credit: CREDIT,
    },
    facts: [
      { label: "Men mobilised", value: "≈15 million" },
      { label: "Russian dead", value: "≈2.3 million" },
      { label: "Prisoners taken", value: "≈3.4 million" },
      { label: "Rouble value, 1917", value: "≈25% of 1914" },
    ],
    sections: [
      {
        heading: "Tannenberg and the loss of the old army",
        body: [
          "The Russian Second Army was destroyed at Tannenberg in August 1914 within three weeks of mobilisation; its commander, General Samsonov, walked into a forest and shot himself. The Masurian Lakes followed. By the end of 1915 the Great Retreat had surrendered Poland, Lithuania and much of Belorussia, and the trained pre-war officer corps and NCOs — the connective tissue of any army — were largely gone.",
          "Their replacements were wartime commissions: schoolteachers, students, clerks, men from precisely the social strata that the imperial system had excluded from authority. They were competent and resentful in equal measure, and in 1917 they would not defend the regime.",
        ],
      },
      {
        heading: "Shells, rifles and improvisation",
        body: [
          "The shell famine of 1915 became the emblem of state failure: batteries rationed to a handful of rounds a day, infantry sent forward to collect the rifles of the dead. Industry did eventually respond — by 1916 Russian factories were producing more artillery ammunition than in any previous year — but the recovery was organised largely by War Industries Committees and the zemstvo unions, that is, by civil society rather than by ministries.",
          "This mattered politically. Every crate delivered by a voluntary organisation was an argument that the bureaucracy was superfluous. The Progressive Bloc in the Duma asked for one thing in return: a government enjoying the confidence of the country. Nicholas refused it.",
        ],
        pull: "The rear organised itself and discovered that it could. That discovery outlived the war.",
      },
      {
        heading: "The Tsar takes command",
        body: [
          "In August 1915, over the near-unanimous objection of his ministers, Nicholas assumed personal command of the armed forces and left for headquarters at Mogilev. It was a gesture of duty and a catastrophe of politics: from that day every defeat was his, and the running of the empire passed to the Empress Alexandra in Petrograd.",
          "The Brusilov Offensive of June 1916 showed what the army could still do — a genuine breakthrough that shattered Austro-Hungarian forces and cost the enemy over a million casualties. It also cost Russia perhaps half a million men and used up the last reserve of trained troops. After Brusilov there was nothing left to spend.",
        ],
      },
      {
        heading: "Inflation, bread and the railways",
        body: [
          "The war was financed by borrowing and by printing money. Prices in Petrograd roughly quadrupled between 1914 and 1917 while wages lagged badly behind. Peasants, offered depreciating paper for grain and unable to buy manufactured goods with it, sold less. The grain existed; the incentive to move it did not.",
          "Then the transport system failed. Locomotives wore out faster than they could be repaired, rolling stock was monopolised by military traffic, and the exceptionally severe winter of 1916–17 froze switches and cracked rails. In February 1917 Petrograd was receiving a fraction of the flour it needed. The queues formed before dawn in −20°C and became the first parliament of the revolution.",
        ],
      },
      {
        heading: "The Kerensky offensive: the war outlives the Tsar",
        body: [
          "The Provisional Government's decision to keep fighting after February was its fatal inheritance. The June 1917 offensive in Galicia, urged on by War Minister Kerensky in person at the front, opened well and collapsed within a fortnight as whole units simply refused to advance.",
          "From that point the army voted with its feet. Desertion ran into the hundreds of thousands; soldiers' committees debated orders before obeying them. The Bolshevik slogan of immediate peace was not a clever tactic — it was a description of what the army had already decided.",
        ],
        pull: "By autumn 1917 the Russian army was no longer an instrument of the state. It was an armed electorate.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Military%2C_soldier%2C_prisoner_of_war%2C_First_World_War%2C_uniform%2C_village%2C_weapon%2C_Russian_solder_Fortepan_23423.jpg",
        alt: "Russian soldiers of the First World War in a village",
        caption: "Peasants in uniform: the army was the village, armed and concentrated.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Kerensky_offensive.jpg",
        alt: "Russian troops during the Kerensky offensive of June 1917",
        caption: "The June 1917 offensive — the last attempt to fight the war and the revolution at once.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Aleksei Brusilov", role: "General", note: "Won Russia's best offensive and its last reserves away." },
      { name: "Mikhail Rodzianko", role: "Duma President", note: "Warned the Tsar repeatedly; was ignored politely." },
    ],
    legacy:
      "The war did not radicalise Russia by argument. It did so by arithmetic: no bread, no shells, no trains, no confidence — and eventually, no state.",
  },
  {
    slug: "rasputin",
    num: "03",
    era: "Before the storm",
    dateline: "1905 – Dec 1916",
    title: "Rasputin and the Rot at Court",
    subtitle: "How a Siberian peasant healer became the symbol of a monarchy that had lost the plot",
    dek: "Grigori Rasputin mattered less for what he did than for what he proved: that the imperial family had sealed itself off from the country it governed, and that the last argument for autocracy — competence at the top — was gone.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Grigori_Rasputin_1916.jpg",
      alt: "Photograph of Grigori Rasputin in 1916",
      caption: "Grigori Rasputin, 1916 — the year of his murder.",
      credit: CREDIT,
    },
    facts: [
      { label: "Arrived at court", value: "1905" },
      { label: "Tsarevich's illness", value: "Haemophilia B" },
      { label: "Ministers of the Interior, 1915–17", value: "4" },
      { label: "Killed", value: "30 Dec 1916" },
    ],
    sections: [
      {
        heading: "A child's illness and a mother's desperation",
        body: [
          "The Tsarevich Alexei, born in 1904 after four daughters, inherited haemophilia through his mother from Queen Victoria. A bruise could mean weeks of agony; a fall could kill. The condition was a state secret, which meant the public could not understand what was happening in the palace and the palace could not explain itself.",
          "Rasputin's hold began when he appeared to calm the boy during bleeding crises — at Spala in 1912 most famously, when Alexei was given last rites and then recovered. Whether the cause was hypnosis, the withdrawal of aspirin then in fashion, or simple coincidence hardly matters. To Alexandra it was proof of God's protection delivered through a man of the people.",
        ],
      },
      {
        heading: "The holy man and the salon",
        body: [
          "Rasputin was not a monk and held no clerical rank. He was a peasant from Pokrovskoye in Tobolsk province, a wanderer of the strannik tradition, magnetic, filthy in habit and unabashed. Petersburg society first collected him as an exotic and then discovered he had access.",
          "Around him grew a market in influence: appointments, contracts, pardons. The scandal was less that he was corrupt — the court was already that — than that he was visibly, plebeianly so, and that the Empress defended him against every minister, police report and grand duke who tried to intervene.",
        ],
        pull: "The monarchy could survive being hated. It could not survive being ridiculous.",
      },
      {
        heading: "Ministerial leapfrog",
        body: [
          "With Nicholas at headquarters from August 1915, Alexandra ran domestic appointments, and Rasputin's opinion counted. In sixteen months Russia went through four Ministers of the Interior, three Foreign Ministers, three War Ministers and two Prime Ministers. Contemporaries called it \"ministerial leapfrog\"; the result was a government that could not plan a season ahead.",
          "The Empress was German-born, and rumour did the rest. Whispers of treason in the palace circulated in Duma corridors, in officers' messes and in the bread queues. None of it was true. All of it was believed.",
        ],
      },
      {
        heading: "Murder at the Yusupov Palace",
        body: [
          "On the night of 29–30 December 1916, Prince Felix Yusupov, the right-wing Duma deputy Vladimir Purishkevich and Grand Duke Dmitri Pavlovich lured Rasputin to the Moika Palace and killed him. The legend of poisoned cakes and multiple shots grew in the telling; the autopsy indicates he was shot, most decisively in the forehead, and dumped through the ice of the Malaya Nevka.",
          "The conspirators believed they were saving the dynasty. They had instead demonstrated that even the aristocracy now settled political questions by assassination, and that no institution defended the throne. Nicholas returned from the front, buried Rasputin at Tsarskoye Selo and changed nothing. Nine weeks later the empire fell.",
        ],
        pull: "The murder was meant to rescue the monarchy. It was its obituary, written by its own relatives.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Rasputin-Big-photos-2-crop.jpg",
        alt: "Studio portrait of Grigori Rasputin",
        caption: "The face that Petersburg salons collected and then feared.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nicholas_II%2C_empress_Alexandra_Feodorovna%2C_their_daughters_and_grand_duchess_Elisabeth_Feodorovna_outside_a_military_hospital_1914.jpg/1920px-Nicholas_II%2C_empress_Alexandra_Feodorovna%2C_their_daughters_and_grand_duchess_Elisabeth_Feodorovna_outside_a_military_hospital_1914.jpg",
        alt: "Nicholas II, Empress Alexandra and their daughters outside a military hospital in 1914",
        caption: "The imperial family at a war hospital, 1914. Alexandra and the grand duchesses trained as nurses.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Alexandra Feodorovna", role: "Empress", note: "Ran the interior ministry by letter while the Tsar ran the war." },
      { name: "Felix Yusupov", role: "Conspirator", note: "Richest man in Russia; died in Paris exile in 1967." },
    ],
    legacy:
      "Rasputin is remembered as a cause. He was a symptom — the most photogenic evidence that the autocracy had stopped being able to govern itself.",
  },
  {
    slug: "february",
    num: "04",
    era: "The February Revolution",
    dateline: "23 Feb – 3 Mar 1917",
    title: "Five Days in February",
    subtitle: "A bread strike becomes a general strike becomes the end of three hundred years",
    dek: "No party organised it. No leader called it. The February Revolution began with women textile workers walking out over bread and ended, five days later, with the garrison of the capital in mutiny and the Romanov dynasty finished.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/30/International_Women%27s_Day_-_February_Revolution_-_Petrograd.jpg",
      alt: "Women demonstrating in Petrograd on International Women's Day, February 1917",
      caption: "23 February 1917 (8 March, New Style): International Women's Day in Petrograd.",
      credit: CREDIT,
    },
    facts: [
      { label: "Began", value: "23 Feb (O.S.)" },
      { label: "Strikers by 25 Feb", value: "≈240,000" },
      { label: "Garrison troops", value: "≈180,000" },
      { label: "Deaths", value: "≈1,300" },
    ],
    sections: [
      {
        heading: "Day one: the women of Vyborg",
        body: [
          "On 23 February — International Women's Day in the old-style calendar — women workers in the textile mills of the Vyborg district struck over bread rationing and went from factory to factory calling out the men. The Bolshevik district committee had specifically advised against a strike, judging the moment premature. They were ignored.",
          "By evening some ninety thousand workers were out. Crowds crossed the frozen Neva into the city centre because the police had raised the bridges — the ice made the bridges irrelevant, a small detail that decided the geography of the revolution.",
        ],
      },
      {
        heading: "Day three: the Cossacks do not charge",
        body: [
          "By 25 February the strike was general: trams stopped, newspapers closed, some 240,000 workers on the streets. On Znamenskaya Square, mounted Cossacks — the regime's traditional instrument of crowd-breaking — rode into the demonstrators without drawing sabres, and some were seen to smile. Witnesses understood immediately.",
          "That night the Tsar telegraphed from Mogilev to General Khabalov: \"I command that the disorders in the capital, intolerable during these difficult times of war with Germany and Austria, be ended tomorrow.\" It was the last order of the old regime that anyone tried to obey.",
        ],
        pull: "\"I command that the disorders in the capital be ended tomorrow.\" — Nicholas II, 25 February 1917",
      },
      {
        heading: "Day four: Sunday's volleys",
        body: [
          "On 26 February troops fired on crowds on Nevsky Prospekt; the Volynsky Regiment's training detachment killed perhaps forty people near the Kazan Cathedral. It looked, for a few hours, like 1905 repeating.",
          "That evening the soldiers of the Volynsky met in their barracks and decided they would not fire again. Their sergeant, Timofei Kirpichnikov, shot the officer who ordered them out the next morning. The mutiny of the Petrograd garrison had begun with a single killing in a barracks corridor.",
        ],
      },
      {
        heading: "Day five: the garrison changes sides",
        body: [
          "On 27 February regiment after regiment came over: Volynsky, Preobrazhensky, Litovsky, Moskovsky. The Arsenal was stormed and forty thousand rifles distributed. The Peter and Paul Fortress fell, the Kresty prison was opened, the headquarters of the Okhrana secret police burned along with its files.",
          "By nightfall the government had ceased to exist as a physical thing. In the Tauride Palace two bodies formed in different wings: a Provisional Committee of the Duma, and the Petrograd Soviet of Workers' and Soldiers' Deputies. Neither had planned to exist that morning.",
        ],
        pull: "The revolution was not seized. It was found lying in the street by whoever was standing in the Tauride Palace.",
      },
      {
        heading: "Why it worked",
        body: [
          "Petrograd's garrison was not the field army. It was 180,000 reservists and raw recruits packed into barracks designed for a fraction of that, most of them older peasants terrified of being sent to the front and living cheek by jowl with the striking districts they were ordered to suppress.",
          "Nicholas, still at Mogilev, dispatched General Ivanov with reliable troops to restore order. Railway workers shunted his trains into sidings. The Tsar's own train was diverted to Pskov. The empire had run out of instruments before it ran out of intentions.",
        ],
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Patrol_of_the_February_revolution.jpg/1920px-Patrol_of_the_February_revolution.jpg",
        alt: "An armed revolutionary patrol on the streets of Petrograd, February 1917",
        caption: "A revolutionary patrol: soldiers and workers, armed from the Arsenal.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Street_fighting_in_Petrograd_-_Students_and_soldiers_firing_at_police_across_the_Moika_Canal_%28Feb%2C_1917%29.png",
        alt: "Students and soldiers firing at police across the Moika Canal in February 1917",
        caption: "Street fighting across the Moika Canal against police rooftop positions.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/67/Days_of_revolution_-_barricades_on_the_Liteinyi_Prospect%2C_Petrograd_LCCN2009631816.jpg",
        alt: "Barricades on Liteinyi Prospekt in Petrograd during the February Revolution",
        caption: "Barricades on Liteinyi Prospekt, close to the burning District Court.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Timofei Kirpichnikov", role: "Sergeant, Volynsky Regiment", note: "Fired the shot that started the garrison mutiny." },
      { name: "Nikolai Chkheidze", role: "Chairman, Petrograd Soviet", note: "Menshevik; presided over power he did not want to take." },
    ],
    legacy:
      "February produced the freest weeks in Russian history and a government with no army, no police and no mandate. Both facts pointed at October.",
  },
  {
    slug: "abdication",
    num: "05",
    era: "The February Revolution",
    dateline: "2 – 3 March 1917",
    title: "The Abdication at Pskov",
    subtitle: "Three hundred years of Romanov rule ended in a railway carriage in under an hour",
    dek: "On the evening of 2 March 1917, in the imperial train stopped at Pskov, Nicholas II signed away the throne — first for himself, then, in a second thought that ended the dynasty, for his son as well.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/%D0%9E%D1%82%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BE%D1%82_%D0%BF%D1%80%D0%B5%D1%81%D1%82%D0%BE%D0%BB%D0%B0_%D0%B8%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B0_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%8F_II._2_%D0%BC%D0%B0%D1%80%D1%82%D0%B0_1917.jpg",
      alt: "Depiction of the abdication of Emperor Nicholas II on 2 March 1917",
      caption: "The abdication, 2 March 1917 — signed in pencil, countersigned by the court minister.",
      credit: CREDIT,
    },
    facts: [
      { label: "Signed", value: "2 Mar 1917, ~15:00 & 23:40" },
      { label: "Place", value: "Imperial train, Pskov station" },
      { label: "Dynasty duration", value: "1613 – 1917" },
      { label: "Successor", value: "None — Michael declined" },
    ],
    sections: [
      {
        heading: "The generals turn",
        body: [
          "The decisive pressure came not from the crowd but from the high command. General Alekseev, chief of staff, polled the front commanders by telegraph on 2 March: should the Emperor abdicate for the good of the war effort? Ruzsky, Brusilov, Evert, Sakharov and the Grand Duke Nikolai Nikolaevich all answered yes.",
          "Nicholas read the replies in his carriage at Pskov. \"There is no sacrifice I would not make for the real welfare of Russia,\" he said, and agreed to abdicate in favour of his son under the regency of his brother Michael.",
        ],
      },
      {
        heading: "The second thought",
        body: [
          "Then the court physician confirmed what Nicholas already knew: Alexei's haemophilia was incurable, and a boy Emperor would be separated from his parents. Within hours the Tsar rewrote the act to abdicate for himself and for his son together, passing the crown to Grand Duke Michael.",
          "Legally this was doubtful — the Pauline succession laws did not clearly permit a father to renounce on his heir's behalf. Politically it was fatal: it produced an untested candidate with no preparation, no popular standing and no army.",
        ],
        pull: "\"I am leaving. I shall take up gardening.\" — attributed to Nicholas, on his plans after abdication",
      },
      {
        heading: "Michael's one-day reign",
        body: [
          "On 3 March, in a flat on Millionnaya Street, Duma delegates put the case to Michael. Kerensky told him bluntly that his safety could not be guaranteed. Milyukov argued that without a monarch the state would dissolve. Michael declined to accept the throne unless a Constituent Assembly offered it to him.",
          "The Romanov monarchy therefore did not fall in battle or by decree. It expired because its last holder would only take it on terms nobody could deliver.",
        ],
      },
      {
        heading: "The diary entry",
        body: [
          "That night Nicholas wrote in his diary the sentence that has followed him ever since: \"All around me is treachery, cowardice and deceit.\" He had lost an empire and recorded it, characteristically, as a failure of other people's loyalty rather than of his own judgement.",
          "He returned to Mogilev to say goodbye to the army, then to Tsarskoye Selo, where the Provisional Government placed the family under house arrest. The former Emperor spent his last free months chopping wood, reading aloud to his children and shovelling snow in the palace park.",
        ],
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/1917_%D0%BC%D0%B0%D1%80%D1%82_%D0%9E%D1%82%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%8F_II_%D0%BC%D0%B0%D0%BD%D0%B8%D1%84%D0%B5%D1%81%D1%82.jpg",
        alt: "The printed manifesto of Nicholas II's abdication, March 1917",
        caption: "The manifesto as printed and posted across the empire.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/4/47/%D0%9E%D1%82%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%8F_II.jpg",
        alt: "Contemporary illustration of the abdication of Nicholas II",
        caption: "A contemporary rendering of the scene in the imperial carriage.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Mikhail Alekseev", role: "Chief of the General Staff", note: "Polled the front commanders and delivered the verdict." },
      { name: "Grand Duke Michael", role: "Nominal Emperor for one day", note: "Refused the crown; shot at Perm in June 1918." },
    ],
    legacy:
      "By declining the throne, Michael left Russia a republic by default — with no head of state, no constitution and no agreement about who should write one.",
  },
  {
    slug: "dual-power",
    num: "06",
    era: "The long spring",
    dateline: "Mar – Jun 1917",
    title: "Dual Power",
    subtitle: "Two governments in one building, neither willing to govern alone",
    dek: "The Provisional Government had the ministries. The Petrograd Soviet had the soldiers, the railways, the telegraph and the printing presses. For eight months Russia was run by an unstable partnership in which the body with authority had no power and the body with power refused authority.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/46/1917petrogradsoviet_assembly.jpg",
      alt: "An assembly of the Petrograd Soviet in 1917",
      caption: "The Petrograd Soviet in session — up to 3,000 delegates, permanently in session.",
      credit: CREDIT,
    },
    facts: [
      { label: "Formed", value: "2 March 1917" },
      { label: "Soviet delegates", value: "≈3,000 at peak" },
      { label: "Cabinets in 8 months", value: "4" },
      { label: "Order No. 1", value: "1 March 1917" },
    ],
    sections: [
      {
        heading: "Order No. 1",
        body: [
          "Issued by the Petrograd Soviet on 1 March, before the Provisional Government even existed, Order No. 1 instructed every military unit to elect committees, placed weapons under committee control, abolished honorific forms of address, and declared that the orders of the Duma committee were to be obeyed only where they did not contradict the Soviet's.",
          "It was drafted to prevent counter-revolution, and it succeeded. It also dissolved the disciplinary basis of the Russian army in a single page. Every subsequent minister of war spent his tenure trying to work around a document he could not repeal.",
        ],
        pull: "Whoever the ministers were, the trains moved when the Soviet said so.",
      },
      {
        heading: "Ministers without power",
        body: [
          "The first Provisional Government was a cabinet of liberals and moderates: Prince Lvov as premier, Milyukov at the foreign ministry, Guchkov at war, and one socialist — Alexander Kerensky — who sat in both the government and the Soviet's executive and became the hinge between them.",
          "It abolished the death penalty, dissolved the Okhrana, granted freedom of press, assembly and religion, released political prisoners and legalised strikes. By any measure of civil liberty it was the freest government Russia has ever had. It also postponed every substantive question — land, the war, the constitution, the nationalities — until the election of a Constituent Assembly it kept failing to schedule.",
        ],
      },
      {
        heading: "The April Crisis",
        body: [
          "On 18 April Milyukov cabled the Allies affirming Russia's commitment to the war \"to a decisive victory\" and to its territorial claims, including Constantinople. When the note leaked, armed soldiers and workers filled the streets for two days.",
          "Milyukov and Guchkov resigned. The government reconstituted itself with six socialist ministers from the Soviet parties — the first coalition. Each successive coalition bound the moderate socialists more tightly to policies they could not deliver, and made the Bolsheviks the only significant party not responsible for the result.",
        ],
      },
      {
        heading: "The land cannot wait",
        body: [
          "In the villages, peasants took the practical view. Land committees appeared, estates were inventoried, timber was cut, and from the summer onward manor houses burned. The government's answer was that redistribution must await the Constituent Assembly and be conducted lawfully with compensation.",
          "Soldiers at the front, overwhelmingly peasants, heard that the division of land was happening at home without them. It was the single most effective recruiting argument for desertion in 1917 — and it worked in favour of whichever party promised to legalise the seizure immediately.",
        ],
        pull: "The Provisional Government asked the country to wait. The country had stopped waiting in February.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/%D0%9F%D1%80%D0%B8%D0%BA%D0%B0%D0%B7_n%C2%BA1.jpg",
        alt: "Printed text of Order No. 1 issued by the Petrograd Soviet in March 1917",
        caption: "Order No. 1 — the most consequential single page of 1917.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/94/Alexander_Kerensky_1917.jpg",
        alt: "Portrait of Alexander Kerensky in 1917",
        caption: "Kerensky: the only man in both governments, and eventually the servant of neither.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/First_proklamation_of_Petrograd_Soviet_1917.jpg",
        alt: "The first proclamation of the Petrograd Soviet, 1917",
        caption: "The Soviet's first proclamation to the population of Petrograd.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Prince Georgy Lvov", role: "Prime Minister, Mar–Jul 1917", note: "Believed in local self-government; presided over its collapse." },
      { name: "Pavel Milyukov", role: "Foreign Minister", note: "Destroyed by one telegram about war aims." },
      { name: "Irakli Tsereteli", role: "Menshevik leader", note: "Chief architect of coalition with the liberals." },
    ],
    legacy:
      "Dual power was not a stalemate between two governments. It was an interval in which the country decided which of them it no longer needed.",
  },
  {
    slug: "lenin-returns",
    num: "07",
    era: "The long spring",
    dateline: "3 April 1917",
    title: "Lenin Returns",
    subtitle: "A sealed train, the Finland Station, and ten theses that split the revolution",
    dek: "In April 1917 the Bolsheviks were a minority party accommodating themselves to the new order. Six weeks after Lenin stepped off a train from Zurich they had a programme no other party would touch: no support for the government, no war, all power to the Soviets.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Vladimir_Lenin_giving_a_speech.jpg",
      alt: "Vladimir Lenin addressing a crowd from a platform",
      caption: "Lenin speaking — the tactic of the direct, repeatable, unqualified demand.",
      credit: CREDIT,
    },
    facts: [
      { label: "Left Zurich", value: "27 March 1917" },
      { label: "Route", value: "Germany, Sweden, Finland" },
      { label: "Arrived Petrograd", value: "3 April, 23:10" },
      { label: "April Theses", value: "10 points" },
    ],
    sections: [
      {
        heading: "The sealed train",
        body: [
          "Lenin was in Switzerland when the monarchy fell and had no legal route home across a continent at war. The German general staff, calculating that a Bolshevik Russia would leave the war, provided passage: a carriage granted extraterritorial status, crossing Germany to the Baltic, then Sweden and Finland.",
          "The arrangement gave his enemies a permanent weapon — the charge of German gold — and gave Lenin exactly what he wanted: to be in Petrograd within a month rather than never. Thirty-two exiles travelled with him.",
        ],
      },
      {
        heading: "The Finland Station",
        body: [
          "He arrived at 23:10 on 3 April. The Petrograd Soviet turned out a guard of honour and Chkheidze greeted him with a speech about the need to close ranks in defence of the revolution. Lenin listened, turned away from him and addressed the crowd instead, ending with a call for worldwide socialist revolution.",
          "The next morning he delivered his theses to a meeting of Bolshevik delegates. The reaction from his own party was closer to shock than to applause; Pravda published the text with a note distancing the editorial board from it.",
        ],
        pull: "\"No support for the Provisional Government.\" To most Bolsheviks in April 1917 this sounded like madness. By October it was the country's opinion.",
      },
      {
        heading: "The April Theses",
        body: [
          "The argument was short and total. The war remained imperialist and no defencist concessions were permissible. The Provisional Government deserved not a shred of support. The revolution was passing from its bourgeois to its proletarian stage. Power should go to the Soviets of Workers' and Soldiers' Deputies; the police, army and bureaucracy should be abolished; all land nationalised; banks merged under Soviet control.",
          "Crucially, Lenin did not demand an immediate seizure of power. He demanded \"patient explanation\" until the Bolsheviks held a majority in the Soviets — a tactical patience that most accounts of him omit and that made the difference in October.",
        ],
      },
      {
        heading: "Why it worked",
        body: [
          "Through the summer every other party carried the responsibility of office. When the June offensive failed, when bread queues lengthened, when land reform was deferred again, the Bolsheviks were the only mass party with clean hands and a three-word answer: peace, land, bread.",
          "Party membership went from perhaps 24,000 in February to around 200,000 by August. In September the Bolsheviks won majorities in the Petrograd and Moscow Soviets. Lenin's April gamble — refuse coalition, wait for the country to arrive — had come in.",
        ],
        pull: "Membership: 24,000 in February. 200,000 by August. The argument had not changed; the circumstances had.",
      },
    ],
    gallery: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Vladimir_Lenin%2C_1917.jpg",
        alt: "Portrait photograph of Vladimir Lenin in 1917",
        caption: "Lenin in 1917, aged 47, after seventeen years of exile and emigration.",
        credit: CREDIT,
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Vladimir_Lenin_in_Stockholm_1917.jpg",
        alt: "Lenin photographed in Stockholm during his journey to Russia in 1917",
        caption: "Stockholm, en route: the last stop before the Finland Station.",
        credit: CREDIT,
      },
    ],
    people: [
      { name: "Vladimir Lenin", role: "Bolshevik leader", note: "Won his party by argument before winning the state by insurrection." },
      { name: "Lev Kamenev", role: "Bolshevik moderate", note: "Opposed the Theses in April and the insurrection in October." },
    ],
    legacy:
      "The April Theses turned a socialist party waiting for history into one intending to make it. That distinction decided the year.",
  },
];

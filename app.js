function creator(tagNm, parent, classNm = ` `, attr = [], innetTxt = ``) {
    var elem = document.createElement(tagNm);
    if (typeof parent != `object`) {
        parent = document.querySelector(parent)
    }
    elem.classList = classNm
    if (attr.length != 0) {
        for (var a = 0; a < attr.length; a += 2) {
            if (attr[a + 1]) {
                elem.setAttribute(attr[a], attr[a + 1])
            } else {
                elem.setAttribute(attr[a], ` `)
            }
        }
    }
    if (parent) {
        elem.innerText = innetTxt;
        parent.append(elem);
    } else {
        console.error("Menq tvel enq element e bayc chenq drel, qani vor \n chka mayr element")
    }
    return elem;
}
creator(`div`, `body`, `nav_pan container-lg container-fluid py-lg-3 py-2`);
creator(`div`, `.nav_pan`, `row`, []);
creator(`div`, `.nav_pan .row`, `col d-flex justify-content-between align-items-center`, []);
creator(`div`, `.col`, `min_box box_logo p-2`, []);
creator(`a`, `.box_logo`, ` `, [`href`]);
creator(`img`, `.box_logo a`, `logo`, [`src`, `img/logo-image.png`, `alt`, `nutrition`]);
creator(`div`, `.col`, `min_box nav_box p-2`, []);
creator(`div`, `.nav_box`, `navbox1`, []);
creator(`ul`, `.navbox1`, `nav1 nav gap-3 fs-5`, []);
creator(`div`, `.nav_box`, `barsIcon text-center`, []);
creator(`div`, `.barsIcon`, `navbox2`, []);
creator(`i`, `.barsIcon`, `bars fa-solid fa-bars fs-4`, []);
creator(`ul`, `.navbox2`, `nav2 m-0 py-md-4 px-md-5 py-2 px-3  fs-5`, []);
var argNav = [`Home`, `Aboute Me`, `Pages`, `Contact`]
for (var a = 0; a < argNav.length; a++) {
    var li = creator(`a`, `.nav1`, `meniu_nav`, [`href`]);
    creator(`li`, li, `${argNav[a]} navNam`, [], argNav[a]);
    var lik = creator(`a`, `.nav2`, `meniu_nav`, [`href`]);
    creator(`li`, lik, `${argNav[a]} navNam2`, [], argNav[a]);
}
creator(`div`, `.col`, `min_box nav_button d-flex gap-3 align-items-center`, []);
creator(`div`, `.nav_button`, `cartBox p-2`, [], ``);
var qanakCart = 0
creator(`div`, `.cartBox`, `qanakCart  rounded-circle align-content-center text-center`, [], ``);
creator(`p`, `.qanakCart`, `qanCart p-0 m-0`, [], `${qanakCart}`);
creator(`a`, `.nav_button .cartBox`, `meniu_nav`, [`href`,], ``);
creator(`div`, `.nav_button .cartBox a`, `cart`, []);
creator(`i`, `.cart`, `carts fa-solid fa-cart-shopping fs-4`, []);
creator(`form`, `.nav_button`, ``, []);
creator(`div`, `.nav_button form`, ``, []);
creator(`a`, `.nav_button form div`, ``, [`href`,], ``);
creator(`button`, `.nav_button form div a`, `knopka rounded-5 px-4 py-2`, [], `BOOK AN APPOINTMENT`);
creator(`div`, `.Pages`, `pages_menu`, [], ``);
creator(`ul`, `.pages_menu`, `gap-3 fs-5`, []);
var pagesArg = [`Landing`, `FAQ`, `Services`, `Store`, `Blog Page`, `Pricing`, `Booking`]
for (var b = 0; b < pagesArg.length; b++) {
    var li_li = creator(`a`, `.pages_menu ul`, `meniu_nav`, [`href`]);
    creator(`li`, li_li, `${pagesArg[b]} fs-6 pb-2 navNam`, [], pagesArg[b]);
}






creator(`div`, `body`, `nkar_box container-fluid`, [], ``);
creator(`div`, `.nkar_box`, `row`, [], ``);
creator(`div`, `.nkar_box .row`, `col align-content-center text-center`, [], ``);
creator(`h1`, `.nkar_box .row .col`, `text`, [], `Blog`);






creator(`div`, `body`, `six_img container-lg container-fluid py-5`, [], ``);
creator(`div`, `.six_img`, `row g-4`, [], ``); // Dobavili g-4 dlya krasivogo otstupa mezhdu kartochkami

var six_elem = [
    [
        `young-happy-woman-eating-salad-t.jpg`,
        `nkar.jpg`,
        `diet-concept-with-sporty-woman-k.jpg`,
        `flat-lay-plate-with-keto-diet-fo.jpg`,
        `young-sporty-woman-with-pepper-k.jpg`,
        `flat-lay-plate-with-keto-diet-fo.jpg`
    ],
    [
        `The highest concentration of healthy nutrients`,
        `What Is Normal Eating?`, 
        `My Favorite Meal Planning Strategy`,
        `Ten top tips using diet and lifestyle to help`,
        `The Best Diet to Balance Hormones`,
        `Healthy High-Protein Breakfast Ideas`
    ],
    [
        `Sample small text. Conubia nisi hac ex litora dapibus dictum...`,
        `Sample small text. Morbi ac enim auctor quam vel conubia ante...`,
        `Sample small text. Sollicitudin duis erat nisi porttitor litora massa...`,
        `Sample small text. Morbi ac enim auctor quam vel conubia ante...`,
        `Sample small text. Non augue erat dictum magna in metus suscipit...`,
        `Sample small text. Semper per platea suscipit ac sapien auctor...`
    ]
];

for (var d = 0; d < six_elem[0].length; d++) {
    var cardCol = creator(`div`, `.six_img .row`, `col-12 col-lg-6 `, [], ``);
    var cardDiv = creator(`div`, cardCol, `card h-100 border-0`, [], ``);
    creator(`img`, cardDiv, `card-img-top object-fit-cover`, [`src`, `img/` + six_elem[0][d], `alt`, `image`]);
    var textBox = creator(`div`, cardDiv, `card-body d-flex flex-column`, [], ``);
    creator(`h3`, textBox, `h5 fw-bold`, [], six_elem[1][d]);
    creator(`p`, textBox, `text-muted fs-6`, [], six_elem[2][d]);
    var btnA = creator(`a`, textBox, `mt-auto`, [`href`, `#`], ``);
    creator(`button`, btnA, `ikon px-4 py-2`, [], `READ MORE`);
}


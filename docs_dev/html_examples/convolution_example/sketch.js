const graphPosition1 = 0;
let graphPosition2 = 0;
let graphPosition3 = 0;
const margin = 10;

let slider;
let sliderValue = 0;
let button;

let reversed = false;

const signalOneMeasure = 100;

let gx = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
     1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
let fx = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0.9866491875668404,0.9735601557696248,0.9607252799296371,0.9481372286250336,0.935788949726232,0.9236736572217473,0.9117848187827671,0.9001161440185829,0.8886615733785123,0.8774152676591701,0.8663715980789151,0.8555251368840219,0.8448706484536402,0.8344030808729143,0.824117557945766,0.81400937162081,0.8040739748056821,0.794306974546743,0.78470412555266,0.7752613240418119,0.7659746018947793,0.7568401210944194,0.7478541684371547,0.7390131505001686,0.7303135888501743,0.7217521154803385,0.7133254684627836,0.7050304878048781,0.6968641114982578,0.688823371750201,0.6809053913876106,0.6731073804244536,0.6654266327840507,0.6578605231681314,0.6504065040650406,0.6430621028899364,0.6358249192502352,0.6286926223299502,0.6216629483869351,0.6147336983573918,0.6079027355623101,0.6011679835108211,0.5945274237957165,0.5879790940766552,0.581521086146822,0.5751515440790416,0.5688686624475574,0.5626706846219043,0.5565559011294812,0.5505226480836238,0.5445693056741353,0.5386942967174033,0.5328960852633736,0.527173175256799,0.5215241092503091,0.5159474671669793,0.5104418651101889,0.5050059542186741,0.4996384195647886,0.4943379790940767,0.48910338260436725,0.48393341076267904,0.47882687415831215,0.473782612390584,0.4687994931897373,0.4638764115696235,0.45901228901082847,0.4542060726729718,0.4494567346349711,0.44476327116212344,0.4401247019988998,0.43554006968641124,0.4310084389035467,0.4265288958308302,0.42210054753608756,0.4177225213810579,0.4133939644481191,0.40911404298633686,0.40488194187608273,0.4006968641114982,0.3965580303001135,0.3924646781789638,0.3884160621465699,0.38441145281018024,0.3804501365476976,0.37653141508373605,0.37265460507928233,0.3688190377344503,0.3650240584038495,0.36126902622409696,0.35755331375303284,0.35387630662020914,0.3502374031882437,0.34663601422464896,0.34307156258375765,0.3395434828983859,0.3360512212808857,0.33259423503325947,0.3291719923660112,0.3257839721254356,0.32242966352904473,0.3191085659088558,0.31582018846226473,0.312564050010248,0.3093396787626413,0.30614661209025407,0.3029843963035904,0.2998525864379523,0.2967507460447127,0.29367844698855156,0.29063526925045835,0.2876208007363092,0.2846346370908378,0.2816763815168191,0.2787456445993031,0.275842044134727,0.27296520496475546,0.27011475881469166,0.26729034413631814,0.2644916059550206,0.2617181957210652,0.25896977116489306,0.25624599615631005,0.25354654056744647,0.2508710801393728,0.24821929635225568,0.24559087629894558,0.24298551256189269,0.2404029030932855,0.2378427510983186,0.2353047649214897,0.23278865793584058,0.23029414843504661,0.2278209595282766,0.22536881903773448,0.22293745939880705,0.22052661756273986,0.21813603490176553,0.2157654571166154,0.21341463414634151,0.21108332008038513,0.20877127307282523,0.20647825525874303,0.20420403267264525,0.20194837516888284,0.19971105634401293,0.19749185346104475,0.19529054737551982,0.1931069224633727,0.1909407665505227,0.1887918708441496,0.18666002986560476,0.18454504138491423,0.18244670635682733,0.18036482885837263,0.1782992160278746,0.17624967800539598,0.17421602787456444,0.17219808160574715,0.1701956580005361,0.16820857863751054,0.16623666781924087,0.16427975252050192,0.16233766233766236,0.16041022943922167,0.1584972885174609,0.1565986767411816,0.15471423370950124,0.15284380140668108,0.15098722415795587,0.14914434858634304,0.14731502357040377,0.14549910020293302,0.1436964317505532,0.14190687361419071,0.14013028329041063,0.13836652033358915,0.13661544631890316,0.13487692480611443,0.13315082130413144,0.13143700323632618,0.12973533990659059,0.12804570246611102,0.12636796388084612,0.12470199889968825,0.12304768402329386,0.12140489747356406,0.11977351916376315,0.11815343066925478,0.11654451519884655,0.11494665756672297,0.11335974416495632,0.11178366293658067,0.11021830334921426,0.10866355636921987,0.1071193144363877,0.10558547143912995,0.10406192269017614,0.10254856490275362,0.10104529616724746,0.09955201592832259,0.09806862496250324,0.09659502535619426,0.09513112048413723,0.09367681498829039,0.0922320147571224,0.09079662690531054,0.08937055975383504,0.08795372281045974,0.0865460267505901,0.08514738339850099,0.08375770570892521,0.08237690774899535,0.08100490468052998,0.07964161274265805,0.07828694923477261,0.07694083249980765,0.07560318190782987,0.07427391783993977,0.07295296167247389,0.07164023576150322,0.07033566342761918,0.06903916894100393,0.06775067750677508,0.06647011525060303,0.06519740920459165,0.06393248729341823,0.06267527832072756,0.061425711955773496,0.0601837187203042,0.05894922997568352,0.05772217791024732,0.056502495526885806,0.05529011663084979,0.05408497581777523,0.05288700846192145,0.05169615070461853,0.0505123394429211,0.049335512318460756,0.048165607706497277,0.047002564705161065,0.045846323124885464,0.04469682347802234,0.04355400696864117,0.04241781548250262,0.0412881915772089,0.04016507847252202,0.03904842004085066,0.037938160797899426,0.03683424589347935,0.035736621102474796,0.03464523281596451,0.03356002803249404,0.032480954349495106,0.03140795995485111,0.030340993618603977,0.029280004684800784,0.02822494306347693,0.027175759222773332,0.026132404181184638,0.02509482949993732,0.024062987275492304,0.023036830132173853,0.022016311214917473,0.021001384182139288,0.0199920031987205,0.01898812292910791,0.017989698530525688,0.016996685646299043,0.01600904039928435,0.01502671938540718,0.014049679667303592,0.013077878768063865,0.012111274665076721,0.01114982578397215,0.01019349099266071,0.009242229595467676,0.008296001327360298,0.007354766348266604,0.006418485237484038,0.005487118988175283,0.004560629001951977,0.0036389770835418087,0.0027221254355401245,0.0018100366532422247,0.000902673719557402,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
];

gx.reverse();
function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    background(0);

    graphPosition2 = windowHeight / 3;
    graphPosition3 = windowHeight / 3;

    // slider = createSlider(-fx.length/2, fx.length/2, 0, 1);
    // slider.position(10, 10);
    // slider.style('width', '150px');

    // button = createButton('click me');
    // button.position(19, 19);
    // button.mousePressed(loopThroughConvolution);

    frameRate(30);
}

function draw() {
    background(255);
    const sampleWidth = (windowWidth - 2 * margin) / fx.length;
    // sliderValue = slider.value();
    // put drawing code here

    // // f(x)
    // drawGraph(graphPosition1, windowHeight, windowWidth);
    // drawSignal(fx, graphPosition1, windowHeight, windowWidth, {
    //     r: 255,
    //     g: 0,
    //     b: 0
    // });

    if (reversed) gx = gx.reverse();
    // g(x)

    // drawGraph(graphPosition2, windowHeight, windowWidth);
    // drawSignal(gx, graphPosition2, windowHeight, windowWidth, {
    //     r: 0,
    //     g: 0,
    //     b: 255
    // });

    gx = gx.reverse();
    reversed = true;
    // f*g
    drawGraph(graphPosition3, windowHeight, windowWidth);

    let newDat = offsetData(gx, sliderValue);

    // f(tao)
    drawSignal(fx, graphPosition3, windowHeight, windowWidth, {
        r: 255,
        g: 0,
        b: 0
    });

    // overlapped area
    let overlappedData = findOverlap(fx, newDat);
    drawOverlap(overlappedData, graphPosition3, windowHeight, windowWidth, {
        r: 255,
        g: 255,
        b: 0
    });

    // convolution line
    let convolutionLine = [];
    stroke(0);
    noFill();
    beginShape();
    for (let i = -fx.length / 2; i < fx.length / 2; i++) {
        let newDat = offsetData(gx, i);
        let od = findOverlap(fx, newDat);
        convolutionLine.push(calculateArea(od));
        vertex(i * sampleWidth + windowWidth / 2, windowHeight / 3 * 2 - margin - calculateArea(od) * signalOneMeasure * 5);
    }
    endShape();

    // g(t - tao)
    drawSignal(newDat, graphPosition3, windowHeight, windowWidth, {
        r: 0,
        g: 0,
        b: 255
    });

    fill(0);
    noStroke();
    let area = convolutionLine[parseInt(sliderValue + fx.length / 2, 10)];
    ellipse(sliderValue * sampleWidth + windowWidth / 2, windowHeight / 3 * 2 - margin - area * signalOneMeasure * 5, 8, 8);

    if (touches) {
        let dx = mouseX - pmouseX;

        sliderValue += dx * 1.2;
    }
}

function loopThroughConvolution() {
    sliderValue = -fx.length / 2;
    let t = setInterval(function () {
        sliderValue += 2;

        if (sliderValue >= fx.length / 2) clearInterval(t);
    }, 33);
}

function drawGraph(yOrigin, windowHeight, windowWidth) {
    // Line color
    stroke(0);
    // Horizontal axis line
    line(windowWidth / 2, margin, windowWidth / 2, windowHeight - margin);

    // Vertical axis line
    line(margin, yOrigin + windowHeight / 3 - margin, windowWidth - margin, yOrigin + windowHeight / 3 - margin);


    // Draw horizontal markers

    const gridSize = 100;

    let xl = 0;

    for(let x = windowWidth / 2 + gridSize; x < windowWidth - margin * 4; x+= gridSize) {
      xl++;
      line(x, yOrigin + windowHeight / 3 - margin / 2 * 3, x, yOrigin + windowHeight / 3 - margin / 2);

      strokeWeight(0.1);
      dashedLine(x, margin, x, windowHeight - margin, 20);
      strokeWeight(2);

      noStroke();
      text(xl, x + 3, yOrigin + windowHeight / 3 + 3);

      stroke(0);
    }

    xl = 0;
    for(let x = windowWidth / 2 - gridSize; x > margin * 4; x-= 100) {
      xl--;
      line(x, yOrigin + windowHeight / 3 - margin / 2 * 3, x, yOrigin + windowHeight / 3 - margin / 2);

      strokeWeight(0.1);
      dashedLine(x, margin, x, windowHeight - margin, 20);
      strokeWeight(2);

      noStroke();
      text(xl, x + 3, yOrigin + windowHeight / 3 + 3);

      stroke(0);
    }


    // Draw vertical markers

    const gridSizeY = 100;
    let yl = 0;

    for(let y = yOrigin + windowHeight / 3 - margin + gridSizeY; y < windowHeight - margin; y+= gridSizeY) {
      yl -= 0.5;
      line(windowWidth/2 - margin, y, windowWidth/2 + margin, y);

      strokeWeight(0.5);
      dashedLine(margin, y, windowWidth - margin, y, 20);
      strokeWeight(2);

      noStroke();
      text(yl, windowWidth / 2 + 8, y - 5);

      stroke(0);
    }

    yl = 0;
    for(let y = yOrigin + windowHeight / 3 - margin - gridSizeY; y > margin; y-= gridSizeY) {
      yl += 0.5;
      line(windowWidth/2 - margin, y, windowWidth/2 + margin, y);

      strokeWeight(0.5);
      dashedLine(margin, y, windowWidth - margin, y, 20);
      strokeWeight(2);

      noStroke();
      text(yl, windowWidth / 2 + 8, y - 5);

      stroke(0);
    }
}

function dashedLine(x1, y1, x2, y2, dashPeriod) {
  const distance = Math.sqrt(Math.abs((x2 - x1) * (x2 - x1)) + Math.abs((y2 - y1) * (y2 - y1)));
  const distanceX = x2 - x1;
  const distanceY = y2 - y1;
  const numOfDashes = Math.floor(distance / dashPeriod);
  const periodX = Math.floor(distanceX / numOfDashes);
  const periodY = Math.floor(distanceY / numOfDashes);

  for(let i = 0; i < numOfDashes; i++) {
    line(x1 + i * periodX,
        y1 + i * periodY,
        x1 + (i + 0.5) * periodX,
        y1 + (i + 0.5) * periodY );
  }
}

function drawSignal(data, yOrigin, windowHeight, windowWidth, color) {
    const dataLength = data.length;
    const sampleWidth = (windowWidth - 2 * margin) / dataLength;

    let lastx = margin;
    let lasty = yOrigin + windowHeight / 3 - margin;

    strokeWeight(1.5);
    stroke(color.r, color.g, color.b);

    for (let i = 0; i < dataLength; i++) {
        let x = margin + sampleWidth * i;
        let y = yOrigin + windowHeight / 3 - margin - (data[i] * signalOneMeasure);

        line(lastx, lasty, x, y);

        lastx = x;
        lasty = y;
    }
}

function drawOverlap(data, yOrigin, windowHeight, windowWidth, color) {
    const dataLength = data.length;
    const sampleWidth = (windowWidth - 2 * margin) / dataLength;

    let lastx = margin;
    let lasty = windowHeight / 3 - margin;

    noStroke();
    fill(color.r, color.g, color.b);
    beginShape();

    for (let i = 0; i < dataLength; i++) {
        let x = margin + sampleWidth * i;
        let y = yOrigin + windowHeight / 3 - margin - (data[i] * signalOneMeasure);


        vertex(x, y);

        lastx = x;
        lasty = y;
    }

    endShape(CLOSE);
}

function offsetData(data, offset) {
    let length = data.length;
    let zeros = Array.apply(null, Array(length)).map(Number.prototype.valueOf, 0);
    let newData = [...zeros, ...data, ...zeros];
    // console.log(newData);

    let returnData = [];
    for (let i = 0; i < length; i++) {
        // console.log(newData[i+offset])
        returnData.push(newData[parseInt(i - offset + length, 10)]);
    }

    // console.log(returnData)

    return returnData;
}

function findOverlap(f, g) {
    if (f.length !== g.length) return null;

    let returnData = [];

    for (let i = 0; i < f.length; i++) {
        let fv = f[i];
        let gv = g[i];

        returnData.push(fv * gv);
    }

    return returnData;
}

function calculateArea(data) {
    let area = 0;
    for (let i = 0; i < data.length; i++) {
        area += data[i];
    }

    area /= data.length;

    return area;
}

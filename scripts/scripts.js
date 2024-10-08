import {
  sampleRUM,
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForLCP,
  loadBlocks,
  loadCSS,
} from './lib-franklin.js';

const LCP_BLOCKS = []; // add your LCP blocks to the list

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await waitForLCP(LCP_BLOCKS);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadBlocks(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector('header'));
  loadFooter(doc.querySelector('footer'));

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();

  sampleRUM('lazy');
  sampleRUM.observe(main.querySelectorAll('div[data-block-name]'));
  sampleRUM.observe(main.querySelectorAll('picture > img'));
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}

loadPage();


window.onload = function () {

var options = {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Actual vs Projected Sales"
	},
	axisX:{
		valueFormatString: "DD MMM"
	},
	axisY: {
		title: "Number of Sales",
		suffix: "K",
		minimum: 30
	},
	toolTip:{
		shared:true
	},  
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true,
		itemclick: toogleDataSeries
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "Projected Sales",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#F08080",
		yValueFormatString: "#,##0K",
		dataPoints: [
			{ x: new Date(2017, 10, 1), y: 63 },
			{ x: new Date(2017, 10, 2), y: 69 },
			{ x: new Date(2017, 10, 3), y: 65 },
			{ x: new Date(2017, 10, 4), y: 70 },
			{ x: new Date(2017, 10, 5), y: 71 },
			{ x: new Date(2017, 10, 6), y: 65 },
			{ x: new Date(2017, 10, 7), y: 73 },
			{ x: new Date(2017, 10, 8), y: 96 },
			{ x: new Date(2017, 10, 9), y: 84 },
			{ x: new Date(2017, 10, 10), y: 85 },
			{ x: new Date(2017, 10, 11), y: 86 },
			{ x: new Date(2017, 10, 12), y: 94 },
			{ x: new Date(2017, 10, 13), y: 97 },
			{ x: new Date(2017, 10, 14), y: 86 },
			{ x: new Date(2017, 10, 15), y: 89 }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "Actual Sales",
		lineDashType: "dash",
		yValueFormatString: "#,##0K",
		dataPoints: [
			{ x: new Date(2017, 10, 1), y: 60 },
			{ x: new Date(2017, 10, 2), y: 57 },
			{ x: new Date(2017, 10, 3), y: 51 },
			{ x: new Date(2017, 10, 4), y: 56 },
			{ x: new Date(2017, 10, 5), y: 54 },
			{ x: new Date(2017, 10, 6), y: 55 },
			{ x: new Date(2017, 10, 7), y: 54 },
			{ x: new Date(2017, 10, 8), y: 69 },
			{ x: new Date(2017, 10, 9), y: 65 },
			{ x: new Date(2017, 10, 10), y: 66 },
			{ x: new Date(2017, 10, 11), y: 63 },
			{ x: new Date(2017, 10, 12), y: 67 },
			{ x: new Date(2017, 10, 13), y: 66 },
			{ x: new Date(2017, 10, 14), y: 56 },
			{ x: new Date(2017, 10, 15), y: 64 }
		]
	}]
};
$(".charts-container").CanvasJSChart(options);

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}





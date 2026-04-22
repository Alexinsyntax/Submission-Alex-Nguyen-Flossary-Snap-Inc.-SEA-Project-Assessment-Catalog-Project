/*
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// CSV directly into my js

const csvText = `toothbrush_type, plaque_index, frequency, percentage, before_brush, after_brush
     manual, 2.25, 1, 2, yes, no
     manual, 2.29, 3, 6, yes, no
     manual, 2.33, 1, 2, yes, no
     manual, 2.37, 4, 8, yes, no
     manual, 2.41, 2, 4, yes, no
     manual, 2.45, 5, 10, yes, no
     manual, 2.5, 5, 10, yes, no
     manual, 2.54, 3, 6, yes, no
     manual, 2.58, 3, 6, yes, no
     manual, 2.7, 3, 6, yes, no
     manual, 2.75, 5, 10, yes, no
     manual, 2.79, 4, 8, yes, no
     manual, 2.85, 1, 2, yes, no
     manual, 2.87, 3, 6, yes, no
     manual, 2.92, 7, 14, yes, no
     manual, 0.5, 2, 4, no, yes
     manual, 0.54, 1, 2, no, yes
     manual, 0.58, 4, 8, no, yes
     manual, 0.62, 3, 6, no, yes
     manual, 0.66, 4, 8, no, yes
     manual, 0.7, 5, 10, no, yes
     manual, 0.75, 3, 6, no, yes
     manual, 0.79, 5, 10, no, yes
     manual, 0.83, 6, 12, no, yes
     manual, 0.87, 5, 10, no, yes
     manual, 0.91, 1, 2, no, yes
     manual, 0.95, 5, 10, no, yes
     manual, 1, 6, 12, no, yes
     electric, 2.2, 1, 2, yes, no
     electric, 2.25, 1, 2, yes, no
     electric, 2.29, 2, 4, yes, no
     electric, 2.33, 2, 4, yes, no
     electric, 2.37, 2, 4, yes, no
     electric, 2.41, 4, 8, yes, no
     electric, 2.45, 2, 4, yes, no
     electric, 2.5, 11, 22, yes, no
     electric, 2.54, 2, 4, yes, no
     electric, 2.58, 1, 2, yes, no
     electric, 2.62, 1, 2, yes, no
     electric, 2.66, 3, 6, yes, no
     electric, 2.7, 4, 8, yes, no
     electric, 2.79, 6, 12, yes, no
     electric, 2.83, 3, 6, yes, no
     electric, 2.87, 2, 4, yes, no
     electric, 2.92, 3, 6, yes, no
     electric, 0.45, 1, 2, no, yes
     electric, 0.5, 3, 6, no, yes
     electric, 0.54, 1, 2, no, yes
     electric, 0.58, 2, 4, no, yes
     electric, 0.62, 4, 8, no, yes
     electric, 0.66, 8, 16, no, yes
     electric, 0.7, 5, 10, no, yes
     electric, 0.75, 4, 8, no, yes
     electric, 0.79, 6, 12, no, yes
     electric, 0.83, 5, 10, no, yes
     electric, 0.87, 6, 12, no, yes
     electric, 0.91, 2, 4, no, yes
     electric, 0.95, 1, 2, no, yes
     electric, 0.97, 1, 2, no, yes
     electric, 1, 1, 2, no, yes
     ultrasonic, 2.29, 5, 10, yes, no
     ultrasonic, 2.33, 1, 2, yes, no
     ultrasonic, 2.37, 4, 8, yes, no
     ultrasonic, 2.41, 1, 6, yes, no
     ultrasonic, 2.45, 4, 8, yes, no
     ultrasonic, 2.5, 1, 2, yes, no
     ultrasonic, 2.54, 4, 8, yes, no
     ultrasonic, 2.58, 6, 12, yes, no
     ultrasonic, 2.62, 3, 6, yes, no
     ultrasonic, 2.66, 2, 4, yes, no
     ultrasonic, 2.7, 3, 6, yes, no
     ultrasonic, 2.75, 1, 2, yes, no
     ultrasonic, 2.79, 5, 10, yes, no
     ultrasonic, 2.83, 6, 12, yes, no
     ultrasonic, 2.87, 1, 2, yes, no
     ultrasonic, 2.92, 1, 2, yes, no
     ultrasonic, 0.41, 2, 4, no, yes
     ultrasonic, 0.5, 5, 10, no, yes
     ultrasonic, 0.54, 2, 4, no, yes
     ultrasonic, 0.58, 5, 10, no, yes
     ultrasonic, 0.62, 9, 18, no, yes
     ultrasonic, 0.66, 3, 6, no, yes
     ultrasonic, 0.7, 2, 4, no, yes
     ultrasonic, 0.75, 6, 12, no, yes
     ultrasonic, 0.79, 10, 20, no, yes
     ultrasonic, 0.83, 3, 6, no, yes
     ultrasonic, 0.87, 1, 2, no, yes
     ultrasonic, 0.91, 1, 2, no, yes
     ultrasonic, 0.95, 1, 2, no, yes`;

function parseCSV(text) {
  const [headerLine, ...rows] = text.trim().split(/\r?\n/);
  const headers = headerLine.split(',').map(h => h.trim());
  return rows
    .filter(row => row.trim() !== '')
    .map(row => {
      const values = row.split(',').map(v => v.trim());
      return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
    });
}

// my cards based on Snap Inc. example

function showCards(data) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  const templateCard = document.querySelector('.card');

  data.forEach(row => {
    const card = templateCard.cloneNode(true);
    card.style.display = 'block';

    card.querySelector('h2').textContent = row.toothbrush_type;

    const badge = card.querySelector('.card-badge');
    if (row.before_brush === 'yes') {
      badge.textContent = 'Before Brush';
      badge.className = 'card-badge badge-before';
    } else {
      badge.textContent = 'After Brush';
      badge.className = 'card-badge badge-after';
    }
// my custom drawn images :D
  const cardImage = card.querySelector('img');
  if (row.toothbrush_type === 'manual') {
    cardImage.src = 'assets/manualbrush.JPG';
  } else if (row.toothbrush_type === 'electric') {
    cardImage.src = 'assets/electricbrush.JPG';
  } else if (row.toothbrush_type === 'ultrasonic') {
    cardImage.src = 'assets/ultrasonicbrush.JPG';
  }
  cardImage.alt = row.toothbrush_type + ' toothbrush';

    const items = card.querySelectorAll('li');
    items[0].textContent = 'Plaque Index: ' + row.plaque_index;
    items[1].textContent = 'Frequency: ' + row.frequency;
    items[2].textContent = 'Percentage: ' + row.percentage + '%';
    items[3].textContent = 'Before Brush: ' + row.before_brush;
    items[4].textContent = 'After Brush: ' + row.after_brush;
    
    cardContainer.appendChild(card);
  });

  }

     // display table

function displayTable(data) {
  if (data.length === 0) {
    document.getElementById('tableContainer').innerHTML = '<p style= "padding:16px;color:#7aaac8;">No results found.</p>';
    return;
  }

  const labels = ['Toothbrush Type', 'Plaque Index', 'Frequency', 'Percentage', 'Before Brush', 'After Brush'];
  const headerRow = labels.map(l => `<th>${l}</th>`).join('');
  const rows = data.map(row => `
    <tr>
      <td style="text-transform:capitalize">${row.toothbrush_type}</td>
      <td>${row.plaque_index}</td>
      <td>${row.frequency}</td>
      <td>${row.percentage}%</td>
      <td class="${row.before_brush == 'yes' ? 'yes' : 'no'}">${row.before_brush}</td>
      <td class="${row.after_brush == 'yes' ? 'yes' : 'no'}">${row.after_brush}</td>
    </tr>
`).join('');

document.getElementById('tableContainer').innerHTML = `
  <p id="rowCount">${data.length} rows</p>
  <table>
    <thead><tr>${headerRow}</tr></thead>
    <tbody>${rows}</tbody>
  </table>
`;
}

function displayStats(data) {
  if (data.length === 0) {
    document.getElementById('statsContainer').innerHTML = '';
    return;
  }

const avgPlaque = data.reduce((sum, r) => sum + Number(r.plaque_index), 0) /data.length;
const avgFreq = data. reduce((sum,r) => sum + Number(r.frequency), 0) / data.length;
const maxPlaque = Math.max(...data.map(r => Number(r.plaque_index)));
const minPlaque = Math.min(...data.map(r => Number(r.plaque_index)));

document.getElementById('statsContainer').innerHTML = `
  <div class="stat">
    <p class="stat-label">Rows</p>
    <p class="stat-value">${data.length}</p>
  </div>
  <div class="stat">
    <p class="stat-label">Avg plaque index</p>
    <p class="stat-value">${avgPlaque.toFixed(2)}</p>
  </div>
  <div class="stat">
    <p class="stat-label">Avg frequency</p>
    <p class="stat-value">${avgFreq.toFixed(1)}</p>
  </div>
  <div class="stat">
    <p class="stat-label">Plaque range</p>
    <p class="stat-value">${minPlaque} - ${maxPlaque}</p>
  </div>

`;
}
// FILTER
function getFiltered() {
  const type = document.getElementById('typeFilter').value.trim();
  const brushed = document.getElementById('brushedFilter').value.trim();
  const query = document.getElementById('searchBox').value.toLowerCase().trim();

  return allData.filter(row => {
    const matchType    = !type    || row.toothbrush_type === type;
    const matchBrushed = !brushed || row.before_brush    === brushed;
    const matchSearch  = !query   || Object.values(row).some(v => v.toLowerCase().includes(query));
  return matchType && matchBrushed && matchSearch;
  });
}


// Interactive chart

function drawChart(data) {
  const canvas = document.getElementById('myChart');
  const ctx = canvas.getContext('2d');

  canvas.width = 860;
  canvas.height = 400;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // CALC avg plaque via brush type
  const types = ['manual', 'electric', 'ultrasonic'];
  const avgs = types.map(type => {
    const rows = data.filter(r => r.toothbrush_type === type);
    if (rows.length === 0) return 0;
    return rows.reduce((sum, r) => sum + Number(r.plaque_index), 0) / rows.length;
  });

  //chart colors, dimension

  const colors       = ['#a8d4f5', '#f4b8d4', '#b8e8d4'];
  const borderColors = ['#5aa0d0', '#d46090', '#40a880'];

  const padTop = 40;
  const padBottom = 60;
  const padLeft = 60;
  const padRight = 20; 
  const chartW = canvas.width - padLeft - padRight; 
  const chartH = canvas.height - padTop - padBottom;
  
  const maxVal = 3;
  const barW = chartW / types.length * 0.5; 

// gridlines, y axis label

ctx.strokeStyle = '#d8eaf8';
ctx.fillStyle = '#9ab8cc';
ctx.font = '12px Verdana, sans-serif';
ctx.textAlign = 'right';
const ticks = 6;
for (let i = 0; i <= ticks; i++) {
  const val = (maxVal / ticks) * i;
  const y = padTop + chartH - (val / maxVal) * chartH;
  ctx.beginPath();
  ctx.moveTo(padLeft, y);
  ctx.lineTo(padLeft + chartW, y);
  ctx.stroke();
  ctx.fillText(val.toFixed(1), padLeft - 8, y + 4)
}

// bars
types.forEach((type, i) => {
  const barH = (avgs[i] / maxVal) * chartH;
  const x = padLeft + (chartW / types.length) * i + (chartW / types.length - barW) / 2; 
  const y = padTop + chartH - barH;

  //bar fill
  ctx.fillStyle = colors[i];
  ctx.fillRect(x, y, barW, barH);
  ctx.strokeStyle = borderColors[i];
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, barW, barH);

  //value labelled above bar

  ctx.fillStyle = '#334455';
  ctx.textAlign = 'center';
  ctx.font = '12px Verdana, sans-serif';
  ctx.fillText(avgs[i].toFixed(2), x + barW / 2, y - 8);

  //label below bar

  ctx.fillStyle = '#555';
  ctx.font = '13px sans-serif'
  ctx.fillText(type, x + barW / 2, padTop + chartH + 24);
});
// axises

// add this after the bars forEach
ctx.strokeStyle = '#a8cce8';
ctx.lineWidth   = 1.5;
ctx.beginPath();
ctx.moveTo(padLeft, padTop);
ctx.lineTo(padLeft, padTop + chartH);
ctx.lineTo(padLeft + chartW, padTop + chartH);
ctx.stroke();

  // y-axis title
  ctx.save();
  ctx.translate(16, padTop + chartH / 2); 
  ctx.rotate(-Math.PI /2);
  ctx.fillStyle = '#7aaac8';
  ctx.font = '12px Verdana, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Avg Plaque Index', 0, 0);
  ctx.restore();

//chart title

ctx.fillStyle = '#1a5a9a';
ctx.font = '12px Verdana, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Average Plaque Index by Toothbrush Type:', canvas.width / 2, 20);

}

//conclusions nav bar

function toggleConclusions() {
  const box = document.getElementById('conclusionsBox');
  box.classList.toggle('visible');
}
// update
function update() {
  const filtered = getFiltered();
  showCards(filtered);
  displayTable(filtered);
  displayStats(filtered);
  drawChart(filtered);
}

const allData = parseCSV(csvText);
showCards(allData);
displayTable(allData);
displayStats(allData);
drawChart(allData);

document.getElementById('typeFilter').addEventListener('change', update);
document.getElementById('brushedFilter').addEventListener('change', update);
document.getElementById('searchBox').addEventListener('input', update);

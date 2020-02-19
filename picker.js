// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
  el: ".color-picker",
  theme: "classic", // or 'monolith', or 'nano'

  components: {
    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: false,
      cmyk: false,
      input: true,
      clear: true,
      save: true
    }
  }
});

pickr.on("change", (...args) => {
  let color = args[0].toRGBA();
  console.log(color);
  this.panel.style.backgroundColor = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`;
});

let panel = document.getElementById("panel");

r /= 255;
g /= 255;
b /= 255;

let h, s, l;

const min = Math.min(r, g, b);
const max = Math.max(r, g, b);

if (max === min) {
  h = 0;
} else if (max === r) {
  h = 60 * (0 + (g - b) / (max - min));
} else if (max === g) {
  h = 60 * (2 + (b - r) / (max - min));
} else if (max === b) {
  h = 60 * (4 + (r - g) / (max - min));
}

if (h < 0) {
  h = h + 360;
}

l = (min + max) / 2;

if (max === 0 || min === 1) {
  s = 0;
} else {
  s = (max - l) / Math.min(l, 1 - l);
}
// multiply s and l by 100 to get the value in percent, rather than [0,1]
s *= 100;
l *= 100;

console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing

/* pickr.on('init', instance => {
    console.log('init', instance);
}).on('hide', instance => {
    console.log('hide', instance);
}).on('show', (color, instance) => {
    console.log('show', color, instance);
}).on('save', (color, instance) => {
    console.log('save', color, instance);
}).on('clear', instance => {
    console.log('clear', instance);
}).on('change', (color, instance) => {
    console.log('change', color, instance);
}).on('changestop', instance => {
    console.log('changestop', instance);
}).on('cancel', instance => {
    console.log('cancel', instance);
}).on('swatchselect', (color, instance) => {
    console.log('swatchselect', color, instance);
}); */

/* important! for alignment, you should make things
 * relative to the canvas' current width/height.
 */
function draw() {
  var ctx = document.getElementById('myChart').getContext('2d');
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight * .8;
}

draw();

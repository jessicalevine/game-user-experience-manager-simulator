function easeOutQuad(t) { return t*(2-t) };

window.moveFakeMouseToElement = function (elem_id, oncomplete) {
  let fake_mouse = document.getElementById("fakemouse");
  let fake_mouse_rect = fake_mouse.getBoundingClientRect();
  let origin_loc = {
    x: fake_mouse_rect.left,
    y: fake_mouse_rect.top
  };

  let elem = document.getElementById(elem_id);
  let elem_rect = elem.getBoundingClientRect();
  let target_loc = {
    x: (elem_rect.left + elem_rect.right) / 2,
    y: (elem_rect.top + elem_rect.bottom) / 2
  };

  let dist = {
    total_x: target_loc.x - origin_loc.x,
    total_y: target_loc.y - origin_loc.y
  };

  let duration = 2500; // milliseconds
  let startTime = performance.now();

  let render = function(timestamp) {
    let elapsed = timestamp - startTime;
    let percent_reached = easeOutQuad(elapsed / duration);
    let new_loc = {}
    new_loc.x = origin_loc.x + percent_reached * dist.total_x;
    new_loc.y = origin_loc.y + percent_reached * dist.total_y;

    fake_mouse.style.transform = `translate(${new_loc.x}px, ${new_loc.y}px)`;

    if (elapsed >= duration) {
      if (oncomplete) {
        oncomplete();
      }
    } else {
      requestAnimationFrame(render);
    }
  }

  requestAnimationFrame(render);
}

function easeOutQuad(t) { return t*(2-t) };

function selectRandElem(elem_ids) {
  if(!Array.isArray(elem_ids)) {
    console.error("Non-array passed where array expected");
    return null;
  }
  
  while(elem_ids.length > 0) {
    let index = Math.floor(Math.random() * elem_ids.length);
    // let index = elem_ids.length - 1;
    let elem = document.getElementById(elem_ids[index]);

    if (elem === undefined || elem === null) {
      elem_ids.splice(index, 1);
    } else {
      return elem;
    }
  }

  console.log("No such elems exist");
  return null;
}

function setupTween(fake_mouse, elem) {
  let tween = {};

  let fake_mouse_rect = fake_mouse.getBoundingClientRect();
  tween.origin_x = fake_mouse_rect.left;
  tween.origin_y = fake_mouse_rect.top;

  let elem_rect = elem.getBoundingClientRect();
  tween.target_x = (elem_rect.left + elem_rect.right) / 2;
  tween.target_y = (elem_rect.top + elem_rect.bottom) / 2;

  tween.dist_x = tween.target_x - tween.origin_x;
  tween.dist_y = tween.target_y - tween.origin_y;

  let distance = Math.sqrt(Math.pow(tween.dist_x, 2) + Math.pow(tween.dist_y, 2));
  if (distance < 250) {
    tween.duration = 1500;
  } else {
    tween.duration = 4500;
  }
  tween.startTime = performance.now();

  return tween;
}

window.moveFakeMouseToRandElement = function (elem_ids, oncomplete) {
  let elem = selectRandElem(elem_ids);
  if (elem === undefined || elem === null) { return; }

  let fake_mouse = document.getElementById("fakemouse");
  let tween = setupTween(fake_mouse, elem);

  let render = function(timestamp) {
    // Make sure elem is still there, select another random one if not, and
    // if there are none, just stop.
    elem = document.getElementById(elem.id);

    if (elem === undefined || elem === null) {
      elem = selectRandElem(elem_ids);
      if (elem === undefined || elem === null) { return; }
      tween = setupTween(fake_mouse, elem);
    } else {
      let er = elem.getBoundingClientRect();
      if (tween.target_x != (er.left + er.right) / 2 || tween.target_y != (er.top + er.bottom) / 2) {
        // Elem moved so we need to go elsewhere
        tween = setupTween(fake_mouse, elem);
      }
    }

    let elapsed = timestamp - tween.startTime;
    let percent_reached = easeOutQuad(elapsed / tween.duration);
    let new_loc = {}
    new_loc.x = tween.origin_x + percent_reached * tween.dist_x;
    new_loc.y = tween.origin_y + percent_reached * tween.dist_y;

    fake_mouse.style.transform = `translate(${new_loc.x}px, ${new_loc.y}px)`;

    if (elapsed >= tween.duration) {
      if (oncomplete) {
        oncomplete(elem);
      }
    } else {
      requestAnimationFrame(render);
    }
  }

  requestAnimationFrame(render);
}

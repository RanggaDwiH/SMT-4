"use strict";

document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {
  var url, res, data, out;
  return regeneratorRuntime.async(function tampil$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "https://jsonplaceholder.typicode.com/users";
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch(url));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(res.json());

        case 6:
          data = _context.sent;
          out = "<ul>";
          data.forEach(function (element) {
            console.log(element.name);
            out += "<li>".concat(element.name, "</li>");
          });
          out += "</ul>";
          document.querySelector("#isi").innerHTML = out;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}
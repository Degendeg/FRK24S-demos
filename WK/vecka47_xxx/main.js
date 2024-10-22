if (sessionStorage.getItem("isReloaded")) {
  document.getElementById("isReloaded").innerHTML = "🔄"
} else {
  sessionStorage.setItem("isReloaded", true)
}

const authorList = document.getElementById("authorList");

function getAuthors() {
  authorList.innerHTML = "Laddar..."
  const url = "https://thetestrequest.com/authors.xml"
  const request = new XMLHttpRequest()

  request.open("GET", url, true)

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      updatePage(request.responseXML)
    }
  }

  request.send(null)
}

function updatePage(xml) {
  var objects = xml.getElementsByTagName("object")
  var output = "<ul>"

  for (var i = 0; i < objects.length; i++) {
    var name = objects[i].getElementsByTagName("name")[0].textContent
    output += "<li>" + name + "</li>"
  }

  output += "</ul>"
  authorList.innerHTML = output
}
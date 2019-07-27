const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
const requests = Array.prototype.slice.call(document.getElementsByTagName("ajax")).map(val => {return {from: val.attributes.from.nodeValue, tag: val.attributes.tag.nodeValue}});
requests.forEach(val => {
    let xhr = new XHR;
    xhr.open("GET", val.from, true);
    xhr.onload = async () => Array.prototype.slice.call(document.getElementsByTagName(val.tag)).map(val => val.innerHTML = xhr.responseText);
    xhr.send();
});

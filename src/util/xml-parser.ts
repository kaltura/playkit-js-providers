export default class XmlParser {
  /**
   * Parses xml string to json object
   * @param {string} xml The xml to parse
   * @returns {{}} The parsed xml as Json object
   * @static
   */
  public static xmlToJson(xml: Document | ChildNode): any {
    let obj: any = {};
    if (xml.nodeType === 1) {
      if (xml['attributes'].length > 0) {
        obj['@attributes'] = {};
        for (let j = 0; j < xml['attributes'].length; j++) {
          const attribute = xml['attributes'].item(j);
          obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) {
      obj = xml.nodeValue;
    }
    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes.item(i);
        const nodeName = item.nodeName;
        if (typeof obj[nodeName] === 'undefined') {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push === 'undefined') {
            const old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }
}

var XMLHttpRequest = require('xhr2');
const matchAll = require('string.prototype.matchall');

module.exports = {

  async getMetaTags(url) {
    return new Promise((resolve, reject) => {
      try {
        const TAGS = [
          "title",
          "description",
          "strong"
        ]
        let metaTags = []
        let x = new XMLHttpRequest();
        x.onreadystatechange = function() {
          if(this.readyState==4 && this.status==200) {
            let response = this.responseText;

            for(let i=0;i<TAGS.length; i++) {
              let reg = "<"+TAGS[i]+".*?>(.*?)<\/"+TAGS[i]+">";
            
              let res = [... matchAll(response, reg)];
              if(res !== null) {
                for (let j=0; j < res.length; j++) {
                  metaTags.push(res[j][1])
                }
              }            
            }
            resolve(JSON.stringify(metaTags))
          }
        }
        x.open("GET", url);
        x.send();
      } catch (error) {
        console.log(error)
        resolve(error)
      }
    });
  }
}

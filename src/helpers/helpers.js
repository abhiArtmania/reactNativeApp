export function GetImage(content){
  var regEx = new RegExp(/<img.*?src="(.*?)"/);
  var match = regEx.exec(content);
  if(match){
    return match[1]
  }
}

export function ContentSnippet(content){
  return content.split(/\s+/).slice(0,30).join(" ")+"...";
}

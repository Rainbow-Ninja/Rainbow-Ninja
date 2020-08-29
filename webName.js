//given a url return just the domain name

function domainName(url){
    domain = url.split(/[.\/]/)
    unwanted = ["http:", "https:", "www", '']
    for(i = 0; i < domain.length; i++){
        if(unwanted.includes(domain[i])){
            continue;
        } else {
            return domain[i];
        }
    }
  }


  console.log(domainName("http://google.com"))
  console.log(domainName("https://youtube.com"))
  console.log(domainName("www.xakep.ru"))
  console.log(domainName("http://www.zombie-bites.com"))
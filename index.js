function generateHashtag (str) {
  
 const res = '#' + str.split(' ').map((word) => {
   return word.charAt(0).toUpperCase() + word.substring(1)
 }).join('')
 
 return res.length > 140 || res === '#' ? false : res

}

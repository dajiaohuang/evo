// ASCII x is sometimes used for the hybrid multiplication sign in titles.
// These are search candidates only; the taxonomic identity is not inferred.
export function hybridVariants(name){
 if(!name.includes('×'))return []
 const ascii=name.replaceAll('×','x')
 return [...new Set([ascii,ascii.replace(/(^|\s)x\s+(?=[A-Za-z])/g,'$1x')])].filter(x=>x!==name)
}

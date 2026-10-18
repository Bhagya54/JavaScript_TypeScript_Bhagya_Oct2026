// == converts types before comparing (loose), === compares type + value (strict)

// Numbers vs strings
console.log('1=="1"',1=="1")//true - "1" converted to 1
console.log('1==="1"',1==="1")//false - number vs string
console.log('0==""',0=="")//true - "" converted to 0
console.log('0===""',0==="")//false
console.log('"10"==10.0',"10"==10.0)//true

// Booleans (true->1, false->0)
console.log('true==1',true==1)//true
console.log('true===1',true===1)//false
console.log('false==0',false==0)//true
console.log('true==2',true==2)//false - true becomes 1, not 2
console.log('"1"==true',"1"==true)//true
console.log('"true"==true',"true"==true)//false - "true" -> NaN
console.log('"0"==false',"0"==false)//true
console.log('" \\t\\n"==0'," \t\n"==0)//true - whitespace string -> 0

// null & undefined
console.log('null==undefined',null==undefined)//true - only equal to each other
console.log('null===undefined',null===undefined)//false
console.log('null==0',null==0)//false
console.log('null>=0',null>=0)//true - relational ops convert null to 0!
console.log('undefined==0',undefined==0)//false
console.log('undefined==false',undefined==false)//false

// NaN is never equal to anything, even itself
console.log('NaN==NaN',NaN==NaN)//false
console.log('NaN===NaN',NaN===NaN)//false
console.log('Number.isNaN(NaN)',Number.isNaN(NaN))//true - correct way to check
console.log('Object.is(NaN,NaN)',Object.is(NaN,NaN))//true

// +0 and -0
console.log('0===-0',0===-0)//true
console.log('Object.is(0,-0)',Object.is(0,-0))//false

// Arrays & objects (converted via toString/valueOf)
console.log('[]==""',[]=="")//true - [] -> ""
console.log('[]==0',[]==0)//true - [] -> "" -> 0
console.log('[]==false',[]==false)//true
console.log('[]==![]',[]==![])//true - ![] is false, [] -> 0
console.log('[0]==false',[0]==false)//true
console.log('[1,2]=="1,2"',[1,2]=="1,2")//true
console.log('[]==[]',[]==[])//false - different references
console.log('[]===[]',[]===[])//false
console.log('{}=={}',{}=={})//false - different references
let obj={}
let ref=obj
console.log('obj===ref',obj===ref)//true - same reference

// Truthy but not == true
console.log('Boolean([])',Boolean([]))//true - [] is truthy
console.log('[]==true',[]==true)//false - yet not == true

// Rule of thumb: always use ===

function DrawTree (i) {
  for (var j=1; j<=i; j++) {
    var star = '';
    for(var j=1; j<=i; j++) {
      star += '*';
      console.log(star);
    }
  } 
}
DrawTree(5);   

function DrawTree (i) {
  var j = 1;
  for (i>0; j<=i; j++) {
    var star = '';
    for(i>0; j<=i; j++) {
      star += '*';
      console.log(star);
    }
  } 
}
DrawTree(5);   
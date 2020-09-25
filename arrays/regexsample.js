var arr = [ 
    {key : "seq", value : '1100',disabled:true },
    {key : "qty", value : '2200',disabled:false}
  ];
  
  //convert
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    result[arr[i].key] = arr[i].value;
  }
  
  console.log(result);
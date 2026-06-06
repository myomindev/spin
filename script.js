const wheel = new spinWheel.Wheel(document.getElementById('wheel'), {
  items: [
    {label:'1000円', backgroundColor:'#FFF5E6'},
    {label:'2500円', backgroundColor:'#FFE0B2'},
    {label:'5000円', backgroundColor:'#FFD180'},
    {label:'15000円', backgroundColor:'#FF6D00'}
  ]
});

document.getElementById('spinBtn').onclick = () => {

  const prize = Math.floor(Math.random()*4);

  wheel.spinToItem(
    prize,
    5000,
    true,
    8
  );

  setTimeout(()=>{
    alert('You won: ' +
      wheel.items[prize].label);
  },5200);

};

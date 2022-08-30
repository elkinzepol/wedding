function updateTimer() {
	// yyyy-MM-dd HH:mm:ss
  past  = Date.parse("2018-10-27 00:00:00");
  now     = new Date();
  diff    = now - past;

  years  = Math.floor( diff / (1000*60*60*24*30*12) );
  months = Math.floor( diff / (1000*60*60*24*30) );
  days   = Math.floor( diff / (1000*60*60*24) );
  hours  = Math.floor( diff / (1000*60*60) );
  mins   = Math.floor( diff / (1000*60) );
  secs   = Math.floor( diff / 1000 );

  y = years;
  mo = months - years  * 12;
  d = days   - months * 30;
  h = hours  - days   * 24;
  m = mins   - hours  * 60;
  s = secs   - mins   * 60;
  document.getElementById("timer")
    .innerHTML =
       '<div class="simply-section simply-year-section"> <span class="simply-amount">' + y + '</span> <span class="simply-word">Años</span> </div>' +
       '<div class="simply-section simply-month-section"> <span class="simply-amount">' + mo + '</span> <span class="simply-word">Meses</span> </div>' +
      '<div class="simply-section simply-days-section"> <span class="simply-amount">' + d + '</span> <span class="simply-word">Dias</span> </div>' +
      '<div class="simply-section simply-hours-section"> <span class="simply-amount">' + h + '</span> <span class="simply-word">Horas</span> </div>' +
       '<div class="simply-section simply-minutes-section"> <span class="simply-amount">' + m + '</span> <span class="simply-word">Minutos</span> </div>' +
       '<div class="simply-section simply-seconds-section"> <span class="simply-amount">' + s + '</span> <span class="simply-word">Segundos</span> </div>' ;
    
}
setInterval('updateTimer()', 1000 );
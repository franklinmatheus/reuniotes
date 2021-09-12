export function dateFormated(timestamp){
  var date = new Date(timestamp),
    day  = date.getDate().toString(),
    dayF = (day.length == 1) ? '0'+day : day,
    month  = (date.getMonth()+1).toString(),
    monthF = (month.length == 1) ? '0'+month : month,
    yearF = date.getFullYear();
  return dayF+"/"+monthF+"/"+yearF;
}
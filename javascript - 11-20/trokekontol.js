<!DOCTYPE html>
<html lang="en">
<style media="screen" type="text/css">
body {
background-color: #ffffff; 
}   
h1 {
font-family: 'Raleway', sans-serif;
font-size: 500%;
   vertical-align: middle;
   text-align: center;
   color: #2E2E2E;
}
h2 {
font-family: 'Lato', sans-serif;
font-size: 100%;
   vertical-align: middle;
   text-align: center;
   color: #2E2E2E;
}
a:link{
  color:#2E2E2E;
}
a:visited{
  color:#2E2E2E;
}
a:hover{
  color:#2E2E2E;
}
a:focus{
  color:#2E2E2E;
}
a:active{
  color:#2E2E2E;
}
table.db-table{
	border-right:1px solid #ccc; border-bottom:1px solid #ccc;font-family: 'Lato', sans-serif;
}
table.db-table th{
	background:#eee; padding:5px; border-left:1px solid #ccc; border-top:1px solid #ccc;font-family: 'Raleway', sans-serif;
}
table.db-table td{
	padding:5px; border-left:1px solid #ccc; border-top:1px solid #ccc;font-family: 'Raleway', sans-serif;
}
</style>
<head>
<link href='http://fonts.googleapis.com/css?family=Raleway:100' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
<title>FriendStats!</title>
</head>
<body>
<center><h1>FriendStats!</h1><br>
<table cellpadding="0" cellspacing="0" class="db-table"><tr><th>Username</th><th>Rank</th><th>Score</th><th>pp</th><th>Accuracy</th></tr>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 'on');
$k = "Your osu! API Key Here!";
$username = "-Troke-|Faishal Akbar|Cant Defeat You|MisaLuxa|[ EdW_YoYo ]";
$uname = explode("|", $username);
foreach ($uname as $u){
$gapi=file_get_contents("http://osu.ppy.sh/api/get_user?k=$k&u=$u");
$json_parse = json_decode($gapi, true);
$name = $json_parse[0]['username'];
$score = number_format($json_parse[0]['ranked_score']);
$rank = number_format($json_parse[0]['pp_rank']);
$acc = round($json_parse[0]['accuracy']);
$pp = number_format(round($json_parse[0]['pp_raw']));
$flag = $json_parse[0]['country'];
$linkflag = strtolower("https://s.ppy.sh/images/flags/$flag.gif");
//echo "$name has $score Ranked score and has $acc% accuracy, so it deserves #$rank Global osu! rank!<br>";
echo "<tr><td><img src=".$linkflag." /> $name</td><td>#$rank</td><td>$score</td><td>$pp</td><td>$acc%</td></tr>";
}
?>
</table><br>
<a href="https://gist.github.com/mfaishalakbar/4f7b1ae8c369724ffb66" style="text-decoration:none"><img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="Show Sourcecode on Github Gist" height="32" width="32"></a>
</center>
</body>
</html>
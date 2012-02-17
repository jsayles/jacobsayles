<html>

<?php
   $needed=800;
   $donated=480;
   $progress=round(100 * $donated/$needed);
?>

<head>
<title>Hot Tub Repair Fund</title>
</head>

<body background="water.jpg" bgcolor="#56A5EC">

<div align=center>
<table width=60% cellpadding=5 style="border-width:4px; border-style:ridge; border-color:black;"><tr><td align=center bgcolor="white">
<h1>Hot Tub Repair Fund</h1>

<div align=left style="margin-right:32px; margin-left:32px; margin-bottom:12px; text-indent: 30pt;">
Sadly, a motor in our hot tub has died taking the tub out of commission. 
Unfortunately I will soon be leaving my software job, and giving up the
salary that goes with it, so I have no extra cash to repair it.  It
will cost $800 for the new motor and the labor to install it.  I'm
hoping to draw on the kindness and generosity of those who have enjoyed
it's warmth over the years or who hope to in years to come.  
Please drop a few dollars in the hat and help get the tub back in action again.
</div>
<div align=right style="margin-right: 64px;">
   Thank you,<br>
   <a href="mailto:hottub@jacobsayles.com">Jacob</a>
</div>

<!-- PayPal Donation Button -->
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="11266471">
<input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

<h3>Needed:  $<?php echo $needed ?> - Progress: $<?php echo $donated ?></h3>
<table cellpadding=0 width="90%" style="border-style:solid; border-color:black; border-width=2px"><tr><td>
   <table border=0 cellpadding=0 width="<?php echo $progress ?>%">
      <tr bgcolor="red"><td align=center>
         <font color=white><b><?php echo $progress ?>%</b></font>
      </td></tr>
   </table>
</td></tr></table>

</div>

</body>

<!-- Google Analytics -->
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-3472592-2");
pageTracker._trackPageview();
} catch(err) {}</script>

</html>

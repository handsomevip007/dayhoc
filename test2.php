<?php
echo GetMAC();
echo "<br>//";
function GetMAC(){
    ob_start();
    // system('getmac');
    // system('arp -a');
    system('/usr/sbin/arp -a');
    $Content = ob_get_contents();
    ob_clean();
    // return substr($Content, strpos($Content,'\\')-20, 17);
    return $Content;
}
?>
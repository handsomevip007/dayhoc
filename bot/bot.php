<?php
    include_once('db_model.php');
    $chatId = '';
    $message = '';
    $last_name = '';
    $first_name = '';
    $text = '';

    if(isset($_REQUEST['message'])){
        $chatId = '699177059';
        $message = $_REQUEST['message'];
        $last_name = 'Cường';
        $first_name = 'Phạm';
    }else{
        $path = "https://api.telegram.org/bot1000321996:AAHkHOnJ9lWo-gOUYJVu1Edv_mBSI0CsSmI"; // https://api.telegram.org/bot1000321996:AAHkHOnJ9lWo-gOUYJVu1Edv_mBSI0CsSmI/setwebhook?url=https://cuongpham.fpo.vn/bot/bot.php
        $update = json_decode(file_get_contents("php://input"), TRUE);
        $chatId = $update["message"]["chat"]["id"];
        $last_name = $update["message"]["chat"]["last_name"];
        $first_name = $update["message"]["chat"]["first_name"];
        $message = $update["message"]["text"];
    }

    function send(){
        global $text, $path, $chatId;
        if(isset($_REQUEST['message'])){
            echo '<strong>echo</strong>:<br>'.$text."<br><br>";
            echo '<strong>print_r</strong>:<br>';
            print_r($text);
        }else{
            file_get_contents($path."/sendmessage?chat_id=".$chatId."&text=".urlencode($text));
        }
        // file_get_contents($path."/sendmessage?chat_id=".$chatId."&text=".urlencode($text));
    }


    $hello_array = array("Chào", "Xin chào", "Hi", "Hello");
    if (in_array(ucfirst($message), $hello_array)) {
        $text = $hello_array[mt_rand(0, count($hello_array) - 1)]." ".$first_name." ".$last_name;
        send();
    }

    if (strpos($message, "/test") === 0) {
        $text = "Thành công rồi đó!\n Chat_id: ".$chatId;
        send();
    }
    
    if (strpos($message, "/help") === 0) {
        $reader->setLoadSheetsOnly('cmd');
        $spreadsheet = $reader->load($inputFileName);
        $worksheet = $spreadsheet->getActiveSheet()->toArray();
        //print_r($worksheet->toArray());

        foreach ($worksheet as $row){
            foreach ($row as $cell){
                $text .= $cell." ";
            }
            $text .= "\n";
        }
        send();
    }

?>
<style>
body{white-space: pre-line;}
</style>
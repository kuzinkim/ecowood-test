<?
header('Content-type: text/xml; charset=utf-8');

$config = array(
        'dblogin' => 'admin',
        'dbpassword' => 'd6*gaNsnlduk',
        'dbname' => 'ecowoodcomru'
);

$forms = array(
	"1" => "Узнать цену",
	"2" => "Заявка на лизинг",
	"3" => "Задайте ваш вопрос",
	"4" => "Получить предложение"
);

function addElm($root,$arFields,$project){
	global $DD;

	$root->appendChild($DD->createElement("Проект", "$project"));

        $message = $DD->createElement("message");
        $root->appendChild($message);
        $message->setAttribute("id", $arFields["id"]);
        $message->appendChild($DD->createElement("дата_сообщения", date('d.m.Y H:i:s',strtotime($arFields["date"]))));
        $message->appendChild($DD->createElement("причина_обращения", $arFields["title"]));
        $face = $DD->createElement("контактное_лицо");
        $message->appendChild($face);
        $face->appendChild($DD->createElement("fio", $arFields["fio"]));
        $face->appendChild($DD->createElement("e_mail", $arFields["email"]));
        $face->appendChild($DD->createElement("telephon", $arFields["phone"]));
        $text = $DD->createElement("описание_события");
        $message->appendChild($text);

        $text->appendChild($DD->createCDATASection(str_replace('\r\n',' ', $arFields["message"]. ' '.$arFields["product"])));
}

if($_GET['id']!="b05366da64e1121c7d0251372b47c07a") {header("HTTP/1.0 404 Not Found");header('location: /');exit();}

require_once 'db.class.php';

DB::$user = $config['dblogin'];
DB::$password = $config['dbpassword'];
DB::$dbName = $config['dbname'];
DB::$encoding = 'utf-8';

$results = DB::query("SELECT * FROM forms WHERE date >= %s AND title = %s", date('Y-m-d H:i:s',time()-86400), $forms[intval($_GET['form'])] );

$project = "ecowood.com.ru";
$DD = new DOMDocument();
$root = $DD->createElement("change");
$DD->appendChild($root);

foreach($results AS $row){

	addElm($root,$row,$project);
}

echo $DD->saveXML();

?>

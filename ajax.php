<?
header("Content-type: application/json; charset=utf-8");

$config = array(
        'dblogin' => 'admin',
        'dbpassword' => 'd6*gaNsnlduk',
        'dbname' => 'ecowoodcomru'
);

$error = false;

$title = $_POST['title'];
$name  = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$msg   = $_POST['text'];
$prod  = ($_POST['product'])?:'';

if(!$name || !$phone || !$email){
        
        $error = true;
        die('{"status":"error"}');
}

require_once 'db.class.php';

DB::$user = $config['dblogin'];
DB::$password = $config['dbpassword'];
DB::$dbName = $config['dbname'];
DB::$encoding = 'utf-8';


DB::insert('forms', [
  'id' => NULL,
  'title' => $title,
  'fio' => $name,
  'email' => $email,
  'phone' => $phone,
  'message' => $msg,
  'product' => $prod
]);

if($res = DB::insertId()){
        echo '{"status":"success"}';
}else{
        echo '{"status":"error"}';
}

?>

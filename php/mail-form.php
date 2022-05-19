<?php
$messege = '';
$messege .= '<h1>Рассчет с сайта hockey-stick.pro</h1>';
$messege .= '<p>Хват: '. $_POST['ehvat'] . '</p>';
$messege .= '<p>Флекс: '. $_POST['eflex'] . '</p>';
$messege .= '<p>Загиб: '. $_POST['ezagib'] . '</p>';
$messege .= '<p>Номер: '. $_POST['ephone'] . '</p>';


$to = '79602835254@yandex.ru'.',';
$spectext = '<!DOCTYPE HTML><html><head><title>Заявка на рассчет</title></head><body>';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'from: adm@boroda.website' . "\r\n";

$m = mail($to, 'заявка с сайта hockey-stick.pro', $spectext.$messege.'</body></html>', $headers);

if ($m) {echo 1;} else {echo 0;}

 ?>

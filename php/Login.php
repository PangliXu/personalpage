<?php
require_once("Register.php");
# 定义变量并默认设置为空值
$name1 = $password1 = $number1 = "";
$name1Err = $pass1wordErr = $number1Err = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"])) {
      $name1Err = "Name is required";
   } else {
         $name1 = test_input($_POST["name"]);
         # 检测名字是否只包含字母跟空格
         if (!preg_match("/^[a-zA-Z ]*$/",$name1)) {
         $name1Err = "只允许字母和空格"; 
         }
     }
}
   
?>
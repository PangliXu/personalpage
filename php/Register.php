<?php
# 定义变量并默认设置为空值
$name = $password = $number = "";
$nameErr = $passwordErr = $numberErr = "";
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
  $name = test_input($_POST["name"]);
  $password = test_input($_POST["password"]);
  $number = test_input($_POST["number"]);
}
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    if (empty($_POST["name"]))
    {
        $nameErr = "名字是必需的";
    }
    else
    {
        $name = test_input($_POST["name"]);
        # 检测名字是否只包含字母跟空格
        if (!preg_match("/^[a-zA-Z ]*$/",$name))
        {
          $nameErr = "只允许字母和空格"; 
        }
    }
    
    if (empty($_POST["password"]))
    {
      $passwordErr = "密码是必需的";
    }
    else
    {
        $password = test_input($_POST["password"]);
        # 检测密码是否合法
        if (!preg_match("/^[1-9][a-zA-Z]/",$password))
        {
            $passwordErr = "非法密码格式"; 
        }
    }

    if (empty($_POST["number"]))
    {
      $numberErr = "号码是必需的";
    }
    else
    {
        $number = test_input($_POST["number"]);
        # 检测号码是否合法
        if (!preg_match("/^[0-9]/",$number))
        {
            $numberErr = "非法号码格式"; 
        }
    }
}
function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
echo $name;
echo "<br>";
echo $password;
echo "<br>";
echo $number;

?>
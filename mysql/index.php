<?php

// Соединение с сервером
$connection_id = mysql_connect("127.0.0.1:3306", "myskills_01", "Azaqxsw12345");
if ($connection_id)
{
   echo "Connection to mysql srerver = true<br>";
}
else
{
   echo 'Cant connect to mysql server';
   exit;
}



// Создание базы
$sql = 'CREATE DATABASE product_db';
if (mysql_query($sql, $connection_id))
{
    echo "Base created successfully<br>";
} 
else
{
    echo 'Error: ' . mysql_error() . "<br>";
}


/*
mysql_select_db('product_db', $connection_id);
*/


// Создание таблицы
/*$sql = "CREATE TABLE products
(
   Product_id int NOT NULL,
   Product_name char(40) NOT NULL,
   Product_details char(30) NOT NULL,
   Product_price char(15) NOT NULL,
   Product_warehouse char(11) NOT NULL

)";

if (mysql_query($sql, $connection_id))
{
    echo "Table created successfully<br>";
}
else
{
    echo "Error creating table: " . mysql_error() . "<br>";
*/


/*
// Заполнение таблицы
$sql_2 = "INSERT INTO CLIENTS VALUES (1, 'Ivanov L.K.', 'Address 12', 'City name', '212121454')";


if (mysql_query($sql_2, $connection_id))
{
    echo "Insert processed successfully<br>";
}
else
{
    echo "Error Insert: " . mysql_error();
}
*/


/*
// Выбор базы
$j = mysql_select_db('product_db', $connection_id);
if ($j === true)
{
   echo "mysql_select_db = true<br>";
}
else echo "mysql_select_db = falshe<br>";


//$sql_3 = mysql_query("UPDATE CLIENTS SET city = 'Moscow' WHERE number = 1");


$r = mysql_query("SELECT * FROM products") or die("Invalid query: " . mysql_error());

echo mysql_num_rows($r)."<br><br>";

echo "<table border=1 width=100% dgcolor=gold>";
echo "<tr><td>Product_id</td><td>Product_name</td><td>Product_details</td><td>Product_price</td><td>Product_warehouse</td></tr>";

for ($i=0; $i<mysql_num_rows($r); $i++)
{
echo "<tr>";
$f=mysql_fetch_array($r);
echo "<td>$f[Product_id]</td><td>$f[Product_name]</td><td>$f[Product_details]</td><td>$f[Product_price]</td><td>$f[Product_warehouse]</td>";
echo "</tr>";
}

echo "</table></body></html>";

mysql_close($connection_id);

*/


?>
<html>
<body>

<head>
    <title>Mysql simple examples</title>
    <link href="../css/my.css" rel="stylesheet"/>
</head>




<!-- Вывод всей таблицы -->
<h4>Return all database</h4>
<form method="POST">
    <input type="submit" name="returnAllDatabase" value="Return all database">
</form>


<!-- Запись данных в таблицу -->
<!-- <h4>Write data to database</h4> -->
<form method="POST">
    
   <div class="gCollumn dvFormHolder20x40 bodyColor">
      
      <div class="gCell dvFormHolder100x10 gCenteredContent">Write data to database</div>

      <div class="gCell dvFormHolder100x10 gCenteredContent">Product name</div>
      <div class="gCell dvFormHolder100x10 gCenteredContent"><input type="text" name="productName"></div>

      <div class="gCell dvFormHolder100x10 gCenteredContent">Product details</div>
      <div class="gCell dvFormHolder100x10 gCenteredContent"><input type="text" name="productDetails"></div>

      <div class="gCell dvFormHolder100x10 gCenteredContent">Product price</div>
      <div class="gCell dvFormHolder100x10 gCenteredContent"><input type="text" name="productPrice"></div>

      <div class="gCell dvFormHolder100x10 gCenteredContent">Product warehouse</div>
      <div class="gCell dvFormHolder100x10 gCenteredContent"><input type="text" name="productWarehouse"></div>

      <div class="gCell dvFormHolder100x10 gCenteredContent"><input type="submit" name="writeToDatabase" value="Write to database"></div>

   </div>


    <!-- <p>Product details<input type="text" name="productDetails" /></p>
    <p>Product price<input type="text" name="productPrice" /></p>
    <p>Product warehouse<input type="text" name="productWarehouse" /></p> -->
    <!-- <input type="submit" name="writeToDatabase" value="Write to database"> -->
</form>


<!-- Выборка из таблицы -->
<!-- <h4>Search data options</h4> -->
<form method="POST">

<div class="gCollumn dvFormHolder20x40 bodyColor">

      <div class="gCell dvFormHolder100x10 gCenteredContent">Search data options</div>
      
      <div class="gCell dvFormHolder100x10 gCenteredContent">
         
         <select name="searchData">
         <option value="product_name">productName
         <option value="product_details">productDetails
         <option value="product_price">productPrice
         <option value="product_warehouse">productWarehouse
         </select>

      </div>

      <div class="gCell dvFormHolder100x10 gCenteredContent">Insert value</div>
      <div class="gCell dvFormHolder100x10 gCenteredContent"><input type="text" name="insertValue"></div>

      <div class="gCell dvFormHolder100x10 gCenteredContent"><input type="submit" name="addNewData" value="Search data"></div>

   </div>


    <!-- <select name="searchData">
    <option value="product_name">productName
    <option value="product_details">productDetails
    <option value="product_price">productPrice
    <option value="product_warehouse">productWarehouse
    </select> -->
    <!-- <p>Insert value<input type="text" name="insertValue"/></p>
       <input type="submit" name="addNewData" value="Search data">
    <br> -->
</form>


<!-- Удаление из таблицы -->
<h4>Delete from database</h4>
<form method="POST">
    <p>Lis of ID's to be deleted (1, 2, 3 ...)<input type="text" name="selectIdToDelete" /></p>
    <input type="submit" name="deleteFromDatabase" value="Delete from database">
</form>


<!-- Внесение изменений в таблицу -->
<h4>Update data options</h4>
<form method="POST">
    <select name="updateData">
    <option value="product_name">productName
    <option value="product_details">productDetails
    <option value="product_price">productPrice
    <option value="product_warehouse">productWarehouse
    </select>
    <p>Insert product ID<input type="text" name="productId" /></p>
    <p>Insert value<input type="text" name="updateDataValue" /></p>
    <br><br>
    <input type="submit" name = "updateDataKey" value="Update database">
    <br>
</form>




</body>
</html>




<?php

// Переменные которые будут передаваться через форму
$serverAddress = '127.0.0.1';
$serverLogin = 'myskills_01';
$serverPassword = 'Azaqxsw12345';
$serverDatabase = 'myskills_product_db';
$databaseTable = 'products';

// Соединение с сервером
$connectionId = mysql_connect($serverAddress, $serverLogin, $serverPassword);
if (!$connectionId){
   echo "mysql_connect: " . mysql_error();
   exit;
}

// Выбор базы
if(!mysql_select_db($serverDatabase, $connectionId)){
   echo "mysql_select_db: " . mysql_error();
   exit;
}

// Чтение имен столбцов таблицы
$query = "SHOW COLUMNS FROM $databaseTable";
if($output = mysql_query($query)):
    $columns = array();
    while($result = mysql_fetch_assoc($output)):
        $columns[] = $result['Field'];
    endwhile;
endif;
// echo '<pre>';
// print_r($columns);
// echo '</pre>';


// Вывод всей таблицы
if(isset($_POST["returnAllDatabase"])){

   // Вывод данных
   $r = mysql_query("SELECT * FROM $databaseTable") or die("Invalid query: " . mysql_error());

   echo "<table border=1 width=100% dgcolor=gold>";
   echo "<tr>";
   for ($i=0; $i<count($columns); $i++){
    echo "<td>$columns[$i]</td>";
   }
   echo "</tr>";


   for ($i=0; $i<mysql_num_rows($r); $i++){
      echo "<tr>";
      $f=mysql_fetch_array($r);
      for ($j=0; $j<count($columns); $j++){
       $columnsId = $columns[$j];
       echo "<td>$f[$columnsId]</td>";  
      }   
      echo "</tr>";
     }
   echo "</table></body></html>";
}


// Запись данных в таблицу
if(isset($_POST["writeToDatabase"])){

   if(isset($_POST["productName"])){$productName = $_POST["productName"];}
   if(isset($_POST["productDetails"])){$productDetails = $_POST["productDetails"];}
   if(isset($_POST["productPrice"])){$productPrice = $_POST["productPrice"];}
   if(isset($_POST["productWarehouse"])){$productWarehouse = $_POST["productWarehouse"];}

 // Проверка введенных данных
  if (!empty($productName) and !empty($productDetails) and !empty($productPrice) and !empty($productWarehouse))
  {
    // Определение крайнего номера товара в таблице
    $r = mysql_query("SELECT * FROM $databaseTable") or die("Invalid query: " . mysql_error());
    $number = mysql_num_rows($r);
    $number++; // Выравниваем отсчет снуля до еденицы
    $productId = $number++;

    // Добавление данных в базу
    $sql = "INSERT INTO $databaseTable VALUES ('$productId', '$productName', '$productDetails', '$productPrice', '$productWarehouse');";

    if (!mysql_query($sql, $connectionId)){
      echo "mysql_query: " . mysql_error();
    }
   } 

}


// Выборка из таблицы
if(isset($_POST["addNewData"])){

   if(isset($_POST["searchData"])){$searchData = $_POST["searchData"];}
   if(isset($_POST["insertValue"])){$insertValue = $_POST["insertValue"];}
  
   if (!empty($searchData) and !empty($insertValue))
   {
        $sql = "SELECT * FROM $databaseTable WHERE $searchData LIKE '%$insertValue%'";
        $r = mysql_query($sql) or die("Invalid query: " . mysql_error());

        // Вывод данных
        echo "<table border=1 width=100% dgcolor=gold>";
        echo "<tr>";
        for ($i=0; $i<count($columns); $i++){
         echo "<td>$columns[$i]</td>";
        }
        echo "</tr>";
        
        for ($i=0; $i<mysql_num_rows($r); $i++){
         echo "<tr>";
         $f=mysql_fetch_array($r);
         for ($j=0; $j<count($columns); $j++){
          $columnsId = $columns[$j];
          echo "<td>$f[$columnsId]</td>";  
         }   
         echo "</tr>";
        }
        echo "</table></body></html>";
   }
   
}


// Удаление из таблицы
if(isset($_POST["deleteFromDatabase"])){

   if(isset($_POST["selectIdToDelete"])){$selectIdToDelete = $_POST["selectIdToDelete"];}
  
   if (!empty($selectIdToDelete))
   {
      $selectIdToDelete = explode(", ", $selectIdToDelete);      
      for ($i=0; $i<count($selectIdToDelete); $i++){
      $sql = "DELETE FROM $databaseTable WHERE $columns[0] = $selectIdToDelete[$i]";
      $r = mysql_query($sql) or die("mysql_query: " . mysql_error());
      }
   }
}


// Добавление в таблицу
if(isset($_POST["updateDataKey"])){

   if(isset($_POST["updateData"])){$updateData = $_POST["updateData"];}
   if(isset($_POST["productId"])){$productId = $_POST["productId"];}
   if(isset($_POST["updateDataValue"])){$updateDataValue = $_POST["updateDataValue"];}

   if (!empty($updateData) and !empty($productId) and !empty($updateDataValue))
   {     
      $sql = "UPDATE $databaseTable
      SET $updateData = '$updateDataValue'
      WHERE $columns[0] = '$productId'";      
      $r = mysql_query($sql) or die("Invalid query: " . mysql_error()); 
   }

}



// Закрыть соединение с базой
mysql_close($connectionId);

?>
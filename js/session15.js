function showInfo()
{
    //khi dùng getElementById() trả về 1 biến kiểu string
    var name = document.getElementById("username").value;

    //khi dùng getElementsByClassName trẻ về 1 biến kiểu array
    var pw = document.getElementsByClassName("pass")[0].value;

    var mail = document.getElementsByName("email")[0].value;

    var birth = document.getElementById("birthday").value;

    //tạo 1 đối tượng kiểu Date
    var bday = new Date(birth);
    var today = new Date();
    var age = today.getFullYear() - bday.getFullYear();
    alert("Name: "+name+ "\n"+" Pass: " +pw+ "\n"+" Mail: " + mail+ " Birthday: " +birth+ " Age: " +age);
}
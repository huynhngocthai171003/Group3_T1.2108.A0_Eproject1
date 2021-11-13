function showInfo() {
    var name = document.getElementById("username").value;
    var gen = document.querySelector("input[name='gender']:checked").value;
    // var hobb = document.getElementsByName("hob")[0].value;
    var checkbox = document.getElementsByName("hob");
    var result ="";
    for (var i = 0; i < checkbox.length; i++)
    {
        if (checkbox[i].checked == true)
        {
            result = result + " " + checkbox[i].value + " ,";
        }
    }
    var birth = document.getElementsByClassName("birthday")[0].value;
    var add = document.getElementById("address").value;
    var mail = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var com = document.getElementsByName("comment")[0].value;

    var bday = new Date(birth);
    var today = new Date();
    var age = today.getFullYear() - bday.getFullYear();
    
    if(age < 17) {
        alert("Độ tuổi thành viên phải từ 17 tuổi trở lên.")
        return false;
    }
    else{
        
        alert("Member Information" + "\n" + "-----------------------" + "\n" +
        "Name: " + name + "\n" +
        "Gender: " + gen + "\n" +
        "Hobbies: " + result + "\n" +
        "Birthday: " + birth + "\n" +
        "Address: " + add + "\n" +
        "Email: " + mail + "\n" +
        "Phone: " + phone + "\n" +
        "City: " + city + "\n" +
        "Comment: " + com + "\n")
    }
    
    

}
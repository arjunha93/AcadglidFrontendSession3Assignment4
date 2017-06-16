function validate() {
    
   //alert("asdfghj");
    var city = document.getElementById("city").value;//Check the city is selected
    var course = document.getElementById("course").value;
    var err="";//Check the course is selected
    
    //Add the theerrors to the error string to display
    if(city == 0){
        err +="City Can\'t Be blank..!!";
    }
    if(course == 0){
        err+= "\nCourse Canot be blank..!!"
    }
    if (document.getElementById("s_male").checked == false){
         if (document.getElementById("s_female").checked == false){
            err+="\nPlease select the gender";
        }
    }
    
    //if any error,display else proceed
  if(err.length >0){
        alert(err);
        return false;
    }else{
        alert("Form validated Succesfully....!!!");
        return true;
    }
}
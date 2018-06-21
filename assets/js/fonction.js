function getNumber(){
  //variable description
  var age = document.getElementById('age').value;
  var regex = /^[0-9]{0,3}/
  if (regex.test(age)){
  if (age >= 18 && age <= 125){
    alert('vous etes majeur');
  }else if (age >=1 && age <= 17){
      alert('vous etes mineur');
    } else {
      alert('rentrer un age valide');
    }
  }
}

import 'dart:html'; 
void main() { 
   querySelector('#btnWish').onClick.listen(wishHandler); 
}  
void wishHandler(MouseEvent event){ 
   String name = (querySelector('#txtName')  as InputElement).value; 
   querySelector('#display').text = 'Heloo Your Name is '+ name; 
}
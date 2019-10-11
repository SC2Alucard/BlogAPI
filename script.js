$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});


//Login Script
function login(){
	
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	var data = {
		
		username: username,
		email: username,
		password: password
	}
	console.log(data);

	fetch(`${API_PATH}/login`, {
		method: 'POST', 
		body: JSON.stringify(data),
		headers:{
		  'Content-Type': 'application/json'
		}
	  }).then(res => res.json())
	  .then(response => console.log('Success:', response))
	  .catch(error => console.error('Error:', error));
	  
	  
}

//Register Script

function register(){
	
  var username = document.getElementById('reg_username').value;
  var email = document.getElementById('reg_email').value;
	var password = document.getElementById('reg_password').value;

	var data = {
		
		name: username, //when sending request, variables names need to be named exactly as they are recieved 
		email: email,
		password: password
	}
	console.log(data);

	fetch(`${API_PATH}/register`, {
		method: 'POST', 
		body: JSON.stringify(data),
		headers:{
		  'Content-Type': 'application/json'
		}
	  }).then(res => res.json())
	  .then(response => console.log('Success:', response))
	  .catch(error => console.error('Error:', error));
	  
	  
}


window.onload = function(){

  document.getElementById("btnLogin").addEventListener("click", function(){
    login();
  });

	document.getElementById("btnRegister").addEventListener("click", function(){
    register();
    
	});
}

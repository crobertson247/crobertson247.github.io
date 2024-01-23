async function deleteUser(email, password) {
    try{
      const response = await fetch(`https://us-central1-presentpal-5de5e.cloudfunctions.net/app/DeleteUser?email=${email}&password=${password}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ "email": email,  "password": password }),
      });

      const result = await response.json();
      //get status code
      const statusCode = response.status;
      //nothing is being printed from here on out 
      console.log(result);

    
      if (statusCode === 200) {
        // User was successfully deleted
        alert('User deleted successfully');
      } else if(statusCode === 400){
            alert("Email or password is incorrect");
      }else{
          // User deletion failed, check the 'error' property for details
          alert('Error deleting user please contact support for further assistance');
      }
    }catch(err){
        console.log('Error: ' + err);
        alert("in catch block")
    } 
  }
  function clicked(e)
  {
      if(!confirm('Are you sure?')) {
          e.preventDefault();
          console.log('Account not deleted');
      }else{
          //perform delete here using cloud function
          console.log('Starting Account delete');
          try{
          const email = document.getElementById('email').value;
          console.log('email: ' + email);
          const password = document.getElementById('password').value;
          deleteUser(email, password);
          }catch(err){
              console.log('Error: ' + err);
          }
      }
  }
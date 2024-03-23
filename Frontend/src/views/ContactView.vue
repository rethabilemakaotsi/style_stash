<template>
    <body class="cont">
    <div class="contact">
        <div class="row justify-content-center">
            <div class="col-5">
                <div class="details">
                    <h2 class="contact-header m-5">Let Talk.</h2>
                    <p class="address">123 flack St. boston 8</p>
                    <p class="cell">(021) 256-257-7890</p>
                    <p class="email">stylestash@gmail.com</p>
                    <p class="social">
                        Social : 
                        <i class="bi bi-facebook" ></i>
                        <i class="bi bi-twitter-x "></i>
                        <i class="bi bi-instagram"></i>
                    </p>
                </div>
            </div>
            <div class="col-5">

                <div class="form-container">
                    <form
              action="https://formspree.io/f/myyrzeyk"
              method="POST">
              <h4>Leave a message.</h4>
              
              <label for="name">Name</label>
              <input name="name" id="name" type="text" required>
            
              <label for="number">Contact Number</label>
              <input name="number" id="number" type="tel" required>
            
              <label for="email">Your Email</label>
              <input name="email" id="email" type="email" required>
            
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="4" required></textarea>
            
              <button class="btn" type="submit">Submit</button>
              </form>
            </div>
            </div>
        </div>
    </div>
</body>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.cont{
    height:100vh;
    background-color:#252926 ;
}
h2{
    text-transform: uppercase;
    margin-left: 20px;
    color: #8f6f3b;
    width: 50%;
    text-align: center;
    font-family: 'DM Sans';

}
.details{
    margin-top: 150px;
}
#info {
    font-family: 'forum';
    font-size: 25px;
    color: #af8c53;
    text-align: center;
}

p {
    margin-left: 20px;
}

.address,
.cell,
.email {
    font-family: 'Courier New', Courier, monospace;
    color: #af8c53;
    border: 2px solid #af8c53;
    padding: 15px;
    border-radius: 30px;
    background-color: transparent;
    width: 60%;
    margin-bottom: 30px;
}
.social{
    font-family: 'Courier New', Courier, monospace;
    color:#252926;
    border: 2px solid #af8c53;
    padding: 15px;
    border-radius: 30px;
    background-color:#af8c53 ;
    width: 60%;

}
.social i{
    margin-right: 10px;

}
.form-container {
    width: 400px; 
    margin-right: 20px;
    margin-top: 40px;
  

}

.form-container form {
    background-color: #8f6f3b;
    padding: 20px;
    border-radius: 10px;
}

.form-container form h4 {
    margin-top: 0;
    font-size: 24px;
    color: black;
    font-family: 'DM Sans'
}

.form-container form label {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
    color: black;
    font-family: 'Courier New', Courier, monospace;
}

.form-container form input[type="text"],
.form-container form input[type="tel"],
.form-container form input[type="email"],
.form-container form textarea {
    width: calc(100% - 12px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #252926;
    border-radius: 5px;
    background-color: #252926;
}

.form-container form button.btn {
    background-color: #252926;
    color: #af8c53;
    border: none;
    font-family: 'DM Sans';
    padding: 12px 20px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.form-container form button.btn:hover {
    background-color: #8f6f3b;
}




</style>

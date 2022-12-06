class User{
    first_name
    last_name
    birth_date
    city
    street
    house_num
    user_email
    user_name
    user_password
   
   
   

    constructor (first_name, last_name,birth_date,city,street,house_num,user_email,user_name,user_password)
    {
        this.first_name = first_name
        this.last_name = last_name
        this.birth_date = birth_date
        this.city = city
        this.street = street
        this.house_num = house_num
        this.user_email = user_email
        this.user_name = user_name
        this.user_password = user_password
      

    }
   getBirthdate()
    {
        let parts = this.birth_date.split("-");
        let str =  parts[2] + "-" + parts[1] + "-" + parts[0]
      
      return `${str}`;
    }

     getFullName()
    {
        return `${this.first_name} ${this.last_name} `;
    }

    updateDetails(first_name, last_name,birth_date,city,street,house_num, user_email,user_name,user_password)
    
    {
        this.first_name = first_name
        this.last_name = last_name
        this.birth_date = birth_date
        this.city = city
        this.street = street
        this.house_num = house_num
        this.user_email = user_email
        this.user_name = user_name
        this.user_password = user_password
        
        
       


    }
    
}


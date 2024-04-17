import React, {useState}from 'react'
import Ngo_menu from './Ngo_menu'
const Add_branch = () => {
  const [user,setUser] = useState({
    name:"",contact:"",address:"",email:"",dob:"",aadhar:"",password:""
  });

  let name, value;
    const handleInputs = (e) =>
    {
      console.log(user);
      name =e.target.name;
       value = e.target.value;

      setUser({...user, [name]:value});
    }

    const PostData = async (e) =>
    {
      e.preventDefault();
      const {fullname, phonenumber, address, pincode, state, city, email, aadhar, password} = user;

      const res = await fetch("http://localhost:8000/api/users",{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name:fullname, phone:phonenumber, address, pincode, state, city, email, aadharCard:aadhar, password
        })

      });

       const data = await res.json();
       console.log(data);
      if(res.status === 422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registertation");
      }
      else{
        window.alert("Successful Registration");
        console.log("Successful Registertation");
        
       
      }
    }
  return (
    <>
        <div className="min-h-0.5 bg-grey-100 text-gray-900 flex justify-center">
    <div className="max-w-screen-l m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
    
        <Ngo_menu/>
    <div className="flex-1 text-center hidden lg:flex min-h-0.5 ">
      <div className=" flex flex-col gap-8 m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
        <div className=''>
       
<form method = "POST" onSubmit={PostData}>

        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-2">
              <label
                    className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    for="name"
                >
                Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="name"
                name="name"
                placeholder="Enter branch name"
                required
                type='text'
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"      
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                required                
              />
            </div>
    
            <div className="space-y-2">
              <label
                    className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="register_no"
                >
                Register_no
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="regisyter_no"
                name="regisyter_no"              
                placeholder="Enter pRegistertion number"
                type='text'
                required
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="location"
              >
                location
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="location" 
                name="location"
                type="text"
                placeholder="Enter Location"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="contact"
              >
                contact
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                Color
                id="contact"
                name="contact"              
                placeholder="Enter contact number"
                required               
              />
            </div>

          </div>
          

      <button class="bg-green-500 text-white text-2l font-medium px-4 py-2 rounded shadow loginbutton register_button" >REGISTER
       </button>
      
        </div>
      </form>




        </div>
</div>
</div>
</div>
</div>
    
    </>
  )
}
export default Add_branch
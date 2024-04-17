import React from 'react'
import Ngo_menu from './Ngo_menu';
const Add_pet = () => {
  return (
   
    <div className="min-h-0.5 bg-grey-100 text-gray-900 flex justify-center">
    <div className="max-w-screen-l m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
    
        <Ngo_menu/>
    <div className="flex-1 text-center hidden lg:flex min-h-0.5 ">
      <div className=" flex flex-col gap-8 m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
        <div className=''>
       
<form method = "POST">

        
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
                placeholder="Enter pet name"
                required
                type='text'
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="age"
              >
                Age
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                Age
                id="age"
                name="age"   
                type='number'
                size="1"
                maxLength="1"           
                placeholder="Enter pet age"
                required=""                
              />
            </div>
    
            <div className="space-y-2">
              <label
                    className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="species"
                >
                Species
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="species"
                name="species"              
                placeholder="Enter pet species"
                type='text'
                required=""
                size="30"
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="gender"
              >
                Gender
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="gender" 
                name="gender"
                placeholder="Select Gender"
                list="genders"
                required
              />
              <datalist id="genders">
                <option value="Male"></option>
                <option value="Female"></option>            
                <option value="Unknown"></option>
              </datalist>
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="color"
              >
                Color
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                Color
                id="color"
                name="color"              
                placeholder="Enter pet color"
                required               
              />
            </div>

            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="size"
              >
                Size
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                id="size"
                name="size"
                
                placeholder="Enter your size"
                list="sizes"
                required=""
              />
               <datalist id="sizes">
                <option value="Small"></option>
                <option value="Medium"></option>
                <option value="Large"></option>
                <option value="Unknown" ></option>
                </datalist>
            </div>    

            <div className="space-y-2">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="image"
              >
                Image
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black"
                Image
                id="image"
                name="image"   
                type="file"
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

  )
}
export default Add_pet
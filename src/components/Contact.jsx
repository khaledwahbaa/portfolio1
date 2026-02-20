import { useState } from "react";
const contact = ({darkMode}) => {

const[formData, setFormData]=useState({
firstName:"",
lastName:"",
email:"",
phone:"",
message:"",
});

const handleChange=(e)=>{
    setFormData({
        ...formData,[e.target.name]:e.target.value,
    });
};
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent Successfully ");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }

  } catch (error) {
    console.error(error);
    alert("Error sending message ");
  }
};
    {/*---------------------------------------------------------------*/}
  return (
   <section
   id="contact"
   style={{
    backgroundColor : darkMode? '#111827': '#f9fafb'
   }}
   className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
    <div
    className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-10 md:mb-12"
    data-aos='fade-up'>
        <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
        style={{
            color: darkMode ? 'white':'#1f2937'
        }}>
            Get In <span 
            style={{
                background :'linear-gradient(to right,#f97316,#f59e0b)',
                WebkitBackgroundClip : 'text',
                backgroundClip : 'text',
                color: 'transparent'
            }}>
                Touch
        </span>
     </h2>
<p 
className="text-base sm:text-lg md:text-xl"
style={{
    color: darkMode? '#d1d5db':'#67280'
}}>
    Let's discuss your project
</p>
<form 
style={{
    background:darkMode ? 'linear-gradient(to right,#1f2937,#111827'
    : 'linear-gradient(to right,#ffffff,#f9fafb)',
    borderColor:darkMode?'#374151':'#e5e7eb'
    }}
    className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
    data-aos='fade-left'
    onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3sm:gap-4 mb-3 sm:mb-4">
           
            <input
            type='text'
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
        onChange={handleChange}
            style={{
                backgroundColor: darkMode?'#374151':'#faede3',
                borderColor: darkMode?'white':'#1f2937'
            }}
            className="w-full px-3 sm:px-4 py-2 sm:py-3
            rounded-lg text-sm:text-base foucs:border-oranage-500 
            focus:ring-2 focus:ring-orange-500/20 transition-all
            mb-3 sm:mb-4"
            required/>

            <input
            type='text'
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
        onChange={handleChange}
            style={{
                backgroundColor: darkMode?'#374151':'#faede3',
                borderColor: darkMode?'white':'#1f2937'
            }}
            className="w-full px-3 sm:px-4 py-2 sm:py-3
            rounded-lg text-sm:text-base foucs:border-oranage-500 
            focus:ring-2 focus:ring-orange-500/20 transition-all
            mb-3 sm:mb-4"
            required/>
            <input
            type='email'
            name="email"
            placeholder="Email Address"
            style={{
                backgroundColor: darkMode?'#374151':'#faede3',
                borderColor: darkMode?'white':'#1f2937'
            }}
            className="w-full px-3 sm:px-4 py-2 sm:py-3
            rounded-lg text-sm:text-base foucs:border-oranage-500 
            focus:ring-2 focus:ring-orange-500/20 transition-all
            mb-3 sm:mb-4"
            value={formData.email}
            onChange={handleChange}
            required/>
             <input 
            type='tel'
            name="phone"
            placeholder="Mobile Number"
            style={{
                backgroundColor: darkMode?'#374151':'#faede3',
                borderColor: darkMode?'white':'#1f2937'
            }}
            className="w-full px-3 sm:px-4 py-2 sm:py-3
            rounded-lg text-sm:text-base foucs:border-oranage-500 
            focus:ring-2 focus:ring-orange-500/20 transition-all
            mb-3 sm:mb-4"
            value={formData.phone}
            onChange={handleChange}
            required/>
            <textarea
            rows='4'
            name="message"
            placeholder="Message"
            style={{
                backgroundColor: darkMode?'#374151':'#faede3',
                borderColor: darkMode?'white':'#1f2937'
            }}
            className="w-full px-3 sm:px-4 py-2 sm:py-3
            rounded-lg text-sm:text-base foucs:border-oranage-500 
            focus:ring-2 focus:ring-orange-500/20 transition-all
            mb-3 sm:mb-4"
            value={formData.message}
            onChange={handleChange}
            required/>
        </div>
        <button type= "submit"
        className="w-full sm:w-auto inline-flex items-center justify-center
      text-white bg-linear-to-r from-gray-900 to-gray-700 border-0 py-3 px-6 sm:px-8
      hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
      rounded-full text-base sm:text-lg font-semibold
      transition-all duration-300 transform">
           Send message 
        </button>
    </form>
    </div>
    </div>
   </section>
  )
}

export default contact
  
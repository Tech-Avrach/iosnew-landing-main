// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "../../../src/components/ui/label"

// export function DialogDemo() {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className="w-full md:w-1/3">Make An Enquery</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Make a request</DialogTitle>
//           {/* <DialogDescription>
//             Make changes to your profile here. Click save when you're done.
//           </DialogDescription> */}
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Full name
//             </Label>
//             <Input
//               id="name"
//             //   defaultValue="Pedro Duarte"
//               className="col-span-3"
//             />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="password" className="text-right">
//               Password
//             </Label>
//             <Input
//               id="password"
//             //   defaultValue="@peduarte"
//               className="col-span-3"
//             />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="email" className="text-right">
//               Email 
//             </Label>
//             <Input
//               id="email"
//             //   defaultValue="@peduarte"
//               className="col-span-3"
//             />
//           </div>

//           {/* <div className="grid grid-cols-4 items-center gap-4">
//           <Label htmlFor="type" className="text-right">
//           <select
//           name="queryType"
//           value={formData.queryType}
//           onChange={handleChange}
//           required
//           className="col-span-3"
//         >
//           <option value="">Query Type</option>
//           <option value="Battery Issues">Battery Issues</option>
//           <option value="App Issues">App Issues</option>
//           <option value="iOS Updates">iOS Updates</option>
//           <option value="iCloud Support">iCloud Support</option>
//           <option value="Apple ID">Apple ID</option>
//         </select>
//         </Label>
//         </div> */}
//         </div>
//         <DialogFooter>
//           <Button type="submit">Submit</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }


import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  // Initialize form state
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    queryType: "",
    deviceType: "",

  })

  // const [formData1, setFormData1] = useState({
  //   name: "",
  //   password: "",
  //   email: "",
  //   deviceType: "",
  // })
  // Handle input changes
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleChange1 = (e: { target: { name: string; value: string} }) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }


  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Perform form submission logic here
    console.log("Form Submitted:", formData)

    // Reset form if needed
    setFormData({
      name: "",
      password: "",
      email: "",
      queryType: "",
      deviceType: "",
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-50 md:w-1/3">Make An Inquiry</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a Request</DialogTitle>
          {/* Optional Description */}
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Full Name Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="col-span-3"
                placeholder="Enter your full name"
              />
            </div>

            {/* Password Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="col-span-3"
                placeholder="Enter your password"
              />
            </div>

            {/* Email Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="col-span-3"
                placeholder="Enter your email"
              />
            </div>

            {/* Query Type Select Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="queryType" className="text-right">
                Query Type
              </Label>
              <select
                id="queryType"
                name="queryType"
                value={formData.queryType}
                onChange={handleChange}
                required
                className="col-span-3 p-2 border border-gray-300 text-black rounded"
              >
                <option value="">Select Query Type</option>
                <option value="Battery Issues">Battery Issues</option>
                <option value="App Issues">App Issues</option>
                <option value="iOS Updates">iOS Updates</option>
                <option value="iCloud Support">iCloud Support</option>
                <option value="Apple ID">Apple ID</option>
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="queryType" className="text-right">
                Device Type
              </Label>
              <select
                id="deviceType"
                name="deviceType"
                value={formData.deviceType}
                onChange={handleChange1}
                required
                className="col-span-3 p-2 border border-gray-300 text-black rounded"
              >
                <option value="">Select Device Type</option>
                <option value="iPhone Issues">iPhone</option>
                <option value="iPad Issues">iPad</option>
                <option value="Apple Issues">Apple watch</option>
              
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
